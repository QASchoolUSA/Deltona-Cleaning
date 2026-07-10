import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { blogPosts } from "@/lib/data";
import { SITE_NAME, SITE_URL } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, CORE_ENTITY } from "@/lib/seo/schema";
import { pageImages } from "@/lib/images";
import { CardThumb } from "@/components/ui/content-image";

export const metadata: Metadata = {
  title: "Cleaning Guides for Deltona, FL",
  description:
    "Expert cleaning guides for Deltona homeowners, landlords, property managers, Airbnb hosts, and local businesses—move-out checklists, turnover tips, and more.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Cleaning Guides for Deltona, FL | ${SITE_NAME}`,
    description:
      "AEO-ready guides on move-out inspections, house cleaning, and commercial hygiene in Deltona and Volusia County.",
    url: "/blog",
  },
};

const postImages: Record<string, { src: string; alt: string }> = {
  "deltona-move-out-cleaning-landlord-inspection-checklist": pageImages.blogMoveOut,
};

export default function BlogIndexPage() {
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
  ]);

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${SITE_URL}/blog#webpage`,
    url: `${SITE_URL}/blog`,
    name: "Cleaning Guides for Deltona, FL",
    about: { "@type": "Thing", name: CORE_ENTITY },
    isPartOf: { "@id": `${SITE_URL}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: blogPosts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/blog/${post.slug}`,
        name: post.title,
      })),
    },
  };

  const hero = pageImages.blogIndex;

  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumb} />
      <JsonLd data={collectionSchema} />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={hero.src}
            alt={hero.alt}
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
        <Container className="relative py-12 md:py-20">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Cleaning Guides for Deltona, FL
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Practical playbooks for homeowners, landlords, property managers, Airbnb hosts,
            and local businesses across Deltona and Volusia County.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <ul className="grid gap-6 max-w-3xl">
            {blogPosts.map((post) => {
              const image =
                postImages[post.slug] ?? pageImages.blogIndex;
              return (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block overflow-hidden rounded-lg border hover:border-primary transition-colors"
                  >
                    <CardThumb src={image.src} alt={image.alt} />
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground mb-2">
                        Updated {post.dateModified}
                      </p>
                      <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                      <p className="text-muted-foreground">{post.description}</p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </Container>
      </section>
    </div>
  );
}
