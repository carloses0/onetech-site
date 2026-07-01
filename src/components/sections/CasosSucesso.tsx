import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { casos } from "@/data/casos";

export function CasosSucesso() {
  return (
    <Section soft ariaLabelledby="casos-title">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-overline">Casos de sucesso</p>
        <h2
          id="casos-title"
          className="mt-3 text-3xl font-bold text-slate-900 md:text-4xl"
        >
          Soluções que já estão no ar
        </h2>
        <p className="mt-4 text-lg text-slate-500">
          Do comércio de bairro a comunidades online: cada projeto no formato
          certo para o objetivo do cliente.
        </p>
      </div>

      <div className="mt-12 grid gap-8 lg:grid-cols-3">
        {casos.map((caso) => {
          const Icon = caso.icon;
          return (
            <Card key={caso.id} hover className="flex flex-col !p-0">
              <div className="flex flex-col gap-3 p-3">
                {caso.imagens.map((img) => (
                  <figure key={img.src} className="group relative">
                    <div className="overflow-hidden rounded-xl border border-slate-200">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={1024}
                        height={640}
                        className="h-auto w-full"
                      />
                    </div>
                    <figcaption className="absolute left-2 top-2 rounded-md bg-slate-900/80 px-2 py-0.5 text-xs font-medium text-white">
                      {img.legenda}
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="flex flex-1 flex-col p-6 pt-3 md:p-8 md:pt-3">
                <div className="flex items-center gap-3">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="font-semibold text-slate-800">
                      {caso.segmento}
                    </p>
                    <Badge variant="soft" className="mt-1">
                      {caso.solucao}
                    </Badge>
                  </div>
                </div>

                <h3 className="mt-5 text-lg font-semibold text-slate-800">
                  {caso.titulo}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-slate-500">
                  {caso.desafio}
                </p>

                <ul className="mt-4 flex flex-col gap-2" role="list">
                  {caso.entregas.map((entrega) => (
                    <li
                      key={entrega}
                      className="flex items-start gap-2 text-[15px] text-slate-600"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand"
                        aria-hidden="true"
                      />
                      {entrega}
                    </li>
                  ))}
                </ul>

                <dl className="mt-6 grid grid-cols-3 gap-3 border-t border-slate-100 pt-5">
                  {caso.resultados.map((r) => (
                    <div key={r.rotulo}>
                      <dt className="sr-only">{r.rotulo}</dt>
                      <dd className="font-display text-xl font-bold text-slate-900">
                        {r.valor}
                      </dd>
                      <p className="mt-0.5 text-xs leading-snug text-slate-500">
                        {r.rotulo}
                      </p>
                    </div>
                  ))}
                </dl>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
