# Project Charter

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
