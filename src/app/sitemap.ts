import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE.url}/`, lastModified: now },
    { url: `${SITE.url}/projects`, lastModified: now },
    { url: `${SITE.url}/about`, lastModified: now },
    { url: `${SITE.url}/contact`, lastModified: now },
    { url: `${SITE.url}/resume`, lastModified: now },
  ];

  const projectRoutes: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${SITE.url}/projects/${p.slug}`,
    lastModified: now,
  }));

  return [...staticRoutes, ...projectRoutes];
}
