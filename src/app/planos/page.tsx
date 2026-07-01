import type { Metadata } from "next";
import { Check, Wrench } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { PlanCard } from "@/components/PlanCard";
import { WhatsappButton } from "@/components/WhatsappButton";
import { CtaSection } from "@/components/sections/CtaSection";
import { planos, setup, condicoes, faq } from "@/data/planos";
import { whatsappMessages } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Planos e preços do Vitrine Pro",
  description:
    "Setup único de R$ 297 e planos mensais a partir de R$ 197. Sem fidelidade, pagamento via cartão ou Pix e upgrade a qualquer momento.",
};

export default function PlanosPage() {
  return (
    <>
      <Section as="div" className="pt-16 md:pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-overline">Planos</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Preços simples e transparentes
          </h1>
          <p className="mt-4 text-lg text-slate-500">
            Taxa de implantação única + assinatura mensal recorrente. Escolha o
            plano e comece a vender.
          </p>
        </div>

        <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-4 rounded-2xl border border-dashed border-brand-200 bg-brand-50 px-6 py-6 text-center sm:flex-row sm:text-left">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand">
            <Wrench className="h-6 w-6" aria-hidden="true" />
          </span>
          <div className="flex-1">
            <p className="font-semibold text-slate-800">
              Setup (implantação): R$ {setup.preco}{" "}
              <span className="font-normal text-slate-500">— cobrado uma vez</span>
            </p>
            <p className="mt-1 text-sm text-slate-600">{setup.descricao}</p>
          </div>
        </div>
      </Section>

      <Section as="div" className="pt-0 md:pt-0">
        <div className="grid items-start gap-6 lg:grid-cols-3 lg:gap-8 lg:pt-6">
          {planos.map((plano) => (
            <PlanCard key={plano.id} plano={plano} />
          ))}
        </div>

        <ul className="mx-auto mt-12 flex max-w-3xl flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center" role="list">
          {condicoes.map((cond) => (
            <li
              key={cond}
              className="flex items-center gap-2 text-sm text-slate-600"
            >
              <Check className="h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
              {cond}
            </li>
          ))}
        </ul>
      </Section>

      <Section soft ariaLabelledby="faq-title">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="text-overline">Dúvidas frequentes</p>
            <h2 id="faq-title" className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Perguntas comuns
            </h2>
          </div>

          <dl className="mt-10 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            {faq.map((item) => (
              <div key={item.pergunta} className="p-6">
                <dt className="font-semibold text-slate-800">{item.pergunta}</dt>
                <dd className="mt-2 text-[15px] leading-relaxed text-slate-500">
                  {item.resposta}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 text-center">
            <p className="text-slate-600">Ainda com dúvidas sobre qual plano escolher?</p>
            <div className="mt-4 flex justify-center">
              <WhatsappButton message={whatsappMessages.duvida} label="Tirar dúvidas no WhatsApp" />
            </div>
          </div>
        </div>
      </Section>

      <CtaSection
        titulo="Comece com o plano ideal para você"
        descricao="Sem fidelidade e com upgrade a qualquer momento. Fale com a gente e escolha o melhor plano para a sua loja."
        message={whatsappMessages.geral}
      />
    </>
  );
}
