import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

export function Hero() {
    return (
        <section className="relative bg-muted py-20 md:py-32">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl">
                        Professional Cleaning Services in <span className="text-primary">Deltona, FL</span>
                    </h1>
                    <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                        We make your home sparkle. Reliable, thorough, and affordable house cleaning, deep cleaning, and move-out services.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Button size="lg" asChild>
                            <Link href="/contact">Get a Free Quote</Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/services">View Services</Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
