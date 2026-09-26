# JAZ Herbal World

A one-page marketing site for JAZ Herbal Hair Oil, built with React, Vite, Tailwind CSS and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

The production build is output to `dist/`.

## Editing content

Almost everything on the page (product prices, reviews, benefits, WhatsApp number, images) is driven by a single file: `src/lib/jazData.js`. Change the values there and every section updates automatically.

## Notes

This project was cleaned up from a platform-specific export: it no longer depends on any external auth provider, router, or hosted backend — it's a plain static site you can deploy anywhere (Vercel, Netlify, GitHub Pages, etc.).
