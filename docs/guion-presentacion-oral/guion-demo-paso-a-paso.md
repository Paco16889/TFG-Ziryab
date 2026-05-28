# Demo paso a paso — qué hacer y qué decir

> Rellenar **URL** y credenciales en [credenciales-demo.md](./credenciales-demo.md) cuando EQ-373 esté listo.  
> Pasos marcados con ⚠️ son **opcionales** si vais justos de tiempo.

---

## Antes de subir al escenario

- [ ] Abrir la app en el navegador (pestaña admin ya logueada en segundo plano, si el tribunal lo permite).
- [ ] Tener segunda pestaña con login profesor / alumno preparado o cerrar sesión antes de la demo.
- [ ] Comprobar que la BD de demo tiene datos (grupo, asignatura, profesor, alumno con tarea).
- [ ] Modo claro u oscuro decidido de antemano (no cambiar en mitad del flujo).
- [ ] Plan B: carpeta `screenshots/` o vídeo local abierto por si falla la red.

---

## Paso 0 — Entrada (30 s)

| Acción | Qué decir |
|---|---|
| Mostrar URL de producción (o local) | “Accedemos a Ziryab desplegado en…” |
| Pantalla de login | “Tres roles: administrador, profesor y alumno; cada uno ve solo lo que le corresponde.” |

---

## Bloque A — Administrador (≈3–4 min)

> **Orden narrativo (oferta educativa):** primero se define la **oferta** (ciclo/curso formativo), después se **cubre** con recursos (grupos, asignaturas, profesores, horarios) y por último la **demanda** (matricular alumnos). Es el orden natural del centro y evita errores de “matricular sin grupo/horario creado”.  
> **Día de la defensa:** lo ideal es tener un ciclo de demo **ya cargado** (EQ-373) y **mostrar** el flujo en ese orden; crear todo en vivo solo si está muy probado.

### A1. Login admin

| Acción | Qué decir |
|---|---|
| Iniciar sesión con usuario **admin** (ver credenciales-demo) | “El administrador monta la oferta educativa del centro: ciclos, grupos, profesores y matrículas.” |

### A2. Panel / menú principal

| Acción | Qué decir |
|---|---|
| Recorrer menú lateral o dashboard admin | “Todo parte del ciclo formativo: de ahí salen grupos, asignaciones y matrículas.” |

### A3. Crear o abrir la oferta educativa (ciclo / Course)

| Acción | Qué decir |
|---|---|
| Ir a **Ciclos formativos** / **Courses** / oferta educativa _(nombre real en menú)_ | “Primero definimos la oferta: qué ciclo impartimos este curso.” |
| Crear ciclo de demo ⚠️ o abrir el ciclo ya preparado | “Aquí quedan asociados curso académico, asignaturas y la estructura del ciclo.” |
| _(Si solo mostráis)_ Señalar asignaturas / módulos del ciclo | “La oferta educativa es el contenedor; luego la cubrimos con grupos y profesores.” |

### A4. Cubrir la oferta — grupos, asignaciones y horarios

| Acción | Qué decir |
|---|---|
| Desde el **ciclo / Course**, abrir wizard de **asignaciones docentes** (EQ-300) | “Cubrimos la oferta: cada asignatura y grupo tiene su profesor.” |
| Crear o mostrar **grupos** del ciclo (flujo EQ-307) | “Los grupos son las unidades donde luego matriculamos alumnos.” |
| Abrir **horario semanal** (rejilla por grupo) | “El horario cierra la planificación: franjas y validación de horas semanales.” |
| _(Opcional)_ Confirmar en UI que asignaciones y horario están coherentes | “Sin esto, matricular alumnos no tendría sentido operativo.” |

### A5. Cubrir la oferta — demanda: matricular alumnos

| Acción | Qué decir |
|---|---|
| Ir a **Alumnos** → matricular en el **grupo/asignaturas del ciclo** (EQ-311) | “Por último incorporamos la demanda: alumnos matriculados en la oferta que acabamos de preparar.” |
| Mostrar alumno ya matriculado ⚠️ o matricular uno `Demo TFG` si el flujo es estable | “El asistente de matrícula respeta grupo y curso académico; evitamos alumnos huérfanos.” |
| Ficha o credenciales del alumno ⚠️ | “El centro puede consultar credenciales cuando procede.” |

### A6. Tablón de anuncios ⚠️

| Acción | Qué decir |
|---|---|
| Crear o mostrar un aviso con audiencia (todo el centro / grupo / rol) | “Comunicación interna: avisos dirigidos a quien corresponda.” |

### A7. Suspensión masiva de clases ⚠️

| Acción | Qué decir |
|---|---|
| Abrir modal de suspensión (fechas / vista previa) solo si está estable | “Ante festivos o cierres, el admin puede suspender sesiones en bloque.” |

**Cerrar bloque admin:**  
*“Con el centro configurado, vemos el día a día del profesor.”*  
→ Cerrar sesión o usar ventana incógnito / segundo navegador.

---

## Bloque B — Profesor (≈2–3 min)

### B1. Login profesor

| Acción | Qué decir |
|---|---|
| Login con usuario **profesor** de demo | “El profesor entra a sus clases, horarios y tareas.” |

### B2. Horario y clases

| Acción | Qué decir |
|---|---|
| Abrir **horario** o **mis clases** | “Ve sus sesiones y grupos asignados.” |
| Entrar en una clase concreta | “Desde la clase accede al detalle del grupo.” |

### B3. Tareas

| Acción | Qué decir |
|---|---|
| Listar tareas o crear una tarea rápida ⚠️ | “Crea trabajos con fecha de entrega; el alumno los ve en su panel.” |
| Si ya existe tarea de demo, abrirla | “Aquí revisa entregas y estado.” |

### B4. Lista / asistencia ⚠️

| Acción | Qué decir |
|---|---|
| Pasar lista o justificar faltas si el flujo está listo | “Control de asistencia integrado en la misma plataforma.” |

**Transición:**  
*“Por último, la vista del alumno.”*

---

## Bloque C — Alumno (≈2 min)

### C1. Login alumno

| Acción | Qué decir |
|---|---|
| Login alumno de demo | “El alumno consulta su horario y trabajos pendientes.” |

### C2. Horario

| Acción | Qué decir |
|---|---|
| Mostrar horario semanal | “Vista clara de sus clases.” |

### C3. Tareas y entrega

| Acción | Qué decir |
|---|---|
| Abrir tarea pendiente | “Entrega el trabajo desde la app.” |
| _(Si hay tiempo)_ Subir archivo o marcar entregado | “El profesor lo corrige desde su panel.” |

### C4. Notificaciones ⚠️

| Acción | Qué decir |
|---|---|
| Abrir campana / listado de notificaciones | “Avisos de nuevas tareas o comunicados del centro.” |

---

## Bloque D — Cierre técnico opcional (20–30 s) ⚠️

| Acción | Qué decir |
|---|---|
| Mencionar app Android o Swagger `/api-docs` solo si sobra tiempo | “También tenemos cliente móvil / API documentada para integraciones.” |

---

## Si algo falla en directo

1. No insistir más de **10 segundos**.
2. Frase: *“En el entorno de prueba tenemos esto preparado; os enseño la captura.”*
3. Abrir screenshot o vídeo de `screenshots/` / `videos/`.
4. Seguir con el siguiente rol (no reiniciar toda la demo).

Ver detalle en [plan-b.md](./plan-b.md).

---

## Rutas / pantallas (rellenar con nombres reales del menú)

Cuando tengáis la app delante, completad esta tabla para no dudar el día D:

| Paso | Ruta o menú en la app | ¿OK en ensayo? |
|---|---|:---:|
| Login admin | | ☐ |
| Ciclo / oferta educativa (crear o abrir) | | ☐ |
| Grupos del ciclo | | ☐ |
| Wizard asignaciones desde Course | | ☐ |
| Horario grupo | | ☐ |
| Matricular alumno en grupo del ciclo | | ☐ |
| Tablón | | ☐ |
| Login profesor | | ☐ |
| Mis clases | | ☐ |
| Crear / ver tarea | | ☐ |
| Login alumno | | ☐ |
| Entregar tarea | | ☐ |
