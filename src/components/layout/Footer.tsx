import Link from "next/link";
import { Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/Logo";
import { nav, site } from "@/lib/site";
import { whatsappUrl, whatsappMessages } from "@/lib/whatsapp";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col gap-4">
            <Logo variant="light" />
            <p className="max-w-xs text-sm leading-relaxed text-slate-400">
              {site.description}
            </p>
          </div>

          <nav aria-label="Rodapé" className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              Navegação
            </h2>
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="w-fit text-sm text-slate-400 transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-200">
              Contato
            </h2>
            <a
              href={whatsappUrl(whatsappMessages.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
            >
              <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
              {site.whatsappDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="break-all">{site.email}</span>
            </a>
            <p className="flex items-center gap-2 text-sm text-slate-400">
              <MapPin className="h-4 w-4" aria-hidden="true" />
              {site.city} - {site.state}
            </p>
            <p className="flex items-center gap-2 text-sm text-slate-400">
              <Clock className="h-4 w-4" aria-hidden="true" />
              {site.hours}
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-center text-xs text-slate-500">
          <p>
            © {year} {site.name}. Todos os direitos reservados.
          </p>
        </div>
      </Container>
    </footer>
  );
}
