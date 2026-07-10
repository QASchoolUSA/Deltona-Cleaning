import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Check, ArrowLeft, CheckCircle2, HelpCircle } from "lucide-react";
import { getServiceBySlug, services } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_NAME, SITE_PHONE, SITE_PHONE_HREF, SITE_URL } from "@/lib/site";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
} from "@/lib/seo/schema";
import { getServiceImage } from "@/lib/images";
import { CardThumb } from "@/components/ui/content-image";

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
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  const title = `${service.shortTitle} in Deltona, FL`;
  const description = service.description;
  const path = `/services/${service.slug}`;
  const image = getServiceImage(service.slug);

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url: path,
      type: "website",
      images: [{ url: image.src, alt: image.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_NAME}`,
      description,
      images: [image.src],
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
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const related = service.relatedSlugs
    .map((relatedSlug) => getServiceBySlug(relatedSlug))
    .filter(Boolean);

  const image = getServiceImage(service.slug);
  const serviceSchema = buildServiceSchema(service);
  const faqSchema = buildFaqSchema(service.faqs);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.shortTitle, path: `/services/${service.slug}` },
  ]);

  return (
    <div className="flex flex-col">
      <JsonLd data={serviceSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <JsonLd data={breadcrumbSchema} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/55"
            aria-hidden="true"
          />
        </div>
        <Container className="relative py-16 md:py-24">
          <div className="max-w-2xl">
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
            </Link>
            <p className="text-sm font-medium text-primary mb-3">
              Deltona, FL · {service.audiences.join(" · ")}
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground mb-8">{service.description}</p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <Link href="/#booking">Get Your Free Quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={SITE_PHONE_HREF}>Call {SITE_PHONE}</a>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-16">
              {service.aiOverview && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">
                    What Is {service.shortTitle} in Deltona, FL?
                  </h2>
                  <p className="text-lg text-foreground leading-relaxed border-l-4 border-primary pl-4">
                    {service.aiOverview}
                  </p>
                </div>
              )}

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
                    {service.benefits.map((benefit) => (
                      <div key={benefit.title} className="bg-muted/30 p-6 rounded-lg border">
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
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <div className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                        <Check className="h-4 w-4" />
                      </div>
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {service.failPoints && service.failPoints.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Deltona Move-Out Fail Points Landlords Catch
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Based on Deltona Cleaning vacancy turns across Deltona and Volusia County
                    rentals (2024–2026 operational pattern). Cleaning reduces cleaning-related
                    deductions; it does not legally guarantee deposit return.
                  </p>
                  <div className="overflow-x-auto rounded-lg border">
                    <table className="w-full text-sm">
                      <thead className="bg-muted text-left">
                        <tr>
                          <th className="p-3 font-semibold">Fail zone</th>
                          <th className="p-3 font-semibold">Fail rate</th>
                          <th className="p-3 font-semibold">Typical reaction</th>
                          <th className="p-3 font-semibold">Fix add-on</th>
                        </tr>
                      </thead>
                      <tbody>
                        {service.failPoints.map((row) => (
                          <tr key={row.zone} className="border-t">
                            <td className="p-3 font-medium text-foreground">{row.zone}</td>
                            <td className="p-3 text-muted-foreground">{row.failRate}</td>
                            <td className="p-3 text-muted-foreground">{row.typicalReaction}</td>
                            <td className="p-3 text-muted-foreground">{row.fixAddOn}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-sm">
                    <Link
                      href="/blog/deltona-move-out-cleaning-landlord-inspection-checklist"
                      className="text-primary font-medium hover:underline"
                    >
                      Read the full landlord inspection checklist →
                    </Link>
                  </p>
                </div>
              )}

              {service.pricingTiers && service.pricingTiers.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold mb-4">
                    Time-on-Site Benchmarks by Unit Size
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    Light = recently maintained vacant unit. Standard = typical turnover.
                    Heavy = neglected, pet, or long-vacancy condition.
                  </p>
                  <div className="overflow-x-auto rounded-lg border">
                    <table className="w-full text-sm">
                      <thead className="bg-muted text-left">
                        <tr>
                          <th className="p-3 font-semibold">Unit</th>
                          <th className="p-3 font-semibold">Light</th>
                          <th className="p-3 font-semibold">Standard</th>
                          <th className="p-3 font-semibold">Heavy</th>
                        </tr>
                      </thead>
                      <tbody>
                        {service.pricingTiers.map((row) => (
                          <tr key={row.unit} className="border-t">
                            <td className="p-3 font-medium text-foreground">{row.unit}</td>
                            <td className="p-3 text-muted-foreground">{row.light}</td>
                            <td className="p-3 text-muted-foreground">{row.standard}</td>
                            <td className="p-3 text-muted-foreground">{row.heavy}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {service.slaNote && (
                <div className="rounded-lg border bg-muted/40 p-6">
                  <h2 className="text-2xl font-bold mb-3">Property Manager SLA</h2>
                  <p className="text-muted-foreground leading-relaxed">{service.slaNote}</p>
                </div>
              )}

              {service.process && (
                <div>
                  <h2 className="text-3xl font-bold mb-8">Our Process</h2>
                  <div className="space-y-8">
                    {service.process.map((step) => (
                      <div key={step.step} className="flex gap-4">
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
                    {service.faqs.map((faq) => (
                      <div key={faq.question} className="border-b pb-6 last:border-0">
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

              {related.length > 0 && (
                <div>
                  <h2 className="text-3xl font-bold mb-6">Related Cleaning Services</h2>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {related.map((item) => {
                      if (!item) return null;
                      const relatedImage = getServiceImage(item.slug);
                      return (
                        <li key={item.slug}>
                          <Link
                            href={`/services/${item.slug}`}
                            className="group block overflow-hidden rounded-lg border hover:border-primary transition-colors"
                          >
                            <CardThumb src={relatedImage.src} alt={relatedImage.alt} />
                            <div className="p-4">
                              <span className="font-semibold text-foreground">
                                {item.shortTitle} in Deltona
                              </span>
                              <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                                {item.description}
                              </p>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                <BookingWidget />
                <div className="rounded-lg border p-4 text-sm text-muted-foreground">
                  <p className="font-semibold text-foreground mb-2">Serving</p>
                  <p>Deltona, DeBary, Orange City, and Lake Helen, FL.</p>
                  <p className="mt-3">
                    <a href={SITE_PHONE_HREF} className="text-primary font-medium hover:underline">
                      {SITE_PHONE}
                    </a>
                  </p>
                  <p className="mt-1">
                    <Link href="/contact" className="text-primary hover:underline">
                      Contact form →
                    </Link>
                  </p>
                  <p className="mt-1 text-xs break-all">{SITE_URL}/services/{service.slug}</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-primary py-16 text-primary-foreground">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              Book your {service.shortTitle} in Deltona today
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
