# Demo paso a paso — qué hacer, qué decir y qué capturar

> Rellenar **URL** y credenciales en [credenciales-demo.md](./credenciales-demo.md) cuando EQ-373 esté listo.  
> Pasos marcados con ⚠️ son **opcionales** si vais justos de tiempo.  
> **Capturas:** guardar cada PNG en [`screenshots/`](./screenshots/) con el nombre indicado. Capturad **pantallas del flujo de demo** (listados, detalle, wizard, rejilla), no formularios vacíos de “Crear X”.

---

## Antes de subir al escenario

- [ ] Abrir la app en el navegador (pestaña admin ya logueada en segundo plano, si el tribunal lo permite).
- [ ] Tener segunda pestaña con login profesor / alumno preparado o cerrar sesión antes de la demo.
- [ ] Comprobar que la BD de demo tiene datos (ciclo, grupo, asignación, profesor, alumno con tarea).
- [ ] Modo claro u oscuro decidido de antemano (no cambiar en mitad del flujo).
- [ ] Plan B: carpeta `screenshots/` o vídeo local abierto por si falla la red.
- [ ] Ir tachando capturas en la [lista al final](#índice-de-capturas-screenshots).

---

## Paso 0 — Entrada (30 s)

| Acción | Qué decir |
|---|---|
| Mostrar URL de producción (o local) | “Accedemos a Ziryab desplegado en…” |
| Pantalla de login | “Tres roles: administrador, profesor y alumno; cada uno ve solo lo que le corresponde.” |

> **Captura `screenshots/00-url-app.png` (opcional):** Barra del navegador con la **URL de Ziryab** (producción o demo). Sirve para el plan B si no carga la app.

![URL de la aplicación](./screenshots/00-url-app.png)

> **Captura `screenshots/01-login-tres-roles.png`:** Pantalla de **login** donde se vean los **tres roles** o el acceso diferenciado (admin / profesor / alumno). No hace falta credenciales visibles.

![Login — tres roles](./screenshots/01-login-tres-roles.png)

---

## Bloque A — Administrador (**4:00** en vivo)

> **Contexto de los 15 min totales:** ~**2 min** presentación (contexto + solución) · ~**9 min** demo (admin 4 + profesor ~2,5 + alumno ~2,5) · ~**4 min** preguntas.  
> **Historia admin:** montar la **oferta escolar** (ciclo → asignaturas → assignments → horario) y cerrar con **una matrícula**. Tablón y suspensión masiva **fuera del directo** (solo capturas / plan B).

| Paso | ⏱ | Acum. |
|---|---:|---:|
| A1 Login + panel | 0:20 | 0:20 |
| A2 Crear ciclo de prueba | 0:30 | 0:50 |
| A3 Asignaturas (3–4) en el ciclo | 0:45 | 1:35 |
| A4 Assignments (ambos cursos) | 0:55 | 2:30 |
| A5 Horario + assignments | 1:00 | 3:30 |
| A6 Matricular un estudiante | 0:25 | 3:55 |
| Cierre admin | 0:05 | **4:00** |

⚠️ Si A6 se alarga, acortad una asignatura en A3 o mostrad matrícula ya hecha y solo confirmáis (−20 s).

---

### A1. Login admin · **0:20**

| ⏱ | Acción | Qué decir |
|---:|---|---|
| 0:20 | Login **admin** (credenciales-demo) → panel | “Entramos como administrador: desde aquí se monta la oferta escolar del centro.” |

> **Captura `screenshots/02-admin-panel-menu.png`:** Panel admin con menú (Ciclos, Assignments, Horarios, Estudiantes…).

![Admin — panel y menú](./screenshots/02-admin-panel-menu.png)

---

### A2. Ciclo formativo · **0:30**

| ⏱ | Acción | Qué decir |
|---:|---|---|
| 0:10 | Menú → **Ciclos** / Course | “Primero definimos el ciclo de prueba del curso.” |
| 0:20 | **Crear** ciclo de demo (nombre corto, p. ej. `Demo TFG 2026`) y guardar | “El ciclo es el contenedor de la oferta: curso académico y asignaturas cuelgan de aquí.” |

> **Captura `screenshots/03-ciclo-formativo-detalle.png`:** Ciclo **recién creado o abierto** con nombre visible (detalle o listado con el ciclo seleccionado).

![Ciclo formativo — oferta educativa](./screenshots/03-ciclo-formativo-detalle.png)

---

### A3. Asignaturas en el ciclo · **0:45**

| ⏱ | Acción | Qué decir |
|---:|---|---|
| 0:45 | Desde el ciclo, **enganchar / crear 3–4 asignaturas** (Subject) | “Añadimos las asignaturas del ciclo; sin esto no hay assignments ni horario que cubrir.” |

_Hacer en bloque sin pausas largas: nombres cortos (`M01`, `M02`…) o reutilizar plantilla._

> **Captura:** mismo `03-ciclo-formativo-detalle.png` ampliado **con las 3–4 asignaturas visibles** en el ciclo, o captura aparte del listado de asignaturas del ciclo.

---

### A4. Assignments · **0:55**

| ⏱ | Acción | Qué decir |
|---:|---|---|
| 0:10 | Menú → **Assignments** / asignaciones docentes | “Cubrimos la oferta: cada asignatura va a un profesor y a un curso/grupo.” |
| 0:45 | Crear assignments para **ambos cursos** del ciclo (asignatura + profesor + curso) | “Repetimos el patrón en el segundo curso; así queda la plantilla docente del ciclo.” |

> **Captura `screenshots/04-wizard-asignaciones-docentes.png`:** Pantalla de **assignments** con filas creadas (profesor + asignatura + curso visibles). Resumen del wizard o listado relleno.

![Wizard — asignaciones docentes](./screenshots/04-wizard-asignaciones-docentes.png)

---

### A5. Horarios · **1:00**

| ⏱ | Acción | Qué decir |
|---:|---|---|
| 0:15 | Menú → **Horarios** → crear / abrir horario del curso | “El horario cierra la oferta en el tiempo.” |
| 0:45 | **Arrastrar o asignar** los assignments a franjas de la rejilla semanal | “Metemos las asignaciones en el horario; ya tenemos oferta escolar completa.” |

> **Captura `screenshots/06-horario-semanal-grupo.png`:** Rejilla con **assignments colocados** (franjas con asignatura/profesor).

![Horario semanal del grupo](./screenshots/06-horario-semanal-grupo.png)

**Checkpoint narrativo (~3:30):** *“Con ciclo, asignaturas, assignments y horario, la oferta escolar está montada.”*

---

### A6. Matricular estudiante · **0:25**

| ⏱ | Acción | Qué decir |
|---:|---|---|
| 0:10 | Menú → **Estudiantes** / Alumnos | “Solo falta la demanda: un alumno en esa oferta.” |
| 0:15 | **Matricular un estudiante** en el curso/grupo del ciclo de demo (EQ-311) | “Enganchamos al alumno con la oferta; con esto cerramos el admin.” |

> **Captura `screenshots/07-matricula-alumno-en-grupo.png`:** Resultado de matrícula (alumno + curso/ciclo visibles).

![Matrícula — alumno en grupo del ciclo](./screenshots/07-matricula-alumno-en-grupo.png)

---

### Cierre bloque admin · **0:05**

| ⏱ | Acción | Qué decir |
|---:|---|---|
| 0:05 | Cerrar sesión o cambiar de rol | *“Oferta montada y alumno matriculado; pasamos al profesor.”* |

→ Logout admin o ventana incógnito con usuario **profesor**.

---

### Fuera de demo en vivo (solo capturas / plan B) ⚠️

No entra en los **4 min** del admin en tribunal. Dejad PNG en `screenshots/` para EQ-374.

| Tema | Captura |
|---|---|
| Tablón con audiencia | `09-tablon-anuncio-audiencia.png` |
| Suspensión masiva | `10-suspension-masiva-preview.png` |
| Ficha alumno / credenciales | `08-alumno-matriculado-ficha.png` |
| Grupos del ciclo (si aplica en vuestra UI) | `05-grupos-del-ciclo.png` |

---

## Bloque B — Profesor (≈2–3 min)

### B1. Login profesor

| Acción | Qué decir |
|---|---|
| Login con usuario **profesor** de demo | “El profesor entra a sus clases, horarios y tareas.” |

> **Captura `screenshots/11-profesor-panel-inicio.png`:** **Inicio del profesor** tras login: menú o resumen con “mis clases” / horario (vista **TEACHER**, no admin).

![Profesor — panel de inicio](./screenshots/11-profesor-panel-inicio.png)

### B2. Horario y clases

| Acción | Qué decir |
|---|---|
| Abrir **horario** o **mis clases** | “Ve sus sesiones y grupos asignados.” |
| Entrar en una **clase concreta** del grupo de demo | “Desde la clase accede al detalle del grupo.” |

> **Captura `screenshots/12-profesor-mis-clases-horario.png`:** Listado o **horario del profesor** con las **clases/grupos de demo** visibles.

![Profesor — mis clases u horario](./screenshots/12-profesor-mis-clases-horario.png)

> **Captura `screenshots/13-profesor-detalle-clase-grupo.png`:** **Detalle de una clase/grupo** (alumnos del grupo, sesión o cabecera con nombre del grupo de demo).

![Profesor — detalle de clase](./screenshots/13-profesor-detalle-clase-grupo.png)

### B3. Tareas

| Acción | Qué decir |
|---|---|
| Abrir **tarea de demo** ya creada (preferible) ⚠️ crear tarea en vivo | “Crea trabajos con fecha de entrega; el alumno los ve en su panel.” |
| Mostrar entregas o estado de la tarea | “Aquí revisa entregas y correcciones.” |

> **Captura `screenshots/14-profesor-tarea-entregas.png`:** Pantalla de **tarea del grupo de demo**: título, fecha, listado de **entregas o estado** (pendiente/entregado). No el formulario “Nueva tarea” vacío.

![Profesor — tarea y entregas](./screenshots/14-profesor-tarea-entregas.png)

### B4. Lista / asistencia ⚠️

| Acción | Qué decir |
|---|---|
| Pasar lista o justificar faltas | “Control de asistencia en la misma plataforma.” |

> **Captura `screenshots/15-profesor-lista-asistencia.png`:** Pantalla de **pasar lista** o **asistencia** de una sesión del grupo de demo (alumnos con estado presente/ausente).

![Profesor — lista de asistencia](./screenshots/15-profesor-lista-asistencia.png)

**Transición:**  
*“Por último, la vista del alumno.”*

---

## Bloque C — Alumno (≈2 min)

### C1. Login alumno

| Acción | Qué decir |
|---|---|
| Login alumno de demo | “El alumno consulta su horario y trabajos pendientes.” |

> **Captura `screenshots/16-alumno-panel-inicio.png`:** **Inicio del alumno** (vista **STUDENT**): resumen, accesos a horario/tareas, sin menú de admin.

![Alumno — panel de inicio](./screenshots/16-alumno-panel-inicio.png)

### C2. Horario

| Acción | Qué decir |
|---|---|
| Mostrar **horario semanal** del alumno | “Vista clara de sus clases.” |

> **Captura `screenshots/17-alumno-horario-semanal.png`:** **Horario del alumno de demo** con sesiones rellenas (mismo grupo/ciclo preparado en EQ-373).

![Alumno — horario semanal](./screenshots/17-alumno-horario-semanal.png)

### C3. Tareas y entrega

| Acción | Qué decir |
|---|---|
| Abrir **tarea pendiente** de demo | “Entrega el trabajo desde la app.” |
| Mostrar entrega realizada o pantalla de subir archivo ⚠️ | “El profesor lo corrige desde su panel.” |

> **Captura `screenshots/18-alumno-tarea-pendiente-entrega.png`:** Detalle de **tarea pendiente** del alumno (misma tarea que en captura del profesor) con botón de **entregar** o **ya entregado**.

![Alumno — tarea y entrega](./screenshots/18-alumno-tarea-pendiente-entrega.png)

### C4. Notificaciones ⚠️

| Acción | Qué decir |
|---|---|
| Abrir campana / listado de notificaciones | “Avisos de tareas o comunicados del centro.” |

> **Captura `screenshots/19-alumno-notificaciones.png`:** **Listado o campana de notificaciones** con al menos un aviso (tarea nueva, anuncio del tablón, etc.).

![Alumno — notificaciones](./screenshots/19-alumno-notificaciones.png)

---

## Bloque D — Cierre técnico opcional (20–30 s) ⚠️

| Acción | Qué decir |
|---|---|
| Mencionar app Android o Swagger `/api-docs` | “También tenemos cliente móvil / API documentada.” |

> **Captura `screenshots/20-swagger-o-android.png` (opcional):** **`/api-docs`** (Swagger) o pantalla de la **app Android** en un flujo real (horario, lista…).

![Swagger o app Android](./screenshots/20-swagger-o-android.png)

---

## Si algo falla en directo

1. No insistir más de **10 segundos**.
2. Frase: *“En el entorno de prueba tenemos esto preparado; os enseño la captura.”*
3. Abrir el PNG del paso en `screenshots/` (mismo nombre que arriba) o vídeo en `videos/`.
4. Seguir con el **siguiente rol** (no reiniciar toda la demo).

Ver [plan-b.md](./plan-b.md).

---

## Índice de capturas (`screenshots/`)

| Archivo | Paso | Obligatoria |
|---|---|:---:|
| `00-url-app.png` | 0 — URL | Opcional |
| `01-login-tres-roles.png` | 0 — Login | Sí |
| `02-admin-panel-menu.png` | A1 — Admin | Sí |
| `03-ciclo-formativo-detalle.png` | A2–A3 — Ciclo + asignaturas | Sí |
| `04-wizard-asignaciones-docentes.png` | A4 — Assignments | Sí |
| `05-grupos-del-ciclo.png` | _(opcional / plan B)_ | Opcional |
| `06-horario-semanal-grupo.png` | A5 — Horario | Sí |
| `07-matricula-alumno-en-grupo.png` | A6 — Matrícula | Sí |
| `08-alumno-matriculado-ficha.png` | A6 — Ficha | Opcional |
| `09-tablon-anuncio-audiencia.png` | Fuera de demo | Opcional |
| `10-suspension-masiva-preview.png` | Fuera de demo | Opcional |
| `11-profesor-panel-inicio.png` | B1 — Profesor | Sí |
| `12-profesor-mis-clases-horario.png` | B2 — Clases | Sí |
| `13-profesor-detalle-clase-grupo.png` | B2 — Detalle clase | Sí |
| `14-profesor-tarea-entregas.png` | B3 — Tarea | Sí |
| `15-profesor-lista-asistencia.png` | B4 — Asistencia | Opcional |
| `16-alumno-panel-inicio.png` | C1 — Alumno | Sí |
| `17-alumno-horario-semanal.png` | C2 — Horario | Sí |
| `18-alumno-tarea-pendiente-entrega.png` | C3 — Entrega | Sí |
| `19-alumno-notificaciones.png` | C4 — Notificaciones | Opcional |
| `20-swagger-o-android.png` | D — Extra | Opcional |

---

## Rutas / pantallas (rellenar con nombres reales del menú)

| Paso | ⏱ | Ruta o menú en la app | Captura | ¿OK ensayo? |
|---|---:|---|---|:---:|
| A1 Login + panel | 0:20 | | `01-login` + `02-admin-panel` | ☐ |
| A2 Ciclo | 0:30 | Ciclos → crear | `03-ciclo-formativo-detalle` | ☐ |
| A3 Asignaturas | 0:45 | Ciclo → 3–4 Subject | `03-ciclo-formativo-detalle` | ☐ |
| A4 Assignments | 0:55 | Assignments → ambos cursos | `04-wizard-asignaciones` | ☐ |
| A5 Horario | 1:00 | Horarios → rejilla | `06-horario-semanal-grupo` | ☐ |
| A6 Matrícula | 0:25 | Estudiantes → matricular | `07-matricula-alumno` | ☐ |
| Panel profesor | | `11-profesor-panel-inicio.png` | ☐ |
| Mis clases / horario prof. | | `12-profesor-mis-clases-horario.png` | ☐ |
| Tarea + entregas prof. | | `14-profesor-tarea-entregas.png` | ☐ |
| Panel alumno | | `16-alumno-panel-inicio.png` | ☐ |
| Horario alumno | | `17-alumno-horario-semanal.png` | ☐ |
| Entrega tarea alumno | | `18-alumno-tarea-pendiente-entrega.png` | ☐ |
