import type { LucideIcon } from "lucide-react";
import { Rocket, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

export interface Valor {
  icon: LucideIcon;
  titulo: string;
  descricao: string;
}

export const valores: Valor[] = [
  {
    icon: Rocket,
    titulo: "Simples de usar",
    descricao:
      "Tecnologia que cabe na rotina do comércio: tudo pelo celular, sem complicação.",
  },
  {
    icon: HeartHandshake,
    titulo: "Perto do cliente",
    descricao:
      "Atendimento próximo e em português, pensado para o pequeno comércio brasileiro.",
  },
  {
    icon: ShieldCheck,
    titulo: "Seguro e confiável",
    descricao:
      "Boas práticas de segurança e estabilidade para sua loja nunca ficar fora do ar.",
  },
  {
    icon: Sparkles,
    titulo: "Resultado de verdade",
    descricao:
      "Foco em vender mais: mais visitas, mais pedidos e mais clientes recorrentes.",
  },
];

export const sobre = {
  missao:
    "Levar tecnologia acessível para pequenos comércios físicos venderem mais, sem precisar de equipe de TI ou marketing.",
  texto:
    "A OneTech Solutions nasceu para resolver um problema real: lojas com produto bom, mas presença digital fraca. Em vez de um site estático e difícil de mexer, entregamos uma solução viva — o Vitrine Pro — que o lojista atualiza pelo celular, recebe pedidos no WhatsApp e acompanha quantas pessoas visitaram a loja naquele dia.",
};

export type Fundador = {
  nome: string;
  cargo: string;
  foto: string;
  descricao: string;
  redes?: {
    instagram?: string;
    linkedin?: string;
    whatsapp?: string; 
  };
};

export const fundadores: Fundador[] = [
  {
    nome: "Brenno Alencar",
    cargo: "CTO & Co-founder",
    foto: "/fundadores/brenno.png",
    descricao:
      "Mais de 10 anos ajudando pequenos negócios a vender mais com tecnologia simples.",
    redes: {
      instagram: "https://instagram.com/brenno_alencaar",
      linkedin: "https://www.linkedin.com/in/brenno-alencar-955460256/",
    },
  },
  {
    nome: "Carlos Eduardo",
    cargo: "CEO & Co-founder",
    foto: "/fundadores/carlos.png",
    descricao:
      "Lidera o desenvolvimento do Vitrine Pro, focada em produtos fáceis de usar.",
    redes: {
      instagram: "https://instagram.com/carlos.sousaes0",
      linkedin: "https://www.linkedin.com/in/carlos-eduardo-s-11948a178/",
    },
  },
  {
    nome: "Kaio Alencar",
    cargo: "CFO & Co-founder",
    foto: "/fundadores/kaio.jpeg",
    descricao:
      "Lidera o desenvolvimento do Vitrine Pro, focada em produtos fáceis de usar.",
    redes: {
      instagram: "https://instagram.com/kaio__alencar",
      whatsapp: "5562991713172",
    },
  },
];