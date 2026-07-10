import Image from "next/image";
import { ShieldCheck, Clock, Award, Smile } from "lucide-react";
import { Container } from "@/components/ui/container";
import { pageImages } from "@/lib/images";

const features = [
  {
    name: "Licensed & Insured",
    description: "Peace of mind knowing your home is in safe, professional hands.",
    icon: ShieldCheck,
  },
  {
    name: "Reliable & Punctual",
    description: "We respect your time and always arrive as scheduled.",
    icon: Clock,
  },
  {
    name: "Satisfaction Guaranteed",
    description: "If you're not happy, we'll re-clean the area for free.",
    icon: Award,
  },
  {
    name: "Friendly Staff",
    description: "Our cleaners are vetted, trained, and friendly professionals.",
    icon: Smile,
  },
];

export function WhyChooseUs() {
  const image = pageImages.about;

  return (
    <section className="bg-muted/50 py-16 md:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Why Choose Deltona Cleaning?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Checklist-driven residential and commercial cleaning for Deltona homeowners,
              property managers, hosts, and local businesses.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-xl border bg-background shadow-sm">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col items-center text-center">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-background shadow-sm text-primary">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature.name}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
