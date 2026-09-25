---
summary: "Windsurf es el editor de código con IA que Cognition, creador del agente Devin, adquirió en julio de 2025 y renombró como Devin Desktop el 2 de junio de 2026. El mismo IDE abre ahora en un Agent Command Center que gestiona agentes locales y en la nube, y los planes y precios se han mantenido sin cambios. Los desarrolladores lo usan como alternativa agente-primero a VS Code."
metaTitle: "Windsurf ahora es Devin Desktop: precios y plan gratis"
metaDescription: "Windsurf fue renombrado como Devin Desktop en junio de 2026. Qué cambió, los planes Free, Pro ($20/mes) y Max, uso por cuota, funciones y alternativas."
bestFor:
  - "Devs que se van de VS Code"
  - "Ingenieros con muchos agentes"
  - "Suscriptores actuales de Windsurf"
keyFeatures:
  - name: "Agent Command Center"
    description: "Un tablero Kanban con todos los agentes locales y en la nube en ejecución, con Spaces que agrupan sesiones, pull requests, archivos y contexto compartido."
  - name: "Agente Devin Local"
    description: "La reescritura en Rust que reemplazó a Cascade, con hasta un 30 % menos de tokens y soporte para subagentes y sandboxing a nivel de SO."
  - name: "Agentes de terceros vía ACP"
    description: "Ejecuta Codex, Claude Agent, OpenCode y agentes internos a través del Agent Client Protocol en la misma vista Kanban."
  - name: "IDE completo por debajo"
    description: "Editor, extensiones, atajos de teclado y LSPs mantienen compatibilidad hacia atrás con Windsurf y VS Code, y se pueden importar los ajustes de Cursor."
  - name: "Ediciones Tab e inline"
    description: "Completions de Tab ilimitadas y ediciones inline de Command en todos los planes, incluido Free."
  - name: "Fast Context"
    description: "Un subagente de recuperación basado en modelos SWE-grep que encuentra código relevante hasta 20 veces más rápido."
useCases:
  - "Ejecutar un agente local en un refactor mientras una sesión de Devin en la nube arregla un bug, y revisar ambos desde un solo tablero."
  - "Seguir usando Claude Agent o Codex dentro del mismo editor en vez de cambiar de herramienta."
  - "Migrar una configuración existente de Windsurf, incluidas reglas y memorias, a Devin Local con el asistente integrado."
pricingSummary: "Free incluye una cuota ligera con completions de Tab ilimitadas. Pro son $20/mes, Max son $200/mes con cuotas mucho mayores, y Teams empieza en $80/mes con asientos completos a $40 cada uno. Enterprise es a medida."
savingTips:
  - "Los modelos gratis no cuentan contra tu cuota, y los modelos SWE de menor coste como SWE-1.7 estiran más las asignaciones de pago."
  - "Los suscriptores que estaban en Windsurf Pro antes del cambio de cuota de marzo de 2026 conservan indefinidamente un precio grandfathered de $15/mes."
faq:
  - q: "¿Windsurf se ha descontinuado?"
    a: "No, fue renombrado. El 2 de junio de 2026 una actualización over-the-air convirtió Windsurf en Devin Desktop, manteniendo el editor, las extensiones, los ajustes y los planes. windsurf.com redirige ahora a devin.ai."
  - q: "¿Quién es dueño de Windsurf ahora?"
    a: "Cognition, la empresa detrás del agente de programación Devin. Anunció el 14 de julio de 2025 que adquiría la propiedad intelectual, el producto, la marca comercial, la marca y el equipo de Windsurf, y desde entonces ha integrado el editor en la familia de productos Devin."
  - q: "¿Cómo funcionan los límites de uso tras el cambio?"
    a: "Desde marzo de 2026, los planes incluyen una cuota diaria y semanal basada en tokens en vez de créditos por prompt. Los usuarios Free esperan al reinicio; los de Pro, Max y Teams pueden comprar uso extra a precios de lista de API."
  - q: "¿Qué pasó con Cascade?"
    a: "Devin Local reemplazó a Cascade como agente local principal. Cognition mantuvo Cascade disponible hasta julio de 2026 para una migración gradual, y un asistente de la paleta de comandos mueve workflows y memorias."
---
## ¿Qué pasó con Windsurf?
Windsurf empezó como el editor de Codeium y pasó a Cognition en 2025. En junio de 2026 Cognition unificó sus productos bajo una sola marca: Devin Desktop para el IDE, Devin Cloud para agentes autónomos en la nube, Devin CLI para el terminal y Devin Review para revisión de código. Las reglas existentes de Windsurf, incluidas `.windsurfrules`, siguen funcionando.

## Para quién es
Devin Desktop encaja con desarrolladores que quieren un editor construido en torno a supervisar varios agentes a la vez. No necesitas Devin Cloud para usarlo; los agentes solo locales funcionan bien.

## Limitaciones
- Las cuotas se miden en tokens, así que los modelos punteros y las sesiones largas agotan el presupuesto diario y semanal mucho más rápido.
- El plugin de Windsurf para JetBrains está en modo mantenimiento; Cognition recomienda ejecutar Devin en JetBrains vía ACP en su lugar.
- Las pruebas gratis de los planes de pago se ofrecen solo a un subconjunto de clientes elegibles.
- En Teams, solo los asientos completos incluyen Devin Desktop, y los nuevos planes Teams ya no incluyen SSO.
