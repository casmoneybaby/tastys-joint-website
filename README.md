# Tasty's Joint — Premium Restaurant Website

A production-ready Next.js 14 website for **Tasty's Joint**, a burger restaurant located at 43 Caledonia St, Sausalito, CA. Built to agency-grade quality with dark premium aesthetics, 3D elements, and smooth animations.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| 3D Graphics | React Three Fiber + Three.js |
| Fonts | Bebas Neue, Anton, Inter, Playfair Display (Google Fonts) |

---

## How to Run Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
open http://localhost:3000
```

**Requirements:** Node.js 18+ and npm 9+

---

## Deploy to Vercel

### One-click deploy

1. Push this repo to GitHub
2. Visit [vercel.com/new](https://vercel.com/new)
3. Import the repository
4. Click **Deploy** — no environment variables required

### Via Vercel CLI

```bash
npm i -g vercel
vercel --prod
```

---

## Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout, fonts, SEO metadata, JSON-LD schema
│   ├── page.tsx            # Homepage (all sections assembled)
│   ├── globals.css         # Global styles, CSS variables, utility classes
│   ├── menu/
│   │   └── page.tsx        # Full menu page
│   └── about/
│       └── page.tsx        # Brand story & values page
├── components/
│   ├── Navbar.tsx          # Sticky glass navbar with mobile hamburger
│   ├── Hero.tsx            # Full-viewport hero with 3D burger
│   ├── BurgerCanvas.tsx    # React Three Fiber 3D burger (built from primitives)
│   ├── AnimatedIngredients.tsx  # Floating particle layer (sesame, pickles, dots)
│   ├── FeaturedMenu.tsx    # 6-item burger grid + sides & drinks
│   ├── BrandStory.tsx      # Our Story section with grain texture + animated flame
│   ├── Experience.tsx      # Why Tasty's? — 4-up feature cards
│   ├── Location.tsx        # Google Maps embed + hours + contact
│   ├── CTASection.tsx      # Full-width CTA with grill-glow gradient
│   ├── Footer.tsx          # 3-col footer with socials + address
│   └── MobileCTABar.tsx    # Fixed bottom bar on mobile (Call + Directions)
├── public/                 # Static assets (add food images here)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.ts
```

---

## What Is Placeholder

The following should be verified or replaced before going live:

| Item | Status | Action Needed |
|------|--------|---------------|
| Menu prices | Placeholder | Confirm with owner |
| Menu items & descriptions | Approximate | Confirm with owner |
| Food photography | CSS gradient backgrounds | Add real food photos |
| Google Maps embed | Live iframe | Verify pin accuracy |
| Social media links | `href="#"` | Add real Instagram/Facebook/Yelp URLs |
| Google Analytics | Not included | Add GA4 or Vercel Analytics |
| Domain | Not configured | Point DNS to Vercel |

---

## Business Info (Pre-verified)

| Field | Value |
|-------|-------|
| Name | Tasty's Joint |
| Address | 43 Caledonia St, Sausalito, CA 94965 |
| Phone | (415) 729-9328 |
| Hours | 11 AM – 9 PM daily |

---

## Why This Redesign Helps Tasty's Joint

**The problem with most restaurant websites:**
Generic templates that look like every other burger place. White backgrounds, stock photos, clipart icons. Nothing that communicates personality or makes someone pull over and walk in.

**What this redesign delivers:**

1. **Immediate visual credibility** — The dark premium aesthetic signals quality before a visitor reads a single word. Tourists browsing Sausalito restaurants on their phones will stop scrolling.

2. **Mobile-first conversion** — The sticky bottom bar with CALL and DIRECTIONS removes friction for mobile users (who are the majority for local restaurants). One tap to call, one tap to navigate.

3. **3D burger hero** — The rotating Three.js burger creates a moment of delight that users remember and share. It's the kind of thing that gets screenshot-texted to friends.

4. **SEO-ready** — JSON-LD schema markup helps Google surface the restaurant in local search results with rich snippets (hours, location, phone).

5. **Click-to-call everywhere** — Phone number is clickable in the navbar, hero, CTA section, footer, and mobile bar. Every touchpoint leads to a call.

**Estimated outcome:** Higher conversion rate from web visits to walk-ins and calls, improved Google local search ranking from schema markup, and a memorable brand impression that keeps Tasty's Joint top of mind.

---

## Local Development Notes

- The 3D burger (`BurgerCanvas.tsx`) is dynamically imported with `ssr: false` to avoid Three.js SSR issues
- Google Maps iframe uses CSS filter to match the dark theme (`invert + hue-rotate`)
- Tailwind purges unused classes automatically on build
- All fonts are loaded via `next/font/google` for performance optimization

---

## License

Website design for Tasty's Joint, Sausalito CA. All rights reserved.
