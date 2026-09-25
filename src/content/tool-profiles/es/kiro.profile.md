---
summary: "Kiro es un entorno de código agéntico de Amazon Web Services construido alrededor del desarrollo dirigido por spec: los prompts se convierten en requisitos, un diseño y listas de tareas antes de que los agentes escriban código. Se distribuye como IDE de escritorio, CLI y versión de navegador, y los desarrolladores lo usan para mantener el código generado por IA atado a la intención documentada."
metaTitle: "Kiro: precios, tier gratis y oferta para estudiantes (2026)"
metaDescription: "Precios de Kiro en 2026: un tier gratis con 50 créditos, Pro desde $20/mes, planes Pro Max y Power, créditos add-on a $0,04 y créditos gratis para estudiantes."
bestFor:
  - "Desarrolladores que planean antes"
  - "Equipos de ingeniería centrados en AWS"
  - "Trabajo de refactorización multi-repo"
keyFeatures:
  - name: "Modo Spec"
    description: "Convierte un prompt en requisitos con criterios de aceptación, un diseño técnico y tareas secuenciadas que los agentes luego implementan."
  - name: "Testing basado en propiedades"
    description: "Revisa los requisitos en busca de contradicciones y huecos, y luego testea el comportamiento contra reglas que deben cumplirse para todas las entradas, no para unos pocos ejemplos."
  - name: "Hooks de agente y steering"
    description: "Los archivos de steering cargan tus convenciones en cada sesión, y los hooks disparan acciones de agente automáticamente cuando ocurren eventos."
  - name: "Kiro Web"
    description: "En planes de pago, los agentes corren en sandboxes en la nube aisladas, trabajan entre repos de GitHub y GitLab y entregan pull requests."
  - name: "Kiro CLI"
    description: "Corre el mismo agente en una terminal, delega trabajo a sesiones en la nube o úsalo headless en CI/CD para revisiones y arreglos."
  - name: "Elección de modelo con Auto"
    description: "Auto mezcla modelos para equilibrar calidad, velocidad y coste, o eliges Claude, GPT-5.6 o modelos open-weight con multiplicadores de créditos."
useCases:
  - "Escribir una spec para una nueva función de pagos, revisar el diseño generado y dejar que los agentes avancen por la lista de tareas."
  - "Coordinar un cambio de librería compartida y los servicios dependientes en una sesión de Kiro Web entre varios repositorios."
  - "Agendar una automatización recurrente que actualice dependencias y abra pull requests para revisión cada semana."
  - "Correr el Kiro CLI headless en un pipeline CI para revisar pull requests antes de que los mire un humano."
pricingSummary: "Kiro Free incluye 50 créditos al mes. Pro es $20/mes por 1.000 créditos, Pro+ $40 por 2.000, Pro Max $100 por 5.000 y Power $200 por 10.000, con créditos add-on a $0,04 cada uno en planes de pago."
savingTips:
  - "Los estudiantes en universidades elegibles obtienen 1.000 créditos al mes gratis durante un año."
  - "Mantente en Auto para prompts de rutina: la misma tarea cuesta cerca de 1,3x más créditos cuando eliges Sonnet 4.6 directamente."
  - "Los packs de créditos add-on empiezan en $5 por 125 créditos y siguen válidos 12 meses, a diferencia de los créditos mensuales del plan."
faq:
  - q: "¿Kiro es gratis?"
    a: "Sí. Kiro Free es un tier permanente con 50 créditos al mes y acceso limitado por tasa a Claude Sonnet 4.5 y modelos open-weight como Qwen3 Coder Next. No se ofrece para cuentas Enterprise ni en las regiones de AWS GovCloud (US)."
  - q: "¿Qué es un crédito de Kiro?"
    a: "Un crédito es una unidad de trabajo de agente medida con dos decimales. Los prompts simples pueden usar menos de 1 crédito, mientras que las tareas de spec suelen usar más. Los modelos más potentes tienen multiplicadores más altos, y los créditos mensuales no usados no se acumulan."
  - q: "¿Kiro tiene plan para estudiantes?"
    a: "Sí. Los estudiantes verificados en universidades participantes obtienen 1.000 créditos al mes gratis durante un año, el mismo cupo que Pro. El programa listaba 132 universidades elegibles en septiembre de 2026, así que revisa la lista antes de registrarte."
  - q: "¿Puedes usar una suscripción de Kiro fuera de las apps Kiro?"
    a: "En parte. Los créditos funcionan en Kiro IDE, Kiro CLI, Kiro Web, Kiro Crew, IDEs compatibles con ACP y automatización CI. Enrutar peticiones a través de harnesses de terceros como OpenClaw no está permitido."
  - q: "¿Kiro Web está incluido en el plan Pro?"
    a: "Sí. Kiro Web está disponible en Pro, Pro+, Pro Max y Power, y toma de los mismos créditos que el IDE y el CLI sin cargo separado por cómputo en la nube. Los usuarios del tier gratis no pueden usarlo."
---
## ¿Qué es Kiro?
Kiro es el entorno de desarrollo de AWS para trabajar con agentes de IA de forma estructurada. En vez de saltar directo de un prompt a código, el modo spec produce requisitos, un diseño y tareas que apruebas, y los agentes las implementan en paralelo.

El IDE está construido sobre Code OSS y corre en macOS, Windows y Linux, con builds ARM64 nativas desde IDE 1.1 en septiembre de 2026. Kiro CLI, Kiro Web y Kiro Crew, un workspace de agente persistente open-source, comparten los mismos créditos.

## Planes y créditos
Cada nivel se cobra por créditos mensuales en lugar de conteos de peticiones. Los planes de pago se renuevan el día 1 de cada mes natural, y los precios excluyen IVA e impuesto sobre las ventas. Los precios en las regiones AWS GovCloud (US) son cerca del 20 % más altos.

## Limitaciones
- Los 50 créditos del tier gratis cubren solo uso ligero, y los modelos premium como Claude Opus 5 requieren plan de pago.
- No todos los modelos premium están disponibles en cada país o región.
- Las versiones de Kiro IDE anteriores a 0.11.133 y las de CLI anteriores a 1.28.2 dejan de conectar el 9 de noviembre de 2026.
- Los planes autoservicio de pago se venden solo a direcciones de facturación en países listados.
