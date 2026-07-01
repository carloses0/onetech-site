import type { Metadata } from "next";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { WhatsappButton } from "@/components/WhatsappButton";
import { whatsappMessages } from "@/lib/whatsapp";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a OneTech Solutions pelo WhatsApp ou e-mail. Atendimento em Goiânia, de segunda a sexta.",
};

export default function ContatoPage() {
  return (
    <>
      <Section as="div" className="pt-16 md:pt-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-overline">Contato</p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900 md:text-5xl">
            Vamos conversar
          </h1>
          <p className="mt-4 text-lg text-slate-500">
            O jeito mais rápido de falar com a gente é pelo WhatsApp. Respondemos
            no horário comercial.
          </p>
          <div className="mt-8 flex justify-center">
            <WhatsappButton message={whatsappMessages.geral} label="Falar no WhatsApp" size="lg" />
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
          <a
            href={`https://wa.me/${site.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-whatsapp">
              <MessageCircle className="h-6 w-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-semibold text-slate-800">WhatsApp</span>
              <span className="mt-1 block text-slate-500">{site.whatsappDisplay}</span>
            </span>
          </a>

          <a
            href={`mailto:${site.email}`}
            className="group flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-shadow hover:shadow-card"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand">
              <Mail className="h-6 w-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-semibold text-slate-800">E-mail</span>
              <span className="mt-1 block break-all text-slate-500">{site.email}</span>
            </span>
          </a>

          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand">
              <MapPin className="h-6 w-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-semibold text-slate-800">Localização</span>
              <span className="mt-1 block text-slate-500">
                {site.city} - {site.state}
              </span>
            </span>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand">
              <Clock className="h-6 w-6" aria-hidden="true" />
            </span>
            <span>
              <span className="block font-semibold text-slate-800">Atendimento</span>
              <span className="mt-1 block text-slate-500">{site.hours}</span>
            </span>
          </div>
        </div>
      </Section>
    </>
  );
}
