# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start development server at localhost:3000
- `npm run build` — production build (static pre-rendering, all pages must compile)
- `npm run lint` — run ESLint (Next.js core-web-vitals + TypeScript rules)
- `npm start` — serve the production build

## Architecture

This is a personal portfolio website built with **Next.js 16** (App Router), **TypeScript**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide React** icons.

### Content-data separation

All personal content lives in `src/data/` as typed TypeScript objects. Components read from these files — updating the website's content only requires editing data files, never component code:

- `profile.ts` — name, title, bio, location, social links
- `resume.ts` — summary, skills array, key highlights
- `experience.ts` — jobs (with achievements), education, certifications (exports `Job`, `Education`, `Certification` interfaces)
- `projects.ts` — project entries with tech stacks and links (exports `Project` interface)
- `work-log.ts` — quarterly accomplishments organized by year (exports `YearLog`, `Quarter`, `Accomplishment` interfaces)

### Pages

Four routes using Next.js App Router (`src/app/`):

| Route | Page file | Key components |
|---|---|---|
| `/` | `page.tsx` | `HeroSection`, `ResumeSection` |
| `/experience` | `experience/page.tsx` | `Timeline`, `TimelineItem`, `EducationCard`, `SkillBadges` |
| `/projects` | `projects/page.tsx` | `ProjectGrid`, `ProjectCard` |
| `/work-log` | `work-log/page.tsx` | `QuarterSection`, `AccomplishmentItem` |

### Shared layout

`src/app/layout.tsx` wraps all pages with `Navbar` and `Footer` from `src/components/layout/`. The navbar includes navigation links, mobile hamburger menu, and dark/light mode toggle.

## Styling

Tailwind CSS v4 with CSS-based configuration (no `tailwind.config.ts`). Custom theme colors are defined as CSS variables in `src/app/globals.css` and mapped to Tailwind via `@theme inline`. There are separate light (`:root`) and dark (`.dark`) variable sets.

Dark mode uses `@custom-variant dark (&:where(.dark, .dark *))` and is toggled by adding/removing the `dark` class on `<html>`. Theme preference is persisted to localStorage and falls back to system preference.

Use the semantic color names in Tailwind classes: `background`, `foreground`, `muted`, `muted-foreground`, `primary`, `primary-foreground`, `card`, `card-foreground`, `border`, `accent`, `accent-light`.

## Patterns

- **Client components**: Components using Framer Motion, hooks, or browser APIs are marked `"use client"`. Pages that only compose components stay as server components (except `/work-log` which has client-side year filtering state).
- **Animations**: Framer Motion `whileInView` with `viewport={{ once: true }}` for scroll-triggered entrance animations. Staggered delays via `index * 0.1` on list items.
- **Utility**: `cn()` from `src/lib/utils.ts` merges class names (wraps `clsx`).
- **Path alias**: `@/*` maps to `./src/*` for all imports.
