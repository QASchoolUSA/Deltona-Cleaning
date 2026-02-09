import { Star } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const testimonials = [
    {
        content: "Deltona Cleaning transformed my home! They were thorough, professional, and friendly. Highly recommended!",
        author: "Sarah M.",
        role: "Homeowner",
        rating: 5,
    },
    {
        content: "I needed a deep clean before moving out, and they did an amazing job. Got my full deposit back thanks to them.",
        author: "James T.",
        role: "Renter",
        rating: 5,
    },
    {
        content: "Reliable service every time. I've been using them for monthly maintenance cleaning for over a year now.",
        author: "Emily R.",
        role: "Busy Professional",
        rating: 5,
    },
]

export function Testimonials() {
    return (
        <section className="bg-background py-16 md:py-24">
            <Container>
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What Our Clients Say</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Trusted by homeowners and businesses across Deltona.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-muted/30">
                            <CardHeader className="pb-4">
                                <div className="flex text-yellow-500">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-current" />
                                    ))}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="mb-4 text-muted-foreground">{testimonial.content}</p>
                                <div className="font-semibold">{testimonial.author}</div>
                                <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </Container>
        </section>
    )
}
