import type { MetadataRoute } from "next";
import { site } from "@/config/site";

const routes = ["/", "/services/", "/gallery/"];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    lastModified,
  }));
}
