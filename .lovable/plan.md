# Landing Page — Salete Alimentos

Site single-page em `/`, clean, paleta `#c3233c` / `#ffb45a` / `#fff`.

## Estrutura

1. **Header / Hero** — logo Salete + título + intro:
   > "São mais de 30 anos de história em Floripa, com tradição, qualidade e muito sabor."
2. **Selo "Sem conservantes"** — faixa amarela antes do catálogo.
3. **Catálogo** — cards com imagem + nome; clique abre lightbox (Dialog do shadcn). Placeholders reservados nos produtos sem foto.
   - **Empanadas Salgadas**: Calabresa, Calabresa c/ Cheddar, Camarão, Carne Bolonhesa, Carne ao Molho Branco, Frango, Frango (integral), Frango c/ Palmito, Frango c/ Requeijão, Frango c/ Requeijão (integral), Frango milho e bacon, Frango Premium, Mexicana, Pizza, Presunto e Queijo, Ricota c/ Chester e Alho Poró, Ricota c/ Tomate Seco → 4 primeiros já com as imagens enviadas.
   - **Empanadas Vegetarianas**: Brócolis c/ Requeijão, Legumes, Palmito, Queijo.
   - **Empanadas Doces**: Chocolate.
   - **Salgados & Petiscos**: Coxinha de Frango, Salsicha, Doguinho, Pão de Queijo.
4. **Vídeos** — seção com 2 containers reservados para vídeos futuros.
5. **Contato** — WhatsApp (`https://wa.me/5548984440456`) + Instagram (`https://www.instagram.com/salete.alimentos/`).
6. **Footer** — logo pequena + copyright.

## Detalhes técnicos

- Tipografia: **Fraunces** (títulos) + **Manrope** (corpo), via `<link>` no `__root.tsx`.
- Tokens de cor da marca em `src/styles.css` (oklch): `--brand-red`, `--brand-yellow`, `--brand-white`.
- `body { user-select: none }` (com prefixos `-webkit-` e `-ms-`) em `src/styles.css`.
- Animações **fade-up on scroll**: hook `useInView` com IntersectionObserver + componente `<Reveal>` aplicando classe de fade+translateY quando entra no viewport. Sem libs extras.
- `ProductCard` reutilizável; produtos em array tipado com `image?`. Sem imagem → placeholder estilizado (ícone + nome sobre fundo suave).
- Lightbox via `Dialog` do shadcn.
- Logo + 4 imagens registradas via `lovable-assets` a partir de `/mnt/user-uploads/`.
- SEO: title/description/OG atualizados em `__root.tsx`.
- Responsivo (grid 2 col mobile / 3–4 col desktop).

## ⚠️ Sobre GitHub Pages

Este template é **TanStack Start com SSR rodando em edge worker** — GitHub Pages só serve arquivos estáticos, então o build padrão **não funciona** lá diretamente. Duas opções:

1. **Recomendado**: publicar pelo próprio Lovable (botão Publish) — já hospeda em `.lovable.app` sem configuração e suporta domínio próprio.
2. **Se você faz questão do GitHub Pages**: precisamos configurar o TanStack Start em modo SPA/pré-render estático (ajustar `vite.config.ts` para gerar apenas `dist/` estático, adicionar `base` path do repositório e um `404.html` de fallback). Posso fazer esse ajuste, mas some parte do SSR/SEO server-side. Como o site é 100% estático (sem backend), a conversão é viável.

**Como quer seguir? (1) publicar via Lovable, ou (2) eu já configuro para GitHub Pages?** Vou implementar a landing agora e aguardo sua resposta sobre a hospedagem antes do ajuste final de build.
