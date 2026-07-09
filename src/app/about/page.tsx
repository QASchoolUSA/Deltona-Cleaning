import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Deltona Cleaning",
  description:
    "Meet Deltona Cleaning — a licensed, insured local team serving Deltona, DeBary, Orange City, and Lake Helen with reliable residential and commercial cleaning.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Deltona Cleaning",
    description:
      "Licensed & insured cleaning professionals serving Deltona and surrounding Volusia County communities.",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-muted py-12 md:py-20">
        <Container>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We are Deltona&apos;s trusted partner for residential and commercial cleaning excellence.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 md:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Our Mission</h2>
              <p className="text-lg text-muted-foreground">
                At Deltona Cleaning, our mission is simple: to provide spotless, stress-free
                environments for our clients. We believe a clean home is a happy home, and we work
                tirelessly to ensure every corner shines.
              </p>
              <p className="text-muted-foreground">
                Founded with a commitment to quality and integrity, we have grown to become one of
                the most reliable cleaning services in Volusia County. Our team is rigorously
                trained, background-checked, and passionate about what they do.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Button size="lg" asChild>
                  <Link href="/#booking">Get a Free Quote</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/services">View Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video rounded-xl bg-muted overflow-hidden border">
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-primary/5 text-primary px-6 text-center">
                <span className="text-lg font-semibold">Local Deltona team</span>
                <span className="text-sm text-muted-foreground">
                  Licensed, insured, and background-checked professionals.
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
