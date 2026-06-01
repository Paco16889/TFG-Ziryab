# Documentación de Sistema de Gestión de Asistencia

**Origen:** https://g-team-ddm5j4dr.atlassian.net/wiki/spaces/Ziryab/pages/38830081  
**ID página:** 38830081

---

## 1. Decisiones Técnicas y Arquitectura

El módulo de asistencias está diseñado bajo una arquitectura cliente-servidor estricta, priorizando la seguridad y la separación de roles (Profesor vs. Alumno).

**Seguridad Core:** Toda la comunicación está protegida mediante tokens JWT almacenados en cookies invisibles (`HttpOnly`). Se implementan validaciones ABAC en el backend (`checkSessionOwnership`, `checkAssistanceOwnership`) para asegurar que un profesor solo modifica sus propias clases, y un alumno solo ve sus propias faltas.

## 2. Esquema de Base de Datos

| Campo | Tipo | Nulo | Descripción | Relación |
| --- | --- | --- | --- | --- |
| id | Int | No | Identificador único de la asistencia | - |
| status | Enum | No | `PRESENT`, `ABSENT`, `LATE`, `EXCUSED` | - |
| justificacionUri | String | Si | Ruta local del servidor | - |
| idSession | Int | No | ID de la sesión de clase impartida | SessionClass |
| idStrudentEnrollment | Int | No | ID de la matrícula del alumno | StudentEnrollment |

## 3. Backend

- `POST /api/assistances/bulk`: Permite registrar la asistencia de toda una clase en ráfaga. Valida estados y propiedad de la sesión.
- `GET /api/assistances/session/:idSession`: Devuelve la lista de alumnos y sus estados para una clase específica.
- `PATCH /api/assistances/assistancestatus/:id`: Actualiza el estado de una falta puntual
- `PATCH /api/assistances/justify/:id`: El profesor aprueba el justificante y cambia el estado a `EXCUSED`

- `GET /api/assistances/my-absences`: Devuelve los registros donde el alumno tiene `ABSENT`, `LATE` o `EXCUSED` (ignora los `PRESENT`).
- `POST /api/assistances/:id/justification-document`: Recibe un archivo mediante `multipart/form-data` (PDF/JPG/PNG), lo guarda en disco y actualiza el `justificationUri`.
- `GET /api/assistances/:id/justification-status`: Consulta el estado de la validación de su falta.

## 4. Frontend

**Componentes del Profesor**

- `ClasesProfesorComponent`: Pinta tarjetas con las asignaturas del profesor autenticado. Redirige al componente Temario pasando el `subjectId` por Query Params.

**Componentes del Alumno**

- `FichaUsuarioComponent`: Dashboard del estudiante. Muestra el historial mediante pills de colores (Rojo = Falta, Naranja = Retraso, Verde = Justificada).
- `JustificarFaltaModalComponent`: Componente de presentación.
  - **Lógica:** Valida del lado del cliente el tamaño del archivo (`< 1MB`) y la extensión permitida.
  - **Comunicación:** Usa `@Input` para recibir los datos y `@Output` para notificar éxito a la vista padre mostrando animaciones de carga.
