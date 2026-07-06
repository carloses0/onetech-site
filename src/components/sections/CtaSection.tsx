import { Section } from "@/components/ui/Section";
import { WhatsappButton } from "@/components/WhatsappButton";
import { Button } from "@/components/ui/Button";
import { whatsappMessages } from "@/lib/whatsapp";

interface CtaSectionProps {
  titulo?: string;
  descricao?: string;
  message?: string;
}

export function CtaSection({
  titulo = "Pronto para colocar sua loja no digital?",
  descricao = "Fale com a gente no WhatsApp e descubra como o Vitrine Pro pode aumentar suas vendas — sem complicação e sem equipe técnica.",
  message = whatsappMessages.demo,
}: CtaSectionProps) {
  return (
    <Section ariaLabelledby="cta-title">
      <div className="overflow-hidden rounded-2xl bg-brand-gradient px-6 py-14 text-center md:px-12 md:py-20">
        <h2
          id="cta-title"
          className="mx-auto max-w-2xl text-3xl font-bold text-white md:text-4xl"
        >
          {titulo}
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-blue-50 md:text-lg">
          {descricao}
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <WhatsappButton message={message} label="Falar com a OneTech" size="lg" />
          <Button href="/orcamento" variant="secondary" size="lg">
            Solicitar orçamento
          </Button>
        </div>
      </div>
    </Section>
  );
}
