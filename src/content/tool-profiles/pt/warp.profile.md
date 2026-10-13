---
summary: "Warp é um terminal moderno com um agente de codificação integrado, feito pela empresa nova-iorquina Warp, cujo cliente se tornou open source sob a AGPL em abril de 2026. Desenvolvedores o usam para rodar comandos e passar trabalho de codificação em várias etapas ao Warp Agent, enquanto times acrescentam agentes na nuvem e Warp Factories para pipelines automatizados."
metaTitle: "Preço do Warp: plano grátis e recursos do agente de IA"
metaDescription: "Preço do Warp em 2026: o terminal é grátis, o Build custa $20/mês com $20 de uso de agente, e o Max $200/mês com $200. Veja recursos, opções BYOK e limites."
bestFor:
  - "Desenvolvedores que vivem no terminal"
  - "Engenheiros de DevOps e plataforma"
  - "Times automatizando revisão de código"
keyFeatures:
  - name: "Terminal com agente"
    description: "Um terminal moderno e rápido onde você pode trocar de digitar comandos para pedir ao Warp Agent que planeje e edite código."
  - name: "Warp Agent CLI"
    description: "Rode o agente de codificação da Warp dentro de qualquer terminal, não só no app Warp, com acesso incluído em todos os planos."
  - name: "Escolha de modelo"
    description: "Escolha modelos como Claude Opus 5, GPT-5.6, Gemini 3.1 Pro ou Kimi K3 por tarefa, ou rode tarefas em paralelo em modelos diferentes."
  - name: "Agentes na nuvem e integrações"
    description: "Mencione @Warp no Slack, Linear ou GitHub para investigar bugs ou abrir pull requests, com links de sessão ao vivo para compartilhar."
  - name: "Warp Drive"
    description: "Salve e compartilhe workflows, notebooks e outros objetos com colegas; planos pagos removem os limites de objetos."
  - name: "Warp Factories"
    description: "Um painel de controle em acesso antecipado que roda frotas de agentes de codificação a partir de GitHub, Slack, webhooks ou agendamentos, configurado como código."
useCases:
  - "Pedir ao agente para diagnosticar um build com falha a partir da saída do terminal e aplicar a correção sem sair do shell."
  - "Deixar um agente na nuvem fazer a primeira revisão em cada pull request antes de um colega olhar."
  - "Rotear alertas do Slack para um agente que reproduz o problema e resume os próximos passos."
  - "Usar o terminal de graça com sua própria chave de API da Anthropic ou OpenAI em vez de uma assinatura."
pricingSummary: "Free cobre o terminal e o Agent CLI, mas sem uso de IA incluído. Build custa $20/mês ($18 na cobrança anual) com $20 de uso de agente a preços de API, Max custa $200/mês ($180 no anual) com $200 de uso, e Business custa $50 por usuário/mês ($45 no anual) com $20 de uso por assento, para até 25 assentos."
savingTips:
  - "A cobrança anual dá 10% de desconto, o que leva o Build a $18/mês e o Max a $180/mês."
  - "No plano Free você pode usar o Warp Agent com sua própria chave de API ou um endpoint de inferência personalizado em vez de pagar pelo uso incluído."
  - "Assinantes do SuperGrok e do X Premium podem conectar essa assinatura como fonte de inferência do Warp Agent."
faq:
  - q: "O Warp é grátis?"
    a: "Sim. O plano Free inclui o terminal completo, acesso ao Warp Agent CLI e agentes na nuvem limitados, mas sem uso de IA incluído. Para usar o agente, você traz sua própria chave de API ou endpoint de inferência, paga conforme o uso ou faz upgrade."
  - q: "O Warp é open source?"
    a: "Sim. Desde 28 de abril de 2026, o código-fonte do cliente Warp está público em github.com/warpdotdev/warp sob a licença AGPL-3.0. A OpenAI é a patrocinadora fundadora do repositório open source, e os serviços de IA pagos da Warp continuam comerciais."
  - q: "Como funciona o uso de agente incluído no Warp?"
    a: "Os planos pagos incluem um valor em dólares de uso de agente por mês, cobrado a preços de API: $20 no Build, $200 no Max (10 vezes o Build) e $20 por assento no Business. A Warp trocou os créditos por valores em dólares, e sua documentação diz que pacotes de créditos existentes podem ser convertidos em uso em dólares."
  - q: "Quais sistemas operacionais o Warp suporta?"
    a: "O Warp roda em macOS 10.14 ou superior, em Windows 10 e 11 nas versões x64 e ARM64, e em Linux por pacotes .deb, .rpm, Arch e AppImage. O Agent CLI também funciona dentro de outros terminais."
  - q: "O Warp treina modelos com seu código?"
    a: "A Warp diz ter acordos de Zero Data Retention com todos os provedores de LLM contratados, então dados de clientes não são retidos nem usados em treinamento. É compatível com SOC 2, e a telemetria pode ser configurada individualmente ou aplicada para times."
---
## O que é o Warp?
O Warp começou como um terminal mais rápido e hoje se posiciona como um ambiente de desenvolvimento com agentes. O mesmo app cuida do trabalho comum no shell e de sessões de agente que escrevem, rodam e corrigem código.

Em abril de 2026 a Warp abriu o código do seu cliente, e em agosto de 2026 lançou o Warp Factories para empresas que rodam muitos agentes de codificação ao longo do ciclo de vida do software. O terminal continua sendo mantido como produto próprio.

## Os planos na prática
O Free serve para quem só quer o terminal ou já paga acesso a modelos em outro lugar. Build e Max incluem uso de agente, objetos ilimitados no Warp Drive e armazenamento de conversas na nuvem. Business acrescenta SSO via SAML, métricas de uso do time e controles administrativos de dados.

## Limitações
- Nenhum uso de IA vem incluído no plano Free.
- O uso incluído é consumido a preços de API, então uso pesado de agente pode superar rápido a cota de $20 do Build.
- O Business limita times self-serve a 25 assentos; grupos maiores precisam do Enterprise.
- O Warp Factories está em acesso antecipado e ainda não é disponível para todos.
