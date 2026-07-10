import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildAboutPageSchema,
  buildBreadcrumbSchema,
  CORE_ENTITY,
  SUB_ENTITIES,
} from "@/lib/seo/schema";
import { SITE_AREAS, SITE_NAME, SITE_PHONE, SITE_PHONE_HREF } from "@/lib/site";
import { services } from "@/lib/data";
import { pageImages } from "@/lib/images";
import { ContentImage } from "@/components/ui/content-image";

export const metadata: Metadata = {
  title: "About Deltona Cleaning | Local Licensed Team",
  description:
    "Meet Deltona Cleaning — licensed, insured cleaners serving Deltona, DeBary, Orange City, and Lake Helen with house, move-out, Airbnb, post-construction, office, and restaurant cleaning.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Deltona Cleaning",
    description:
      "Licensed & insured cleaning professionals serving Deltona and surrounding Volusia County communities.",
    url: "/about",
  },
};

const audiences = [
  {
    title: "Homeowners",
    body: "Recurring house cleaning and seasonal deep cleans built for Florida humidity and pollen.",
    href: "/services/house-cleaning",
  },
  {
    title: "Apartment & condo owners",
    body: "Building-aware apartment cleans and vacancy turns that respect access rules.",
    href: "/services/apartment-cleaning",
  },
  {
    title: "Property managers & landlords",
    body: "Inspection-ready move-out cleans with photo proof and 24–48h vacancy targets.",
    href: "/services/move-out-cleaning",
  },
  {
    title: "Airbnb & STR hosts",
    body: "Same-day turnover cleaning with linen resets and pre-check-in photo packs.",
    href: "/services/airbnb-cleaning",
  },
  {
    title: "Office & business owners",
    body: "After-hours office cleaning and restaurant/café front-of-house support.",
    href: "/services/commercial-office-cleaning",
  },
];

export default function AboutPage() {
  const aboutSchema = buildAboutPageSchema();
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ]);
  const aboutImage = pageImages.about;

  return (
    <div className="flex flex-col">
      <JsonLd data={aboutSchema} />
      <JsonLd data={breadcrumb} />

      <section className="bg-muted py-12 md:py-20">
        <Container>
          <p className="text-sm font-medium text-primary mb-3">{CORE_ENTITY}</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            About {SITE_NAME}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Licensed, insured cleaning professionals serving {SITE_AREAS.join(", ")} —
            built for homeowners, property managers, hosts, and local businesses.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                {SITE_NAME} exists to deliver inspection-grade, checklist-driven cleaning—
                not vague “tidy” visits. Every service maps to a real Deltona use case:
                recurring homes, deposit-focused vacancies, guest turns, post-build dust
                control, and after-hours commercial spaces.
              </p>
              <p className="text-muted-foreground">
                Our team is background-checked, trained on written SOPs, and accountable to
                photo documentation where vacancies and short-term rentals demand proof.
                We serve Volusia County communities with clear NAP consistency: Deltona, FL
                · {SITE_PHONE}.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Button size="lg" asChild>
                  <Link href="/#booking">Get a Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href={SITE_PHONE_HREF}>Call {SITE_PHONE}</a>
                </Button>
              </div>
            </div>
            <ContentImage
              src={aboutImage.src}
              alt={aboutImage.alt}
              aspect="photo"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Container>
      </section>

      <section className="bg-muted/50 py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 items-start mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">What we clean</h2>
              <ul className="space-y-2 text-muted-foreground">
                {SUB_ENTITIES.map((entity) => (
                  <li key={entity} className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>{entity}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm pt-4">
                <Link href="/services" className="text-primary font-medium hover:underline">
                  View all {services.length} services →
                </Link>
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4">Who we serve</h2>
              <p className="text-muted-foreground mb-6">
                One local team, five buyer contexts—each with its own checklist and success
                metric.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                {audiences.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="rounded-lg border bg-background p-5 hover:border-primary transition-colors"
                  >
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.body}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16">
        <Container className="text-center max-w-2xl">
          <h2 className="text-2xl font-bold mb-4">Service area</h2>
          <p className="text-muted-foreground mb-6">{SITE_AREAS.join(" · ")}</p>
          <Button asChild>
            <Link href="/contact">Contact {SITE_NAME}</Link>
          </Button>
        </Container>
      </section>
    </div>
  );
}
