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

type JsonLdProps = {
  data?: Record<string, unknown> | Record<string, unknown>[];
};

export function JsonLd({ data }: JsonLdProps) {
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: SITE_NAME,
    url: SITE_URL,
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    image: `${SITE_URL}/opengraph-image`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE_LOCALITY,
      addressRegion: SITE_REGION,
      postalCode: SITE_POSTAL,
      addressCountry: SITE_COUNTRY,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE_GEO.latitude,
      longitude: SITE_GEO.longitude,
    },
    areaServed: SITE_AREAS.map((name) => ({
      "@type": "City",
      name,
    })),
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
  };

  const payload = data ?? localBusiness;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
