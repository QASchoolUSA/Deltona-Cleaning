import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import { Container } from "@/components/ui/container"

export function Footer() {
    return (
        <footer className="bg-muted text-muted-foreground">
            <Container className="py-12 md:py-16">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold text-foreground">Deltona Cleaning</h3>
                        <p className="text-sm">
                            Professional residential and commercial cleaning services in Deltona, FL and surrounding areas.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="hover:text-primary">
                                <Facebook className="h-5 w-5" />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link href="#" className="hover:text-primary">
                                <Instagram className="h-5 w-5" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-foreground">Services</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/services/house-cleaning" className="hover:text-primary">
                                    House Cleaning
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/deep-cleaning" className="hover:text-primary">
                                    Deep Cleaning
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/move-out-cleaning" className="hover:text-primary">
                                    Move-In/Move-Out
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/apartment-cleaning" className="hover:text-primary">
                                    Apartment Cleaning
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-foreground">Company</h3>
                        <ul className="space-y-3 text-sm">
                            <li>
                                <Link href="/about" className="hover:text-primary">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-primary">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="hover:text-primary">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="hover:text-primary">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="mb-4 text-sm font-semibold text-foreground">Contact Us</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-center space-x-2">
                                <MapPin className="h-4 w-4" />
                                <span>Deltona, FL</span>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Phone className="h-4 w-4" />
                                <a href="tel:+16893882588" className="hover:text-primary">
                                    (689) 388-2588
                                </a>
                            </li>
                            <li className="flex items-center space-x-2">
                                <Mail className="h-4 w-4" />
                                <a href="mailto:info@deltonacleaning.com" className="hover:text-primary">
                                    info@deltonacleaning.com
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t pt-8 text-center text-sm">
                    <p>&copy; {new Date().getFullYear()} Deltona Cleaning. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    )
}
