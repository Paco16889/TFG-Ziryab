/**
 * Genera PDF desde data/eq-export.json (issues exportados vía MCP o API).
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';
import { buildReportContext, renderHtml } from './report-lib.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = join(__dirname, '..', '..');
const DATA_FILE = join(__dirname, 'data', 'eq-export.json');
const OUT_HTML = join(REPO_ROOT, 'docs', 'jira-report.html');
const OUT_PDF = join(REPO_ROOT, 'docs', 'jira.pdf');
const STATUS_IMAGE = join(REPO_ROOT, 'docs', 'assets', 'jira-resumen-estado.png');

async function loadStatusImageDataUri() {
  try {
    const buf = await readFile(STATUS_IMAGE);
    return `data:image/png;base64,${buf.toString('base64')}`;
  } catch {
    return null;
  }
}

async function main() {
  const raw = await readFile(DATA_FILE, 'utf8');
  const { allIssues, epicIssues, meta } = JSON.parse(raw);
  meta.statusImageDataUri = await loadStatusImageDataUri();
  const ctx = buildReportContext(allIssues, epicIssues, meta);
  const html = renderHtml(ctx);

  await mkdir(dirname(OUT_HTML), { recursive: true });
  await writeFile(OUT_HTML, html, 'utf8');

  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0' });
  await page.waitForFunction(() => typeof Chart !== 'undefined', { timeout: 15000 });
  await new Promise((r) => setTimeout(r, 800));
  await page.pdf({
    path: OUT_PDF,
    format: 'A4',
    printBackground: true,
    margin: { top: '10mm', right: '10mm', bottom: '10mm', left: '10mm' },
    preferCSSPageSize: true,
  });
  await browser.close();

  console.log(`PDF: ${OUT_PDF}`);
  console.log(
    `Actividades: ${ctx.total} (${ctx.totalAll} en Jira con épicas) · Hechas: ${ctx.done} (${ctx.total ? Math.round((ctx.done / ctx.total) * 100) : 0}%)`,
  );
}

main().catch((e) => {
  console.error(e.message ?? e);
  process.exit(1);
});
