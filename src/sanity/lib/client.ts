import { createClient } from "next-sanity";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2024-01-01";

export const isSanityConfigured = Boolean(
  projectId && projectId !== "your_sanity_project_id" && projectId !== "demo_project_id"
);

export const client = createClient({
  projectId: projectId ?? "placeholder",
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === "production",
});

export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: string;
  params?: Record<string, unknown>;
  revalidate?: number | false;
  tags?: string[];
}): Promise<QueryResponse> {
  if (!isSanityConfigured) {
    throw new Error("Sanity is not configured");
  }

  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate,
      tags,
    },
  });
}
