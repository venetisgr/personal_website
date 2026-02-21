# Personal Portfolio Website - Architecture & Roadmap

## 1. Architecture Overview

### Tech Stack

| Layer        | Technology     | Why                                                        |
| ------------ | -------------- | ---------------------------------------------------------- |
| Framework    | Next.js 14     | React-based, file-based routing, static site generation    |
| Language     | TypeScript     | Type safety, industry standard, impresses interviewers     |
| Styling      | Tailwind CSS   | Utility-first CSS, rapid development, responsive by design |
| Animations   | Framer Motion  | Smooth page transitions and scroll animations              |
| Icons        | Lucide React   | Clean, consistent icon set                                 |
| Content      | MDX / JSON     | Easy to update without touching code                       |
| Deployment   | Vercel         | Free tier, automatic deploys from Git, built for Next.js   |
| Package Mgr  | npm            | Comes with Node.js, no extra install                       |

### Why This Stack

- **Next.js** gives you 4 pages with zero routing configuration (file-based routing).
- **Tailwind CSS** means you style by adding classes, no separate CSS files to manage.
- **TypeScript** catches errors before they reach the browser and is expected in professional codebases.
- **Framer Motion** adds polish that differentiates your site from plain HTML pages.
- **Vercel** deploys automatically every time you push to Git -- no server management.

---

## 2. Site Map & Page Structure

```
/                     --> Home (About + Resume)
/experience           --> Work Experience & Qualifications
/projects             --> Personal Projects Showcase
/work-log             --> Quarterly Work Accomplishments
```

### Shared Layout

Every page shares a common layout:

```
+--------------------------------------------------+
|  Navigation Bar (logo/name + page links)         |
+--------------------------------------------------+
|                                                  |
|              Page Content Area                   |
|                                                  |
+--------------------------------------------------+
|  Footer (social links, contact, copyright)       |
+--------------------------------------------------+
```

---

## 3. Component Architecture

```
src/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout (nav + footer wrapper)
│   ├── page.tsx                  # Home page (About + Resume)
│   ├── experience/
│   │   └── page.tsx              # Experience page
│   ├── projects/
│   │   └── page.tsx              # Projects page
│   └── work-log/
│       └── page.tsx              # Quarterly work log page
│
├── components/                   # Reusable UI components
│   ├── layout/
│   │   ├── Navbar.tsx            # Top navigation bar
│   │   └── Footer.tsx            # Bottom footer
│   ├── home/
│   │   ├── HeroSection.tsx       # Name, title, intro paragraph
│   │   └── ResumeSection.tsx     # Embedded/downloadable resume
│   ├── experience/
│   │   ├── Timeline.tsx          # Vertical timeline of jobs
│   │   ├── TimelineItem.tsx      # Single job entry
│   │   ├── SkillBadges.tsx       # Skill/qualification tags
│   │   └── EducationCard.tsx     # Education entries
│   ├── projects/
│   │   ├── ProjectCard.tsx       # Single project display
│   │   └── ProjectGrid.tsx       # Grid layout of projects
│   └── work-log/
│       ├── QuarterSection.tsx    # One quarter's accomplishments
│       └── AccomplishmentItem.tsx# Single accomplishment entry
│
├── data/                         # Content stored as data (easy to update)
│   ├── profile.ts                # Name, title, bio, social links
│   ├── resume.ts                 # Resume sections (education, skills, etc.)
│   ├── experience.ts             # Array of work experiences
│   ├── projects.ts               # Array of personal projects
│   └── work-log.ts               # Quarterly accomplishments by year
│
├── lib/                          # Utility functions
│   └── utils.ts                  # Helper functions (classnames, formatting)
│
└── styles/
    └── globals.css               # Tailwind directives + custom CSS variables
```

---

## 4. Page Designs (High Level)

### Page 1: Home (`/`)

```
+--------------------------------------------------+
|  [Hero Section]                                  |
|  Your Name                                       |
|  Your Title / Tagline                            |
|  A short paragraph about you (3-4 sentences)     |
|  [Social Links: GitHub | LinkedIn | Email]       |
+--------------------------------------------------+
|  [Resume Section]                                |
|  Inline rendered resume with:                    |
|    - Summary                                     |
|    - Key Skills (badge/tag format)               |
|    - Highlights                                  |
|  [Download Resume as PDF] button                 |
+--------------------------------------------------+
```

### Page 2: Experience (`/experience`)

```
+--------------------------------------------------+
|  [Page Header: "Experience & Qualifications"]    |
+--------------------------------------------------+
|  [Vertical Timeline]                             |
|    2024 - Present: Company X, Role Y             |
|      - Bullet points of responsibilities         |
|    2022 - 2024: Company Z, Role W                |
|      - Bullet points of responsibilities         |
|    ...                                           |
+--------------------------------------------------+
|  [Education Section]                             |
|    University / Degree / Year                    |
+--------------------------------------------------+
|  [Certifications & Qualifications]               |
|    Displayed as cards or badges                  |
+--------------------------------------------------+
```

### Page 3: Projects (`/projects`)

```
+--------------------------------------------------+
|  [Page Header: "Personal Projects"]              |
+--------------------------------------------------+
|  [Project Grid - responsive 1/2/3 columns]       |
|  +-------------+  +-------------+                |
|  | Project Img |  | Project Img |                |
|  | Title       |  | Title       |                |
|  | Description |  | Description |                |
|  | Tech Tags   |  | Tech Tags   |                |
|  | [Demo][Code]|  | [Demo][Code]|                |
|  +-------------+  +-------------+                |
+--------------------------------------------------+
```

### Page 4: Work Log (`/work-log`)

```
+--------------------------------------------------+
|  [Page Header: "Quarterly Work Log"]             |
+--------------------------------------------------+
|  [Year Selector / Filter: 2024 | 2023 | ...]    |
+--------------------------------------------------+
|  Q4 2024                                         |
|    - Accomplishment 1 with context               |
|    - Accomplishment 2 with context               |
|  Q3 2024                                         |
|    - Accomplishment 1 with context               |
|    ...                                           |
+--------------------------------------------------+
```

---

## 5. Roadmap

### Phase 1: Foundation

- Install Node.js and set up the development environment
- Initialize Next.js project with TypeScript and Tailwind CSS
- Set up the project folder structure
- Create the root layout with Navbar and Footer
- Verify the dev server runs and displays a basic page

### Phase 2: Home Page

- Build the HeroSection component (name, title, bio paragraph)
- Build the ResumeSection component (inline resume display)
- Create the profile and resume data files
- Add a "Download Resume as PDF" button
- Style and make responsive

### Phase 3: Experience Page

- Build the Timeline and TimelineItem components
- Build EducationCard and SkillBadges components
- Create the experience data file
- Wire up the experience page
- Add scroll animations with Framer Motion

### Phase 4: Projects Page

- Build ProjectCard and ProjectGrid components
- Create the projects data file
- Wire up the projects page
- Add hover effects and transitions
- Ensure responsive grid layout

### Phase 5: Work Log Page

- Build QuarterSection and AccomplishmentItem components
- Create the work-log data file
- Add year filtering functionality
- Wire up the work-log page

### Phase 6: Polish & Deploy

- Add page transition animations
- Implement dark/light mode toggle
- Optimize for SEO (meta tags, Open Graph)
- Test on mobile, tablet, and desktop
- Deploy to Vercel
- Set up a custom domain (optional)

---

## 6. Resources Needed

### Software (all free)

| Resource               | Purpose                          | Where to Get It                  |
| ---------------------- | -------------------------------- | -------------------------------- |
| Node.js (v18+)         | JavaScript runtime               | https://nodejs.org               |
| VS Code                | Code editor                      | https://code.visualstudio.com    |
| Git                    | Version control                  | https://git-scm.com              |
| Browser DevTools       | Testing and debugging            | Built into Chrome/Firefox        |

### Accounts (all free tier)

| Account      | Purpose                          | URL                              |
| ------------ | -------------------------------- | -------------------------------- |
| GitHub       | Code hosting                     | https://github.com               |
| Vercel       | Website hosting & deployment     | https://vercel.com               |

### npm Packages (installed via terminal)

| Package           | Purpose                              |
| ----------------- | ------------------------------------ |
| next              | React framework with routing & SSG   |
| react / react-dom | UI library                           |
| typescript        | Type checking                        |
| tailwindcss       | Utility-first CSS framework          |
| framer-motion     | Animation library                    |
| lucide-react      | Icon library                         |
| clsx              | Conditional CSS class helper         |

### Content You Need to Prepare

| Content Item              | Format          | Used On              |
| ------------------------- | --------------- | -------------------- |
| Bio paragraph (3-4 lines) | Plain text      | Home page            |
| Resume / CV               | Text + PDF file | Home page            |
| Profile photo (optional)  | JPG/PNG         | Home page            |
| Work history entries       | Text            | Experience page      |
| Education details         | Text            | Experience page      |
| Certifications list       | Text            | Experience page      |
| Project descriptions      | Text + images   | Projects page        |
| Project links (demo/code) | URLs            | Projects page        |
| Quarterly accomplishments | Text            | Work Log page        |
| Social media URLs         | URLs            | Footer / Home page   |
