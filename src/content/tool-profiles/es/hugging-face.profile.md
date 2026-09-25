---
summary: "Hugging Face es el hub de modelos, datasets y apps demo Spaces de IA abierta, operado por la empresa del mismo nombre. Desarrolladores e investigadores lo usan para descargar modelos open-weight, alojar demos Gradio en hardware compartido ZeroGPU y llamar a modelos hospedados vía Inference Providers. NVIDIA anunció un acuerdo para adquirir Hugging Face el 3 de septiembre de 2026."
metaTitle: "Hugging Face: precios, plan PRO, tier gratis y funciones"
metaDescription: "Hugging Face es gratis para registrarse. Compara el plan PRO a $9, asientos Team y Enterprise, cupos ZeroGPU y créditos de inferencia, más el trato con NVIDIA."
bestFor:
  - "Ingenieros e investigadores de ML"
  - "Publicadores de modelos open-source"
  - "Desarrolladores mostrando apps de IA"
  - "Equipos alojando modelos privados"
keyFeatures:
  - name: "Hub de modelos y datasets"
    description: "Explora, descarga y versiona modelos open-weight y datasets en repositorios basados en Git con visibilidad pública o privada."
  - name: "Spaces"
    description: "Aloja apps demo Gradio, Docker o estáticas; el hardware CPU Basic es gratis y una Nvidia T4 small cuesta $0,40 por hora."
  - name: "ZeroGPU"
    description: "Los Spaces de Gradio toman prestadas GPUs NVIDIA RTX Pro 6000 Blackwell por llamada de función, dentro de un cupo diario según tu tipo de cuenta."
  - name: "Inference Providers"
    description: "Llama a modelos de proveedores partner con un solo token de Hugging Face, facturado a las tarifas del proveedor sin markup de Hugging Face."
  - name: "Inference Endpoints"
    description: "Despliega cualquier modelo del Hub sobre infraestructura dedicada con autoscaling, con instancias CPU desde $0,033 por hora."
  - name: "HuggingChat"
    description: "Chatea con modelos abiertos en el navegador, donde el router Omni elige un modelo adecuado para cada petición."
  - name: "CLI hf y librerías cliente"
    description: "Inicia sesión, descarga y sube repositorios desde la terminal con el comando hf y la librería huggingface_hub de Python."
useCases:
  - "Descargar un modelo open-weight y su tokenizer para fine-tunear con tus propios datos localmente."
  - "Publicar una demo Gradio de un modelo de research en ZeroGPU para que los reviewers la prueben en el navegador."
  - "Probar varios LLMs hospedados vía Inference Providers antes de comprometerte con un solo vendor de API."
  - "Dar a un equipo de empresa SSO, audit logs y regiones de almacenamiento para modelos privados en el plan Team."
pricingSummary: "El Hub es gratis. PRO es $9/mes con $2 en créditos de cómputo mensuales y 8x cupo ZeroGPU; Team es $20 y Enterprise $50 por usuario al mes. GPUs de Spaces, Inference Endpoints y almacenamiento extra se facturan por uso."
savingTips:
  - "Las cuentas gratis reciben $0,10 de créditos de Inference Providers al mes; PRO lo eleva a $2,00 usable en el cómputo de Hugging Face."
  - "Usar Spaces con ZeroGPU es gratis: 5 minutos de tiempo de GPU al día en cuenta gratis frente a 40 minutos en PRO."
  - "Las cuentas gratis con más de 30 días y email verificado pueden alojar hasta 2 Spaces ZeroGPU sin coste."
faq:
  - q: "¿Hugging Face es gratis?"
    a: "Sí. Una cuenta, descargas de modelos y datasets públicos, Spaces CPU Basic y Spaces ZeroGPU no cuestan nada. Pagas por planes PRO, Team o Enterprise, hardware de Spaces mejorado, Inference Endpoints e inferencia más allá de los créditos mensuales incluidos."
  - q: "¿Qué incluye Hugging Face PRO?"
    a: "PRO cuesta $9/mes y añade $2,00 de créditos de cómputo mensuales, 40 minutos diarios de tiempo ZeroGPU con la prioridad más alta en cola, alojamiento hasta 10 Spaces ZeroGPU, Spaces Dev Mode y el visor de datasets para datasets privados."
  - q: "¿NVIDIA está comprando Hugging Face?"
    a: "Sí. NVIDIA anunció el 3 de septiembre de 2026 que acordó adquirir Hugging Face por $12.93 billion. NVIDIA dice que la plataforma sigue abierta a modelos, nubes y hardware de todo el ecosistema, y que no se requerirá cómputo de NVIDIA."
  - q: "¿Cómo funciona el cupo diario de ZeroGPU?"
    a: "El cupo depende de la cuenta: 2 minutos sin autenticar, 5 minutos gratis, 40 minutos para miembros PRO y Team, 60 minutos para Enterprise. Los usuarios de pago pueden seguir después con créditos prepago a $1 por 10 minutos."
  - q: "¿Puedes traer tu propia clave de API del proveedor?"
    a: "Sí. Puedes añadir una clave de proveedor personalizada en la configuración de Hugging Face, y el proveedor te facturará directamente. Tus créditos mensuales de Hugging Face solo aplican a peticiones enrutadas y facturadas a través de Hugging Face."
---
## ¿Qué es Hugging Face?
Hugging Face opera el Hub, un hogar compartido de modelos, datasets y apps Spaces de IA abierta. La mayor parte de la actividad es pública y gratis; los planes de pago añaden almacenamiento, créditos de cómputo y controles de organización.

## Planes de un vistazo
- **Free:** repos públicos, Spaces CPU Basic, 5 minutos de ZeroGPU al día y $0,10 de créditos de inferencia mensuales.
- **PRO ($9/mes):** 10x almacenamiento privado, 20x créditos de inferencia, 8x cupo ZeroGPU y Dev Mode.
- **Team ($20/usuario/mes):** SSO, regiones de almacenamiento, audit logs y resource groups.
- **Enterprise ($50/usuario/mes):** aprovisionamiento SCIM, los límites más altos y soporte dedicado.

El almacenamiento más allá de los límites incluidos se cobra por TB, de $12 a $18 por TB al mes para repositorios privados.

## Noticias de propiedad
El 3 de septiembre de 2026, NVIDIA anunció un acuerdo para adquirir Hugging Face. NVIDIA dice que la plataforma seguirá soportando modelos open-source y open-weight de todo el ecosistema.

## Limitaciones
ZeroGPU solo funciona con el SDK de Gradio y no soporta torch.compile, y las cuentas gratis tienen menor prioridad en cola que las de pago. El cupo mensual gratis de $0,10 de inferencia se agota rápido. Las licencias de modelo difieren de repo en repo, así que revisa cada una antes de uso comercial.
