/** Une páginas JSON de búsqueda MCP en data/eq-export.json */
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const pages = process.argv.slice(2);
if (!pages.length) {
  console.error('Uso: node merge-mcp-export.mjs <page1.json> [page2.json ...]');
  process.exit(1);
}

const allIssues = [];
for (const p of pages) {
  const data = JSON.parse(await readFile(p, 'utf8'));
  allIssues.push(...(data.issues ?? []));
}

const epicIssues = allIssues.filter((i) => i.fields?.issuetype?.name === 'Epic');
const exportData = {
  meta: {
    projectKey: 'EQ',
    boardId: 34,
    baseUrl: 'https://g-team-ddm5j4dr.atlassian.net',
    generatedAt: new Date().toLocaleString('es-ES', {
      dateStyle: 'long',
      timeStyle: 'short',
    }),
  },
  allIssues,
  epicIssues,
};

const out = join(__dirname, 'data', 'eq-export.json');
await mkdir(dirname(out), { recursive: true });
await writeFile(out, JSON.stringify(exportData));
console.log(`Exportado ${allIssues.length} issues (${epicIssues.length} epics) → ${out}`);
