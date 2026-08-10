import { groq } from "next-sanity";

export const POSTS_QUERY = groq`
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    "id": _id,
    "slug": slug.current,
    title,
    excerpt,
    content,
    "category": category->slug.current,
    "categoryLabel": category->title,
    "author": {
      "name": author->name,
      "role": author->role,
      "avatar": author->avatar,
      "bio": author->bio
    },
    readTime,
    publishedAt,
    coverImage,
    tags,
    featured
  }
`;

export const POST_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug][0] {
    "id": _id,
    "slug": slug.current,
    title,
    excerpt,
    content,
    "category": category->slug.current,
    "categoryLabel": category->title,
    "author": {
      "name": author->name,
      "role": author->role,
      "avatar": author->avatar,
      "bio": author->bio
    },
    readTime,
    publishedAt,
    coverImage,
    tags,
    featured
  }
`;

export const CATEGORIES_QUERY = groq`
  *[_type == "category" && defined(slug.current)] {
    "id": slug.current,
    "label": title,
    description
  }
`;

export const POST_SLUGS_QUERY = groq`
  *[_type == "post" && defined(slug.current)][].slug.current
`;
