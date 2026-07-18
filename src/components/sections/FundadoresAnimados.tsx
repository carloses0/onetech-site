"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FounderCard } from "@/components/FounderCard";
import { Reveal } from "@/components/ui/Reveal";

type Fundador = React.ComponentProps<typeof FounderCard>;

/** Embaralha o array sem mutar o original (Fisher–Yates) */
function embaralhar<T>(lista: T[]): T[] {
  const copia = [...lista];
  for (let i = copia.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copia[i], copia[j]] = [copia[j], copia[i]];
  }
  return copia;
}

export function FundadoresAnimados({ fundadores }: { fundadores: Fundador[] }) {
  // Começa na ordem original (evita divergência entre servidor e cliente)
  const [ordem, setOrdem] = useState(fundadores);

  useEffect(() => {
    // Embaralha assim que a página carrega no navegador
    setOrdem(embaralhar(fundadores));

    // E continua embaralhando a cada 40 segundos
    const intervalo = setInterval(() => {
      setOrdem((atual) => embaralhar(atual));
    }, 40000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {ordem.map((f, index) => (
        <motion.div
          key={f.nome}
          layout
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="h-full"
        >
          <Reveal delay={index * 100}>
            <div className="group h-full [&>*]:h-full [&>*]:transition-transform [&>*]:duration-300 group-hover:[&>*]:-translate-y-1">
              <FounderCard
                nome={f.nome}
                cargo={f.cargo}
                foto={f.foto}
                descricao={f.descricao}
                redes={f.redes}
              />
            </div>
          </Reveal>
        </motion.div>
      ))}
    </div>
  );
}
