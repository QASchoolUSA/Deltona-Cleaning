import type { Metadata } from "next";
import Link from "next/link";
import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTA } from "@/components/sections/CTA";
import { Container } from "@/components/ui/container";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildFaqSchema, CORE_ENTITY } from "@/lib/seo/schema";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/site";
import { services } from "@/lib/data";

export const metadata: Metadata = {
  title: {
    absolute: "Cleaning Services in Deltona, FL | Deltona Cleaning",
  },
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    title: "Cleaning Services in Deltona, FL | Deltona Cleaning",
    description: SITE_DESCRIPTION,
    url: "/",
  },
};

const homeFaqs = [
  {
    question: "What cleaning services does Deltona Cleaning offer?",
    answer:
      "Deltona Cleaning offers house cleaning, deep cleaning, apartment cleaning, move-out cleaning, Airbnb cleaning, post-construction cleaning, office cleaning, restaurant and café cleaning, and maintenance plans across Deltona, DeBary, Orange City, and Lake Helen, FL.",
  },
  {
    question: "Who do you serve in Deltona?",
    answer:
      "We serve homeowners, apartment and condo owners, property managers, landlords, Airbnb hosts, office managers, and restaurant or café operators who need reliable local cleaning.",
  },
  {
    question: "How do I get a cleaning quote in Deltona, FL?",
    answer:
      "Use the instant quote tool on this page, call (689) 388-2588, or send a request through the contact form. Online estimates are based on service type, size, and add-ons.",
  },
];

export default function Home() {
  const faqSchema = buildFaqSchema(homeFaqs);

  return (
    <>
      {faqSchema && <JsonLd data={faqSchema} />}
      <Hero />
      <ServicesGrid />

      <section className="py-16 md:py-20 bg-muted/40">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {CORE_ENTITY}
            </h2>
            <p className="mt-4 text-muted-foreground">
              One local team covering residential, vacancy, short-term rental, post-build,
              and commercial cleaning for Deltona and nearby Volusia County.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="block rounded-md border bg-background px-4 py-3 hover:border-primary transition-colors"
                >
                  <span className="font-semibold text-foreground">
                    {service.shortTitle}
                  </span>
                  <span className="block text-muted-foreground mt-0.5 line-clamp-1">
                    {service.audiences.join(" · ")}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="text-center mt-8 text-sm text-muted-foreground">
            Property managers: read the{" "}
            <Link
              href="/blog/deltona-move-out-cleaning-landlord-inspection-checklist"
              className="text-primary hover:underline"
            >
              Deltona move-out inspection checklist
            </Link>
            .
          </p>
        </Container>
      </section>

      <WhyChooseUs />
      <Testimonials />

      <section className="py-16 md:py-20">
        <Container className="max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {homeFaqs.map((faq) => (
              <div key={faq.question} className="border-b pb-6 last:border-0">
                <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-8 text-sm">
            <Link href="/contact" className="text-primary hover:underline">
              Contact {SITE_NAME}
            </Link>
          </p>
        </Container>
      </section>

      <CTA />
    </>
  );
}
