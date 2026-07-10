import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { services } from "@/lib/data";
import {
  SITE_EMAIL,
  SITE_NAME,
  SITE_PHONE,
  SITE_PHONE_HREF,
} from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-foreground">{SITE_NAME}</h3>
            <p className="text-sm">
              Professional house, move-out, Airbnb, post-construction, office, and restaurant
              cleaning in Deltona, FL and surrounding Volusia County communities.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-foreground">Services</h3>
            <ul className="space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-primary">
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
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
                <Link href="/services" className="hover:text-primary">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary">
                  Cleaning Guides
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/deltona-move-out-cleaning-landlord-inspection-checklist"
                  className="hover:text-primary"
                >
                  Move-Out Checklist
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
                <a href={SITE_PHONE_HREF} className="hover:text-primary">
                  {SITE_PHONE}
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href={`mailto:${SITE_EMAIL}`} className="hover:text-primary">
                  {SITE_EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
