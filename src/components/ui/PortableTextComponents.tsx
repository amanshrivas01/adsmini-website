import Image from "next/image";
import Link from "next/link";
import type { PortableTextComponents } from "@portabletext/react";
import { urlForImage } from "~/sanity/lib/image";

export const brutalistPortableTextComponents: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-[28px] md:text-[36px] font-black uppercase text-ink pt-4 border-b-4 border-ink pb-3 leading-tight my-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-[22px] md:text-[28px] font-black uppercase text-ink pt-6 border-b-2 border-ink/20 pb-2 leading-tight my-5">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-[18px] md:text-[22px] font-black uppercase text-ink pt-4 leading-tight my-4">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="bg-tangerine text-ink p-6 border-4 border-ink brutalist-shadow font-bold text-[18px] md:text-[20px] my-8 leading-snug">
        {children}
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="my-4 leading-[1.8] text-[17px] md:text-[19px] font-medium text-ink">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => <ul className="space-y-3 pl-2 my-4">{children}</ul>,
    number: ({ children }) => (
      <ol className="space-y-3 list-decimal pl-6 my-4 font-bold">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="flex items-start gap-3">
        <span className="text-tangerine font-black text-[20px] leading-none mt-1">→</span>
        <span className="font-bold">{children}</span>
      </li>
    ),
    number: ({ children }) => <li className="font-bold pl-1">{children}</li>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-black text-ink">{children}</strong>,
    em: ({ children }) => <em className="italic font-serif">{children}</em>,
    code: ({ children }) => (
      <code className="bg-ink text-tangerine px-2 py-0.5 font-mono text-[14px] font-bold border border-ink">
        {children}
      </code>
    ),
    link: ({ value, children }: { value?: { href?: string }; children: React.ReactNode }) => {
      const href = value?.href ?? "#";
      const isExternal = href.startsWith("http");
      return (
        <Link
          href={href}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-tangerine font-bold underline hover:bg-ink hover:text-tangerine transition-colors px-1"
        >
          {children}
        </Link>
      );
    },
  },
  types: {
    image: ({ value }: { value?: { alt?: string; caption?: string } }) => {
      const imageUrl = urlForImage(value);
      if (!imageUrl) return null;

      const altText = value?.alt ?? "Blog image";

      return (
        <div className="my-8 space-y-2">
          <div className="relative aspect-[16/9] w-full border-4 border-ink brutalist-shadow overflow-hidden bg-ink">
            <Image
              unoptimized
              src={imageUrl}
              alt={altText}
              fill
              className="object-cover"
            />
          </div>
          {value?.caption && (
            <p className="text-center font-mono text-[13px] font-bold text-ink/70 uppercase">
              {value.caption}
            </p>
          )}
        </div>
      );
    },
  },
};
