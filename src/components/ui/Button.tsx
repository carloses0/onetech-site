import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost" | "whatsapp";
type Size = "sm" | "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-brand text-white shadow-md hover:shadow-lg hover:bg-brand-600 focus-visible:ring-brand-300",
  secondary:
    "border border-slate-200 bg-white text-slate-700 hover:border-brand-200 hover:text-brand focus-visible:ring-brand-200",
  ghost: "text-slate-700 hover:bg-slate-100 focus-visible:ring-slate-300",
  whatsapp:
    "bg-whatsapp text-white shadow-md hover:shadow-lg hover:bg-whatsapp-hover focus-visible:ring-green-300",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-[52px] px-7 text-base",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
}

interface ButtonAsButton extends CommonProps {
  href?: undefined;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
}

interface ButtonAsLink extends CommonProps {
  href: string;
  external?: boolean;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    className,
    children,
    ariaLabel,
  } = props;
  const classes = cn(base, variants[variant], sizes[size], className);

  if ("href" in props && props.href) {
    if (props.external) {
      return (
        <a
          href={props.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={props.href} aria-label={ariaLabel} className={classes}>
        {children}
      </Link>
    );
  }

  const { type, onClick, disabled } = props as ButtonAsButton;

  return (
    <button
      type={type ?? "button"}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={classes}
    >
      {children}
    </button>
  );
}
