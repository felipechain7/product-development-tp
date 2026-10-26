# Economía del producto: pedidos por el celular en el buffet del club

> Clase 9. Armado el 25/10 con `mvp.md`, `registro-experimento.md` y `pruebas-y-mejoras-mvp.md`. Las decisiones son del equipo; las cifras indican si son dato observado, referencia, estimación o pendiente.

- **Fecha, moneda y período:** 25/10/2026, pesos argentinos (los costos en dólares se aclaran). Unidad por pedido; resumen por buffet y por mes.
- **Usuario, valor y evidencia disponible:**
  - Quien va al club pide y paga desde la cancha y retira sin hacer la fila.
  - El 22/10 hubo 32 pedidos pagados en el SIC (20 sin contar conocidos). El retiro tardó 2,4 min contra 8,6 de la fila.
  - Eso es evidencia de uso, no de que alguien pague un cargo: ese día no hubo cargo.
- **Quién paga y por qué (hipótesis):**
  - Quien pide paga un cargo por servicio en cada pedido, por no perderse el partido.
  - El buffet recibe el cobro de la comida en su propia cuenta de Mercado Pago (modalidad marketplace).
  - La instalación es gratis para los primeros buffets (SIC y Alumni) a cambio de usarlo.
  - **A futuro:** un abono mensual para el buffet.
- **Unidad económica:** un pedido pagado.

## Números iniciales

| Concepto | Importe y unidad | Tipo de dato | Fuente o motivo |
| --- | --- | --- | --- |
| Ticket promedio | $18.812 por pedido | Observado | 22/10: $602.000 / 32 pedidos |
| Ingreso: cargo por servicio | 10 % del ticket = $1.881 por pedido | Estimación | Decisión del equipo |
| Costo variable: Mercado Pago sobre el cargo | 3,55 % + IVA = 4,30 % → $81 por pedido | Referencia | Tarifa de Checkout en la cuenta del equipo, 25/10, dinero a 18 días. Sin retenciones provinciales |
| Costo variable: trabajo manual | Casi nada por pedido | Observado | El MVP pasa el pedido al buffet solo |
| Costo fijo: servidor | $0 hoy; 25 dólares por mes con el plan Pro | Referencia | supabase.com/pricing, 25/10. El plan gratis se pausa tras una semana sin uso, así que para uso semanal hace falta el Pro |
| Costo fijo: página | $0 | Observado | GitHub Pages |
| Costo fijo: tiempo del equipo (soporte y ventas) | Pendiente | Pendiente | No se registraron horas |
| Inicial, por buffet: instalación | Gratis en el piloto; horas pendientes | Pendiente | Se miden las horas en SIC y Alumni para ponerle precio después |

## Resultado y escenario

- **Contribución por pedido:** $1.881 − $81 = **≈ $1.800**.
- **Escenario base y exigente:** se cambia solo el porcentaje del cargo.

| Escenario | Cargo | Contribución por pedido | Por buffet y por mes (128 pedidos) |
| --- | --- | --- | --- |
| Base | 10 % | ≈ $1.800 | ≈ $230.000 |
| Exigente (la gente no acepta el 10 %) | 8 % | ≈ $1.440 | ≈ $184.000 |

Los 128 pedidos por mes son una estimación: 4 días de partido como el 22/10.

- **Qué significa y qué no demuestra:**
  - Cada pedido deja plata para cubrir costos fijos.
  - Un solo buffet cubre el servidor, pero no el tiempo del equipo. El negocio depende de sumar clubes: la URBA tiene 91.
  - No es ganancia y no prueba que la gente pague el cargo ni que el buffet lo adopte.
  - Para el buffet, Checkout cuesta más que el QR en la caja con débito (3,55 % contra 1,41 %) y cobra a los 18 días. Puede pesar en su decisión.

## Primeros clientes

- **Canal:** contacto directo con el buffet o el concesionario del SIC y después de Alumni. Se les muestran los resultados del 22/10 y se ofrece la instalación gratis.
- **Costo y esfuerzo:** $0 en plata; las horas del equipo se registran.
- **CAC y repago:** no calculables, porque no hay ningún cliente que pague.
