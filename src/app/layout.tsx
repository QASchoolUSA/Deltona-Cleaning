import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Deltona Cleaning",
    default: "Deltona Cleaning - Professional House Cleaning Services",
  },
  description: "Top-rated cleaning company in Deltona, FL. Offering house cleaning, deep cleaning, move-out cleaning, and more. Licensed & Insured. Get a free quote!",
  keywords: ["house cleaning deltona", "cleaning services deltona fl", "maid service", "move out cleaning", "deep cleaning"],
  openGraph: {
    title: "Deltona Cleaning - Professional House Cleaning Services",
    description: "Reliable and affordable cleaning services in Deltona, FL.",
    url: "https://deltonacleaning.com",
    siteName: "Deltona Cleaning",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Deltona Cleaning",
    description: "Professional cleaning services in Deltona, FL",
  },
  icons: {
    icon: "/favicon.ico",
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
