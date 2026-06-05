// config/schema.ts
// Per-page JSON-LD builders. All URLs are absolute, derived from site.url.
// Rendered via <JsonLd> as <script type="application/ld+json">, which the CSP
// post-processor treats as a non-executable data block (no hashing needed).
import { site } from "@/config/site";

/** Stable @id for the business node defined site-wide in layout.tsx. */
export const BUSINESS_ID = `${site.url}/#business`;

/** Absolute URL for an internal path. Keeps the trailing slash convention. */
export function absUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export interface Crumb {
  name: string;
  path: string;
}

export function breadcrumbSchema(crumbs: Crumb[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absUrl(c.path),
    })),
  };
}

export interface FaqEntry {
  q: string;
  a: string;
}

export function faqSchema(faq: FaqEntry[]): object {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.a,
      },
    })),
  };
}

export interface ServiceSchemaInput {
  name: string;
  description: string;
  path: string;
  /** Optional named area (a town) this page targets. */
  areaName?: string;
}

export function serviceSchema(input: ServiceSchemaInput): object {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: absUrl(input.path),
    serviceType: input.name,
    provider: {
      "@type": "GeneralContractor",
      "@id": BUSINESS_ID,
      name: site.name,
      telephone: site.contact.phoneTel,
      url: site.url,
    },
    areaServed: input.areaName
      ? { "@type": "City", name: `${input.areaName}, OR` }
      : {
          "@type": "GeoCircle",
          geoMidpoint: { "@type": "GeoCoordinates", latitude: 43.09, longitude: -124.41 },
          geoRadius: "50 mi",
        },
  };
}
