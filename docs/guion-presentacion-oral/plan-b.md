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

Mínimo recomendado (nombres sugeridos):

- `01-login.png`
- `02-admin-dashboard.png`
- `03-alumnos-listado.png`
- `04-matricula-o-ficha-alumno.png`
- `05-asignaciones-u-horario.png`
- `06-tablon-anuncio.png` (opcional)
- `07-profesor-clases.png`
- `08-profesor-tarea.png`
- `09-alumno-horario.png`
- `10-alumno-entrega-tarea.png`

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
