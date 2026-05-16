import type { MetadataRoute } from "next";

import { properties } from "@/lib/data/properties";
import { getSiteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl();
  const lastModified = new Date();

  const staticPaths = ["", "/about", "/properties", "/services", "/contact", "/property"];

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));

  for (const p of properties) {
    entries.push({
      url: `${base}/property/${p.id}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.6,
    });
  }

  return entries;
}
