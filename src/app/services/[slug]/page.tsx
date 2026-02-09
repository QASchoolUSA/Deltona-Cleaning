import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Check, ArrowLeft, CheckCircle2, HelpCircle } from "lucide-react"
import { services } from "@/lib/data"
import { notFound } from "next/navigation"
import { Metadata } from "next"

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const service = services.find((s) => s.slug === slug)
    if (!service) return { title: "Service Not Found" }

    return {
        title: `${service.title} | Deltona Cleaning`,
        description: service.description,
    }
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }))
}

export default async function ServiceDetailPage({ params }: Props) {
    const { slug } = await params
    const service = services.find((s) => s.slug === slug)

    if (!service) {
        notFound()
    }

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <section className="bg-muted py-16 md:py-24">
                <Container>
                    <div className="flex flex-col md:flex-row items-start justify-between gap-8">
                        <div className="max-w-2xl">
                            <Link href="/services" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary mb-6">
                                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Services
                            </Link>
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">{service.title}</h1>
                            <p className="text-xl text-muted-foreground mb-8">
                                {service.description}
                            </p>
                            <div className="flex gap-4">
                                <Button size="lg" asChild>
                                    <Link href="/contact">Get a Free Quote</Link>
                                </Button>
                                <Button size="lg" variant="outline" asChild>
                                    <Link href="tel:+13860000000">Call (386) 000-0000</Link>
                                </Button>
                            </div>
                        </div>
                        {/* Hero Image / Icon Placeholder - Could act as visual anchor */}
                        <div className="hidden md:flex flex-1 justify-center items-center">
                            <div className="bg-background/50 p-8 rounded-full">
                                <service.icon className="h-32 w-32 text-primary/20" />
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid gap-16 lg:grid-cols-3">
                        <div className="lg:col-span-2 space-y-16">

                            {/* Overview */}
                            <div>
                                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {service.fullDescription}
                                </p>
                            </div>

                            {/* Benefits Grid */}
                            {service.benefits && (
                                <div>
                                    <h2 className="text-3xl font-bold mb-8">Why Choose This Service?</h2>
                                    <div className="grid gap-6 sm:grid-cols-2">
                                        {service.benefits.map((benefit, idx) => (
                                            <div key={idx} className="bg-muted/30 p-6 rounded-lg border">
                                                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                                                    {benefit.title}
                                                </h3>
                                                <p className="text-muted-foreground">{benefit.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* What's Included */}
                            <div>
                                <h2 className="text-3xl font-bold mb-8">What's Included</h2>
                                <ul className="grid gap-4 sm:grid-cols-2">
                                    {service.features.map((feature, index) => (
                                        <li key={index} className="flex items-start">
                                            <div className="mr-3 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary mt-0.5">
                                                <Check className="h-4 w-4" />
                                            </div>
                                            <span className="text-muted-foreground">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Process Steps */}
                            {service.process && (
                                <div>
                                    <h2 className="text-3xl font-bold mb-8">Our Process</h2>
                                    <div className="space-y-8">
                                        {service.process.map((step, idx) => (
                                            <div key={idx} className="flex gap-4">
                                                <div className="flex-none flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                                                    {step.step}
                                                </div>
                                                <div>
                                                    <h3 className="font-bold text-lg">{step.title}</h3>
                                                    <p className="text-muted-foreground">{step.description}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* FAQs */}
                            {service.faqs && (
                                <div>
                                    <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                                    <div className="space-y-6">
                                        {service.faqs.map((faq, idx) => (
                                            <div key={idx} className="border-b pb-6 last:border-0">
                                                <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                                                    <HelpCircle className="h-5 w-5 text-muted-foreground" />
                                                    {faq.question}
                                                </h3>
                                                <p className="text-muted-foreground pl-7">{faq.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                        </div>

                        {/* Sidebar CTA */}
                        <div className="lg:col-span-1">
                            <div className="bg-muted border rounded-xl p-8 sticky top-24 shadow-sm">
                                <h3 className="text-2xl font-bold mb-4">Ready for a cleaner home?</h3>
                                <p className="text-muted-foreground mb-8">
                                    Get a free, no-obligation quote for our {service.shortTitle || service.title} today.
                                </p>
                                <div className="space-y-4">
                                    <Button className="w-full text-lg h-12" size="lg" asChild>
                                        <Link href="/contact?service={service.slug}">Get a Free Quote</Link>
                                    </Button>
                                    <Button variant="outline" className="w-full text-lg h-12" asChild>
                                        <Link href="tel:+13860000000">Call (386) 000-0000</Link>
                                    </Button>
                                </div>
                                <div className="mt-6 text-xs text-center text-muted-foreground">
                                    Licensed & Insured • Satisfaction Guaranteed
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </section>

            {/* Bottom CTA to catch skimmers */}
            <section className="bg-primary py-16 text-primary-foreground">
                <Container>
                    <div className="text-center max-w-2xl mx-auto">
                        <h2 className="text-3xl font-bold mb-6">Don't wait. Book your {service.shortTitle || "clean"} today!</h2>
                        <Button size="lg" variant="secondary" asChild>
                            <Link href="/contact">Schedule Now</Link>
                        </Button>
                    </div>
                </Container>
            </section>
        </div>
    )
}
