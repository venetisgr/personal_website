# Implementation Plan

This document describes the step-by-step implementation plan in a structured format.
Each step includes what to do, which files are involved, and acceptance criteria.

---

## Step 1: Project Initialization

**Goal:** Set up a working Next.js project with TypeScript and Tailwind CSS.

**Actions:**
1. Run `npx create-next-app@latest` with TypeScript, Tailwind, App Router, and ESLint enabled
2. Clean out the default boilerplate content from `app/page.tsx` and `globals.css`
3. Install additional dependencies: `framer-motion`, `lucide-react`, `clsx`
4. Create the folder structure: `components/`, `data/`, `lib/`
5. Verify `npm run dev` starts without errors

**Files created/modified:**
- `package.json` (auto-generated, then updated with new deps)
- `tsconfig.json` (auto-generated)
- `tailwind.config.ts` (auto-generated)
- `src/app/layout.tsx` (clean boilerplate)
- `src/app/page.tsx` (clean boilerplate)
- `src/styles/globals.css` (clean boilerplate)

**Done when:** `npm run dev` serves a blank page at `localhost:3000` with no errors.

---

## Step 2: Shared Layout - Navbar & Footer

**Goal:** Build the persistent navigation bar and footer that appear on every page.

**Actions:**
1. Create `src/components/layout/Navbar.tsx`
   - Logo/name on the left
   - Navigation links on the right: Home, Experience, Projects, Work Log
   - Mobile hamburger menu for small screens
   - Active link highlighting based on current route
2. Create `src/components/layout/Footer.tsx`
   - Social media icon links (GitHub, LinkedIn, Email)
   - Copyright line
3. Update `src/app/layout.tsx` to include Navbar and Footer wrapping all pages
4. Create `src/data/profile.ts` with name, title, and social links

**Files created/modified:**
- `src/components/layout/Navbar.tsx`
- `src/components/layout/Footer.tsx`
- `src/app/layout.tsx`
- `src/data/profile.ts`

**Done when:** Every page shows the navbar at top and footer at bottom. Navigation links route to the correct pages. Mobile menu works.

---

## Step 3: Home Page - Hero + Resume

**Goal:** Build the landing page with an about-me section and inline resume.

**Actions:**
1. Create `src/components/home/HeroSection.tsx`
   - Display name in large text
   - Title/role below the name
   - 3-4 sentence bio paragraph
   - Row of social link icons
2. Create `src/components/home/ResumeSection.tsx`
   - Render resume content inline (summary, skills as badges, key highlights)
   - "Download Resume" button that links to a PDF in `/public/`
3. Create `src/data/resume.ts` with structured resume data
4. Wire both components into `src/app/page.tsx`
5. Add placeholder content (user will replace with real data later)

**Files created/modified:**
- `src/components/home/HeroSection.tsx`
- `src/components/home/ResumeSection.tsx`
- `src/data/profile.ts` (add bio)
- `src/data/resume.ts`
- `src/app/page.tsx`

**Done when:** Home page shows the hero section with bio and a resume section below it. Download button is present.

---

## Step 4: Experience Page

**Goal:** Build a page showing work history as a timeline, plus education and certifications.

**Actions:**
1. Create `src/components/experience/Timeline.tsx` - vertical timeline container
2. Create `src/components/experience/TimelineItem.tsx` - single job entry with date, company, role, bullets
3. Create `src/components/experience/EducationCard.tsx` - education entries
4. Create `src/components/experience/SkillBadges.tsx` - skill/certification tags
5. Create `src/data/experience.ts` with structured work history, education, certifications
6. Wire components into `src/app/experience/page.tsx`
7. Add scroll-triggered animations using Framer Motion

**Files created/modified:**
- `src/components/experience/Timeline.tsx`
- `src/components/experience/TimelineItem.tsx`
- `src/components/experience/EducationCard.tsx`
- `src/components/experience/SkillBadges.tsx`
- `src/data/experience.ts`
- `src/app/experience/page.tsx`

**Done when:** Experience page renders a timeline of jobs, education cards, and skill badges. Animations trigger on scroll.

---

## Step 5: Projects Page

**Goal:** Build a project showcase with cards in a responsive grid.

**Actions:**
1. Create `src/components/projects/ProjectCard.tsx`
   - Project image/screenshot placeholder
   - Title, description, tech stack tags
   - Links to live demo and source code
   - Hover effects (scale, shadow)
2. Create `src/components/projects/ProjectGrid.tsx` - responsive grid (1 col mobile, 2 col tablet, 3 col desktop)
3. Create `src/data/projects.ts` with project entries
4. Wire into `src/app/projects/page.tsx`

**Files created/modified:**
- `src/components/projects/ProjectCard.tsx`
- `src/components/projects/ProjectGrid.tsx`
- `src/data/projects.ts`
- `src/app/projects/page.tsx`

**Done when:** Projects page shows a responsive grid of project cards with hover effects. Links are clickable.

---

## Step 6: Work Log Page

**Goal:** Build a quarterly work accomplishment log with year filtering.

**Actions:**
1. Create `src/components/work-log/QuarterSection.tsx` - displays one quarter's accomplishments
2. Create `src/components/work-log/AccomplishmentItem.tsx` - single accomplishment entry
3. Create `src/data/work-log.ts` with accomplishments organized by year and quarter
4. Add year filter/selector (tabs or buttons) with client-side state
5. Wire into `src/app/work-log/page.tsx`

**Files created/modified:**
- `src/components/work-log/QuarterSection.tsx`
- `src/components/work-log/AccomplishmentItem.tsx`
- `src/data/work-log.ts`
- `src/app/work-log/page.tsx`

**Done when:** Work log page shows quarterly sections. Year filter switches between years. Content renders correctly.

---

## Step 7: Visual Polish

**Goal:** Add animations, dark mode, and overall visual refinement.

**Actions:**
1. Add page transition animations with Framer Motion (fade/slide between pages)
2. Implement dark/light mode toggle
   - Store preference in localStorage
   - Toggle button in the Navbar
   - Use Tailwind `dark:` variants for all components
3. Add subtle hover and entrance animations to cards and timeline items
4. Refine typography, spacing, and color scheme
5. Ensure consistent styling across all pages

**Files modified:**
- `src/app/layout.tsx` (theme provider)
- `src/components/layout/Navbar.tsx` (theme toggle)
- `src/styles/globals.css` (CSS variables for themes)
- Various component files (add `dark:` classes, motion wrappers)

**Done when:** Dark/light toggle works and persists. Pages transition smoothly. Hover effects feel polished.

---

## Step 8: Responsiveness & SEO

**Goal:** Ensure the site works on all devices and is discoverable by search engines.

**Actions:**
1. Test and fix layout on mobile (320px), tablet (768px), and desktop (1280px+)
2. Add meta tags to `layout.tsx` (title, description, Open Graph, Twitter cards)
3. Add a `favicon.ico` and `apple-touch-icon`
4. Ensure all images have alt text
5. Run Lighthouse audit and address issues

**Files modified:**
- `src/app/layout.tsx` (metadata export)
- Various component files (responsive classes)

**Done when:** Site scores 90+ on Lighthouse for Performance, Accessibility, Best Practices, and SEO.

---

## Step 9: Deployment

**Goal:** Deploy the site to the internet.

**Actions:**
1. Push code to GitHub
2. Connect the GitHub repo to Vercel
3. Configure build settings (auto-detected for Next.js)
4. Deploy and verify the live site
5. (Optional) Configure a custom domain

**Done when:** Site is live at a public URL. All pages load correctly in production.

---

## Key Principles

- **Content lives in `src/data/`**: All personal content (bio, resume, projects, etc.) is stored in TypeScript data files. To update the website content, only these files need to change -- no component code needs to be touched.
- **Components are reusable**: Each component does one thing. This makes it easy to rearrange or add new sections later.
- **Mobile-first**: Build for small screens first, then add styles for larger screens using Tailwind breakpoints (`md:`, `lg:`).
- **Progressive enhancement**: The site works without JavaScript (SSG renders HTML), then animations enhance the experience when JS loads.
