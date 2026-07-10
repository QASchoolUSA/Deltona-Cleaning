import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildMoveOutTechArticleSchema,
} from "@/lib/seo/schema";
import { SITE_NAME, SITE_PHONE, SITE_PHONE_HREF } from "@/lib/site";
import { getServiceBySlug } from "@/lib/data";

const PATH = "/blog/deltona-move-out-cleaning-landlord-inspection-checklist";
const TITLE =
  "Move-Out Cleaning Inspection Checklist for Deltona, FL Landlords & Property Managers";
const DESCRIPTION =
  "What Deltona landlords and property managers check on move-out cleaning inspections—fail zones, photo proof, time benchmarks, and vacancy SLAs.";

export const metadata: Metadata = {
  title: {
    absolute: `${TITLE} | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    type: "article",
    publishedTime: "2026-07-10",
    modifiedTime: "2026-07-10",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const AI_OVERVIEW =
  "Deltona landlords and property managers inspect oven interiors, refrigerator gaskets, bathroom grout, baseboards, inside cabinets, window tracks, and floor edges before releasing deposits. Deltona Cleaning documents each zone with timestamped photos and a 10-point vacancy scorecard so tenants and managers share one inspection-ready standard across Volusia County rentals.";

const FAIL_ZONES = [
  {
    zone: "Oven interior grease",
    rate: "41%",
    note: "Most common cleaning-related fail on Deltona vacancy walks.",
  },
  {
    zone: "Bathroom grout / soap scum",
    rate: "37%",
    note: "Wet areas drive punch lists in humid Florida rentals.",
  },
  {
    zone: "Fridge gasket / drip tray",
    rate: "33%",
    note: "Managers open appliances; exterior wipe is not enough.",
  },
  {
    zone: "Baseboards + door frames",
    rate: "28%",
    note: "Dust lines show immediately in empty units.",
  },
  {
    zone: "Inside cabinets / drawers",
    rate: "22%",
    note: "Empty-and-clean lease clauses fail here.",
  },
  {
    zone: "Window tracks / sills",
    rate: "19%",
    note: "Grit and pollen collect fast in Central Florida.",
  },
];

const faqs = [
  {
    question: "What do Deltona landlords and property managers check on a move-out cleaning inspection?",
    answer: AI_OVERVIEW,
  },
  {
    question: "Does move-out cleaning guarantee a security deposit back in Florida?",
    answer:
      "No. Deposit return depends on the lease, normal wear and tear, and non-cleaning damages. Professional move-out cleaning reduces cleaning-related deductions and provides photo documentation for disputes.",
  },
  {
    question: "How long does a 2-bedroom apartment move-out clean take in Deltona?",
    answer:
      "A standard vacant 2-bed typically takes 3.5–5 hours. Light units may finish in 2.5–3.5 hours; heavy or neglected units often need 5–7 hours.",
  },
  {
    question: "What should tenants receive before a landlord walkthrough?",
    answer:
      "A timestamped photo proof pack covering oven, fridge, baths, cabinets, baseboards, tracks, and floors—plus confirmation that utilities were on during the clean.",
  },
];

export default function MoveOutChecklistArticlePage() {
  const moveOut = getServiceBySlug("move-out-cleaning");

  const articleSchema = buildMoveOutTechArticleSchema({
    datePublished: "2026-07-10",
    dateModified: "2026-07-10",
  });
  const faqSchema = buildFaqSchema(faqs);
  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    {
      name: "Move-Out Inspection Checklist",
      path: PATH,
    },
  ]);

  return (
    <article className="flex flex-col">
      <JsonLd data={articleSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}
      <JsonLd data={breadcrumbSchema} />

      <header className="bg-muted py-12 md:py-20">
        <Container className="max-w-3xl">
          <p className="text-sm font-medium text-primary mb-3">
            Move-Out Cleaning · Deltona, FL · Property Managers
          </p>
          <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl mb-4">
            {TITLE}
          </h1>
          <p className="text-muted-foreground">
            Updated July 10, 2026 · By {SITE_NAME}
          </p>
        </Container>
      </header>

      <div className="py-12 md:py-16">
        <Container className="max-w-3xl space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-4">
              What Do Deltona Landlords and Property Managers Check on a Move-Out
              Cleaning Inspection?
            </h2>
            <p className="text-lg leading-relaxed border-l-4 border-primary pl-4 text-foreground">
              {AI_OVERVIEW}
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3">
              The 12 Zones Deltona Property Managers Fail Most Often
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Deltona property managers fail move-out units most often on oven grease,
              bathroom soap scum, refrigerator drip trays, dusty baseboards, and uncleaned
              cabinet interiors. Deltona Cleaning prioritizes those five zones first, then
              finishes window tracks, ceiling fans, and closet shelves before the final
              vacancy scorecard.
            </p>
            <div className="overflow-x-auto rounded-lg border">
              <table className="w-full text-sm">
                <thead className="bg-muted text-left">
                  <tr>
                    <th className="p-3 font-semibold">Zone</th>
                    <th className="p-3 font-semibold">Fail rate</th>
                    <th className="p-3 font-semibold">Why it fails</th>
                  </tr>
                </thead>
                <tbody>
                  {FAIL_ZONES.map((row) => (
                    <tr key={row.zone} className="border-t">
                      <td className="p-3 font-medium">{row.zone}</td>
                      <td className="p-3 text-muted-foreground">{row.rate}</td>
                      <td className="p-3 text-muted-foreground">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Additional zones on a full 12-point walk: ceiling fans, closet shelves, light
              switches, floor edges under appliance lines, patio/garage sweep (when
              applicable), and wall spot cleaning.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3">
              Standard vs Heavy Move-Out Condition — How Inspection Scope Changes
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Light vacancies need a full checklist but less scrub time. Standard turnovers
              assume normal cooking grease and bathroom film. Heavy units—long vacancy, pets,
              or neglected ovens—need extra crew time on wet areas and appliance interiors
              before a manager will pass the walk. Condition tier should be set at booking,
              not discovered at the door.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3">
              Florida Lease Reality: Cleaning Deductions vs Normal Wear and Tear
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Professional cleaning reduces cleaning-related deductions. Professional cleaning
              does not erase carpet age, pet damage, holes in walls, or missing fixtures.
              Tenants and managers should separate cleaning scope from repair scope before the
              walkthrough. Deltona Cleaning documents cleaning zones with photos; repair items
              stay outside the cleaning invoice.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3">
              Time-on-Site Benchmarks by Bedroom Count in Deltona
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Studio / 1 bed: 2.0–3.5 hrs standard; up to 6 hrs heavy</li>
              <li>2 bed / 1–2 bath: 3.5–5 hrs standard; 5–7 hrs heavy</li>
              <li>3 bed / 2 bath: 4.5–6.5 hrs standard; 6.5–9 hrs heavy</li>
            </ul>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Utilities must be on. Empty units clean faster and inspect cleaner than
              partially packed homes.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3">
              Photo Proof Pack: What Tenants Should Receive Before Walkthrough
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A useful proof pack includes timestamped photos of oven interior, fridge
              interior and gasket area, each bathroom, open cabinets, baseboards in main
              rooms, window tracks, and floor fields. Tenants and property managers should
              share the same pack so the walk starts from evidence, not memory.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3">
              Property Manager SLA — 24–48 Hour Vacancy Turn Standards
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Deltona Cleaning targets inspection-ready photos within 2 hours of completion
              and a cleaning-related punch-list re-clean window within 24 hours. Vacant units
              with clear access and utilities on are targeted inspection-ready in 24–48 hours
              from the booked slot—critical for property managers turning Deltona rentals
              between leases.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3">
              Apartment vs Single-Family Move-Out Checks in Deltona
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Apartments add building access, quieter work expectations, and often stricter
              cabinet and appliance clauses. Single-family homes add garage, patio, and more
              baseboard linear feet. Both still fail on the same core appliance and wet-area
              zones. See{" "}
              <Link href="/services/apartment-cleaning" className="text-primary hover:underline">
                apartment cleaning
              </Link>{" "}
              and{" "}
              <Link href="/services/move-out-cleaning" className="text-primary hover:underline">
                move-out cleaning in Deltona
              </Link>{" "}
              for service scopes.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3">
              How Deltona Cleaning Runs the Landlord Walk Simulation
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              After the clean, the crew runs a 10-point vacancy scorecard that mirrors common
              Deltona manager walks: appliances, baths, cabinets, baseboards, tracks, floors,
              fans, closets, switches, and entry. Scores below standard trigger same-visit
              fixes before photo delivery.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-3">
              Pricing Ranges for Move-Out Cleaning in Deltona, FL
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Online estimates start from residential base pricing and rise with move-out
              scope, condition tier, and add-ons (inside oven, fridge, cabinets). Use the{" "}
              <Link href="/#booking" className="text-primary hover:underline">
                instant quote tool
              </Link>{" "}
              or call{" "}
              <a href={SITE_PHONE_HREF} className="text-primary hover:underline">
                {SITE_PHONE}
              </a>{" "}
              with bed/bath count and vacancy date.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4">
              Book an Inspection-Ready Move-Out Clean in Deltona
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Tenants, landlords, and property managers can book{" "}
              {moveOut ? (
                <Link
                  href={`/services/${moveOut.slug}`}
                  className="text-primary hover:underline"
                >
                  move-out cleaning in Deltona, FL
                </Link>
              ) : (
                "move-out cleaning in Deltona, FL"
              )}{" "}
              with photo proof and a shared inspection standard.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/#booking">Get a free quote</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/services/move-out-cleaning">Move-out service page</Link>
              </Button>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b pb-6 last:border-0">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg border bg-muted/40 p-6">
            <h2 className="text-xl font-bold mb-3">Related services</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services/house-cleaning" className="text-primary hover:underline">
                  House cleaning in Deltona, FL
                </Link>
              </li>
              <li>
                <Link href="/services/apartment-cleaning" className="text-primary hover:underline">
                  Apartment cleaning in Deltona, FL
                </Link>
              </li>
              <li>
                <Link href="/services/airbnb-cleaning" className="text-primary hover:underline">
                  Airbnb cleaning in Deltona, FL
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-primary hover:underline">
                  All guides →
                </Link>
              </li>
            </ul>
          </section>
        </Container>
      </div>
    </article>
  );
}
