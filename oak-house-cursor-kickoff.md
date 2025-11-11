# Oak House — Cursor Project Kickoff

## RTFN (Role · Task · Format · Next Steps)

**Role**: Senior Frontend Engineer + UX Implementer pairing with the Figma MCP.  
**Task**: Build a single‑page marketing site for Oak House in **Next.js 14 (App Router)** + **Tailwind CSS**, deployed to **Vercel**, matching the provided Figma designs across desktop/tablet/mobile. Enforce a strict 3‑color system and a single font family.  
**Format**: Production‑ready Next.js repo scaffold + semantic, accessible React components wired to section jump links with smooth scrolling. Include a living `PROJECT_SUMMARY.md` that we update as we iterate.  
**Next Steps**: Generate repo, configure Tailwind theme tokens, wire Montserrat, build sections as components, ship to Vercel preview, integrate Figma MCP for pixel‑fit passes.

---

## Tech Stack & Conventions (authoritative)

- **Framework**: Next.js 14+ (App Router, `/app`), TypeScript on by default
- **Styling**: Tailwind CSS; no CSS‑in‑JS; utility‑first + small component classes
- **Design System**: **Strict color palette** and type scale  
  - Sunburst — `#FFC803`  
  - Oak Black — `#1A1B1C`  
  - Birch White — `#F9F9F9`
- **Font**: **Montserrat** via `next/font/google` (no other fonts)
- **Icons**: Inline SVG (no external icon packs unless asked)
- **Motion**: Optional light scroll/entrance micro‑animations only after parity with Figma
- **Accessibility**: WCAG‑AA color contrast; skip‑to‑content link; semantic landmarks; focus states
- **Deployment**: Vercel (create preview; main branch → production)
- **Lint/Format**: ESLint + Prettier; Husky pre‑commit optional

> **Non‑negotiables**  
> - Only the 3 colors above. No tints/shades/opacity hacks for new hues. Use Tailwind custom colors.  
> - Single page with **jump‑link navigation** and **smooth scrolling**.  
> - All copy editable in file; avoid hard‑coding lorem once Sam supplies final text.  
> - Maintain `PROJECT_SUMMARY.md` with each change.

---

## Repository Structure (generate)

```
/ (repo root)
├─ app/
│  ├─ globals.css
│  ├─ layout.tsx
│  └─ page.tsx
├─ components/
│  ├─ nav.tsx
│  ├─ hero.tsx
│  ├─ section.tsx           # generic section wrapper (id, heading, width, bg)
│  ├─ who-i-am.tsx
│  ├─ what-i-do.tsx
│  ├─ recent-work.tsx
│  ├─ how-i-can-help.tsx
│  ├─ easy-process.tsx
│  ├─ pricing-contact.tsx
│  └─ footer.tsx
├─ public/
│  ├─ images/hero.jpg       # placeholder; Sam to replace
│  ├─ logos/nav-logo.svg    # to be provided by Sam
│  └─ logos/footer-logo.svg # to be provided by Sam
├─ lib/
│  └─ smooth-scroll.ts      # helper for smooth scrolling / focus management
├─ PROJECT_SUMMARY.md
├─ tailwind.config.ts
├─ postcss.config.js
├─ tsconfig.json
├─ next.config.mjs
├─ package.json
└─ README.md
```

---

## Tailwind Theme (authoritative tokens)

In `tailwind.config.ts`:
```ts
extend: {
  colors: {
    sunburst: '#FFC803',
    oak: '#1A1B1C',
    birch: '#F9F9F9'
  },
  fontFamily: {
    sans: ['var(--font-montserrat)']
  }
}
```
- Set `html, body` bg to `birch` and text to `oak` in `globals.css`.
- Use `bg-sunburst` only where the Figma specifies (e.g., Navigation).  
- Footer uses `bg-oak` with `text-birch`.

---

## Font: Montserrat

In `app/layout.tsx`:
```ts
import { Montserrat } from 'next/font/google';
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' });
export const metadata = { title: 'Oak House' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="bg-birch text-oak">{children}</body>
    </html>
  );
}
```

---

## Sections to Implement (match Figma)

1) **Navigation (Sunburst background)**  
- Sticky top, `bg-sunburst` with high‑contrast links (`text-oak`).  
- Contains logo (SVG) + jump links: `#who-i-am`, `#what-i-do`, `#how-i-can-help`, `#pricing-contact`.  
- Smooth scroll + set focus to the section heading for a11y.

2) **Hero (image background)**  
- Full‑width responsive image with overlay if needed; headline + 2‑3 sentence intro; primary CTA scrolls to contact.  
- Copy supplied by Sam. Ensure readable contrast.

3) **Who I Am** (`id="who-i-am"`)  
- Two short paragraphs as supplied. Optional portrait/thumb.

4) **What I Do** (`id="what-i-do"`)  
- Paragraphs defining brochure‑style scope (3–5 pages), custom build, performance.  
- Optional bullet icons.  

5) **Recent Work**  
- 3–4 cards (image, client, one‑line result). All images have `alt` text.

6) **How I Can Help** (`id="how-i-can-help"`)  
- Conversational copy + short numbered list of steps (4‑step flow).

7) **Easy Process**  
- Visual reinforcement of the steps with simple icons; keep minimal.

8) **Pricing + Contact** (`id="pricing-contact"`)  
- Transparent baseline: “Most projects fall between **$2,500–$4,000**…”  
- No form. Show direct contact: email + LinkedIn.  
- Optional small note for maintenance/hosting monthly add‑on.

9) **Footer (Oak Black background)**  
- Footer logo (white variant), links, small “built by Oak House” note.

---

## Smooth Scrolling & A11y

- Use `scroll-behavior: smooth;` plus manual `scrollIntoView({ behavior: 'smooth' })` for JS‑triggered links.  
- After scroll, move focus to the target section heading (`tabIndex="-1"` + `focus()`) to aid keyboard/screen readers.  
- Provide **Skip to content** link before the nav.

---

## Commands for Cursor to Run

1. **Scaffold + deps**
```bash
npx create-next-app@latest oak-house --ts --eslint --app --src-dir=false --import-alias "@/*"
cd oak-house
npm i -D tailwindcss postcss autoprefixer prettier eslint-config-prettier
npx tailwindcss init -p
```

2. **Configure Tailwind**
- Add `content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}']`  
- Add theme `colors` and `fontFamily` as above.

3. **Globals**
- In `app/globals.css` include Tailwind base/components/utilities and set base colors/typography.

4. **Build Sections**
- Create components per structure above; import and compose in `app/page.tsx` in section order.

5. **Vercel**
```bash
git init && git add . && git commit -m "feat: oak-house initial scaffold"
# Connect to Vercel project; push preview.
```

6. **Figma MCP**
- Pull frames per section, align spacing/typography, iterate until pixel‑tight.

---

## Project Summary Discipline

- Create `/PROJECT_SUMMARY.md` with:
  - **Timeline log** (dated bullets of what changed)
  - **Open TODOs**
  - **Decisions** (why we chose X)
  - **Assets** needed (list logos/images/copy status)
- Update this file at the end of each Cursor session.

---

## Placeholders & Assets

- Use `public/images/hero.jpg` as a placeholder; Sam will replace.  
- Logos to be provided by Sam as `nav-logo.svg` (dark on sunburst) and `footer-logo.svg` (light on oak).  
- No stock photos without approval.

---

## Open Questions / Inputs Needed

- Final hero image and text (2–3 sentences)
- Final copy for **Who I Am**, **What I Do**, **How I Can Help**, **Pricing + Contact**
- Recent Work: 3–4 projects (image, name, 1‑line caption, link if any)
- Contact email and LinkedIn URL to display
- Maintenance/hosting monthly amount (if offering)
- Analytics (if any): Vercel Analytics or none
- Favicon/OG image

> If any item is missing, proceed with clearly labeled placeholders and list the item under “Assets” in `PROJECT_SUMMARY.md`.

---

## Definition of Done (v1)

- Pixel‑accurate to Figma at desktop/tablet/mobile breakpoints
- Lighthouse 95+ Performance/Best Practices/SEO (on content available)
- a11y pass (keyboard nav, focus order, alt text, landmarks)
- Smooth jump links and sticky nav behavior verified
- Deployed to Vercel preview URL and linked in `PROJECT_SUMMARY.md`
