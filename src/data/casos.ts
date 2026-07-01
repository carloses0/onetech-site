import type { LucideIcon } from "lucide-react";
import { UtensilsCrossed, Shirt, Gamepad2 } from "lucide-react";

export interface Resultado {
  valor: string;
  rotulo: string;
}

export interface CasoImagem {
  src: string;
  alt: string;
  legenda: string;
}

export interface Caso {
  id: string;
  icon: LucideIcon;
  segmento: string;
  solucao: string;
  titulo: string;
  desafio: string;
  entregas: string[];
  resultados: Resultado[];
  imagens: CasoImagem[];
}

export const casos: Caso[] = [
  {
    id: "restaurante",
    icon: UtensilsCrossed,
    segmento: "Restaurante",
    solucao: "Vitrine Pro",
    titulo: "Cardápio digital e pedidos direto no WhatsApp",
    desafio:
      "Cardápio em PDF desatualizado e pedidos perdidos entre ligações e mensagens no horário de pico.",
    entregas: [
      "Cardápio digital com fotos, categorias e preços atualizados pelo celular",
      "Chatbot que recebe o pedido e o endereço direto no WhatsApp",
      "Promoções do dia com prazo automático",
    ],
    resultados: [
      { valor: "+30%", rotulo: "pedidos no WhatsApp" },
      { valor: "0", rotulo: "pedido perdido no pico" },
      { valor: "Tempo real", rotulo: "cardápio atualizado" },
    ],
    imagens: [
      {
        src: "/casos/caso-restaurante.png",
        alt: "Landing page de restaurante com cardápio digital e botão de pedido no WhatsApp",
        legenda: "Landing page",
      },
    ],
  },
  {
    id: "loja-roupas",
    icon: Shirt,
    segmento: "Loja de roupas",
    solucao: "Vitrine Pro",
    titulo: "Catálogo com tamanhos, cores e busca no Google",
    desafio:
      "Coleções só no Instagram, sem filtro por tamanho ou cor, e clientes perguntando o mesmo o dia todo.",
    entregas: [
      "Catálogo com filtros de tamanho, cor e faixa de preço",
      "Controle simples de disponível ou esgotado por peça",
      "Presença no Google para buscas locais da região",
    ],
    resultados: [
      { valor: "+45%", rotulo: "visitas à vitrine" },
      { valor: "-50%", rotulo: "dúvidas repetidas" },
      { valor: "24/7", rotulo: "loja no ar" },
    ],
    imagens: [
      {
        src: "/casos/caso-loja-roupas.png",
        alt: "Landing page de loja de roupas com vitrine de produtos, tamanhos e cores",
        legenda: "Landing page",
      },
    ],
  },
  {
    id: "l2theend",
    icon: Gamepad2,
    segmento: "Comunidade de games",
    solucao: "Projeto sob medida",
    titulo: "Portal do servidor L2 The End (Lineage 2)",
    desafio:
      "Um servidor privado de Lineage 2 precisava de um portal próprio para divulgar rates, registrar jogadores e concentrar a comunidade.",
    entregas: [
      "Home imersiva com destaques do servidor, rates e cronograma de eventos",
      "Área logada com painel da conta, personagens e doações",
      "Design responsivo e otimizado para atrair novos jogadores",
    ],
    resultados: [
      { valor: "High Five", rotulo: "crônica do servidor" },
      { valor: "4.8/5", rotulo: "avaliação dos jogadores" },
      { valor: "Online", rotulo: "portal no ar" },
    ],
    imagens: [
      {
        src: "/casos/l2theend-home.png",
        alt: "Home do portal do servidor L2 The End com hero em tema de fantasia",
        legenda: "Home",
      },
      {
        src: "/casos/l2theend-painel.png",
        alt: "Área logada do L2 The End com painel da conta, personagens e doações",
        legenda: "Área logada",
      },
    ],
  },
];
