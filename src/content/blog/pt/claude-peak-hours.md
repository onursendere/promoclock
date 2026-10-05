---
title: "Horário de pico do Claude (2026): horários no seu fuso e o que muda"
metaTitle: "Horário de pico do Claude 2026: no seu fuso e o que muda"
metaDescription: "O horário de pico do Claude vai das 13:00 às 19:00 UTC em dias úteis, e os limites de 5 horas acabam mais rápido. Veja a janela em 9 cidades e como se planejar."
excerpt: "O horário de pico do Claude vai de segunda a sexta, das 13:00 às 19:00 UTC (09:00–15:00 em Nova York até 1º de novembro de 2026). Nessa janela, os limites por sessão de 5 horas dos planos Free, Pro, Max e Team acabam mais rápido; os semanais não mudam. O fim de semana é fora do pico, o Enterprise não é afetado e o Claude Code no Pro e no Max está isento desde 6 de maio de 2026."
imageAlt: "Close de um relógio de parede branco com ponteiro de segundos vermelho contra uma parede azul-clara"
keyTakeaways:
  - "O horário de pico do Claude vai de segunda a sexta, das 13:00 às 19:00 UTC; todas as outras horas, incluindo o sábado e o domingo inteiros, ficam fora do pico."
  - "No horário de pico do Claude, os limites por sessão de 5 horas dos planos Free, Pro, Max e Team acabam mais rápido, enquanto os limites semanais continuam exatamente iguais."
  - "O horário de pico do Claude entrou em vigor em 27 de março de 2026, último dia de uma promoção de duas semanas que dobrou os limites fora do pico a partir de 13 de março."
  - "O Claude Code no Pro e no Max está isento da redução do horário de pico desde 6 de maio de 2026; os planos Enterprise nunca foram afetados."
  - "Em Nova York, o horário de pico do Claude é 09:00–15:00 EDT até 1º de novembro de 2026; em Londres, 14:00–20:00 BST até 25 de outubro de 2026."
faq:
  - q: "O horário de pico do Claude vale no fim de semana?"
    a: "Não. O horário de pico do Claude vale só de segunda a sexta, das 13:00 às 19:00 UTC. Sábado e domingo ficam fora do pico o dia todo em UTC, então os limites por sessão são consumidos na velocidade normal durante todo o fim de semana. No Leste Asiático, a janela de sexta-feira avança pelo início do sábado no horário local: até as 04:00 em Tóquio e Seul e até as 03:00 em Pequim."
  - q: "O horário de pico do Claude afeta o limite semanal?"
    a: "Não. O horário de pico do Claude só muda a velocidade com que o limite contínuo de 5 horas por sessão é consumido nos planos Free, Pro, Max e Team. Os limites semanais dos planos pagos são os mesmos dentro e fora do pico, então levar o trabalho pesado para fora do pico estica cada sessão, não a sua cota semanal total."
  - q: "Por que o Claude atinge o limite mais rápido à tarde?"
    a: "Na Europa e no Oriente Médio, a tarde coincide com a janela de pico do Claude, 13:00–19:00 UTC nos dias úteis. Nessa janela, a Anthropic faz os limites por sessão de 5 horas dos planos Free, Pro, Max e Team acabarem mais rápido, então o mesmo trabalho consome mais da sua sessão. Em Londres, o pico é 14:00–20:00 BST até 25 de outubro de 2026."
  - q: "O Claude Code é afetado pelo horário de pico?"
    a: "Não no Pro nem no Max. Desde 6 de maio de 2026, a Anthropic isenta o Claude Code no Pro e no Max da redução do horário de pico, e a mesma atualização dobrou os limites de 5 horas do Claude Code nos planos pagos. O chat nesses planos continua afetado, e a Anthropic não anunciou a isenção para os planos Team."
  - q: "Quando o horário de pico do Claude vai acabar?"
    a: "A Anthropic não anunciou uma data de término. O horário de pico do Claude vale desde 27 de março de 2026 e, em outubro de 2026, não há um cronograma oficial para removê-lo. O relógio ao vivo do PromoClock e o endpoint gratuito /api/status vão refletir qualquer nova janela ou data de término que a Anthropic anunciar."
  - q: "Qual é o melhor horário para usar o Claude?"
    a: "Qualquer horário fora das 13:00–19:00 UTC nos dias úteis, ou qualquer horário no fim de semana. Isso significa antes das 09:00 ou depois das 15:00 em Nova York até 1º de novembro de 2026, antes das 14:00 ou depois das 20:00 em Londres até 25 de outubro, e o expediente inteiro na Índia, na China, no Japão e na Coreia."
howTo:
  name: "Como planejar o uso do Claude em torno do horário de pico"
  steps:
    - name: "Descubra sua janela de pico local"
      text: "Converta 13:00–19:00 UTC em dias úteis para o seu fuso horário com a tabela deste guia ou o relógio ao vivo do PromoClock, e anote as próximas mudanças de horário em 25 de outubro (UE) e 1º de novembro de 2026 (EUA)."
    - name: "Separe as tarefas pelo peso"
      text: "Documentos longos, uploads grandes, Research, conversas longas e tarefas de agente com vários passos consomem mais cota da sessão; perguntas rápidas consomem menos."
    - name: "Leve o trabalho pesado para fora do pico"
      text: "Agende as tarefas pesadas para antes ou depois da janela de pico nos dias úteis, ou para o fim de semana, quando os limites por sessão de 5 horas são consumidos na velocidade normal."
    - name: "Use o Claude Code no pico se tiver Pro ou Max"
      text: "O Claude Code no Pro e no Max está isento da redução do horário de pico desde 6 de maio de 2026, então sessões de programação são um bom uso da janela de pico."
    - name: "Acompanhe seus medidores e automatize a checagem"
      text: "Acompanhe seu uso por sessão e semanal no Claude em Configurações > Uso, e consulte GET https://promoclock.co/api/status pelo prompt do shell ou por um bot para ver quando a janela muda."
---
O horário de pico do Claude vai das 13:00 às 19:00 UTC em dias úteis. Nessa janela de 6 horas, os limites por sessão de 5 horas dos planos Free, Pro, Max e Team acabam mais rápido que o normal, enquanto os limites semanais continuam iguais; as noites e madrugadas dos dias úteis e o fim de semana inteiro ficam fora do pico. Este guia mostra as regras em vigor em outubro de 2026, a janela em 9 cidades e um plano simples para encaixar o trabalho pesado fora dela.

## Qual é o horário de pico do Claude?

O horário de pico do Claude é uma janela fixa nos dias úteis, das 13:00 às 19:00 UTC, em que a Anthropic faz a cota da sua sessão de 5 horas acabar mais rápido. A janela vale desde 27 de março de 2026.

- **Pico:** de segunda a sexta, 13:00–19:00 UTC.
- **Fora do pico:** todas as outras horas dos dias úteis, além do sábado e do domingo inteiros (UTC).
- **Data de término:** nenhuma anunciada. A Anthropic não disse quando, nem se, a janela vai acabar.

Acompanhamos a janela ao vivo no [Claude Watch](/), a página inicial do PromoClock. Ele mostra se o Claude está no horário de pico agora, a janela no seu horário local e uma contagem regressiva até a próxima mudança.

## O que muda exatamente no horário de pico do Claude?

Só muda a velocidade do limite por sessão de 5 horas: o mesmo trabalho consome uma fatia maior da cota da sua sessão no horário de pico. Limites semanais, preços e acesso aos modelos continuam iguais.

O Claude mede o uso em duas camadas. Todo plano tem um limite por sessão que se renova em uma janela contínua de 5 horas, e os planos pagos somam um limite semanal por cima, segundo a [página de preços da Anthropic](https://claude.com/pricing). O horário de pico afeta só a primeira camada.

Quando a mudança foi anunciada, Thariq Shihipar, da Anthropic, disse que os limites semanais totais continuariam os mesmos e que só a distribuição deles ao longo da semana mudaria, [segundo o The Register](https://www.theregister.com/2026/03/26/anthropic_tweaks_usage_limits/) em 26 de março de 2026. Ele estimou que cerca de 7% dos usuários atingiriam limites de sessão que antes não atingiriam, principalmente no Pro.

A Anthropic nunca publicou a taxa de consumo no horário de pico, nem quantos tokens cabem em uma sessão de 5 horas. Trate qualquer “multiplicador de pico” exato citado na internet como um palpite.

## Quando o horário de pico do Claude começou e o que mudou desde então?

O horário de pico do Claude entrou em vigor em 27 de março de 2026, último dia de uma promoção de duas semanas fora do pico. Desde então, a Anthropic acrescentou uma isenção permanente para o Claude Code e fez vários aumentos de limite separados.

- **13 a 27 de março de 2026:** [a promoção 2x fora do pico](/deals/claude-march-2026-offpeak-2x/) dobrou os limites por sessão fora do intervalo de 08:00–14:00 ET nos dias úteis e durante todo o fim de semana, para Free, Pro, Max e Team. Ela já terminou.
- **27 de março de 2026:** [o horário de pico entrou em vigor](/deals/claude-peak-hours-introduced/). Os limites por sessão agora acabam mais rápido nos dias úteis, das 13:00 às 19:00 UTC.
- **6 de maio de 2026:** a Anthropic [dobrou os limites de 5 horas do Claude Code e removeu a redução do horário de pico para o Claude Code no Pro e no Max](/deals/claude-code-5h-limits-doubled/), segundo o [anúncio oficial](https://www.anthropic.com/news/higher-limits-spacex).
- **1º a 15 de outubro de 2026:** [a promoção de uso de artefatos](/deals/claude-artifact-usage-promo-oct-2026/) faz as próximas 10 mensagens de chat depois de você criar ou editar um artefato contarem 50% menos para o limite de 5 horas no Pro, Max e Team. Em 4 de outubro de 2026 ela está ativa e vai até 23:59 PT de 15 de outubro.

Para todas as outras mudanças nos limites por sessão e semanais deste ano, veja nosso guia de [limites de uso do Claude](/blog/claude-usage-limits/).

## Quais planos do Claude são afetados pelo horário de pico?

Os planos Free, Pro, Max e Team são afetados pelo horário de pico do Claude; os planos Enterprise, não. O Claude Code no Pro e no Max está isento.

| Plano | Chat, desktop, celular e Cowork | Claude Code |
|---|---|---|
| Free | Afetado | Não incluído no Free |
| Pro | Afetado | Isento desde 6 de maio de 2026 |
| Max 5x e Max 20x | Afetado | Isento desde 6 de maio de 2026 |
| Team | Afetado | Nenhuma isenção anunciada |
| Enterprise | Não afetado | Não afetado |

A isenção do Claude Code é mais restrita do que parece. Na mesma conta Pro ou Max, um chat longo às 15:00 UTC ainda consome a sessão mais rápido, enquanto uma execução do Claude Code no mesmo momento não.

Fazer upgrade também não elimina o horário de pico. O Max 5x ($100/mês) e o Max 20x ($200/mês) dão 5 ou 20 vezes o uso por sessão do Pro, segundo o [artigo da Anthropic sobre o plano Max](https://support.claude.com/en/articles/11049741-what-is-the-max-plan), mas o chat no Max continua seguindo a janela de pico. Nosso [comparativo Claude Pro ou Max](/blog/claude-pro-vs-max/) mostra quando o plano maior vale a pena, e a [página do Claude](/tools/claude/) lista os preços atuais.

## Qual é o horário de pico do Claude no seu fuso horário?

O horário de pico do Claude é 13:00–19:00 UTC, o que equivale a 09:00–15:00 em Nova York e 14:00–20:00 em Londres até o fim do horário de verão no hemisfério norte.

| Cidade | Agora (horário de verão) | Depois da mudança de horário |
|---|---|---|
| Nova York | 09:00–15:00 EDT | 08:00–14:00 EST (a partir de 1º de nov.) |
| São Francisco | 06:00–12:00 PDT | 05:00–11:00 PST (a partir de 1º de nov.) |
| Londres | 14:00–20:00 BST | 13:00–19:00 GMT (a partir de 25 de out.) |
| Paris / Berlim | 15:00–21:00 CEST | 14:00–20:00 CET (a partir de 25 de out.) |
| Istambul | 16:00–22:00 | Sem mudança (UTC+3) |
| Nova Délhi | 18:30–00:30 IST | Sem mudança |
| Pequim | 21:00–03:00 CST | Sem mudança |
| Tóquio / Seul | 22:00–04:00 | Sem mudança |
| São Paulo | 10:00–16:00 | Sem mudança (UTC−3) |

Os relógios da UE atrasam uma hora em 25 de outubro de 2026, e os dos EUA em 1º de novembro de 2026. A janela em UTC não muda, então a janela local fica uma hora mais cedo nesses lugares.

Dois detalhes pegam muita gente de surpresa:

- **Janelas tarde da noite passam da meia-noite.** Em Nova Délhi, Pequim, Tóquio e Seul, a janela de sexta-feira termina no início do sábado, no horário local. O sábado das 00:00 às 04:00 em Tóquio ainda conta como pico.
- **O texto original tinha duas versões.** O anúncio deu a janela como 05:00–11:00 PT e 13:00–19:00 GMT, segundo o The Register. As duas só coincidem enquanto a Califórnia está no horário padrão; até 1º de novembro de 2026, 05:00 PDT equivale a 12:00 UTC. Nós usamos 13:00–19:00 UTC. Se você está na Costa Oeste dos EUA e quer uma margem, considere 05:00–12:00 PDT como pico até 1º de novembro, quando as duas versões voltam a coincidir.

## A janela de 13:00–19:00 UTC ainda é oficial?

A janela foi anunciada oficialmente em março de 2026, mas a Central de Ajuda atual da Anthropic não a descreve mais. Em outubro de 2026, os artigos da Central de Ajuda que conferimos sobre o plano Max, boas práticas de uso e créditos de uso descrevem sessões de 5 horas e limites semanais sem citar uma janela de pico.

Veja como o PromoClock lida com essa lacuna:

- Continuamos mostrando a última janela descrita oficialmente, dias úteis das 13:00 às 19:00 UTC, no relógio, na API e neste guia.
- Dizemos abertamente que ela não está mais documentada na Central de Ajuda, em vez de apresentá-la como o texto atual da política.
- Conferimos a Central de Ajuda, o blog e os anúncios da equipe da Anthropic sempre que os limites mudam, e vamos atualizar o relógio, a API e este guia se a Anthropic anunciar uma nova janela ou uma data de término.

Nossa [página Sobre](/about/) explica como verificamos fontes e datas.

## Como saber se o Claude está no horário de pico hoje?

Abra a [página inicial do PromoClock](/): o relógio ao vivo mostra se o Claude está no horário de pico ou fora do pico hoje, a sua janela local e uma contagem regressiva até a próxima mudança. Desenvolvedores podem consultar o mesmo status em JSON.

![Claude Watch do PromoClock mostrando o Claude fora do pico, uma contagem regressiva até a próxima mudança e a próxima janela de pico no horário local](../images/claude-watch-peak-hours.jpg)

O endpoint é `GET https://promoclock.co/api/status`. Ele é gratuito, tem CORS habilitado e aceita até 60 requisições por minuto por IP, e é a única API pública do PromoClock. A resposta inclui:

- `status`: `peak` ou `off_peak`, além de um booleano `isPeak`.
- `nextChange`: a próxima mudança como timestamp ISO 8601, e `minutesUntilChange`.
- `label`: uma linha de status curta e fácil de ler.

```bash
curl -s https://promoclock.co/api/status
```

A [seção de ferramentas para desenvolvedores](/#developer-tools) da página inicial tem trechos de curl e zsh prontos para copiar, incluindo um que coloca um ponto vermelho ou verde no prompt do seu shell. Um bot de Slack ou Discord pode consultar o endpoint uma vez por minuto e postar quando o `status` mudar.

Dentro do Claude, Configurações > Uso mostra quanto dos seus próprios limites por sessão e semanais você já usou, segundo as [boas práticas de uso](https://support.claude.com/en/articles/9797557-usage-limit-best-practices) da Anthropic.

## Como planejar o uso pesado do Claude fora do horário de pico?

Mova o seu trabalho mais pesado no Claude para fora das 13:00–19:00 UTC nos dias úteis e deixe a janela de pico para perguntas curtas. O fim de semana é fora do pico em todo lugar.

A Anthropic lista o que torna uma tarefa pesada: tamanho da mensagem, tamanho dos anexos, duração da conversa, ferramentas como Research e busca na web, escolha do modelo, nível de esforço, artefatos e tarefas de vários passos, como rodar código ou navegar. São essas as tarefas que valem a pena mudar de horário.

O que isso significa em cada região:

- **Costa Leste dos EUA:** o pico é 09:00–15:00 EDT. Comece o trabalho pesado antes das 09:00 ou depois das 15:00; a partir de 1º de novembro de 2026, antes das 08:00 ou depois das 14:00 EST.
- **Costa Oeste dos EUA:** o pico é 06:00–12:00 PDT, então tardes e noites ficam fora do pico.
- **Europa e Turquia:** o pico cobre a tarde e o começo da noite. As manhãs são o melhor horário para documentos longos e Research.
- **Índia:** o pico é 18:30–00:30 IST, então o expediente fica fora do pico.
- **China, Japão e Coreia:** o pico cai tarde da noite, então todo o expediente fica fora do pico.
- **Brasil:** o pico é 10:00–16:00 em São Paulo (horário de Brasília). Use o início da manhã e a noite para o trabalho pesado.

No Pro ou no Max, inverta a ordem durante o pico: rode tarefas do Claude Code, que estão isentas, e deixe os chats longos para depois. Se você atingir o limite da sessão no meio do pico, ele é liberado quando a sua janela de 5 horas se renova.

## Conclusão

O horário de pico do Claude consome cota da sessão, nunca cota semanal. Nossa recomendação:

- **Usuários casuais no Free ou no Pro:** dá para ignorar a janela na maior parte do tempo. Se você atingir o limite no pico, espere a renovação de 5 horas.
- **Quem usa muito o chat na Europa, na Turquia ou no Brasil:** deixe documentos longos e Research para a manhã, antes de o pico começar.
- **Usuários nos EUA:** faça os trabalhos grandes cedo pela manhã na Costa Leste e à tarde na Costa Oeste, e confira seus horários de novo depois de 1º de novembro.
- **Desenvolvedores no Pro ou no Max:** use a janela de pico para o Claude Code e faça os chats longos fora do pico.
- **Admins do Team:** a Anthropic não anunciou uma isenção do Claude Code para o Team, então programe o trabalho em lote fora do pico.

Confira o [Claude Watch](/) antes de uma sessão longa. É o jeito mais rápido de saber em que pé você está.
