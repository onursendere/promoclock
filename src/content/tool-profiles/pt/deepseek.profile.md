---
summary: "DeepSeek é um assistente de chat de IA grátis do laboratório chinês DeepSeek, construído sobre sua família de modelos open-weight V4. Ele combina um assistente sem assinatura com preços de API por token muito baixos, e o DeepSeek-V4.1-Flash chegou em setembro de 2026. Usuários com orçamento apertado, desenvolvedores e pesquisadores que auto-hospedam modelos são quem mais o usa."
metaTitle: "O DeepSeek é Grátis? App, Preço da API e V4.1 (2026)"
metaDescription: "O app de chat do DeepSeek é grátis. Veja o preço 2026 da API para deepseek-flash e V4-Pro, descontos fora do pico, privacidade e alternativas."
bestFor:
  - "Usuários com orçamento apertado"
  - "Devs cortando custo de API"
  - "Pesquisadores usando pesos abertos"
keyFeatures:
  - name: "Chat grátis web e mobile"
    description: "Converse, envie arquivos e pesquise na web em chat.deepseek.com ou nos apps iOS e Android sem assinatura."
  - name: "Contexto de 1M de tokens"
    description: "Desde o lançamento do V4 em abril de 2026, uma janela de contexto de 1M de tokens é o padrão em todos os serviços oficiais do DeepSeek."
  - name: "V4-Pro no Modo Expert"
    description: "O DeepSeek-V4-Pro, disponível geralmente desde 13 de agosto de 2026, é oferecido no app e na web pelo Modo Expert."
  - name: "Pesos abertos"
    description: "Pesos e relatórios técnicos do V4-Pro, V4-Flash e V4.1-Flash são publicados no Hugging Face para pesquisa e auto-hospedagem."
  - name: "Preço de API fora do pico"
    description: "Cobrança por token com cache de contexto, e tarifas fora do pico que custam metade do preço das janelas de pico durante a semana."
  - name: "Funciona com agentes de código"
    description: "A API aceita formatos de requisição da OpenAI e da Anthropic, então ferramentas como Claude Code e OpenCode conseguem rodar em modelos do DeepSeek."
useCases:
  - "Depurar um script ou percorrer uma prova matemática no chat web grátis sem pagar por um plano."
  - "Apontar o Claude Code ou o OpenCode para o endpoint compatível com Anthropic do DeepSeek para rodar agentes de código com tokens mais baratos."
  - "Agendar grandes jobs de resumo em lote fora do horário de pico UTC para reduzir pela metade a conta da API."
  - "Baixar pesos abertos do Hugging Face para testar um modelo do DeepSeek na sua própria infraestrutura."
pricingSummary: "O chat web e os apps iOS e Android são grátis. A API é pré-paga por uso: o deepseek-flash custa $0.30 por 1M de tokens de entrada (cache miss) e $1.20 por 1M de tokens de saída no pico, metade disso fora do pico."
savingTips:
  - "Rode workloads de API flexíveis fora do horário de pico (01:00–04:00 e 06:00–10:00 UTC, de segunda a sexta) para pagar 50% menos."
  - "Reaproveite prefixos longos de prompt: a entrada em cache do deepseek-flash custa $0.006 por 1M de tokens no pico em vez de $0.30 em um cache miss."
  - "Prefira o deepseek-flash ao deepseek-v4-pro para tarefas rotineiras; seu preço de saída no pico é $1.20 por 1M de tokens contra $3.96."
faq:
  - q: "O DeepSeek é grátis?"
    a: "Sim. O chat web do DeepSeek e seus apps iOS e Android não custam nada e não têm nível de assinatura. Só a API para desenvolvedores é paga, debitada por token de um saldo recarregado ou concedido."
  - q: "Onde o DeepSeek armazena meus dados?"
    a: "Na China. A política de privacidade do DeepSeek, atualizada pela última vez em 10 de fevereiro de 2026, diz que ele coleta, processa e armazena dados pessoais na República Popular da China. Considere isso antes de compartilhar informações pessoais ou empresariais sensíveis."
  - q: "Por que o DeepSeek se chama DSeek no Reino Unido?"
    a: "Um aviso em chat.deepseek.com diz que, por causa de uma reestruturação de marca, o DeepSeek agora é oficialmente DSeek no Reino Unido. O aviso acrescenta que todos os serviços continuam normalmente."
  - q: "O que é o DeepSeek-V4.1-Flash?"
    a: "É o modelo mais novo do DeepSeek, lançado em 10 de setembro de 2026: um modelo de mistura de especialistas com 552B de parâmetros e entendimento visual nativo. Ele substituiu o V4-Flash na API sob o nome deepseek-flash, com preços mais baixos."
  - q: "Ainda dá para usar o DeepSeek-V4-Pro pela API?"
    a: "Sim. O DeepSeek inicialmente planejava rotear pedidos do V4-Pro para o V4.1-Flash a partir de 14 de setembro de 2026, mas sua página de preços agora diz que o V4-Pro segue disponível com cobrança inalterada até novo aviso."
---
## O que é o DeepSeek?
O DeepSeek é ao mesmo tempo um laboratório de IA sediado em Hangzhou e o assistente grátis que ele roda no navegador e em apps móveis. Desenvolvedores chegam aos mesmos modelos por uma API de baixo custo ou baixam os pesos abertos para rodar por conta própria.

## Mudanças recentes
- **24 de abril de 2026:** o V4 Preview introduziu o V4-Pro (1,6T de parâmetros totais, 49B ativos) e o V4-Flash, e tornou o contexto de 1M padrão.
- **24 de julho de 2026:** os antigos nomes de modelo de API deepseek-chat e deepseek-reasoner foram aposentados.
- **Agosto de 2026:** o V4-Pro chegou à disponibilidade geral, e entraram em vigor as tarifas de pico e fora do pico da API.
- **10 de setembro de 2026:** o V4.1-Flash substituiu o V4-Flash com preço de API mais barato.
- **Reino Unido:** o serviço agora leva o nome DSeek.

## Limitações
O DeepSeek armazena dados pessoais na China, o que pode descartá-lo para trabalho regulado ou confidencial. Na API, a entrada de visão só funciona com o deepseek-flash, e os preços dobram nas janelas de pico durante a semana. Nomes de modelo e roteamento mudaram várias vezes em 2026, então usuários da API devem checar a página de preços antes de colocar algo em produção.
