# Cybersecurity Portfolio — Nithiya Rajendran

A fast, single-page portfolio for a security researcher & penetration tester, built with **React 19 + Vite + Tailwind CSS v4** and deployed to **GitHub Pages**.

**Live site:** https://nithiya-rajesh.github.io/Cybersecurity-Portfolio

---

## ✨ Highlights

- **Red-team / blue-team visual language** — offense (rose) and defense (cyan) accents over a slate base.
- **Terminal-style hero** with an animated `whoami` typewriter.
- **Scroll-reveal animations** via Framer Motion (respects reduced-motion).
- **Fully responsive**, keyboard-accessible, and content-driven from a single data file.

## 🧱 Tech Stack

| Layer | Choice |
| :--- | :--- |
| Framework | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS v4 (CSS-first `@theme`) |
| Animation | Framer Motion |
| Icons | lucide-react |
| Hosting | GitHub Pages |

## 🚀 Getting Started

```bash
npm install      # install dependencies
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build → dist/
npm run preview  # preview the production build locally
npm run lint     # run ESLint
```

## 📁 Structure

```
src/
├── main.jsx              # entry point
├── App.jsx               # composes all sections
├── index.css            # Tailwind import + design tokens (@theme)
├── data.js              # ← all content lives here (edit this)
└── components/
    ├── Navbar.jsx
    ├── Hero.jsx
    ├── About.jsx
    ├── Skills.jsx
    ├── Projects.jsx
    ├── Certifications.jsx
    ├── Contact.jsx
    ├── Footer.jsx
    └── Reveal.jsx        # shared scroll-reveal + section heading
```

**To update any content** — name, projects, skills, certifications, links — edit **`src/data.js`** only. No component changes needed.

## 🎨 Theme

Design tokens are defined in `src/index.css` under `@theme` (Tailwind v4 style):

```css
--color-dark: #020617;    /* base   */
--color-card: #0f172a;    /* surface */
--color-accent: #6366f1;  /* indigo primary */
--color-redteam: #f43f5e; /* offense */
--color-blueteam: #38bdf8;/* defense */
```

## 🌐 Deployment

Two options are wired up:

1. **Automatic (recommended)** — pushing to `main` triggers `.github/workflows/deploy.yml`, which builds and publishes to GitHub Pages. Enable it once under **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. **Manual** — `npm run deploy` builds and pushes `dist/` to the `gh-pages` branch via the `gh-pages` package.

> ⚠️ **Important:** `vite.config.js` has `base: "/Cybersecurity-Portfolio/"`. This **must exactly match your repository name**, or CSS/JS will 404 on the live site. If you rename the repo, update `base` and the `homepage` field in `package.json`.

---

<p align="center"><i>"Security is not a product, but a process."</i></p>
