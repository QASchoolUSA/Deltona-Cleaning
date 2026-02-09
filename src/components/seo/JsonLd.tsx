export function JsonLd() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Deltona Cleaning",
        "image": "https://deltonacleaning.com/logo.png", // Placeholder
        "telephone": "(689) 388-2588",
        "email": "info@deltonacleaning.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Deltona",
            "addressLocality": "Deltona",
            "addressRegion": "FL",
            "postalCode": "32725",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 28.9005, // Approximation for Deltona
            "longitude": -81.2637
        },
        "url": "https://deltonacleaning.com",
        "priceRange": "$$",
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday"
                ],
                "opens": "08:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "14:00"
            }
        ],
        "sameAs": [
            "https://facebook.com/deltonacleaning"
        ]
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    )
}
