import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { FeatureItem } from "@/components/FeatureItem";
import { CtaSection } from "@/components/sections/CtaSection";
import { FounderCard } from "@/components/FounderCard";
import { valores, sobre, fundadores } from "@/data/empresa";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Sobre a OneTech Solutions",
  description:
    "Conheça a OneTech Solutions: tecnologia acessível para pequenos comércios físicos venderem mais, sem precisar de equipe de TI ou marketing.",
};

export default function SobrePage() {
  return (
    <>
      <Section as="div" className="pt-16 md:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-overline">Sobre nós</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Tecnologia que vende junto com você
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-slate-500">
            {sobre.missao}
          </p>
        </div>
      </Section>

      <Section soft as="div" className="pt-0 md:pt-0">
        <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8 shadow-soft md:p-10">
          <h2 className="text-2xl font-bold text-slate-800">Nossa história</h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            {sobre.texto}
          </p>
        </div>
      </Section>

      <Section ariaLabelledby="valores-title">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-overline">No que acreditamos</p>
          <h2 id="valores-title" className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Nossos valores
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map((valor) => (
            <FeatureItem
              key={valor.titulo}
              icon={valor.icon}
              titulo={valor.titulo}
              descricao={valor.descricao}
            />
          ))}
        </div>
      </Section>

      <Section soft ariaLabelledby="fundadores-title">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-overline">Quem está por trás</p>
          <h2 id="fundadores-title" className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
            Nossos fundadores
          </h2>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {fundadores.map((f) => (
            <FounderCard
              key={f.nome}
              nome={f.nome}
              cargo={f.cargo}
              foto={f.foto}
              descricao={f.descricao}
              redes={f.redes}
            />
          ))}
        </div>
      </Section>

      <CtaSection
        titulo={`Vamos colocar sua loja de ${site.city} no digital?`}
        descricao="Converse com a OneTech e descubra como o Vitrine Pro se encaixa no seu comércio."
      />
    </>
  );
}