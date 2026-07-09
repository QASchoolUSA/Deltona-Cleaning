import type { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/container";

export const metadata: Metadata = {
  title: "Cleaning Services in Deltona, FL",
  description:
    "Explore house cleaning, deep cleaning, move-out cleaning, apartment cleaning, and maintenance plans in Deltona, FL. Get an instant quote online.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Cleaning Services in Deltona, FL | Deltona Cleaning",
    description:
      "House cleaning, deep cleaning, move-out cleaning, and more across Deltona and Volusia County.",
    url: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      <section className="bg-muted py-12 md:py-20">
        <Container>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Our Services
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Professional solutions for every cleaning need. From routine maintenance to deep
            restorative cleans.
          </p>
        </Container>
      </section>

      <ServicesGrid />
      <CTA />
    </>
  );
}
