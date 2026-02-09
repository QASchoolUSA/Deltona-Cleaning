import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn more about Deltona Cleaning, our mission, and our dedicated team of professionals.",
}

export default function AboutPage() {
    return (
        <div className="flex flex-col">
            {/* Page Header */}
            <section className="bg-muted py-12 md:py-20">
                <Container>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">About Us</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        We are Deltona's trusted partner for residential and commercial cleaning excellence.
                    </p>
                </Container>
            </section>

            {/* Content */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid gap-12 md:grid-cols-2 lg:gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold">Our Mission</h2>
                            <p className="text-lg text-muted-foreground">
                                At Deltona Cleaning, our mission is simple: to provide spotless, stress-free environments for our clients.
                                We believe a clean home is a happy home, and we work tirelessly to ensure every corner shines.
                            </p>
                            <p className="text-muted-foreground">
                                Founded with a commitment to quality and integrity, we have grown to become one of the most reliable cleaning services in Volusia County.
                                Our team is rigorously trained, background-checked, and passionate about what they do.
                            </p>
                            <div className="pt-4">
                                <Button size="lg" asChild>
                                    <Link href="/contact">Work With Us</Link>
                                </Button>
                            </div>
                        </div>
                        <div className="relative aspect-video rounded-xl bg-muted overflow-hidden shadow-xl">
                            {/* Placeholder for About Image - could be valid image path or just a div */}
                            <div className="absolute inset-0 flex items-center justify-center bg-primary/5 text-primary">
                                <span className="text-lg font-medium">[Team Image Placeholder]</span>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    )
}
