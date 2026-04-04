# Md. Rifat Aknda - Portfolio 🚀

A modern, high-performance portfolio website built with React, Vite, and pure Vanilla CSS (High Contrast Dark Mode). The site automatically deploys to GitHub Pages via GitHub Actions.

## 🌟 Features
- **High-Contrast Dark Theme** built with CSS variables and glassmorphism.
- **Micro-Animations** for a premium user experience (glows, fade-ins).
- **Responsive Navigation** with a hamburger menu for mobile devices.
- **Formspree Integration** on the Contact page for frictionless email delivery.

---

## 🛠️ Tech Stack
- **Frontend Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Routing**: `react-router-dom`
- **Iconography**: `lucide-react`
- **Styling**: Vanilla CSS (No Tailwind)
- **Deployment**: GitHub Actions / GitHub Pages 

---

## 🚀 How to Run Locally

To set up the portfolio website on a new machine or from a fresh clone:

1. All required packages for this React app are tracked in the `package.json` file.
2. Open your terminal in the project directory and install the local dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
The application will launch and be accessible at `http://localhost:5173/`.

---

## 🚢 How to Deploy (Go Live!)

The repository is already configured with an automated deployment pipeline. When you push your code to GitHub, **GitHub Actions** will automatically build the React app and deploy it to GitHub Pages.

### To make the site live in production:
1. Stage all your new code: `git add .`
2. Commit your changes: `git commit -m "feat: complete portfolio population"`
3. Push to your main branch: `git push origin main` (or `master`)
4. **On GitHub**:
   - Go to your repository settings (`Settings` > `Pages`).
   - Under **Build and deployment**, ensure the **Source** is set to **GitHub Actions**. (Do not select `Deploy from a branch` as Vite creates static artifacts which the GitHub Actions deployment script uploads natively).
5. Give it 1-2 minutes! The action will build the site, and it will be live at `https://rifatmilon.github.io`.

