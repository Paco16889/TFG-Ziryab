# Exportación Confluence — espacio Ziryab

Documentación exportada automáticamente desde Confluence vía MCP Atlassian (Rovo).

| Campo | Valor |
|-------|--------|
| **Sitio** | [g-team-ddm5j4dr.atlassian.net](https://g-team-ddm5j4dr.atlassian.net/wiki) |
| **Espacio** | `Ziryab` |
| **Exportado** | 31 de mayo de 2026 |
| **Páginas** | 9 |

> **Nota:** El espacio `CCA` en `franciscocobsan.atlassian.net` no está autorizado en la conexión MCP actual. Solo se exportó el espacio **Ziryab** del sitio del equipo (`g-team-ddm5j4dr`).

## Índice de páginas

| # | Archivo | Título | Enlace Confluence |
|---|---------|--------|-------------------|
| 1 | [01-ziryab-home.md](./01-ziryab-home.md) | Ziryab | [overview](https://g-team-ddm5j4dr.atlassian.net/wiki/spaces/Ziryab/overview) |
| 2 | [02-project-charter.md](./02-project-charter.md) | Project Charter | [página](https://g-team-ddm5j4dr.atlassian.net/wiki/spaces/Ziryab/pages/2261253) |
| 3 | [03-inicio-servidores.md](./03-inicio-servidores.md) | Inicio de servidores Angular y Node | [página](https://g-team-ddm5j4dr.atlassian.net/wiki/spaces/Ziryab/pages/9404417) |
| 4 | [04-resumen-gestion-proyecto.md](./04-resumen-gestion-proyecto.md) | Resumen Gestión de proyecto | [página](https://g-team-ddm5j4dr.atlassian.net/wiki/spaces/Ziryab/pages/13500417) |
| 5 | [05-documentacion-frontend-angular.md](./05-documentacion-frontend-angular.md) | Documentación Técnica Frontend (Angular) | [página](https://g-team-ddm5j4dr.atlassian.net/wiki/spaces/Ziryab/pages/35028993) |
| 6 | [06-asistencia.md](./06-asistencia.md) | Documentación de Sistema de Gestión de Asistencia | [página](https://g-team-ddm5j4dr.atlassian.net/wiki/spaces/Ziryab/pages/38830081) |
| 7 | [07-eq-154-despliegue-render.md](./07-eq-154-despliegue-render.md) | EQ-154 · Guía de despliegue Render | [página](https://g-team-ddm5j4dr.atlassian.net/wiki/spaces/Ziryab/pages/43745281) |
| 8 | [08-eq-197-student-task.md](./08-eq-197-student-task.md) | EQ-197 · StudentTask al publicar tarea | [página](https://g-team-ddm5j4dr.atlassian.net/wiki/spaces/Ziryab/pages/43712514) |
| 9 | [09-firebase-admin-vulnerabilidad.md](./09-firebase-admin-vulnerabilidad.md) | Decisión firebase-admin (Issue #5) | [página](https://g-team-ddm5j4dr.atlassian.net/wiki/spaces/Ziryab/pages/40730625) |

## Documento unificado

- **[documentacion-confluence-completa.md](./documentacion-confluence-completa.md)** — todas las páginas concatenadas (útil para generar `documentacion.pdf` con Pandoc o imprimir a PDF).

## Imágenes embebidas

Algunas páginas (home, Project Charter) incluyen imágenes que Confluence expone como `blob:` y **no se descargan** por API. Para el PDF final, exporta esas páginas manualmente desde Confluence (**··· → Export to PDF**) o descarga las imágenes desde la web.

## Generar PDF local

Desde la raíz del repo `TFG-Ziryab` (no repitas `TFG-Ziryab` en el `cd`):

```powershell
cd docs\confluence
python build-pdf.py
```

Salida: `docs/documentacion.pdf`

**Alternativa con Pandoc** (si lo instalas): desde `docs\confluence`:

```powershell
pandoc documentacion-confluence-completa.md -o ..\documentacion.pdf --toc -V lang=es
```
