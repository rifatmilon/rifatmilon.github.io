# React + Vite Portfolio Implementation Plan

This plan outlines the architecture for a modern, multi-page portfolio web application using React and Vite, beautifully styled with Vanilla CSS, and configured to deploy automatically to GitHub Pages (`rifatmilon.github.io`).

## User Review Required

> [!IMPORTANT]
> Please review the proposed architecture and page structure. Once you approve this plan, I'll begin generating and assembling the codebase right away!
> Do you have a specific color palette preference (e.g., sleek monochrome, deep charcoal and neon accents)?

## Proposed Changes

We will generate a modern Vite app and structure it with a router to manage multiple pages efficiently.

---

### Project Scaffolding
Initialize a `Vite` + `React` project in the current directory (`rifatmilon.github.io`). We will install modern dependencies including `react-router-dom` for multi-page routing and `lucide-react` for beautiful iconography.

#### [NEW] package.json
#### [NEW] vite.config.js
#### [NEW] index.html

---

### Routing & Structure
We will use React Router to build the requested multi-page experience.

#### [NEW] src/App.jsx
Sets up routing for the following pages/sections:
* **Overview** (`/`)
* **Experience** (`/experience`)
* **Education** (`/education`)
* **Projects** (`/projects`)
* **Case Studies** (`/projects/:id`)
* **Publications** (`/publications`)
* **Certifications & Training** (`/certifications`)
* **Awards & Co-Curricular** (`/awards`)
* **Contact** (`/contact`)

---

### Styling (Premium Vanilla CSS)
We will create a meticulously crafted `index.css` file tailored for a high-end application using CSS Variables, modern typography (Google Fonts 'Inter' or 'Outfit'), a sleek dark mode, glassmorphic elements, and micro-interactions.

#### [NEW] src/index.css
Contains global theme tokens, layout utilities, and animation keyframes. No Tailwind—just highly robust Vanilla CSS structure.

#### [NEW] src/components/...
* **Navbar**: Responsive glassmorphic navigation.
* **Footer**: Standard footer mapping links and socials.
* **AnimatedCard**: A reusable polished card component with hover effects, used across projects, publications, and experience pages.

---

### GitHub Actions Deployment
We will configure a GitHub Actions workflow that automatically builds the Vite app and deploys it to the GitHub Pages environment whenever changes are pushed to the `main` or `master` branch.

#### [NEW] .github/workflows/deploy.yml
Automated CI/CD pipeline tailored specifically for Vite and GitHub Pages, using the `actions/upload-pages-artifact` and `actions/deploy-pages` workflows which is the standard, modern way to deploy directly to GitHub Pages.

## Open Questions

> [!CAUTION]
> For the contact form, do you want to integrate a service like **EmailJS** or **Formspree** so that emails are sent to your inbox directly without needing a custom backend server?

## Verification Plan

### Automated Tests
* Run `npm run build` locally to verify production build artifacts.
* Confirm routing handles history correctly.

### Manual Verification
* Ensure the local dev server `npm run dev` displays all routes smoothly.
* Commit & Push to GitHub to trigger and verify the GitHub Actions workflow successfully publishes the static site.
