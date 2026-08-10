import { createImageUrlBuilder } from "@sanity/image-url";
import { client, isSanityConfigured } from "./client";

const builder = createImageUrlBuilder(client);

export function urlForImage(source: unknown): string {
  if (!source) return "";
  if (typeof source === "string") return source;
  if (!isSanityConfigured) return "";

  try {
    const srcObj = source as { asset?: { _ref?: string } | string; _ref?: string };
    const imageRef =
      (typeof srcObj.asset === "object" ? srcObj.asset?._ref : srcObj.asset) ??
      srcObj._ref ??
      (source as string);

    if (!imageRef) return "";
    return builder.image(imageRef).auto("format").fit("max").url() ?? "";
  } catch (error) {
    console.error("Error building Sanity image URL:", error);
    return "";
  }
}
