"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/cn";
import { Logo } from "@/components/Logo";
import { WhatsappButton } from "@/components/WhatsappButton";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { whatsappMessages } from "@/lib/whatsapp";
import { nav, site } from "@/lib/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const pathname = usePathname();
  const { isNavbarHidden } = useScrollDirection();

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(media.matches);

    const onChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };

    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const hidden = isNavbarHidden && !open && !reducedMotion;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-slate-200/70 bg-white/80 backdrop-blur-md transition-transform duration-300 ease-in-out",
        hidden ? "-translate-y-full" : "translate-y-0",
      )}
    >
      <nav
        aria-label="Principal"
        className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8"
      >
        <Link href="/" aria-label={`${site.name} — Início`} className="py-2">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-1 lg:flex" role="list">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-brand"
                      : "text-slate-600 hover:text-brand",
                  )}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <WhatsappButton message={whatsappMessages.geral} size="sm" />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-slate-200 bg-white lg:hidden"
        >
          <ul className="flex flex-col gap-1 px-4 py-4" role="list">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <WhatsappButton
                message={whatsappMessages.geral}
                className="w-full"
              />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
