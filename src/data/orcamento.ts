export interface OpcaoOrcamento {
  id: string;
  label: string;
}

export const segmentos: OpcaoOrcamento[] = [
  { id: "restaurante", label: "Restaurante / lanchonete" },
  { id: "moda", label: "Loja de roupas / moda" },
  { id: "mercado", label: "Mercado / conveniência" },
  { id: "servicos", label: "Serviços / agendamentos" },
  { id: "beleza", label: "Salão / estética" },
  { id: "games", label: "Games / comunidade online" },
  { id: "outro", label: "Outro segmento" },
];

export const necessidades: OpcaoOrcamento[] = [
  { id: "catalogo", label: "Catálogo digital" },
  { id: "chatbot", label: "Chatbot no WhatsApp" },
  { id: "pedidos", label: "Pedidos e reservas" },
  { id: "google", label: "Presença no Google" },
  { id: "site", label: "Site institucional / landing page" },
  { id: "sob-medida", label: "Projeto sob medida" },
];

export const orcamentoBeneficios: string[] = [
  "Proposta personalizada para o seu tipo de comércio",
  "Escopo e valores sob medida, sem pacotes engessados",
  "Resposta pelo WhatsApp em horário comercial",
];
