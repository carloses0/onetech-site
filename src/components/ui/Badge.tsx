import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface BadgeProps {
  children: ReactNode;
  variant?: "brand" | "soft" | "solid";
  className?: string;
}

export function Badge({ children, variant = "soft", className }: BadgeProps) {
  const variants: Record<NonNullable<BadgeProps["variant"]>, string> = {
    brand: "bg-brand text-white",
    soft: "bg-brand-50 text-brand-700",
    solid: "bg-slate-900 text-white",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}
