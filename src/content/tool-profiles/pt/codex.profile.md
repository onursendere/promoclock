---
summary: "O OpenAI Codex é o agente de codificação da OpenAI, incluído em todos os planos do ChatGPT, do Free ao Enterprise. Ele roda no terminal, em editores no estilo VS Code, nos apps desktop e web do ChatGPT, no iOS e em ambientes de nuvem isolados. Desenvolvedores o usam para escrever, refatorar e revisar código, compartilhando uma cota de uso com o ChatGPT Work."
metaTitle: "Preço, Limites e Acesso Grátis do OpenAI Codex (2026)"
metaDescription: "Preço do OpenAI Codex em 2026: incluído no ChatGPT Free, Go ($8), Plus ($20) e Pro (a partir de $100). Limites de uso por plano, superfícies, modelos e alternativas."
bestFor:
  - "Devs que já pagam pelo ChatGPT"
  - "Engenheiros focados no terminal"
  - "Times automatizando code review"
keyFeatures:
  - name: "Codex CLI"
    description: "Um agente de terminal que lê, edita e roda código localmente, com sandbox, regras de aprovação e opções de linha de comando programáveis."
  - name: "Extensão de IDE"
    description: "Funciona no VS Code, Cursor e Windsurf, enquanto IDEs JetBrains e o Xcode têm suas próprias integrações com o Codex."
  - name: "Codex cloud"
    description: "Delega tarefas a ambientes de nuvem isolados com dependências configuráveis e acesso controlado à internet."
  - name: "Code review e Slack"
    description: "Revisa mudanças no GitHub automaticamente e recebe pedidos de canais e threads do Slack nos planos do ChatGPT."
  - name: "Família de modelos GPT-5.6"
    description: "Sol cuida do raciocínio mais difícil, Terra cobre o trabalho de produção do dia a dia, e Luna dá os maiores limites para tarefas mais leves."
  - name: "Customização"
    description: "Orientação de projeto via AGENTS.md, além de skills, plugins, servidores MCP e subagentes personalizados."
useCases:
  - "Pedir à CLI para corrigir uma suíte de testes falhando e aprovar cada comando antes que ele rode fora do sandbox."
  - "Delegar uma refatoração longa ao Codex cloud e revisar o diff resultante depois pelo app iOS."
  - "Ativar a revisão automática de código para que todo pull request no GitHub receba uma primeira passada antes do time olhar."
pricingSummary: "O Codex está incluído no ChatGPT Free ($0), Go ($8/mês), Plus ($20/mês) e Pro (a partir de $100/mês, com limites 5x ou 20x maiores que o Plus). O Business custa $25 por usuário ao mês ou $20 no plano anual; o uso com chave de API é cobrado nas tarifas da API."
savingTips:
  - "Usuários do Plus e do Pro que batem no limite podem comprar créditos do ChatGPT em vez de fazer upgrade do plano inteiro."
  - "Trocar para o GPT-5.6 Luna dá muito mais mensagens locais a cada cinco horas do que o Sol, esticando qualquer plano."
  - "Mantenedores de código aberto podem se candidatar ao programa Codex for Open Source para créditos de API e seis meses de ChatGPT Pro com Codex."
faq:
  - q: "O OpenAI Codex é grátis?"
    a: "Sim, com limites. O ChatGPT Free inclui o Codex para tarefas rápidas de código, e o Go a $8 por mês cobre trabalhos leves. O Plus, a $20 por mês, lista integrações de nuvem como revisão automática de código e Slack."
  - q: "Quantas mensagens do Codex o ChatGPT Plus inclui?"
    a: "A OpenAI estima de 10 a 100 mensagens locais do GPT-5.6 Sol ou de 250 a 2.000 mensagens do GPT-5.6 Luna a cada janela de cinco horas no Plus. Limites semanais também podem se aplicar, e os chats de nuvem usam mais."
  - q: "O Codex pode rodar com uma chave de API em vez do ChatGPT?"
    a: "Sim. Com uma chave de API, o Codex funciona na CLI, no SDK e na extensão de IDE e é cobrado nos preços da API, mas recursos de nuvem como revisão de código no GitHub e Slack não ficam disponíveis."
  - q: "Quais modelos o Codex usa em 2026?"
    a: "Os planos do ChatGPT têm a família GPT-5.6 (Sol, Terra e Luna) e o GPT-6 Astra. O Pro adiciona o GPT-5.3-Codex-Spark em preview de pesquisa, e o GPT-5.5 se aposenta do Codex em 14 de outubro de 2026."
---
## O que é o OpenAI Codex?
O Codex é o agente da OpenAI para trabalho de software, vinculado a uma conta do ChatGPT em vez de vendido separadamente. A documentação do Codex da OpenAI agora mora nos docs do ChatGPT, e o uso do Codex é compartilhado com o ChatGPT Work, então ambos consomem os mesmos limites e créditos.

## Para quem é
Ele serve devs que já pagam pelo ChatGPT e querem uma única assinatura cobrindo chat e código. Times podem adicionar o SDK do Codex, uma GitHub Action e um protocolo de app-server para incorporar o Codex às próprias ferramentas e CI.

## Limitações
- Os limites são estimativas, não números fixos; sessões longas, bases de código grandes, o modo rápido e a geração de imagens consomem a cota mais rápido.
- Os chats de nuvem rodam no GPT-5.6 Sol e podem consumir mais do que as mensagens locais.
- O GPT-5.3-Codex-Spark é exclusivo do Pro, com seu próprio limite separado.
- Usuários de chave de API perdem os recursos de nuvem, incluindo code review e Slack.
