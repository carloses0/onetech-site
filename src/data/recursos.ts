import type { LucideIcon } from "lucide-react";
import {
  Smartphone,
  MessageCircle,
  ClipboardList,
  MapPin,
  Camera,
  Tags,
  Bell,
  BarChart3,
  Clock,
  Share2,
} from "lucide-react";

export interface Pilar {
  id: string;
  icon: LucideIcon;
  titulo: string;
  resumo: string;
  itens: string[];
}

export const pilares: Pilar[] = [
  {
    id: "catalogo",
    icon: Smartphone,
    titulo: "Catálogo digital",
    resumo:
      "Cadastre produtos com fotos, vídeos, preços e categorias direto do celular.",
    itens: [
      "Fotos, vídeos, preços, categorias e filtros (tamanho, cor, faixa de preço)",
      "Upload feito pelo próprio lojista, direto do celular",
      "Controle simples de estoque: disponível ou esgotado",
      "Preços promocionais com prazo automático",
      "Link compartilhável para Instagram e WhatsApp",
    ],
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    titulo: "Atendimento via WhatsApp",
    resumo:
      "Um chatbot que responde, envia o catálogo e captura pedidos no WhatsApp.",
    itens: [
      "Responde dúvidas frequentes automaticamente",
      "Envia o catálogo sob demanda",
      "Captura nome, pedido e endereço do cliente",
      "Respeita o horário de atendimento configurado",
      "Transfere para atendente humano quando necessário",
    ],
  },
  {
    id: "pedidos",
    icon: ClipboardList,
    titulo: "Pedidos e reservas",
    resumo:
      "Receba pedidos e acompanhe tudo em um painel simples, com notificações.",
    itens: [
      "Cliente pede pela vitrine ou pelo WhatsApp",
      "Notificação instantânea em um painel simples",
      "Status do pedido: recebido, em preparo, pronto",
      "Histórico de pedidos por cliente",
      "Relatório básico de vendas diárias e semanais",
    ],
  },
  {
    id: "google",
    icon: MapPin,
    titulo: "Presença no Google",
    resumo:
      "Apareça em buscas locais e conecte sua loja ao Google Business Profile.",
    itens: [
      "Otimizado para buscas locais (ex.: \"loja de roupa em Goiânia\")",
      "Integração com Google Business Profile",
      "Sincronização de avaliações e horários",
      "Marcação de produto (schema markup) para aparecer em buscas",
      "Relatório de visitas e buscas que geraram clientes",
    ],
  },
];

export interface Diferencial {
  icon: LucideIcon;
  titulo: string;
  descricao: string;
}

export const diferenciais: Diferencial[] = [
  {
    icon: Camera,
    titulo: "Atualize pelo celular",
    descricao:
      "Troque fotos, preços e disponibilidade em segundos, sem depender de equipe técnica.",
  },
  {
    icon: Bell,
    titulo: "Pedidos no WhatsApp",
    descricao:
      "Receba pedidos direto no WhatsApp e seja notificado na hora em um painel simples.",
  },
  {
    icon: BarChart3,
    titulo: "Acompanhe as visitas",
    descricao:
      "Veja quantas pessoas visitaram sua loja digital e o que mais buscaram naquele dia.",
  },
  {
    icon: Tags,
    titulo: "Promoções com prazo",
    descricao:
      "Crie preços promocionais que entram e saem do ar automaticamente.",
  },
  {
    icon: Clock,
    titulo: "Horário de atendimento",
    descricao:
      "O chatbot respeita o horário configurado e organiza o atendimento por você.",
  },
  {
    icon: Share2,
    titulo: "Pronto para divulgar",
    descricao:
      "Link único da vitrine para colar no Instagram, no status e nas suas campanhas.",
  },
];

export const publicoAlvo: string[] = [
  "Lojas de roupa",
  "Decoração",
  "Sanduicherias",
  "Papelarias",
  "Salões de beleza",
  "Pequenos comércios em geral",
];
