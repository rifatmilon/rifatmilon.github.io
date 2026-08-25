# Md. Rifat Aknda — Portfolio & Academic Website

[![Website](https://img.shields.io/badge/Website-rifatmilon.github.io-00ADB5?style=flat-square&logo=google-chrome&logoColor=white)](https://rifatmilon.github.io)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-rifatmilon-0A66C2?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/rifatmilon)
[![Google Scholar](https://img.shields.io/badge/Google%20Scholar-Profile-4285F4?style=flat-square&logo=google-scholar&logoColor=white)](https://scholar.google.com/citations?user=qPC0U2gAAAAJ)
[![ORCID](https://img.shields.io/badge/ORCID-0009--0003--8483--0668-A6CE39?style=flat-square&logo=orcid&logoColor=white)](https://orcid.org/0009-0003-8483-0668)
[![Built With React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Powered by Vite](https://img.shields.io/badge/Vite-6.2-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License: Private](https://img.shields.io/badge/License-Private-red.svg?style=flat-square)](LICENSE)

Personal academic homepage and professional portfolio of **Md. Rifat Aknda** — AI & Automation Engineer at [SyncMetrics](https://syncmetrics.io) and ML Researcher with 4 peer-reviewed publications across IEEE and MDPI (BioMedInformatics).

🔗 **Live Site:** [https://rifatmilon.github.io](https://rifatmilon.github.io)

---

## ✨ Features

- 🔬 **Research & Publications Showcase**: Complete catalog of peer-reviewed papers with direct DOI links, abstracts, highlighted co-authors, and an interactive **BibTeX Modal** with one-click copy.
- 🏆 **Awards & Honors**: Highlighted recognitions including the IEEE ICEEIE 2025 Best Paper Award.
- 💼 **Experience & Education Timeline**: Interactive chronological view of professional engineering roles, consulting work, academic background, and leadership.
- 🛠️ **Project Catalog & Detail Modals**: Deep-dive modals for machine learning, TinyML, computer vision, and automation projects with architecture highlights and tags.
- 📬 **Interactive Contact Modal**: Integrated outreach interface for project inquiries, collaborations, and consulting.
- ⚡ **Ultra-Fast & Modern UI**: Built with React 19, Vite, and custom CSS design tokens featuring glassmorphism, responsive navigation, and dark aesthetics.
- 🚀 **Automated CI/CD**: Automatic build and deployment to GitHub Pages via GitHub Actions.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React 19
- **Build Tool / Bundler:** Vite 6
- **Styling:** Vanilla CSS (Custom Design System with CSS variables & Glassmorphic tokens)
- **Typography:** Inter & Fira Code (Google Fonts)
- **CI/CD & Hosting:** GitHub Actions & GitHub Pages

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18+ recommended) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rifatmilon/rifatmilon.github.io.git
   cd rifatmilon.github.io
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173`.

### Production Build

To build the static files for production:
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## ⚙️ Updating Content

All site content is modularized inside `src/data/`:

- **Profile & Bio:** Edit `src/data/profile.js` to update bio, affiliations, social links, experience, or skills.
- **Publications:** Edit `src/data/publications.js` to add new research papers, DOIs, and BibTeX citations.
- **Projects:** Edit `src/data/projects.js` to showcase new engineering and machine learning projects.
- **News & Updates:** Edit `src/data/updates.js` to publish new milestones and announcements.

---

## 🌐 Deployment to GitHub Pages

This repository is configured with a GitHub Actions workflow (`.github/workflows/deploy.yml`).

### Setup GitHub Pages in Repository Settings:

1. Navigate to your repository on GitHub: `https://github.com/rifatmilon/rifatmilon.github.io`
2. Go to **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push any commit to the `main` branch:
   ```bash
   git add .
   git commit -m "Update portfolio content"
   git push origin main
   ```
5. The GitHub Action will automatically build and publish your site to `https://rifatmilon.github.io`.

---

## 📄 License
 
Copyright © 2025 Md. Rifat Aknda. All rights reserved. Proprietary and confidential. See [LICENSE](LICENSE) for details.

---

## 📬 Contact & Connect

**Md. Rifat Aknda**  
- **Email:** [rifataknda.r@gmail.com](mailto:rifataknda.r@gmail.com)  
- **Website:** [rifatmilon.github.io](https://rifatmilon.github.io)  
- **LinkedIn:** [linkedin.com/in/rifatmilon](https://www.linkedin.com/in/rifatmilon)  
- **Google Scholar:** [Md. Rifat Aknda](https://scholar.google.com/citations?user=qPC0U2gAAAAJ)
