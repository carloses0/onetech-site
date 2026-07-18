import type { Metadata } from "next";
import {
  Smartphone,
  Zap,
  ShieldCheck,
  RefreshCw,
  Layers,
  Rocket,
  Star,
  Bell,
  Wifi,
  Battery,
} from "lucide-react";
import { Section } from "@/components/ui/Section";
import { WhatsappButton } from "@/components/WhatsappButton";
import { whatsappMessages } from "@/lib/whatsapp";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Desenvolvimento de Apps",
  description:
    "Criamos aplicativos mobile sob medida para o seu negócio, com foco em performance, design e experiência do usuário.",
};

const stats = [
  { value: "100%", label: "Sob medida" },
  { value: "iOS", label: "& Android" },
  { value: "24/7", label: "App no ar" },
];

const features = [
  {
    icon: Smartphone,
    title: "Nativo e multiplataforma",
    description:
      "Apps para iOS e Android com a mesma qualidade, a partir de uma única base de código.",
  },
  {
    icon: Zap,
    title: "Performance em primeiro lugar",
    description:
      "Telas rápidas, transições suaves e carregamento otimizado desde o primeiro dia.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança de verdade",
    description:
      "Dados dos seus usuários protegidos com as melhores práticas do mercado.",
  },
  {
    icon: RefreshCw,
    title: "Atualizações contínuas",
    description:
      "Seu app evolui com o seu negócio, com suporte e melhorias constantes.",
  },
];

const process = [
  {
    icon: Layers,
    step: "01",
    title: "Planejamento",
    description:
      "Entendemos seu produto, seu público e definimos o escopo ideal.",
  },
  {
    icon: Smartphone,
    step: "02",
    title: "Design",
    description:
      "Criamos telas pensadas na experiência do usuário, do início ao fim.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Desenvolvimento",
    description:
      "Construímos o app com tecnologia moderna e código de qualidade.",
  },
  {
    icon: Zap,
    step: "04",
    title: "Publicação",
    description:
      "Levamos seu app até a App Store e Google Play, prontos pra uso.",
  },
];

export default function DesenvolvimentoAppsPage() {
  return (
    <>
      {/* HERO */}
      <Section as="div" className="relative overflow-hidden pt-16 md:pt-24">
        {/* Decorative blurred shapes */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-50 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-16 h-72 w-72 rounded-full bg-green-50 blur-3xl"
        />

        <div className="relative mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:items-center">
          {/* Text column */}
          <Reveal className="text-center lg:text-left">
            <div>
              <p className="text-overline">Desenvolvimento de Apps</p>
              <h1 className="mt-3 text-4xl font-bold leading-[1.1] text-slate-900 md:text-5xl">
                Seu negócio, no bolso do cliente
              </h1>
              <p className="mx-auto mt-4 max-w-md text-lg text-slate-500 lg:mx-0">
                Desenvolvemos aplicativos mobile sob medida, com design pensado
                em experiência do usuário e performance de verdade.
              </p>
              <div className="mt-8 flex justify-center lg:justify-start">
                <WhatsappButton
                  message={whatsappMessages.apps}
                  label="Quero um app assim"
                  size="lg"
                />
              </div>

              {/* Trust bar */}
              <dl className="mx-auto mt-12 grid max-w-sm grid-cols-3 gap-4 border-t border-slate-200 pt-8 lg:mx-0">
                {stats.map(({ value, label }) => (
                  <div key={label}>
                    <dt className="sr-only">{label}</dt>
                    <dd className="text-2xl font-bold text-slate-900">
                      {value}
                    </dd>
                    <dd className="mt-1 text-xs uppercase tracking-wide text-slate-400">
                      {label}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>

          {/* Phone mockup column — signature element */}
          <Reveal delay={150} className="relative mx-auto w-full max-w-[280px]">
            <div>
              <div className="relative rounded-[2.75rem] border-[6px] border-slate-900 bg-slate-900 shadow-2xl">
                {/* Notch */}
                <div className="absolute left-1/2 top-0 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-900" />

                {/* Screen */}
                <div className="relative overflow-hidden rounded-[2.25rem] bg-white">
                  {/* Status bar */}
                  <div className="flex items-center justify-between px-6 pb-1 pt-3 text-[10px] font-semibold text-slate-800">
                    <span>9:41</span>
                    <div className="flex items-center gap-1">
                      <Wifi className="h-3 w-3" aria-hidden="true" />
                      <Battery className="h-3 w-3" aria-hidden="true" />
                    </div>
                  </div>

                  {/* App header */}
                  <div className="flex items-center justify-between px-5 pt-3">
                    <div>
                      <p className="text-[10px] text-slate-400">
                        Olá, Bruna 👋
                      </p>
                      <p className="text-sm font-bold text-slate-900">
                        OneTech App
                      </p>
                    </div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand">
                      <Bell className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>

                  {/* Card */}
                  <div className="mx-5 mt-4 rounded-2xl bg-brand p-4 text-white shadow-lg">
                    <p className="text-[10px] uppercase tracking-wide text-white/70">
                      Pedido em andamento
                    </p>
                    <p className="mt-1 text-lg font-bold">A caminho 🚀</p>
                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/20">
                      <div className="h-full w-2/3 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* List items */}
                  <div className="mx-5 mt-4 space-y-3 pb-8">
                    {[1, 2].map((i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-3 shadow-soft"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-400">
                          <Star className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <div className="h-2 flex-1 rounded-full bg-slate-100" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating accent badge */}
              <div className="absolute -right-4 top-1/4 flex items-center gap-2 rounded-2xl bg-white px-4 py-2.5 shadow-card">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-green-50 text-whatsapp">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                </span>
                <span className="text-xs font-semibold text-slate-700">
                  Dados protegidos
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* FEATURES */}
      <Section as="div" className="pt-24 md:pt-32">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline">Por que um app OneTech</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Construído pra durar, feito pra encantar
            </h2>
          </div>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          {features.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 100}>
              <div className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <span>
                  <span className="block font-semibold text-slate-800">
                    {title}
                  </span>
                  <span className="mt-1 block text-slate-500">
                    {description}
                  </span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section as="div" className="pt-24 md:pt-32">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-overline">Como funciona</p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl">
              Do planejamento à publicação
            </h2>
          </div>
        </Reveal>

        <div className="relative mx-auto mt-16 max-w-5xl">
          {/* Connecting line (desktop only) */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-6 hidden h-px bg-slate-200 lg:block"
          />

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {process.map(({ icon: Icon, step, title, description }, index) => (
              <Reveal key={step} delay={index * 100} className="relative">
                <div>
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white shadow-card">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="mt-4 block text-sm font-semibold text-brand">
                    {step}
                  </span>
                  <span className="mt-1 block font-semibold text-slate-800">
                    {title}
                  </span>
                  <span className="mt-1 block text-sm text-slate-500">
                    {description}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* FINAL CTA */}
      <Section as="div" className="pt-24 pb-16 md:pb-24">
        <Reveal>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-slate-900 px-8 py-14 text-center shadow-2xl md:px-16">
            <p className="text-overline text-brand-100">Vamos começar?</p>
            <h2 className="mx-auto mt-3 max-w-xl text-3xl font-bold text-white md:text-4xl">
              Seu app pode estar no ar antes do que você imagina
            </h2>
            <p className="mx-auto mt-4 max-w-md text-slate-300">
              Fale agora com a gente e receba uma proposta sob medida para o seu
              projeto.
            </p>
            <div className="mt-8 flex justify-center">
              <WhatsappButton
                message={whatsappMessages.apps}
                label="Vamos conversar sobre seu app"
                size="lg"
              />
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
