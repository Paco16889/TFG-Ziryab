# Ziryab — Plataforma de gestión educativa

**Proyecto Intermodular · 2º DAM (turno de mañana)**  
**Centro:** CPIFP Alan Turing (Málaga) · **Curso:** 2025/2026  
**Exposición:** 5 de junio de 2026 · **Orden:** 2 · **Ventana:** 9:15 – 9:30 (máx. 15 min)

> Repositorio-guía del proyecto. Aquí se centraliza la documentación de exposición exigida por el centro: descripción, equipo, enlaces a código y despliegue, PDFs, Jira y Compodoc.  
> Referencia de requisitos: [guía de exposiciones 2º DAM](https://github.com/CPIFPAlanTuring/exposiciones_proyecto_intermodular_25_26_2DAM_M) *(repositorio `exposiciones_proyecto_intermodular_25_26_2DAM_M` del profesorado)*.

---

## 📑 Índice

- [👥 Personas y equipo](#-personas-y-equipo)
- [📖 Descripción del proyecto](#-descripción-del-proyecto)
- [🏗️ Arquitectura y stack](#️-arquitectura-y-stack)
- [📦 Repositorios de código](#-repositorios-de-código)
- [🚀 Despliegue en producción](#-despliegue-en-producción)
- [📚 Aportación por módulo](#-aportación-por-módulo)
- [📄 Documentación unificada](#-documentación-unificada)
- [📊 Gestión del proyecto (Jira)](#-gestión-del-proyecto-jira)
- [🧩 Documentación de código (Compodoc)](#-documentación-de-código-compodoc)
- [✅ Checklist antes de la exposición](#-checklist-antes-de-la-exposición)

---

## 👥 Personas y equipo

> *"Digitalizar la gestión del centro para que profesores y alumnos dediquen el tiempo a enseñar y aprender, no al papeleo."*


| Miembro                            | Rol en el proyecto | Correo educaAnd             |
| ---------------------------------- | ------------------ | --------------------------- |
| **Francisco de Asís Cobo Sánchez** | Full Stack         | `fcobsan076@g.educaand.es`  |
| **Antonio Salces Alcaraz**         | Full Stack         | `asalalc1312@g.educaand.es` |
| **Ángela Mora Mata**               | Full Stack         | `amormat1010@g.educaand.es` |


### Stack del proyecto


| Capa               | Tecnología                                       |
| ------------------ | ------------------------------------------------ |
| **Frontend**       | Angular 19 (standalone components)               |
| **Estilos**        | Tailwind CSS + SCSS puntual                      |
| **Backend**        | Node.js + Express 5 + TypeScript (ESM)           |
| **ORM / BD**       | Prisma + PostgreSQL                              |
| **Autenticación**  | Firebase Auth + JWT (cookies httpOnly / Bearer)  |
| **Almacenamiento** | Cloudinary (ficheros)                            |
| **API docs**       | Swagger (`swagger-jsdoc` + `swagger-ui-express`) |
| **Gestión**        | Jira (proyecto `CURSO`)                          |
| **Doc. código**    | Compodoc                                         |
| **Despliegue**     | Render (frontend + API)                          |


---

<table width="100%">
<tr>
<td valign="top"><h3>🧑‍💻 Francisco de Asís Cobo Sánchez</h3></td>
<td align="right" valign="middle" rowspan="2" width="200">
<a href="./assets/team/francisco.jpg"><img src="./assets/team/francisco.jpg" width="180" alt="Foto de Francisco de Asís Cobo Sánchez"/></a>
</td>
</tr>
<tr>
<td valign="top">
<table>
<tr><td>🐙 <strong>GitHub</strong></td><td><a href="https://github.com/yo164">@yo164</a></td></tr>
<tr><td>💼 <strong>LinkedIn</strong></td><td><a href="https://www.linkedin.com/in/francisco-cobo-sánchez-3036b1349/">Perfil</a></td></tr>
</table>
</td>
</tr>
</table>

---

<table width="100%">
<tr>
<td valign="top"><h3>🧑‍💻 Antonio Salces Alcaraz</h3></td>
<td align="right" valign="middle" rowspan="2" width="200">
<a href="./assets/team/Salces_Alcaraz_Antonio.png"><img src="./assets/team/Salces_Alcaraz_Antonio.png" width="180" alt="Foto de Antonio Salces Alcaraz"/></a>
</td>
</tr>
<tr>
<td valign="top">
<table>
<tr><td>🐙 <strong>GitHub</strong></td><td><a href="https://github.com/AntonioSalces">@AntonioSalces</a></td></tr>
<tr><td>💼 <strong>LinkedIn</strong></td><td><a href="https://www.linkedin.com/in/antoniosalces/">Perfil</a></td></tr>
</table>
</td>
</tr>
</table>

---

<table width="100%">
<tr>
<td valign="top"><h3>🧑‍💻 Ángela Mora Mata</h3></td>
<td align="right" valign="middle" rowspan="2" width="200">
<a href="./assets/team/angela.jpg"><img src="./assets/team/angela.jpg" width="180" alt="Foto de Ángela Mora Mata"/></a>
</td>
</tr>
<tr>
<td valign="top">
<table>
<tr><td>🐙 <strong>GitHub</strong></td><td><a href="https://github.com/angela1006">@angela1006</a></td></tr>
<tr><td>💼 <strong>LinkedIn</strong></td><td><a href="https://www.linkedin.com/in/ángela-mora-mata-b8458a329/">Perfil</a></td></tr>
</table>
</td>
</tr>
</table>


---

## 📖 Descripción del proyecto

**Ziryab** es una plataforma web de gestión educativa para **cualquier centro donde se impartan clases**: centros públicos y privados, academias, conservatorios, centros de formación profesional, etc. Sustituye procesos en papel y hojas de cálculo dispersas por un único entorno digital con **tres roles** (`STUDENT`, `TEACHER`, `ADMIN`).

### Problema que resuelve

Los centros gestionan matrículas, horarios, asistencia, tareas, calificaciones e incidencias con herramientas heterogéneas. Eso genera duplicidad de datos, errores de coordinación entre profesorado y administración, y poca visibilidad para el alumnado.

### Solución

Aplicación **SPA** (Angular) consumiendo una **API REST** (Node/Express) sobre **PostgreSQL**, con autenticación híbrida **Firebase + JWT** del backend propio.

### Funcionalidades principales


| Área              | Descripción                                                                                                    |
| ----------------- | -------------------------------------------------------------------------------------------------------------- |
| **Alumno**        | Dashboard, clases, horario, temario, tareas y entregas, notas, ficha de usuario, notificaciones en tiempo real |
| **Profesor**      | Clases asignadas, pasar lista, tareas por asignatura, gestión de notas, horario, menú de clase                 |
| **Administrador** | CRUD de alumnos, profesores, asignaturas, ciclos, grupos, horarios semanales, incidencias, anuncios, informes  |
| **Transversal**   | i18n (es / en / de), calendario integrado, avisos SSE, subida de ficheros (Cloudinary), documentación Swagger  |


### Capturas

Vista previa en miniatura; **clic en la imagen** para abrirla a tamaño completo.

| Vista               | Captura |
| ------------------- | ------- |
| Login y roles       | <a href="./assets/screenshots/login.png"><img src="./assets/screenshots/login.png" width="400" alt="Login y roles"/></a> |
| Panel principal     | <a href="./assets/screenshots/principal.png"><img src="./assets/screenshots/principal.png" width="400" alt="Panel principal"/></a> |
| Clases              | <a href="./assets/screenshots/clases.png"><img src="./assets/screenshots/clases.png" width="400" alt="Clases"/></a> |
| Gestión             | <a href="./assets/screenshots/gestion.png"><img src="./assets/screenshots/gestion.png" width="400" alt="Gestión"/></a> |
| Panel administrador | <a href="./assets/screenshots/admin-dashboard.png"><img src="./assets/screenshots/admin-dashboard.png" width="400" alt="Panel administrador"/></a> |


### Diagrama de arquitectura

<a href="./assets/diagramas/arquitectura.png"><img src="./assets/diagramas/arquitectura.png" width="700" alt="Diagrama de arquitectura de Ziryab"/></a>

---

## 🏗️ Arquitectura y stack

<a href="./assets/diagramas/arquitectura.png"><img src="./assets/diagramas/arquitectura.png" width="700" alt="Diagrama de arquitectura de Ziryab"/></a>


| Componente        | Tecnología / URL                                                                             |
| ----------------- | -------------------------------------------------------------------------------------------- |
| **Frontend**      | Angular 19, Tailwind — [ziryabfront.onrender.com](https://ziryabfront.onrender.com/)         |
| **API**           | Node.js, Express 5, Swagger — [ziryabback.onrender.com](https://ziryabback.onrender.com/api) |
| **Base de datos** | PostgreSQL + Prisma ORM                                                                      |
| **Autenticación** | Firebase Auth + JWT (backend)                                                                |
| **Ficheros**      | Cloudinary                                                                                   |
| **Tiempo real**   | SSE (notificaciones)                                                                         |


---

## 📦 Repositorios de código

| Repositorio  | Descripción            | URL                                                     |
| ------------ | ---------------------- | ------------------------------------------------------- |
| **Frontend** | Cliente Angular 19     | [Pincha aquí](https://github.com/Paco16889/ZiryabFront) |
| **Backend**  | API REST Node + Prisma | [Pincha aquí](https://github.com/yo164/ZiryabBack)      |


---

## 🚀 Despliegue en producción


| Servicio                      | URL                                                                                  | Notas                                      |
| ----------------------------- | ------------------------------------------------------------------------------------ | ------------------------------------------ |
| **API (producción)**          | [https://ziryabback.onrender.com/api](https://ziryabback.onrender.com/api)           | Desplegada en Render                       |
| **Swagger / API docs**        | [https://ziryabback.onrender.com/api-docs](https://ziryabback.onrender.com/api-docs) | Documentación interactiva de endpoints     |
| **Health check**              | [https://ziryabback.onrender.com/health](https://ziryabback.onrender.com/health)     | Monitorización básica                      |
| **Aplicación web (frontend)** | [https://ziryabfront.onrender.com/](https://ziryabfront.onrender.com/)               | SPA Angular desplegada en Render           |
| **Compodoc (servidor)**       | [https://antoniosalces.github.io/ziryab-compodoc/index.html](https://antoniosalces.github.io/ziryab-compodoc/index.html) | Desplegado en GitHub Pages                 |


### Credenciales de prueba para el tribunal

> Acceso en [https://ziryabfront.onrender.com/](https://ziryabfront.onrender.com/) con autenticación **Firebase** (proyecto `ziryab-7006e`).


| Rol               | Email                 | Contraseña       |
| ----------------- | --------------------- | ---------------- |
| **Alumno**        | `alumno2@ziryab.es`   | `Alumno123456`   |
| **Profesor**      | `profesor1@ziryab.es` | `Profesor123456` |
| **Administrador** | `admin1@ziryab.es`    | `Admin123456`    |


---

## 📚 Aportación por módulo

Plantilla exigida por el centro: por cada módulo se indican **objetivos cubiertos**, **evidencias en el repositorio** y **limitaciones / líneas futuras**. Cuando un profesor imparte dos asignaturas, se documentan en el **mismo apartado**.

---

### Acceso a Datos · Servidores y APIs

**Profesor/a:** Juan Antonio García Gómez  
**Módulos:** Acceso a Datos · Servidores y APIs

**Objetivos del módulo cubiertos**

*Acceso a Datos*

- Modelado relacional de un dominio educativo (alumnos, profesores, ciclos, grupos, matrículas, sesiones, asistencia, tareas, notas, incidencias).
- Consultas SQL indirectas vía **Prisma ORM** con relaciones N:M (`StudentOnSubjectOnGroup`, `TeacherOnSubjectOnGroup`, etc.).
- Migraciones versionadas y seed reproducible para entornos de desarrollo y demo.

*Servidores y APIs*

- API REST con **Express 5**, validación **Zod**, middleware de seguridad (Helmet, CORS, rate limiting).
- Autenticación JWT + verificación de tokens Firebase Admin.
- Documentación **Swagger** y despliegue en **Render** con migraciones Prisma en arranque.

**Evidencias**


| Evidencia                  | Ubicación                                                                  |
| -------------------------- | -------------------------------------------------------------------------- |
| Esquema Prisma             | `node/prisma/schema.prisma`                                                |
| Migraciones                | `node/prisma/migrations/`                                                  |
| Seed de datos              | `node/prisma/seed.ts`, `node/prisma/seed-demo.ts`                          |
| Diagrama relacional        | `node/prisma/esquema-relacional.md`                                        |
| Configuración Express      | `node/src/app.ts`                                                          |
| Swagger                    | `node/src/config/swagger.ts`, anotaciones en `*.routes.ts`                 |
| Auth y roles               | `node/src/middleware/auth.ts`, `authorize.ts`                              |
| API en producción          | [https://ziryabback.onrender.com/api](https://ziryabback.onrender.com/api) |
| Tests (persistencia + API) | `node/src/tests/`                                                          |


**Limitaciones / futuro**

- Algunas relaciones lógicas (p. ej. notificaciones por `firebaseUID`) no tienen FK explícita en BD.
- Optimización de consultas N+1 en listados masivos del panel admin.
- CI/CD en GitHub Actions documentado pero **PENDIENTE** de enlazar en este README si existe workflow.

---

### Desarrollo de Interfaces

**Profesor/a:** Carmen Campos Fernández

**Objetivos del módulo cubiertos**

- Diseño de interfaces por rol con navegación coherente y **guards** de autenticación y autorización.
- Formularios reactivos con validación, feedback de error y estados de carga.
- Accesibilidad básica (textos traducibles, contraste, estructura semántica) e **i18n** (es, en, de).

**Evidencias**


| Evidencia           | Ubicación                                                       |
| ------------------- | --------------------------------------------------------------- |
| Rutas y guards      | `angular/src/app/app.routes.ts`, `angular/src/app/core/guards/` |
| Componentes por rol | `angular/src/app/pages/alumno/`, `profesor/`, `admin/`          |
| Estilos Tailwind    | Componentes `.html` + `tailwind.config.js`                      |
| Traducciones        | `angular/src/assets/i18n/es.json` (y `en`, `de`)                |


**Limitaciones / futuro**

- Auditoría WCAG completa pendiente; algunos iconos externos en la página *About* deberían migrarse a assets locales del repo.

---

### Programación Multimedia y Dispositivos Móviles · Programación de Servicios y Procesos

**Profesor/a:** David Hormigo Ramírez  
**Módulos:** Programación Multimedia y Dispositivos Móviles · Programación de Servicios y Procesos

**Objetivos del módulo cubiertos**

*Programación Multimedia y Dispositivos Móviles*

- Interfaz **responsive** (Tailwind) usable en tablet y móvil para consulta de horarios, tareas y notificaciones.
- Consumo de API REST y eventos en tiempo real (**SSE**) desde el cliente web.
- Integración con servicios externos (Firebase Auth, almacenamiento Cloudinary).

*Programación de Servicios y Procesos*

- Servicios Node desacoplados (patrón `routes → controller → service`).
- Procesos de negocio: generación de sesiones, notificaciones, gestión de entregas y asistencia.
- Comunicación en tiempo real mediante **Server-Sent Events** para notificaciones.

**Evidencias**


| Evidencia                     | Ubicación                                                |
| ----------------------------- | -------------------------------------------------------- |
| Cliente Angular               | `angular/src/app/`                                       |
| Notificaciones SSE (cliente)  | `angular/src/app/core/services/notifications.service.ts` |
| Firebase Auth                 | `angular/src/app/core/services/firebase-auth.service.ts` |
| i18n multidioma               | `angular/src/assets/i18n/`                               |
| Módulos de servicio (backend) | `node/src/modules/*/`                                    |
| SSE notificaciones (servidor) | `node/src/modules/notifications/notifications.sse.ts`    |
| Tests de integración          | `node/src/tests/` (Jest + Supertest)                     |
| Scripts de despliegue         | `node/package.json` (`render:build`, `render:start`)     |


**Limitaciones / futuro**

- No hay aplicación nativa (APK); la aportación PMDM se centra en **web responsive** y PWA como mejora futura.
- Colas de trabajos asíncronos (p. ej. envío masivo de emails) no implementadas; las notificaciones son principalmente in-app.

---

### Empresa e Iniciativa Emprendedora II

**Profesor/a:** Rosa Carmen Alcázar Rosal

**Objetivos del módulo cubiertos**

- Análisis del sector (centros educativos públicos, privados, academias, etc.) y propuesta de valor de Ziryab frente a gestión manual.
- Estudio de viabilidad: costes de hosting (Render, Firebase, Cloudinary), modelo freemium o licencia por centro.
- Plan de comunicación y captación de primeros usuarios piloto.

**Evidencias**


| Evidencia                  | Ubicación                                                            |
| -------------------------- | -------------------------------------------------------------------- |
| Página corporativa / About | `angular/src/app/pages/shared/about/`                                |
| Documentación de negocio   | **PENDIENTE:** sección en PDF unificado (`./docs/documentacion.pdf`) |
| Presentación intermodular  | Este `README.md`                                                     |


**Limitaciones / futuro**

- Validación con un centro real en producción aún en fase piloto; métricas de adopción por documentar.

---

### Sistemas de Gestión Empresarial

**Profesor/a:** Miguel Ángel Ronda Carracao

**Objetivos del módulo cubiertos**

- Gestión de entidades de negocio: ciclos formativos, grupos, matrículas, asignación profesor–asignatura–grupo.
- Flujos administrativos: altas de usuarios, horarios semanales, incidencias (`issues`), anuncios.
- Informes y exportación de datos para la dirección del centro.

**Evidencias**


| Evidencia                        | Ubicación                                                             |
| -------------------------------- | --------------------------------------------------------------------- |
| Módulos admin (CRUD)             | `angular/src/app/pages/admin/entities/`                               |
| API cursos / grupos / matrículas | `node/src/modules/course/`, `group/`, `enrollments/`, `course-group/` |
| Informes admin                   | `angular/src/app/pages/admin/informe/` **(si aplica)**                |
| Incidencias y anuncios           | `node/src/modules/issue/`, `announcements/`                           |


**Limitaciones / futuro**

- Integración con ERP externo (contabilidad / nóminas) no contemplada; Ziryab cubre la capa académica-operativa.

---

## 📄 Documentación unificada

Documentación técnica y de gestión exportada desde **Confluence** y otras fuentes, en un único PDF para el tribunal.


| Documento                               | Enlace                                                                                |
| --------------------------------------- | ------------------------------------------------------------------------------------- |
| **PDF unificado (Confluence + anexos)** | [./docs/documentacion.pdf](./docs/documentacion.pdf) |
| **PDF resumen Jira**                    | [./docs/jira.pdf](./docs/jira.pdf) |


> Incluir en el PDF: arquitectura, casos de uso, modelo de datos, manual de despliegue y capturas de Confluence.

---

## 📊 Gestión del proyecto (Jira)

**Proyecto Jira (TFG / equipo):** [`EQ` — Equipo_Sonrisa](https://g-team-ddm5j4dr.atlassian.net/jira/software/projects/EQ/summary)  
**Tablero:** [Kanban EQ](https://g-team-ddm5j4dr.atlassian.net/jira/software/projects/EQ/boards)  
**Trazabilidad en código (curso Cursor):** proyecto `CURSO` en commits (`[CURSO-XX]` / `tipo(CURSO-XX):`)  
**PDF exportado:** [./docs/jira.pdf](./docs/jira.pdf) · fuente Markdown: [`docs/jira/jira-resumen.md`](./docs/jira/jira-resumen.md)

### Resumen para evaluación

| Aspecto     | Descripción |
| ----------- | ----------- |
| **Epics**   | **Front/BBDD/UI/Back** (EQ-1, EQ-6, EQ-9, EQ-12, EQ-44), **documentación** (EQ-355–356), **despliegue** (EQ-357), **exposición** (EQ-358), **calidad** (EQ-359). Detalle en el PDF. |
| **Reparto** | Francisco Cobo **135** · Ángela Mora **86** · Antonio Salces **73** · sin asignar **66** (sobre 360 issues). |
| **Estado**  | **66,7 %** en categoría *Listo* (240/360 finalizadas); 34 en revisión, 7 en curso, 79 por hacer (mayo 2026). |
| **PDF**     | [./docs/jira.pdf](./docs/jira.pdf) — estadísticas, epics y reparto (exportado vía MCP Atlassian). |

### Captura del tablero

[Abrir tablero en Jira](https://g-team-ddm5j4dr.atlassian.net/jira/software/projects/EQ/boards)

> Añadir captura PNG en `./assets/jira/tablero-eq.png` antes del **5 de junio** (menú del tablero → captura de pantalla) y referenciarla aquí si el centro lo exige en el README.

---

## 🧩 Documentación de código (Compodoc)

Generada desde el frontend Angular con **Compodoc**.


| Recurso                           | Enlace                                                            |
| --------------------------------- | ----------------------------------------------------------------- |
| **Código fuente documentado**     | Repositorio `angular/`                                            |
| **HTML generado (en repo)**       | `angular/docs/` (ejecutar `npm run docs:build`)                   |
| **Servidor público** | [https://antoniosalces.github.io/ziryab-compodoc/index.html](https://antoniosalces.github.io/ziryab-compodoc/index.html) |


### Comandos locales

```bash
cd angular
npm run docs:build    # genera estáticos en docs/
npm run docs:serve    # servidor local para revisión
```

---

## ✅ Checklist antes de la exposición

Marcar cuando esté listo (requisitos del centro):

- URL de **este repositorio** registrada en la tabla del repo `exposiciones_proyecto_intermodular_25_26_2DAM_M` (sustituir `PENDIENTE` en la fila del equipo).
- Fotos del equipo en `./assets/team/` (francisco.jpg, antonio.jpg, angela.jpg).
- Diagrama de arquitectura en `./assets/diagramas/arquitectura.png`.
- Capturas en `./assets/screenshots/` referenciadas en este README (sin enlaces rotos).
- URLs de GitHub (frontend, backend, este repo) verificadas.
- Frontend en producción accesible ([ziryabfront.onrender.com](https://ziryabfront.onrender.com/)) + credenciales de prueba documentadas.
- `./docs/documentacion.pdf` y `./docs/jira.pdf` subidos y enlazados.
- Compodoc desplegado y URL activa durante la evaluación.
- API y Swagger respondiendo en Render.
- Ensayo de exposición ≤ **15 minutos** (orden **2**, 9:15–9:30).

---

*Última actualización: mayo 2026 · Equipo Ziryab — CPIFP Alan Turing*