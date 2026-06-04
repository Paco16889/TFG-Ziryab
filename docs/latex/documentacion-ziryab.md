---
title: "Documentación Ziryab — Confluence y Manuales de Usuario"
author: "Equipo Sonrisa — TFG Ziryab"
date: "Junio 2026"
lang: es
---

# Documentación Ziryab

Exportación Confluence (espacio Ziryab) y manuales de usuario.

# Parte I — Documentación Confluence

## Project Charter

**Origen:** https://g-team-ddm5j4dr.atlassian.net/wiki/spaces/Ziryab/pages/2261253  
**ID página:** 2261253  
**Última versión:** 6

---

## Nuestra idea

La aplicación **Ziryab** será el futuro para la **gestión en centros educativos**, **sencilla**, de **fácil manejo, amigable al usuario** y **completa**. Esta aplicación permitirá a los **profesionales de la educación** —ya sean **profesores**, **orientadores**, **personal auxiliar y/o administrativo**, así como a los **estudiantes** y sus **padres** o **tutores**— una gestión integral desde un mismo entorno.

### Por el lado de los profesores

- **Organizar las clases**, mandar y recibir tareas.
- **Calificar tareas y exámenes**.
- **Controlar la asistencia** de los estudiantes.
- **Comunicarse con padres o tutores**.
- **Comunicarse internamente** entre profesores, ya sea de **forma libre**, por **departamentos** o con la **administración** del **centro**.

A los profesores que también ocupen **cargos administrativos** como **secretaría**, **jefatura de estudios** o **dirección**, se les dará la opción de **gestionar todo su trabajo desde la misma aplicación**, al estar identificados no solo como docentes sino también por su **puesto específico**.

En el caso de personal con **únicamente tareas administrativas**, tendrán acceso directo a sus funciones desde la aplicación.

Además, Ziryab tendrá en cuenta al **personal de educación especial**, tanto de **centros especializados** como de **alumnos integrados en centros generales**, ofreciendo **facilidades para la comunicación con padres y alumnos** y **adaptándose** a **diferentes tipos de discapacidad**.

### Por el lado de los alumnos

- **Acceder** a **todas** las **asignaturas o módulos** cursados.
- Consultar **temarios**, **tareas** y **calificaciones**.
- **Conocer** en todo momento el **estado del curso**.
- **Gestionar** la **firma** y **recepción de documentos**.
- **Controlar** y **justificar asistencias** y **ausencias**.

### Parte administrativa

- **Matriculación**.
- **Gestión** de **becas** y **solicitudes**.
- **Comunicación** con **profesores** o **departamento de orientación**.
- **Entrega** y **recepción** de **documentación**.

Todo esto estará acompañado por una **interfaz adaptada a cualquier situación de dificultad por parte de los usuarios**.

En casos especiales, Ziryab permitirá la **interacción directa entre alumnado**, **profesorado** y **tutores** siempre que sea necesario.

## Project Charter (imagen)

> Imagen del charter en Confluence — exportar manualmente desde la página online si hace falta en el PDF.

## Diagrama base de datos

> Diagrama ER en Confluence — ver también `node/prisma/esquema-relacional.md` en el repositorio backend.

## Prototipos Figma

- [Prototipo a PC](https://g-team-ddm5j4dr.atlassian.net/wiki/spaces/Ziryab/pages/2261253#Prototipo-PC)
- [Prototipo a móvil](https://www.figma.com/proto/j1rFThKhIcsvGUbp0JYK7U/Ziryab?page-id=0%3A1&node-id=35-93&p=f&viewport=-3034%2C71%2C0.56&t=mgKuJhBCeqkAkSzV-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=35%3A93)

## Objetivos SMART

### Comunicación Alumno Profesor

Implementar un sistema de retroalimentación semanal entre alumno y profesor, mediante un formulario digital, para mejorar la claridad en la entrega de instrucciones y resolución de dudas, alcanzando al menos un 80% de participación de los estudiantes durante los próximos tres meses.

- **Qué/Para quién (S)**: Implementar un sistema de retroalimentación semanal mediante formulario digital entre alumno y profesor para todos los estudiantes.
- **Medida de éxito (M)**: alcanzar ≥ 80% de participación estudiantil cada semana durante tres meses; feedback recogido en > 10 de 13 semanas posibles.
- **Viabilidad (A)**: usando Google Forms y notificaciones por email; esfuerzo estimado 6 h diseño/implantación + 1 h/sem mantenimiento.
- **Relevancia (R)**: mejora la claridad de instrucciones y dudas resueltas a tiempo, aumentando satisfacción y rendimiento académico.
- **Plazo (T)**: durante los próximos 3 meses (octubre–diciembre); primera recogida antes de finalizar la semana 1.
- **Entregables**: formulario digital, resultados semanales (dashboards), resumen mensual para profesorado, evidencia de envíos/participación.
- **Riesgos y mitigación**: baja participación → recordatorios automáticos y feedback anónimo; problemas técnicos → soporte rápido con plantillas alternativas.

### Gestión del curso escolar por parte del profesor

Organizar y publicar en la plataforma educativa el plan de trabajo trimestral con fechas de entrega y criterios de evaluación, asegurando que esté disponible y actualizado el primer día de cada trimestre durante todo el curso.

- **Qué/Para quién (S)**: Organizar y publicar en la plataforma educativa (para todos los alumnos y padres) el plan de trabajo trimestral, incluyendo fechas de entrega y criterios de evaluación.
- **Medida de éxito (M)**: el plan debe estar online y accesible el primer día de cada trimestre, actualizado al 100% de los trimestres; notificaciones emitidas a todos los destinatarios.
- **Viabilidad (A)**: usando la función "Materiales" de la plataforma educativa, esfuerzo estimado 4 h por trimestre para preparación y subida.
- **Relevancia (R)**: asegura la transparencia y previsión para estudiantes y familias.
- **Plazo (T)**: publicación antes de las 8:00 h del primer día lectivo de cada trimestre.
- **Entregables**: documento o sección del plan disponible en la plataforma, registro de acceso/descarga por al menos el 90% de las familias/estudiantes.

### Gestión administrativa para el alumnado

Digitalizar y centralizar el acceso a documentos administrativos (certificados, solicitudes y horarios) en un portal único para los estudiantes, alcanzando un 90% de uso regular por parte del alumnado en un plazo de seis meses.

- **Qué/Para quién (S)**: Portal único para todos los estudiantes.
- **Medida de éxito (M)**: ≥ 90% de uso regular en seis meses.
- **Viabilidad (A)**: portal web con credenciales institucionales; desarrollo estimado 24 h.
- **Relevancia (R)**: agiliza trámites y reduce papeleo.
- **Plazo (T)**: 6 meses tras el lanzamiento.
- **Entregables**: portal en funcionamiento, registros de acceso, manual de usuario, encuesta de satisfacción.

## Inicio de servidores Angular y Node

**Origen:** https://g-team-ddm5j4dr.atlassian.net/wiki/spaces/Ziryab/pages/9404417  
**ID página:** 9404417

---

## Objetivo

Documentar los pasos necesarios para configurar el entorno de desarrollo e iniciar los servidores de backend (Node.js 19) y frontend (Angular 19), incluyendo configuración de variables de entorno, instalación de dependencias y herramientas relacionadas con Firebase.

## Prerrequisitos

- Node.js versión 19 instalada.
- Angular CLI compatible con Angular 19 (recomendada instalación global).
- Acceso al repositorio de los proyectos (Node y Angular).
- Credenciales necesarias para Firebase y otros servicios.

---

## Configuración de variables de entorno (.env)

### Backend (Node.js 19)

1. Crear un archivo `.env` en la raíz del proyecto backend si no existe.
2. Definir variables como:
   - `PORT`
   - `NODE_ENV`
   - `DB_URL`
   - Variables relacionadas con Firebase si aplica.
3. Verificar que se use `dotenv` para cargar las variables al arrancar la app.

### Frontend (Angular 19)

1. Configurar los archivos de entorno (`environment.ts`, `environment.prod.ts`) o mecanismo `.env` usado por el proyecto, con:
   - URL de la API backend.
   - Configuración Firebase (apiKey, authDomain, etc.).
2. Evitar incluir datos sensibles directamente en el repositorio.

---

## Instalación de dependencias

### Instalación global

- Angular CLI compatible con Angular 19:
  - `npm install -g @angular/cli@19`
- Firebase CLI para herramientas y despliegues:
  - `npm install -g firebase-tools`

### Backend (Node 19)

1. En la carpeta backend, ejecutar `npm install` para dependencias del proyecto.
2. Instalar Firebase SDK si se usa:
   - `npm install firebase`

### Frontend (Angular 19)

1. En la carpeta frontend, ejecutar `npm install`.
2. Instalar Firebase SDK si se usa:
   - `npm install firebase`

---

## Inicio de los servidores

### Backend Node.js 19

1. Confirmar configuración correcta del `.env`.
2. Ejecutar:
   - `npm run dev` (modo desarrollo) o
   - `npm start` (producción local).
3. Verificar funcionamiento en `http://localhost:<PORT>`.

### Frontend Angular 19

1. Confirmar correcto apuntado a backend vía variables de entorno.
2. Ejecutar:
   - `ng serve` o
   - `npm run start`.
3. Acceder a `http://localhost:4200` para probar la app Angular.

## Documentación técnica Frontend (Angular)

**Origen:** https://g-team-ddm5j4dr.atlassian.net/wiki/spaces/Ziryab/pages/35028993  
**ID página:** 35028993

---

Bienvenido/a a la documentación oficial del frontend de la aplicación. Este espacio sirve como punto de entrada para desarrolladores, arquitectos y cualquier miembro del equipo que necesite comprender la estructura, los servicios y la arquitectura visual del proyecto.

## Objetivo de la Documentación

El repositorio frontend ha sido rigurosamente documentado utilizando **Compodoc**. Nuestro objetivo es mantener un estándar de calidad estricto para que el mantenimiento, la escalabilidad y la integración de nuevos desarrolladores («onboarding») sea lo más ágil posible.

> **Hito alcanzado:** Actualmente el código cuenta con un **100% de cobertura de documentación**. Todos los módulos, componentes, servicios, guards, interfaces y directivas tienen detallado su propósito, inicialización y retorno.

## Acceso a la Documentación (GitHub Pages)

Toda la documentación interactiva, diagramas de módulos, árbol de dependencias y el buscador de componentes se genera de manera automatizada y está alojada en GitHub Pages.

**URL actual del proyecto Ziryab:** [https://antoniosalces.github.io/ziryab-compodoc/index.html](https://antoniosalces.github.io/ziryab-compodoc/index.html)

*(La página Confluence enlazaba anteriormente a `antoniosalces.github.io/documentation/`.)*

### Comandos locales

```bash
cd angular
npm run docs:build    # genera estáticos en docs/
npm run docs:serve    # servidor local para revisión
```

## Resumen gestión de proyecto

**Origen:** https://g-team-ddm5j4dr.atlassian.net/wiki/spaces/Ziryab/pages/13500417  
**ID página:** 13500417

---

Enlace al tablero Jira del equipo:

https://g-team-ddm5j4dr.atlassian.net/jira/software/projects/EQ/summary

> **Proyecto Jira:** `EQ` en el sitio `g-team-ddm5j4dr.atlassian.net` (distinto del proyecto `CURSO` en `franciscocobsan.atlassian.net` usado en desarrollo con Cursor).


\newpage

# Parte II — Manual de usuario: Alumno

**Versión:** 1.0 · **Aplicación:** Ziryab — Plataforma Educativa  
**Rol:** Estudiante (STUDENT)  
**Última actualización:** junio 2026 · **Capturas:** incluidas

---

## 1. Introducción

**Ziryab** es la plataforma web del centro donde puedes consultar tus asignaturas, entregar tareas, ver tu horario, revisar faltas de asistencia, consultar calificaciones y leer avisos del centro.

---

## 2. Requisitos previos

| Requisito | Detalle |
|-----------|---------|
| Navegador | Chrome, Firefox, Edge o Safari actualizado |
| Credenciales | Email y contraseña facilitados por el centro |
| Conexión | Internet estable |
| Idioma | La app admite **español**, **inglés** y **alemán** (selector en la cabecera) |

---

## 3. Inicio de sesión

### 3.1 Acceder a la aplicación

1. Abre la URL de Ziryab en el navegador (la proporciona tu centro).
2. Serás redirigido a la pantalla de **Inicio de sesión** si no tienes sesión activa.

![CAPTURA 1 — Pantalla de login](../../assets/screenshots/manual-alumno/captura01-login.png)

### 3.2 Introducir credenciales

1. Escribe tu **email** en el primer campo (icono de sobre).
2. Escribe tu **contraseña** en el segundo campo.
3. Opcional: pulsa el icono del ojo para **mostrar u ocultar** la contraseña.
4. Pulsa el botón principal para **acceder**.

### 3.3 Errores habituales en el login

- Si las credenciales son incorrectas, aparece un **mensaje de error en rojo** bajo el formulario.
- Si el campo email no es válido, el formulario no enviará la petición.
- Tras un login correcto, entrarás al **panel principal (Mi Espacio)**.

![CAPTURA 2 — Error de login](../../assets/screenshots/manual-alumno/captura02-error_login.png)

---

## 4. Interfaz general (cabecera)

En todas las pantallas privadas verás una **cabecera morada** fija con:

| Elemento | Ubicación | Función |
|----------|-----------|---------|
| Selector de idioma | Izquierda | Cambia entre ES / EN / DE |
| Logotipo **Ziryab** | Centro | Al pulsar, vuelves al **Dashboard** |
| Campana de notificaciones | Derecha | Abre el panel de notificaciones |
| Bloque de perfil (nombre + rol) | Derecha | Abre el menú de perfil |

![CAPTURA 3 — Cabecera de alumno](../../assets/screenshots/manual-alumno/captura03-cabecera.png)

### 4.1 Notificaciones

1. Pulsa la **campana**; se abre un panel lateral o desplegable.
2. Verás la lista de avisos (tareas nuevas, calificaciones, etc.).
3. Puedes **marcar todas como leídas** si la opción está disponible.
4. Al llegar una notificación en tiempo real, puede aparecer un **toast** (aviso flotante) en la parte inferior de la pantalla durante unos segundos.

![CAPTURA 4 — Panel de notificaciones abierto](../../assets/screenshots/manual-alumno/captura04-notificaciones.png)

### 4.2 Menú de perfil y cierre de sesión

1. Pulsa tu **nombre y avatar** en la cabecera.
2. Se abre un modal con tu nombre, rol y el botón **Cerrar sesión**.
3. Confirma el cierre; volverás a la pantalla de login.

![CAPTURA 5 — Modal de perfil con botón Cerrar sesión](../../assets/screenshots/manual-alumno/captura05-modal_perfil.png)

### 4.3 Botón «Volver»

En la mayoría de pantallas secundarias aparece el componente **Volver** (flecha atrás), que te lleva a la pantalla anterior en el historial de navegación.

---

## 5. Panel principal — «Mi Espacio» (Dashboard)

Tras iniciar sesión accedes a **Mi Espacio**, con el mensaje *«¿Qué te gustaría hacer hoy?»* y **dos tarjetas grandes**:

| Tarjeta | Descripción | Destino |
|---------|-------------|---------|
| **Clases** | Accede a tus asignaturas matriculadas | `/clases` |
| **Gestión** | Expediente, horario, calendario, avisos y notas | `/gestion` |

1. Haz clic en la tarjeta deseada (también al pasar el ratón verás la etiqueta **Acceder**).

![CAPTURA 6 — Dashboard «Mi Espacio»](../../assets/screenshots/manual-alumno/captura06-dashboard.png)

---

## 6. Mis asignaturas (Clases)

### 6.1 Listado de asignaturas

Ruta: **Dashboard → Clases** (`/clases`).

- Verás una **rejilla de tarjetas**, una por cada asignatura en la que estás matriculado.
- Cada tarjeta muestra, entre otros datos: **nombre de la asignatura**, **ciclo/curso**, **grupo** y **profesor** (cuando esté disponible).
- Mientras carga, aparece el mensaje *«Cargando tus clases...»*.
- Si no tienes matrículas, verás *«No estás matriculado en ninguna asignatura»*.

![CAPTURA 7 — Listado de asignaturas del alumno](../../assets/screenshots/manual-alumno/captura07-asignaturas.png)

### 6.2 Entrar al temario de una asignatura

1. En la tarjeta de la asignatura, pulsa la acción principal (abrir / acceder al temario).
2. Irás a **Temario** (`/temario/:claseId`) con el material y las tareas de esa asignatura.

---

## 7. Temario y listado de tareas

### 7.1 Estructura del temario

El temario organiza el contenido en **bloques desplegables** por tipo:

- Material teórico y documentos  
- Exámenes y pruebas  
- Proyectos evaluables  
- Ejercicios prácticos  
- Deberes generales  

1. Pulsa la cabecera de un bloque para **expandirlo o contraerlo**.
2. Dentro verás las **tareas** con título, fecha límite y **estado**.

![CAPTURA 8 — Temario con bloques y tareas](../../assets/screenshots/manual-alumno/captura08-temario.png)

### 7.2 Estados de una tarea (en el listado)

| Estado | Significado |
|--------|-------------|
| **PENDIENTE** | Aún no has entregado (puede estar dentro o fuera de plazo) |
| **ENTREGADA** | Has enviado tu trabajo; pendiente de corrección |
| **CALIFICADA** | El profesor ha puesto nota (se muestra la puntuación) |
| **VENCIDA** | Plazo pasado sin entrega válida |

### 7.3 Abrir el detalle de una tarea

1. Pulsa sobre la fila de la tarea.
2. Se abre la pantalla de **detalle de tarea** (`/tarea/:id`).

---

## 8. Detalle de tarea: consulta, entrega y nota

### 8.1 Información de la tarea

En la parte superior verás:

- **Título** y **estado** (badge de color)
- **Fecha límite** de entrega
- **Tipo** de tarea (deberes, práctica, examen, etc.)
- **Descripción** del profesor
- **Material de consulta**: enlace para ver o descargar el archivo adjunto del profesor (si existe)

![CAPTURA 9 — Detalle de tarea](../../assets/screenshots/manual-alumno/captura09-detalle_tarea.png)

### 8.2 Si la tarea ya está calificada

Aparece la sección **Evaluación del profesor** con:

- **Nota final** (0–10)
- **Comentarios** del profesor (si los hubo)

![CAPTURA 10 — Tarea entregada / evaluación del profesor](../../assets/screenshots/manual-alumno/captura10-tarea_entregada.png)

### 8.3 Entregar una tarea (pendiente)

En el **Área de entrega** puedes elegir dos modos:

#### Modo A — Subir archivo (Dropzone)

1. Selecciona la pestaña de subida de archivo.
2. **Arrastra** un archivo a la zona punteada **o** haz clic para elegirlo en el explorador.
3. Formatos habituales: documentos, imágenes, ZIP (si son varios archivos, **comprime en .ZIP**).
4. Tamaño máximo indicado en pantalla: **50 MB**.
5. Tras seleccionar el archivo, revisa el nombre y pulsa **Confirmar envío al servidor**.

![CAPTURA 11 — Zona de arrastre con archivo seleccionado](../../assets/screenshots/manual-alumno/captura11-tarea_subida.png)

#### Modo B — Enlace URL

1. Cambia a la pestaña **Subir enlace**.
2. Introduce una URL válida (`http://` o `https://`), por ejemplo un Google Docs.
3. Pulsa **Confirmar envío al servidor**.

![CAPTURA 12 — Pestaña de enlace con URL rellenada](../../assets/screenshots/manual-alumno/captura12-enlace_entregado.png)

### 8.4 Avisos importantes al entregar

- Si el plazo ha pasado pero el profesor **permite entrega tardía**, tu entrega puede quedar como **Retraso (LATE)**.
- Si el plazo ha pasado y **no** se permiten entregas tardías, verás un aviso y **no podrás enviar**.
- Tras un envío correcto aparece mensaje verde de confirmación.

### 8.5 Modificar o borrar una entrega

- Si ya entregaste y **aún no está calificada**, puedes usar **Borrar entrega** y volver a subir.
- Si ya está **calificada**, no podrás eliminar la entrega desde esta pantalla.

### 8.6 Errores frecuentes en la entrega

| Mensaje / situación | Qué hacer |
|---------------------|-----------|
| Carpeta no permitida | Comprime la carpeta en un archivo **.ZIP** |
| Archivo demasiado grande | Reduce el tamaño por debajo de 50 MB |
| URL inválida | Comprueba que empiece por http:// o https:// |
| Error de servidor | Reintenta; si persiste, contacta con el profesor |

---

## 9. Gestión académica (menú central)

Ruta: **Dashboard → Gestión** (`/gestion`).

Pantalla **Gestión académica** con acceso a cinco áreas:

| Tarjeta | Función |
|---------|---------|
| **Ficha Usuario** | Historial de faltas y justificantes |
| **Horario** | Horario semanal de clases |
| **Calendario** | Calendario del centro (vista embebida) |
| **Tablón** | Anuncios / incidencias publicadas |
| **Evaluaciones** | Tus notas por trimestre |

![CAPTURA 13 — Pantalla Gestión académica](../../assets/screenshots/manual-alumno/captura13-pantalla_gestion.png)

---

## 10. Ficha de usuario y asistencia

Ruta: **Gestión → Ficha Usuario** (`/ficha-usuario`).

### 10.1 Consultar faltas

- Listado de **faltas y retrasos** registrados por sesión.
- Cada fila muestra: **asignatura**, **fecha**, **hora**, **estado de asistencia** y **estado del justificante**.
- Si no tienes faltas, verás un mensaje positivo indicando que no hay registros.

Estados de asistencia:

| Etiqueta | Significado |
|----------|-------------|
| FALTA | Ausencia |
| RETRASO | Llegada tarde |
| JUSTIFICADA | Falta excusada oficialmente |

![CAPTURA 14 — Listado de faltas](../../assets/screenshots/manual-alumno/captura14-ficha_usuario.png)

### 10.2 Justificar una falta

1. Pulsa sobre una falta que **no** esté ya justificada (filas interactivas).
2. Se abre el modal **Justificar falta**.
3. Selecciona un documento: **PNG, JPG o PDF**, máximo **1 MB**.
4. Pulsa **Subir justificante**.
5. El estado pasará a **PENDIENTE** hasta que el profesor lo revise.

![CAPTURA 15 — Modal de justificación](../../assets/screenshots/manual-alumno/captura15-modal_justificar_falta.png)

![CAPTURA 16 — Falta con justificante PENDIENTE](../../assets/screenshots/manual-alumno/captura16-justificacion_pendiente.png)

Estados del justificante: **NO ENVIADO**, **PENDIENTE**, **ACEPTADO**, **RECHAZADO**.

---

## 11. Horario semanal

Ruta: **Gestión → Horario** (`/horario-alumno`).

- Vista en **columnas por día de la semana** (lunes a viernes o según configuración del centro).
- En cada día aparecen las franjas con **hora inicio–fin** y **nombre de la asignatura**.
- Si un día no tienes clase, verás un mensaje de día sin clases.

![CAPTURA 17 — Horario semanal del alumno](../../assets/screenshots/manual-alumno/captura17-horario.png)

---

## 12. Calendario

Ruta: **Gestión → Calendario** (`/calendario`).

- Muestra un **calendario embebido** (iframe) con eventos del centro.
- Desplázate y navega dentro del calendario como en la herramienta externa configurada.

![CAPTURA 18 — Pantalla Calendario](../../assets/screenshots/manual-alumno/captura18-calendario.png)

---

## 13. Tablón de anuncios

Ruta: **Gestión → Tablón** (`/issues`).

- Listado de **anuncios** publicados para la comunidad educativa.
- Consulta título, contenido y fecha de cada aviso (según diseño de la lista).

![CAPTURA 19 — Tablón de anuncios](../../assets/screenshots/manual-alumno/captura19-tablon.png)

---

## 14. Mis evaluaciones (notas)

Ruta: **Gestión → Evaluaciones** (`/mis-evaluaciones`).

### 14.1 Tabla de calificaciones

- Tabla con **filas = asignaturas** y **columnas = periodos** de evaluación:
  - Evaluación inicial  
  - 1º, 2º y 3º trimestre  
  - Nota final  
- Las notas **inferiores a 5** suelen mostrarse en rojo; las aprobadas en verde.
- La última fila muestra la **nota media** por periodo.

![CAPTURA 20 — Tabla de Mis evaluaciones](../../assets/screenshots/manual-alumno/captura20-evaluaciones.png)

### 14.2 Sin calificaciones

Si el tutor o profesores aún no han introducido notas, verás: *«Aún no tienes calificaciones registradas»*.

---

## 15. Flujo de trabajo recomendado (resumen)

```text
Login → Mi Espacio → Clases → Temario → Tarea → Entregar
                  ↘ Gestión → Ficha / Horario / Calendario / Tablón / Evaluaciones
```

---

## 16. Preguntas frecuentes (FAQ)

**¿Puedo usar la app en el móvil?**  
Sí; la interfaz es responsive, aunque algunas tablas se desplazan horizontalmente.

**No veo ninguna asignatura**  
Tu matrícula puede no estar activa; contacta con secretaría o administración.

**He entregado pero sigue en PENDIENTE**  
Comprueba que recibiste el mensaje de éxito; refresca la página. Si persiste, avisa al profesor.

**Mi justificante fue rechazado**  
Sube un nuevo documento válido o consulta con el profesor el motivo.

**¿Cómo cambio el idioma?**  
Selector en la esquina superior izquierda de la cabecera.

---

## 17. Glosario

| Término | Definición |
|---------|------------|
| Temario | Conjunto de bloques y tareas de una asignatura |
| Entrega | Archivo o enlace que envías para una tarea |
| Trimestre | Periodo de evaluación académica |
| Justificante | Documento que acredita una ausencia |
| Tablón | Murales de avisos del centro |

---

*Fin del manual de alumno. Para incidencias técnicas, contacta con el administrador del centro.*

\newpage

# Parte III — Manual de usuario: Profesor

**Versión:** 1.0 · **Aplicación:** Ziryab — Plataforma Educativa  
**Rol:** Profesor (TEACHER)  
**Última actualización:** junio 2026 · **Capturas:** incluidas (26 y 27 pendientes)

---

## 1. Introducción

**Ziryab** permite al profesorado gestionar sus asignaturas: crear tareas, revisar entregas, calificar, pasar lista, validar justificantes de ausencia y, si actúas como **tutor/a de grupo**, registrar las evaluaciones trimestrales de tus alumnos.

Este manual cubre **todas las funcionalidades del rol TEACHER**.

---

## 2. Requisitos previos

| Requisito | Detalle |
|-----------|---------|
| Navegador | Chrome, Firefox, Edge o Safari actualizado |
| Credenciales | Cuenta de profesor con asignaturas asignadas en el sistema |
| Rol tutor (opcional) | Necesario para la pantalla **Evaluaciones** de grupo tutorizado |
| Idiomas | ES / EN / DE desde la cabecera |

---

## 3. Inicio de sesión

El acceso es idéntico al del alumno:

1. Abre la URL de Ziryab.
2. Introduce **email** y **contraseña**.
3. Pulsa el botón de acceso.

![CAPTURA 1 — Pantalla de login](../../assets/screenshots/manual-profesor/captura1-login.png)

Tras un login correcto con rol **TEACHER**, entrarás al **Dashboard (Mi Espacio)** con las mismas dos tarjetas principales, pero la tarjeta **Clases** te llevará a **Mis clases** del profesor.

---

## 4. Interfaz general (cabecera)

La cabecera morada incluye:

| Elemento | Función |
|----------|---------|
| Selector de idioma | Cambia el idioma de la interfaz |
| **Ziryab** (centro) | Vuelve al Dashboard |
| Notificaciones | Avisos de entregas, justificantes, etc. |
| Perfil (nombre + «PROFESOR») | Menú con **Cerrar sesión** |

![CAPTURA 2 — Cabecera con rol Profesor visible](../../assets/screenshots/manual-profesor/captura2-cabecera.png)

### 4.1 Notificaciones y cierre de sesión

- **Campana:** abre el listado de notificaciones; puedes marcarlas como leídas.
- **Perfil → Cerrar sesión:** finaliza la sesión de forma segura.

![CAPTURA 3 — Panel de notificaciones](../../assets/screenshots/manual-profesor/captura3-notificaciones.png)

![CAPTURA 4 — Modal de perfil](../../assets/screenshots/manual-profesor/captura4-modal.png)

---

## 5. Panel principal — «Mi Espacio»

Pantalla inicial con dos accesos:

| Tarjeta | Destino (profesor) |
|---------|-------------------|
| **Clases** | `/clases-profesor` — Asignaturas que impartes |
| **Gestión** | `/gestion` — Ficha, horario, calendario, tablón, evaluaciones |

![CAPTURA 5 — Dashboard del profesor](../../assets/screenshots/manual-profesor/captura5-dashboard.png)

---

## 6. Mis clases (asignaturas asignadas)

Ruta: **Mi Espacio → Clases** (`/clases-profesor`).

### 6.1 Listado

Cada tarjeta representa una **asignación** (asignatura + grupo + ciclo) y muestra:

- Nombre de la **asignatura**
- **Ciclo** y **grupo**
- Dos acciones:
  1. **Gestionar temario** — Material, tareas y asistencia de esa asignatura
  2. **Menú de clase** — Acceso rápido a tareas y justificaciones

![CAPTURA 6 — Listado «Mis clases» con dos botones por tarjeta](../../assets/screenshots/manual-profesor/captura6-clases.png)

### 6.2 Sin asignaturas

Si no tienes asignaturas asignadas, verás un mensaje informativo. Contacta con administración para revisar tu carga docente en el sistema.

---

## 7. Programación / Temario del profesor

Ruta: **Gestionar temario** → `/temario-profesor/:claseId`

### 7.1 Vista general

- Título **Programación**.
- Botón **Pasar lista** (esquina superior derecha): abre el modal de asistencia.
- Bloques por tipo de contenido (teoría, exámenes, proyectos, prácticas, deberes), igual que ve el alumno pero con **controles de profesor**.

![CAPTURA 7 — Temario del profesor con botón Pasar lista](../../assets/screenshots/manual-profesor/captura8-temario.png)

### 7.2 Gestionar tareas dentro del temario

En cada bloque expandido, cada tarea muestra:

- Título y descripción
- **Ver archivo base** — Abre el adjunto que subiste al crear la tarea
- **Ver entregas** — Ir al listado de entregas de los alumnos

### 7.3 Pasar lista (asistencia)

1. Pulsa **Pasar lista**.
2. Se abre un **modal** con la lista de alumnos matriculados.
3. Para cada alumno, selecciona el estado:
   - **Presente**
   - **Ausente**
   - **Retraso**
   - **Justificado**
4. Pulsa **Guardar asistencia**.
5. Mensaje de confirmación si se guardó correctamente.

![CAPTURA 9 — Modal de asistencia con lista de alumnos y estados](../../assets/screenshots/manual-profesor/captura7-pasar_lista.png)

![CAPTURA 10 — Asistencia guardada correctamente](../../assets/screenshots/manual-profesor/captura10-lista_mandada.png)

**Nota:** Debes pasar lista en la sesión correspondiente al día; si no hay alumnos matriculados, el sistema lo indicará.

---

## 8. Menú de clase

Ruta: **Menú de clase** desde una tarjeta → `/menu-clase/:idTeacherAssignment`

Pantalla intermedia con **dos opciones**:

| Opción | Descripción | Ruta |
|--------|-------------|------|
| **Tareas** | Crear y listar tareas de la asignación | `/tareas/:idTeacherAssignment` |
| **Justificaciones** | Revisar justificantes de faltas | `/ficha-profesor` (vista de justificaciones) |

![CAPTURA 11 — Menú de clase con tarjetas Tareas y Justificaciones](../../assets/screenshots/manual-profesor/captura11-menu_clase.png)

---

## 9. Gestión de tareas

Ruta: **Menú de clase → Tareas** (`/tareas/:idTeacherAssignment`).

### 9.1 Listado agrupado

- Las tareas se agrupan por **tipo** (deberes, práctica, teoría, proyecto, examen) con código de color.
- En la cabecera: número total de tareas y botón **+ Crear tarea**.
- Cada ítem permite ver detalle y acciones según el componente de lista.

![CAPTURA 12 — Lista de tareas agrupadas con botón Crear tarea](../../assets/screenshots/manual-profesor/captura12-tareas_agrupadas.png)

### 9.2 Crear una nueva tarea

1. Pulsa **Crear tarea** (botón indigo con icono +).
2. Se abre el formulario modal **Crear nueva tarea**.

Campos del formulario:

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| Título | Sí | Nombre visible para el alumno |
| Descripción | No | Instrucciones de la actividad |
| Tipo | Sí | Deberes, práctica, teoría/material, proyecto, examen |
| Fecha de inicio | Sí | Cuándo se publica |
| Fecha límite | Sí | Deadline de entrega |
| Fichero adjunto | No | Material de apoyo (PDF, DOCX, ZIP, PNG, JPG; máx. 10 MB) |
| Permite entrega tardía | Según diseño | Si está activo, los alumnos pueden entregar fuera de plazo (marcado LATE) |

3. Opcional: arrastra un archivo o selecciónalo.
4. Pulsa **Crear tarea**.
5. Tras el éxito, la tarea aparecerá en el listado y en el **temario** del alumno.

![CAPTURA 13 — Formulario Crear nueva tarea y confirmación](../../assets/screenshots/manual-profesor/captura13-guardar_tarea.png)

### 9.3 Errores al crear tarea

- Archivo mayor de 10 MB → error de tamaño.
- Error de servidor → revisa conexión y reintenta.

---

## 10. Entregas de los alumnos

Ruta: **Temario → Ver entregas** o desde detalle de tarea → `/tarea/:taskId/entregas`

### 10.1 Pantalla de entregas

Información mostrada:

- Título de la tarea y **fecha límite**
- Tabla o listado con columnas: **Alumno**, **Estado**, **Fecha entrega**, **Nota**, **Acciones**

Estados habituales:

| Estado | Significado |
|--------|-------------|
| Pendiente | Sin entrega |
| Entregada | Entrega a tiempo |
| Retraso / Entregada tarde | Fuera de plazo permitido |
| Calificada | Ya tiene nota |
| No entregado | Plazo cerrado sin entrega |

![CAPTURA 15 — Listado de entregas con varios estados](../../assets/screenshots/manual-profesor/captura15-listado_tareas.png)

### 10.2 Acciones por entrega

- **Abrir archivo/enlace** de la resolución del alumno (si entregó).
- **Calificar** o **Editar nota** — Abre la pantalla de corrección.

---

## 11. Calificar una entrega

Ruta: `/calificar-tarea/:id` (ID de la entrega del alumno)

### 11.1 Datos de la entrega

La pantalla muestra:

- Nombre del **alumno**
- **Tarea** evaluada
- **Momento de entrega** (fecha/hora)
- **Archivo entregado** — enlace Ver / Descargar

### 11.2 Formulario de corrección

| Campo | Reglas |
|-------|--------|
| Calificación (0–10) | Obligatoria; valor entre 0 y 10 |
| Comentarios y feedback | Opcional; visible para el alumno |

1. Introduce la **nota**.
2. Opcional: escribe observaciones en **Feedback**.
3. Pulsa **Guardar calificación**.

![CAPTURA 16 — Pantalla Calificar entrega](../../assets/screenshots/manual-profesor/captura16-calificar_entrega.png)

El alumno verá la nota en su detalle de tarea y en el temario (estado CALIFICADA).

---

## 12. Justificaciones de faltas

Ruta: **Menú de clase → Justificaciones** o ficha de profesor (`/ficha-profesor`).

### 12.1 Justificaciones pendientes

- Listado de alumnos que han subido un **justificante** en estado pendiente.
- Por cada fila: nombre del alumno, fecha/hora de la sesión, asignatura.
- Acciones:
  - **Ver archivo** — Abre el documento subido (PDF/imagen)
  - **Aceptar** — La falta pasa a justificada
  - **Rechazar** — El justificante se rechaza; el alumno puede volver a enviar otro

![CAPTURA 19 — Lista de justificaciones pendientes](../../assets/screenshots/manual-profesor/captura19-justificaciones_pendientes.png)

### 12.2 Sin pendientes

Mensaje: *«Todo al día»* / *«No hay nuevas justificaciones pendientes de revisar»*.

### 12.3 Ver faltas por alumno

- Botón **Ver faltas por alumno** (parte superior).
- Abre un modal para consultar el historial de ausencias de un estudiante concreto.

![CAPTURA 21 — Modal de faltas por alumno](../../assets/screenshots/manual-profesor/captura21-faltas_por_alumno.png)

---

## 13. Gestión académica (área común)

Ruta: **Mi Espacio → Gestión** (`/gestion`).

Las mismas tarjetas que el alumno, con rutas adaptadas al rol:

| Tarjeta | Destino profesor |
|---------|------------------|
| Ficha Usuario | `/ficha-usuario` (datos personales; según configuración) |
| Horario | `/horario-profesor` |
| Calendario | `/calendario` |
| Tablón | `/issues` |
| Evaluaciones | `/evaluaciones` (solo si eres **tutor** de un grupo) |

![CAPTURA 22 — Gestión académica vista como profesor](../../assets/screenshots/manual-profesor/captura22-gestion.png)

---

## 14. Horario del profesor

Ruta: **Gestión → Horario** (`/horario-profesor`).

- Cuadrícula semanal con tus **franjas de clase** asignadas.
- Cada celda indica hora y asignatura/grupo.

![CAPTURA 23 — Horario semanal del profesor](../../assets/screenshots/manual-profesor/captura23-horario.png)

---

## 15. Calendario y tablón

- **Calendario:** iframe con el calendario institucional (`/calendario`).
- **Tablón:** anuncios publicados para toda la comunidad (`/issues`).

![CAPTURA 24 — Calendario embebido](../../assets/screenshots/manual-profesor/captura24-calendario.png)

![CAPTURA 25 — Tablón de anuncios](../../assets/screenshots/manual-profesor/captura25-tablon.png)

### 15.1 Crear un anuncio en el tablón

1. Accede al **Tablón** desde Gestión.
2. Pulsa la opción para **crear un nuevo anuncio** (si tu rol lo permite).
3. Rellena título y contenido del aviso.
4. Publica el anuncio; quedará visible para la comunidad educativa.

![CAPTURA 25.2 — Formulario crear anuncio](../../assets/screenshots/manual-profesor/captura25_2-crear_anuncio.png)

---

## 16. Evaluaciones (rol de tutor)

Ruta: **Gestión → Evaluaciones** (`/evaluaciones`).

**Solo disponible si el sistema te tiene registrado como tutor de un grupo.**

### 16.1 Pantalla principal

- Selector de **grupo tutorizado** (si hubiera más de uno).
- Selector de **periodo de evaluación** (inicial, trimestres, final).
- Tabla: filas = alumnos del grupo; columnas = asignaturas; celdas = notas (1–10).
- Fila o indicador de **media** por alumno/asignatura.

> **📷 CAPTURA 26 — Pantalla Evaluaciones con tabla de notas del grupo**

### 16.2 Introducir y guardar notas

1. Selecciona el **periodo** correcto.
2. Rellena todas las celdas obligatorias con notas entre **1 y 10**.
3. Pulsa **Guardar evaluaciones**.
4. Espera el mensaje de éxito.

**Importante:** El sistema puede exigir que **todas** las asignaturas de **todos** los alumnos tengan nota antes de guardar.

> **📷 CAPTURA 27 — Mensaje de notas guardadas correctamente**

### 16.3 Sin grupo tutorizado

Si no eres tutor, verás: *«No se ha encontrado ningún grupo del que seas tutor»*.

---

## 17. Flujos de trabajo recomendados

### 17.1 Publicar una tarea y calificarla

```text
Mis clases → Gestionar temario → (o Menú de clase → Tareas) → Crear tarea
→ Alumnos entregan → Ver entregas → Calificar → Alumno ve la nota
```

### 17.2 Sesión de clase con asistencia

```text
Mis clases → Gestionar temario → Pasar lista → Guardar asistencia
```

### 17.3 Revisar una ausencia justificada

```text
Menú de clase → Justificaciones → Ver archivo → Aceptar o Rechazar
```

---

## 18. Preguntas frecuentes (FAQ)

**¿Por qué no veo Evaluaciones en Gestión?**  
Esa pantalla es solo para profesores **tutores**. La asignación la realiza administración.

**Un alumno dice que no puede entregar**  
Comprueba la **fecha límite** y si la tarea permite **entrega tardía**. Revisa en el detalle de la tarea.

**¿Puedo cambiar una nota ya guardada?**  
Sí; vuelve a **Ver entregas → Editar nota** en la entrega del alumno.

**El archivo adjunto de creación de tarea falla**  
Máximo 10 MB; usa formatos permitidos (PDF, DOCX, ZIP, imágenes).

**No aparecen alumnos al pasar lista**  
Verifica que haya **matriculaciones** activas en esa asignatura-grupo.

---

## 19. Glosario docente

| Término | Definición |
|---------|------------|
| Asignación | Relación profesor–asignatura–grupo en el sistema |
| Entrega (student-task) | Trabajo enviado por un alumno para una tarea |
| Tutor | Profesor responsable de las notas trimestrales del grupo |
| Justificante | Documento del alumno para excusar una falta |
| LATE | Entrega realizada después del plazo pero permitida |

---

## 20. Resumen de rutas (referencia rápida)

| Pantalla | Ruta |
|----------|------|
| Login | `/login` |
| Dashboard | `/dashboard` |
| Mis clases | `/clases-profesor` |
| Temario | `/temario-profesor/:claseId` |
| Menú de clase | `/menu-clase/:idTeacherAssignment` |
| Tareas | `/tareas/:idTeacherAssignment` |
| Entregas | `/tarea/:taskId/entregas` |
| Calificar | `/calificar-tarea/:id` |
| Justificaciones | `/ficha-profesor` |
| Gestión | `/gestion` |
| Horario | `/horario-profesor` |
| Evaluaciones (tutor) | `/evaluaciones` |

---

*Fin del manual de profesor. Para configuración de grupos, matrículas o asignación de tutorías, contacta con el rol de administración del centro.*
