import { Container } from "@/components/ui/container"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MapPin, Phone } from "lucide-react"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get a free quote for professional cleaning services in Deltona, FL. Contact us today!",
}

export default function ContactPage() {
    return (
        <div className="flex flex-col">
            <section className="bg-muted py-12 md:py-20">
                <Container>
                    <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">Contact Us</h1>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Ready to schedule your cleaning? Have questions? We're here to help.
                    </p>
                </Container>
            </section>

            <section className="py-16 md:py-24">
                <Container>
                    <div className="grid gap-12 lg:grid-cols-2">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <h2 className="text-3xl font-bold">Get in Touch</h2>
                            <p className="text-muted-foreground">
                                Fill out the form below or reach out to us directly. We respond to all inquiries within 24 hours.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <MapPin className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Service Area</h3>
                                        <p className="text-muted-foreground">Deltona, FL and surrounding areas (DeBary, Orange City, Lake Helen)</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Phone className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Phone</h3>
                                        <p className="text-muted-foreground">
                                            <a href="tel:+16893882588" className="hover:text-primary">(689) 388-2588</a>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <Mail className="h-6 w-6 text-primary mt-1" />
                                    <div>
                                        <h3 className="font-semibold">Email</h3>
                                        <p className="text-muted-foreground">
                                            <a href="mailto:info@deltonacleaning.com" className="hover:text-primary">info@deltonacleaning.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Map Placeholder */}
                            <div className="h-64 w-full rounded-lg bg-muted flex items-center justify-center border text-muted-foreground">
                                [Google Maps Embed would go here]
                            </div>
                        </div>

                        {/* Contact Form */}
                        <Card>
                            <CardHeader>
                                <CardTitle>Request a Free Quote</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <form className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <Label htmlFor="firstName">First name</Label>
                                            <Input id="firstName" placeholder="John" required />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="lastName">Last name</Label>
                                            <Input id="lastName" placeholder="Doe" required />
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="john@example.com" required />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="service">Service Type</Label>
                                        <select id="service" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                                            <option value="house-cleaning">House Cleaning</option>
                                            <option value="deep-cleaning">Deep Cleaning</option>
                                            <option value="move-out">Move-In/Move-Out</option>
                                            <option value="apartment">Apartment Cleaning</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea id="message" placeholder="Tell us about your home (bedrooms, bathrooms, sq ft) and any specific needs." className="min-h-[120px]" />
                                    </div>

                                    <Button type="submit" className="w-full" size="lg">Send Request</Button>
                                </form>
                            </CardContent>
                        </Card>
                    </div>
                </Container>
            </section>
        </div>
    )
}
