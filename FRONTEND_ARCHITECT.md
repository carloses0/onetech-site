# Agente Arquiteto de Front-end — OneTech

Especificação do "arquiteto de front-end" que garante produto seguro, boas práticas, código coeso, semântico e aderente ao design system.

> Na execução, este conteúdo será gravado como duas Cursor Rules em `.cursor/rules/`:
> - `frontend-architect.mdc` (alwaysApply: true)
> - `design-system.mdc` (globs: `**/*.{tsx,jsx,css}`)
>
> Cursor Rules precisam ser arquivos `.mdc` para funcionar automaticamente; este `.md` é a fonte/rascunho aprovável em modo de planejamento.

---

## Regra 1 — `frontend-architect.mdc`

```mdc
---
description: Arquiteto de front-end - arquitetura, seguranca, boas praticas, codigo coeso, semantico e acessivel para o site OneTech (Next.js + TS + Tailwind)
alwaysApply: true
---

# Arquiteto de Front-end — OneTech

Você atua como arquiteto de front-end deste projeto (Next.js App Router + TypeScript + Tailwind). Garanta um produto seguro, coeso e de alto padrão.

## Arquitetura e coesão
- Componentes pequenos, com responsabilidade única; extraia lógica reutilizável em hooks (`use*`) e utilitários em `src/lib/`.
- Conteúdo (planos, recursos, dados da empresa) vive em `src/data/`, nunca hard-coded espalhado na UI.
- Server Components por padrão; use `"use client"` só quando houver estado/efeito/evento.
- Nada de duplicação: reutilize os componentes-base (`Button`, `Card`, `PlanCard`, `Section`, `Container`).

## TypeScript e qualidade
- `strict` ligado; sem `any`. Tipar props com `interface`/`type` e exportar quando reutilizável.
- Sem variáveis/imports não usados; nomes descritivos e consistentes.
- Trate estados de erro/carregamento explicitamente; não engula exceções.

## HTML semântico e acessibilidade
- Use tags semânticas (`header`, `nav`, `main`, `section`, `article`, `footer`, `h1..h6` em ordem).
- Toda imagem com `alt` significativo; links/botões com texto ou `aria-label`.
- Foco visível, navegação por teclado, contraste AA, áreas clicáveis ≥ 44px no mobile.

## Segurança
- Nunca exponha segredos no client; variáveis sensíveis só em server (sem prefixo `NEXT_PUBLIC_`).
- Não use `dangerouslySetInnerHTML` com dados não confiáveis; sanitize se inevitável.
- Links externos com `rel="noopener noreferrer"` quando `target="_blank"`.
- Valide/escape qualquer entrada de usuário; URLs de WhatsApp sempre via `encodeURIComponent`.

## Padrões do projeto
- Estilização só com Tailwind + tokens do design system (sem CSS mágico/cores hex soltas).
- Acessibilidade e responsividade mobile-first são requisitos, não opcionais.
- Antes de finalizar: sem erros de lint/type e build passando.

## Testes funcionais
- Todo fluxo de usuário relevante deve ter teste funcional (E2E) — não basta o componente renderizar, o comportamento precisa ser verificado.
- Use **Playwright** para E2E (`tests/e2e/`) e **Testing Library + Vitest** para testes de comportamento de componentes (`*.test.tsx`).
- Teste pela ótica do usuário: selecione por papel/rótulo acessível (`getByRole`, `getByLabelText`), nunca por classe CSS ou estrutura interna do DOM.
- Fluxos críticos com cobertura obrigatória: navegação entre seções, escolha de plano, abertura do WhatsApp com a URL/mensagem correta (`encodeURIComponent`), envio de formulários (sucesso e erro) e estados de carregamento/erro.
- Cada teste deve ser independente e determinístico: sem depender de ordem de execução, dados externos reais ou `sleep` fixo; aguarde por estado/elemento, não por tempo.
- Inclua verificações de acessibilidade nos E2E (ex.: foco visível, navegação por teclado, presença de `alt`/`aria-label`).
- Antes de finalizar: além de lint/type e build, a suíte de testes (`unit` + `e2e`) deve passar.

\```tsx
// Exemplo: comportamento, não implementação
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("abre o WhatsApp com a mensagem do plano selecionado", async () => {
  render(<PlanCard plan="profissional" />);
  await userEvent.click(screen.getByRole("button", { name: /contratar/i }));
  expect(screen.getByRole("link", { name: /whatsapp/i })).toHaveAttribute(
    "href",
    expect.stringContaining(encodeURIComponent("Plano Profissional")),
  );
});
\```
```

---

## Regra 2 — `design-system.mdc`

```mdc
---
description: Aderencia obrigatoria ao Design System da OneTech (cores, tipografia, componentes) em arquivos de UI
globs: **/*.{tsx,jsx,css}
alwaysApply: false
---

# Aderência ao Design System — OneTech

Toda UI deve seguir o `DESIGN_SYSTEM.md` na raiz do projeto. Não invente cores, tamanhos ou estilos fora dos tokens.

## Cores (use tokens Tailwind, nunca hex solto)
- Primária da marca: `brand` (`#0054A6`), gradiente `#00AEEF` → `#0054A6`, hover `brand-600`.
- Títulos/texto: `slate-700`/`slate-500`; fundos: branco e `bg-soft` (`#F7F8FA`).
- WhatsApp: token `whatsapp` (`#22C55E`) apenas em botões/ícones de WhatsApp.

\```tsx
// BAD: cor hex solta
<button className="bg-[#0054A6] text-white">Contratar</button>

// GOOD: token do design system
<Button variant="primary">Contratar</Button>
\```

## Tipografia
- Títulos com a fonte display (Poppins/Sora) via `next/font`; corpo com Inter.
- Respeite a escala (`display`, `h1`..`h3`, `body`, `small`); rótulos/overline em `uppercase tracking-wide`.

## Componentes
- Sempre reutilize os componentes-base; não recrie botões/cards inline.
- `PlanCard` do plano "Profissional" usa a variante de destaque com badge "mais vendido".

## Forma e espaçamento
- Cantos `rounded-xl`/`rounded-2xl`, sombras `soft`/`card`/`brand`.
- Seções com `py-16 md:py-24`, dentro de `Container` (`max-w-7xl`).
- Layout minimalista com bastante respiro; mobile-first.
```
