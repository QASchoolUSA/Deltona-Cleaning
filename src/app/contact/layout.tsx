import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description:
    "Get a free quote for professional cleaning services in Deltona, FL. Call (689) 388-2588 or send a request online.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Deltona Cleaning",
    description: "Request a free cleaning quote in Deltona, FL. Fast response, no obligation.",
    url: "/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
