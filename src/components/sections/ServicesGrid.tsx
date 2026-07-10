import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CardThumb } from "@/components/ui/content-image";
import { services } from "@/lib/data";
import { getServiceImage } from "@/lib/images";

export function ServicesGrid() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Cleaning Services in Deltona, FL
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Residential, vacancy, short-term rental, post-construction, and commercial
            cleaning for every Deltona audience.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const image = getServiceImage(service.slug);
            return (
              <Card
                key={service.slug}
                className="group flex flex-col overflow-hidden transition-all hover:shadow-lg pt-0 gap-0"
              >
                <CardThumb src={image.src} alt={image.alt} />
                <CardHeader className="pt-5">
                  <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <service.icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{service.shortTitle}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <p className="text-xs text-muted-foreground">
                    For {service.audiences.join(", ")}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="w-full justify-start p-0 hover:bg-transparent hover:text-primary"
                    asChild
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className="flex items-center gap-2"
                    >
                      Learn more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
