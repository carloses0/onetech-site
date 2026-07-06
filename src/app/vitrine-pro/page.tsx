import type { Metadata } from "next";
import { Check, X, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { WhatsappButton } from "@/components/WhatsappButton";
import { CtaSection } from "@/components/sections/CtaSection";
import { WhatsappDemoSection } from "@/components/sections/WhatsappDemoSection";
import { pilares, publicoAlvo } from "@/data/recursos";
import { whatsappMessages } from "@/lib/whatsapp";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vitrine Pro — catálogo digital, WhatsApp e pedidos",
  description:
    "O Vitrine Pro é a vitrine digital completa para pequenos comércios: catálogo pelo celular, chatbot no WhatsApp, pedidos em painel simples e presença no Google.",
};

const comparativo = [
  { recurso: "Atualização pelo celular", tradicional: false, vitrine: true },
  { recurso: "Pedidos pelo WhatsApp", tradicional: false, vitrine: true },
  { recurso: "Chatbot de atendimento", tradicional: false, vitrine: true },
  { recurso: "Relatório de visitas e buscas", tradicional: false, vitrine: true },
  { recurso: "Integração com Google", tradicional: false, vitrine: true },
  { recurso: "Promoções atualizadas periodicamente", tradicional: false, vitrine: true },
];

const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Vitrine Pro",
  brand: { "@type": "Brand", name: site.name },
  description:
    "Plataforma digital para pequenos comércios: catálogo digital, atendimento por WhatsApp, pedidos e reservas e presença no Google.",
};

export default function VitrineProPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />

      <Section as="div" className="pt-16 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="soft">Produto OneTech</Badge>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
            Vitrine Pro
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            Mais que um site institucional: uma solução completa de exposição de
            produtos, atendimento e captura de pedidos para o seu comércio físico.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsappButton message={whatsappMessages.demo} label="Agendar demonstração" size="lg" />
            <Button href="/orcamento" variant="secondary" size="lg">
              Solicitar orçamento
            </Button>
          </div>
        </div>
      </Section>

      <Section soft ariaLabelledby="pilares-title" className="pt-0 md:pt-0">
        <h2 id="pilares-title" className="sr-only">
          Recursos do Vitrine Pro
        </h2>
        <div className="flex flex-col gap-6">
          {pilares.map((pilar, index) => {
            const Icon = pilar.icon;
            return (
              <article
                key={pilar.id}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft md:p-10"
              >
                <div className="grid gap-6 md:grid-cols-[auto,1fr] md:gap-10">
                  <div className="flex items-start gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                      <Icon className="h-7 w-7" aria-hidden="true" />
                    </span>
                    <div className="md:hidden">
                      <p className="text-sm font-semibold text-brand">
                        0{index + 1}
                      </p>
                      <h3 className="text-xl font-bold text-slate-800">
                        {pilar.titulo}
                      </h3>
                    </div>
                  </div>
                  <div>
                    <div className="hidden md:block">
                      <p className="text-sm font-semibold text-brand">
                        0{index + 1}
                      </p>
                      <h3 className="text-2xl font-bold text-slate-800">
                        {pilar.titulo}
                      </h3>
                    </div>
                    <p className="mt-2 text-slate-500">{pilar.resumo}</p>
                    <ul className="mt-5 grid gap-3 sm:grid-cols-2" role="list">
                      {pilar.itens.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-[15px] text-slate-600"
                        >
                          <Check
                            className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                            aria-hidden="true"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <WhatsappDemoSection />

      <Section ariaLabelledby="comparativo-title">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-overline">Diferencial</p>
          <h2 id="comparativo-title" className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Vitrine Pro x site tradicional
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-left">
            <caption className="sr-only">
              Comparação entre um site tradicional e o Vitrine Pro
            </caption>
            <thead>
              <tr className="bg-bg-soft text-sm">
                <th scope="col" className="px-5 py-4 font-semibold text-slate-700">
                  Recurso
                </th>
                <th scope="col" className="px-5 py-4 text-center font-semibold text-slate-500">
                  Site comum
                </th>
                <th scope="col" className="px-5 py-4 text-center font-semibold text-brand">
                  Vitrine Pro
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {comparativo.map((linha) => (
                <tr key={linha.recurso} className="text-[15px]">
                  <th scope="row" className="px-5 py-4 font-normal text-slate-700">
                    {linha.recurso}
                  </th>
                  <td className="px-5 py-4 text-center">
                    <Mark on={linha.tradicional} />
                  </td>
                  <td className="px-5 py-4 text-center">
                    <Mark on={linha.vitrine} brand />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section soft ariaLabelledby="publico-title">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-overline">Para quem é</p>
          <h2 id="publico-title" className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Feito para o pequeno comércio físico
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Para quem tem presença digital fraca ou inexistente e precisa vender
            mais sem contratar equipe de tecnologia ou marketing.
          </p>
        </div>
        <ul className="mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-3" role="list">
          {publicoAlvo.map((item) => (
            <li key={item}>
              <span className="inline-flex rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700">
                {item}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-10 text-center">
          <Button href="/orcamento" variant="primary" size="lg">
            Solicitar orçamento
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </Section>

      <CtaSection message={whatsappMessages.demo} />
    </>
  );
}

function Mark({ on, brand = false }: { on: boolean; brand?: boolean }) {
  if (on) {
    return (
      <Check
        className={brand ? "mx-auto h-5 w-5 text-brand" : "mx-auto h-5 w-5 text-slate-400"}
        aria-label="Sim"
      />
    );
  }
  return <X className="mx-auto h-5 w-5 text-slate-300" aria-label="Não" />;
}
