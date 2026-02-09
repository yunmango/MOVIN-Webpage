# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Workflow Rules

- Original site: https://www.movin3d.com/
- After any code change, always use Playwriter MCP to compare the local result against the original site and verify they match
- Package manager: pnpm (do not use npm)

## Commands

```bash
pnpm dev      # Start dev server (Next.js)
pnpm build    # Production build
pnpm start    # Start production server
pnpm lint     # ESLint (flat config)
```

No test framework is configured.

## Architecture

Next.js 16 App Router site cloning [movin3d.com](https://movin3d.com). React 19, TypeScript 5, Tailwind CSS v4, shadcn/ui (new-york style).

### Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — 9 sections (Hero → Mission) |
| `/tracin` | Product detail page |
| `/studio` | Software page |
| `/about` | Company mission |
| `/downloads` | Software/plugins downloads |
| `/online-demo` | Demo video + booking form |

### Key Directories

- `src/components/home/` — Homepage sections, each a `"use client"` component
- `src/components/layout/` — Navbar, Footer, MobileMenu
- `src/components/shared/` — Reusable wrappers (SectionWrapper, VideoBackground, ScrollReveal, LogoMarquee)
- `src/lib/constants.ts` — All CDN URLs, video/image paths, external links
- `src/lib/fonts.ts` — 4 Google Fonts with CSS variables
- `src/data/` — Navigation items, footer link columns

### Path Alias

`@/*` maps to `./src/*`

## Tailwind CSS v4

This project uses **Tailwind v4** which has a fundamentally different config approach:

- **No `tailwind.config.ts`** — all theming is in `src/app/globals.css` via `@theme inline {}` block
- Uses `@import "tailwindcss"` + `@tailwindcss/postcss` plugin
- Custom CSS variables for fonts, colors, and animations are defined in the `@theme` block
- shadcn/ui integrated via `@import "shadcn/tailwind.css"`

## Fonts

Four fonts loaded via `next/font/google` in `src/lib/fonts.ts`, applied as CSS variables on `<html>`:

| Font | Variable | Usage |
|------|----------|-------|
| Darker Grotesque | `--font-darker-grotesque` | Headings (`font-heading`) |
| Instrument Sans | `--font-instrument-sans` | Body text (`font-body`) |
| Sora | `--font-sora` | Navigation/UI (`font-ui`) |
| Lato | `--font-lato` | Auxiliary text (`font-lato`) |

## CDN Assets

All media assets are served from `https://cdn.prod.website-files.com/695f687260d6343da08eda81`. URLs are centralized in `src/lib/constants.ts` (`VIDEOS`, `IMAGES` objects). Videos have both MP4 and WebM variants.

`next.config.ts` whitelists `cdn.prod.website-files.com` for `next/image`.

## Navbar Behavior

The navbar (`src/components/layout/navbar.tsx`) uses a `DARK_HERO_ROUTES` array to determine initial text color. Routes with dark hero backgrounds (e.g., `/`, `/tracin`) start with white text; on scroll past 50px, it switches to a white background with black text. This is driven by `useScrollPosition` hook + `usePathname`.

## 3D Simulator

The Three.js simulator (`src/components/home/simulator-section.tsx`) uses `next/dynamic` with `{ ssr: false }` to avoid hydration issues. `@react-three/fiber` and `@react-three/drei` are the rendering libraries.

## Component Conventions

- All interactive components use `"use client"` directive
- Scroll-based animations use Framer Motion via the `ScrollReveal` wrapper
- Before/after comparisons use `react-compare-slider`
- Carousels use `embla-carousel-react` through shadcn's Carousel component
- Styling utility: `cn()` from `src/lib/utils.ts` (clsx + tailwind-merge)
