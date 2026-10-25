# Nuestro primer MVP

> Clase 7. Parte de `aprendizaje-y-mvp.md` (sección 5) y de la decisión de avanzar del 25/10. Construido con IA el 25/10.

- **Usuario y situación:** el buffet del SIC, que recibe y prepara los pedidos, y quien va al club y pide desde la cancha. Un día de partidos, en los picos (entretiempos y finales), cuando la fila no baja.
- **Valor y acción central:** pedir y pagar sin dejar de mirar el partido, y que el buffet atienda esos pedidos sin que el equipo esté ahí pasándoselos por WhatsApp. Acción central: cada pedido pagado aparece solo en el panel del buffet, el buffet lo marca como listo y la persona lo ve en su celular.
- **Acceso o forma de ejecución:**
  - Para quien pide: https://felipechain7.github.io/product-development-tp/mvp/
  - Para el buffet: https://felipechain7.github.io/product-development-tp/mvp/buffet.html (pide un PIN de 6 dígitos; el equipo se lo pasa al buffet en persona y no está en el repo).
  - Código: `mvp/index.html`, `mvp/buffet.html` y `mvp/schema.sql` (base de datos en Supabase, proyecto `pedidos-buffet-sic`, plan gratuito).
- **Recorrido:** escanear el QR → elegir, pagar por Mercado Pago al alias `felipechain` y tocar "Ya pagué" → la pantalla muestra el código y "En preparación". En el buffet el pedido aparece en "Nuevos" con un sonido → el buffet toca "Listo" → la pantalla de la persona cambia sola a "¡Listo! Andá a retirar" → retira con nombre y código → el buffet toca "Entregado".
- **Funciona / manual o simulado / fuera de alcance:**
  - *Funciona:* pedido con menú real y total automático, código de 3 dígitos sin repetir entre pedidos abiertos, panel del buffet con PIN, estados nuevo → listo → entregado con la hora de cada cambio, aviso en la pantalla de la persona (se actualiza cada 5 segundos y vibra al estar listo), retomar el pedido si se recarga la página, avisos de error si falla la conexión.
  - *Manual:* el control del pago, mirando el comprobante de Mercado Pago en el mostrador.
  - *Fuera de alcance:* cobro integrado con Mercado Pago, cuentas de usuario, notificaciones push con la página cerrada, stock, varios clubes.
- **Evidencia disponible y duda pendiente:** el experimento del 22/10 respaldó que la gente pide por el celular (32 pedidos pagados, 20 sin conocidos del equipo). Queda por comprobar si el buffet lo usa solo, sin el equipo, si pagaría por él y cómo funciona un sábado con la fila larga.
- **Qué medimos:** pedidos hechos sin que intervenga el equipo; minutos del pedido a "listo" y de "listo" a "entregado" (la base guarda las tres horas); si el buffet lo vuelve a usar otro día por su cuenta.

**Notas técnicas:**
- La tabla de pedidos no se puede leer ni escribir directo; todo pasa por cuatro funciones de `mvp/schema.sql`. Las dos del buffet piden el PIN. Supabase avisa que esas funciones se pueden llamar sin iniciar sesión: es intencional.
- Limitaciones conocidas: el PIN no tiene límite de intentos; el total y el detalle los manda la página, por eso el monto se controla con el comprobante.
- Para cambiar el PIN, en el editor SQL de Supabase: `update public.config set valor = 'NUEVO_PIN' where clave = 'pin_buffet';`

## Prueba e iteración

- **Quién probó y tarea:** prueba técnica hecha por la IA el 25/10 (no es una prueba con usuarios): un pedido completo de punta a punta desde la página y el panel.
- **Qué ocurrió y cómo lo sabemos:**
  - El pedido 749 apareció en el panel del buffet y, al marcarlo "Listo", la pantalla de quien pidió cambió sola en menos de 5 segundos; al marcarlo "Entregado", mostró "Entregado" y el botón para hacer otro pedido.
  - La base guardó las tres horas (0,7 min a "listo" y 0,3 min a "entregado").
  - Un PIN incorrecto se rechaza, un nombre vacío da error, un código que no existe no devuelve datos y la tabla no se puede leer directo.
  - El pedido de prueba se borró después.
- **Devolución concreta que dimos a la IA:** [PENDIENTE: primera devolución del equipo después de probarlo]
- **Cambio realizado y resultado de la nueva prueba:** [PENDIENTE]
- **Próximo ajuste:** [PENDIENTE]
- **Prueba con el buffet y con gente del club:** [PENDIENTE: registrar en `pruebas-y-mejoras-mvp.md`]
