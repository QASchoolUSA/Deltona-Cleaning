import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"

export function CTA() {
    return (
        <section className="bg-primary py-16 md:py-24 text-primary-foreground">
            <Container>
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready for a spotless home?</h2>
                    <p className="mt-4 text-lg text-primary-foreground/90">
                        Get a free, no-obligation quote today. Experience the difference of professional cleaning.
                    </p>
                    <div className="mt-8 flex justify-center gap-4">
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/contact">Get Your Free Quote</Link>
                        </Button>
                        <Button size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                            <Link href="tel:+13860000000">Call (386) 000-0000</Link>
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
