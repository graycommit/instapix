export type ChatStep =
  | { kind: "bot"; text: string; balanceAfter?: number }
  | { kind: "choice"; text: string; options: string[] };

export const chatScript: ChatStep[] = [
  {
    kind: "bot",
    text: "Olá! Sou a Paula, assistente virtual de atendimento da plataforma FastPay.",
  },
  {
    kind: "bot",
    text: "Seu cadastro foi localizado com sucesso e as credenciais de membro provisórias já estão reservadas.",
  },
  {
    kind: "bot",
    text: "Para liberar seu cashback de boas-vindas, preciso que você conclua 3 tarefas rápidas de avaliação. Vamos começar?",
  },
  {
    kind: "choice",
    text: "Toque no botão abaixo quando estiver pronto.",
    options: ["Vamos começar!"],
  },
  {
    kind: "choice",
    text: "Tarefa 1 de 3 — como você avalia sua experiência com o app até agora?",
    options: ["⭐⭐⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐"],
  },
  { kind: "bot", text: "Obrigada pela avaliação! ✅" },
  {
    kind: "choice",
    text: "Tarefa 2 de 3 — qual desses benefícios mais te interessa?",
    options: ["Cashback em compras", "Transferências grátis", "Programa de pontos"],
  },
  { kind: "bot", text: "Ótima escolha! ✅" },
  {
    kind: "choice",
    text: "Tarefa 3 de 3 — deseja continuar recebendo novidades por e-mail e WhatsApp?",
    options: ["Sim, quero receber", "Não, obrigado"],
  },
  { kind: "bot", text: "Perfeito! Todas as tarefas foram concluídas. 🎉" },
  {
    kind: "bot",
    text: "Seu cashback de boas-vindas de R$ 25,00 foi liberado e já está disponível no seu saldo.",
    balanceAfter: 25,
  },
  {
    kind: "bot",
    text: "Nossa equipe entrará em contato em breve pelos dados informados. Obrigada por fazer parte do FastPay!",
  },
];
