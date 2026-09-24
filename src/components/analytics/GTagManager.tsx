"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useMemo } from "react";
import { siteConfig } from "~/data/data";

// Helper to verify if a tag is a real tag and not an unconfigured placeholder
function isValidTagId(tagId: string): boolean {
  if (!tagId || typeof tagId !== "string") return false;
  const trimmed = tagId.trim();
  if (
    trimmed === "" ||
    trimmed.startsWith("G-XXXX") ||
    trimmed.startsWith("AW-XXXX") ||
    trimmed.includes("XXXXXXXX")
  ) {
    return false;
  }
  return true;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function GTagManager() {
  const pathname = usePathname();
  const { defaultTags = [], pageTags = {}, mode = "merge" } = siteConfig.gtag;

  // Resolve active tags for the current route
  const activeTags = useMemo(() => {
    const specificTags = pageTags[pathname] ?? [];
    let combined: string[] = [];

    if (specificTags.length > 0) {
      if (mode === "replace") {
        combined = specificTags;
      } else {
        // Merge page tags with default tags (deduplicated)
        combined = Array.from(new Set([...defaultTags, ...specificTags]));
      }
    } else {
      combined = defaultTags;
    }

    return combined.filter(isValidTagId);
  }, [pathname, defaultTags, pageTags, mode]);

  // Primary tag used for the initial script loader URL
  const primaryTag = activeTags[0];

  // Send page_view updates on client-side route transitions
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      activeTags.forEach((tagId) => {
        window.gtag?.("config", tagId, {
          page_path: pathname,
        });
      });
    }
  }, [pathname, activeTags]);

  // If no valid Google Tag IDs exist, render nothing (no network overhead or broken requests)
  if (!primaryTag || activeTags.length === 0) {
    return null;
  }

  return (
    <>
      {/* Google Tag Global Site Tag (gtag.js) */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(primaryTag)}`}
      />
      <Script
        id="google-gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${activeTags.map((tagId) => `gtag('config', '${tagId}', { page_path: '${pathname}' });`).join("\n")}
          `,
        }}
      />
    </>
  );
}
