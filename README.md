# TFG-Ziryab

## 📑 Índice

- [👥 Equipo](#-equipo)
  - [Stack del proyecto](#-stack-del-proyecto)
- [📖 Descripción del Proyecto](#-descripción-del-proyecto)
- [📚 Aportación por Módulos](#-aportación-por-módulos)
  - [Acceso a Datos](#acceso-a-datos)
  - [Programación Multimedia y Dispositivos Móviles](#programación-multimedia-y-dispositivos-móviles)
  - [Programación de Servicios y Procesos](#programación-de-servicios-y-procesos)
  - [Desarrollo de Interfaces](#desarrollo-de-interfaces)
  - [Servidores y APIs](#servidores-y-apis)
  - [Iniciativa para la Empleabilidad II](#iniciativa-para-la-empleabilidad-ii)
  - [Sistemas de Gestión Empresarial](#sistemas-de-gestión-empresarial)
- [📦 Repositorios](#-repositorios)
- [🚀 Despliegue](#-despliegue)
- [📄 Documentación](#-documentación)
- [📊 Gestión del Proyecto (Jira)](#-gestión-del-proyecto-jira)
- [🧩 Compodoc](#-compodoc)

---
## 👥 Equipo

> *"Una frase molona del equipo aquí"*

### 🛠️ Stack del Proyecto

| Capa | Tecnología |
|---|---|
| **Frontend** | Angular 19+ Standalone |
| **Backend** | Node.js + Express |
| **ORM** | Prisma |
| **Base de datos** | PostgreSQL |
| **Documentación** | Compodoc |
| **Gestión** | Jira |

---

### Ángela Mora Mata

<img src="./assets/team/nombre1.jpg" width="100" style="border-radius:50%"/>

| | |
|---|---|
| 🐙 **GitHub** | [@usuario](https://github.com/angela1006) |
| 💼 **LinkedIn** | [Nombre](https://linkedin.com/in/usuario) |

> *"Frase personal"*

---

### 🧑‍💻 Antonio Salces Alcaraz

<img src="./assets/team/nombre2.jpg" width="100" style="border-radius:50%"/>

| | |
|---|---|
| 🐙 **GitHub** | [@usuario](https://github.com/usuario) |
| 💼 **LinkedIn** | [Nombre](https://linkedin.com/in/usuario) |

> *"Frase personal"*

---

### 🧑‍💻 Francisco Cobo Sánchez

<img src="./assets/team/nombre3.jpg" width="100" style="border-radius:50%"/>

| | |
|---|---|
| 🐙 **GitHub** | [@usuario](https://github.com/Paco16889) |
| 🐙 **GitHub** | [@usuario](https://github.com/yo164) |
| 💼 **LinkedIn** | [Nombre](https://linkedin.com/in/usuario) |

> *""*

---





## 📖 Descripción del Proyecto

> **Ziryab** es una aplicación de gestión educativa que permite organizar un centro de forma integral: grupos, horarios, asignaturas y usuarios. Ofrece perfiles de **administrador**, **profesor** y **alumno**, para que cada rol gestione y consulte su parte del centro. Así unifica la coordinación del equipo docente y el seguimiento académico del estudiantado en una sola plataforma.

![Screenshot principal](./assets/screenshots/main.png)

## 📚 Aportación por Módulos

### Acceso a Datos

**Aportación al proyecto:** En Ziryab, la parte vinculada a este módulo se centró sobre todo en **Angular**: organización de la capa de acceso a datos mediante **servicios** (`providedIn: 'root'`), **inyección de dependencias** con `inject()`, **pipes** para transformar información en plantillas y **signals** para el estado reactivo de la UI. Así se separa la lógica de consulta y gestión de datos de los componentes, reutilizando servicios entre pantallas de alumno, profesor y administración.

**Evidencias (Jira):**
- [EQ-30](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-30) — Acceso a datos del backend (capa de servicios en el front)
- [EQ-28](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-28) — Pipes personalizados
- [EQ-238](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-238) — Tipado de signals en `ClasesComponent` y `ClasesProfesorComponent`
- [EQ-315](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-315) — `SelectedStudentService` con signals
- [EQ-298](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-298) — Migración de assignments y servicios Angular
- [EQ-333](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-333) — `StudentPasswordService` (`inject()`, `core/services/`)

---

### Programación Multimedia y Dispositivos Móviles

**Aportación al proyecto:** La interfaz de Ziryab se diseñó con enfoque **mobile first** y diseño **responsivo**, de modo que la web se adapta correctamente a móvil, tablet y escritorio. Además, se desarrolló una **aplicación Android** (con poca trazabilidad en Jira) orientada a profesor y alumno, centrada en el día a día en el aula: pasar lista, consultar horarios, justificar faltas, entregar tareas y revisarlas.

**Evidencias (Jira):**
- [EQ-352](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-352) — Arreglos de Front (UI adaptable)
- [EQ-265](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-265) — Componentes de horario (alumno y profesor)
- [EQ-287](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-287) — Horarios semanales (constructor y rejilla)
- [EQ-204](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-204) · [EQ-211](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-211) — Gestión de tareas (profesor y alumno; también en app Android)
- App Android (lista, horarios, faltas, tareas): sin ticket dedicado en Jira

---

### Programación de Servicios y Procesos

**Aportación al proyecto:** En el frontend se aplicaron conceptos de **servicios** y **procesos asíncronos**: servicios Angular (`providedIn: 'root'`) que encapsulan la comunicación HTTP con el backend mediante **Observables**, flujos de autenticación (`AuthService`), gestión de tareas (profesor y alumno), credenciales y notificaciones. Los componentes delegan en estos servicios la lógica de negocio y el manejo de respuestas, separando la ejecución en segundo plano de la capa de presentación.

**Evidencias (Jira):**
- [EQ-168](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-168) — Refactor de `AuthService` (Firebase/backend, `localStorage`, sustitución de `.toPromise()`)
- [EQ-204](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-204) — `TaskService` HTTP (CRUD de tareas, profesor)
- [EQ-211](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-211) — `StudentTaskService` HTTP (entregas y tareas, alumno)
- [EQ-298](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-298) — Migración de assignments y servicios Angular asociados
- [EQ-333](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-333) — `StudentPasswordService` (credenciales de alumnos)
- [EQ-217](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-217) · [EQ-218](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-218) · [EQ-219](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-219) — Módulo de notificaciones (modelo, API/tiempo real, componente con signals)
- [EQ-229](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-229) · [EQ-344](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-344) — UI de notificaciones

---

### Desarrollo de Interfaces

**Aportación al proyecto:** Desarrollo de la interfaz con **Angular 19+ standalone**, **Tailwind CSS** y **SCSS** puntual: pantallas por rol (admin, profesor, alumno, shared), componentes reutilizables, estados de carga/vacío/éxito e **internacionalización** (es/en/de). Destacan el **modo oscuro** global con toggle y persistencia, los **arreglos recientes de CSS** en el front y el rediseño de patrones de listado y acciones CRUD.

**Evidencias (Jira):**
- [EQ-322](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-322) — Modo oscuro en toda la app (`darkMode: 'class'`, tokens Tailwind, toggle)
- [EQ-352](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-352) — Arreglos de Front (CSS y correcciones visuales recientes)
- [EQ-340](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-340) — Rediseño de botones CRUD en listados admin
- [EQ-176](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-176) — Componente genérico de listado reutilizable
- [EQ-348](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-348) · [EQ-349](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-349) · [EQ-350](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-350) · [EQ-351](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-351) — Traducción de pantallas (admin, profesor, alumno, shared)
- [EQ-210](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-210) · [EQ-203](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-203) — Interfaces de tareas (alumno y profesor)

---

### Servidores y APIs

**Aportación al proyecto:** Backend con **Node.js + Express**, **Prisma** y **PostgreSQL**: API REST modular por dominio (alumnos, profesores, tareas, horarios, notificaciones, asignaciones…), **autenticación/autorización** por roles, validación con **Zod** y documentación en **Swagger** (`/api-docs`). Incluye migraciones Prisma, despliegue en **Render** y mantenimiento de contratos API para el front.

**Evidencias (Jira):**
- [EQ-24](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-24) — Autenticación con el backend (JWT, middleware `auth`/`authorize`)
- [EQ-161](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-161) — JWT en cookie HttpOnly (backend + front)
- [EQ-143](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-143) — Documentación interna de la capa backend y endpoints
- [EQ-192](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-192) · [EQ-202](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-202) · [EQ-390](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-390) — Documentación Swagger (tareas, entregas, evaluaciones)
- [EQ-185](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-185) · [EQ-195](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-195) — API REST de tareas y entregas (profesor/alumno)
- [EQ-279](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-279) · [EQ-299](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-299) — API de asignaciones docentes (incl. bulk)
- [EQ-275](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-275) · [EQ-295](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-295) — API base de horarios semanales
- [EQ-218](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-218) · [EQ-224](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-224) — Notificaciones (REST + tiempo real)
- [EQ-332](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-332) — Endpoints de credenciales de alumnos
- [EQ-391](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-391) · [EQ-387](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-387) · [EQ-383](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-383) — Migraciones Prisma (sustituciones, evaluaciones, tutor)
- [EQ-393](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-393) · [EQ-394](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-394) — Módulo `assignment-substitution` (rutas + transacciones)
- [EQ-369](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-369) · [EQ-157](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-157) · [EQ-156](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-156) — Despliegue backend, API y BBDD en Render

---

### Iniciativa para la Empleabilidad II

**Aportación al proyecto:** Trabajo propio del módulo (no integrado en el código de Ziryab ni en el tablero Jira del TFG). Se aplicaron contenidos de **creación y planificación de una iniciativa**: análisis del entorno, **estudio de mercado** orientado a centros educativos, definición de la propuesta de valor de la plataforma y líneas de actuación para su puesta en marcha. Como salida práctica se planteó la **presentación del proyecto** a **centros escolares**, **asociaciones de madres y padres (AMPAs)** y colectivos docentes, y un plan de **pruebas piloto** e **implantación** en empresas o instituciones del ámbito educativo (centros privados o centros públicos), recogiendo feedback para validar la utilidad de Ziryab antes de un despliegue más amplio.

**Evidencias (Jira):**
- Estudio de mercado, memoria del ejercicio y material de presentación (módulo IPE II): **sin ticket dedicado en Jira** — entrega académica del módulo / documentación unificada del TFG (véase [Documentación](#-documentación))
- Piloto e implantación en centros educativos: **sin ticket dedicado en Jira** — complementa el despliegue técnico de la app (véase [Despliegue](#-despliegue))

---

### Sistemas de Gestión Empresarial

**Aportación al proyecto:** **Ziryab** funciona como un **sistema de gestión integrado** del centro educativo: un único software con **roles** (administrador, profesor, alumno), **datos maestros** (usuarios, grupos, ciclos, asignaturas) y **procesos** (matriculación, asignaciones docentes, horarios, sustituciones, tablón de anuncios, suspensión masiva de clases). El **panel de administración** concentra el mantenimiento de entidades y la coordinación del día a día del centro.

**Evidencias (Jira):**
- [EQ-288](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-288) — Modelo de negocio: asignaciones docentes y matrículas (`assignments` / `enrollments`)
- [EQ-290](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-290) — Panel admin: CRUD genérico, suspensión masiva y tablón de anuncios
- [EQ-304](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-304) — Patrón CRUD reutilizable (listado + formulario + menú) para entidades del centro
- [EQ-300](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-300) — Wizard admin: crear asignaciones docentes desde el ciclo formativo
- [EQ-307](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-307) — Flujo de creación de grupos y horarios durante el curso académico
- [EQ-311](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-311) — Flujo de matriculación de alumnos (robustez y reglas de negocio)
- [EQ-305](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-305) — Suspensión masiva de sesiones de clase (proceso operativo del centro)
- [EQ-306](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-306) · [EQ-317](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-317) — Tablón de anuncios (modelo `Issue` y audiencias por rol)
- [EQ-329](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-329) — Gestión de credenciales de alumnos y acceso para tutores
- [EQ-382](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-382) — Sustituciones docentes (historial y reglas sobre asignaciones)
- [EQ-324](https://g-team-ddm5j4dr.atlassian.net/browse/EQ-324) — Manuales de usuario por rol (Admin, Teacher, Alumno)

---

## 📦 Repositorios

| Repo | URL |
|---|---|
| **Frontend** | [🔗 enlace](https://github.com/...) |
| **Backend** | [🔗 enlace](https://github.com/...) |

---

## 🚀 Despliegue

| | URL |
|---|---|
| **App** | [🔗 enlace](https://...) |
| **Credenciales de prueba** | usuario: `test@test.com` / pass: `1234` |

---

## 📄 Documentación

| Documento | Enlace |
|---|---|
| **PDF unificado** | [🔗 enlace](./docs/documentacion.pdf) |
| **PDF Jira** | [🔗 enlace](./docs/jira.pdf) |
| **Guion presentación oral** (demo, plan B, ensayo) | [📁 carpeta](./docs/guion-presentacion-oral/README.md) |

---

## 📊 Gestión del Proyecto (Jira)

> Resumen del tablero, epics y reparto de tareas

![Tablero Jira](./assets/jira/tablero.png)

---

## 🧩 Compodoc

| | |
|---|---|
| **Repo** | [🔗 enlace](https://github.com/) |
| **Servidor** | [🔗 enlace](https://...) |