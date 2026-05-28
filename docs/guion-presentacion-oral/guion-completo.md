# Guion completo — 15 minutos máximo

> **Objetivo:** 12–15 min totales. Diapositivas (EQ-372) + demo en vivo. Ajustar tiempos tras el primer ensayo.

## Resumen de tiempos (orientativo)

| Bloque | Min | Responsable |
|---|---:|---|
| 1. Contexto + problema | 2–3 | _[rellenar en reparto-equipo.md]_ |
| 2. Solución (qué es Ziryab, stack, roles) | 2 | _[rellenar]_ |
| 3. **Demo en vivo** | 7–8 | _[rellenar — ver guion-demo-paso-a-paso.md]_ |
| 4. Aprendizajes + cierre | 2–3 | _[rellenar]_ |
| **Total** | **~14** | Margen 1 min para preguntas rápidas |

---

## 1. Contexto (≈1,5 min)

**Qué decir (borrador):**

- Presentar al equipo y el TFG **Ziryab**.
- Situar el problema: en un centro educativo conviven muchos datos (alumnos, grupos, horarios, tareas, comunicación) repartidos entre herramientas o procesos manuales.
- Objetivo del proyecto: **una plataforma única** para administración, profesorado y alumnado.

**Diapositiva sugerida:** logo + frase del README (“gestión educativa integral”).

---

## 2. Problema (≈1 min)

**Qué decir:**

- Dificultad para coordinar **horarios y asignaciones** al inicio de curso.
- Seguimiento de **tareas y entregas** sin un canal común.
- Comunicación del centro (avisos) poco centralizada.
- Necesidad de **roles** con permisos distintos (admin / profesor / alumno).

---

## 3. Solución (≈2 min)

**Qué decir:**

- **Ziryab**: web Angular + API Node/Express + PostgreSQL; despliegue en Render.
- Tres perfiles: **admin** (configuración del centro), **profesor** (clases, tareas, lista), **alumno** (horario, entregas).
- Destacar 2–3 puntos fuertes del equipo (elegir los vuestros):
  - Panel admin con CRUD y flujos guiados (matrículas, asignaciones, horarios).
  - App Android complementaria (opcional, 20 s si hay tiempo).
  - i18n (es/en/de) o modo oscuro (si queréis remarcar DI).

**Transición a demo:**  
*“Pasamos a verlo en funcionamiento con datos de un centro de prueba.”*

---

## 4. Demo en vivo (≈7–8 min)

Detalle clic a clic en **[guion-demo-paso-a-paso.md](./guion-demo-paso-a-paso.md)**.

**Orden recomendado (historia coherente):**

1. Login **admin** → oferta educativa: **ciclo** → cubrir con **grupos, asignaciones y horarios** → **matricular** alumnos.
2. Cambio a **profesor** → clases / tarea (sobre el ciclo ya montado).
3. Cambio a **alumno** → horario + entregar tarea o ver notificación.
4. (Opcional) Tablón de anuncios.

> En vivo conviene usar un ciclo de demo precargado (EQ-373) y recorrer ese orden; crear todo desde cero en 4 minutos es arriesgado.

> Si un paso falla → [plan-b.md](./plan-b.md).

---

## 5. Aprendizajes y cierre (≈2 min)

**Qué decir (borrador — personalizar):**

- Trabajo en equipo, Git, Jira, división front/back.
- Retos técnicos superados (ej.: flujo grupos/horarios, auth JWT, migraciones Prisma).
- Qué mejoraría en una v2 (sustituciones completas, más tests, etc.).
- Agradecimiento y “¿preguntas?”.

---

## Notas para el ensayo (EQ-375)

- Cronometrar cada bloque; si os pasáis, recortar pasos opcionales de la demo (marcados en el guion paso a paso).
- Ensayo 1: leer guion. Ensayo 2: solo demo sin leer. Ensayo 3: condiciones reales (proyector, red del centro).
- Anotar tiempos reales en [checklist-ensayo.md](./checklist-ensayo.md).
