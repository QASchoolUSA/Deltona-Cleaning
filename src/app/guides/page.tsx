import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { guides } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Deltona Cleaning Guides",
  description: "Practical local guides to house cleaning prices, rental move-ins, and humidity-aware home care in Deltona and Volusia County.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Local resources</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Deltona Cleaning Guides</h1>
          <p className="mt-5 text-lg text-muted-foreground">Straightforward, sourced advice for comparing cleaning services, preparing a rental, and caring for a Central Florida home.</p>
          <p className="mt-4 text-muted-foreground">
            Use these guides when you are weighing recurring{" "}
            <Link href="/services/house-cleaning" className="font-medium text-primary hover:underline">
              house cleaning
            </Link>
            , a one-time{" "}
            <Link href="/services/deep-cleaning" className="font-medium text-primary hover:underline">
              deep clean
            </Link>
            , or an inspection-ready{" "}
            <Link href="/services/move-out-cleaning" className="font-medium text-primary hover:underline">
              move-out cleaning
            </Link>{" "}
            in Deltona and nearby Volusia County cities. Each article is written for local homeowners, landlords, and hosts—not generic national advice.
          </p>
          <p className="mt-4 text-muted-foreground">
            For longer how-tos and checklists, browse the{" "}
            <Link href="/blog" className="font-medium text-primary hover:underline">
              Deltona Cleaning blog
            </Link>
            . Ready for a quote after you read?{" "}
            <Link href="/contact" className="font-medium text-primary hover:underline">
              Contact our team
            </Link>{" "}
            with the address and service you need.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {guides.map((guide) => (
            <article key={guide.slug} className="flex flex-col rounded-2xl border bg-background p-6">
              <h2 className="text-2xl font-bold">{guide.title}</h2>
              <p className="mt-3 flex-1 leading-relaxed text-muted-foreground">{guide.description}</p>
              <Link href={`/guides/${guide.slug}`} className="mt-6 font-semibold text-primary">Read guide →</Link>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
