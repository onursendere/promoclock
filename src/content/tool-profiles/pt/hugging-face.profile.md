---
summary: "Hugging Face é o hub de modelos abertos de IA, conjuntos de dados e apps de demonstração Spaces, administrado pela empresa de mesmo nome. Desenvolvedores e pesquisadores o usam para baixar modelos com pesos abertos, hospedar demos Gradio em hardware ZeroGPU compartilhado e chamar modelos hospedados pelos Inference Providers. A NVIDIA anunciou um acordo para adquirir o Hugging Face em 3 de setembro de 2026."
metaTitle: "Preço do Hugging Face: plano PRO, nível grátis e recursos"
metaDescription: "O Hugging Face é grátis para participar. Compare o plano PRO de $9, assentos Team e Enterprise, cotas de ZeroGPU e créditos de inferência, e o acordo com a NVIDIA."
bestFor:
  - "Engenheiros e pesquisadores de ML"
  - "Publicadores de modelos open-source"
  - "Devs demonstrando apps de IA"
  - "Times hospedando modelos privados"
keyFeatures:
  - name: "Hub de modelos e datasets"
    description: "Navegue, baixe e versione modelos e datasets de peso aberto em repositórios baseados em Git, com visibilidade pública ou privada."
  - name: "Spaces"
    description: "Hospede apps de demonstração Gradio, Docker ou estáticos; o hardware CPU Basic é grátis e um Nvidia T4 small custa $0.40 por hora."
  - name: "ZeroGPU"
    description: "Espaços Gradio pegam emprestadas GPUs NVIDIA RTX Pro 6000 Blackwell por chamada de função, dentro de uma cota diária definida pelo tipo da sua conta."
  - name: "Inference Providers"
    description: "Chame modelos de provedores parceiros com um único token do Hugging Face, cobrados nas tarifas do provedor sem margem do Hugging Face."
  - name: "Inference Endpoints"
    description: "Implante qualquer modelo do Hub em infraestrutura dedicada e com autoescala, com instâncias de CPU a partir de $0.033 por hora."
  - name: "HuggingChat"
    description: "Converse com modelos abertos no navegador, onde o roteador Omni escolhe um modelo adequado para cada pedido."
  - name: "CLI hf e bibliotecas cliente"
    description: "Faça login, baixe e envie repositórios pelo terminal com o comando hf e a biblioteca Python huggingface_hub."
useCases:
  - "Baixar um modelo de peso aberto e seu tokenizador para ajuste fino com seus próprios dados localmente."
  - "Publicar uma demo Gradio de um modelo de pesquisa no ZeroGPU para que revisores possam testá-la no navegador."
  - "Testar vários LLMs hospedados pelos Inference Providers antes de se comprometer com um único fornecedor de API."
  - "Dar a um time da empresa SSO, logs de auditoria e regiões de armazenamento para modelos privados no plano Team."
pricingSummary: "O Hub é grátis. O PRO custa $9/mês com $2 em créditos mensais de computação e cota de ZeroGPU 8x maior; o Team custa $20 e o Enterprise $50 por usuário por mês. GPUs de Spaces, Inference Endpoints e armazenamento extra são cobrados por uso."
savingTips:
  - "Contas grátis recebem $0.10 de créditos dos Inference Providers por mês; o PRO eleva isso para $2.00 usáveis em toda a computação do Hugging Face."
  - "Usar Spaces com ZeroGPU é grátis: 5 minutos de tempo de GPU por dia em uma conta grátis contra 40 minutos no PRO."
  - "Contas grátis com mais de 30 dias e e-mail verificado podem hospedar até 2 Spaces com ZeroGPU sem custo."
faq:
  - q: "O Hugging Face é grátis para usar?"
    a: "Sim. Uma conta, downloads de modelos e datasets públicos, Spaces CPU Basic e Spaces com ZeroGPU não custam nada. Você paga pelos planos PRO, Team ou Enterprise, por hardware de Spaces atualizado, por Inference Endpoints e por inferência além dos créditos mensais incluídos."
  - q: "O que o Hugging Face PRO inclui?"
    a: "O PRO custa $9/mês e adiciona $2.00 de créditos mensais de computação, 40 minutos diários de ZeroGPU com a maior prioridade na fila, hospedagem para até 10 Spaces com ZeroGPU, o Spaces Dev Mode e o visualizador de datasets para datasets privados."
  - q: "A NVIDIA está comprando o Hugging Face?"
    a: "Sim. A NVIDIA anunciou em 3 de setembro de 2026 que concordou em adquirir o Hugging Face por $12.93 bilhões. A NVIDIA diz que a plataforma continua aberta a modelos, nuvens e hardware de todo o ecossistema, e que a computação NVIDIA não será exigida."
  - q: "Como funciona a cota diária do ZeroGPU?"
    a: "A cota depende da conta: 2 minutos sem autenticação, 5 minutos no plano grátis, 40 minutos para membros PRO e Team, 60 minutos para o Enterprise. Usuários pagos podem continuar além disso com créditos pré-pagos a $1 por 10 minutos."
  - q: "Dá para usar sua própria chave de API de provedor?"
    a: "Sim. Você pode adicionar uma chave de provedor personalizada nas configurações do Hugging Face, e o provedor então cobra você diretamente. Seus créditos mensais do Hugging Face só valem para pedidos roteados e cobrados pelo Hugging Face."
---
## O que é o Hugging Face?
O Hugging Face administra o Hub, uma casa compartilhada para modelos abertos de IA, datasets e apps Spaces. A maior parte da atividade é pública e grátis; os planos pagos adicionam armazenamento, créditos de computação e controles de organização.

## Planos em resumo
- **Free:** repositórios públicos, Spaces CPU Basic, 5 minutos de ZeroGPU por dia e $0.10 de créditos mensais de inferência.
- **PRO ($9/mês):** armazenamento privado 10x maior, créditos de inferência 20x maiores, cota de ZeroGPU 8x maior e Dev Mode.
- **Team ($20/usuário/mês):** SSO, regiões de armazenamento, logs de auditoria e grupos de recursos.
- **Enterprise ($50/usuário/mês):** provisionamento SCIM, os maiores limites e suporte dedicado.

O armazenamento além dos limites incluídos é cobrado por TB, de $12 a $18 por TB por mês para repositórios privados.

## Notícia sobre a propriedade
Em 3 de setembro de 2026, a NVIDIA anunciou um acordo para adquirir o Hugging Face. A NVIDIA diz que a plataforma vai continuar apoiando modelos open-source e de peso aberto de todo o ecossistema.

## Limitações
O ZeroGPU só funciona com o SDK Gradio e não suporta torch.compile, e contas grátis têm prioridade de fila menor do que as pagas. A cota grátis mensal de $0.10 de inferência acaba rápido. As licenças de modelo variam de repositório para repositório, então verifique cada uma antes de usar comercialmente.
