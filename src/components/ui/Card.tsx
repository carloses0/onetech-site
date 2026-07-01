import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-6 shadow-soft md:p-8",
        hover && "transition-shadow duration-300 hover:shadow-card",
        className,
      )}
    >
      {children}
    </div>
  );
}
