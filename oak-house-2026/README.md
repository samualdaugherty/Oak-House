# Oak House 2026

A single-page marketing site built with Next.js 14+ (App Router), TypeScript, and Tailwind CSS.

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
npm run build
npm start
```

## Project Structure

- `/app` - Next.js App Router pages and layouts
- `/components` - React components for each section
- `/lib` - Utility functions (smooth scroll, etc.)
- `/public` - Static assets (images, logos)

## Design System

- **Colors**: Sunburst (#FFC803), Oak Black (#1A1B1C), Birch White (#F9F9F9)
- **Font**: Montserrat (via next/font/google)
- **Styling**: Tailwind CSS v4

## Sections

1. Navigation (sticky, sunburst background)
2. Hero (image background with overlay)
3. Who I Am
4. What I Do
5. Recent Work
6. How I Can Help
7. Easy Process
8. Pricing & Contact
9. Footer

## Deployment

Deploy to Vercel:

```bash
git init
git add .
git commit -m "Initial commit"
# Connect to Vercel and push
```

See `PROJECT_SUMMARY.md` for detailed project status and todos.
