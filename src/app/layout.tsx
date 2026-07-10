import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    template: `%s | ${SITE_NAME}`,
    default: "Cleaning Services in Deltona, FL | Licensed & Insured",
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "house cleaning Deltona FL",
    "move out cleaning Deltona",
    "Airbnb cleaning Deltona",
    "apartment cleaning Deltona",
    "post construction cleaning Deltona",
    "office cleaning Deltona",
    "restaurant cleaning Deltona",
    "maid service Deltona",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Cleaning Services in Deltona, FL | Deltona Cleaning",
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cleaning Services in Deltona, FL | Deltona Cleaning",
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          "antialiased font-sans bg-background text-foreground"
        )}
      >
        <JsonLd />
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
