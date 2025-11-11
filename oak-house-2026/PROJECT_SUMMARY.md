# Oak House 2026 - Project Summary

## Timeline Log

### 2024-11-09 - Initial Setup
- ✅ Scaffolded Next.js 14+ project with TypeScript and Tailwind CSS
- ✅ Configured Tailwind theme with custom colors (Sunburst, Oak Black, Birch White)
- ✅ Set up Montserrat font via next/font/google
- ✅ Created project structure (components/, lib/, public/)
- ✅ Added smooth scroll helper with accessibility focus management
- ✅ Added skip-to-content link for accessibility
- ✅ Built all section components (Nav, Hero, WhoIAm, WhatIDo, RecentWork, HowICanHelp, EasyProcess, PricingContact, Footer)
- ✅ Composed all sections in main page.tsx
- ✅ Created placeholder image files
- ✅ Set up development server

## Open TODOs

- [ ] Replace placeholder images with actual hero image and project images
- [ ] Replace placeholder copy with final content from Sam
- [ ] Add actual logos (nav-logo.svg, footer-logo.svg)
- [ ] Implement mobile menu functionality
- [ ] Add final contact information (email, LinkedIn)
- [ ] Add final pricing information
- [ ] Test smooth scrolling and accessibility features
- [ ] Deploy to Vercel preview
- [ ] Integrate Figma MCP for pixel-perfect alignment

## Decisions

- **Next.js 16 with Tailwind CSS v4**: Using latest stable versions
- **Tailwind CSS v4 @theme syntax**: Using the new inline theme configuration
- **Montserrat only**: Single font family as specified
- **Strict 3-color system**: Sunburst (#FFC803), Oak Black (#1A1B1C), Birch White (#F9F9F9)
- **Accessibility first**: Skip-to-content link, smooth scroll with focus management, semantic HTML

## Assets Needed

### Images
- [ ] Hero image (placeholder at public/images/hero.jpg)
- [ ] Recent Work project images (3-4 projects)

### Logos
- [ ] nav-logo.svg (dark on sunburst background)
- [ ] footer-logo.svg (light on oak background)

### Copy
- [ ] Hero headline + 2-3 sentence intro
- [ ] Who I Am section (2 paragraphs)
- [ ] What I Do section (paragraphs about brochure sites, custom builds, performance)
- [ ] Recent Work (3-4 projects: image, name, 1-line caption, optional link)
- [ ] How I Can Help (conversational copy + 4-step numbered list)
- [ ] Easy Process (visual reinforcement of steps)
- [ ] Pricing + Contact (baseline pricing $2,500-$4,000, email, LinkedIn)
- [ ] Footer copy

### Contact Info
- [ ] Email address
- [ ] LinkedIn URL
- [ ] Maintenance/hosting monthly amount (if offering)

### Other
- [ ] Favicon
- [ ] OG image for social sharing
- [ ] Analytics setup (Vercel Analytics or none)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Font**: Montserrat (via next/font/google)
- **Deployment**: Vercel
- **Linting**: ESLint + Prettier

## Color Palette

- **Sunburst**: `#FFC803` - Used for navigation background
- **Oak Black**: `#1A1B1C` - Primary text color
- **Birch White**: `#F9F9F9` - Background color

## Next Steps

1. Build Navigation component with jump links
2. Build Hero section with placeholder content
3. Build remaining section components
4. Compose all sections in page.tsx
5. Get final assets and copy from Sam
6. Deploy to Vercel preview

