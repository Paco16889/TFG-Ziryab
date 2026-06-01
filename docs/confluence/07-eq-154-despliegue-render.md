# EQ-154 · Guía de despliegue actual en Render

**Origen:** https://g-team-ddm5j4dr.atlassian.net/wiki/spaces/Ziryab/pages/43745281  
**ID página:** 43745281

---

Documento operativo para desplegar **backend (Node/Express)** y **frontend (Angular)** en Render, con checklist de validación, rollback y protocolo manual seguro para credenciales/variables.

## 1) Alcance

- Backend API: repositorio `tfg/node`
- Frontend web: repositorio `tfg/angular`
- Entorno objetivo: Render (servicios independientes)

## 2) Inventario técnico actual

### Backend (`node`)

- Runtime: Node.js + TypeScript + Express
- Build command: `npm run build`
- Start command: `npm start`
- Puerto de escucha: `PORT` (por defecto `3000`)
- Healthcheck: `GET /health`
- Docs API: `GET /api-docs`
- Config de CORS: usa `FRONTEND_URL`
- Seguridad CSP (`helmet`): `connectSrc` actualmente restringido a `'self'` (se debe ampliar con dominio real de Render si aplica en navegadores/clientes remotos)

### Frontend (`angular`)

- Build command: `npm run build`
- Artefacto: `dist/login-en-angular`
- URL API en desarrollo: `http://localhost:3000/api` (config local)
- Recomendación: en despliegue usar variable/archivo de entorno de producción apuntando a la URL pública del backend en Render.

## 3) Variables de entorno requeridas (backend)

**Obligatorias en Render (sin valores en esta página):**

- `NODE_ENV` (producción)
- `PORT`
- `DATABASE_URL`
- `JWT_SECRET`
- `JWT_EXPIRY`
- `FIREBASE_PROJECT_ID`
- `FIREBASE_PRIVATE_KEY`
- `FIREBASE_CLIENT_EMAIL`
- `FRONTEND_URL`

### Notas críticas

- `JWT_SECRET` debe tener al menos 32 caracteres.
- `DATABASE_URL` debe ser URL válida.
- `FIREBASE_PRIVATE_KEY` requiere respetar formato de saltos de línea al cargarla en Render.
- `FRONTEND_URL` debe coincidir con el dominio público real del frontend en Render para evitar bloqueo CORS.

## 4) Procedimiento de despliegue en Render

### Backend

1. Conectar repositorio `tfg/node` al servicio web en Render.
2. Configurar:
   - Build: `npm run build`
   - Start: `npm start`
3. Cargar variables de entorno obligatorias (solo nombres en este documento).
4. Desplegar rama objetivo (`main` o la acordada).
5. Verificar:
   - `GET /health` responde `{ ok: true }`
   - `GET /api-docs` carga correctamente
   - Endpoints críticos responden 2xx/4xx esperados

### Frontend

1. Conectar repositorio `tfg/angular` al servicio estático/web en Render.
2. Configurar build: `npm run build`.
3. Publicar carpeta de salida (`dist/login-en-angular`) según configuración del servicio.
4. Configurar URL de API en entorno de producción para apuntar al backend Render.
5. Verificar login y navegación de pantallas clave.

## 5) Checklist de validación post-deploy

- Backend responde en `/health`.
- Swagger en `/api-docs` accesible.
- CORS correcto entre frontend y backend desplegados.
- Flujo de autenticación funcional (login + consumo de endpoint protegido).
- Logs de Render sin errores críticos de arranque.
- Variables obligatorias cargadas en backend.

## 6) Rollback básico

1. Identificar último deploy estable en Render.
2. Revertir a la versión estable (rollback/redeploy del commit previo).
3. Revalidar `/health`, login y endpoint protegido.
4. Si el fallo es de configuración, restaurar variables previas y redeploy.

## 7) Troubleshooting rápido

- **Error 500 al iniciar backend**: revisar `DATABASE_URL`, `JWT_SECRET`, variables Firebase.
- **CORS bloqueado en frontend**: validar `FRONTEND_URL` en backend.
- **Autenticación Firebase falla**: revisar `FIREBASE_PRIVATE_KEY` y `FIREBASE_CLIENT_EMAIL`.
- **Frontend no consume API**: comprobar URL base de API en configuración de producción.
- **CSP/connect-src bloquea conexiones**: actualizar política de Helmet para incluir dominio Render necesario.

## 8) Protocolo manual seguro para credenciales y variables

### Qué se comparte

- Solo: nombres de variables, responsables, entorno destino (dev/stage/prod) y fecha de actualización.

### Qué NO se comparte

- Nunca publicar valores reales en Jira, Confluence, chats de grupo, commits, PRs o capturas.
- Nunca guardar secretos en archivos versionados (`.env`, JSON de credenciales, etc.).

### Canal permitido

- Canal privado 1:1 o reunión breve con persona autorizada.
- Confirmación explícita de recepción y carga correcta en Render.

### Proceso recomendado (manual seguro)

1. Responsable A prepara rotación/actualización de secreto.
2. Responsable B recibe por canal privado permitido.
3. Responsable B carga secreto en Render y confirma sin reenviar el valor.
4. Ambos validan servicio (`/health` + login).
5. Registrar en Confluence/Jira solo metadatos: variable, fecha, responsable, estado (sin valor).

## 9) Trazabilidad

- Ticket Jira: `EQ-154`
- URLs producción actuales: [ziryabback.onrender.com](https://ziryabback.onrender.com/api) · [ziryabfront.onrender.com](https://ziryabfront.onrender.com/)
