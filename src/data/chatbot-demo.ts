export interface CatalogItem {
  id: string;
  nome: string;
  preco: number;
  descricao: string;
}

export interface DemoStore {
  nome: string;
  subtitulo: string;
  status: string;
  horario: string;
}

export interface FaqItem {
  pergunta: string;
  resposta: string;
}

export const demoStore: DemoStore = {
  nome: "Sanduícheria tech",
  subtitulo: "Lanches e porções",
  status: "online",
  horario: "Seg a Sáb, 11h às 22h",
};

export const catalogoDemo: CatalogItem[] = [
  {
    id: "x-burguer",
    nome: "X-Burguer",
    preco: 22,
    descricao: "Pão, hambúrguer 120g, queijo, alface e tomate",
  },
  {
    id: "x-tudo",
    nome: "X-Tudo",
    preco: 28,
    descricao: "Pão, hambúrguer, bacon, ovo, queijo, presunto e salada",
  },
  {
    id: "misto",
    nome: "Misto quente",
    preco: 14,
    descricao: "Pão francês com presunto e queijo gratinado",
  },
  {
    id: "suco",
    nome: "Suco natural 500ml",
    preco: 10,
    descricao: "Laranja, acerola ou maracujá",
  },
];

export const faqDemo: FaqItem[] = [
  {
    pergunta: "Qual o horário de funcionamento?",
    resposta: `Funcionamos de ${demoStore.horario}. Fora desse horário, o chatbot avisa e guarda seu pedido para o próximo expediente.`,
  },
  {
    pergunta: "Fazem entrega?",
    resposta:
      "Sim! Entregamos em um raio de 5 km. O valor da entrega é informado após você informar o endereço.",
  },
  {
    pergunta: "Quais formas de pagamento?",
    resposta: "Aceitamos Pix, dinheiro e cartão na entrega.",
  },
];

export const mensagensBot = {
  boasVindas: `Olá! 👋 Bem-vindo à *${demoStore.nome}*.\n\nSou o assistente virtual e posso te ajudar com o cardápio, horários e pedidos.`,
  menu: "O que você gostaria de fazer?",
  catalogoIntro: "Aqui está nosso cardápio de hoje:",
  pedidoInicio: "Ótimo! Escolha o que deseja pedir:",
  pedidoItemAdicionado: (item: string) =>
    `*${item}* adicionado ao pedido.\n\nQuer incluir mais algum item ou seguir para a entrega?`,
  pedidoNome: "Para finalizar, qual é o seu nome?",
  pedidoEndereco: "Qual o endereço para entrega?",
  pedidoResumo: (nome: string, endereco: string, itens: string[], total: number) =>
    `*Resumo do pedido*\n\n👤 ${nome}\n📍 ${endereco}\n\n🛒 ${itens.join("\n🛒 ")}\n\n💰 *Total: R$ ${total.toFixed(2).replace(".", ",")}*\n\nConfirma o pedido?`,
  pedidoConfirmado: (numero: number) =>
    `✅ *Pedido #${numero} confirmado!*\n\nJá avisamos a cozinha. Em breve você recebe a confirmação da entrega.\n\nObrigado pela preferência!`,
  atendente:
    "Vou transferir você para um atendente humano. Aguarde um instante, por favor. 🙋",
  foraHorario: `No momento estamos fora do horário de atendimento (${demoStore.horario}). Posso anotar seu pedido para quando abrirmos!`,
} as const;

export interface QuickReply {
  id: string;
  label: string;
}

export const quickRepliesMenu: QuickReply[] = [
  { id: "catalogo", label: "Ver cardápio" },
  { id: "pedido", label: "Fazer pedido" },
  { id: "horario", label: "Horário" },
  { id: "atendente", label: "Falar com atendente" },
];

export function formatPreco(valor: number): string {
  return `R$ ${valor.toFixed(2).replace(".", ",")}`;
}
