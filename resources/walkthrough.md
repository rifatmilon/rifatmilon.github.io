# Portfolio Build Walkthrough

I have successfully generated the foundational structure and design for your new GitHub Pages Portfolio!

## Overview of Accomplishments

* **Tech Stack Scaffolded**: Set up a clean React + Vite application ready for production, resolving standard routing with `react-router-dom` and implementing icons with `lucide-react`.
* **Premium Dark Mode Design**: Created a custom `index.css` implementing pure Vanilla CSS for a High-Contrast Dark Theme (`#050505` background with Cyan accents). It includes responsive grid systems, glow/glassmorphism utilities, and smooth fade-in animations on components.
* **Component Architecture**: 
  * `Navbar`: Responsive glassy sticky nav with mobile hamburger menu.
  * `AnimatedCard`: A reusable layout card that reveals a subtle gradient outline/hover depth on mouseover.
  * `Layout` / `Footer`: Consistent wrapping and baseline content across pages.
* **Page Architecture Created**: Stubbed and hooked up every requested page (`Overview`, `Experience`, `Education`, `Projects`, `Publications`, `Certifications`, `Awards`, `Contact`).
* **Contact Form Formspree Logic**: Built the `Contact` page logic anticipating a Formspree endpoint seamlessly, containing the mandatory "Reason/Purpose" drop-down.
* **GitHub Actions Deployment**: Included `.github/workflows/deploy.yml`. When you commit this to `main` on GitHub, GitHub Actions will automatically compile the Vite site and host it via GitHub Pages.

> [!NOTE]
> The codebase builds cleanly. To run the app locally and see it yourself, you can start the dev server via:
> ```bash
> npm run dev
> ```

## What I need from you

To finalize the content, here are the main things needed on your side:
1. **Resume / CV content**: Please provide text detailing your actual experience bullets, universities, certification dates, etc so we can populate the current stubs (`src/pages/*.jsx`). You can paste them in the chat, or upload a resume.pdf/word doc, and I can extract and inject it for you.
2. **Formspree Set up**: 
   - Go to [Formspree.io](https://formspree.io/) and create a free account.
   - Create a new project/form and copy the endpoint URL (it looks like `https://formspree.io/f/abcd123`).
   - Give me that URL so I can update `<form action="...">` in `Contact.jsx`.
3. **Downloadable Resume**: Do you have a `.pdf` of your resume you want linked on the `Overview` page? If so, we just need to place it in the `/public` folder as `resume.pdf`.
