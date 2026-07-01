import type { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  titulo: string;
  descricao: string;
}

export function FeatureItem({ icon: Icon, titulo, descricao }: FeatureItemProps) {
  return (
    <article className="flex flex-col gap-3">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </span>
      <h3 className="text-lg font-semibold text-slate-800">{titulo}</h3>
      <p className="text-[15px] leading-relaxed text-slate-500">{descricao}</p>
    </article>
  );
}
