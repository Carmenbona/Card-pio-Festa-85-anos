# PEU 85 Anos · Jantar de Celebração

Site do jantar de celebração dos 85 anos da PEU (19 de novembro de 2026). Reúne em uma única página o cardápio do jantar, o cardápio de drinks do bartender, as sobremesas (bolo folhado de morango, mousse de chocolate e Picolés Bids), as atrações (sinuca, pebolim e plataforma 360°) e um formulário de confirmação de presença.

## Tecnologias

- TanStack Start + React 19 + Tailwind CSS 4
- Netlify Forms para as confirmações de presença (formulário `confirmacao`)
- Netlify Image CDN para servir as imagens otimizadas em WebP

## Rodando localmente

```bash
pnpm install
netlify dev
```

O envio do formulário só é processado em um deploy na Netlify (ou via `netlify dev`). As confirmações aparecem no painel da Netlify em **Forms → confirmacao**.

## Editando o conteúdo

Todos os textos e cardápios estão em `src/data/evento.ts`. As imagens ficam em `public/img/`.
