# Clase 8 · Pruebas y mejoras del MVP

- **Equipo, fecha, usuario y problema:** Felipe Chain, Felipe Servent, Juan Ignacio Canabe y Pedro Tailhade. Plan armado el 25/10. Usuario: quien va al club un día de partidos y quiere comer o tomar algo. Problema: para comprar en el buffet tiene que hacer la fila y se pierde parte del partido.
- **MVP: acceso y versiones:**
  - Para quien pide: https://felipechain7.github.io/product-development-tp/mvp/
  - Para el buffet: `/mvp/buffet.html`, con PIN.
  - **v1 (25/10):** cobro con Mercado Pago Checkout Pro y panel del buffet, ver `mvp.md`. Desde el 25/10 usa las credenciales de producción, así que los pagos son reales.
- **Tarea:** "Estás mirando el partido y tenés ganas de comer o tomar algo. Conseguilo sin ir a hacer la fila." Se lee igual a cada persona, sin explicar la página ni cómo pagar.
  - **Dónde y quiénes:** en el aula, el 26/10 (día del ensayo), con 3 a 5 compañeros de otros equipos que no hayan usado la página. Son participantes **fuera del segmento** (salvo que alguno vaya a un club de rugby: se anota): sirven para encontrar problemas de uso, no demuestran valor ni demanda. *Cambio decidido por el equipo el 26/10: la prueba en el club deja de ser parte de esta clase.*
  - **Pago:** [DECIDIR: cada participante paga una bebida real ($4.000) o se usan por un rato las credenciales de prueba con una tarjeta de prueba que se da junto con la consigna (pago simulado; después se vuelve a las de producción)].
  - **Inicio:** cuando termina de escuchar la consigna, con el cartel del QR a la vista.
  - **Finalización:** el celular muestra "¡Listo! Andá a retirar" y la persona va al "mostrador" (un integrante con el panel del buffet), dice su código y el pedido queda "Entregado".
  - **Cierre del intento:** la persona dice que deja, pasan 10 minutos sin que llegue a pagar, o el pago falla por un problema técnico (en ese caso se registra aparte, como falla técnica).
  - **Al terminar:** se le pregunta "¿Qué esperabas que pasara?" y "¿Qué te confundió?".
- **Qué cuenta como ayuda:** cualquier explicación del equipo sobre cómo usar la página, cómo pagar, cuándo ir o dónde retirar, aunque sea contestar una pregunta. No cuenta leer la consigna ni lo que dice el cartel.
- **Funcional / manual / simulado:**
  - *Funcional:* todo el recorrido (pedido, pago real, panel, aviso de "Listo" y entrega).
  - *Manual:* al cierre, Felipe Chain le transfiere al buffet lo cobrado.
  - *Simulado:* el buffet (un integrante del equipo hace de mostrador) y, si se eligen credenciales de prueba, el pago.

## Plan de medición

| Métrica | Fórmula/unidad | Fuente y momento | Criterio exploratorio | Decisión |
| --- | --- | --- | --- | --- |
| Éxito | Personas que llegan a "Entregado" / personas que intentan | Panel (pedido "Entregado") y planilla del observador, el 26/10 | 4 de 5 o más | Si no se alcanza: qué paso traba el recorrido (pagar, volver de Mercado Pago, saber cuándo ir) |
| Autonomía | Personas que lo completan sin ninguna ayuda / personas que intentan | Observador: anota cada ayuda y en qué paso | 4 de 5 o más | Qué texto o pantalla hay que aclarar |
| Valor | Minutos parado en el buffet: de la llegada al mostrador a recibir la comida, contra la fila normal | **No medido** en el aula: no hay partido, ni comida, ni fila | Menos de 3 min y menos que la fila normal (para la prueba en el club) | Si el aviso de "Listo" evita esperar parado |

Se cuenta el primer intento de cada persona; los reintentos van aparte y los abandonos no se descartan.

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
- Roles de la ronda en el aula (26/10), como el 22/10:
  - **Facilita y observa (Felipe Servent):** lee la consigna, anota dónde duda la persona y cada ayuda, y le hace las dos preguntas del final.
  - **Hace de mostrador (Pedro Tailhade):** maneja el panel del buffet, marca "Listo" y "Entregado".
  - **Registra (Juan Ignacio Canabe):** completa el registro de pruebas.
  - **Participantes (Felipe Chain):** consigue 3 a 5 compañeros de otros equipos que no hayan usado la página.
- Después: elegir una mejora con lo observado, implementarla y volver a probar con otros compañeros antes de la entrega del 02/11.
- Acción más barata para medir el valor, responsable y momento: prueba en el club un día de partido, con gente del club, midiendo los minutos en el mostrador contra la fila normal. [Fecha y responsable a definir; queda fuera de esta clase]
