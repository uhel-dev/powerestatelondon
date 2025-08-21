# London Plumbing & Heating Systems — Next.js Template

A production-ready, SEO-focused Next.js App Router template for local trades businesses. Content and routes are driven by a single `site.config.ts` and light MD/MDX content.

## Quick start
1. Install dependencies
```bash
npm i
```
2. Set environment
Create `.env.local`:
```env
RESEND_API_KEY=""
NEXT_PUBLIC_SITE_URL="https://example.com"
```
3. Run dev server
```bash
npm run dev
```
4. Build
```bash
npm run build
```

## Retheme/rebrand
Edit `site.config.ts`. Changing the business name, phones, and address will update the entire site (header, footer, CTAs, services, contact links, schema).

- Services: update the `services` array (slug, name, image, features)
- Testimonials: update `testimonials`
- Partner logos: add images to `public/images/brands` and update `partnerLogos`
- Blog: add `.mdx` files to `src/content/blog`

## Tech
- Next.js App Router + TypeScript
- Tailwind CSS v4
- Next/Image for optimization
- Simple UI primitives (button/input/card/accordion)
- Zod for client/server validation
- Sitemap/robots via `next-sitemap`

## Deploy
- Vercel: set `NEXT_PUBLIC_SITE_URL` to your domain
- Optional email via Resend: set `RESEND_API_KEY`

## License
This template provides generic placeholder content and no third-party brand assets.
