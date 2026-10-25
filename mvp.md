# Nuestro primer MVP

> Clase 7. Parte de `aprendizaje-y-mvp.md` (sección 5) y de la decisión de avanzar del 25/10. Construido con IA el 25/10.

- **Usuario y situación:** el buffet del SIC, que recibe y prepara los pedidos, y quien va al club y pide desde la cancha. Un día de partidos, en los picos (entretiempos y finales), cuando la fila no baja.
- **Valor y acción central:** pedir y pagar sin dejar de mirar el partido, y que el buffet atienda esos pedidos sin que el equipo esté ahí pasándoselos por WhatsApp. Acción central: cada pedido pagado aparece solo en el panel del buffet, el buffet lo marca como listo y la persona lo ve en su celular.
- **Acceso o forma de ejecución:**
  - Para quien pide: https://felipechain7.github.io/product-development-tp/mvp/
  - Para el buffet: https://felipechain7.github.io/product-development-tp/mvp/buffet.html (pide un PIN de 6 dígitos; el equipo se lo pasa al buffet en persona y no está en el repo).
  - Código: `mvp/index.html`, `mvp/buffet.html` y `mvp/schema.sql` (base de datos en Supabase, proyecto `pedidos-buffet-sic`, plan gratuito).
- **Recorrido:** escanear el QR → elegir y tocar "Pagar con Mercado Pago" → pagar en Mercado Pago (Checkout Pro) y volver solo a la página → cuando Mercado Pago confirma, la pantalla muestra el código y "En preparación". En el buffet el pedido aparece en "Nuevos" con un sonido → el buffet toca "Listo" → la pantalla de la persona cambia sola a "¡Listo! Andá a retirar" → retira con nombre y código → el buffet toca "Entregado".
- **Funciona / manual o simulado / fuera de alcance:**
  - *Funciona:* pedido con menú real y total automático, código de 3 dígitos sin repetir entre pedidos abiertos, panel del buffet con PIN, estados nuevo → listo → entregado con la hora de cada cambio, aviso en la pantalla de la persona (se actualiza cada 5 segundos y vibra al estar listo), retomar el pedido si se recarga la página, avisos de error si falla la conexión.
  - *Cobro integrado (agregado el 25/10 por decisión del equipo):* la función `crear-pago` calcula el total con el menú del servidor, guarda el pedido como "pendiente de pago" y abre Mercado Pago con la cuenta de Felipe Chain; la función `mp-webhook` consulta el pago a la API de Mercado Pago y, si está aprobado y el monto coincide, lo pasa a "nuevo". El panel del buffet solo muestra pedidos pagados. Código en `mvp/funciones/`.
  - *Manual:* nada en el cobro. Al cierre, Felipe Chain le transfiere al buffet lo cobrado.
  - *Pendiente para que funcione:* cargar el Access Token de Mercado Pago como secreto `MP_ACCESS_TOKEN` en Supabase (lo hace Felipe Chain; no va en el repo).
  - *Fuera de alcance:* cuentas de usuario, notificaciones push con la página cerrada, stock, varios clubes.
- **Evidencia disponible y duda pendiente:** el experimento del 22/10 respaldó que la gente pide por el celular (32 pedidos pagados, 20 sin conocidos del equipo). Queda por comprobar si el buffet lo usa solo, sin el equipo, si pagaría por él y cómo funciona un sábado con la fila larga.
- **Qué medimos:** pedidos hechos sin que intervenga el equipo; minutos del pedido a "listo" y de "listo" a "entregado" (la base guarda las tres horas); si el buffet lo vuelve a usar otro día por su cuenta.

**Notas técnicas:**
- La tabla de pedidos no se puede leer ni escribir directo; todo pasa por cuatro funciones de `mvp/schema.sql`. Las dos del buffet piden el PIN. Supabase avisa que esas funciones se pueden llamar sin iniciar sesión: es intencional.
- Limitaciones conocidas: el PIN no tiene límite de intentos. Mercado Pago cobra una comisión por cada pago. Los pedidos que nunca se pagan quedan como "pendiente de pago" y no aparecen en el panel.
- Para cambiar el PIN, en el editor SQL de Supabase: `update public.config set valor = 'NUEVO_PIN' where clave = 'pin_buffet';`

## Prueba e iteración

- **Quién probó y tarea:** prueba técnica hecha por la IA el 25/10 (no es una prueba con usuarios): un pedido completo de punta a punta desde la página y el panel.
- **Qué ocurrió y cómo lo sabemos:**
  - El pedido 749 apareció en el panel del buffet y, al marcarlo "Listo", la pantalla de quien pidió cambió sola en menos de 5 segundos; al marcarlo "Entregado", mostró "Entregado" y el botón para hacer otro pedido.
  - La base guardó las tres horas (0,7 min a "listo" y 0,3 min a "entregado").
  - Un PIN incorrecto se rechaza, un nombre vacío da error, un código que no existe no devuelve datos y la tabla no se puede leer directo.
  - El pedido de prueba se borró después.
- **Prueba del equipo (25/10):** el equipo probó el recorrido completo (pedido, panel, listo y entregado) y funcionó; quedó un pedido de esa prueba en la base (código 733).
- **Devolución concreta que dimos a la IA:** "Funciona todo perfecto; quiero cambiar la estética de la página donde pide el usuario", y después: "tonos más azules, con fondo azul oscuro o negro".
- **Cambio realizado y resultado de la nueva prueba:** se rediseñó solo la página de quien pide: fondo azul casi negro, acentos azules, títulos tipo estadio, menú agrupado por categorías (Sándwiches, Hamburguesas, Wraps, Empanadas, Bebidas) con accesos arriba, producto elegido resaltado, aviso "Falta tu nombre" en la barra y pantalla de "Listo" en azul. La lógica, la base y el panel del buffet no cambiaron. Nueva prueba técnica (IA): un pedido llegó a la base (858), al pasarlo a "listo" la pantalla cambió sola; después se borró. [PENDIENTE: que el equipo confirme cómo se ve en su celular]
- **Segunda devolución (25/10):** "Algo para arreglar lo del comprobante", y después: "una redirección a Mercado Pago para pagar y que después vuelva a la página". El equipo eligió Checkout Pro con la cuenta de Felipe Chain.
- **Cambio realizado:** cobro con Checkout Pro descripto arriba; se quitó el alias y el "Ya pagué"; el pedido solo llega al buffet pagado; ya no hace falta mostrar comprobante. Se cerró la función vieja `crear_pedido` para que nadie pueda crear pedidos sin pagar. Prueba técnica (IA): sin la clave, el botón muestra un error claro; la vuelta con un pago rechazado muestra "El pago no se completó"; la función vieja responde "permiso denegado". [PENDIENTE: prueba de pago completa en modo prueba cuando se cargue la clave]
- **Próximo ajuste:** [PENDIENTE: siguiente devolución del equipo o del buffet]
- **Prueba con el buffet y con gente del club:** [PENDIENTE: registrar en `pruebas-y-mejoras-mvp.md`]
