import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { getGuide, guides } from "@/lib/guides";
import { SITE_NAME, SITE_URL } from "@/lib/site";

export function generateStaticParams() {
  return guides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `/guides/${guide.slug}` },
    openGraph: { title: guide.title, description: guide.description, type: "article", url: `${SITE_URL}/guides/${guide.slug}` },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: guide.title,
    description: guide.description,
    datePublished: guide.published,
    dateModified: guide.updated,
    author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    publisher: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
    mainEntityOfPage: `${SITE_URL}/guides/${guide.slug}`,
    about: [{ "@type": "City", name: "Deltona" }, { "@type": "AdministrativeArea", name: "Volusia County" }],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: guide.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
  const speakableSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: guide.title,
    url: `${SITE_URL}/guides/${guide.slug}`,
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: [".guide-quick-answer", "h1", "h2"],
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(speakableSchema) }} />
      <article className="py-14 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <nav className="text-sm text-muted-foreground"><Link href="/">Home</Link> / <Link href="/guides">Guides</Link></nav>
            <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-primary">Deltona Cleaning Guide</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">{guide.title}</h1>
            <p className="mt-5 text-xl leading-relaxed text-muted-foreground">{guide.description}</p>
            <p className="mt-4 text-sm text-muted-foreground">Published {guide.published} · Updated {guide.updated}</p>

            <section className="guide-quick-answer mt-10 rounded-2xl border bg-muted/40 p-6">
              <h2 className="text-xl font-bold">Quick answer</h2>
              <p className="mt-3 leading-relaxed text-muted-foreground">{guide.quickAnswer}</p>
            </section>

            <div className="mt-12 space-y-12">
              {guide.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-3xl font-bold tracking-tight">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => <p key={paragraph.slice(0, 48)} className="mt-4 text-lg leading-8 text-muted-foreground">{paragraph}</p>)}
                  {section.bullets && (
                    <ul className="mt-5 list-disc space-y-2 pl-6 text-muted-foreground">
                      {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                    </ul>
                  )}
                </section>
              ))}
            </div>

            <section className="mt-14">
              <h2 className="text-3xl font-bold">Frequently asked questions</h2>
              <div className="mt-6 space-y-5">
                {guide.faqs.map((faq) => (
                  <div key={faq.question} className="rounded-xl border p-5">
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-14 border-t pt-8">
              <h2 className="text-xl font-bold">Sources and further reading</h2>
              <ul className="mt-4 list-disc space-y-2 pl-6">
                {guide.sources.map((source) => (
                  <li key={source.href}><a href={source.href} className="text-primary underline" rel="noopener noreferrer">{source.label}</a></li>
                ))}
              </ul>
            </section>

            <div className="mt-14 rounded-2xl bg-primary p-8 text-primary-foreground">
              <h2 className="text-2xl font-bold">Need help with the cleaning itself?</h2>
              <p className="mt-2 text-primary-foreground/85">Explore Deltona cleaning options or request a quote for your property.</p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Link href="/services" className="rounded-md bg-background px-5 py-3 font-semibold text-foreground">View services</Link>
                <Link href="/contact" className="rounded-md border border-primary-foreground/50 px-5 py-3 font-semibold">Contact us</Link>
              </div>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
