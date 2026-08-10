import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { CallToAction } from "~/components/ui/CallToAction";
import { brutalistPortableTextComponents } from "~/components/ui/PortableTextComponents";
import {
  getBlogBySlugFromSanity,
  getAllBlogsFromSanity,
  CATEGORY_LABELS,
} from "~/lib/blogs-data";

interface BlogArticlePageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogArticlePage({ params }: BlogArticlePageProps) {
  const { slug } = await params;
  const post = await getBlogBySlugFromSanity(slug);

  if (!post) {
    notFound();
  }

  const allPosts = await getAllBlogsFromSanity();
  const relatedPosts = allPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="bg-paper text-ink min-h-screen selection:bg-tangerine selection:text-ink">
      <main className="relative w-full pb-section-gap">
        
        {/* 1. Standard Blog Header */}
        <header className="bg-paper border-b-4 border-ink py-12 md:py-16 px-margin-mobile md:px-margin-desktop">
          <div className="max-w-7xl mx-auto space-y-6">
            
            {/* Breadcrumb & Navigation */}
            <div className="flex items-center gap-3 font-mono text-[13px] font-bold text-ink/80 flex-wrap">
              <Link
                href="/blogs"
                className="bg-surface-container-lowest border-2 border-ink px-3 py-1.5 hover:bg-tangerine transition-colors shadow-[2px_2px_0_#000] inline-flex items-center gap-1.5"
              >
                <span>←</span>
                <span>ALL BLOGS</span>
              </Link>
              <span>/</span>
              <span className="bg-tangerine text-ink px-2.5 py-1 border border-ink uppercase">
                {CATEGORY_LABELS[post.category]}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-[32px] sm:text-[44px] md:text-[56px] font-black uppercase leading-[1.02] text-ink max-w-5xl">
              {post.title}
            </h1>

            {/* Excerpt Sub-header */}
            <p className="text-[18px] md:text-[22px] font-bold text-ink/90 max-w-4xl leading-relaxed">
              {post.excerpt}
            </p>

            {/* Author & Meta Bar */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t-2 border-ink/20">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-ink relative">
                  <Image
                    unoptimized
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-black text-[15px] uppercase leading-none">{post.author.name}</p>
                  <p className="font-mono text-[12px] text-ink/70">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 font-mono text-[13px] font-bold text-ink/80">
                <span>PUBLISHED: {post.publishedAt}</span>
                <span>•</span>
                <span className="bg-ink text-surface-container-lowest px-2.5 py-1">
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </header>

        {/* 2. Full-Width Featured Cover Banner */}
        <section className="px-margin-mobile md:px-margin-desktop py-8">
          <div className="max-w-7xl mx-auto">
            <div className="relative aspect-[21/9] w-full border-4 border-ink brutalist-shadow overflow-hidden bg-ink">
              <Image
                unoptimized
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* 3. Main 2-Column Blog Layout (Content + Sidebar) */}
        <section className="px-margin-mobile md:px-margin-desktop py-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Article Body (lg:col-span-8) */}
            <div className="lg:col-span-8 space-y-8">
              <div className="bg-surface-container-lowest border-4 border-ink p-6 sm:p-10 md:p-12 brutalist-shadow space-y-6 text-ink leading-[1.8] text-[17px] md:text-[19px] font-medium">
                {Array.isArray(post.content) ? (
                  <PortableText
                    value={post.content}
                    components={brutalistPortableTextComponents}
                  />
                ) : typeof post.content === "string" ? (
                  post.content.split("\n\n").map((paragraph, idx) => {
                    if (paragraph.startsWith("# ")) {
                      return (
                        <h1 key={idx} className="text-[28px] md:text-[36px] font-black uppercase text-ink pt-4 border-b-4 border-ink pb-3 leading-tight">
                          {paragraph.replace("# ", "")}
                        </h1>
                      );
                    }
                    if (paragraph.startsWith("## ")) {
                      return (
                        <h2 key={idx} className="text-[22px] md:text-[28px] font-black uppercase text-ink pt-6 border-b-2 border-ink/20 pb-2 leading-tight">
                          {paragraph.replace("## ", "")}
                        </h2>
                      );
                    }
                    if (paragraph.startsWith("### ")) {
                      return (
                        <h3 key={idx} className="text-[18px] md:text-[22px] font-black uppercase text-ink pt-4 leading-tight">
                          {paragraph.replace("### ", "")}
                        </h3>
                      );
                    }
                    if (paragraph.startsWith("> ")) {
                      return (
                        <blockquote key={idx} className="bg-tangerine text-ink p-6 border-4 border-ink brutalist-shadow font-bold text-[18px] md:text-[20px] my-8 leading-snug">
                          {paragraph.replace("> ", "")}
                        </blockquote>
                      );
                    }
                    if (paragraph.startsWith("- ")) {
                      const items = paragraph.split("\n- ");
                      return (
                        <ul key={idx} className="space-y-3 pl-2 my-4">
                          {items.map((item, iIdx) => (
                            <li key={iIdx} className="flex items-start gap-3">
                              <span className="text-tangerine font-black text-[20px] leading-none mt-1">→</span>
                              <span className="font-bold">{item.replace("- ", "")}</span>
                            </li>
                          ))}
                        </ul>
                      );
                    }
                    return <p key={idx}>{paragraph}</p>;
                  })
                ) : null}
              </div>

              {/* Tags Section */}
              <div className="bg-surface-container-lowest border-4 border-ink p-6 brutalist-shadow flex items-center gap-3 flex-wrap">
                <span className="font-mono text-[13px] font-bold text-ink uppercase">ARTICLE TAGS:</span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-tangerine text-ink font-mono text-[12px] font-bold px-3 py-1 border-2 border-ink uppercase"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: Standard Blog Sidebar (lg:col-span-4) */}
            <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-28">
              
              {/* Author Bio Card */}
              <div className="bg-surface-container-lowest border-4 border-ink p-6 brutalist-shadow space-y-4">
                <span className="font-mono text-[12px] font-bold text-tangerine uppercase tracking-wider block border-b-2 border-ink/20 pb-2">
                  ABOUT THE AUTHOR
                </span>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-ink relative shrink-0">
                    <Image
                      unoptimized
                      src={post.author.avatar}
                      alt={post.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-black text-[18px] uppercase leading-none">{post.author.name}</h4>
                    <p className="font-mono text-[12px] font-bold text-ink/70 mt-1">{post.author.role}</p>
                  </div>
                </div>
                <p className="text-[14px] font-medium text-ink/80 leading-normal">
                  {post.author.bio ??
                    "Written by senior digital marketing and growth specialists at Ads Mini. We build and scale data-driven growth channels."}
                </p>
              </div>

              {/* Executive Summary / Key Takeaways Box */}
              <div className="bg-tangerine border-4 border-ink p-6 brutalist-shadow space-y-4 text-ink">
                <span className="font-mono text-[12px] font-bold uppercase tracking-wider block border-b-2 border-ink pb-2">
                  KEY TAKEAWAYS
                </span>
                <ul className="space-y-3 text-[14px] font-bold leading-snug">
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Actionable framework ready for immediate team execution.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Tested across enterprise and high-growth startup budgets.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✓</span>
                    <span>Grounded in empirical performance data and ROI metrics.</span>
                  </li>
                </ul>
              </div>

              {/* Sidebar CTA Card */}
              <div className="bg-ink text-surface-container-lowest border-4 border-ink p-6 brutalist-shadow space-y-4 text-center">
                <h4 className="text-[20px] font-black uppercase text-surface-container-lowest leading-tight">
                  NEED HELP WITH YOUR DIGITAL STRATEGY?
                </h4>
                <p className="text-[14px] opacity-80 font-medium">
                  Let&apos;s audit your current marketing stack and build a roadmap that generates real revenue.
                </p>
                <Link
                  href="/contact"
                  className="block w-full bg-tangerine text-ink py-3 font-black text-[14px] uppercase border-2 border-ink hover:bg-surface-container-lowest transition-colors shadow-[4px_4px_0_#000]"
                >
                  REQUEST FREE AUDIT →
                </Link>
              </div>

            </aside>
          </div>
        </section>

        {/* 4. Related Articles Section */}
        <section className="px-margin-mobile md:px-margin-desktop py-16">
          <div className="max-w-7xl mx-auto space-y-8">
            <div className="flex items-center justify-between border-b-4 border-ink pb-4">
              <h3 className="text-[28px] md:text-[40px] font-black uppercase leading-none">
                MORE FROM ADS MINI
              </h3>
              <Link
                href="/blogs"
                className="font-mono text-[13px] font-bold text-tangerine hover:underline hidden sm:inline-block"
              >
                VIEW ALL ARTICLES →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rel) => (
                <Link
                  key={rel.id}
                  href={`/blogs/${rel.slug}`}
                  className="bg-surface-container-lowest border-4 border-ink p-6 brutalist-shadow hover:bg-tangerine transition-colors flex flex-col justify-between group"
                >
                  <div>
                    <span className="font-label-mono text-[11px] font-bold uppercase text-tangerine group-hover:text-ink block mb-3 bg-ink px-2.5 py-1 w-fit border border-ink">
                      {CATEGORY_LABELS[rel.category]}
                    </span>
                    <h4 className="font-black text-[18px] uppercase text-ink group-hover:text-ink mb-3 leading-tight">
                      {rel.title}
                    </h4>
                    <p className="text-[14px] font-medium text-ink/80 group-hover:text-ink line-clamp-2">
                      {rel.excerpt}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t-2 border-ink/20 flex items-center justify-between text-[13px] font-bold uppercase text-ink">
                    <span>READ ARTICLE</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Lead Call To Action */}
        <CallToAction
          title="WANT TO PUT THESE IDEAS TO WORK?"
          description="Stop guessing with your digital strategy. Talk directly with our team to execute proven marketing and recruitment frameworks."
          buttonText="GET IN TOUCH"
          buttonHref="/contact"
        />
      </main>
    </div>
  );
}
