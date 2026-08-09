import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { pageImages } from "@/lib/images";
import { getPricingConfig } from "@/lib/pricing-config";

const BookingWidget = dynamic(() => import("@/components/BookingWidget"), {
  loading: () => (
    <div
      className="mx-auto h-[520px] w-full max-w-lg animate-pulse rounded-2xl border border-border/60 bg-muted/60 shadow-xl shadow-primary/5"
      aria-hidden="true"
    />
  ),
});

const TRUST_ITEMS = [
  "Licensed & Insured",
  "Satisfaction Guaranteed",
  "Local Deltona Team",
];

export async function Hero() {
  const hero = pageImages.homeHero;
  const pricing = await getPricingConfig();

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={hero.src}
          alt={hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-background via-background/92 to-background/70"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/30"
          aria-hidden="true"
        />
      </div>

      <Container className="relative py-12 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <div className="max-w-xl lg:pt-2">
            <p className="section-eyebrow">Deltona, FL · Volusia County</p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Professional Cleaning Services in{" "}
              <span className="text-primary">Deltona, FL</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              House, apartment, move-out, Airbnb, post-construction, office, and restaurant
              cleaning for homeowners, property managers, hosts, and local businesses across{" "}
              <strong className="font-semibold text-foreground">
                Deltona, DeBary, Orange City
              </strong>
              , and Lake Helen.
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {TRUST_ITEMS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm font-medium text-foreground/80"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-3 sm:gap-4">
              <Button size="lg" asChild>
                <Link href="#booking">Get a fast quote</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore services</Link>
              </Button>
            </div>
          </div>

          <div id="booking" className="scroll-mt-24 lg:sticky lg:top-24">
            <BookingWidget config={pricing} />
          </div>
        </div>
      </Container>
    </section>
  );
}
