"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
]

export function Header() {
    const [isOpen, setIsOpen] = React.useState(false)
    const pathname = usePathname()

    // Close mobile menu when route changes
    React.useEffect(() => {
        setIsOpen(false)
    }, [pathname])

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <Container>
                <div className="flex h-16 items-center justify-between">
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-2">
                            <span className="text-xl font-bold text-primary">Deltona Cleaning</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-6">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    pathname === item.href
                                        ? "text-primary"
                                        : "text-muted-foreground"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Button asChild>
                            <Link href="/contact">Get a Quote</Link>
                        </Button>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-muted-foreground hover:text-primary focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </Container>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b shadow-lg">
                    <div className="space-y-1 px-4 pb-3 pt-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "block rounded-md px-3 py-2 text-base font-medium hover:bg-muted hover:text-primary",
                                    pathname === item.href
                                        ? "bg-muted text-primary"
                                        : "text-foreground"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4 px-3">
                            <Button className="w-full" asChild>
                                <Link href="/contact">Get a Quote</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
