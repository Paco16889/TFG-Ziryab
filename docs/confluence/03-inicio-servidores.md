# Inicio de servidores Angular y Node

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
