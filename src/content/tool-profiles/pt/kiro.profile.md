---
summary: "Kiro é um ambiente de programação agentivo da Amazon Web Services construído em torno do desenvolvimento orientado por especificações: os prompts viram requisitos, um design e listas de tarefas antes que os agentes escrevam código. Ele é oferecido como IDE de desktop, CLI e versão no navegador, e desenvolvedores o usam para manter o código gerado por IA ligado a uma intenção documentada."
metaTitle: "Preços do Kiro, plano grátis e oferta estudante (2026)"
metaDescription: "Preços do Kiro em 2026: plano gratuito com 50 créditos, Pro a partir de $20/mês, planos Pro Max e Power, créditos avulsos e créditos grátis para estudantes."
bestFor:
  - "Devs que planejam antes de programar"
  - "Times de engenharia focados em AWS"
  - "Refatoração em múltiplos repositórios"
keyFeatures:
  - name: "Modo Spec"
    description: "Transforma um prompt em requisitos com critérios de aceitação, um design técnico e tarefas sequenciadas que os agentes depois implementam."
  - name: "Testes baseados em propriedades"
    description: "Verifica requisitos em busca de contradições e lacunas, depois testa o comportamento contra regras que devem valer para todas as entradas, não só alguns exemplos."
  - name: "Hooks e steering de agente"
    description: "Arquivos de steering carregam suas convenções em cada sessão, e hooks acionam ações de agente automaticamente quando eventos ocorrem."
  - name: "Kiro Web"
    description: "Nos planos pagos, agentes rodam em sandboxes isolados na nuvem, trabalham em repositórios do GitHub e GitLab e entregam pull requests."
  - name: "Kiro CLI"
    description: "Rode o mesmo agente em um terminal, delegue trabalho a sessões na nuvem ou use-o sem interface em CI/CD para revisões e correções."
  - name: "Escolha de modelo com Auto"
    description: "O Auto combina modelos para equilibrar qualidade, velocidade e custo, ou você escolhe Claude, GPT-5.6 ou modelos de pesos abertos com multiplicadores de crédito."
useCases:
  - "Escrever a especificação de um novo recurso de pagamentos, revisar o design gerado e deixar os agentes trabalharem na lista de tarefas."
  - "Coordenar uma mudança em uma biblioteca compartilhada e os serviços dependentes em uma única sessão do Kiro Web entre vários repositórios."
  - "Agendar uma automação recorrente que atualiza dependências e abre pull requests para revisão toda semana."
  - "Rodar o Kiro CLI sem interface em um pipeline de CI para revisar pull requests antes que uma pessoa os veja."
pricingSummary: "O Kiro Free inclui 50 créditos por mês. O Pro custa $20/mês por 1.000 créditos, o Pro+ $40 por 2.000, o Pro Max $100 por 5.000 e o Power $200 por 10.000, com créditos avulsos a $0.04 cada nos planos pagos."
savingTips:
  - "Estudantes de universidades elegíveis recebem 1.000 créditos por mês grátis durante um ano."
  - "Fique no Auto para prompts rotineiros: a mesma tarefa custa cerca de 1,3x mais créditos ao escolher o Sonnet 4.6 diretamente."
  - "Pacotes de créditos avulsos, a $0.04 cada, começam em $5 por 125 créditos e ficam válidos por 12 meses, diferente dos créditos mensais do plano."
faq:
  - q: "O Kiro é gratuito?"
    a: "Sim. O Kiro Free é um plano permanente com 50 créditos por mês e acesso com limite de taxa ao Claude Sonnet 4.5 e a modelos de pesos abertos como o Qwen3 Coder Next. Ele não é oferecido para contas Enterprise nem em regiões do AWS GovCloud (US)."
  - q: "O que é um crédito do Kiro?"
    a: "Um crédito é uma unidade de trabalho de agente medida com duas casas decimais. Prompts simples podem usar menos de 1 crédito, enquanto tarefas de spec costumam usar mais. Modelos mais fortes têm multiplicadores maiores, e créditos mensais não usados não acumulam."
  - q: "O Kiro tem plano para estudantes?"
    a: "Sim. Estudantes verificados em universidades participantes recebem 1.000 créditos por mês grátis durante um ano, a mesma cota do Pro. O programa listava 132 universidades elegíveis em setembro de 2026, então vale conferir a lista antes de se inscrever."
  - q: "Dá para usar uma assinatura do Kiro fora dos apps do Kiro?"
    a: "Em parte. Os créditos funcionam na Kiro IDE, no Kiro CLI, no Kiro Web, no Kiro Crew, em IDEs compatíveis com ACP e em automações de CI. Rotear pedidos por harnesses de terceiros como o OpenClaw não é permitido."
  - q: "O Kiro Web está incluído no plano Pro?"
    a: "Sim. O Kiro Web está disponível no Pro, Pro+, Pro Max e Power, e consome os mesmos créditos da IDE e do CLI, sem cobrança separada por computação na nuvem. Usuários do nível gratuito não podem usá-lo."
---
## O que é o Kiro?
Kiro é o ambiente de desenvolvimento da AWS para trabalhar com agentes de IA de forma estruturada. Em vez de pular direto de um prompt para o código, o modo spec produz requisitos, um design e tarefas que você aprova, e os agentes as implementam em paralelo.

A IDE é construída sobre o Code OSS e roda em macOS, Windows e Linux, com builds nativos ARM64 desde a IDE 1.1, em setembro de 2026. O Kiro CLI, o Kiro Web e o Kiro Crew, um espaço de trabalho de agente persistente e open source, compartilham os mesmos créditos.

## Planos e créditos

Cada nível é precificado por créditos mensais em vez de contagem de requisições. Os planos pagos renovam no dia 1º de cada mês do calendário, e os preços não incluem impostos. O preço em regiões do AWS GovCloud (US) é cerca de 20% mais alto.

## Limitações
- Os 50 créditos do nível gratuito cobrem apenas uso leve, e modelos premium como o Claude Opus 5 exigem um plano pago.
- Nem todos os modelos premium estão disponíveis em todos os países ou regiões.
- Versões da Kiro IDE anteriores à 0.11.133 e do CLI anteriores à 1.28.2 param de conectar em 9 de novembro de 2026.
- Planos pagos self-service são vendidos apenas para endereços de cobrança em países listados.
