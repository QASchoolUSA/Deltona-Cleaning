import { Metadata } from "next"
import { ServicesGrid } from "@/components/sections/ServicesGrid"
import { CTA } from "@/components/sections/CTA"
import { Container } from "@/components/ui/container"

export const metadata: Metadata = {
    title: "Our Services",
    description: "Explore our comprehensive cleaning services including house cleaning, deep cleaning, and move-out cleaning.",
}

export default function ServicesPage() {
    return (
        <>
            <section className="bg-muted py-12 md:py-20">
                <Container>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Our Services</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Professional solutions for every cleaning need. From routine maintenance to deep restorative cleans.
                    </p>
                </Container>
            </section>

            <ServicesGrid />
            <CTA />
        </>
    )
}
