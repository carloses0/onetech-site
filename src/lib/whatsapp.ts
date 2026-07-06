import { site } from "@/lib/site";

/**
 * Gera um link wa.me com mensagem pré-preenchida.
 * A mensagem é sempre codificada para evitar injeção/quebra de URL.
 */
export function whatsappUrl(message?: string): string {
  const base = `https://wa.me/${site.whatsapp}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}

export const whatsappMessages = {
  geral: "Olá! Vim pelo site da OneTech e gostaria de saber mais sobre o Vitrine Pro.",
  demo: "Olá! Gostaria de agendar uma demonstração do Vitrine Pro.",
  duvida: "Olá! Tenho uma dúvida sobre o Vitrine Pro.",
  orcamento:
    "Olá! Gostaria de solicitar um orçamento sob medida para o meu comércio.",
} as const;
