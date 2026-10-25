# Clase 8 · Pruebas y mejoras del MVP

- **Equipo, fecha, usuario y problema:** Felipe Chain, Felipe Servent, Juan Ignacio Canabe y Pedro Tailhade. Plan armado el 25/10. Usuario: quien va al club un día de partidos y quiere comer o tomar algo. Problema: para comprar en el buffet tiene que hacer la fila y se pierde parte del partido.
- **MVP: acceso y versiones:**
  - Para quien pide: https://felipechain7.github.io/product-development-tp/mvp/
  - Para el buffet: `/mvp/buffet.html`, con PIN.
  - **v1 (25/10):** cobro con Mercado Pago Checkout Pro y panel del buffet, ver `mvp.md`. Desde el 25/10 usa las credenciales de producción, así que los pagos son reales.
- **Tarea:** "Estás mirando el partido y tenés ganas de comer o tomar algo. Conseguilo sin ir a hacer la fila." Se lee igual a cada persona, sin explicar la página ni cómo pagar.
  - **Dónde y quiénes:** en el SIC, un día de partidos, con 3 a 5 personas del club que no hayan usado la página. Cada una paga su pedido de verdad.
  - **Inicio:** cuando termina de escuchar la consigna, con el cartel del QR a la vista.
  - **Finalización:** retira la comida en el mostrador (el pedido queda "Entregado" en el panel).
  - **Cierre del intento:** la persona dice que deja, pasan 10 minutos sin que llegue a pagar, o el pago falla por un problema técnico (en ese caso se registra aparte, como falla técnica).
  - **Al terminar:** se le pregunta "¿Qué esperabas que pasara?" y "¿Qué te confundió?".
- **Qué cuenta como ayuda:** cualquier explicación del equipo sobre cómo usar la página, cómo pagar, cuándo ir o dónde retirar, aunque sea contestar una pregunta. No cuenta leer la consigna ni lo que dice el cartel.
- **Funcional / manual / simulado:**
  - *Funcional:* todo el recorrido (pedido, pago real, panel, aviso de "Listo" y entrega).
  - *Manual:* al cierre, Felipe Chain le transfiere al buffet lo cobrado.
  - *Simulado:* nada en esta ronda. Una ronda con compañeros en el aula y credenciales de prueba sería solo para detectar problemas de uso, con el pago marcado como simulado.

## Plan de medición

| Métrica | Fórmula/unidad | Fuente y momento | Criterio exploratorio | Decisión |
| --- | --- | --- | --- | --- |
| Éxito | Personas que retiran la comida / personas que intentan | Panel (pedido "Entregado") y planilla del observador, el día de la prueba | 4 de 5 o más | Si no se alcanza: qué paso traba el recorrido (pagar, volver de Mercado Pago, saber cuándo ir) |
| Autonomía | Personas que retiran sin ninguna ayuda / personas que intentan | Observador: anota cada ayuda y en qué paso | 4 de 5 o más | Qué texto o pantalla hay que aclarar |
| Valor | Minutos parado en el buffet: de la llegada al mostrador a recibir la comida | Observador: hora de llegada con segundos; hora de entrega en el panel. Referencia: la fila normal medida el mismo día con 3 a 5 personas (de entrar a la fila a recibir la comida) | Menos de 3 min y menos que la fila normal de ese día | Si el aviso de "Listo" evita esperar parado; si no, revisar cuándo y cómo avisa |

Además, el sistema guarda la hora del pago, de "Listo" y de "Entregado". Sirve para ver si la cocina aguanta, pero no se usa como métrica de valor. Se cuenta el primer intento de cada persona; los reintentos van aparte y los abandonos no se descartan.

## Registro de pruebas

| ID | Perfil/segmento | Versión | Intentó | Completó | Sin ayuda | Valor/unidad o no medido | Dificultad y ayuda |
| --- | --- | --- | --- | --- | --- | --- | --- |
| U1 | [PENDIENTE] | v1 | | | | | |

## Aprendizaje e iteración

- Hechos observados y posibles causas: [PENDIENTE: después de la prueba]
- Prioridad elegida y justificación: [PENDIENTE]
- Pedido a la IA y decisión del equipo: [PENDIENTE]
- Cambio realizado y verificación técnica: [PENDIENTE]

## Comparación

| Métrica | Antes (n y resultado) | Después (n y resultado) | Interpretación y límites |
| --- | --- | --- | --- |
| Éxito | [PENDIENTE] | [PENDIENTE] | |
| Autonomía | [PENDIENTE] | [PENDIENTE] | |
| Valor | [PENDIENTE] | [PENDIENTE] | |

## Próximo paso

- Incertidumbre pendiente: si quien va al club completa el pedido sola y espera menos parada que en la fila, sin el equipo al lado.
- Acción más barata, responsable y momento: prueba en el SIC el **sábado 31/10**, con los mismos roles del 22/10:
  - **Facilita y observa en la cancha (Felipe Servent):** lee la consigna, anota dónde duda la persona y cada ayuda, y le hace las dos preguntas del final.
  - **Observa en el mostrador (Pedro Tailhade):** anota con segundos la hora en que llega cada persona y si pregunta algo.
  - **Registra y mide la fila normal (Juan Ignacio Canabe):** completa el registro y mide de 3 a 5 personas de la fila normal (de entrar a la fila a recibir la comida).
  - **Participantes y buffet (Felipe Chain):** consigue personas del club que no hayan usado la página y observa cómo usa el buffet el panel (dato aparte, no es métrica de esta tarea).
  - Antes del sábado: un pago real chico (una bebida) hecho por un compañero, para confirmar que el cobro de producción llega al panel.
- Qué observar y qué decisión tomar según el resultado: ver el plan de medición.
