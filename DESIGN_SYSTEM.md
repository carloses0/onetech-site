# OneTech Solutions — Design System

Guia de identidade visual e design system derivado do logo da OneTech Solutions.
Use como referência única para a implementação do site (Next.js + Tailwind CSS).

---

## 1. Marca

- **Nome:** OneTech Solutions
- **Produto principal:** Vitrine Pro
- **Personalidade:** profissional, inovadora, clean, corporate-tech
- **Símbolo:** anel circular 3D em charcoal com brilho azul elétrico nas fendas (estiliza a letra "O")
- **Logotipo:** "ONE" em gradiente azul (`#00AEEF` → `#0054A6`) + "TECH" em charcoal (`#1A1A1B`); subtítulo "SOLUTIONS" em caps com tracking amplo, flanqueado por linhas em gradiente azul

---

## 2. Paleta de cores

### Cor primária (marca)
| Token | Hex | Uso |
|---|---|---|
| `brand` | `#0054A6` | Cor principal, CTAs, links, destaques |
| `brand-400` | `#00AEEF` | Gradiente (parada clara), destaques leves |
| `brand-hover` | `#004388` (`brand-600`) | Estado hover de botões/links primários |

### Escala do azul (brand 50–900)
| Token | Hex | Uso sugerido |
|---|---|---|
| `brand-50` | `#E6F6FD` | Fundos suaves, badges, hovers leves |
| `brand-100` | `#CCECFA` | Fundos de seção destacada |
| `brand-200` | `#99D9F5` | Bordas suaves |
| `brand-300` | `#66C6F0` | Ícones secundários |
| `brand-400` | `#00AEEF` | Gradiente (parada clara) |
| `brand-500` | `#0054A6` | Cor base da marca |
| `brand-600` | `#004388` | Hover / ênfase |
| `brand-700` | `#003266` | Texto sobre fundo claro |
| `brand-800` | `#002244` | Detalhes escuros |
| `brand-900` | `#001122` | Contraste máximo |

### Neutros
| Token | Hex | Uso |
|---|---|---|
| `ink` | `#1A1A1B` | Títulos fortes, texto "TECH" do logo |
| `slate-700` | `#334155` | Títulos / texto forte |
| `slate-500` | `#64748B` | Texto de apoio / subtítulos |
| `slate-400` | `#94A3B8` | Texto desabilitado / legendas |
| `slate-200` | `#E2E8F0` | Bordas, divisores |
| `bg` | `#FFFFFF` | Fundo padrão |
| `bg-soft` | `#F7F8FA` | Fundo de seções alternadas |

### Cores de estado
| Token | Hex | Uso |
|---|---|---|
| `whatsapp` | `#22C55E` | Botão/ícone de WhatsApp |
| `whatsapp-hover` | `#16A34A` | Hover do WhatsApp |
| `success` | `#16A34A` | Mensagens de sucesso |
| `warning` | `#F59E0B` | Avisos / promoções com prazo |
| `danger` | `#EF4444` | Erros / "esgotado" |

### Gradiente de marca
`linear-gradient(135deg, #00AEEF 0%, #0054A6 100%)` — usar com moderação em heros e destaques.

---

## 3. Tipografia

- **Títulos (display):** Poppins ou Sora (geométrica, sem serifa) — ecoa o logo
- **Corpo de texto:** Inter
- **Carregamento:** `next/font` (Google Fonts), com `display: swap`

### Escala tipográfica
| Token | Tamanho / line-height | Peso | Uso |
|---|---|---|---|
| `display` | 56 / 1.1 | 700 | Hero H1 |
| `h1` | 40 / 1.15 | 700 | Título de página |
| `h2` | 32 / 1.2 | 600 | Seção |
| `h3` | 24 / 1.3 | 600 | Subseção / card |
| `body-lg` | 18 / 1.6 | 400 | Parágrafo destaque |
| `body` | 16 / 1.6 | 400 | Texto padrão |
| `small` | 14 / 1.5 | 400 | Legendas |
| `overline` | 13 / 1.4 | 600 | Rótulos (uppercase, tracking +) |

- Títulos com `letter-spacing` levemente ampliado (`tracking-tight` a `tracking-normal`) e rótulos/overline em `uppercase` com `tracking-wide` para ecoar o logo.

---

## 4. Espaçamento e layout

- **Grid base:** múltiplos de 4px (escala Tailwind padrão)
- **Container:** largura máx. `max-w-7xl` (1280px), padding lateral `px-4 md:px-6 lg:px-8`
- **Espaçamento de seção:** `py-16 md:py-24`
- **Respiro:** layout minimalista, bastante whitespace entre blocos

---

## 5. Raios, sombras e bordas

| Token | Valor | Uso |
|---|---|---|
| `radius-sm` | 8px (`rounded-lg`) | Inputs, badges |
| `radius-md` | 12px (`rounded-xl`) | Botões, cards pequenos |
| `radius-lg` | 16px (`rounded-2xl`) | Cards, painéis |
| `radius-full` | 9999px | Pills, avatares |

| Sombra | Valor | Uso |
|---|---|---|
| `shadow-soft` | `0 1px 3px rgba(15,23,42,.08), 0 1px 2px rgba(15,23,42,.04)` | Cards em repouso |
| `shadow-card` | `0 8px 24px rgba(15,23,42,.08)` | Cards elevados / hover |
| `shadow-brand` | `0 8px 24px rgba(0,84,166,.25)` | Botão primário / destaque |

- Bordas padrão: `1px solid #E2E8F0` (`border-slate-200`).

---

## 6. Componentes-base

### Button
- **Variantes:** `primary` (fundo `#0054A6`, texto branco, hover `#004388`), `secondary` (fundo branco, borda slate-200, texto slate-700), `ghost` (sem fundo), `whatsapp` (fundo `#22C55E`, ícone do WhatsApp)
- **Tamanhos:** `sm`, `md` (padrão), `lg`
- **Estilo:** `rounded-xl`, `font-medium`, transição suave, foco visível (anel `brand-200`)

### Card
- Fundo branco, `rounded-2xl`, `shadow-soft`, padding `p-6 md:p-8`, hover eleva para `shadow-card`

### PlanCard
- Card de plano com: nome, preço/mês, lista de inclusos, CTA WhatsApp
- Variante **destaque** (Profissional / "mais vendido"): borda `brand`, badge superior `#0054A6`, leve escala

### FeatureItem
- Ícone em círculo `brand-50` com glifo `brand-600`, título h3, descrição em slate-500

### Navbar
- Fundo branco translúcido com blur ao rolar, logo à esquerda, links centrais, CTA WhatsApp à direita; menu hambúrguer no mobile

### Footer
- Fundo `slate-800`/escuro, logo em container branco arredondado, links de páginas, contato (WhatsApp, e-mail, Goiânia), direitos autorais

### Badge / Pill
- `rounded-full`, texto `small`, usado para "mais vendido", "promoção", status de estoque

---

## 7. Iconografia
- Biblioteca: `lucide-react` (traço fino, consistente com o estilo geométrico)
- Tamanho padrão: 20–24px; cor herda do contexto (`brand` ou `slate`)

---

## 8. Acessibilidade
- Contraste mínimo AA: texto sobre `#0054A6` deve ser branco; evitar texto cinza claro sobre branco em tamanhos pequenos
- Foco sempre visível (anel `brand-200`)
- Áreas clicáveis ≥ 44x44px no mobile

---

## 9. Tokens Tailwind (referência para `tailwind.config.ts`)

```ts
// theme.extend
colors: {
  brand: {
    DEFAULT: "#0054A6",
    50: "#E6F6FD", 100: "#CCECFA", 200: "#99D9F5", 300: "#66C6F0",
    400: "#00AEEF", 500: "#0054A6", 600: "#004388", 700: "#003266",
    800: "#002244", 900: "#001122",
  },
  ink: "#1A1A1B",
  whatsapp: { DEFAULT: "#22C55E", hover: "#16A34A" },
},
borderRadius: { xl: "12px", "2xl": "16px" },
boxShadow: {
  soft: "0 1px 3px rgba(15,23,42,.08), 0 1px 2px rgba(15,23,42,.04)",
  card: "0 8px 24px rgba(15,23,42,.08)",
  brand: "0 8px 24px rgba(0,84,166,.25)",
},
backgroundImage: {
  "brand-gradient": "linear-gradient(135deg,#00AEEF 0%,#0054A6 100%)",
},
```

---

## 10. Variáveis CSS (referência para `globals.css`)

```css
:root {
  --brand: #0054A6;
  --brand-hover: #004388;
  --ink: #1A1A1B;
  --slate-700: #334155;
  --slate-500: #64748B;
  --slate-200: #E2E8F0;
  --bg: #FFFFFF;
  --bg-soft: #F7F8FA;
  --whatsapp: #22C55E;
  --radius-md: 12px;
  --radius-lg: 16px;
}
```
