"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PageHero } from "~/components/ui/PageHero";
import { CATEGORY_LABELS, type BlogPost } from "~/lib/blogs-data";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    async function loadBlogs() {
      try {
        const res = await fetch("/api/blogs");
        const json = (await res.json()) as { success?: boolean; data?: BlogPost[] };
        if (json.success && Array.isArray(json.data)) {
          setBlogs(json.data);
        }
      } catch (err) {
        console.error("Failed to load blogs from API:", err);
      }
    }
    void loadBlogs();
  }, []);

  const categories = useMemo(() => {
    const list: { id: string; label: string }[] = [
      { id: "all", label: "ALL ARTICLES" },
    ];
    const seen = new Set<string>();

    blogs.forEach((post) => {
      if (post.category && !seen.has(post.category)) {
        seen.add(post.category);
        const label = post.categoryLabel
          ? post.categoryLabel.toUpperCase()
          : (CATEGORY_LABELS[post.category] || post.category).toUpperCase();
        list.push({ id: post.category, label });
      }
    });

    return list;
  }, [blogs]);

  const featuredPost = useMemo(() => {
    return blogs.find((post) => post.featured) ?? blogs[0];
  }, [blogs]);

  const filteredPosts = useMemo(() => {
    return blogs.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [blogs, selectedCategory, searchQuery]);

  return (
    <div className="bg-paper text-ink min-h-screen selection:bg-tangerine selection:text-ink">
      <main className="relative w-full pb-section-gap">
        {/* Hero Section */}
        <PageHero
          label="03 / BLOGS & INSIGHTS"
          title={
            <>
              PRACTICAL IDEAS. <br />
              <span className="text-tangerine relative inline-block">ZERO FLUFF.</span>
            </>
          }
        >
          Actionable strategies on digital marketing, SEO, AI search visibility, and talent acquisition written by specialists who execute campaigns every day.
        </PageHero>

        {/* Main Content Container */}
        <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-10 space-y-16">
          
          {/* Featured Spotlight Article Poster */}
          {featuredPost && searchQuery === "" && selectedCategory === "all" && (
            <div className="border-4 border-ink bg-surface-container-lowest brutalist-shadow p-6 md:p-10 relative overflow-hidden group">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="bg-tangerine text-ink font-mono text-[12px] font-bold px-3 py-1 border-2 border-ink uppercase">
                      SPOTLIGHT / FEATURED
                    </span>
                    <span className="font-mono text-[13px] font-bold text-ink/70">
                      {featuredPost.publishedAt} • {featuredPost.readTime}
                    </span>
                  </div>

                  <h2 className="text-[28px] sm:text-[36px] md:text-[44px] font-black uppercase leading-[1.05] text-ink group-hover:text-tangerine transition-colors">
                    <Link href={`/blogs/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-[16px] md:text-[18px] font-medium opacity-90 leading-relaxed max-w-2xl">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-4 pt-4 border-t-2 border-ink/20">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-ink relative">
                      <Image
                        unoptimized
                        src={featuredPost.author.avatar}
                        alt={featuredPost.author.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-[14px] leading-none uppercase">{featuredPost.author.name}</p>
                      <p className="text-[12px] font-mono text-ink/70">{featuredPost.author.role}</p>
                    </div>

                    <Link
                      href={`/blogs/${featuredPost.slug}`}
                      className="ml-auto bg-ink text-surface-container-lowest px-5 py-3 font-black text-[13px] uppercase border-2 border-ink hover:bg-tangerine hover:text-ink transition-colors flex items-center gap-2"
                    >
                      <span>READ ARTICLE</span>
                      <span>→</span>
                    </Link>
                  </div>
                </div>

                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] border-4 border-ink overflow-hidden brutalist-shadow">
                    <Image
                      unoptimized
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Interactive Filter & Search Bar */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b-4 border-ink pb-6">
              {/* Category Tabs */}
              <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-2.5 font-black text-[12px] md:text-[13px] uppercase border-2 border-ink whitespace-nowrap transition-colors shadow-[2px_2px_0_#000] ${
                      selectedCategory === cat.id
                        ? "bg-tangerine text-ink"
                        : "bg-surface-container-lowest text-ink hover:bg-ink hover:text-tangerine"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search Bar */}
              <div className="relative min-w-[260px]">
                <input
                  type="text"
                  placeholder="SEARCH ARTICLES..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-surface-container-lowest border-2 border-ink px-4 py-2.5 font-bold text-[13px] uppercase text-ink placeholder:text-ink/50 shadow-[2px_2px_0_#000] focus:outline-none focus:bg-tangerine/10"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 font-black text-[14px] text-ink"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Active Query Status */}
            <div className="flex items-center justify-between font-mono text-[13px] font-bold text-ink/80">
              <span>
                SHOWING {filteredPosts.length} ARTICLE{filteredPosts.length !== 1 ? "S" : ""}
              </span>
              {selectedCategory !== "all" && (
                <button
                  onClick={() => setSelectedCategory("all")}
                  className="text-tangerine hover:underline"
                >
                  RESET CATEGORY FILTER ✕
                </button>
              )}
            </div>
          </div>

          {/* Blog Cards Grid */}
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  className="group flex flex-col justify-between h-full bg-surface-container-lowest border-4 border-ink p-6 md:p-8 brutalist-shadow hover:bg-tangerine transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b-2 border-ink/20">
                      <span className="font-label-mono text-[11px] font-bold uppercase bg-ink text-tangerine px-2.5 py-1 border border-ink">
                        {CATEGORY_LABELS[post.category]}
                      </span>
                      <span className="font-mono text-[12px] font-bold text-ink/70 group-hover:text-ink">
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-[20px] md:text-[24px] font-black uppercase leading-tight text-ink mb-4 group-hover:text-ink">
                      <Link href={`/blogs/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-[14px] md:text-[15px] font-medium text-ink/80 group-hover:text-ink leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t-2 border-ink/20 flex items-center justify-between">
                    <span className="font-mono text-[12px] font-bold text-ink/70 group-hover:text-ink">
                      {post.publishedAt}
                    </span>
                    <Link
                      href={`/blogs/${post.slug}`}
                      className="font-black text-[13px] uppercase text-ink flex items-center gap-1 group-hover:underline"
                    >
                      <span>READ</span>
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="border-4 border-ink p-12 text-center bg-surface-container-lowest brutalist-shadow">
              <h3 className="text-[24px] font-black uppercase mb-2">NO ARTICLES FOUND</h3>
              <p className="text-[16px] font-medium text-ink/80 mb-6">
                Try searching for a different keyword or reset your category filter.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                  setSearchQuery("");
                }}
                className="bg-tangerine text-ink px-6 py-3 font-black uppercase border-2 border-ink shadow-[4px_4px_0_#000]"
              >
                CLEAR ALL FILTERS
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
