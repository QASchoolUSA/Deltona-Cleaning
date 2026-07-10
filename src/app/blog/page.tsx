import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { blogPosts } from "@/lib/data";
import { SITE_NAME } from "@/lib/site";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildBreadcrumbSchema, CORE_ENTITY } from "@/lib/seo/schema";
import { SITE_URL } from "@/lib/site";

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

  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumb} />
      <JsonLd data={collectionSchema} />

      <section className="bg-muted py-12 md:py-20">
        <Container>
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
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="block rounded-lg border p-6 hover:border-primary hover:bg-muted/30 transition-colors"
                >
                  <p className="text-sm text-muted-foreground mb-2">
                    Updated {post.dateModified}
                  </p>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-muted-foreground">{post.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
}
