# Personal Portfolio Website

🔗 **Live site:** [https://venetis.vercel.app/](https://venetis.vercel.app/)

A personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features four pages: a landing page with bio and resume, a work experience timeline, a project showcase, and a quarterly work log.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React

---

## Prerequisites

You need **Node.js** (version 18 or higher) and **npm** (comes bundled with Node.js) installed on your machine.

### Installing Node.js on macOS

**Option A — Official installer:**

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** version (the button on the left)
3. Open the downloaded `.pkg` file and follow the installer prompts
4. When finished, open **Terminal** (search for "Terminal" in Spotlight with `Cmd + Space`)
5. Verify the installation:
   ```bash
   node --version
   npm --version
   ```
   Both commands should print a version number (e.g., `v20.x.x` and `10.x.x`).

**Option B — Using Homebrew (if you have it installed):**

```bash
brew install node
```

### Installing Node.js on Windows

1. Go to [https://nodejs.org](https://nodejs.org)
2. Download the **LTS** version (the button on the left)
3. Open the downloaded `.msi` file and follow the installer:
   - Accept the license agreement
   - Keep the default installation path
   - On the "Tools for Native Modules" screen, check the box for **"Automatically install the necessary tools"** — this installs build tools you may need later
4. Click **Install**, then **Finish**
5. Open **Command Prompt** or **PowerShell** (search for either in the Start menu)
6. Verify the installation:
   ```bash
   node --version
   npm --version
   ```
   Both commands should print a version number.

> **Note for Windows users:** If you get a "node is not recognized" error, close and reopen your terminal. If it still doesn't work, the installer may not have added Node.js to your PATH. Restart your computer and try again.

### Installing Git

Git is needed to clone the repository.

**macOS:**
- Git is usually pre-installed. Check by running `git --version` in Terminal.
- If not installed, macOS will prompt you to install the Xcode Command Line Tools. Click **Install** when prompted.

**Windows:**
1. Go to [https://git-scm.com/download/win](https://git-scm.com/download/win)
2. Download and run the installer
3. Use the default settings for each step (click **Next** through the prompts)
4. After installation, open a **new** terminal and verify: `git --version`

---

## Running Locally — Step by Step

### Step 1: Clone the repository

Open your terminal (Terminal on macOS, Command Prompt or PowerShell on Windows) and run:

```bash
git clone https://github.com/venetisgr/personal_website.git
```

### Step 2: Navigate into the project folder

```bash
cd personal_website
```

### Step 3: Install dependencies

This reads the `package.json` file and downloads all the libraries the project needs into a `node_modules/` folder:

```bash
npm install
```

This will take a minute or two the first time. You'll see some output as packages are downloaded.

### Step 4: Start the development server

```bash
npm run dev
```

You should see output like:

```
▲ Next.js 16.x.x
- Local: http://localhost:3000
```

### Step 5: Open the site in your browser

Open your web browser and go to:

```
http://localhost:3000
```

You should see the home page with the hero section and resume.

Navigate between pages using the top navigation bar:
- **Home** (`/`) — Bio and resume
- **Experience** (`/experience`) — Work timeline, education, certifications
- **Projects** (`/projects`) — Project showcase grid
- **Work Log** (`/work-log`) — Quarterly accomplishments

### Step 6: Stop the development server

Press `Ctrl + C` in the terminal to stop the server.

---

## Customizing Your Content

All personal content is in the `src/data/` folder. Edit these files to make the site your own — no need to touch any other code:

| File | What to edit |
|------|-------------|
| `src/data/profile.ts` | Your name, job title, bio paragraph, location, social media URLs |
| `src/data/resume.ts` | Professional summary, skills list, key career highlights |
| `src/data/experience.ts` | Work history (companies, roles, dates, achievements), education, certifications |
| `src/data/projects.ts` | Project titles, descriptions, tech stacks, demo/source code links |
| `src/data/work-log.ts` | Quarterly work accomplishments organized by year |

To add your resume PDF for the download button, place a file named `resume.pdf` in the `public/` folder.

After editing any file, the development server will automatically reload with your changes.

---

## Building for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm start
```

This serves the built site at `http://localhost:3000`.

---

## Deploying to Vercel

[Vercel](https://vercel.com) is the recommended hosting platform for Next.js. It has a free tier and deploys automatically when you push to GitHub.

### Step 1: Push your code to GitHub

Make sure your repository is on GitHub. If you cloned it, it's already there. If you started from scratch:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

### Step 2: Create a Vercel account

1. Go to [https://vercel.com](https://vercel.com)
2. Click **Sign Up**
3. Choose **Continue with GitHub** — this links your GitHub account so Vercel can access your repositories

### Step 3: Import your project

1. After signing in, you'll see the Vercel dashboard
2. Click **Add New...** > **Project**
3. You'll see a list of your GitHub repositories — find `personal_website` and click **Import**
4. Vercel will auto-detect that this is a Next.js project. The default settings are correct:
   - **Framework Preset:** Next.js
   - **Build Command:** `next build`
   - **Output Directory:** `.next`
5. Click **Deploy**

### Step 4: Wait for the build

Vercel will clone your repo, install dependencies, and build the site. This takes 1-2 minutes. You'll see a build log showing progress.

### Step 5: Your site is live

Once the build succeeds, Vercel gives you a URL like:

```
https://personal-website-abc123.vercel.app
```

This is your live website. You can share this URL immediately.

### Step 6: Automatic deployments

From this point on, every time you push to the `main` branch on GitHub, Vercel will automatically rebuild and deploy your site. The process is:

1. Edit files locally
2. Commit and push to GitHub:
   ```bash
   git add .
   git commit -m "Update bio and projects"
   git push
   ```
3. Vercel detects the push and redeploys within 1-2 minutes

### (Optional) Custom domain

To use your own domain (e.g., `alexjohnson.dev`):

1. Go to your project on the Vercel dashboard
2. Click **Settings** > **Domains**
3. Type your domain name and click **Add**
4. Vercel will show you DNS records to add at your domain registrar (wherever you bought the domain)
5. Add the records, wait for DNS propagation (can take up to 48 hours, usually much faster)
6. Vercel automatically provisions an SSL certificate — your site will be served over HTTPS

---

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm start` | Serve the production build |
| `npm run lint` | Run ESLint to check for code issues |
