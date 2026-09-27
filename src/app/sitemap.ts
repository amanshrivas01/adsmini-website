import type { MetadataRoute } from "next";
import { getAllBlogsFromSanity } from "~/lib/blogs-data";

const BASE_URL = "https://www.adsmini.com";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static routes matching all active website pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/digital-marketing`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/recruitment`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/work`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic routes for blog posts from Sanity
  let blogRoutes: MetadataRoute.Sitemap = [];
  try {
    const blogs = await getAllBlogsFromSanity();
    blogRoutes = blogs
      .filter((post) => Boolean(post.slug))
      .map((post) => ({
        url: `${BASE_URL}/blogs/${encodeURIComponent(post.slug)}`,
        lastModified: post.publishedAt && !isNaN(Date.parse(post.publishedAt))
          ? new Date(post.publishedAt)
          : new Date(),
        changeFrequency: "weekly",
        priority: 0.6,
      }));
  } catch (error) {
    console.error("Failed to fetch blog routes for sitemap:", error);
  }

  return [...staticRoutes, ...blogRoutes];
}
