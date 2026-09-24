import type { Metadata } from "next";
import { siteConfig, type PageMetadataItem } from "~/data/data";

/**
 * Constructs a comprehensive Next.js Metadata object using centralized configuration from data.ts
 */
export function constructMetadata(
  path: string,
  overrides?: Partial<Metadata> & Partial<PageMetadataItem>
): Metadata {
  const defaultMeta = siteConfig.metadata.default;
  const pageMeta = siteConfig.metadata.pages[path] ?? defaultMeta;

  const rawTitle = overrides?.title;
  const title =
    (typeof rawTitle === "string" ? rawTitle : undefined) ??
    pageMeta.title ??
    defaultMeta.title;
  const description =
    overrides?.description ?? pageMeta.description ?? defaultMeta.description;
  const keywords = overrides?.keywords ?? pageMeta.keywords ?? defaultMeta.keywords;
  const ogImage =
    overrides?.ogImage ?? pageMeta.ogImage ?? defaultMeta.ogImage ?? "/android-chrome-192x192.png";
  const canonicalUrl = `${siteConfig.baseUrl}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    keywords,
    metadataBase: new URL(siteConfig.baseUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.siteName,
      images: [
        {
          url: ogImage,
          width: 800,
          height: 800,
          alt: `${siteConfig.siteName} Logo`,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
    icons: [{ rel: "icon", url: "/android-chrome-192x192.png" }],
    robots: pageMeta.noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    ...overrides,
  };
}
