import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SITE_EMAIL, SITE_NAME, SITE_PHONE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing use of the ${SITE_NAME} website and booking of residential and commercial cleaning services in Deltona, FL.`,
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-muted py-12 md:py-16">
        <Container>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Terms of Service
          </h1>
          <p className="text-muted-foreground">Last updated: July 9, 2026</p>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container className="max-w-3xl space-y-6 text-muted-foreground">
          <p>
            By using deltonacleaning.com or booking services with {SITE_NAME}, you agree to these
            terms. If you do not agree, please do not use our website or services.
          </p>
          <p>
            Service scope and expectations for house, deep, and move-out cleans are described on
            our{" "}
            <Link href="/services" className="text-primary hover:underline">
              services pages
            </Link>
            . Questions before you book can go through{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact
            </Link>
            .
          </p>

          <h2 className="text-2xl font-bold text-foreground">Quotes and bookings</h2>
          <p>
            Online estimates are approximate and based on the details you provide. Final pricing may
            be adjusted after an on-site assessment if the home condition, size, or scope differs
            from what was described. Payment is due after cleaning is complete unless otherwise
            agreed in writing.
          </p>

          <h2 className="text-2xl font-bold text-foreground">Scheduling and cancellations</h2>
          <p>
            Please provide at least 24 hours&apos; notice to reschedule or cancel whenever possible.
            Repeated no-shows or late cancellations may result in a fee or refusal of future
            bookings.
          </p>

          <h2 className="text-2xl font-bold text-foreground">Access and safety</h2>
          <p>
            You are responsible for providing safe, reasonable access to the property and for
            securing valuables, pets, and fragile items. We reserve the right to decline or stop
            work if conditions are unsafe or unsanitary beyond a standard residential clean.
          </p>

          <h2 className="text-2xl font-bold text-foreground">Satisfaction</h2>
          <p>
            If you are not satisfied with a completed service, contact us within 24 hours so we can
            make it right. Re-clean remedies apply to areas included in the original scope.
          </p>

          <h2 className="text-2xl font-bold text-foreground">Website use</h2>
          <p>
            Content on this site is for general information. We may update services, pricing
            guidance, and these terms at any time. Continued use of the site after changes
            constitutes acceptance of the updated terms.
          </p>

          <h2 className="text-2xl font-bold text-foreground">Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a className="text-primary hover:underline" href={`mailto:${SITE_EMAIL}`}>
              {SITE_EMAIL}
            </a>{" "}
            or{" "}
            <a className="text-primary hover:underline" href="tel:+16893882588">
              {SITE_PHONE}
            </a>
            .
          </p>
        </Container>
      </section>
    </div>
  );
}
