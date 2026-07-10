"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import {
  SITE_AREAS,
  SITE_EMAIL,
  SITE_PHONE,
  SITE_PHONE_HREF,
} from "@/lib/site";
import { services } from "@/lib/data";
import { pageImages } from "@/lib/images";

const SERVICE_OPTIONS = [
  ...services.map((s) => ({ value: s.slug, label: s.shortTitle })),
  { value: "other", label: "Other / General Inquiry" },
];

export default function ContactPageClient() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("house-cleaning");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const serviceLabel =
      SERVICE_OPTIONS.find((o) => o.value === service)?.label ?? service;

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: `${firstName.trim()} ${lastName.trim()}`.trim(),
          email: email.trim(),
          phone: phone.trim(),
          address: "Provided in message / to be confirmed",
          service_type: `Contact form — ${serviceLabel}`,
          notes: message.trim() || undefined,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Unable to send your request. Please call us.");
      }

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex flex-col">
      <section className="bg-muted py-12 md:py-20">
        <Container>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl mb-4">
            Contact Deltona Cleaning
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Request a quote for house, move-out, Airbnb, post-construction, office, or
            restaurant cleaning across {SITE_AREAS.join(", ")}.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold">Get in Touch</h2>
              <p className="text-muted-foreground">
                Homeowners, apartment owners, property managers, Airbnb hosts, and business
                owners—tell us the service and address. We respond within 24 hours.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Service Area</h3>
                    <p className="text-muted-foreground">{SITE_AREAS.join(" · ")}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">
                      <a href={SITE_PHONE_HREF} className="hover:text-primary">
                        {SITE_PHONE}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">
                      <a href={`mailto:${SITE_EMAIL}`} className="hover:text-primary">
                        {SITE_EMAIL}
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative aspect-[4/3] overflow-hidden rounded-xl border bg-muted">
                <Image
                  src={pageImages.contact.src}
                  alt={pageImages.contact.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              <div className="overflow-hidden rounded-lg border bg-muted">
                <iframe
                  title="Deltona, FL service area map"
                  src="https://maps.google.com/maps?q=Deltona%2C%20FL%2032725&z=12&output=embed"
                  className="h-64 w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Request a Free Quote</CardTitle>
              </CardHeader>
              <CardContent>
                {success ? (
                  <div className="space-y-4 rounded-lg border border-secondary/20 bg-secondary/5 p-6">
                    <h3 className="text-lg font-semibold text-foreground">Request sent</h3>
                    <p className="text-sm text-muted-foreground">
                      Thanks — we&apos;ll follow up shortly. For faster help, call{" "}
                      <a
                        href={SITE_PHONE_HREF}
                        className="font-semibold text-primary hover:underline"
                      >
                        {SITE_PHONE}
                      </a>
                      .
                    </p>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => {
                        setSuccess(false);
                        setFirstName("");
                        setLastName("");
                        setEmail("");
                        setPhone("");
                        setMessage("");
                        setService("house-cleaning");
                      }}
                    >
                      Send another request
                    </Button>
                  </div>
                ) : (
                  <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First name</Label>
                        <Input
                          id="firstName"
                          placeholder="John"
                          required
                          autoComplete="given-name"
                          value={firstName}
                          onChange={(e) => setFirstName(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last name</Label>
                        <Input
                          id="lastName"
                          placeholder="Doe"
                          required
                          autoComplete="family-name"
                          value={lastName}
                          onChange={(e) => setLastName(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        required
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(689) 555-0123"
                        required
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Service Type</Label>
                      <select
                        id="service"
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      >
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your space (bedrooms, bathrooms, sq ft), vacancy date, or business hours."
                        className="min-h-[120px]"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                      />
                    </div>

                    {error && (
                      <p className="rounded-lg bg-red-50 px-3 py-2.5 text-sm text-red-700">
                        {error}
                      </p>
                    )}

                    <Button type="submit" className="w-full" size="lg" disabled={submitting}>
                      {submitting ? "Sending…" : "Send Request"}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  );
}
