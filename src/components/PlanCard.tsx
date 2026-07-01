import { Check, Star } from "lucide-react";
import { cn } from "@/lib/cn";
import { Badge } from "@/components/ui/Badge";
import { WhatsappButton } from "@/components/WhatsappButton";
import { whatsappMessages } from "@/lib/whatsapp";
import type { Plano } from "@/data/planos";

interface PlanCardProps {
  plano: Plano;
}

export function PlanCard({ plano }: PlanCardProps) {
  const { nome, preco, inclui, resumo, destaque, selo } = plano;

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-2xl border bg-white p-6 md:p-8",
        destaque
          ? "border-brand shadow-brand lg:-translate-y-2"
          : "border-slate-200 shadow-soft",
      )}
    >
      {selo && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <Badge variant="brand">
            <Star className="h-3.5 w-3.5" aria-hidden="true" />
            {selo}
          </Badge>
        </div>
      )}

      <h3 className="text-xl font-bold text-slate-800">{nome}</h3>
      <p className="mt-1 text-sm text-slate-500">{resumo}</p>

      <p className="mt-5 flex items-baseline gap-1">
        <span className="text-sm font-medium text-slate-500">R$</span>
        <span className="font-display text-4xl font-bold text-slate-900">
          {preco}
        </span>
        <span className="text-sm text-slate-500">/mês</span>
      </p>

      <ul className="mt-6 flex flex-1 flex-col gap-3" role="list">
        {inclui.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-[15px] text-slate-600">
            <Check
              className="mt-0.5 h-5 w-5 shrink-0 text-brand"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <WhatsappButton
          message={whatsappMessages.plano(nome)}
          label={`Contratar ${nome}`}
          variant={destaque ? "primary" : "secondary"}
          className="w-full"
        />
      </div>
    </article>
  );
}
