---
title: "Límites de uso de Claude (2026): sesiones de 5 horas, topes semanales y reinicios"
metaTitle: "Límites de uso de Claude 2026: sesiones, topes y reinicios"
metaDescription: "Los límites de uso de Claude se reinician cada 5 horas y los planes de pago suman un tope semanal. Compara Pro y Max, los cambios de 2026 y cómo hacer que rindan más."
excerpt: "Los límites de uso de Claude se reinician en una ventana móvil de 5 horas y los planes de pago suman un tope semanal. El chat y Claude Code comparten la misma reserva. Pro da al menos 5 veces el uso por sesión de Free; Max 5x y Max 20x, 5 y 20 veces el de Pro. Entre semana, de 13:00 a 19:00 UTC, las sesiones se agotan antes, y con créditos de uso los planes de pago siguen funcionando a tarifas de la API."
imageAlt: "Reloj de arena con arena oscura sobre un escritorio, frente a una pared gris con textura"
keyTakeaways:
  - "Cada plan de Claude tiene un límite de uso que se reinicia en una ventana de sesión móvil de 5 horas, y los planes de pago suman además un límite semanal."
  - "Claude Pro da al menos 5 veces el uso de Free por sesión de 5 horas; Max 5x ($100/mes) y Max 20x ($200/mes) dan 5 y 20 veces el de Pro."
  - "Claude en la web, el escritorio y el móvil y Claude Code usan una misma reserva de uso, así que una sesión larga de programación gasta el mismo cupo que un chat largo."
  - "Desde el 14 de septiembre de 2026, los límites semanales de Claude Code están de forma permanente un 25 % por encima de la base previa a la promoción, tras terminar ese día un aumento temporal del +50 %."
  - "Cuando un plan Pro o Max llega a su límite, los créditos de uso mantienen a Claude funcionando a tarifas estándar de la API en vez de esperar al reinicio."
faq:
  - q: "¿Cuántos mensajes puedo enviar con Claude Pro?"
    a: "Anthropic no publica una cantidad fija de mensajes para Claude Pro. El uso depende de la longitud de los mensajes, el tamaño de los adjuntos, la longitud de la conversación, las herramientas, el modelo elegido, el nivel de esfuerzo y los artefactos. La página de precios de Anthropic solo dice que Pro da al menos 5 veces más uso por sesión de 5 horas que Free, y Pro también tiene un límite semanal."
  - q: "¿Claude Max tiene límite semanal?"
    a: "Sí. Claude Max 5x y Max 20x tienen un límite de uso semanal que se aplica a todos los modelos, además del límite de sesión que se reinicia cada cinco horas. Según el Centro de ayuda de Anthropic, el límite semanal se reinicia cada semana a una hora fija asignada a tu cuenta."
  - q: "¿Claude Code comparte límites con la app de Claude?"
    a: "Sí. Claude Code está incluido en todos los planes de pago y comparte la misma reserva de uso que el chat en la web, el escritorio y el móvil, según la página de precios de Anthropic. El 6 de mayo de 2026, Anthropic duplicó los límites de 5 horas de Claude Code en los planes de pago y eximió a Claude Code en Pro y Max de las horas pico."
  - q: "¿Cuánto cambió el límite semanal de Claude Code el 14 de septiembre de 2026?"
    a: "Desde el 14 de septiembre de 2026, los límites semanales estándar de Claude Code están de forma permanente un 25 % por encima de la base previa a la promoción. Un aumento temporal del +50 % que empezó el 13 de mayo terminó ese mismo día, así que, con una base de 100, la capacidad pasó de 150 durante la promoción a 125, cerca de un 17 % menos."
  - q: "¿Valen la pena los créditos de uso de Claude?"
    a: "Los créditos de uso de Claude tienen sentido si llegas al límite de Pro o Max de vez en cuando y no puedes esperar al reinicio. Se cobran a tarifas estándar de la API, requieren saldo prepagado y admiten un tope de gasto mensual. Si llegas al límite semanal casi todas las semanas, un plan más grande suele ser la solución más sencilla."
  - q: "¿Puedo ver cuánto uso de Claude me queda?"
    a: "Sí. En Claude, abre Configuración > Uso (Settings > Usage) para ver cuánto has usado de tu límite de sesión de 5 horas y de tu límite semanal, y cuándo se reinicia cada uno. El artículo de buenas prácticas de uso de Anthropic recomienda revisar esta página para controlar tu consumo."
howTo:
  name: "Cómo hacer que los límites de uso de Claude duren más"
  steps:
    - name: "Programa el trabajo pesado fuera de pico"
      text: "Deja los documentos largos, Research y las subidas grandes para fuera de la franja de 13:00 a 19:00 UTC entre semana, o para el fin de semana, cuando los límites de sesión de 5 horas se agotan a ritmo normal."
    - name: "Mantén conversaciones cortas y enfocadas"
      text: "Abre un chat nuevo para cada tema nuevo, planifica primero tu pedido y combina las preguntas relacionadas en un solo mensaje concreto."
    - name: "Guarda los archivos de referencia en un proyecto"
      text: "Sube los documentos que reutilizas a un proyecto, donde, según Anthropic, el contenido en caché cuenta menos para tus límites."
    - name: "Elige el modelo según la tarea"
      text: "Usa Sonnet o Haiku para el trabajo rutinario y reserva Opus y Fable para los problemas difíciles; en Max, Fable puede usar como máximo el 50 % de tu límite semanal."
    - name: "Controla el uso y prepárate para los excesos"
      text: "Revisa Configuración > Uso para ver las horas de reinicio y activa los créditos de uso con un tope mensual si no puedes esperar al reinicio."
---
Los límites de uso de Claude funcionan en dos capas: un límite de sesión que se reinicia en una ventana móvil de 5 horas en todos los planes y, además, un límite semanal en los planes de pago. El chat y Claude Code usan la misma reserva, y las sesiones se agotan más rápido de lunes a viernes, de 13:00 a 19:00 UTC. Aquí explicamos cómo funcionan los límites a octubre de 2026, cada cambio que Anthropic hizo este año y cómo hacer que duren más.

## ¿Cómo funcionan los límites de uso de Claude?

Los límites de uso de Claude se reinician en una ventana de sesión móvil de 5 horas, y los planes de pago suman límites semanales, según la [página de precios de Anthropic](https://claude.com/pricing). No hay una cantidad fija de mensajes.

Tres reglas explican casi todo:

- **Límite de sesión:** cada plan, incluido Free, tiene un cupo por sesión de 5 horas.
- **Límite semanal:** los planes de pago también tienen un tope semanal. En Max, se aplica a todos los modelos.
- **Una sola reserva:** Claude en la web, el escritorio y el móvil y Claude Code comparten el mismo uso. Una sesión larga de programación consume el mismo cupo que un chat largo.

Lo que cuesta un mensaje depende de lo que pidas. Las [buenas prácticas de uso](https://support.claude.com/en/articles/9797557-usage-limit-best-practices) de Anthropic enumeran la longitud del mensaje, el tamaño de los archivos adjuntos, la longitud de la conversación en curso, herramientas como Research y la búsqueda web, el modelo elegido, el nivel de esfuerzo, los artefactos y las tareas de varios pasos, como ejecutar código o navegar por sitios web.

## ¿Cuándo se reinicia el límite de Claude?

El límite de sesión de Claude se reinicia cada cinco horas, y el límite semanal, cada semana a una hora fija asignada a tu cuenta. Ambas horas de reinicio aparecen en Claude, en Configuración > Uso (Settings > Usage).

El reinicio semanal no es igual para todos, así que el día de reinicio de un amigo no te dice nada sobre el tuyo. Anthropic describe el calendario semanal en su [artículo sobre el plan Max](https://support.claude.com/en/articles/11049741-what-is-the-max-plan). Si llegas al límite de sesión, basta con esperar al siguiente reinicio de 5 horas. Si llegas al límite semanal, un reinicio de sesión no sirve hasta que llegue el reinicio semanal.

## ¿Cuánto uso incluye cada plan de Claude?

Claude Pro da al menos 5 veces el uso de Free por sesión de 5 horas, y Max multiplica el de Pro por 5 o por 20. Los precios de abajo son los de Anthropic a octubre de 2026.

| Plan | Precio | Uso por sesión de 5 horas | Claude Code | Créditos de uso |
|---|---|---|---|---|
| Free | $0 | Base | No | No |
| Pro | $20/mes, o $17/mes con facturación anual ($200 por adelantado) | Al menos 5x Free | Sí | Sí |
| Max 5x | $100/mes | 5x Pro | Sí | Sí |
| Max 20x | $200/mes | 20x Pro | Sí | Sí |

Max solo se factura mensualmente. Los puestos Team Standard cuestan $25/mes, o $20/mes con facturación anual, y los planes Team y Enterprise por puesto tienen su propia configuración de créditos de uso.

Nuestra [comparativa Claude Pro vs. Max](/blog/claude-pro-vs-max/) explica qué nivel encaja con cada carga de trabajo.

## ¿Cuáles son los límites de uso de Claude Code?

Claude Code usa los mismos límites de 5 horas y semanales que el chat, pero Anthropic los ha cambiado por separado varias veces en 2026. A octubre de 2026, Claude Code tiene límites de 5 horas duplicados, un aumento semanal permanente y una exención de las horas pico en Pro y Max.

- **Límites de 5 horas:** el 6 de mayo de 2026, Anthropic [duplicó los límites de 5 horas de Claude Code](/deals/claude-code-5h-limits-doubled/) en los planes de pago, según su [anuncio oficial](https://www.anthropic.com/news/higher-limits-spacex).
- **Horas pico:** la misma actualización quitó la reducción en horas pico para Claude Code en Pro y Max.
- **Límites semanales:** un [aumento semanal del +50 %](/deals/claude-code-weekly-plus50-2026/) estuvo vigente del 13 de mayo al 14 de septiembre de 2026. Lo reemplazó un [+25 % permanente](/deals/claude-code-weekly-plus25-permanent/). Con una base de 100, eso es 100 antes, 150 durante la promoción y 125 ahora.
- **Sesiones en la nube:** los suscriptores individuales de Pro reciben $100 y los de Max $250 en [crédito de nube de Claude Code](/deals/claude-code-cloud-credit-2026/), que las sesiones en la nube usan antes que los límites del plan. Solicítalo a más tardar el 7 de octubre de 2026; el crédito no usado vence el 4 de noviembre de 2026.

Claude Code no forma parte del plan Free.

## ¿Cómo afectan las horas pico a los límites de uso de Claude?

En las horas pico de Claude, de lunes a viernes de 13:00 a 19:00 UTC, el límite de sesión de 5 horas se agota más rápido en los planes Free, Pro, Max y Team. Los límites semanales no se ven afectados.

[Las horas pico entraron en vigor el 27 de marzo de 2026](/deals/claude-peak-hours-introduced/). En ese momento, Thariq Shihipar, de Anthropic, calculó que alrededor del 7 % de los usuarios llegaría a límites de sesión que antes no habría alcanzado, según [informó The Register](https://www.theregister.com/2026/03/26/anthropic_tweaks_usage_limits/).

Los planes Enterprise no se ven afectados, y Claude Code en Pro y Max está exento. Nuestra [guía de las horas pico de Claude](/blog/claude-peak-hours/) convierte la franja a 9 zonas horarias, y [Claude Watch](/) muestra si se aplica en este momento.

## ¿Qué cambió en los límites de uso de Claude en 2026?

Contamos 9 cambios de límites y promociones en 2026, 4 de ellos solo para Claude Code. Dos promociones están activas a 4 de octubre de 2026.

| Fecha | Cambio | Planes | Estado |
|---|---|---|---|
| Del 13 al 27 de marzo de 2026 | [Límites de sesión duplicados](/deals/claude-march-2026-offpeak-2x/) fuera de las horas pico entre semana y todo el fin de semana | Free, Pro, Max, Team | Terminado |
| 27 de marzo de 2026 | Horas pico: los límites de 5 horas se agotan más rápido de lunes a viernes, de 13:00 a 19:00 UTC | Free, Pro, Max, Team | Vigente |
| 6 de mayo de 2026 | Límites de 5 horas de Claude Code duplicados; Claude Code en Pro y Max, exento de las horas pico | Pro, Max, Team, Enterprise por puesto | Permanente |
| Del 13 de mayo al 14 de septiembre de 2026 | Límites semanales de Claude Code +50 % | Pro, Max, Team, Enterprise por puesto | Terminado |
| Del 5 de junio al 5 de julio de 2026 | [Límite de 5 horas de Cowork duplicado](/deals/claude-cowork-june-2026-2x/) | Pro, Max, Team, Enterprise antiguo | Terminado |
| Julio de 2026 | Fable 5 pasó a créditos de uso en Pro y en los puestos estándar de Team | Pro, puestos estándar de Team | Vigente |
| 14 de septiembre de 2026 | Límites semanales de Claude Code +25 % permanente sobre la base previa a la promoción | Pro, Max, Team, Enterprise por puesto | Permanente |
| Del 23 de septiembre al 7 de octubre de 2026 | Crédito de nube de Claude Code: $100 (Pro) o $250 (Max) | Pro y Max individuales | En vivo |
| Del 1 al 15 de octubre de 2026 | [50 % menos uso de sesión después de crear o editar artefactos](/deals/claude-artifact-usage-promo-oct-2026/) | Pro, Max, Team | En vivo |

La promoción de artefactos se aplica a los siguientes 10 mensajes de chat después de crear o editar un artefacto y termina a las 23:59 PT del 15 de octubre. Excluye Claude Code, la API y los planes Free y Enterprise, según la [página de la promoción de Anthropic](https://support.claude.com/en/articles/17274727-artifact-usage-promotion).

## ¿El modelo que eliges cambia lo rápido que llegas al límite?

Sí. Anthropic incluye el modelo elegido entre los factores del uso, y sus modelos Fable agotan los límites más rápido que otros modelos de Claude.

- **Fable 5 y Fable 5.1 en Max:** incluidos, pero puedes gastar como máximo el 50 % de tu límite semanal en modelos Fable sin costo extra, según el [artículo de Anthropic sobre Fable en cada plan](https://support.claude.com/en/articles/15424964-claude-fable-models-on-your-plan). Los puestos premium de Team y Enterprise funcionan igual.
- **Fable en Pro y en los puestos estándar de Team:** no está incluido en los límites del plan desde julio de 2026. Aún puedes usar Fable con créditos de uso.
- **Opus:** incluido en Pro y Max, pero no en Free.
- **Sonnet y Haiku:** en su artículo sobre créditos de uso, Anthropic llama a Haiku su modelo más eficiente y sugiere Haiku o el Sonnet más reciente para la mayoría de las tareas.

Nuestra recomendación: usa Sonnet como modelo predeterminado, cambia a Opus o Fable solo para problemas que Sonnet no pueda resolver y baja el nivel de esfuerzo en las tareas rutinarias.

## ¿Qué hacer cuando llegas al límite de uso de Claude?

Cuando llegas al límite de uso de Claude, puedes esperar al reinicio, cambiar tu forma de trabajar, activar los créditos de uso o pasarte a un plan más grande.

1. **Revisa qué límite alcanzaste.** Configuración > Uso muestra si es el límite de sesión o el semanal y cuándo se reinicia.
2. **Espera a que pasen las horas pico.** Si es un día entre semana entre las 13:00 y las 19:00 UTC, la siguiente sesión te rendirá más después de las 19:00 UTC.
3. **Cambia de modelo.** En Max, llegar al tope de Fable no detiene a Claude; cambia a otro modelo.
4. **Activa los créditos de uso.** Lo explicamos abajo.
5. **Sube de plan si te pasa seguido.** Llegar al límite semanal casi todas las semanas es señal de que necesitas Max 5x o Max 20x.

### ¿Cómo funcionan los créditos de uso de Claude?

Los créditos de uso de Claude permiten que los suscriptores de Pro, Max 5x y Max 20x sigan trabajando después de alcanzar los límites de su plan, con cobro a tarifas estándar de la API. El [artículo de Anthropic sobre créditos de uso](https://support.claude.com/en/articles/12429409-manage-usage-credits-for-paid-claude-plans) explica la configuración:

- Ve a Configuración > Uso, haz clic en Activar (Enable), añade un método de pago y carga saldo por adelantado.
- Fija un tope de gasto mensual y, si quieres, la recarga automática cuando el saldo esté bajo.
- Los créditos cubren las conversaciones de Claude, Claude Code y Research.
- Anthropic también menciona la compra de paquetes de uso como opción.

Los créditos aparecen como conceptos separados en tu factura. Si estás cuidando el gasto, nuestra guía para [ahorrar en suscripciones de IA](/blog/save-money-on-ai-subscriptions/) explica la facturación anual y otras formas de pagar menos.

## ¿Cómo hacer que los límites de uso de Claude duren más?

Lo que más ayuda es elegir bien el momento, acortar las conversaciones y usar el modelo adecuado. Estos consejos salen de las recomendaciones de Anthropic y de los cambios de 2026 que vimos arriba:

- **Trabaja fuera de pico.** Los documentos largos, Research y las subidas grandes consumen menos de tu sesión fuera de la franja de 13:00 a 19:00 UTC entre semana.
- **Empieza chats nuevos.** La longitud de la conversación cuenta, así que abre un chat nuevo cuando cambie el tema.
- **Agrupa tus preguntas.** Planifica el pedido, escribe un solo mensaje concreto y combina las preguntas relacionadas.
- **Usa proyectos para los archivos de referencia.** Anthropic dice que el contenido en caché de los proyectos cuenta menos para tus límites.
- **Elige el modelo más ligero.** Usa Sonnet por defecto y baja el nivel de esfuerzo para el trabajo sencillo.
- **Usa las herramientas con intención.** Research y la búsqueda web suman uso, así que actívalas cuando la respuesta las necesite.
- **Aprovecha las promociones activas.** Hasta el 15 de octubre de 2026, trabajar con artefactos en Pro, Max o Team consume 50 % menos uso de sesión.

## Conclusión

Los límites de Claude son una sesión de 5 horas más un tope semanal, y el momento en que trabajas importa tanto como tu plan.

- **Usuarios de Free:** mantén los chats cortos y trabaja fuera de las horas pico; Pro es el siguiente paso si llegas al tope todos los días.
- **Usuarios de Pro:** usa Sonnet por defecto y suma créditos de uso para los días excepcionales en que te pases. Quienes usan Claude Code tienen la exención de las horas pico.
- **Usuarios intensivos de Pro que llegan al límite semanal:** Max 5x ($100/mes) da 5 veces el uso por sesión de Pro.
- **Usuarios de Max:** vigila el tope del 50 % para Fable y solicita el crédito de nube de $250 a más tardar el 7 de octubre de 2026.
- **Equipos:** Anthropic no ha anunciado una exención de las horas pico para Claude Code en Team, así que programa las ejecuciones grandes fuera de pico.

Seguimos en [Claude Watch](/) cada cambio en los límites de Claude en el momento en que ocurre.
