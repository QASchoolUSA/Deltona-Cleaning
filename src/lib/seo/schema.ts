import {
  SITE_AREAS,
  SITE_COUNTRY,
  SITE_EMAIL,
  SITE_GEO,
  SITE_LOCALITY,
  SITE_NAME,
  SITE_PHONE,
  SITE_POSTAL,
  SITE_REGION,
  SITE_URL,
} from "@/lib/site";
import type { Service } from "@/lib/data";

/**
 * Core + sub-entities from the SEO/AEO/GEO blueprint (Phase 1).
 * Keep these aligned with docs/SEO-AEO-GEO-BLUEPRINT.md.
 */
export const CORE_ENTITY = "Professional Cleaning Services in Deltona, FL";

export const SUB_ENTITIES = [
  "Residential House Cleaning",
  "Move-Out Cleaning",
  "Airbnb Cleaning",
  "Post-Construction Cleaning",
  "Commercial Office and Restaurant Cleaning",
] as const;

export const MENTION_ENTITIES = [
  "Apartment Cleaning",
  "Turnover Cleaning",
  "Deep Cleaning",
  "Security Deposit Recovery",
  "Property Managers",
  "Homeowners",
] as const;

/**
 * Verified profile URLs for entity reconciliation.
 * Omit empty placeholders — do not emit blank sameAs strings.
 */
export const SAME_AS: string[] = [
  // "https://www.facebook.com/REPLACE",
  // "https://www.instagram.com/REPLACE",
  // "https://g.page/REPLACE",
  // "https://www.yelp.com/biz/REPLACE",
  // "https://www.bbb.org/REPLACE",
];

const thing = (name: string) => ({ "@type": "Thing" as const, name });
const place = (name: string) => ({ "@type": "Place" as const, name });
const city = (name: string) => ({ "@type": "City" as const, name });

const postalAddress = {
  "@type": "PostalAddress" as const,
  addressLocality: SITE_LOCALITY,
  addressRegion: SITE_REGION,
  postalCode: SITE_POSTAL,
  addressCountry: SITE_COUNTRY,
};

const areaServed = SITE_AREAS.map((name) => city(name));

const serviceOffers = [
  "House Cleaning",
  "Apartment Cleaning",
  "Move-Out Cleaning",
  "Airbnb Cleaning",
  "Post-Construction Cleaning",
  "Commercial Office Cleaning",
  "Restaurant and Cafe Cleaning",
  "Deep Cleaning",
  "Maintenance Cleaning",
] as const;

export function buildSiteGraph() {
  const organizationId = `${SITE_URL}/#organization`;
  const websiteId = `${SITE_URL}/#website`;
  const businessId = `${SITE_URL}/#business`;

  const about = [thing(CORE_ENTITY), ...SUB_ENTITIES.map(thing)];
  const mentions = [
    ...MENTION_ENTITIES.map(thing),
    place("Deltona, FL"),
    place("Volusia County, Florida"),
  ];

  const organization: Record<string, unknown> = {
    "@type": "Organization",
    "@id": organizationId,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/logo.svg`,
    },
    email: SITE_EMAIL,
    telephone: SITE_PHONE,
    address: postalAddress,
    areaServed,
    about,
    mentions,
  };

  if (SAME_AS.length > 0) {
    organization.sameAs = SAME_AS;
  }

  const website: Record<string, unknown> = {
    "@type": "WebSite",
    "@id": websiteId,
    url: SITE_URL,
    name: SITE_NAME,
    publisher: { "@id": organizationId },
    inLanguage: "en-US",
    about: thing(CORE_ENTITY),
  };

  const professionalService: Record<string, unknown> = {
    "@type": ["ProfessionalService", "HomeAndConstructionBusiness"],
    "@id": businessId,
    name: SITE_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image`,
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    priceRange: "$$",
    parentOrganization: { "@id": organizationId },
    address: postalAddress,
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_GEO.latitude,
      longitude: SITE_GEO.longitude,
    },
    areaServed,
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${SITE_NAME} Services`,
      itemListElement: serviceOffers.map((name) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name,
          areaServed: "Deltona, FL",
        },
      })),
    },
    about,
    mentions,
  };

  if (SAME_AS.length > 0) {
    professionalService.sameAs = SAME_AS;
  }

  return {
    "@context": "https://schema.org",
    "@graph": [organization, website, professionalService],
  };
}

export function buildServiceSchema(service: Service) {
  const imagePath = `/images/services/${service.slug}.jpg`;
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/services/${service.slug}#service`,
    name: service.title,
    serviceType: service.shortTitle,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    image: `${SITE_URL}${imagePath}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: areaServed,
    audience: service.audiences.map((name) => ({
      "@type": "Audience",
      audienceType: name,
    })),
    about: [
      thing(CORE_ENTITY),
      thing(service.shortTitle),
      place("Deltona, FL"),
    ],
    mentions: [
      ...service.audiences.map(thing),
      place("Volusia County, Florida"),
    ],
  };
}

export function buildHowToSchema(service: Service) {
  if (!service.process?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: `How ${service.title} works`,
    description: service.description,
    step: service.process.map((step, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: step.title,
      text: step.description,
    })),
  };
}

export function buildFaqSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http") ? item.path : `${SITE_URL}${item.path}`,
    })),
  };
}

export function buildMoveOutTechArticleSchema(opts?: {
  url?: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const url =
    opts?.url ??
    `${SITE_URL}/blog/deltona-move-out-cleaning-landlord-inspection-checklist`;
  const datePublished = opts?.datePublished ?? "2026-07-10";
  const dateModified = opts?.dateModified ?? datePublished;

  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    "@id": `${url}#article`,
    headline:
      "Move-Out Cleaning Inspection Checklist for Deltona, FL Landlords & Property Managers",
    description:
      "What Deltona landlords and property managers check on move-out cleaning inspections, including fail zones, photo proof standards, and vacancy SLAs.",
    url,
    datePublished,
    dateModified,
    inLanguage: "en-US",
    author: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    about: [
      thing("Move-Out Cleaning"),
      thing(CORE_ENTITY),
      thing("Property Managers"),
      place("Deltona, FL"),
    ],
    mentions: [
      thing("Apartment Cleaning"),
      thing("Turnover Cleaning"),
      thing("Security Deposit Recovery"),
      ...SUB_ENTITIES.filter((e) => e !== "Move-Out Cleaning").map(thing),
      place("Volusia County, Florida"),
    ],
    proficiencyLevel: "Expert",
    dependencies:
      "Local knowledge of Deltona and Volusia County rental inspection practices",
  };
}

export function buildAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${SITE_URL}/about#webpage`,
    url: `${SITE_URL}/about`,
    name: `About ${SITE_NAME}`,
    description: `${SITE_NAME} is a licensed and insured cleaning company serving Deltona, DeBary, Orange City, and Lake Helen.`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#organization` },
    mainEntity: { "@id": `${SITE_URL}/#business` },
  };
}

export function buildContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE_URL}/contact#webpage`,
    url: `${SITE_URL}/contact`,
    name: `Contact ${SITE_NAME}`,
    description: `Request a free cleaning quote in Deltona, FL. Call ${SITE_PHONE} or send a request online.`,
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: { "@id": `${SITE_URL}/#business` },
    mainEntity: { "@id": `${SITE_URL}/#business` },
  };
}

export function buildServicesCollectionSchema(serviceList: Service[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/services#webpage`,
    url: `${SITE_URL}/services`,
    name: "Cleaning Services in Deltona, FL",
    description:
      "House cleaning, move-out cleaning, Airbnb cleaning, post-construction, office, and restaurant cleaning across Deltona and Volusia County.",
    isPartOf: { "@id": `${SITE_URL}/#website` },
    about: thing(CORE_ENTITY),
    mainEntity: {
      "@type": "ItemList",
      itemListElement: serviceList.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/services/${service.slug}`,
        name: service.title,
      })),
    },
  };
}
