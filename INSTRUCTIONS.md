# High-Ticket Launch — Setup Instructions

## Before First Run

**IMPORTANT:** Copy `.env.example` to `.env` and fill all values. The build will fail without them.

```bash
cp .env.example .env
```

Then edit `.env` and configure the required variables (see table below).

---

## Environment Variables

This project does not require any environment variables for the MVP. The landing page is fully static and ready to deploy.

If you add features later (e.g., forms, analytics, CMS), you may need:

| Variable | Required | Where to get |
|----------|----------|---------------|
| NEXT_PUBLIC_SITE_URL | Optional | Your production URL (e.g., https://yoursite.com) |

---

## Commands

### Install dependencies
```bash
pnpm install
```

### Run development server
```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production
```bash
pnpm build
```

### Start production server
```bash
pnpm start
```

---

## Deploy (Vercel)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import the project in [Vercel](https://vercel.com)
3. Add environment variables in **Project Settings → Environment Variables** (if needed)
4. Deploy

---

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with Inter font
│   ├── page.tsx            # Landing page (Hero, Social Proof, Manifesto, Product, Testimonials)
│   ├── not-found.tsx       # 404 page
│   └── globals.css         # Tailwind imports + root styles
├── components/
│   └── sections/
│       ├── hero.tsx        # Hero section with CTA
│       ├── social-proof-bar.tsx  # Metrics bar
│       ├── manifesto.tsx   # Mission statement
│       ├── product-showcase.tsx  # Product cards with features
│       └── testimonials.tsx      # Customer testimonials
├── types/
│   └── index.ts            # Shared TypeScript types
└── lib/
    └── utils.ts            # cn() helper for Tailwind
```

---

## Customization

### Add a contact form
Use the Chat to generate a form component with Server Actions and Zod validation.

### Connect a CMS
Integrate Sanity, Contentful, or Prismic for dynamic content.

### Add analytics
Install Vercel Analytics or Google Analytics.

### Integrate payments
Add Stripe for checkout flows.

---

## Tech Stack

- **Next.js 16** — App Router, Server Components
- **React 19** — Latest React features
- **Tailwind CSS** — Utility-first styling (zinc palette)
- **TypeScript** — Type safety
- **Lucide React** — Icon library
- **Framer Motion** — Animation library (optional)

---

## Support

Built with [GoDev Studio](https://godev.studio). For questions, contact support or use the Chat to extend your app.