---
summary: "DeepSeek es un asistente de chat con IA gratis del laboratorio chino DeepSeek, basado en su familia de modelos de pesos abiertos V4. Combina un asistente sin suscripción con precios de API por token muy bajos, y DeepSeek-V4.1-Flash llegó en septiembre de 2026. Lo usan sobre todo usuarios que cuidan el presupuesto, desarrolladores e investigadores que autoalojan modelos."
metaTitle: "¿DeepSeek es gratis? App, precios de API y V4.1"
metaDescription: "La app de chat de DeepSeek es gratis. Consulta los precios de API 2026 de deepseek-flash y V4-Pro, los descuentos fuera de pico, la privacidad y alternativas."
bestFor:
  - "Usuarios diarios con presupuesto justo"
  - "Devs que recortan costes de API"
  - "Investigadores con pesos abiertos"
keyFeatures:
  - name: "Chat gratis en web y móvil"
    description: "Chatea, sube archivos y busca en la web en chat.deepseek.com o en las apps de iOS y Android sin suscripción."
  - name: "Contexto de 1M de tokens"
    description: "Desde el lanzamiento de V4 en abril de 2026, una ventana de contexto de 1M de tokens es la opción por defecto en los servicios oficiales de DeepSeek."
  - name: "V4-Pro en Expert Mode"
    description: "DeepSeek-V4-Pro, disponible en general desde el 13 de agosto de 2026, se ofrece en la app y en la web a través de Expert Mode."
  - name: "Pesos abiertos"
    description: "Los pesos y los informes técnicos de V4-Pro, V4-Flash y V4.1-Flash se publican en Hugging Face para investigación y autoalojamiento."
  - name: "Precios de API fuera de pico"
    description: "Facturación por token con caché de contexto, y tarifas fuera de pico que cuestan la mitad que las ventanas pico de días laborables."
  - name: "Funciona con agentes de código"
    description: "La API acepta los formatos de solicitud de OpenAI y de Anthropic, así que herramientas como Claude Code y OpenCode pueden funcionar con modelos de DeepSeek."
useCases:
  - "Depurar un script o repasar una demostración matemática en el chat web gratis sin pagar un plan."
  - "Apuntar Claude Code u OpenCode al endpoint compatible con Anthropic de DeepSeek para ejecutar agentes de código con tokens más baratos."
  - "Programar grandes tareas de resumen en lote fuera de las horas pico en UTC para reducir a la mitad la factura de la API."
  - "Descargar los pesos abiertos de Hugging Face para probar un modelo de DeepSeek en tu propia infraestructura."
pricingSummary: "El chat web y las apps de iOS y Android son gratis. La API es de pago por uso: deepseek-flash cuesta $0.30 por 1M de tokens de entrada (cache miss) y $1.20 por 1M de tokens de salida en pico, la mitad fuera de pico."
savingTips:
  - "Ejecuta cargas de API flexibles fuera de las horas pico (01:00–04:00 y 06:00–10:00 UTC, de lunes a viernes) para pagar un 50 % menos."
  - "Reutiliza prefijos largos de prompt: la entrada de deepseek-flash en caché cuesta $0.006 por 1M de tokens en pico en vez de $0.30 en un cache miss."
  - "Elige deepseek-flash antes que deepseek-v4-pro para tareas rutinarias; su precio de salida en pico es $1.20 por 1M de tokens frente a $3.96."
faq:
  - q: "¿DeepSeek es gratis?"
    a: "Sí. El chat web de DeepSeek y sus apps de iOS y Android no cuestan nada y no tienen un nivel de suscripción. Solo la API para desarrolladores es de pago, y se descuenta por token de un saldo recargado o concedido."
  - q: "¿Dónde almacena DeepSeek mis datos?"
    a: "En China. La política de privacidad de DeepSeek, actualizada por última vez el 10 de febrero de 2026, dice que recopila, procesa y almacena datos personales en la República Popular China. Tenlo en cuenta antes de compartir información personal o de empresa sensible."
  - q: "¿Por qué DeepSeek se llama DSeek en el Reino Unido?"
    a: "Un aviso en chat.deepseek.com dice que, por una reestructuración de marca, DeepSeek ahora es oficialmente DSeek en el Reino Unido. El aviso añade que todos los servicios continúan con normalidad."
  - q: "¿Qué es DeepSeek-V4.1-Flash?"
    a: "Es el modelo más nuevo de DeepSeek, lanzado el 10 de septiembre de 2026: un modelo mixture-of-experts de 552.000 millones de parámetros con comprensión visual nativa. Reemplazó a V4-Flash en la API bajo el nombre deepseek-flash, con precios más bajos."
  - q: "¿Todavía puedo usar DeepSeek-V4-Pro a través de la API?"
    a: "Sí. DeepSeek primero planeó redirigir las solicitudes de V4-Pro a V4.1-Flash a partir del 14 de septiembre de 2026, pero su página de precios ahora dice que V4-Pro sigue disponible con la facturación sin cambios hasta nuevo aviso."
---
## ¿Qué es DeepSeek?
DeepSeek es tanto un laboratorio de IA con sede en Hangzhou como el asistente gratis que ejecuta en el navegador y en apps móviles. Los desarrolladores llegan a los mismos modelos a través de una API de bajo coste o descargan los pesos abiertos para ejecutarlos ellos mismos.

## Cambios recientes
- **24 de abril de 2026:** V4 Preview presentó V4-Pro (1,6 billones totales, 49.000 millones de parámetros activos) y V4-Flash, e hizo estándar el contexto de 1M.
- **24 de julio de 2026:** se retiraron los nombres heredados de modelo de API deepseek-chat y deepseek-reasoner.
- **Agosto de 2026:** V4-Pro llegó a disponibilidad general, y entraron en vigor las tarifas de API pico y fuera de pico.
- **10 de septiembre de 2026:** V4.1-Flash reemplazó a V4-Flash con precios de API más baratos.
- **Reino Unido:** el servicio ahora lleva el nombre DSeek.

## Limitaciones
DeepSeek almacena los datos personales en China, lo que puede descartarlo para trabajo regulado o confidencial. En la API, la entrada de visión solo funciona con deepseek-flash, y los precios se duplican durante las ventanas pico de días laborables. Los nombres de modelo y el enrutamiento han cambiado varias veces en 2026, así que los usuarios de la API deberían revisar la página de precios antes de desplegar.
