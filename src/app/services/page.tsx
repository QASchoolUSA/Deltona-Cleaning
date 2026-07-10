import type { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbSchema,
  buildServicesCollectionSchema,
  CORE_ENTITY,
} from "@/lib/seo/schema";
import { services } from "@/lib/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cleaning Services in Deltona, FL",
  description:
    "House cleaning, apartment cleaning, move-out cleaning, Airbnb cleaning, post-construction, office, and restaurant cleaning in Deltona, FL. Instant online quotes.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Cleaning Services in Deltona, FL | Deltona Cleaning",
    description:
      "Full-service residential and commercial cleaning across Deltona, DeBary, Orange City, and Lake Helen.",
    url: "/services",
  },
};

export default function ServicesPage() {
  const collectionSchema = buildServicesCollectionSchema(services);
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
  ]);

  return (
    <>
      <JsonLd data={collectionSchema} />
      <JsonLd data={breadcrumb} />

      <section className="bg-muted py-12 md:py-20">
        <Container>
          <p className="text-sm font-medium text-primary mb-3">{CORE_ENTITY}</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Cleaning Services in Deltona, FL
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Residential, vacancy, short-term rental, post-construction, and commercial
            cleaning—each with a written checklist for Deltona and Volusia County.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            New here? Start with our{" "}
            <Link
              href="/blog/deltona-move-out-cleaning-landlord-inspection-checklist"
              className="text-primary hover:underline"
            >
              move-out landlord inspection checklist
            </Link>
            .
          </p>
        </Container>
      </section>

      <ServicesGrid />
      <CTA />
    </>
  );
}
