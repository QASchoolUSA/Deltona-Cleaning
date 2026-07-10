import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Free Quote | Deltona Cleaning",
  description:
    "Get a free quote for house, move-out, Airbnb, post-construction, office, or restaurant cleaning in Deltona, FL. Call (689) 388-2588 or send a request online.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Deltona Cleaning",
    description:
      "Request a free cleaning quote in Deltona, FL. Fast response for homeowners, property managers, hosts, and businesses.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
