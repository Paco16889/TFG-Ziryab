# Plan B — fallos técnicos en la exposición (EQ-374)

> Documento vivo. Marcar checklist cuando cada ítem esté listo.

## Objetivo

Si la demo en vivo falla (red, Render caído, login, error 500), el equipo puede **seguir la presentación** sin perder más de 1–2 minutos ni quedarse en blanco.

---

## Riesgos y alternativas

| Riesgo | Probabilidad | Qué hacemos (plan B) | Responsable | Estado |
|---|---|---|---|:---:|
| Sin internet en el aula | Media | App **local** (`ng serve` + API local) o vídeo offline | | ☐ |
| Render / API caída | Media | Vídeo pregrabado de la demo completa | | ☐ |
| Login falla (credenciales) | Baja | Segunda cuenta de respaldo en credenciales-demo; capturas | | ☐ |
| Pantalla en blanco / CORS | Baja | Explicar con **screenshots** del flujo admin → prof → alumno | | ☐ |
| Paso concreto rompe (matrícula, tarea…) | Media | Saltar al siguiente rol; mostrar captura de ese paso | | ☐ |
| Proyector no reconoce portátil | Baja | PDF de diapos + screenshots en USB; un portátil de reserva | | ☐ |
| BD vacía o datos borrados | Baja | Coordinar con EQ-373: seed / backup; no crear datos en vivo críticos | Antonio | ☐ |

---

## Material de respaldo a preparar

### 1. Screenshots (carpeta `screenshots/`)

Nombres alineados con [guion-demo-paso-a-paso.md](./guion-demo-paso-a-paso.md) (capturar **flujos de demo**, no formularios vacíos):

**Mínimo obligatorio:** `01-login-tres-roles.png`, `02-admin-panel-menu.png`, `03-ciclo-formativo-detalle.png`, `04-wizard-asignaciones-docentes.png`, `05-grupos-del-ciclo.png`, `06-horario-semanal-grupo.png`, `07-matricula-alumno-en-grupo.png`, `11-profesor-panel-inicio.png`, `12-profesor-mis-clases-horario.png`, `14-profesor-tarea-entregas.png`, `16-alumno-panel-inicio.png`, `17-alumno-horario-semanal.png`, `18-alumno-tarea-pendiente-entrega.png`

**Opcionales:** `00-url-app.png`, `08-alumno-matriculado-ficha.png`, `09-tablon-anuncio-audiencia.png`, `10-suspension-masiva-preview.png`, `13-profesor-detalle-clase-grupo.png`, `15-profesor-lista-asistencia.png`, `19-alumno-notificaciones.png`, `20-swagger-o-android.png`

### 2. Vídeos (carpeta `videos/`)

- [ ] Vídeo 3–5 min: recorrido admin + profesor + alumno (sin audio o con voz en off).
- [ ] Guardar copia en USB y en el portátil de presentación.

### 3. App local

- [ ] Front y back arrancan en el portátil de demo.
- [ ] `.env` con BD de prueba (o SQLite/local si aplica).
- [ ] Probar **sin WiFi** una vez.

### 4. Datos de respaldo

- [ ] Export o seed documentado (quién ejecuta y cuándo antes del 5 de junio).
- [ ] No depender de “crear alumno en vivo” el día de la defensa.

---

## Frases para cambiar a plan B (ensayar en voz alta)

> “Parece que el servidor de prueba no responde; seguimos con el material preparado para no perder tiempo.”

> “Este paso lo tenemos registrado en captura; en producción funciona así…”

> “Pasamos a la vista del profesor; el flujo es el mismo con otro rol.”

---

## Orden de escalada (qué probar antes de rendirse)

1. Recargar página / cerrar sesión y volver a entrar.
2. Cambiar de **producción** a **local** (si está levantado).
3. Mostrar **screenshot** del paso actual y continuar guion.
4. Reproducir **vídeo** de la demo y narrar encima.
5. Solo diapositivas + explicación oral (último recurso; reservar 2 min).

---

## Práctica de transición (EQ-374)

- [ ] Simular fallo de red en un ensayo (modo avión 30 s).
- [ ] Cronometrar cuánto tardáis en abrir la captura o el vídeo (< 20 s).
- [ ] Todo el equipo sabe dónde está la carpeta `screenshots/` en el portátil.

---

## Criterios de aceptación EQ-374

- [ ] Plan B documentado (este archivo)
- [ ] Alternativas preparadas para fallos clave
- [ ] Videos o screenshots listos
- [ ] Equipo familiarizado (repasar en un ensayo grupal)
