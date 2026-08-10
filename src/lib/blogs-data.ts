import { isSanityConfigured, sanityFetch } from "~/sanity/lib/client";
import { urlForImage } from "~/sanity/lib/image";
import { POSTS_QUERY, POST_BY_SLUG_QUERY } from "~/sanity/lib/queries";

export type BlogCategory =
  | "digital-marketing"
  | "seo-ai-search"
  | "recruitment"
  | "strategy";

export interface BlogAuthor {
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: unknown; // Can be raw Markdown string or PortableText block array
  category: BlogCategory;
  categoryLabel: string;
  author: BlogAuthor;
  readTime: string;
  publishedAt: string;
  coverImage: string;
  tags: string[];
  featured?: boolean;
}

export const CATEGORY_LABELS: Record<BlogCategory, string> = {
  "digital-marketing": "Digital Marketing",
  "seo-ai-search": "SEO & AI Search",
  recruitment: "Recruitment & Talent",
  strategy: "Growth Strategy",
};

export const DEMO_BLOGS: BlogPost[] = [];

interface RawSanityPost {
  id?: string;
  _id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: unknown;
  category?: string;
  categoryLabel?: string;
  author?: {
    name?: string;
    role?: string;
    avatar?: unknown;
    bio?: string;
  };
  readTime?: string;
  publishedAt?: string;
  coverImage?: unknown;
  tags?: string[];
  featured?: boolean;
}

function formatSanityPost(raw: RawSanityPost): BlogPost {
  const categoryKey = (raw.category ?? "strategy") as BlogCategory;
  const authorAvatar = urlForImage(raw.author?.avatar);
  const coverImg = urlForImage(raw.coverImage);

  const publishedDate = raw.publishedAt
    ? new Date(raw.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "Recently";

  return {
    id: raw.id ?? raw._id ?? String(Math.random()),
    slug: raw.slug ?? "",
    title: raw.title ?? "",
    excerpt: raw.excerpt ?? "",
    content: raw.content,
    category: categoryKey,
    categoryLabel: raw.categoryLabel ?? CATEGORY_LABELS[categoryKey] ?? "Articles",
    author: {
      name: raw.author?.name ?? "Ads Mini Team",
      role: raw.author?.role ?? "Specialist",
      avatar:
        authorAvatar && authorAvatar.trim() !== ""
          ? authorAvatar
          : "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
      bio: raw.author?.bio,
    },
    readTime: raw.readTime ?? "5 min read",
    publishedAt: publishedDate,
    coverImage:
      coverImg && coverImg.trim() !== ""
        ? coverImg
        : "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop",
    tags: Array.isArray(raw.tags) ? raw.tags : [],
    featured: Boolean(raw.featured),
  };
}

export async function getAllBlogsFromSanity(): Promise<BlogPost[]> {
  if (!isSanityConfigured) {
    return [];
  }
  try {
    const rawPosts = await sanityFetch<RawSanityPost[]>({
      query: POSTS_QUERY,
      tags: ["post"],
    });
    if (!rawPosts || rawPosts.length === 0) {
      return [];
    }
    return rawPosts.map(formatSanityPost);
  } catch (error) {
    console.error("Failed to fetch blogs from Sanity:", error);
    return [];
  }
}

export async function getBlogBySlugFromSanity(slug: string): Promise<BlogPost | undefined> {
  if (!isSanityConfigured) {
    return undefined;
  }
  try {
    const rawPost = await sanityFetch<RawSanityPost>({
      query: POST_BY_SLUG_QUERY,
      params: { slug },
      tags: ["post"],
    });
    if (!rawPost) {
      return undefined;
    }
    return formatSanityPost(rawPost);
  } catch (error) {
    console.error(`Failed to fetch blog '${slug}' from Sanity:`, error);
    return undefined;
  }
}

export function getAllBlogs(): BlogPost[] {
  return DEMO_BLOGS;
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return DEMO_BLOGS.find((post) => post.slug === slug);
}

export function filterBlogs(
  posts: BlogPost[],
  category?: string,
  search?: string
): BlogPost[] {
  let list = posts;

  if (category && category !== "all") {
    list = list.filter((post) => post.category === category);
  }

  if (search && search.trim() !== "") {
    const q = search.toLowerCase().trim();
    list = list.filter(
      (post) =>
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q))
    );
  }

  return list;
}
