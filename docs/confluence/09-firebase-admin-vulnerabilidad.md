# Decisión: Vulnerabilidad de firebase-admin (Issue #5)

**Origen:** https://g-team-ddm5j4dr.atlassian.net/wiki/spaces/Ziryab/pages/40730625  
**ID página:** 40730625

---

## Contexto

Al evaluar la seguridad de las dependencias (`npm audit`) en el proyecto backend alojado en Node.js, se detecta un aviso relacionado con el paquete `firebase-admin` (versión actual en uso: `13.6.0`).

## Análisis de la Vulnerabilidad

- **Severidad**: Baja (LOW). CVSS Score: 3.3.
- **Origen Real**: La vulnerabilidad tiene origen en el paquete `@tootallnate/once` (menor a la versión `3.0.1`), que presenta un problema denominado "Incorrect Control Flow Scoping" (ver [GHSA-vpq2-c234-7xj6](https://github.com/advisories/GHSA-vpq2-c234-7xj6)).
- **Cadena de dependencias**: La vulnerabilidad llega a `firebase-admin` como dependencia transitiva a través de la siguiente cadena:  
  `@tootallnate/once` → `http-proxy-agent` → `teeny-request` → `retry-request` → `google-gax` → `@google-cloud/storage` y `@google-cloud/firestore` → `firebase-admin`.
- **Posible solución de NPM**: Al ejecutar una reparación automática (es decir, permitiendo "breaking changes"), CLI de npm propone degradar (_downgrading_) `firebase-admin` a la versión `10.3.0`.

## Evaluación y Decisión

1. **Impacto:** La falla califica como "Low severity", relacionada con funciones dependientes de proxies y bajo escenarios exóticos y muy específicos. Afecta mínimamente a los procesos usuales de backend.
2. **Riesgo del fix**: Bajar el paquete principal `firebase-admin` de la versión `13.6.0` a la `10.3.0` (un retroceso de tres versiones mayores) supone perder un gran número de importantes parches de seguridad, optimizaciones de rendimiento y soporte de nuevas y críticas APIs de Firebase. El impacto sería destructivo y mucho más riesgoso para la estabilidad y seguridad integral de la aplicación.
3. **Decisión Adoptada**: **Asumir y aceptar el riesgo**. Hemos decidido **mantener** `firebase-admin` en la versión actual (13.6.0) y obviar la recomendación de arreglo rompedor.
4. **Siguientes pasos**: Monitorizaremos futuras actualizaciones de `firebase-admin` que incorporen parches a nivel de sus dependencias transicionales (sobre Google Cloud SDKs y `@tootallnate/once`), momento en el que actualizaremos con normalidad sin requerir downgrade.
