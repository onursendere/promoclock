---
title: "Créditos de API do Claude Max e Team (2026): de $100 a $500 por mês e como resgatar"
metaTitle: "Créditos de API do Claude Max e Team: como resgatar (2026)"
metaDescription: "O Claude Max 5x inclui $100 e o Max 20x $200 por mês em créditos de API; o Team, até $500. Veja como resgatar, o que cobrem e as novidades do Haiku 5.5 e do Claude Code."
excerpt: "Desde outubro de 2026, o Claude Max 5x inclui $100 e o Max 20x $200 por mês em créditos de API da Claude Platform, e os planos Team recebem até $500 em um saldo compartilhado. Você resgata os créditos vinculando uma organização do Console nas configurações de cobrança do claude.ai. Eles cobrem a API, o Managed Agents e o Agent SDK, não o Claude Code interativo, e expiram a cada ciclo de cobrança."
imageAlt: "Um MacBook Pro em um ambiente escuro com código colorido aberto em um editor"
keyTakeaways:
  - "Desde outubro de 2026, o Claude Max 5x inclui $100 e o Max 20x $200 por mês em créditos de API da Claude Platform, e os planos Team recebem até $500 em um saldo compartilhado entre os assentos."
  - "Os créditos de API mensais do Claude cobrem a API do Claude, o Message Batches, o Playground do Console, o Claude Managed Agents e o Agent SDK, mas não o Claude Code interativo nem o uso extra nos apps do Claude."
  - "Os créditos de API se renovam a cada ciclo de cobrança, expiram no fim dele sem acumular e são resgatados vinculando uma organização do Claude Console em Configurações > Cobrança no claude.ai."
  - "O Claude Haiku 5.5 foi lançado em 7 de outubro de 2026 a $0.10 por 1M de tokens de entrada em prompts de até 100.000 tokens, e a leitura de cache do Sonnet 5.5 caiu de $0.20 para $0.10 por 1M de tokens."
  - "Mantenedores de código aberto podem pedir 6 meses grátis do Claude Max 20x pelo Claude for Open Source, e projetos consolidados podem entrar no OSS Scanner gratuito da Anthropic."
faq:
  - q: "O Claude Pro inclui créditos de API?"
    a: "Não. A central de ajuda da Anthropic diz que os créditos de API mensais estão disponíveis só nos planos Max e Team, incluindo os planos Team com desconto. Os planos Free, Pro e Enterprise não são elegíveis. Quem usa o Pro e quer crédito de API todo mês precisaria do Max 5x a $100/mês, que inclui $100 de crédito, ou de créditos pré-pagos comprados no Claude Console."
  - q: "Posso usar os créditos de API do Claude Max no Claude Code?"
    a: "Não no Claude Code interativo no terminal, em uma IDE, no app desktop ou na web, que continua usando os limites do seu plano. Os créditos cobrem o claude -p e o Agent SDK quando você os roda com uma chave de API da organização vinculada do Console. Execuções pela GitHub Action do Claude Code, por extensões de IDE ou pelo app desktop contam como uso do Claude Code."
  - q: "Os créditos de API do Claude acumulam para o mês seguinte?"
    a: "Não. Os créditos de API mensais não usados expiram no fim de cada ciclo de cobrança, e os novos chegam pouco depois de o pagamento do plano ser processado. Nos planos anuais, os créditos chegam todo mês. A Anthropic gasta esses créditos antes de qualquer crédito que você comprou, e a página de cobrança do Console mostra o valor e a data de validade de cada crédito."
  - q: "Quanto de crédito de API um plano Team do Claude recebe?"
    a: "Os planos Team recebem $20 por mês por assento Standard e $100 por assento Premium, somados em um saldo único limitado a $500. Uma equipe com três assentos Standard e dois Premium recebe $260 por mês. O saldo é recalculado com base no número de assentos a cada depósito de créditos, e um Owner ou Primary Owner resgata para a equipe inteira."
  - q: "O que acontece quando meus créditos de API do Claude acabam?"
    a: "Se a sua organização do Console tem créditos comprados ou recarga automática, o uso da API continua e sai desses saldos. Se não tem outros créditos, as requisições à API param até os créditos mensais seguintes chegarem. A Anthropic diz que o uso nunca é cobrado no seu plano do Claude, e organizações faturadas pela equipe de vendas da Anthropic são cobradas normalmente além dos créditos."
  - q: "Quando os novos assinantes do Claude Max podem resgatar os créditos de API?"
    a: "Depois de sete dias em um plano elegível. A oferta então aparece em Configurações > Cobrança no claude.ai, em um navegador, inclusive para quem assinou pelo iOS ou pelo Android. Você não precisa de forma de pagamento na Claude Platform, e passar do Max 5x para o Max 20x dá crédito proporcional na hora."
howTo:
  name: "Como resgatar os créditos de API mensais no Claude Max ou Team"
  steps:
    - name: "Confira a elegibilidade"
      text: "Esteja no Max 5x, Max 20x ou Team há pelo menos sete dias, como assinante do Max ou como Owner ou Primary Owner do Team."
    - name: "Abra as configurações de cobrança"
      text: "No claude.ai, em um navegador, vá em Configurações > Cobrança no Max ou em Configurações da organização > Cobrança no Team."
    - name: "Vincule uma organização do Console"
      text: "Na seção Créditos de API, selecione Vincular organização e escolha a organização do Claude Console em que você cria seus projetos, ou crie uma. Você precisa do papel de Owner, Admin ou Billing nela."
    - name: "Aceite os termos"
      text: "Leia os Supplemental Credit Terms e confirme com Vincular organização. Depois, o vínculo só pode ser alterado entrando em contato com o suporte."
    - name: "Comece a criar"
      text: "Encontre o crédito em Promotional credits na página de cobrança do Console, crie uma chave de API e envie sua primeira requisição."
---
O Claude Max e o Team agora incluem créditos mensais para a API do Claude: $100 no Max 5x, $200 no Max 20x e até $500 compartilhados no Team. Você precisa resgatá-los uma vez, eles valem para seus próprios apps e agentes, não para o Claude Code, e expiram a cada ciclo de cobrança. Todos os detalhes e preços dos planos abaixo são de 17 de outubro de 2026, tirados da central de ajuda, das páginas de preços e do changelog do Claude Code da Anthropic.

## O que são os créditos de API mensais do Claude?

Os créditos de API mensais do Claude são créditos da Claude Platform incluídos nas assinaturas Max e Team, para criar e rodar seus próprios apps e agentes na API do Claude. Eles ficam separados dos seus limites de chat e do Claude Code.

A Anthropic anunciou os créditos em 7 de outubro de 2026, junto com o Claude Haiku 5.5, e os liberou para os assinantes ao longo dos dias seguintes. A [página de preços da Anthropic](https://claude.com/pricing) agora lista “de $100 a $200/mês em créditos de API” no Max e até $500 por mês em créditos de API compartilhados no Team. Os planos Free, Pro e Enterprise não recebem.

Os créditos são um adicional, não uma troca. Segundo a central de ajuda, seus limites de uso no Claude, no Claude Code e no Cowork continuam exatamente como eram. Eles também não são o crédito do Agent SDK que a Anthropic anunciou em junho: segundo o mesmo artigo, essa oferta não está disponível.

## Quanto de crédito de API cada plano do Claude dá?

O Max 5x dá $100 por mês, o Max 20x dá $200, e os planos Team dão $20 por assento Standard e $100 por assento Premium, somados em um saldo único limitado a $500.

| Plano | Preço do plano | Crédito de API mensal |
|---|---|---|
| Free | $0 | Nenhum |
| Pro | $20/mês ou $200/ano | Nenhum |
| Max 5x | $100/mês | $100 |
| Max 20x | $200/mês | $200 |
| Assento Team Standard | $25/assento/mês, ou $20 na cobrança anual | $20 por assento, somados, até $500 por equipe |
| Assento Team Premium | $125/assento/mês, ou $100 na cobrança anual | $100 por assento, somados, até $500 por equipe |
| Enterprise | $20/assento/mês na cobrança anual, mais o uso nas taxas da API | Nenhum |

Como funciona o saldo compartilhado do Team, segundo a [central de ajuda da Anthropic](https://support.claude.com/en/articles/17154008-monthly-api-credits-for-max-and-team-plans):

- **Um saldo por equipe.** Três assentos Standard e dois Premium dão $260 por mês. Adicionar um terceiro assento Premium eleva o próximo ciclo para $360.
- **O teto é $500.** Equipes maiores continuam recebendo $500, o máximo que qualquer plano Team recebe.
- **Planos Team com desconto também valem.** Os planos Team Nonprofit e Team Scientists recebem os mesmos $20 e $100 por assento.

Se você passa do Max 5x para o Max 20x, recebe um crédito proporcional na hora e $200 a cada ciclo depois disso. Nosso [comparativo Claude Pro ou Max](/blog/claude-pro-vs-max/) mostra o que mais muda entre os níveis.

## Como resgatar os créditos de API do Claude?

Você resgata os créditos de API do Claude uma única vez, vinculando uma organização do Claude Console ao seu plano nas configurações de cobrança do claude.ai. Depois disso, os créditos chegam a essa organização a cada ciclo de cobrança.

1. Espere até completar sete dias no Max ou no Team. Quem acabou de assinar não pode resgatar antes.
2. No claude.ai, em um navegador, abra **Configurações > Cobrança** (Max) ou **Configurações da organização > Cobrança** (Team).
3. Na seção **Créditos de API**, selecione **Vincular organização** e depois escolha ou crie a organização do Console que deve receber o crédito.
4. Leia os Supplemental Credit Terms (termos de crédito suplementar) e confirme.
5. Abra a página de cobrança do Console, encontre o crédito em Promotional credits e crie uma chave de API.

Algumas regras para saber antes de clicar:

- **Papéis.** No Max, você precisa ser o assinante; no Team, um Owner ou Primary Owner. Na organização do Console, você precisa do papel de Owner, Admin ou Billing.
- **Um vínculo, fixo.** Cada plano se vincula a uma organização do Console, e cada organização recebe créditos de um plano só. Você não pode mudar o vínculo sozinho, então escolha a organização em que vai criar seus projetos.
- **Sem cartão.** Você não precisa adicionar uma forma de pagamento na Claude Platform para resgatar ou usar o crédito.
- **Assinantes pelo celular.** Planos comprados no iOS ou no Android também valem, mas o resgate é feito no claude.ai, em um navegador.
- **Mesmo e-mail ajuda.** A Anthropic sugere entrar no Console com o mesmo e-mail que você usa no claude.ai.

## O que os créditos de API cobrem e o que não cobrem?

Os créditos de API mensais do Claude cobrem a API do Claude, o Claude Managed Agents, o Agent SDK e o Playground do Console. Eles não cobrem o Claude Code interativo, o uso extra nos apps do Claude nem o Claude em outras nuvens.

Cobertos, com qualquer modelo do Claude disponível:

- A API do Claude, tanto a Messages API quanto a Message Batches API
- O Playground no Claude Console
- O [Claude Managed Agents](https://platform.claude.com/docs/en/managed-agents/overview), a estrutura de agentes hospedada da Anthropic, agora em beta
- O Claude Agent SDK e o `claude -p`, quando você o roda com uma chave de API da organização vinculada

Não cobertos:

- O Claude Code interativo no terminal, em uma IDE, no app desktop ou na web
- O uso extra (créditos de uso) no Claude, no Claude Code ou no Cowork
- O Claude no Amazon Bedrock, no Google Cloud Vertex AI, no Microsoft Foundry ou na Claude Platform on AWS

Como o saldo se comporta: os créditos se renovam a cada ciclo de cobrança (e todo mês nos planos anuais), expiram no fim do ciclo sem acumular e são gastos antes de qualquer crédito que você comprou. Todo mundo com uma chave de API na organização vinculada usa o mesmo saldo, então quem é Owner no Team pode definir limites de gasto por espaço de trabalho no Console. Quando os créditos acabam e a organização não tem créditos comprados, as requisições à API param até o próximo depósito; nada é cobrado no seu plano do Claude.

## O que dá para fazer com $100 de crédito de API do Claude?

Nos preços de tabela da Anthropic, $100 compram cerca de 1 bilhão de tokens de entrada do Haiku 5.5 em prompts curtos, 50 milhões de tokens de entrada do Sonnet 5.5 ou aproximadamente 170 sessões de uma hora do Managed Agents no Opus 5.5.

| Modelo | Entrada por 1M de tokens | Saída por 1M de tokens | Leituras de cache por 1M de tokens |
|---|---|---|---|
| Haiku 5.5, prompts de até 100.000 tokens | $0.10 | $0.50 | $0.01 |
| Haiku 5.5, prompts acima de 100.000 tokens | $0.50 | $2.50 | $0.05 |
| Sonnet 5.5 | $2 | $10 | $0.10 |
| Opus 5.5 | $4 | $20 | $0.20 |
| Opus 5.5 no modo rápido | $8 | $40 | Os multiplicadores de cache valem por cima |
| Fable 5.1 | $10 | $50 | $0.25 |

Nossa conta, a partir da [página de preços da API da Anthropic](https://platform.claude.com/docs/en/about-claude/pricing):

- **Haiku 5.5:** $100 cobrem 1 bilhão de tokens de entrada ou 200 milhões de tokens de saída em prompts de até 100.000 tokens.
- **Sonnet 5.5:** $100 cobrem 50 milhões de tokens de entrada ou 10 milhões de tokens de saída.
- **Managed Agents:** as sessões cobram tokens nas taxas do modelo, mais $0.08 por hora de sessão em execução. O exemplo da própria Anthropic, uma sessão de uma hora do Opus 5.5 com 50.000 tokens de entrada e 15.000 de saída, custa $0.58, então $100 pagam cerca de 172 delas.

As contas reais dependem do tamanho do prompt, do cache, do nível de esforço e das ferramentas. A busca na web dentro de uma sessão custa $10 por 1.000 buscas, e o modo rápido não funciona com a Batch API.

## O que mudou nos preços da API do Claude em outubro de 2026?

Três mudanças de preço chegaram em outubro de 2026: o Claude Haiku 5.5 foi lançado em 7 de outubro, a leitura de cache do Sonnet 5.5 caiu pela metade no mesmo dia, e o modo rápido do Opus 5.5 entrou em disponibilidade geral.

- **Claude Haiku 5.5.** A Anthropic o chama de o modelo pequeno mais barato, mais rápido e mais capaz que ela já lançou. Ele custa 90% menos que o Haiku 4.5 em prompts de até 100.000 tokens e 50% menos acima disso, o que, segundo a Anthropic, dá cerca de 75% mais barato em média. Tem janela de contexto de 1M de tokens, até 128K tokens de saída e, pela primeira vez em um modelo Haiku, um ajuste de nível de esforço. A Anthropic o indica para resumos, classificação, compactação e trabalho de subagentes, segundo o [anúncio do Haiku 5.5](https://www.anthropic.com/claude-haiku-5-5).
- **Leituras de cache do Sonnet 5.5.** Elas caíram de $0.20 para $0.10 por 1M de tokens em 7 de outubro. Como as leituras de cache respondem por boa parte do tráfego de agentes, a Anthropic estima que o Sonnet 5.5 agora sai cerca de 20% mais barato na maior parte do trabalho agêntico.
- **Modo rápido do Opus 5.5.** Definir `"speed": "fast"` em uma requisição dá até 2,5x mais tokens de saída por segundo pelo dobro do preço padrão, $8 de entrada e $40 de saída por 1M de tokens. O Opus 5.5 não precisa mais de um header beta nem de um pedido de acesso, segundo a [documentação do modo rápido](https://platform.claude.com/docs/en/build-with-claude/fast-mode). Ele roda na API própria da Anthropic e no Microsoft Foundry.

No Claude Code, você pode trocar para o Haiku 5.5 com `/model haiku`. Isso muda a velocidade com que você gasta os limites do seu plano, não os seus créditos de API.

## Quais atualizações do Claude Code fazem seus limites de uso durarem mais?

Quatro mudanças do Claude Code em outubro de 2026 economizam uso: a compactação por inatividade, esforço e modelo por subagente, novos avisos do `/usage` e um orçamento de buscas na web que se renova. Todas funcionam dentro dos limites do seu plano atual.

- **Compactação por inatividade (versão 2.1.299, 14 de outubro).** Uma conversa no terminal com mais de 200K tokens que fica parada por cerca de 54 minutos é compactada pouco antes de o cache de prompt de uma hora expirar. Quando você volta, o Claude reprocessa o resumo em vez da conversa inteira. Para desativar, defina `"idleCompaction": false` no settings.json ou, a partir da versão 2.1.302, use a linha Idle compaction em `/config`.
- **Esforço e modelo por subagente (2.1.292, 6 de outubro).** Dá para pedir no prompt subagentes de esforço baixo para buscar em uma base de código e um subagente de esforço alto para avaliar os resultados, ou o Haiku para consultas rápidas. Antes, isso exigia uma definição de subagente personalizada.
- **Avisos de uso (2.1.299).** O `/usage` agora sinaliza esforço máximo, workflows, contexto sempre ativo e resultados grandes de ferramentas, as causas mais comuns de uma sessão que se esgota rápido.
- **Orçamento de buscas na web (2.1.290, 5 de outubro).** As sessões interativas agora têm 100 buscas por hora que se renovam, em vez de parar depois de 200.

Os engenheiros da Anthropic acrescentam uma dica de prompt: os subagentes priorizam a minúcia por padrão, então uma frase no prompt dizendo que o tempo importa faz com que eles trabalhem mais rápido, com o que a Anthropic chama de equilíbrio razoável entre velocidade e qualidade. Para entender como funcionam as sessões de 5 horas e os tetos semanais, veja nosso guia sobre os [limites de uso do Claude](/blog/claude-usage-limits/) e confira o [Claude Watch](/) antes de longas sessões de chat em dias úteis.

## O que há de novo no app desktop do Claude Code e nas sessões na nuvem?

O app desktop do Claude Code ganhou uma nova tela de sessão, ambientes salvos e sessões aninhadas em outubro de 2026, e as sessões na nuvem agora retomam seu trabalho local exatamente como você deixou.

App desktop, segundo a newsletter do Claude Code da Anthropic e a [documentação do desktop](https://code.claude.com/docs/en/desktop):

- **Nova tela de sessão.** As pastas recentes ficam a um clique, e você pode salvar uma configuração como ambiente, como algumas pastas, um host SSH ou a nuvem.
- **Sessões aninhadas.** Peça ao Claude para rodar tarefas em paralelo e cada uma ganha a própria sessão, que avisa a sua sessão principal quando termina. Trabalhos de acompanhamento sugeridos podem começar em uma sessão própria com um clique.
- **Perguntas paralelas em uma aba.** O `/btw` agora abre uma pergunta paralela na própria aba.
- **Status num relance.** A barra lateral mostra quais sessões ainda estão trabalhando e quais precisam de você, e um painel lateral mostra onde a sessão roda, o contexto e as alterações.

Sessões na nuvem, segundo a [documentação de nuvem da Anthropic](https://code.claude.com/docs/en/claude-code-on-the-web):

- **Continue o trabalho iniciado localmente.** Mover uma sessão local para a nuvem agora leva suas alterações não commitadas e seus commits não enviados, então você não precisa fazer commit nem push antes. No macOS, no Linux e no WSL, alterações não commitadas em arquivos que parecem credenciais, como arquivos .env e chaves privadas, ficam na sua máquina.
- **Segredos de rede no Team.** Os planos Team agora podem adicionar uma chave de API a um ambiente na nuvem, como o Pro e o Max já podiam, e o Claude chama os hosts listados sem ver a chave.

Se você resgatou o [crédito de nuvem do Claude Code](/deals/claude-code-cloud-credit-2026/) antes de 7 de outubro, gaste-o em sessões na nuvem antes de ele expirar em 4 de novembro de 2026. Nosso [comparativo de ferramentas de IA para programar](/blog/best-ai-coding-tools/) mostra como o preço do Claude Code se compara ao do Cursor, do Codex e do Copilot.

## Existem ofertas grátis do Claude para mantenedores de código aberto?

Sim. O Claude for Open Source dá 6 meses grátis de Claude Max 20x a mantenedores aprovados e, desde 8 de outubro de 2026, o OSS Scanner da Anthropic faz varreduras de segurança gratuitas em projetos de código aberto consolidados.

O [Claude for Open Source](/deals/claude-for-open-source-max-2026/) tem limite de 10.000 beneficiários aprovados, e você se inscreve com sua conta do GitHub. Segundo a [página do programa da Anthropic](https://claude.com/contact-sales/claude-for-oss) e os termos, quem se inscreve precisa atender a um destes critérios:

- Projetos com 500+ repositórios dependentes, 100+ pacotes dependentes ou 200.000+ downloads mensais
- Uma função de committer ou mantenedor listada em uma fundação ou projeto de linguagem reconhecido
- 100+ pull requests aceitos em repositórios que não são seus nos últimos 12 meses
- Um repositório com 20+ colaboradores externos únicos, ou uma pontuação de criticidade do OpenSSF de 0,4 ou mais

A conta do GitHub precisa ter pelo menos dois anos, com atividade pública em código aberto nos últimos 90 dias. Depois dos 6 meses, quem tinha um plano pago volta a ele pelo valor antigo, a menos que cancele; todos os outros voltam para o plano Free.

O [OSS Scanner](https://red.anthropic.com/oss-scanner/) é opcional: os mantenedores principais se inscrevem abrindo um pull request com a configuração do projeto e um Dockerfile offline no repositório oss-scanner da Anthropic no GitHub. Os projetos passam a receber varreduras periódicas feitas pelos modelos mais fortes da Anthropic, sem custo, com relatórios que não foram revisados por uma pessoa. A aceitação segue critérios parecidos com os do OSS-Fuzz, do Google, então projetos recém-criados e a maioria dos forks não entram. A OpenAI tem um programa parecido, o [Codex for Open Source](/deals/codex-for-open-source-chatgpt-pro-2026/), com seis meses de ChatGPT Pro.

## Conclusão

Resgate os créditos se você está no Max ou no Team e pode vir a criar qualquer coisa na API. Resgatar não custa nada, mas depois só o suporte consegue alterar o vínculo com a organização.

- **Assinantes do Max que criam na API:** vincule a organização do Console que você realmente usa, já que você mesmo não consegue trocá-la depois. $100 ou $200 por mês cobrem bastante trabalho com o Haiku 5.5 e o Sonnet 5.5.
- **Assinantes do Max que só usam o Claude Code:** os créditos não estendem seus limites. A compactação por inatividade, os subagentes com Haiku 5.5 e os novos avisos do `/usage` estendem.
- **Quem usa o Pro e pensa no Max 5x:** o Max 5x custa $80 por mês a mais que o Pro e inclui $100 de crédito de API, então compensa mais rápido se você já gasta isso com a API.
- **Owners do Team:** um Owner resgata para a equipe inteira; defina limites de gasto por espaço de trabalho para que um projeto não esgote o saldo.
- **Mantenedores de código aberto:** inscreva-se no Claude for Open Source e, para projetos críticos, no OSS Scanner.

Nossa [página da oferta de créditos de API](/deals/claude-max-team-api-credits-2026/) acompanha qualquer mudança nos termos, e todas as outras ofertas do Claude estão na nossa [página do Claude](/tools/claude/) e no [calendário de promoções](/calendar/).
