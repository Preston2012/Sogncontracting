import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { services } from "@/config/services";
import { areas } from "@/config/areas";

// Data-driven so new service and area pages are always included. Keep trailing
// slashes to match next.config.js trailingSlash: true and the canonical URLs.
const staticRoutes = [
  "/",
  "/services/",
  "/service-area/",
  "/gallery/",
  "/cost/",
  "/faq/",
  "/contact/",
  "/privacy/",
  "/terms/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const routes = [
    ...staticRoutes,
    ...services.map((s) => `/services/${s.slug}/`),
    ...areas.map((a) => `/service-area/${a.slug}/`),
  ];
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
  }));
}
