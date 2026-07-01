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
