import type { Metadata } from "next";
import Image from "next/image";
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
import { pageImages } from "@/lib/images";

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
  const heroImage = pageImages.services;

  return (
    <>
      <JsonLd data={collectionSchema} />
      <JsonLd data={breadcrumb} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/60"
            aria-hidden="true"
          />
        </div>
        <Container className="relative py-12 md:py-20">
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
