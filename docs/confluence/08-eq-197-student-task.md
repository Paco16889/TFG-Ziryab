# EQ-197 · Creación automática de StudentTask al publicar tarea

**Origen:** https://g-team-ddm5j4dr.atlassian.net/wiki/spaces/Ziryab/pages/43712514  
**ID página:** 43712514

---

## Objetivo

Alinear la lógica de backend para que los `StudentTask` se creen **cuando la tarea se publica**, no siempre al crearla.

## Ticket Jira

- `EQ-197`
- Descripción: al ejecutar `POST /tasks`, generar un `StudentTask` `PENDING` por cada alumno inscrito en el grupo asociado a la asignación.

## Cambios implementados

### 1) `task.service.ts`

#### `create()`

- Se añade soporte para `isPublished` en `CreateTaskData`.
- Se persiste `isPublished` en la entidad `Task` (default `false` si no se envía).
- La creación de `StudentTask` se ejecuta **solo si** `task.isPublished === true`.

#### `update()`

- Se añade soporte para `isPublished` en `UpdateTaskData`.
- Si la tarea pasa de `isPublished=false` a `isPublished=true`, se crean automáticamente `StudentTask` `PENDING` para todos los alumnos `ENROLLED` de la asignatura/grupo/año.
- Se usa `skipDuplicates: true` para evitar errores por la constraint única (`idTask`, `idStudentEnrollment`).

### 2) `task.controller.ts`

- Se añade parseo/validación de `isPublished` (`true`/`false`) para `POST /api/tasks` y `PATCH /api/tasks/:id`.
- Si `isPublished` es inválido, devuelve `400` con mensaje claro.

### 3) Tests

- Se actualiza `task.service.spec.ts`:
  - Caso: crea tarea publicada y genera `StudentTask`.
  - Caso nuevo: crea tarea no publicada y **no** genera `StudentTask`.
  - Caso nuevo: al publicar desde `update`, genera `StudentTask` con `skipDuplicates: true`.

## Resultado funcional

- Tarea no publicada: no se generan entregas.
- Tarea publicada en creación: se generan entregas `PENDING`.
- Tarea publicada posteriormente (PATCH): se generan entregas `PENDING` para matriculados faltantes.

## Verificación ejecutada

- Comando: `npm test -- src/modules/task/task.service.spec.ts`
- Resultado: `10/10` tests OK.
