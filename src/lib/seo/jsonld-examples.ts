/**
 * Ready-to-paste JSON-LD examples from Phase 4 of the search blueprint.
 * Runtime site graph is built in `schema.ts` and emitted via `<JsonLd />`.
 *
 * Replace REPLACE_* URLs before adding them to SAME_AS in schema.ts.
 */

export const SITEWIDE_GRAPH_EXAMPLE = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://deltonacleaning.com/#organization",
      name: "Deltona Cleaning",
      url: "https://deltonacleaning.com",
      logo: {
        "@type": "ImageObject",
        url: "https://deltonacleaning.com/opengraph-image",
      },
      email: "info@deltonacleaning.com",
      telephone: "(689) 388-2588",
      sameAs: [
        "REPLACE_FACEBOOK_URL",
        "REPLACE_INSTAGRAM_URL",
        "REPLACE_GOOGLE_BUSINESS_PROFILE_URL",
        "REPLACE_YELP_URL",
        "REPLACE_BBB_OR_INDUSTRY_REGISTER_URL",
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Deltona",
        addressRegion: "FL",
        postalCode: "32725",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Deltona, FL" },
        { "@type": "City", name: "DeBary, FL" },
        { "@type": "City", name: "Orange City, FL" },
        { "@type": "City", name: "Lake Helen, FL" },
      ],
      about: [
        { "@type": "Thing", name: "Professional Cleaning Services in Deltona, FL" },
        { "@type": "Thing", name: "Residential House Cleaning" },
        { "@type": "Thing", name: "Move-Out Cleaning" },
        { "@type": "Thing", name: "Airbnb Cleaning" },
        { "@type": "Thing", name: "Post-Construction Cleaning" },
        { "@type": "Thing", name: "Commercial Office and Restaurant Cleaning" },
      ],
      mentions: [
        { "@type": "Thing", name: "Apartment Cleaning" },
        { "@type": "Thing", name: "Turnover Cleaning" },
        { "@type": "Thing", name: "Security Deposit Recovery" },
        { "@type": "Place", name: "Volusia County, Florida" },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://deltonacleaning.com/#website",
      url: "https://deltonacleaning.com",
      name: "Deltona Cleaning",
      publisher: { "@id": "https://deltonacleaning.com/#organization" },
      inLanguage: "en-US",
      about: {
        "@type": "Thing",
        name: "Professional Cleaning Services in Deltona, FL",
      },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://deltonacleaning.com/#business",
      name: "Deltona Cleaning",
      url: "https://deltonacleaning.com",
      image: "https://deltonacleaning.com/opengraph-image",
      telephone: "(689) 388-2588",
      email: "info@deltonacleaning.com",
      priceRange: "$$",
      parentOrganization: { "@id": "https://deltonacleaning.com/#organization" },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Deltona",
        addressRegion: "FL",
        postalCode: "32725",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 28.9005,
        longitude: -81.2637,
      },
      areaServed: [
        { "@type": "City", name: "Deltona, FL" },
        { "@type": "City", name: "DeBary, FL" },
        { "@type": "City", name: "Orange City, FL" },
        { "@type": "City", name: "Lake Helen, FL" },
      ],
      about: [
        { "@type": "Thing", name: "Professional Cleaning Services in Deltona, FL" },
        { "@type": "Thing", name: "Residential House Cleaning" },
        { "@type": "Thing", name: "Move-Out Cleaning" },
        { "@type": "Thing", name: "Airbnb Cleaning" },
        { "@type": "Thing", name: "Post-Construction Cleaning" },
        { "@type": "Thing", name: "Commercial Office and Restaurant Cleaning" },
      ],
      mentions: [
        { "@type": "Thing", name: "Apartment Cleaning" },
        { "@type": "Thing", name: "Turnover Cleaning" },
        { "@type": "Thing", name: "Deep Cleaning" },
        { "@type": "Thing", name: "Property Managers" },
        { "@type": "Thing", name: "Homeowners" },
        { "@type": "Place", name: "Deltona, FL" },
      ],
      sameAs: [
        "REPLACE_FACEBOOK_URL",
        "REPLACE_INSTAGRAM_URL",
        "REPLACE_GOOGLE_BUSINESS_PROFILE_URL",
        "REPLACE_YELP_URL",
        "REPLACE_BBB_OR_INDUSTRY_REGISTER_URL",
      ],
    },
  ],
} as const;
