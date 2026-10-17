---
title: "Créditos de API en Claude Max y Team (2026): de $100 a $500 al mes y cómo reclamarlos"
metaTitle: "Créditos de API de Claude Max y Team 2026: cómo reclamarlos"
metaDescription: "Claude Max 5x incluye $100 y Max 20x $200 al mes en créditos de API; Team, hasta $500. Cómo reclamarlos, qué cubren y las novedades de Haiku 5.5 y Claude Code."
excerpt: "Desde octubre de 2026, Claude Max 5x incluye $100 y Max 20x $200 al mes en créditos de API de Claude Platform, y los planes Team reciben hasta $500 en un fondo común. Se reclaman vinculando una organización de Console en la configuración de facturación de claude.ai. Cubren la API, Managed Agents y el Agent SDK, no el Claude Code interactivo, y vencen en cada ciclo de facturación."
imageAlt: "Una MacBook Pro en una habitación oscura con código de colores abierto en un editor"
keyTakeaways:
  - "Desde octubre de 2026, Claude Max 5x incluye $100 y Max 20x $200 al mes en créditos de API de Claude Platform, y los planes Team reciben hasta $500 compartidos entre los puestos."
  - "Los créditos mensuales de API de Claude cubren la API de Claude, Message Batches, el Playground de Console, Claude Managed Agents y el Agent SDK, pero no el Claude Code interactivo ni el uso adicional en las apps de Claude."
  - "Los créditos de API se renuevan en cada ciclo de facturación, vencen al terminar sin acumularse y se reclaman vinculando una organización de Claude Console en Configuración > Facturación de claude.ai."
  - "Claude Haiku 5.5 salió el 7 de octubre de 2026 a $0.10 por 1M de tokens de entrada en prompts de hasta 100,000 tokens, y las lecturas de caché de Sonnet 5.5 bajaron de $0.20 a $0.10 por 1M de tokens."
  - "Los mantenedores de código abierto pueden solicitar 6 meses gratis de Claude Max 20x con Claude for Open Source, y los proyectos consolidados pueden inscribirse en el OSS Scanner gratuito de Anthropic."
faq:
  - q: "¿Claude Pro incluye créditos de API?"
    a: "No. El centro de ayuda de Anthropic indica que los créditos mensuales de API solo están disponibles en los planes Max y Team, incluidos los planes Team con descuento. Los planes Free, Pro y Enterprise no cumplen los requisitos. Si usas Pro y quieres crédito de API cada mes, necesitarías Max 5x a $100/mes, que incluye $100 de crédito, o créditos prepagados comprados en Claude Console."
  - q: "¿Puedo usar los créditos de API de Claude Max en Claude Code?"
    a: "No en el Claude Code interactivo de la terminal, un IDE, la app de escritorio o la web, que sigue usando los límites de tu plan. Los créditos sí cubren claude -p y el Agent SDK cuando los ejecutas con una clave de API de tu organización de Console vinculada. Las ejecuciones desde la GitHub Action de Claude Code, las extensiones de IDE o la app de escritorio cuentan como uso de Claude Code."
  - q: "¿Los créditos de API de Claude se acumulan para el mes siguiente?"
    a: "No. Los créditos mensuales de API sin usar vencen al final de cada ciclo de facturación, y los nuevos llegan poco después de que se procese el pago de tu plan. En los planes anuales, los créditos llegan cada mes. Anthropic gasta estos créditos antes que cualquier crédito que hayas comprado, y la página de facturación de Console muestra el monto y la fecha de vencimiento de cada uno."
  - q: "¿Cuánto crédito de API recibe un plan Claude Team?"
    a: "Los planes Team reciben $20 al mes por puesto Standard y $100 por puesto Premium, reunidos en un solo saldo con un tope de $500. Un equipo con tres puestos Standard y dos Premium recibe $260 al mes. El fondo se recalcula según tu número de puestos cada vez que se depositan los créditos, y un Owner o Primary Owner lo reclama para todo el equipo."
  - q: "¿Qué pasa cuando se agotan mis créditos de API de Claude?"
    a: "Si tu organización de Console tiene créditos comprados o recarga automática, el uso de la API continúa y se descuenta de ellos. Si no tiene otros créditos, las solicitudes a la API se detienen hasta que lleguen los créditos mensuales siguientes. Anthropic dice que el uso nunca se cobra a tu plan de Claude, y las organizaciones facturadas por el equipo de ventas de Anthropic pagan como de costumbre lo que exceda los créditos."
  - q: "¿Cuándo pueden reclamar los créditos de API los nuevos suscriptores de Claude Max?"
    a: "Después de siete días en un plan elegible. La oferta aparece entonces en Configuración > Facturación (Settings > Billing) de claude.ai en un navegador web, también para quienes se suscribieron en iOS o Android. No necesitas un método de pago en Claude Platform, y pasar de Max 5x a Max 20x da crédito prorrateado de inmediato."
howTo:
  name: "Cómo reclamar los créditos mensuales de API en Claude Max o Team"
  steps:
    - name: "Comprueba que cumples los requisitos"
      text: "Ten Max 5x, Max 20x o Team durante al menos siete días, como suscriptor de Max o como Owner o Primary Owner de Team."
    - name: "Abre la configuración de facturación"
      text: "En claude.ai, desde un navegador web, ve a Configuración > Facturación (Settings > Billing) en Max, o a Configuración de la organización > Facturación (Organization settings > Billing) en Team."
    - name: "Vincula una organización de Console"
      text: "En la sección Créditos de API (API credits), elige Vincular organización (Link organization) y selecciona la organización de Claude Console en la que desarrollas, o crea una. Necesitas el rol Owner, Admin o Billing en ella."
    - name: "Acepta los términos"
      text: "Revisa los Términos de crédito suplementario (Supplemental Credit Terms) y confirma con Vincular organización (Link organization). El vínculo no se puede cambiar después sin contactar con soporte."
    - name: "Empieza a desarrollar"
      text: "Busca el crédito en Créditos promocionales (Promotional credits) en la página de facturación de Console, crea una clave de API y envía tu primera solicitud."
---
Los planes Claude Max y Team ahora incluyen créditos mensuales para la API de Claude: $100 en Max 5x, $200 en Max 20x y hasta $500 compartidos en Team. Se reclaman una sola vez, sirven para tus propias apps y agentes en lugar de Claude Code, y vencen en cada ciclo de facturación. Todos los detalles y precios de los planes que siguen son del 17 de octubre de 2026 y salen del centro de ayuda de Anthropic, sus páginas de precios y el registro de cambios de Claude Code.

## ¿Qué son los créditos mensuales de API de Claude?

Los créditos mensuales de API de Claude son créditos de Claude Platform incluidos en las suscripciones Max y Team, para crear y ejecutar tus propias apps y agentes con la API de Claude. Van aparte de tus límites de chat y de Claude Code.

Anthropic anunció los créditos el 7 de octubre de 2026, junto con Claude Haiku 5.5, y los fue activando para los suscriptores en los días siguientes. La [página de precios de Anthropic](https://claude.com/pricing) ya indica "$100 to $200/month in API credits" en Max y hasta $500 al mes en créditos de API compartidos en Team. Los planes Free, Pro y Enterprise no los reciben.

Los créditos son un añadido, no un canje. Según el centro de ayuda, tus límites de uso en Claude, Claude Code y Cowork se quedan exactamente como estaban. Tampoco son el crédito del Agent SDK que Anthropic anunció en junio: ese beneficio no está disponible, según el mismo artículo.

## ¿Cuánto crédito de API da cada plan de Claude?

Max 5x recibe $100 al mes, Max 20x recibe $200, y los planes Team reciben $20 por puesto Standard y $100 por puesto Premium, reunidos en un fondo con tope de $500.

| Plan | Precio del plan | Crédito mensual de API |
|---|---|---|
| Free | $0 | Ninguno |
| Pro | $20/mes o $200/año | Ninguno |
| Max 5x | $100/mes | $100 |
| Max 20x | $200/mes | $200 |
| Puesto Team Standard | $25/puesto/mes, o $20 con facturación anual | $20 por puesto, compartidos, hasta $500 por equipo |
| Puesto Team Premium | $125/puesto/mes, o $100 con facturación anual | $100 por puesto, compartidos, hasta $500 por equipo |
| Enterprise | $20/puesto/mes con facturación anual, más el uso a tarifas de API | Ninguno |

Así funciona el fondo de Team, según el [centro de ayuda de Anthropic](https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-and-team-plans):

- **Un saldo por equipo.** Tres puestos Standard y dos Premium dan $260 al mes. Al añadir un tercer puesto Premium, el siguiente ciclo sube a $360.
- **El tope es de $500.** Los equipos más grandes siguen recibiendo $500, el máximo que obtiene cualquier plan Team.
- **Los planes Team con descuento también cuentan.** Los planes Team para organizaciones sin fines de lucro y para científicos reciben los mismos $20 y $100 por puesto.

Si pasas de Max 5x a Max 20x, recibes crédito prorrateado de inmediato y $200 en cada ciclo posterior. Nuestra [comparativa de Claude Pro y Max](/blog/claude-pro-vs-max/) explica qué más cambia entre los niveles.

## ¿Cómo se reclaman los créditos de API de Claude?

Los créditos de API de Claude se reclaman una sola vez, vinculando una organización de Claude Console a tu plan en la configuración de facturación de claude.ai. Después, los créditos llegan a esa organización en cada ciclo de facturación.

1. Espera a cumplir siete días en Max o Team. Los suscriptores nuevos no pueden reclamarlos antes.
2. En claude.ai, desde un navegador web, abre **Configuración > Facturación** (Settings > Billing) en Max o **Configuración de la organización > Facturación** (Organization settings > Billing) en Team.
3. En la sección **Créditos de API** (API credits), elige **Vincular organización** (Link organization) y luego selecciona o crea la organización de Console que debe recibir el crédito.
4. Revisa los Términos de crédito suplementario (Supplemental Credit Terms) y confirma.
5. Abre la página de facturación de Console, busca el crédito en Créditos promocionales (Promotional credits) y crea una clave de API.

Algunas reglas que conviene conocer antes de hacer clic:

- **Roles.** En Max tienes que ser el suscriptor; en Team, un Owner o Primary Owner. En la organización de Console necesitas el rol Owner, Admin o Billing.
- **Un solo vínculo, fijo.** Cada plan se vincula a una organización de Console, y cada organización recibe créditos de un solo plan. No puedes cambiar el vínculo por tu cuenta, así que elige la organización en la que vas a desarrollar.
- **Sin tarjeta.** No hace falta añadir un método de pago en Claude Platform para reclamar ni usar el crédito.
- **Suscriptores desde el móvil.** Los planes comprados en iOS o Android también cumplen los requisitos, pero el trámite se hace en claude.ai desde un navegador.
- **Usar el mismo correo ayuda.** Anthropic sugiere iniciar sesión en Console con el mismo correo que usas en claude.ai.

## ¿Qué cubren los créditos de API y qué no?

Los créditos mensuales de API de Claude cubren la API de Claude, Claude Managed Agents, el Agent SDK y el Playground de Console. No cubren el Claude Code interactivo, el uso adicional en las apps de Claude ni Claude en otras nubes.

Lo que sí cubren, con cualquier modelo de Claude disponible:

- La API de Claude, tanto la Messages API como la Message Batches API
- El Playground de Claude Console
- [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview), la infraestructura de agentes alojada por Anthropic, ahora en beta
- El Claude Agent SDK, y `claude -p` cuando lo ejecutas con una clave de API de la organización vinculada

Lo que no cubren:

- El Claude Code interactivo en la terminal, un IDE, la app de escritorio o la web
- El uso adicional (créditos de uso) en Claude, Claude Code o Cowork
- Claude en Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry o Claude Platform on AWS

Cómo se comporta el saldo: los créditos se renuevan en cada ciclo de facturación (y cada mes en los planes anuales), vencen al terminar el ciclo sin acumularse y se gastan antes que cualquier crédito que hayas comprado. Todas las personas con una clave de API en la organización vinculada usan el mismo saldo, así que los propietarios de Team pueden fijar límites de gasto por workspace en Console. Cuando los créditos se agotan y la organización no tiene créditos comprados, las solicitudes a la API se detienen hasta el siguiente depósito; no se cobra nada a tu plan de Claude.

## ¿Qué se puede hacer con $100 de crédito de API de Claude?

A los precios de lista de Anthropic, $100 alcanzan para unos 1000 millones de tokens de entrada de Haiku 5.5 en prompts cortos, 50 millones de tokens de entrada de Sonnet 5.5 o unas 170 sesiones de una hora de Managed Agents con Opus 5.5.

| Modelo | Entrada por 1M de tokens | Salida por 1M de tokens | Lecturas de caché por 1M de tokens |
|---|---|---|---|
| Haiku 5.5, prompts de hasta 100,000 tokens | $0.10 | $0.50 | $0.01 |
| Haiku 5.5, prompts de más de 100,000 tokens | $0.50 | $2.50 | $0.05 |
| Sonnet 5.5 | $2 | $10 | $0.10 |
| Opus 5.5 | $4 | $20 | $0.20 |
| Opus 5.5 en modo rápido | $8 | $40 | Además se aplican los multiplicadores de caché |
| Fable 5.1 | $10 | $50 | $0.25 |

Nuestras cuentas, a partir de la [página de precios de la API de Anthropic](https://platform.claude.com/docs/en/about-claude/pricing):

- **Haiku 5.5:** $100 cubren 1000 millones de tokens de entrada o 200 millones de tokens de salida en prompts de hasta 100,000 tokens.
- **Sonnet 5.5:** $100 cubren 50 millones de tokens de entrada o 10 millones de tokens de salida.
- **Managed Agents:** las sesiones cobran los tokens a las tarifas del modelo más $0.08 por hora de sesión mientras se ejecutan. El ejemplo de la propia Anthropic, una sesión de una hora con Opus 5.5 con 50,000 tokens de entrada y 15,000 de salida, cuesta $0.58, así que $100 pagan unas 172 sesiones así.

La factura real depende de la longitud del prompt, el uso de caché, el nivel de esfuerzo y las herramientas. La búsqueda web dentro de una sesión cuesta $10 por cada 1,000 búsquedas, y el modo rápido no funciona con la Batch API.

## ¿Qué cambió en los precios de la API de Claude en octubre de 2026?

En octubre de 2026 hubo tres cambios de precios: Claude Haiku 5.5 salió el 7 de octubre, las lecturas de caché de Sonnet 5.5 se redujeron a la mitad ese mismo día y el modo rápido de Opus 5.5 pasó a estar disponible para todos.

- **Claude Haiku 5.5.** Anthropic lo describe como el modelo pequeño más barato, rápido y capaz que ha lanzado. Cuesta un 90 % menos que Haiku 4.5 en prompts de hasta 100,000 tokens y un 50 % menos por encima de esa cifra, lo que según Anthropic equivale a un 75 % más barato en promedio. Tiene una ventana de contexto de 1M de tokens, hasta 128K tokens de salida y, por primera vez en un modelo Haiku, un ajuste de esfuerzo regulable. Anthropic lo recomienda para resúmenes, clasificación, compactación y trabajo de subagentes, según su [anuncio de Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5).
- **Lecturas de caché de Sonnet 5.5.** Bajaron de $0.20 a $0.10 por 1M de tokens el 7 de octubre. Como las lecturas de caché son buena parte del tráfico de los agentes, Anthropic estima que Sonnet 5.5 ahora sale un 20 % más barato en la mayoría del trabajo con agentes.
- **Modo rápido de Opus 5.5.** Con `"speed": "fast"` en una solicitud, obtienes hasta 2.5x más tokens de salida por segundo al doble del precio estándar, $8 de entrada y $40 de salida por 1M de tokens. Opus 5.5 ya no necesita un encabezado beta ni una solicitud de acceso, según la [documentación del modo rápido](https://platform.claude.com/docs/en/build-with-claude/fast-mode). Funciona en la API propia y en Microsoft Foundry.

En Claude Code puedes cambiar a Haiku 5.5 con `/model haiku`. Eso cambia la rapidez con que gastas los límites de tu plan, no tus créditos de API.

## ¿Qué novedades de Claude Code hacen que tus límites de uso duren más?

Cuatro cambios de Claude Code de octubre de 2026 ahorran uso: la compactación por inactividad, el esfuerzo y el modelo por subagente, los nuevos avisos de `/usage` y un presupuesto de búsqueda web que se renueva. Todos funcionan dentro de los límites de tu plan actual.

- **Compactación por inactividad (versión 2.1.299, 14 de octubre).** Una conversación de terminal de más de 200K tokens que queda inactiva unos 54 minutos se compacta justo antes de que venza su caché de prompt de una hora. Cuando vuelves, Claude reprocesa el resumen en lugar de toda la conversación. Para desactivarla, pon `"idleCompaction": false` en settings.json o, desde la versión 2.1.302, usa la fila Idle compaction de `/config`.
- **Esfuerzo y modelo por subagente (2.1.292, 6 de octubre).** Puedes pedir en tu prompt subagentes de esfuerzo bajo para buscar en una base de código y un subagente de esfuerzo alto para juzgar los resultados, o Haiku para consultas rápidas. Antes, eso exigía una definición de subagente personalizada.
- **Avisos de uso (2.1.299).** `/usage` ahora señala el esfuerzo máximo, los workflows, el contexto siempre activo y los resultados de herramientas muy grandes, las causas habituales de una sesión que se agota rápido.
- **Presupuesto de búsqueda web (2.1.290, 5 de octubre).** Las sesiones interactivas ahora tienen 100 búsquedas por hora que se renuevan, en lugar de detenerse tras 200.

Los ingenieros de Anthropic añaden un consejo para el prompt: los subagentes priorizan la exhaustividad por defecto, así que una frase en tu prompt que diga que el tiempo importa los hace ir más rápido, con lo que Anthropic llama un equilibrio razonable entre velocidad y calidad. Para entender cómo funcionan las sesiones de 5 horas y los topes semanales, lee nuestra guía de los [límites de uso de Claude](/blog/claude-usage-limits/), y revisa [Claude Watch](/) antes de las sesiones largas de chat entre semana.

## ¿Qué hay de nuevo en la app de escritorio de Claude Code y en las sesiones en la nube?

La app de escritorio de Claude Code estrenó en octubre de 2026 una pantalla de sesión nueva, entornos guardados y sesiones anidadas, y las sesiones en la nube ahora retoman tu trabajo local exactamente como lo dejaste.

App de escritorio, según el boletín de Claude Code de Anthropic y la [documentación de escritorio](https://code.claude.com/docs/en/desktop):

- **Pantalla de sesión nueva.** Las carpetas recientes quedan a un clic, y puedes guardar una configuración como entorno, por ejemplo unas cuantas carpetas, un host SSH o la nube.
- **Sesiones anidadas.** Pídele a Claude que ejecute tareas en paralelo y cada una tendrá su propia sesión, que informa a tu sesión principal al terminar. El trabajo de seguimiento sugerido puede empezar en su propia sesión con un clic.
- **Preguntas laterales en una pestaña.** `/btw` ahora abre una pregunta lateral en su propia pestaña.
- **Estado de un vistazo.** La barra lateral muestra qué sesiones siguen trabajando y cuáles te necesitan, y un panel lateral indica dónde se ejecuta una sesión, su contexto y sus cambios.

Sesiones en la nube, según la [documentación en la nube de Anthropic](https://code.claude.com/docs/en/claude-code-on-the-web):

- **Continuar el trabajo iniciado en local.** Al pasar una sesión local a la nube ahora se llevan tus cambios sin confirmar y tus commits sin subir, así que no tienes que hacer commit ni push antes. En macOS, Linux y WSL, los cambios sin confirmar en archivos que parecen credenciales, como los .env y las claves privadas, se quedan en tu equipo.
- **Secretos de red en Team.** Los planes Team ahora pueden añadir una clave de API a un entorno en la nube, como ya podían Pro y Max, y Claude llama a los hosts indicados sin ver la clave.

Si reclamaste el [crédito de nube de Claude Code](/deals/claude-code-cloud-credit-2026/) antes del 7 de octubre, úsalo en sesiones en la nube antes de que venza el 4 de noviembre de 2026. Nuestra [comparativa de herramientas de IA para programar](/blog/best-ai-coding-tools/) muestra cómo se compara el precio de Claude Code con Cursor, Codex y Copilot.

## ¿Hay ofertas gratis de Claude para mantenedores de código abierto?

Sí. Claude for Open Source da a los mantenedores aprobados 6 meses gratis de Claude Max 20x, y desde el 8 de octubre de 2026 el OSS Scanner de Anthropic hace análisis de seguridad gratuitos a proyectos de código abierto consolidados.

[Claude for Open Source](/deals/claude-for-open-source-max-2026/) tiene un tope de 10,000 beneficiarios aprobados, y la solicitud se hace con tu cuenta de GitHub. Quien solicita debe cumplir uno de estos criterios, según la [página del programa de Anthropic](https://claude.com/contact-sales/claude-for-oss) y sus términos:

- Proyectos con 500 o más repositorios dependientes, 100 o más paquetes dependientes o 200,000 o más descargas mensuales
- Un puesto de committer o mantenedor en una fundación o en un proyecto de lenguaje reconocidos
- 100 o más pull requests aceptadas en repositorios que no son tuyos en los últimos 12 meses
- Un repositorio con 20 o más colaboradores externos únicos, o una puntuación de criticidad de OpenSSF de 0.4 o más

La cuenta de GitHub debe tener al menos dos años, con actividad pública de código abierto en los últimos 90 días. Pasados los 6 meses, quienes tenían un plan de pago vuelven a él con su tarifa de antes salvo que lo cancelen; el resto vuelve al plan Free.

El [OSS Scanner](https://red.anthropic.com/oss-scanner/) es opcional: los mantenedores principales se inscriben abriendo una pull request con la configuración del proyecto y un Dockerfile sin conexión en el repositorio oss-scanner de Anthropic en GitHub. Después, los proyectos reciben análisis periódicos de los modelos más potentes de Anthropic sin costo, con informes que no ha revisado una persona. La aceptación sigue criterios parecidos a los de OSS-Fuzz de Google, así que los proyectos recién creados y la mayoría de los forks no cumplen los requisitos. OpenAI tiene un programa similar, [Codex for Open Source](/deals/codex-for-open-source-chatgpt-pro-2026/), con seis meses de ChatGPT Pro.

## Conclusión

Reclama los créditos si tienes Max o Team y podrías crear algo con la API. Reclamarlos no cuesta nada, pero después solo el soporte puede cambiar el vínculo con la organización.

- **Suscriptores de Max que desarrollan con la API:** vincula la organización de Console que de verdad usas, porque no puedes cambiarla tú mismo. $100 o $200 al mes cubren mucho trabajo con Haiku 5.5 y Sonnet 5.5.
- **Suscriptores de Max que solo usan Claude Code:** los créditos no ampliarán tus límites. La compactación por inactividad, los subagentes con Haiku 5.5 y los nuevos avisos de `/usage` sí lo harán.
- **Usuarios de Pro que piensan en Max 5x:** Max 5x cuesta $80 al mes más que Pro e incluye $100 de crédito de API, así que compensa antes si ya gastas esa cantidad en la API.
- **Propietarios de Team:** un propietario reclama para todo el equipo; fija límites de gasto por workspace para que un proyecto no agote el fondo.
- **Mantenedores de código abierto:** solicita Claude for Open Source y, si tu proyecto es crítico, el OSS Scanner.

Nuestra [página de la oferta de créditos de API](/deals/claude-max-team-api-credits-2026/) recoge cualquier cambio en las condiciones, y todas las demás ofertas de Claude están en nuestra [ficha de Claude](/tools/claude/) y en el [calendario de promociones](/calendar/).
