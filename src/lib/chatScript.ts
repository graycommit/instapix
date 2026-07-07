export type ChatStep =
  | { kind: "system"; text: string }
  | { kind: "bot"; text: string }
  | { kind: "agent"; name: string; text: string }
  | { kind: "voice"; name: string; duration: string }
  | { kind: "image"; name: string }
  | { kind: "choice"; options: string[] };

export const chatScript: ChatStep[] = [
  { kind: "system", text: "Marcela Oliveira entrou no chat" },
  {
    kind: "bot",
    text: "Olá! Sou seu Concierge PIX. Marcela está aqui para te ajudar com o suporte técnico hoje.",
  },
  {
    kind: "agent",
    name: "Marcela Oliveira",
    text: "Oi! Vi que você teve uma dúvida sobre os limites. Consegue me mandar um print da tela de erro?",
  },
  { kind: "voice", name: "Marcela Oliveira", duration: "0:14" },
  { kind: "image", name: "Marcela Oliveira" },
  { kind: "choice", options: ["Perfeito, obrigado!", "Ainda com dúvidas"] },
];
