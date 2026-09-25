import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { SITE_EMAIL, SITE_NAME, SITE_PHONE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${SITE_NAME} collects, uses, and protects your personal information when you request a quote or book a cleaning.`,
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-muted py-12 md:py-16">
        <Container>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground">Last updated: July 9, 2026</p>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container className="prose prose-slate max-w-3xl space-y-6 text-muted-foreground">
          <p>
            {SITE_NAME} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your privacy. This
            policy explains what information we collect when you use deltonacleaning.com or contact
            us for cleaning services, and how we use it.
          </p>
          <p>
            Quote and booking details you share through our{" "}
            <Link href="/contact" className="text-primary hover:underline">
              contact form
            </Link>{" "}
            are used only to schedule and deliver residential or commercial cleaning—not for
            unrelated marketing lists.
          </p>

          <h2 className="text-2xl font-bold text-foreground">Information we collect</h2>
          <p>When you request a quote, book a cleaning, or contact us, we may collect:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name, email address, phone number, and service address</li>
            <li>Service preferences, schedule details, and notes you provide</li>
            <li>Basic technical data such as browser type and pages visited (via standard server logs or analytics, if enabled)</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground">How we use your information</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>To respond to quote and booking requests</li>
            <li>To schedule, confirm, and deliver cleaning services</li>
            <li>To communicate about appointments, invoices, and service updates</li>
            <li>To improve our website and customer experience</li>
          </ul>

          <h2 className="text-2xl font-bold text-foreground">Sharing</h2>
          <p>
            We do not sell your personal information. We may share details with trusted service
            providers who help us operate bookings or communications, only as needed to fulfill your
            request, or when required by law.
          </p>

          <h2 className="text-2xl font-bold text-foreground">Data retention</h2>
          <p>
            We keep booking and contact records only as long as needed for service delivery,
            business records, and legal obligations.
          </p>

          <h2 className="text-2xl font-bold text-foreground">Your choices</h2>
          <p>
            To update or delete your contact information, or ask questions about this policy, email{" "}
            <a className="text-primary hover:underline" href={`mailto:${SITE_EMAIL}`}>
              {SITE_EMAIL}
            </a>{" "}
            or call{" "}
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
