import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Check, ArrowLeft, CheckCircle2, HelpCircle } from "lucide-react";
import { services } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/site";

const BookingWidget = dynamic(() => import("@/components/BookingWidget"), {
  loading: () => (
    <div
      className="h-[520px] w-full animate-pulse rounded-2xl border border-border/60 bg-muted/60"
      aria-hidden="true"
    />
  ),
});

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return { title: "Service Not Found" };

  const title = `${service.shortTitle} in Deltona, FL`;
  const description = service.description;
  const path = `/services/${service.slug}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
    },
  };
}

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.shortTitle,
    description: service.description,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: {
      "@type": "City",
      name: "Deltona, FL",
    },
  };

  const faqSchema =
    service.faqs && service.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: service.faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }
      : null;

  return (
    <div className="flex flex-col">
      <JsonLd data={serviceSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      {/* Hero Section */}
      <section className="bg-muted py-16 md:py-24">
        <Container>
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div className="max-w-2xl">
              <Link
                href="/services"
                className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6"
              >
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
              </Link>
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-muted-foreground mb-8">{service.description}</p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <Link href="/#booking">Get Your Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="tel:+16893882588">Call (689) 388-2588</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:flex flex-1 justify-center items-center">
              <div className="bg-background/50 p-8 rounded-full">
                <service.icon className="h-32 w-32 text-primary/20" />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-16">
              <div>
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {service.benefits && (
                <div>
                  <h2 className="text-3xl font-bold mb-8">Why Choose This Service?</h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="bg-muted/30 p-6 rounded-lg border">
                        <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div>
                <h2 className="text-3xl font-bold mb-8">What&apos;s Included</h2>
                <ul className="grid gap-4 sm:grid-cols-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {service.process && (
                <div>
                  <h2 className="text-3xl font-bold mb-8">Our Process</h2>
                  <div className="space-y-8">
                    {service.process.map((step, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex-none flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                          {step.step}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg">{step.title}</h3>
                          <p className="text-muted-foreground">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.faqs && (
                <div>
                  <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    {service.faqs.map((faq, idx) => (
                      <div key={idx} className="border-b pb-6 last:border-0">
                        <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                          <HelpCircle className="h-5 w-5 text-muted-foreground" />
                          {faq.question}
                        </h3>
                        <p className="text-muted-foreground pl-7">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <BookingWidget />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Don&apos;t wait. Book your {service.shortTitle || "clean"} today!
            </h2>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/#booking">Get Your Free Quote</Link>
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
