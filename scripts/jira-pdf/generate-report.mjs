/**
 * Genera docs/jira.pdf con estadísticas del proyecto Jira (proyecto EQ).
 *
 * Uso:
 *   cd scripts/jira-pdf
 *   cp .env.example .env   # editar credenciales
 *   npm install
 *   npm run report
 */

import 'dotenv/config';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..', '..');
const OUT_HTML = join(REPO_ROOT, 'docs', 'jira-report.html');
const OUT_PDF = join(REPO_ROOT, 'docs', 'jira.pdf');

const {
  JIRA_BASE_URL,
  JIRA_EMAIL,
  JIRA_API_TOKEN,
  JIRA_PROJECT_KEY = 'EQ',
  JIRA_BOARD_ID = '34',
} = process.env;

function requireEnv(name, value) {
  if (!value?.trim()) {
    console.error(`Falta ${name}. Copia .env.example a .env y rellena las credenciales.`);
    process.exit(1);
  }
}

requireEnv('JIRA_BASE_URL', JIRA_BASE_URL);
requireEnv('JIRA_EMAIL', JIRA_EMAIL);
requireEnv('JIRA_API_TOKEN', JIRA_API_TOKEN);

const authHeader =
  'Basic ' + Buffer.from(`${JIRA_EMAIL}:${JIRA_API_TOKEN}`).toString('base64');

async function jiraFetch(path, options = {}) {
  const url = path.startsWith('http') ? path : `${JIRA_BASE_URL.replace(/\/$/, '')}${path}`;
  const res = await fetch(url, {
    ...options,
    headers: {
      Accept: 'application/json',
      Authorization: authHeader,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Jira ${res.status} ${path}: ${body.slice(0, 500)}`);
  }
  return res.json();
}

async function searchAllIssues(jql, fields) {
  const issues = [];
  let nextPageToken;
  try {
    do {
      const body = {
        jql,
        maxResults: 100,
        fields,
        ...(nextPageToken ? { nextPageToken } : {}),
      };
      const data = await jiraFetch('/rest/api/3/search/jql', {
        method: 'POST',
        body: JSON.stringify(body),
      });
      issues.push(...(data.issues ?? []));
      nextPageToken = data.nextPageToken;
    } while (nextPageToken);
    return issues;
  } catch {
    let startAt = 0;
    let total = 0;
    do {
      const params = new URLSearchParams({
        jql,
        maxResults: '100',
        startAt: String(startAt),
        fields: fields.join(','),
      });
      const data = await jiraFetch(`/rest/api/3/search?${params}`);
      issues.push(...(data.issues ?? []));
      total = data.total ?? 0;
      startAt += data.issues?.length ?? 0;
    } while (startAt < total);
    return issues;
  }
}

async function getBoardConfig(boardId) {
  try {
    return await jiraFetch(`/rest/agile/1.0/board/${boardId}/configuration`);
  } catch {
    return null;
  }
}

async function getSprints(boardId) {
  try {
    const data = await jiraFetch(
      `/rest/agile/1.0/board/${boardId}/sprint?state=active,closed,future`,
    );
    return data.values ?? [];
  } catch {
    return [];
  }
}

async function getBurndownChart(boardId, sprintId) {
  try {
    return await jiraFetch(
      `/rest/greenhopper/1.0/rapid/charts/burndown?rapidViewId=${boardId}&sprintId=${sprintId}`,
    );
  } catch {
    return null;
  }
}

function displayName(user) {
  if (!user) return 'Sin asignar';
  return user.displayName ?? user.emailAddress ?? 'Desconocido';
}

function statusName(issue) {
  return issue.fields?.status?.name ?? '—';
}

function issueTypeName(issue) {
  return issue.fields?.issuetype?.name ?? '—';
}

function isDone(issue) {
  const cat = issue.fields?.status?.statusCategory?.key;
  return cat === 'done' || statusName(issue).toLowerCase() === 'done';
}

function groupBy(arr, keyFn) {
  const map = new Map();
  for (const item of arr) {
    const key = keyFn(item);
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(item);
  }
  return [...map.entries()].sort((a, b) => a[0].localeCompare(b[0], 'es'));
}

function countByStatus(issues) {
  return groupBy(issues, (i) => statusName(i)).map(([status, list]) => ({
    status,
    count: list.length,
  }));
}

function buildEpicSummary(issues, epics) {
  const epicByKey = new Map(epics.map((e) => [e.key, e]));
  const childrenByEpic = new Map();

  for (const issue of issues) {
    if (issueTypeName(issue).toLowerCase() === 'epic') continue;
    const parent = issue.fields?.parent;
    const epicKey =
      parent?.key ??
      issue.fields?.epic?.key ??
      issue.fields?.customfield_10014 ??
      null;
    const label = epicKey
      ? epicByKey.get(epicKey)?.fields?.summary ?? epicKey
      : 'Sin épica';
    if (!childrenByEpic.has(label)) childrenByEpic.set(label, { total: 0, done: 0 });
    const bucket = childrenByEpic.get(label);
    bucket.total += 1;
    if (isDone(issue)) bucket.done += 1;
  }

  for (const epic of epics) {
    const label = epic.fields?.summary ?? epic.key;
    if (!childrenByEpic.has(label)) {
      childrenByEpic.set(label, {
        total: 0,
        done: isDone(epic) ? 1 : 0,
        epicOnly: true,
      });
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

function burndownFromChart(chart) {
  if (!chart?.contents) return null;
  const { series = [], sprints = [] } = chart.contents;
  const sprint = sprints[0];
  if (!sprint) return null;

  const ideal = series.find((s) => s.name === 'Guía de referencia' || s.name === 'Guideline');
  const remaining = series.find(
    (s) =>
      s.name === 'Trabajo restante' ||
      s.name === 'Remaining Values' ||
      s.name === 'Remaining work',
  );

  const points = [];
  const len = Math.max(ideal?.data?.length ?? 0, remaining?.data?.length ?? 0);
  const start = new Date(sprint.startDate ?? sprint.startTime);
  for (let i = 0; i < len; i++) {
    const d = new Date(start);
    d.setDate(d.getDate() + i);
    points.push({
      label: d.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' }),
      ideal: ideal?.data?.[i] ?? null,
      remaining: remaining?.data?.[i] ?? null,
    });
  }
  return { sprintName: sprint.name, points };
}

function burndownFallback(issues, sprint) {
  if (!sprint?.startDate) return null;
  const start = new Date(sprint.startDate);
  const end = new Date(sprint.endDate ?? Date.now());
  const sprintIssues = issues.filter((i) =>
    (i.fields?.sprint?.id ?? i.fields?.closedSprints?.[0]?.id) === sprint.id,
  );
  const useAll = sprintIssues.length === 0;
  const pool = useAll ? issues : sprintIssues;
  const total = pool.length || 1;

  const points = [];
  const dayMs = 86400000;
  for (let t = start.getTime(); t <= end.getTime(); t += dayMs) {
    const dayEnd = new Date(t);
    dayEnd.setHours(23, 59, 59, 999);
    let remaining = 0;
    for (const issue of pool) {
      const resolved = issue.fields?.resolutiondate
        ? new Date(issue.fields.resolutiondate)
        : null;
      if (!isDone(issue) || !resolved || resolved > dayEnd) remaining += 1;
    }
    const elapsed = (t - start.getTime()) / (end.getTime() - start.getTime() || 1);
    const ideal = Math.round(total * (1 - elapsed));
    points.push({
      label: dayEnd.toLocaleDateString('es-ES', { day: '2-digit', month: 'short' }),
      ideal: Math.max(0, ideal),
      remaining,
    });
  }
  return { sprintName: sprint.name, points, fallback: true };
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function renderHtml(ctx) {
  const {
    projectKey,
    boardId,
    generatedAt,
    total,
    done,
    inProgress,
    todo,
    byAssignee,
    byStatus,
    epics,
    boardColumns,
    burndown,
    activeSprint,
  } = ctx;

  const pctDone = total ? Math.round((done / total) * 100) : 0;
  const burndownLabels = JSON.stringify(burndown?.points?.map((p) => p.label) ?? []);
  const burndownIdeal = JSON.stringify(burndown?.points?.map((p) => p.ideal) ?? []);
  const burndownRemaining = JSON.stringify(burndown?.points?.map((p) => p.remaining) ?? []);

  const assigneeRows = byAssignee
    .map(
      ([name, list]) => {
        const d = list.filter(isDone).length;
        return `<tr><td>${escapeHtml(name)}</td><td>${list.length}</td><td>${d}</td><td>${list.length - d}</td></tr>`;
      },
    )
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

  const columnHtml =
    boardColumns.length > 0
      ? `<div class="columns">${boardColumns
          .map(
            (c) =>
              `<div class="col"><strong>${escapeHtml(c.name)}</strong><span>${c.count} issues</span></div>`,
          )
          .join('')}</div>`
      : '<p class="muted">No se pudo cargar la configuración del tablero; ver resumen por estado.</p>';

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <title>Informe Jira — ${escapeHtml(projectKey)}</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.7/dist/chart.umd.min.js"></script>
  <style>
    * { box-sizing: border-box; }
    body { font-family: 'Segoe UI', system-ui, sans-serif; color: #172b4d; margin: 0; padding: 32px; font-size: 11px; }
    h1 { font-size: 22px; margin: 0 0 4px; color: #0052cc; }
    h2 { font-size: 14px; margin: 24px 0 8px; border-bottom: 2px solid #dfe1e6; padding-bottom: 4px; }
    .meta { color: #5e6c84; margin-bottom: 20px; }
    .kpi { display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0; }
    .kpi div { background: #f4f5f7; border-radius: 8px; padding: 12px 16px; min-width: 120px; }
    .kpi strong { display: block; font-size: 20px; color: #0052cc; }
    table { width: 100%; border-collapse: collapse; margin: 8px 0; }
    th, td { border: 1px solid #dfe1e6; padding: 6px 8px; text-align: left; }
    th { background: #ebecf0; }
    .columns { display: flex; gap: 8px; flex-wrap: wrap; }
    .col { flex: 1; min-width: 100px; background: #deebff; border-radius: 6px; padding: 10px; text-align: center; }
    .col span { display: block; font-size: 18px; font-weight: bold; margin-top: 4px; }
    .chart-wrap { max-width: 640px; height: 260px; margin: 12px 0; }
    .muted { color: #5e6c84; font-style: italic; }
    .page-break { page-break-before: always; }
    @media print { body { padding: 16px; } }
  </style>
</head>
<body>
  <h1>Informe de gestión — Jira ${escapeHtml(projectKey)}</h1>
  <p class="meta">
    ${escapeHtml(JIRA_BASE_URL)} · Tablero #${boardId}
    ${activeSprint ? ` · Sprint: ${escapeHtml(activeSprint)}` : ''}
    <br />Generado: ${escapeHtml(generatedAt)}
  </p>

  <h2>Estadísticas de completación</h2>
  <div class="kpi">
    <div><span>Total issues</span><strong>${total}</strong></div>
    <div><span>Completadas</span><strong>${done}</strong></div>
    <div><span>En curso</span><strong>${inProgress}</strong></div>
    <div><span>Pendientes</span><strong>${todo}</strong></div>
    <div><span>% completado</span><strong>${pctDone}%</strong></div>
  </div>

  <h2>Estado del tablero</h2>
  ${columnHtml}

  <h2>Tareas por persona</h2>
  <table>
    <thead><tr><th>Persona</th><th>Total</th><th>Hechas</th><th>Pendientes</th></tr></thead>
    <tbody>${assigneeRows || '<tr><td colspan="4">Sin datos</td></tr>'}</tbody>
  </table>

  <h2>Distribución por estado</h2>
  <table>
    <thead><tr><th>Estado</th><th>Cantidad</th></tr></thead>
    <tbody>${statusRows}</tbody>
  </table>

  <div class="page-break"></div>

  <h2>Resumen de epics</h2>
  <table>
    <thead><tr><th>Épica</th><th>Progreso (hechas/total)</th><th>%</th></tr></thead>
    <tbody>${epicRows || '<tr><td colspan="3">No hay epics vinculadas</td></tr>'}</tbody>
  </table>

  <h2>Gráfico de burndown${burndown?.fallback ? ' (estimado)' : ''}</h2>
  ${
    burndown?.points?.length
      ? `<p>Sprint: <strong>${escapeHtml(burndown.sprintName)}</strong></p>
         <div class="chart-wrap"><canvas id="burndown"></canvas></div>`
      : '<p class="muted">No hay sprint con datos de burndown. Crea o cierra un sprint en el tablero.</p>'
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
          scales: { y: { beginAtZero: true, title: { display: true, text: 'Trabajo / issues' } } }
        }
      });
    }
  </script>
</body>
</html>`;
}

async function main() {
  console.log(`Consultando Jira (${JIRA_PROJECT_KEY})…`);

  const fields = [
    'summary',
    'status',
    'assignee',
    'issuetype',
    'parent',
    'priority',
    'created',
    'resolutiondate',
    'sprint',
  ];

  const [allIssues, epicIssues, boardConfig, sprints] = await Promise.all([
    searchAllIssues(`project = ${JIRA_PROJECT_KEY} ORDER BY rank`, fields),
    searchAllIssues(`project = ${JIRA_PROJECT_KEY} AND issuetype = Epic ORDER BY rank`, [
      'summary',
      'status',
    ]),
    getBoardConfig(JIRA_BOARD_ID),
    getSprints(JIRA_BOARD_ID),
  ]);

  const done = allIssues.filter(isDone).length;
  const inProgress = allIssues.filter((i) => {
    const cat = i.fields?.status?.statusCategory?.key;
    return cat === 'indeterminate';
  }).length;
  const todo = allIssues.length - done - inProgress;

  const byAssignee = groupBy(allIssues, (i) => displayName(i.fields?.assignee));
  const byStatus = countByStatus(allIssues);
  const epics = buildEpicSummary(allIssues, epicIssues);

  const columnNames =
    boardConfig?.columnConfig?.columns?.map((c) => c.name) ??
    [...new Set(allIssues.map(statusName))];

  const boardColumns = columnNames.map((name) => ({
    name,
    count: allIssues.filter((i) => statusName(i) === name).length,
  }));

  const activeSprint =
    sprints.find((s) => s.state === 'active') ??
    sprints.filter((s) => s.state === 'closed').sort((a, b) => (b.id ?? 0) - (a.id ?? 0))[0];

  let burndown = null;
  if (activeSprint) {
    const chart = await getBurndownChart(JIRA_BOARD_ID, activeSprint.id);
    burndown = burndownFromChart(chart) ?? burndownFallback(allIssues, activeSprint);
  }

  const generatedAt = new Date().toLocaleString('es-ES', {
    dateStyle: 'long',
    timeStyle: 'short',
  });

  const html = renderHtml({
    projectKey: JIRA_PROJECT_KEY,
    boardId: JIRA_BOARD_ID,
    generatedAt,
    total: allIssues.length,
    done,
    inProgress,
    todo,
    byAssignee,
    byStatus,
    epics,
    boardColumns,
    burndown,
    activeSprint: activeSprint?.name,
  });

  await mkdir(dirname(OUT_HTML), { recursive: true });
  await writeFile(OUT_HTML, html, 'utf8');
  console.log(`HTML: ${OUT_HTML}`);

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.waitForFunction(() => typeof Chart !== 'undefined', { timeout: 15000 });
  await new Promise((r) => setTimeout(r, 800));
  await page.pdf({
    path: OUT_PDF,
    format: 'A4',
    printBackground: true,
    margin: { top: '12mm', right: '12mm', bottom: '12mm', left: '12mm' },
  });
  await browser.close();

  console.log(`PDF generado: ${OUT_PDF}`);
  console.log(`Issues: ${allIssues.length} · Completadas: ${done} (${totalPct(done, allIssues.length)}%)`);
}

function totalPct(done, total) {
  return total ? Math.round((done / total) * 100) : 0;
}

main().catch((err) => {
  console.error(err.message ?? err);
  process.exit(1);
});
