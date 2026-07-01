export interface Plano {
  id: string;
  nome: string;
  preco: number;
  destaque?: boolean;
  selo?: string;
  resumo: string;
  inclui: string[];
}

export const setup = {
  preco: 297,
  descricao:
    "Taxa única de implantação. Cobre o cadastro inicial dos produtos, a configuração do chatbot no WhatsApp e a personalização da vitrine.",
} as const;

export const planos: Plano[] = [
  {
    id: "essencial",
    nome: "Essencial",
    preco: 197,
    resumo: "Para começar a vender online com o básico bem feito.",
    inclui: [
      "Catálogo digital",
      "WhatsApp básico",
      "Domínio próprio",
    ],
  },
  {
    id: "profissional",
    nome: "Profissional",
    preco: 297,
    destaque: true,
    selo: "Mais vendido",
    resumo: "O pacote completo para vender mais todos os dias.",
    inclui: [
      "Tudo do Essencial",
      "Pedidos e reservas",
      "Chatbot completo",
      "Dashboard de vendas",
      "Integração com o Google",
    ],
  },
  {
    id: "premium",
    nome: "Premium",
    preco: 447,
    resumo: "Para quem precisa de mais atendentes e suporte dedicado.",
    inclui: [
      "Tudo do Profissional",
      "Múltiplos atendentes",
      "Relatórios avançados",
      "Suporte dedicado",
    ],
  },
];

export const condicoes: string[] = [
  "Sem fidelidade obrigatória — cancelamento mensal",
  "Pagamento recorrente via cartão ou Pix automático",
  "Upgrade de plano a qualquer momento, sem multa",
];

export const faq: { pergunta: string; resposta: string }[] = [
  {
    pergunta: "Preciso ter conhecimento técnico?",
    resposta:
      "Não. Você atualiza produtos pelo celular e recebe pedidos no WhatsApp. Toda a parte técnica fica por nossa conta.",
  },
  {
    pergunta: "Como funciona a taxa de setup?",
    resposta:
      "É uma cobrança única de R$ 297 para implantar tudo: cadastro inicial dos produtos, configuração do chatbot e personalização da vitrine.",
  },
  {
    pergunta: "Tem fidelidade ou multa?",
    resposta:
      "Não. O cancelamento é mensal e você pode fazer upgrade de plano a qualquer momento, sem multa.",
  },
  {
    pergunta: "Posso começar pequeno e crescer depois?",
    resposta:
      "Sim. Comece pelo Essencial e migre para o Profissional ou Premium quando precisar de mais recursos.",
  },
];
