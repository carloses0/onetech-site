# OneTech Solutions — Site (Vitrine Pro)

Site institucional da **OneTech Solutions** com destaque para o produto **Vitrine Pro**.
Construído com Next.js (App Router) + TypeScript + Tailwind CSS.

## Stack

- [Next.js 14](https://nextjs.org/) — App Router
- TypeScript (strict)
- Tailwind CSS 3
- [lucide-react](https://lucide.dev/) — ícones

## Como rodar

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

Outros comandos:

```bash
npm run build   # build de produção
npm run start   # sobe o build
npm run lint    # checagem do ESLint
```

## Estrutura

```
src/
  app/                # rotas (App Router): /, /vitrine-pro, /planos, /sobre, /apps
    layout.tsx        # layout raiz: fontes, metadata, JSON-LD, Navbar/Footer
    globals.css       # estilos base + tokens
    sitemap.ts        # sitemap dinâmico
    robots.ts         # robots.txt
  components/
    ui/               # primitivos: Button, Card, Section, Container, Badge
    layout/           # Navbar, Footer
    sections/         # CtaSection
    Logo.tsx, PlanCard.tsx, FeatureItem.tsx, WhatsappButton.tsx
  data/               # conteúdo: planos, recursos, empresa
  lib/                # site (config), whatsapp (helper), cn
```

## Design System

Tokens e regras visuais em [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md).
Cor de marca: `#0054A6` (gradiente `#00AEEF` → `#0054A6`).

## Padrões de código

O projeto traz um "arquiteto de front-end" como Cursor Rules em [`.cursor/rules/`](./.cursor/rules):

- `frontend-architect.mdc` — arquitetura, segurança, semântica e acessibilidade
- `design-system.mdc` — aderência ao design system

Especificação em [`FRONTEND_ARCHITECT.md`](./FRONTEND_ARCHITECT.md).

## Contato (configuração)

Dados centralizados em `src/lib/site.ts` (WhatsApp, e-mail, cidade, horário).
Os botões de CTA abrem o WhatsApp (`wa.me`) com mensagem pré-preenchida.
