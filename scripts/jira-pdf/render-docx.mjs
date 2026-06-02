/**
 * Genera docs/jira.docx con el mismo contenido que jira.pdf
 */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  HeadingLevel,
  ImageRun,
  WidthType,
  AlignmentType,
  BorderStyle,
} from 'docx';
import { ChartJSNodeCanvas } from 'chartjs-node-canvas';
import { buildReportContext, isDone } from './report-lib.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..', '..');
const DATA_FILE = join(__dirname, 'data', 'eq-export.json');
const OUT_DOCX = join(REPO_ROOT, 'docs', process.env.JIRA_DOCX_OUT ?? 'jira.docx');
const STATUS_IMAGE = join(REPO_ROOT, 'docs', 'assets', 'jira-resumen-estado.png');

function heading(text, level = HeadingLevel.HEADING_1) {
  return new Paragraph({ text, heading: level, spacing: { after: 120 } });
}

function para(text, opts = {}) {
  return new Paragraph({
    children: [new TextRun({ text, ...opts })],
    spacing: { after: opts.after ?? 80 },
  });
}

function spacer(after = 40) {
  return new Paragraph({ spacing: { after } });
}

function tableHeader(cells) {
  return new TableRow({
    tableHeader: true,
    children: cells.map(
      (text) =>
        new TableCell({
          children: [new Paragraph({ children: [new TextRun({ text, bold: true })] })],
          shading: { fill: 'EBECF0' },
        }),
    ),
  });
}

function tableRow(cells) {
  return new TableRow({
    children: cells.map(
      (text) =>
        new TableCell({
          children: [new Paragraph(String(text))],
        }),
    ),
  });
}

function dataTable(headers, rows) {
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    rows: [tableHeader(headers), ...rows.map((r) => tableRow(r))],
  });
}

async function burndownChartPng(burndown) {
  if (!burndown?.points?.length) return null;
  const canvas = new ChartJSNodeCanvas({ width: 800, height: 360, backgroundColour: 'white' });
  return canvas.renderToBuffer({
    type: 'line',
    data: {
      labels: burndown.points.map((p) => p.label),
      datasets: [
        {
          label: 'Ideal',
          data: burndown.points.map((p) => p.ideal),
          borderColor: '#97a0af',
          borderDash: [6, 4],
          fill: false,
          tension: 0.1,
        },
        {
          label: 'Restante',
          data: burndown.points.map((p) => p.remaining),
          borderColor: '#0052cc',
          backgroundColor: 'rgba(0,82,204,0.15)',
          fill: true,
          tension: 0.1,
        },
      ],
    },
    options: {
      plugins: {
        title: { display: true, text: burndown.sprintName },
        legend: { position: 'bottom' },
      },
      scales: { y: { beginAtZero: true } },
    },
  });
}

async function main() {
  const raw = await readFile(DATA_FILE, 'utf8');
  const { allIssues, epicIssues, meta } = JSON.parse(raw);
  try {
    const buf = await readFile(STATUS_IMAGE);
    meta.statusImageDataUri = `data:image/png;base64,${buf.toString('base64')}`;
  } catch {
    meta.statusImageDataUri = null;
  }
  const ctx = buildReportContext(allIssues, epicIssues, meta);

  let statusImg = null;
  try {
    statusImg = await readFile(STATUS_IMAGE);
  } catch {
    /* optional */
  }

  const chartPng = await burndownChartPng(ctx.burndown);
  const pctDone = ctx.total ? Math.round((ctx.done / ctx.total) * 100) : 0;

  const children = [
    heading(`Informe de gestión — Jira ${ctx.projectKey}`),
    para(
      `${meta.baseUrl} · Tablero #${ctx.boardId} · Generado: ${ctx.generatedAt}`,
      { italics: true, color: '5E6C84' },
    ),
  ];

  if (statusImg) {
    children.push(
      heading('Resumen de estado (Jira)', HeadingLevel.HEADING_2),
      para('Captura del panel del proyecto en Jira Software.', { italics: true }),
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new ImageRun({
            data: statusImg,
            type: 'png',
            transformation: { width: 340, height: 340 },
          }),
        ],
        spacing: { after: 160 },
      }),
    );
  }

  children.push(
    heading('Estadísticas de completación', HeadingLevel.HEADING_2),
    para(
      `Actividades (sin épicas): ${ctx.total}  |  Total Jira: ${ctx.totalAll}  |  Completadas: ${ctx.done}  |  En curso: ${ctx.inProgress}  |  Pendientes: ${ctx.todo}  |  %: ${pctDone}%`,
    ),

    heading('Estado del tablero', HeadingLevel.HEADING_2),
    dataTable(
      ['Columna', 'Issues'],
      ctx.boardColumns.map((c) => [c.name, c.count]),
    ),
    spacer(),

    heading('Tareas por persona', HeadingLevel.HEADING_2),
    para('Solo tareas asignadas (épicas excluidas).', { italics: true }),
    dataTable(
      ['Persona', 'Total', 'Hechas', 'Pendientes'],
      ctx.byAssignee.map(([name, list]) => {
        const d = list.filter(isDone).length;
        return [name, list.length, d, list.length - d];
      }),
    ),
    ...(ctx.unassignedWorkCount
      ? [
          para(
            `${ctx.unassignedWorkCount} tareas sin «Persona asignada» en Jira (excluidas de esta tabla).`,
            { italics: true },
          ),
        ]
      : []),
    spacer(),

    heading('Distribución por estado', HeadingLevel.HEADING_2),
    dataTable(
      ['Estado', 'Cantidad'],
      ctx.byStatus.map((s) => [s.status, s.count]),
    ),

    heading('Resumen de epics', HeadingLevel.HEADING_2),
    dataTable(
      ['Épica', 'Progreso (hechas/total)', '%'],
      ctx.epics.map((e) => [e.name, `${e.done}/${e.total}`, `${e.pct}%`]),
    ),
    spacer(),

    heading('Gráfico de burndown', HeadingLevel.HEADING_2),
  );

  if (chartPng) {
    children.push(
      new Paragraph({
        alignment: AlignmentType.CENTER,
        children: [
          new ImageRun({
            data: chartPng,
            type: 'png',
            transformation: { width: 520, height: 234 },
          }),
        ],
        spacing: { after: 200 },
      }),
    );
  } else {
    children.push(para('Sin datos de burndown disponibles.', { italics: true }));
  }

  const doc = new Document({
    creator: 'Ziryab Jira Report',
    title: `Informe Jira ${ctx.projectKey}`,
    sections: [{ properties: {}, children }],
  });

  await mkdir(dirname(OUT_DOCX), { recursive: true });
  const buffer = await Packer.toBuffer(doc);
  await writeFile(OUT_DOCX, buffer);

  console.log(`Word: ${OUT_DOCX}`);
  console.log(`Issues: ${ctx.total} · Completadas: ${ctx.done} (${pctDone}%)`);
}

main().catch((e) => {
  console.error(e.message ?? e);
  process.exit(1);
});
