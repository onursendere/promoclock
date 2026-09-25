---
summary: "Cline é um agente de codificação de IA open source da Cline Bot Inc. que roda no VS Code, em IDEs JetBrains, no terminal e em um app desktop. É grátis para desenvolvedores individuais, que conectam suas próprias chaves de API de modelo ou pagam a inferência pelo custo, e sempre pede aprovação antes de editar arquivos ou rodar comandos."
metaTitle: "Preço do Cline: o Agente de Código Open Source é Grátis?"
metaDescription: "O Cline é grátis e open source: você paga só pela inferência de IA ou usa suas próprias chaves. Veja o ClinePass a $9.99/mês, editores e limites suportados."
bestFor:
  - "Devs que querem escolher o modelo"
  - "Usuários de VS Code no orçamento"
  - "Times que precisam de código aberto"
keyFeatures:
  - name: "Modos Plan e Act"
    description: "Esboce uma abordagem no modo Plan primeiro, depois mude para o modo Act e aprove cada chamada de ferramenta enquanto o agente trabalha."
  - name: "Checkpoints"
    description: "Cada chamada de ferramenta cria um checkpoint com diffs visuais no editor, permitindo reverter qualquer mudança com /undo."
  - name: "Qualquer provedor de modelo"
    description: "Conecte Anthropic, OpenAI, Gemini, OpenRouter, AWS Bedrock, Vertex, Groq, DeepSeek ou um endpoint local com sua própria chave de API."
  - name: "MCP Marketplace"
    description: "Adicione servidores MCP do marketplace ou seus próprios para que o Cline acesse rastreadores de bugs, plataformas de deploy e data warehouses."
  - name: "Quadro Kanban na CLI"
    description: "Rode cline --kanban para gerenciar agentes em paralelo em git worktrees separados, incluindo sessões do Claude Code e do Codex."
  - name: "Skills e hooks"
    description: "Skills empacotam conhecimento reutilizável, como rodar sua suíte de testes, e hooks permitem que scripts controlem ou moldem qualquer chamada de ferramenta."
useCases:
  - "Refatorar um módulo no VS Code aprovando cada edição de arquivo e comando de terminal propostos pelo agente."
  - "Dividir um backlog em cards Kanban e deixar vários agentes trabalharem neles em git worktrees isolados."
  - "Apontar o Cline para um modelo local via servidor compatível com OpenAI para manter o código na sua própria máquina."
  - "Conectar um servidor MCP do Linear para que o agente leia tickets e os transforme em tarefas vinculadas."
pricingSummary: "O agente Cline é grátis para indivíduos, sem taxa de assento; você paga os provedores de modelo com suas próprias chaves ou compra inferência do Cline pelo custo. O ClinePass, uma assinatura opcional de modelos open-weight, custa $9.99/mês, e o preço do Enterprise é sob consulta."
savingTips:
  - "Traga suas próprias chaves de API para pagar as tarifas do provedor direto, sem assinatura ou markup do Cline."
  - "O ClinePass reúne modelos open-weight como GLM 5.3, Kimi K3 e DeepSeek V4 por $9.99/mês em vez de contas separadas em cada provedor."
  - "Modelos locais conectados por um endpoint compatível com OpenAI evitam totalmente as cobranças por token de API."
faq:
  - q: "O Cline é grátis?"
    a: "Sim. A extensão open source do Cline, a CLI e o app desktop são grátis para desenvolvedores individuais. Você só paga pelos modelos de IA que usa, seja com suas próprias chaves de API de provedor ou comprando inferência do Cline pelo custo."
  - q: "O que é o ClinePass?"
    a: "O ClinePass é uma assinatura de $9.99/mês para modelos open-weight da Z.ai, Moonshot AI, DeepSeek, MiniMax, MiMo e Qwen dentro da extensão de IDE e da CLI do Cline. O Cline diz que suas cotas dão de 2 a 5x o uso dos limites padrão de taxa de API."
  - q: "O Cline funciona em IDEs JetBrains e no Cursor?"
    a: "Sim. O plugin para JetBrains está em acesso antecipado para IntelliJ IDEA, PyCharm, WebStorm, GoLand e outras IDEs JetBrains. No Cursor e no Windsurf, você instala a mesma extensão do VS Code Marketplace."
  - q: "O Cline é open source?"
    a: "Sim. O código-fonte do Cline está no GitHub em github.com/cline/cline sob a licença Apache 2.0. Como o agente roda no lado do cliente, você pode trocar de provedor ou hospedar modelos você mesmo sem depender dos serviços do próprio Cline."
  - q: "O que o Cline Enterprise adiciona?"
    a: "O Enterprise adiciona SSO, provisionamento SCIM, cobrança centralizada, controle de acesso baseado em função, limites sobre quais provedores de inferência os times podem usar, logs de auditoria, deploys em VPC, um SLA e suporte dedicado. O preço exige contato com vendas."
---
## O que é o Cline?
O Cline é um agente de codificação autônomo que trabalha dentro do seu editor ou terminal, em vez de ser um serviço hospedado à parte. Ele lê os arquivos que você indica, edita código, roda comandos e controla um navegador, pausando para sua aprovação em cada etapa, a menos que você conceda mais autonomia.

## Onde ele roda
- **Extensão do VS Code**, também instalável no Cursor e no Windsurf.
- **Plugin JetBrains** em acesso antecipado.
- **CLI** com quadro Kanban, plugins, agendamentos e uso headless em CI.
- **Cline for Desktop**, um app standalone em beta para macOS e Windows.
- **SDK** para embutir o agente em outras ferramentas.

## Limitações
O custo depende inteiramente dos modelos e tokens que você usa, então sessões longas de agente com modelos de ponta podem sair caro, e o ClinePass cobre só modelos open-weight. O app desktop ainda está em beta, e o Cline avisa para esperar arestas por lapidar. Não há cota gratuita de modelo embutida para indivíduos.
