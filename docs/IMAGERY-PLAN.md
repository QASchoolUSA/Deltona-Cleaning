# Website imagery plan

## Approach
- One **section-relevant** photograph per major page/section (not decorative stock clutter).
- Central registry: `src/lib/images.ts`
- Reusable components: `src/components/ui/content-image.tsx` (`PageHeroImage`, `ContentImage`, `CardThumb`)
- Assets live in `public/images/{pages,services,blog}/` (compressed JPEGs)

## Placement map

| Page / section | Image | Role |
| --- | --- | --- |
| Home hero | `pages/hero-home.jpg` | Full-bleed cleaned living room behind quote CTA |
| Home services grid | per-service thumbs | Card imagery for each offering |
| Why Choose Us | `pages/about-team.jpg` | Real cleaning work visual |
| About | `pages/about-team.jpg` | Mission section photo |
| Services index | `pages/services-overview.jpg` | Hero background |
| Each `/services/[slug]` | `services/{slug}.jpg` | Full-bleed service hero + related thumbs |
| Contact | `pages/contact-area.jpg` | Service-area neighborhood photo above map |
| Blog index | `blog/blog-index.jpg` | Guides hero + post cards |
| Move-out pillar | `blog/blog-move-out.jpg` | Article hero + lead image |

## Future upgrades
1. Replace generated photos with real Deltona crew / before-after shots when available.
2. Add WebP/AVIF variants via `next/image` (already optimized at request time).
3. Optional: before/after pairs on move-out and deep-clean pages for conversion.
