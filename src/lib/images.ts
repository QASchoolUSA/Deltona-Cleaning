/** Central image registry — paths under /public */

export const pageImages = {
  homeHero: {
    src: "/images/pages/hero-home.jpg",
    alt: "Bright, freshly cleaned living room in a Deltona, FL home",
  },
  about: {
    src: "/images/pages/about-team.jpg",
    alt: "Professional cleaner wiping a sparkling kitchen countertop",
  },
  services: {
    src: "/images/pages/services-overview.jpg",
    alt: "Professional cleaning supplies arranged on a bright kitchen island",
  },
  contact: {
    src: "/images/pages/contact-area.jpg",
    alt: "Quiet Deltona-area residential street representing our service area",
  },
  blogIndex: {
    src: "/images/blog/blog-index.jpg",
    alt: "Calm workspace for Deltona cleaning guides and checklists",
  },
  blogMoveOut: {
    src: "/images/blog/blog-move-out.jpg",
    alt: "Move-out inspection checklist and keys on a clean rental kitchen counter",
  },
} as const;

export const serviceImages: Record<
  string,
  { src: string; alt: string }
> = {
  "house-cleaning": {
    src: "/images/services/house-cleaning.jpg",
    alt: "Spotless suburban living room after professional house cleaning in Deltona",
  },
  "deep-cleaning": {
    src: "/images/services/deep-cleaning.jpg",
    alt: "Deep-cleaned bathroom with gleaming tile and fixtures",
  },
  "move-out-cleaning": {
    src: "/images/services/move-out-cleaning.jpg",
    alt: "Empty apartment kitchen ready for a move-out cleaning inspection",
  },
  "apartment-cleaning": {
    src: "/images/services/apartment-cleaning.jpg",
    alt: "Bright apartment living room and kitchenette after cleaning",
  },
  "airbnb-cleaning": {
    src: "/images/services/airbnb-cleaning.jpg",
    alt: "Guest-ready Airbnb bedroom with fresh white linens",
  },
  "post-construction-cleaning": {
    src: "/images/services/post-construction-cleaning.jpg",
    alt: "Post-construction dust cleanup in a newly remodeled home",
  },
  "commercial-office-cleaning": {
    src: "/images/services/commercial-office-cleaning.jpg",
    alt: "Modern office suite after professional commercial cleaning",
  },
  "restaurant-cafe-cleaning": {
    src: "/images/services/restaurant-cafe-cleaning.jpg",
    alt: "Café dining room reset after closing-shift cleaning",
  },
  "maintenance-cleaning": {
    src: "/images/services/maintenance-cleaning.jpg",
    alt: "Maintained home entryway and hallway after scheduled cleaning",
  },
};

export function getServiceImage(slug: string) {
  return (
    serviceImages[slug] ?? {
      src: "/images/pages/services-overview.jpg",
      alt: "Professional cleaning services in Deltona, FL",
    }
  );
}
