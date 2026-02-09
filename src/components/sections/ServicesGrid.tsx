import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { services } from "@/lib/data"

export function ServicesGrid() {
    return (
        <section className="py-16 md:py-24">
            <Container>
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Comprehensive cleaning solutions tailored to your needs.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                        <Card key={service.slug} className="flex flex-col transition-all hover:shadow-lg">
                            <CardHeader>
                                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <CardTitle>{service.title}</CardTitle>
                                <CardDescription>{service.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                {/* Optional additional content */}
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" className="w-full justify-start p-0 hover:bg-transparent hover:text-primary" asChild>
                                    <Link href={`/services/${service.slug}`} className="flex items-center gap-2">
                                        Learn more <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    )
}
