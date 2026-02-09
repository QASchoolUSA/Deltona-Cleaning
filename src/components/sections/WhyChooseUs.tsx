import { ShieldCheck, Clock, Award, Smile } from "lucide-react"
import { Container } from "@/components/ui/container"

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
        icon: Award, // using Award as proxy for quality/star
    },
    {
        name: "Friendly Staff",
        description: "Our cleaners are vetted, trained, and friendly professionals.",
        icon: Smile,
    },
]

export function WhyChooseUs() {
    return (
        <section className="bg-muted/50 py-16 md:py-24">
            <Container>
                <div className="mb-12 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Why Choose Deltona Cleaning?</h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        We are dedicated to providing the best cleaning experience in Deltona.
                    </p>
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
    )
}
