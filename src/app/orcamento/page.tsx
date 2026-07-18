import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { OrcamentoForm } from "@/components/OrcamentoForm";
import { WhatsappButton } from "@/components/WhatsappButton";
import { CtaSection } from "@/components/sections/CtaSection";
import { orcamentoBeneficios } from "@/data/orcamento";
import { whatsappMessages } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Orçamento sob medida",
  description:
    "Solicite um orçamento personalizado para o seu comércio. Cada projeto é montado sob medida, com escopo e valores de acordo com a sua necessidade.",
};

export default function OrcamentoPage() {
  return (
    <>
      <Section as="div" className="pt-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1fr,1.15fr] lg:gap-16">
          <Reveal>
            <div>
              <p className="text-overline">Orçamento</p>
              <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
                Uma solução sob medida para a sua loja
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-slate-500">
                Não trabalhamos com pacotes fechados. Você conta o que precisa e
                montamos uma proposta personalizada, com escopo e valores de
                acordo com o seu comércio.
              </p>

              <ul className="mt-8 flex flex-col gap-3" role="list">
                {orcamentoBeneficios.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-slate-600"
                  >
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <p className="text-sm text-slate-500">Prefere falar direto?</p>
                <div className="mt-3">
                  <WhatsappButton
                    message={whatsappMessages.orcamento}
                    label="Solicitar pelo WhatsApp"
                  />
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <OrcamentoForm />
          </Reveal>
        </div>
      </Section>

      <Reveal>
        <CtaSection
          titulo="Pronto para tirar o projeto do papel?"
          descricao="Envie o formulário ou fale com a gente no WhatsApp. Respondemos com uma proposta personalizada para o seu comércio."
          message={whatsappMessages.orcamento}
        />
      </Reveal>
    </>
  );
}
