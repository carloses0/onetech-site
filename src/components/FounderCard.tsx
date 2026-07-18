import Image from "next/image";
import {
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/icons/SocialIcons";

type FounderCardProps = {
  nome: string;
  cargo: string;
  foto: string;
  descricao: string;
  redes?: {
    instagram?: string;
    linkedin?: string;
    whatsapp?: string;
  };
};

export function FounderCard({
  nome,
  cargo,
  foto,
  descricao,
  redes,
}: FounderCardProps) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-slate-100">
        <Image
          src={foto}
          alt={nome}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="text-base font-bold text-white">{nome}</h3>

          <p className="text-xs font-semibold uppercase tracking-wide text-white/80">
            {cargo}
          </p>
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3 h-0.5 w-8 rounded-full bg-brand-500" />

        <p className="text-sm leading-relaxed text-slate-500">{descricao}</p>

        {redes && (
          <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
            {redes.instagram && (
              <a
                href={redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Instagram de ${nome}`}
                className="text-slate-400 transition-colors hover:text-brand-600"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
            )}

            {redes.linkedin && (
              <a
                href={redes.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`LinkedIn de ${nome}`}
                className="text-slate-400 transition-colors hover:text-brand-600"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            )}

            {redes.whatsapp && (
              <a
                href={`https://wa.me/${redes.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`WhatsApp de ${nome}`}
                className="text-slate-400 transition-colors hover:text-brand-600"
              >
                <WhatsappIcon className="h-5 w-5" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
