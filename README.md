# Md. Rifat Aknda - Portfolio 🚀

A modern, high-performance portfolio website built with React, Vite, and pure Vanilla CSS (High Contrast Dark Mode). The site automatically deploys to GitHub Pages via GitHub Actions.

## 🌟 Features
- **High-Contrast Dark Theme** built with CSS variables and glassmorphism.
- **Micro-Animations** for a premium user experience (glows, fade-ins).
- **Responsive Navigation** with a hamburger menu for mobile devices.
- **Formspree Integration** on the Contact page for frictionless email delivery.
- **Python CV Extractor**: Includes a script to automatically parse text from PDF CVs.

---

## 🛠️ Tech Stack
- **Frontend Framework**: [React](https://reactjs.org/) + [Vite](https://vitejs.dev/)
- **Routing**: `react-router-dom`
- **Iconography**: `lucide-react`
- **Styling**: Vanilla CSS (No Tailwind)
- **Deployment**: GitHub Actions / GitHub Pages 

---

## 🚀 How to Run Locally

### 1. Web Application (React+Vite)
To run the portfolio website on your local machine:
```bash
# Install NPM dependencies
npm install

# Start the Vite development server
npm run dev
```
The application will launch and be accessible at `http://localhost:5173/`.

### 2. Python Environment (Optional - For CV Parsing)
If you update your CVs in `resources/cv/` and want to extract the text from them again to update your React pages, you can use the Python extraction script.

```bash
# Optional: Set up a virtual environment (Windows)
python -m venv venv
.\venv\Scripts\activate

# Install the required Python packages
pip install -r requirements.txt

# Run the extraction script
python resources/extract_cv.py "resources/cv/industry/Rifat_Aknda_CV_v6.pdf" "resources/cv/industry_cv.txt"
```

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

