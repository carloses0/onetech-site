import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { WhatsappButton } from "@/components/WhatsappButton";
import { FeatureItem } from "@/components/FeatureItem";
import { CtaSection } from "@/components/sections/CtaSection";
import { CasosSucesso } from "@/components/sections/CasosSucesso";
import { WhatsappChatDemo } from "@/components/WhatsappChatDemo";
import { pilares, diferenciais } from "@/data/recursos";
import { whatsappMessages } from "@/lib/whatsapp";
import { site } from "@/lib/site";

const destaques = [
  "Atualize tudo pelo celular",
  "Receba pedidos no WhatsApp",
  "Apareça nas buscas do Google",
];

export default function HomePage() {
  return (
    <>
      <Section as="div" className="pt-16 md:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="animate-fade-up">
            <p className="text-overline">Soluções tecnológicas para o comércio</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
              Sua loja vendendo mais, <span className="text-brand">no digital</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-500">
              A {site.name} apresenta o <strong className="text-slate-700">Vitrine Pro</strong>:
              catálogo digital, atendimento por WhatsApp, pedidos e presença no
              Google — tudo sem precisar de equipe técnica.
            </p>

            <ul className="mt-6 flex flex-col gap-2.5" role="list">
              {destaques.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-slate-600">
                  <Check className="h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <WhatsappButton message={whatsappMessages.demo} label="Quero uma demonstração" size="lg" />
              <Button href="/vitrine-pro" variant="secondary" size="lg">
                Conhecer o Vitrine Pro
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="w-full max-w-[300px]">
              <p className="mb-3 text-center text-sm font-medium text-slate-500">
                Experimente o chatbot
              </p>
              <WhatsappChatDemo variant="compact" />
            </div>
          </div>
        </div>
      </Section>

      <Section soft ariaLabelledby="recursos-title">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-overline">O que o Vitrine Pro faz</p>
          <h2 id="recursos-title" className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Uma vitrine completa, não só um site
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Quatro pilares que conectam sua loja ao dia a dia das vendas.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {pilares.map((pilar) => (
            <FeatureItem
              key={pilar.id}
              icon={pilar.icon}
              titulo={pilar.titulo}
              descricao={pilar.resumo}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button href="/vitrine-pro" variant="primary">
            Ver todos os recursos
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Button>
        </div>
      </Section>

      <Section ariaLabelledby="diferenciais-title">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-overline">Diferencial</p>
          <h2 id="diferenciais-title" className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Diferente de um site tradicional
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Um site comum é estático e difícil de atualizar. O Vitrine Pro vive
            junto com a sua loja.
          </p>
        </div>

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {diferenciais.map((item) => (
            <FeatureItem
              key={item.titulo}
              icon={item.icon}
              titulo={item.titulo}
              descricao={item.descricao}
            />
          ))}
        </div>
      </Section>

      <CasosSucesso />

      <Section as="div" className="py-16">
        <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-soft md:flex-row md:p-10 md:text-left">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Atendemos em {site.city} e região
            </h2>
            <p className="mt-2 text-slate-500">
              Cada projeto é montado sob medida, de acordo com a sua necessidade.
            </p>
          </div>
          <Link
            href="/orcamento"
            className="inline-flex items-center gap-2 font-medium text-brand hover:text-brand-600"
          >
            Solicitar orçamento
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
