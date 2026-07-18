import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { FeatureItem } from "@/components/FeatureItem";
import { CtaSection } from "@/components/sections/CtaSection";
import { FundadoresAnimados } from "@/components/sections/FundadoresAnimados";
import { valores, sobre, fundadores } from "@/data/empresa";
import { site } from "@/lib/site";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Sobre a OneTech Solutions",
  description:
    "Conheça a OneTech Solutions: tecnologia acessível para pequenos comércios físicos venderem mais, sem precisar de equipe de TI ou marketing.",
};

/** Pequeno elemento de assinatura, repetido em todas as seções para dar identidade visual */
function Kicker({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-2.5">
      <p className="text-overline">{label}</p>
      <span className="h-1 w-10 rounded-full bg-gradient-to-r from-primary to-primary/20" />
    </div>
  );
}

/** Textura de fundo com grade de pontos, reutilizada em várias seções.
 *  `size` e `position` controlam onde o "foco" do fade fica (ex: mais no topo ou centralizado). */
function DotsBackground({
  patternId,
  size = "60% 60%",
  position = "50% 20%",
}: {
  patternId: string;
  size?: string;
  position?: string;
}) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.4]"
      style={{
        maskImage: `radial-gradient(ellipse ${size} at ${position}, black, transparent)`,
        WebkitMaskImage: `radial-gradient(ellipse ${size} at ${position}, black, transparent)`,
      }}
    >
      <svg width="100%" height="100%">
        <pattern
          id={patternId}
          x="0"
          y="0"
          width="24"
          height="24"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.5" cy="1.5" r="1.5" className="fill-slate-300" />
        </pattern>
        <rect width="100%" height="100%" fill={`url(#${patternId})`} />
      </svg>
    </div>
  );
}

export default function SobrePage() {
  const primeiraLetra = sobre.texto.charAt(0);
  const restoDoTexto = sobre.texto.slice(1);

  return (
    <>
      {/* HERO */}
      <Section as="div" className="relative overflow-hidden pt-16 md:pt-24">
        <DotsBackground patternId="hero-dots" />

        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-1.5 text-overline shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Sobre nós
            </span>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Tecnologia que vende{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                junto com você
              </span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-500">
              {sobre.missao}
            </p>
          </div>
        </Reveal>
      </Section>

      {/* NOSSA HISTÓRIA */}
      <Section soft as="div" className="pt-4 md:pt-8">
        <Reveal>
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-soft">
              {/* faixa de destaque lateral */}
              <div className="absolute inset-y-0 left-0 w-1.5 bg-gradient-to-b from-primary to-primary/40" />

              {/* cantos estilo "etiqueta de museu" */}
              <span
                aria-hidden
                className="absolute left-6 top-6 h-6 w-6 border-l-2 border-t-2 border-primary/25 md:left-8 md:top-8"
              />
              <span
                aria-hidden
                className="absolute bottom-6 right-6 h-6 w-6 border-b-2 border-r-2 border-primary/25 md:bottom-8 md:right-8"
              />

              <div className="grid gap-10 p-8 md:grid-cols-[minmax(0,220px)_1px_1fr] md:p-14">
                {/* Coluna de título */}
                <div className="md:sticky md:top-24 md:self-start">
                  <p className="text-overline">Nossa trajetória</p>
                  <h2 className="mt-3 text-2xl font-bold leading-tight text-slate-900 md:text-3xl">
                    Nossa história
                  </h2>
                  <span className="mt-4 block h-1 w-10 rounded-full bg-gradient-to-r from-primary to-primary/20" />
                  <p className="mt-4 text-sm leading-relaxed text-slate-400">
                    De onde viemos e por que existimos.
                  </p>
                </div>

                {/* Divisor vertical (apenas desktop) */}
                <div className="hidden bg-slate-100 md:block" />

                {/* Texto principal com capitular */}
                <div className="relative">
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -left-3 -top-8 select-none font-serif text-8xl leading-none text-primary/10 md:-left-5 md:-top-10 md:text-9xl"
                  >
                    &ldquo;
                  </span>
                  <p className="relative text-lg leading-relaxed text-slate-600 md:text-xl">
                    <span className="float-left mr-3 mt-1 font-serif text-6xl font-bold leading-[0.8] text-primary md:text-7xl">
                      {primeiraLetra}
                    </span>
                    {restoDoTexto}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* FUNDADORES */}
      <Section
        ariaLabelledby="fundadores-title"
        className="relative overflow-hidden"
      >
        <DotsBackground
          patternId="fundadores-dots"
          size="90% 90%"
          position="50% 50%"
        />

        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Kicker label="Quem está por trás" />
            <h2
              id="fundadores-title"
              className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
            >
              Nossos fundadores
            </h2>
          </div>
        </Reveal>

        <FundadoresAnimados fundadores={fundadores} />
      </Section>

      {/* VALORES */}
      <Section
        soft
        ariaLabelledby="valores-title"
        className="relative overflow-hidden"
      >
        <DotsBackground patternId="valores-dots" />

        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Kicker label="No que acreditamos" />
            <h2
              id="valores-title"
              className="mt-3 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl"
            >
              Nossos valores
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-500">
              Os princípios que guiam cada decisão da OneTech.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {valores.map((valor, index) => (
            <Reveal key={valor.titulo} delay={index * 100}>
              <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <FeatureItem
                  icon={valor.icon}
                  titulo={valor.titulo}
                  descricao={valor.descricao}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Reveal>
        <CtaSection
          titulo={`Vamos colocar sua loja de ${site.city} no digital?`}
          descricao="Converse com a OneTech e descubra como o Vitrine Pro se encaixa no seu comércio."
        />
      </Reveal>
    </>
  );
}
