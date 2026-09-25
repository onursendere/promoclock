---
summary: "Windsurf é o editor de código com IA que a Cognition, criadora do agente Devin, adquiriu em julho de 2025 e renomeou para Devin Desktop em 2 de junho de 2026. A mesma IDE agora abre em um Agent Command Center que gerencia agentes locais e na nuvem, e planos e preços continuaram sem mudanças. Desenvolvedores o usam como alternativa ao VS Code focada em agentes."
metaTitle: "Windsurf agora é Devin Desktop: preço e plano grátis"
metaDescription: "O Windsurf foi renomeado para Devin Desktop em junho de 2026. Veja o que mudou, os planos Free, Pro ($20/mês) e Max, cotas de uso, recursos e alternativas."
bestFor:
  - "Desenvolvedores saindo do VS Code"
  - "Engenheiros gerenciando vários agentes"
  - "Assinantes atuais do Windsurf"
keyFeatures:
  - name: "Agent Command Center"
    description: "Um quadro Kanban de todo agente local e na nuvem em execução, com Spaces que agrupam sessões, pull requests, arquivos e contexto compartilhado."
  - name: "Agente Devin Local"
    description: "A reescrita em Rust que substituiu o Cascade, usando até 30% menos tokens e suportando subagentes e isolamento no nível do sistema operacional."
  - name: "Agentes de terceiros via ACP"
    description: "Roda Codex, Claude Agent, OpenCode e agentes próprios pelo Agent Client Protocol na mesma visão Kanban."
  - name: "IDE completa por baixo"
    description: "Editor, extensões, atalhos de teclado e LSPs continuam compatíveis com Windsurf e VS Code, e configurações do Cursor podem ser importadas."
  - name: "Tab e edições inline"
    description: "Completions Tab ilimitadas e edições inline por Command em todos os planos, incluindo o Free."
  - name: "Fast Context"
    description: "Um subagente de busca construído sobre modelos SWE-grep que encontra código relevante até 20 vezes mais rápido."
useCases:
  - "Rodar um agente local em uma refatoração enquanto uma sessão Devin na nuvem corrige um bug, e revisar as duas em um só quadro."
  - "Continuar usando o Claude Agent ou o Codex dentro do mesmo editor em vez de trocar de ferramenta."
  - "Migrar uma configuração existente do Windsurf, incluindo regras e memórias, para o Devin Local com o assistente integrado."
pricingSummary: "Free inclui uma cota leve com completions Tab ilimitadas. Pro custa $20/mês, Max custa $200/mês com cotas bem maiores, e Teams começa em $80/mês com assentos completos a $40 cada. Enterprise é personalizado."
savingTips:
  - "Modelos gratuitos não consomem sua cota, e modelos de menor custo como o SWE-1.7 fazem os limites pagos renderem mais."
  - "Assinantes que já tinham o Windsurf Pro antes da mudança de cota de março de 2026 mantêm o preço legado de $15/mês indefinidamente."
faq:
  - q: "O Windsurf foi descontinuado?"
    a: "Não, ele foi renomeado. Em 2 de junho de 2026, uma atualização automática transformou o Windsurf em Devin Desktop, mantendo o editor, as extensões, as configurações e os planos. O site windsurf.com agora redireciona para devin.ai."
  - q: "Quem é dono do Windsurf agora?"
    a: "A Cognition, empresa por trás do agente de codificação Devin. Ela anunciou em 14 de julho de 2025 que adquiriria a propriedade intelectual, o produto, a marca e o time do Windsurf, e desde então incorporou o editor à família de produtos Devin."
  - q: "Como funcionam os limites de uso depois da mudança?"
    a: "Desde março de 2026, os planos incluem uma cota diária e semanal baseada em tokens em vez de créditos por prompt. Usuários Free esperam a renovação; usuários Pro, Max e Teams podem comprar uso extra a preços de lista da API."
  - q: "O que aconteceu com o Cascade?"
    a: "O Devin Local substituiu o Cascade como agente local principal. A Cognition manteve o Cascade disponível até julho de 2026 para uma migração gradual, e um assistente na paleta de comandos move workflows e memórias entre os dois."
---
## O que aconteceu com o Windsurf?
O Windsurf começou como o editor da Codeium e passou para a Cognition em 2025. Em junho de 2026, a Cognition unificou seus produtos sob uma marca: Devin Desktop para a IDE, Devin Cloud para agentes autônomos na nuvem, Devin CLI para o terminal e Devin Review para revisão de código. As regras existentes do Windsurf, incluindo o `.windsurfrules`, continuam funcionando.

## Para quem é
O Devin Desktop serve bem para desenvolvedores que querem um editor construído em torno de supervisionar vários agentes ao mesmo tempo. Não é preciso o Devin Cloud para usá-lo; agentes só locais funcionam normalmente.

## Limitações
- As cotas são medidas em tokens, então modelos de ponta e sessões longas esgotam o orçamento diário e semanal muito mais rápido.
- O plugin do Windsurf para JetBrains está em modo de manutenção; a Cognition recomenda rodar o Devin no JetBrains via ACP no lugar dele.
- Testes grátis dos planos pagos são oferecidos só para uma parte dos clientes elegíveis.
- No Teams, só assentos completos incluem o Devin Desktop, e os novos planos Teams não incluem mais SSO.
