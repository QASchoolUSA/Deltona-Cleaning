import { JsonLd } from "@/components/seo/JsonLd";
import {
  buildBreadcrumbSchema,
  buildContactPageSchema,
} from "@/lib/seo/schema";
import ContactPageClient from "./ContactPageClient";

export default function ContactPage() {
  const contactSchema = buildContactPageSchema();
  const breadcrumb = buildBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
  ]);

  return (
    <>
      <JsonLd data={contactSchema} />
      <JsonLd data={breadcrumb} />
      <ContactPageClient />
    </>
  );
}
