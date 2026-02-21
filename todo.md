# Project Todo List

Track all tasks for the personal portfolio website build.
Status: `[ ]` = pending, `[~]` = in progress, `[x]` = done

---

## Phase 1: Foundation
- [x] Install Node.js and verify version (v18+)
- [x] Initialize Next.js project with TypeScript, Tailwind CSS, App Router
- [x] Remove default boilerplate content
- [x] Install additional packages: framer-motion, lucide-react, clsx
- [x] Create folder structure: components/, data/, lib/
- [x] Verify dev server runs at localhost:3000

## Phase 2: Shared Layout
- [x] Create Navbar component with navigation links
- [x] Add mobile hamburger menu to Navbar
- [x] Add active link highlighting to Navbar
- [x] Create Footer component with social links and copyright
- [x] Create profile data file (name, title, social URLs)
- [x] Update root layout to wrap pages with Navbar + Footer

## Phase 3: Home Page
- [x] Build HeroSection component (name, title, bio, social icons)
- [x] Build ResumeSection component (inline resume display)
- [x] Create resume data file (summary, skills, highlights)
- [x] Add "Download Resume as PDF" button
- [ ] Add placeholder profile photo or avatar
- [x] Wire components into home page
- [x] Make home page responsive

## Phase 4: Experience Page
- [x] Build Timeline container component
- [x] Build TimelineItem component (date, company, role, bullets)
- [x] Build EducationCard component
- [x] Build SkillBadges component
- [x] Create experience data file (jobs, education, certifications)
- [x] Wire components into experience page
- [x] Add scroll-triggered Framer Motion animations

## Phase 5: Projects Page
- [x] Build ProjectCard component (image, title, description, tech tags, links)
- [x] Build ProjectGrid component (responsive grid layout)
- [x] Create projects data file
- [x] Add hover effects (scale, shadow, transitions)
- [x] Wire components into projects page
- [x] Make grid responsive (1/2/3 columns)

## Phase 6: Work Log Page
- [x] Build QuarterSection component
- [x] Build AccomplishmentItem component
- [x] Create work-log data file (by year and quarter)
- [x] Add year filter/selector (tabs or buttons)
- [x] Wire components into work-log page

## Phase 7: Visual Polish
- [ ] Add page transition animations (Framer Motion)
- [x] Implement dark/light mode toggle
- [x] Store theme preference in localStorage
- [x] Add dark mode toggle button to Navbar
- [x] Apply dark: Tailwind variants to all components
- [x] Refine typography and spacing
- [x] Choose and apply a cohesive color scheme
- [x] Add entrance animations to cards and timeline items

## Phase 8: Responsiveness & SEO
- [ ] Test layout on mobile (320px)
- [ ] Test layout on tablet (768px)
- [ ] Test layout on desktop (1280px+)
- [ ] Fix any responsive layout issues
- [x] Add meta tags (title, description, Open Graph)
- [x] Add favicon and apple-touch-icon
- [ ] Ensure all images have alt text
- [ ] Run Lighthouse audit
- [ ] Address Lighthouse findings

## Phase 9: Deployment
- [x] Push final code to GitHub
- [ ] Connect GitHub repo to Vercel
- [ ] Configure build settings
- [ ] Deploy and verify live site
- [ ] (Optional) Set up custom domain

---

## Content Preparation (User Action Required)
- [ ] Write bio paragraph (3-4 sentences)
- [ ] Prepare resume content and PDF file
- [ ] Gather work history details (companies, roles, dates, responsibilities)
- [ ] List education details (university, degree, year)
- [ ] List certifications and qualifications
- [ ] Write project descriptions (title, description, tech used, links)
- [ ] Gather project screenshots or images
- [ ] Compile quarterly work accomplishments
- [ ] Collect social media URLs (GitHub, LinkedIn, etc.)
- [ ] (Optional) Get a professional headshot / profile photo
