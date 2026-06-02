export function displayName(user) {
  if (!user) return 'Sin asignar';
  return user.displayName ?? user.emailAddress ?? 'Desconocido';
}

export function statusName(issue) {
  return issue.fields?.status?.name ?? '—';
}

export function issueTypeName(issue) {
  return issue.fields?.issuetype?.name ?? '—';
}

export function isDone(issue) {
  const cat = issue.fields?.status?.statusCategory?.key;
  return cat === 'done' || statusName(issue).toLowerCase() === 'done';
}

/** Tareas de trabajo (excluye épicas y subtareas — como el resumen del tablero Jira). */
export function isWorkIssue(issue) {
  const t = issueTypeName(issue).toLowerCase();
  if (t === 'epic' || t === 'subtask') return false;
  if (issue.fields?.issuetype?.subtask) return false;
  return true;
}

export function groupBy(arr, keyFn) {
  const map = new Map();
  for (const item of arr) {
    const key = keyFn(item);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(item);
  }
  return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0], 'es'));
}

export function countByStatus(issues) {
  return groupBy(issues, (i) => statusName(i)).map(([status, list]) => ({
    status,
    count: list.length,
  }));
}

export function buildEpicSummary(issues, epics) {
  const epicByKey = new Map(epics.map((e) => [e.key, e]));
  const childrenByEpic = new Map();

  for (const issue of issues) {
    if (issueTypeName(issue).toLowerCase() === 'epic') continue;
    const parent = issue.fields?.parent;
    const epicKey = parent?.key ?? issue.fields?.epic?.key ?? null;
    const label = epicKey
      ? (epicByKey.get(epicKey)?.fields?.summary ?? epicKey)
      : 'Sin épica';
    if (!childrenByEpic.has(label)) childrenByEpic.set(label, { total: 0, done: 0 });
    const bucket = childrenByEpic.get(label);
    bucket.total += 1;
    if (isDone(issue)) bucket.done += 1;
  }

  for (const epic of epics) {
    const label = epic.fields?.summary ?? epic.key;
    if (!childrenByEpic.has(label)) {
      childrenByEpic.set(label, { total: 0, done: isDone(epic) ? 1 : 0 });
    }
  }

  return [...childrenByEpic.entries()]
    .map(([name, stats]) => ({
      name,
      total: stats.total,
      done: stats.done,
      pct: stats.total ? Math.round((stats.done / stats.total) * 100) : stats.done ? 100 : 0,
    }))
    .sort((a, b) => b.total - a.total);
}

/** Burndown estimado por fechas de creación/resolución del proyecto */
export function burndownFromTimeline(issues) {
  const pool = issues.filter((i) => issueTypeName(i).toLowerCase() !== 'epic');
  if (!pool.length) return null;

  const total = pool.length;
  const start = new Date(
    Math.min(...pool.map((i) => new Date(i.fields.created).getTime())),
  );
  const end = new Date();
  const dayMs = 86400000;
  const maxDays = 90;
  const span = Math.ceil((end - start) / dayMs);
  const step = Math.max(1, Math.ceil(span / maxDays));

  const points = [];
  for (let t = start.getTime(); t <= end.getTime(); t += step * dayMs) {
    const dayEnd = new Date(t);
    dayEnd.setHours(23, 59, 59, 999);
    let remaining = 0;
    for (const issue of pool) {
      const created = new Date(issue.fields.created);
      if (created > dayEnd) continue;
      const resolved = issue.fields.resolutiondate
        ? new Date(issue.fields.resolutiondate)
        : null;
      if (!resolved || resolved > dayEnd) remaining += 1;
    }
    const elapsed = (t - start.getTime()) / (end.getTime() - start.getTime() || 1);
    points.push({
      label: dayEnd.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' }),
      ideal: Math.max(0, Math.round(total * (1 - elapsed))),
      remaining,
    });
  }
  return {
    sprintName: 'Proyecto EQ (acumulado)',
    points,
    fallback: true,
  };
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

export function renderHtml(ctx) {
  const {
    projectKey,
    boardId,
    baseUrl,
    generatedAt,
    total,
    totalAll,
    done,
    inProgress,
    todo,
    byAssignee,
    byStatus,
    epics,
    boardColumns,
    burndown,
    activeSprint,
    statusImageDataUri,
    unassignedWorkCount,
  } = ctx;

  const pctDone = total ? Math.round((done / total) * 100) : 0;
  const burndownLabels = JSON.stringify(burndown?.points?.map((p) => p.label) ?? []);
  const burndownIdeal = JSON.stringify(burndown?.points?.map((p) => p.ideal) ?? []);
  const burndownRemaining = JSON.stringify(burndown?.points?.map((p) => p.remaining) ?? []);

  const assigneeRows = byAssignee
    .map(([name, list]) => {
      const d = list.filter(isDone).length;
      return `<tr><td>${escapeHtml(name)}</td><td>${list.length}</td><td>${d}</td><td>${list.length - d}</td></tr>`;
    })
    .join('');

  const statusRows = byStatus
    .map((s) => `<tr><td>${escapeHtml(s.status)}</td><td>${s.count}</td></tr>`)
    .join('');

  const epicRows = epics
    .map(
      (e) =>
        `<tr><td>${escapeHtml(e.name)}</td><td>${e.done}/${e.total}</td><td>${e.pct}%</td></tr>`,
    )
    .join('');

  const columnHtml = `<div class="columns">${boardColumns
    .map(
      (c) =>
        `<div class="col"><strong>${escapeHtml(c.name)}</strong><span>${c.count}</span></div>`,
    )
    .join('')}</div>`;

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <title>Informe Jira — ${escapeHtml(projectKey)}</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.min.js"></script>
  <style>
    * { box-sizing: border-box; }
    body { font-family: 'Segoe UI', system-ui, sans-serif; color: #172b4d; margin: 0; padding: 24px 28px; font-size: 11px; line-height: 1.35; }
    h1 { font-size: 22px; margin: 0 0 4px; color: #0052cc; }
    h2 { font-size: 14px; margin: 14px 0 6px; border-bottom: 2px solid #dfe1e6; padding-bottom: 3px; page-break-after: avoid; }
    h2.burndown-title { margin-top: 18px; page-break-before: auto; }
    .meta { color: #5e6c84; margin-bottom: 12px; }
    .kpi { display: flex; gap: 10px; flex-wrap: wrap; margin: 10px 0 12px; }
    .kpi div { background: #f4f5f7; border-radius: 8px; padding: 12px 16px; min-width: 120px; }
    .kpi strong { display: block; font-size: 20px; color: #0052cc; }
    table { width: 100%; border-collapse: collapse; margin: 4px 0 10px; page-break-inside: avoid; }
    th, td { border: 1px solid #dfe1e6; padding: 6px 8px; text-align: left; }
    th { background: #ebecf0; }
    .columns { display: flex; gap: 8px; flex-wrap: wrap; }
    .col { flex: 1; min-width: 100px; background: #deebff; border-radius: 6px; padding: 10px; text-align: center; }
    .col span { display: block; font-size: 18px; font-weight: bold; margin-top: 4px; }
    .chart-wrap { max-width: 640px; height: 260px; margin: 12px 0; }
    .muted { color: #5e6c84; font-style: italic; margin: 2px 0 8px; font-size: 10px; }
    .status-img { text-align: center; margin: 4px 0 10px; }
    .status-img img { max-width: 380px; width: 100%; height: auto; }
  </style>
</head>
<body>
  <h1>Informe de gestión — Jira ${escapeHtml(projectKey)}</h1>
  <p class="meta">
    ${escapeHtml(baseUrl)} · Tablero #${boardId}
    ${activeSprint ? ` · ${escapeHtml(activeSprint)}` : ''}
    <br />Generado: ${escapeHtml(generatedAt)}
  </p>

  ${
    statusImageDataUri
      ? `<h2>Resumen de estado (Jira)</h2>
         <p class="muted">Captura del panel del proyecto en Jira Software.</p>
         <p class="status-img"><img src="${statusImageDataUri}" alt="Resumen de estado Jira" /></p>`
      : ''
  }

  <h2>Estadísticas de completación</h2>
  <p class="muted">Conteo de trabajo (Tarea, Story, Bug — sin épicas ni subtareas). Total en Jira incl. épicas: ${totalAll ?? total}.</p>
  <div class="kpi">
    <div><span>Actividades</span><strong>${total}</strong></div>
    <div><span>Completadas</span><strong>${done}</strong></div>
    <div><span>En curso</span><strong>${inProgress}</strong></div>
    <div><span>Pendientes</span><strong>${todo}</strong></div>
    <div><span>% completado</span><strong>${pctDone}%</strong></div>
  </div>

  <h2>Estado del tablero</h2>
  ${columnHtml}

  <h2>Tareas por persona</h2>
  <p class="muted">Solo issues asignadas (épicas excluidas; en Jira las épicas suelen ir sin responsable).</p>
  <table>
    <thead><tr><th>Persona</th><th>Total</th><th>Hechas</th><th>Pendientes</th></tr></thead>
    <tbody>${assigneeRows || '<tr><td colspan="4">Todas las tareas tienen responsable asignado.</td></tr>'}</tbody>
  </table>
  ${
    unassignedWorkCount
      ? `<p class="muted">${unassignedWorkCount} tareas de trabajo (Story/Tarea/Bug) siguen sin campo «Persona asignada» en Jira; no se suman en la tabla (suelen ser historias contenedor).</p>`
      : ''
  }

  <h2>Distribución por estado</h2>
  <table>
    <thead><tr><th>Estado</th><th>Cantidad</th></tr></thead>
    <tbody>${statusRows}</tbody>
  </table>

  <h2>Resumen de epics</h2>
  <table>
    <thead><tr><th>Épica</th><th>Progreso</th><th>%</th></tr></thead>
    <tbody>${epicRows}</tbody>
  </table>

  <h2 class="burndown-title">Gráfico de burndown${burndown?.fallback ? ' (proyecto)' : ''}</h2>
  ${
    burndown?.points?.length
      ? `<p><strong>${escapeHtml(burndown.sprintName)}</strong></p>
         <div class="chart-wrap"><canvas id="burndown"></canvas></div>`
      : '<p class="muted">Sin datos para burndown.</p>'
  }

  <script>
    const labels = ${burndownLabels};
    const ideal = ${burndownIdeal};
    const remaining = ${burndownRemaining};
    if (labels.length && document.getElementById('burndown')) {
      new Chart(document.getElementById('burndown'), {
        type: 'line',
        data: {
          labels,
          datasets: [
            { label: 'Ideal', data: ideal, borderColor: '#97a0af', borderDash: [6,4], tension: 0.1, fill: false },
            { label: 'Restante', data: remaining, borderColor: '#0052cc', backgroundColor: 'rgba(0,82,204,0.1)', tension: 0.1, fill: true }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom' } },
          scales: { y: { beginAtZero: true } }
        }
      });
    }
  </script>
</body>
</html>`;
}

export function buildReportContext(allIssues, epicIssues, meta) {
  const workIssues = allIssues.filter(isWorkIssue);
  const assignedWork = workIssues.filter((i) => i.fields?.assignee);

  const done = workIssues.filter(isDone).length;
  const inProgress = workIssues.filter(
    (i) => i.fields?.status?.statusCategory?.key === 'indeterminate',
  ).length;
  const todo = workIssues.length - done - inProgress;

  const unassignedWork = workIssues.filter((i) => !i.fields?.assignee);
  const byAssignee = groupBy(assignedWork, (i) => displayName(i.fields.assignee));
  const byStatus = countByStatus(workIssues);
  const epics = buildEpicSummary(allIssues, epicIssues);
  const statusOrder = ['To Do', 'In Progress', 'Done', 'Revisión'];
  const uniqueStatuses = [...new Set(workIssues.map(statusName))];
  uniqueStatuses.sort(
    (a, b) =>
      (statusOrder.indexOf(a) === -1 ? 99 : statusOrder.indexOf(a)) -
      (statusOrder.indexOf(b) === -1 ? 99 : statusOrder.indexOf(b)),
  );
  const boardColumns = uniqueStatuses.map((name) => ({
    name,
    count: workIssues.filter((i) => statusName(i) === name).length,
  }));
  const burndown = burndownFromTimeline(workIssues);

  return {
    projectKey: meta.projectKey,
    boardId: meta.boardId,
    baseUrl: meta.baseUrl,
    generatedAt: meta.generatedAt,
    total: workIssues.length,
    totalAll: allIssues.length,
    done,
    inProgress,
    todo,
    byAssignee,
    byStatus,
    epics,
    boardColumns,
    burndown,
    activeSprint: burndown?.sprintName,
    statusImageDataUri: meta.statusImageDataUri ?? null,
    unassignedWorkCount: unassignedWork.length,
  };
}
