"use client";

import { FormEvent, useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { whatsappUrl } from "@/lib/whatsapp";
import { segmentos, necessidades } from "@/data/orcamento";

const inputBase =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-[15px] text-slate-800 placeholder:text-slate-400 shadow-soft transition-colors focus:border-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-200";

const labelBase = "mb-1.5 block text-sm font-medium text-slate-700";

export function OrcamentoForm() {
  const [nome, setNome] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [segmento, setSegmento] = useState("");
  const [selecionadas, setSelecionadas] = useState<string[]>([]);
  const [detalhes, setDetalhes] = useState("");
  const [erro, setErro] = useState<string | null>(null);

  const toggleNecessidade = (id: string) => {
    setSelecionadas((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id],
    );
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!nome.trim() || !whatsapp.trim() || !segmento) {
      setErro("Preencha nome, WhatsApp e o segmento do seu negócio.");
      return;
    }
    setErro(null);

    const segmentoLabel =
      segmentos.find((item) => item.id === segmento)?.label ?? segmento;
    const necessidadesLabels = necessidades
      .filter((item) => selecionadas.includes(item.id))
      .map((item) => item.label);

    const linhas = [
      "Olá! Gostaria de um orçamento sob medida.",
      "",
      `👤 Nome: ${nome.trim()}`,
      `📱 WhatsApp: ${whatsapp.trim()}`,
      `🏬 Segmento: ${segmentoLabel}`,
    ];

    if (necessidadesLabels.length > 0) {
      linhas.push(`🎯 Preciso de: ${necessidadesLabels.join(", ")}`);
    }
    if (detalhes.trim()) {
      linhas.push("", `📝 Detalhes: ${detalhes.trim()}`);
    }

    const mensagem = linhas.join("\n");
    window.open(whatsappUrl(mensagem), "_blank", "noopener,noreferrer");
  };

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft md:p-8"
      aria-labelledby="orcamento-form-title"
    >
      <h2 id="orcamento-form-title" className="text-xl font-bold text-slate-800">
        Conte sobre o seu negócio
      </h2>
      <p className="mt-1 text-sm text-slate-500">
        Montamos uma proposta personalizada. Ao enviar, abrimos o WhatsApp com os
        dados já preenchidos.
      </p>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="orc-nome" className={labelBase}>
            Nome <span className="text-brand">*</span>
          </label>
          <input
            id="orc-nome"
            type="text"
            required
            value={nome}
            onChange={(event) => setNome(event.target.value)}
            placeholder="Seu nome ou da loja"
            className={inputBase}
          />
        </div>

        <div>
          <label htmlFor="orc-whatsapp" className={labelBase}>
            WhatsApp <span className="text-brand">*</span>
          </label>
          <input
            id="orc-whatsapp"
            type="tel"
            required
            value={whatsapp}
            onChange={(event) => setWhatsapp(event.target.value)}
            placeholder="(62) 99999-9999"
            className={inputBase}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="orc-segmento" className={labelBase}>
          Segmento do negócio <span className="text-brand">*</span>
        </label>
        <select
          id="orc-segmento"
          required
          value={segmento}
          onChange={(event) => setSegmento(event.target.value)}
          className={inputBase}
        >
          <option value="" disabled>
            Selecione uma opção
          </option>
          {segmentos.map((item) => (
            <option key={item.id} value={item.id}>
              {item.label}
            </option>
          ))}
        </select>
      </div>

      <fieldset className="mt-5">
        <legend className={labelBase}>O que você precisa?</legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {necessidades.map((item) => {
            const checked = selecionadas.includes(item.id);
            return (
              <label
                key={item.id}
                className="flex cursor-pointer items-center gap-2.5 rounded-xl border border-slate-200 px-3 py-2.5 text-[15px] text-slate-700 transition-colors hover:border-brand-200 has-[:checked]:border-brand has-[:checked]:bg-brand-50"
              >
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleNecessidade(item.id)}
                  className="h-4 w-4 rounded border-slate-300 text-brand focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-200"
                />
                {item.label}
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="mt-5">
        <label htmlFor="orc-detalhes" className={labelBase}>
          Detalhes (opcional)
        </label>
        <textarea
          id="orc-detalhes"
          rows={4}
          value={detalhes}
          onChange={(event) => setDetalhes(event.target.value)}
          placeholder="Conte o que você já tem hoje e o que gostaria de alcançar."
          className={`${inputBase} resize-y`}
        />
      </div>

      {erro && (
        <p role="alert" className="mt-4 text-sm font-medium text-red-600">
          {erro}
        </p>
      )}

      <div className="mt-6">
        <Button type="submit" variant="whatsapp" size="lg" className="w-full sm:w-auto">
          <Send className="h-5 w-5" aria-hidden="true" />
          Enviar e abrir no WhatsApp
        </Button>
      </div>
    </form>
  );
}
