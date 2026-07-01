import Image from "next/image";
import { cn } from "@/lib/cn";
import { site } from "@/lib/site";

interface LogoProps {
  className?: string;
  /** @deprecated O lockup já inclui o wordmark. Mantido por compatibilidade. */
  showWordmark?: boolean;
  variant?: "default" | "light";
}

/**
 * Marca OneTech Solutions — lockup horizontal (símbolo + wordmark).
 * As duas partes são recortadas do logo oficial para manter legibilidade em
 * alturas curtas (navbar). A variante `light` usa fundo branco arredondado
 * para contraste no rodapé escuro.
 */
export function Logo({ className, variant = "default" }: LogoProps) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2.5",
        variant === "light" && "rounded-xl bg-white px-3 py-2",
        className,
      )}
    >
      <Image
        src="/logo-ring.png"
        alt=""
        aria-hidden="true"
        width={377}
        height={328}
        priority
        className="h-11 w-auto md:h-12"
      />
      <Image
        src="/logo-word.png"
        alt={site.name}
        width={754}
        height={160}
        priority
        className="h-7 w-auto md:h-8"
      />
    </span>
  );
}
