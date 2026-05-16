<div align="center">

# Locus

**Production-grade real estate marketing** on **Next.js App Router** — clear boundaries, typed React, and client components only where the browser demands it.

[![Live demo](https://img.shields.io/badge/Live-locus--black.vercel.app-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://locus-black.vercel.app)
[![Repository](https://img.shields.io/badge/GitHub-sergeykovalev3%2Flocus-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/sergeykovalev3/locus)

<br />

### Stack

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=20232a)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Swiper](https://img.shields.io/badge/Swiper-12-6332F6?style=for-the-badge&logo=swiper&logoColor=white)](https://swiperjs.com)
[![Lucide](https://img.shields.io/badge/Lucide_Icons-latest-000000?style=for-the-badge&logo=lucide&logoColor=white)](https://lucide.dev)
[![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org)
[![pnpm](https://img.shields.io/badge/pnpm-package-F69220?style=for-the-badge&logo=pnpm&logoColor=white)](https://pnpm.io)

<sub>Utilities: **clsx** · PostCSS **`@tailwindcss/postcss`** · **eslint-config-next**</sub>

<br />

</div>

## Overview

| Layer | Choice |
|--------|--------|
| Framework | **Next.js 16** — App Router, RSC-first |
| UI | **React 19** · **TypeScript 5** |
| Styling | **Tailwind CSS v4** (`@tailwindcss/postcss`) |
| Motion | **Framer Motion** |
| Carousels | **Swiper 12** — helpers in `lib/` |
| Icons | **Lucide React** |
| Class names | **clsx** |
| Quality | **ESLint 9** + `eslint-config-next` |

## Project structure

Routes live in **`app/`**. Page composition is split into **`sections/`** (per route). **`components/`** holds reusable UI; **`lib/`** — utilities, config, and data helpers.

```
locus/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   ├── loading.tsx
│   ├── error.tsx
│   ├── not-found.tsx
│   ├── robots.ts
│   ├── sitemap.ts
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── properties/page.tsx
│   ├── services/page.tsx
│   ├── property/page.tsx
│   └── property/[slug]/page.tsx
├── components/
│   ├── btns/
│   ├── elements/          # forms, search, stats, filter item
│   ├── features/
│   ├── layout/            # Header, Footer, SectionHeader
│   ├── navigation/
│   └── visuals/           # parallax / decorative panels
├── sections/
│   ├── about/
│   ├── contact/
│   ├── home/
│   ├── properties/
│   ├── property/
│   ├── services/
│   └── shared/            # FAQ, values, features, CTAs
├── lib/
│   ├── data/
│   └── *.ts               # filters, fonts, swiper helpers, site config
├── public/
├── eslint.config.mjs
├── next.config.ts
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Scripts

| Command | Description |
|---------|-------------|
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | ESLint |
| `pnpm lint:fix` | ESLint with auto-fix |

## Getting started

**Requirements:** **Node.js 20+** (LTS recommended) and **pnpm** (or adapt commands for npm/yarn).

```bash
git clone https://github.com/sergeykovalev3/locus.git
cd locus
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

Production check:

```bash
pnpm build
pnpm start
```

## License

Private / all rights reserved — adjust if you publish under a license.
