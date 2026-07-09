"use client";

import { useMemo, useState } from "react";
import { Check, Shield, CreditCard } from "lucide-react";
import {
  computeQuote,
  DEFAULT_SIZE_KEY,
  type ServiceType,
} from "@/lib/pricing";
import { cn } from "@/lib/utils";
import { SITE_EMAIL, SITE_PHONE, SITE_PHONE_HREF } from "@/lib/site";

type SizeOption = { key: string; label: string };

const SIZE_OPTIONS: Record<ServiceType, SizeOption[]> = {
  residential: [
    { key: "studio", label: "Studio" },
    { key: "1bed", label: "1 Bedroom" },
    { key: "2bed", label: "2 Bedroom" },
    { key: "3bed", label: "3 Bedroom" },
    { key: "4plus", label: "4+ Bedroom" },
  ],
  commercial: [
    { key: "small", label: "Small (≤1000 sqft)" },
    { key: "medium", label: "Medium (1000–3000 sqft)" },
    { key: "large", label: "Large (3000+ sqft)" },
  ],
  "post-construction": [
    { key: "under1k", label: "Under 1000 sqft" },
    { key: "1k-2k", label: "1000–2000 sqft" },
    { key: "over2k", label: "2000+ sqft" },
  ],
};

const SERVICE_OPTIONS: { value: ServiceType; label: string; desc: string }[] = [
  { value: "residential", label: "Residential", desc: "Homes & apartments" },
  { value: "commercial", label: "Commercial", desc: "Offices & retail" },
  { value: "post-construction", label: "Post‑Construction", desc: "Dust & debris cleanup" },
];

const ADDON_LABELS: Record<string, string> = {
  fridge: "Inside fridge",
  oven: "Inside oven",
  windows: "Interior windows",
  cabinets: "Inside cabinets",
  baseboards: "Baseboards",
};

type LevelType = "standard" | "deep" | "move" | "post";

const STEPS = ["Service", "Options", "Schedule", "Contact", "Review"] as const;

type ContactErrors = Partial<Record<"name" | "email" | "phone" | "address", string>>;

function validateContact(name: string, email: string, phone: string, address: string): ContactErrors {
  const errors: ContactErrors = {};
  if (!name.trim()) errors.name = "Please enter your full name.";
  if (!email.trim()) {
    errors.email = "Email is required so we can send your quote and confirmation.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!phone.trim()) {
    errors.phone = "Phone is required so we can confirm your appointment.";
  } else if (phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Please enter a valid 10-digit phone number.";
  }
  if (!address.trim()) errors.address = "Service address is required so our team knows where to go.";
  return errors;
}

function todayISO() {
  return new Date().toISOString().split("T")[0];
}

export default function BookingWidget({ className }: { className?: string }) {
  const [serviceType, setServiceType] = useState<ServiceType>("residential");
  const [sizeKey, setSizeKey] = useState<string>("2bed");
  const [level, setLevel] = useState<LevelType>("standard");
  const [addOns, setAddOns] = useState({
    fridge: false,
    oven: false,
    windows: false,
    cabinets: false,
    baseboards: false,
  });
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [step, setStep] = useState(0);
  const [booked, setBooked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [contactErrors, setContactErrors] = useState<ContactErrors>({});

  const effectiveLevel: LevelType = useMemo(() => {
    if (serviceType === "post-construction") return "post";
    if (level === "post") return "standard";
    return level;
  }, [serviceType, level]);

  const quote = useMemo(
    () => computeQuote({ serviceType, sizeKey, level: effectiveLevel, addOns }),
    [serviceType, sizeKey, effectiveLevel, addOns]
  );

  const sizeOptions = SIZE_OPTIONS[serviceType];
  const sizeLabel = sizeOptions.find((o) => o.key === sizeKey)?.label ?? sizeKey;
  const serviceLabel = SERVICE_OPTIONS.find((o) => o.value === serviceType)?.label ?? serviceType;
  const levelLabel =
    effectiveLevel === "move"
      ? "Move‑in/out"
      : effectiveLevel === "deep"
        ? "Deep clean"
        : effectiveLevel === "post"
          ? "Post-construction"
          : "Standard";
  const selectedAddOns = Object.entries(addOns)
    .filter(([, v]) => v)
    .map(([k]) => ADDON_LABELS[k] ?? k);

  function handleServiceTypeChange(next: ServiceType) {
    setServiceType(next);
    setSizeKey(DEFAULT_SIZE_KEY[next]);
  }

  const mailto = useMemo(() => {
    const subject = encodeURIComponent(
      `Free Quote Request: ${serviceLabel} — ${sizeLabel} — Deltona Cleaning`
    );
    const body = encodeURIComponent(
      `FREE QUOTE REQUEST\n` +
        `Payment: Due after cleaning is complete\n\n` +
        `SERVICE DETAILS\n` +
        `Service: ${serviceLabel}\n` +
        `Size: ${sizeLabel}\n` +
        `Level: ${levelLabel}\n` +
        `Add-ons: ${selectedAddOns.join(", ") || "None"}\n\n` +
        `SCHEDULE\n` +
        `Preferred date: ${date || "Flexible"}\n` +
        `Preferred time: ${time || "Flexible"}\n\n` +
        `CONTACT\n` +
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Phone: ${phone}\n` +
        `Address: ${address}\n\n` +
        `ESTIMATED PRICE\n` +
        `$${quote.price} (range $${quote.range.low}–$${quote.range.high})\n\n` +
        `Notes:`
    );
    return `mailto:${SITE_EMAIL}?subject=${subject}&body=${body}`;
  }, [
    serviceLabel,
    sizeLabel,
    levelLabel,
    selectedAddOns,
    date,
    time,
    name,
    email,
    phone,
    address,
    quote,
  ]);

  function next() {
    if (step === 3) {
      const errors = validateContact(name, email, phone, address);
      if (Object.keys(errors).length > 0) {
        setContactErrors(errors);
        return;
      }
      setContactErrors({});
    }
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }

  function prev() {
    setStep((s) => Math.max(s - 1, 0));
  }

  async function handleBook() {
    const errors = validateContact(name, email, phone, address);
    if (Object.keys(errors).length > 0) {
      setContactErrors(errors);
      setStep(3);
      return;
    }

    setSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch("/api/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer_name: name,
          email,
          phone,
          address,
          service_type: `${serviceLabel} — ${levelLabel} (${sizeLabel})`,
          preferred_date: date || undefined,
          preferred_time: time || undefined,
          notes: [
            `Size: ${sizeLabel}`,
            `Level: ${levelLabel}`,
            `Add-ons: ${selectedAddOns.join(", ") || "None"}`,
            `Estimated price: $${quote.price} (range $${quote.range.low}–$${quote.range.high})`,
            "Payment: Due after cleaning is complete",
          ].join("\n"),
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Booking failed");
      }

      setBooked(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Booking failed. Please try again or call us.");
    } finally {
      setSubmitting(false);
    }
  }

  function resetWidget() {
    setBooked(false);
    setStep(0);
    setSubmitError(null);
    setContactErrors({});
  }

  if (booked) {
    return (
      <div className={cn("booking-card mx-auto w-full max-w-lg overflow-hidden", className)}>
        <div className="bg-gradient-to-br from-primary to-sky-500 px-6 py-10 text-center text-primary-foreground">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <Check className="h-8 w-8" strokeWidth={2.5} />
          </div>
          <h2 className="text-2xl font-bold">Booking request sent!</h2>
          <p className="mt-2 text-sm text-white/90">
            We&apos;ll confirm your appointment shortly.
          </p>
        </div>
        <div className="space-y-5 p-6">
          <div className="rounded-xl border border-secondary/20 bg-secondary/5 p-4">
            <div className="flex items-start gap-3">
              <CreditCard className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
              <div>
                <p className="text-sm font-semibold text-foreground">Pay when we&apos;re done</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  No upfront payment required. Your estimated total of{" "}
                  <strong className="text-foreground">${quote.price}</strong> is due after your
                  cleaning is complete and you&apos;re satisfied.
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-muted-foreground">
            Questions? Call us at{" "}
            <a href={SITE_PHONE_HREF} className="font-semibold text-primary hover:underline">
              {SITE_PHONE}
            </a>
            .
          </p>
          <button type="button" className="btn-booking-ghost w-full" onClick={resetWidget}>
            Book another cleaning
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("booking-card mx-auto w-full max-w-lg overflow-hidden shadow-xl shadow-primary/5", className)}>
      {/* Header with live estimate */}
      <div className="border-b border-border/60 bg-gradient-to-r from-primary/5 via-background to-secondary/5 px-5 py-5 sm:px-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-foreground sm:text-xl">Book your cleaning</h2>
            <p className="mt-0.5 text-xs text-muted-foreground sm:text-sm">
              Instant quote · No payment now
            </p>
          </div>
          <div
            className="shrink-0 rounded-xl bg-background px-3.5 py-2.5 text-right shadow-sm ring-1 ring-border/80"
            aria-live="polite"
            aria-atomic="true"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Estimate
            </p>
            <p className="text-xl font-bold text-primary">${quote.price}</p>
          </div>
        </div>
      </div>

      {/* Progress indicator */}
      <div className="px-5 pt-5 sm:px-6">
        <p className="mb-3 text-center text-xs font-medium text-primary sm:hidden">
          Step {step + 1} of {STEPS.length}: {STEPS[step]}
        </p>
        <div className="flex items-center justify-between gap-0.5">
          {STEPS.map((label, i) => (
            <div key={label} className="flex flex-1 items-center">
              <div className="flex flex-col items-center gap-1">
                <div
                  className={cn(
                    "flex h-7 w-7 items-center justify-center rounded-full text-xs font-bold transition-all duration-200 sm:h-8 sm:w-8",
                    i <= step
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "bg-muted text-muted-foreground"
                  )}
                  aria-current={i === step ? "step" : undefined}
                >
                  {i < step ? <Check className="h-3.5 w-3.5 sm:h-4 sm:w-4" strokeWidth={3} /> : i + 1}
                </div>
                <span
                  className={cn(
                    "hidden text-[10px] font-medium sm:block",
                    i <= step ? "text-primary" : "text-muted-foreground"
                  )}
                >
                  {label}
                </span>
              </div>
              {i < STEPS.length - 1 && (
                <div
                  className={cn(
                    "mx-0.5 mb-4 h-0.5 flex-1 rounded-full transition-colors sm:mb-5 sm:mx-1",
                    i < step ? "bg-primary" : "bg-muted"
                  )}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Step content */}
      <div className="px-5 pb-2 pt-4 sm:px-6">
        {step === 0 && (
          <div className="space-y-5">
            <div>
              <p className="mb-3 text-sm font-medium text-foreground">What type of cleaning?</p>
              <div className="grid gap-2">
                {SERVICE_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => handleServiceTypeChange(opt.value)}
                    className={cn(
                      "flex items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-all",
                      serviceType === opt.value
                        ? "border-primary bg-primary/5 ring-2 ring-primary/20"
                        : "border-border hover:border-primary/30 hover:bg-muted/50"
                    )}
                  >
                    <div>
                      <p className="text-sm font-semibold text-foreground">{opt.label}</p>
                      <p className="text-xs text-muted-foreground">{opt.desc}</p>
                    </div>
                    <div
                      className={cn(
                        "h-4 w-4 shrink-0 rounded-full border-2 transition-colors",
                        serviceType === opt.value
                          ? "border-primary bg-primary"
                          : "border-muted-foreground/40"
                      )}
                    />
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-sm font-medium text-foreground">Property size</p>
              <div className="flex flex-wrap gap-2">
                {sizeOptions.map((o) => (
                  <button
                    key={o.key}
                    type="button"
                    onClick={() => setSizeKey(o.key)}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-xs font-medium transition-all sm:text-sm",
                      sizeKey === o.key
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                    )}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 1 && (
          <div className="space-y-5">
            <div>
              <label htmlFor="cleaning-level" className="mb-2 block text-sm font-medium text-foreground">
                Cleaning level
              </label>
              <select
                id="cleaning-level"
                className="select-field"
                value={effectiveLevel === "post" ? "standard" : effectiveLevel}
                onChange={(e) => setLevel(e.target.value as LevelType)}
                disabled={serviceType === "post-construction"}
              >
                <option value="standard">Standard</option>
                <option value="deep">Deep clean</option>
                <option value="move">Move‑in / move‑out</option>
              </select>
              {serviceType === "post-construction" && (
                <p className="mt-2 text-xs text-muted-foreground">
                  Post-construction cleaning uses a specialized detailing level automatically.
                </p>
              )}
            </div>
            <div>
              <p className="mb-3 text-sm font-medium text-foreground">Optional add‑ons</p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(addOns).map(([key, val]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setAddOns({ ...addOns, [key]: !val })}
                    className={cn(
                      "rounded-full px-3.5 py-2 text-xs font-medium transition-all sm:text-sm",
                      val
                        ? "bg-primary text-primary-foreground shadow-sm"
                        : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                    )}
                  >
                    {ADDON_LABELS[key] ?? key}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-foreground">Preferred date</span>
              <input
                type="date"
                className="input-field"
                value={date}
                min={todayISO()}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-foreground">Preferred time</span>
              <input
                type="time"
                className="input-field"
                value={time}
                onChange={(e) => setTime(e.target.value)}
              />
            </label>
            <p className="text-xs leading-relaxed text-muted-foreground sm:col-span-2">
              Scheduling is optional but helps us confirm availability faster. We&apos;ll send a
              reminder before your appointment.
            </p>
          </div>
        )}

        {step === 3 && (
          <div className="grid gap-4 sm:grid-cols-2">
            <p className="text-xs text-muted-foreground sm:col-span-2">
              Fields marked with <span className="text-primary">*</span> are required to send your
              quote or book a cleaning.
            </p>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-foreground">
                Full name <span className="text-primary">*</span>
              </span>
              <input
                type="text"
                className={cn("input-field", contactErrors.name && "ring-2 ring-red-400")}
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setContactErrors((prev) => ({ ...prev, name: undefined }));
                }}
                placeholder="Jane Smith"
                required
                autoComplete="name"
              />
              {contactErrors.name && (
                <p className="mt-1 text-xs text-red-600">{contactErrors.name}</p>
              )}
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-foreground">
                Email <span className="text-primary">*</span>
              </span>
              <input
                type="email"
                className={cn("input-field", contactErrors.email && "ring-2 ring-red-400")}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setContactErrors((prev) => ({ ...prev, email: undefined }));
                }}
                placeholder="you@email.com"
                required
                autoComplete="email"
              />
              {contactErrors.email && (
                <p className="mt-1 text-xs text-red-600">{contactErrors.email}</p>
              )}
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-foreground">
                Phone <span className="text-primary">*</span>
              </span>
              <input
                type="tel"
                className={cn("input-field", contactErrors.phone && "ring-2 ring-red-400")}
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setContactErrors((prev) => ({ ...prev, phone: undefined }));
                }}
                placeholder="(689) 555-0123"
                required
                autoComplete="tel"
              />
              {contactErrors.phone && (
                <p className="mt-1 text-xs text-red-600">{contactErrors.phone}</p>
              )}
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-2 block text-sm font-medium text-foreground">
                Service address <span className="text-primary">*</span>
              </span>
              <input
                type="text"
                className={cn("input-field", contactErrors.address && "ring-2 ring-red-400")}
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  setContactErrors((prev) => ({ ...prev, address: undefined }));
                }}
                placeholder="123 Main St, Deltona, FL"
                required
                autoComplete="street-address"
              />
              {contactErrors.address && (
                <p className="mt-1 text-xs text-red-600">{contactErrors.address}</p>
              )}
            </label>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-4">
            <div className="rounded-xl border border-border/60 bg-muted/40 p-4 text-sm">
              <dl className="space-y-2.5">
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Service</dt>
                  <dd className="font-medium text-foreground">{serviceLabel}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Size</dt>
                  <dd className="font-medium text-foreground">{sizeLabel}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Level</dt>
                  <dd className="font-medium text-foreground">{levelLabel}</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Add‑ons</dt>
                  <dd className="text-right font-medium text-foreground">
                    {selectedAddOns.join(", ") || "None"}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">When</dt>
                  <dd className="font-medium text-foreground">
                    {date || "Flexible"}
                    {time && ` at ${time}`}
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Contact</dt>
                  <dd className="text-right font-medium text-foreground">
                    {name}
                    <br />
                    <span className="text-xs font-normal text-muted-foreground">
                      {email}
                      <br />
                      {phone}
                    </span>
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Address</dt>
                  <dd className="text-right font-medium text-foreground">{address}</dd>
                </div>
              </dl>
            </div>
            <div className="rounded-xl border border-primary/15 bg-primary/5 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CreditCard className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Estimated total: ${quote.price}
                  </p>
                  <p className="mt-0.5 text-xs text-muted-foreground">
                    Range ${quote.range.low}–${quote.range.high} · Pay after completion
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Book now with zero upfront payment. We&apos;ll send your final invoice once the
                    job is done and you&apos;re happy with the results.
                  </p>
                </div>
              </div>
            </div>
            {submitError && (
              <p className="rounded-lg bg-red-50 px-3 py-2.5 text-xs text-red-700">{submitError}</p>
            )}
          </div>
        )}
      </div>

      {/* Footer actions */}
      <div className="mt-4 flex flex-col gap-3 border-t border-border/60 px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <button
          type="button"
          className="btn-booking-ghost order-2 sm:order-1"
          onClick={prev}
          disabled={step === 0}
        >
          Back
        </button>
        {step < STEPS.length - 1 ? (
          <button
            type="button"
            className="btn-booking-primary order-1 px-6 py-2.5 sm:order-2"
            onClick={next}
          >
            Continue
          </button>
        ) : (
          <div className="order-1 flex flex-col gap-2 sm:order-2 sm:flex-row sm:justify-end">
            <button
              type="button"
              className="btn-booking-ghost px-4 py-2.5 text-sm"
              disabled={submitting}
              onClick={() => {
                const errors = validateContact(name, email, phone, address);
                if (Object.keys(errors).length > 0) {
                  setContactErrors(errors);
                  setStep(3);
                  return;
                }
                window.location.href = mailto;
              }}
            >
              Email quote
            </button>
            <button
              type="button"
              className="btn-booking-primary px-4 py-2.5 text-sm disabled:opacity-60"
              onClick={handleBook}
              disabled={submitting}
            >
              {submitting ? "Sending…" : "Book cleaning"}
            </button>
          </div>
        )}
      </div>

      {/* Trust footer */}
      <div className="border-t border-border/60 bg-muted/30 px-5 py-3 sm:px-6">
        <p className="flex items-center justify-center gap-1.5 text-center text-[11px] text-muted-foreground">
          <Shield className="h-3 w-3 shrink-0" />
          No payment required to book · Pay when your clean is complete
        </p>
      </div>
    </div>
  );
}
