"use client";

import React, { useState } from "react";

interface ServicePillar {
  id: string;
  num: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  bgVariant?: "default" | "tangerine" | "ink";
  subCategories: {
    title: string;
    items: string[];
  }[];
  keyMetrics?: string[];
  platforms?: string[];
}

const servicePillars: ServicePillar[] = [
  {
    id: "seo-search",
    num: "01",
    category: "Search & Organic Growth",
    title: "SEO & Modern Search Visibility",
    tagline: "Be found everywhere your buyers search   Google, AI answers, and voice.",
    description: "Search in 2026 goes far beyond standard keywords. We optimize your brand's presence across classical search engines, AI answer engines (ChatGPT, Perplexity, Gemini), local maps, and specialized platforms to drive sustainable, compounding organic traffic.",
    bgVariant: "default",
    subCategories: [
      {
        title: "Search Engine Optimisation (SEO)",
        items: [
          "Technical SEO (Core Web Vitals, Crawlability, Site Architecture)",
          "On-Page & Structural SEO (Metadata, Schema Markup, Internal Links)",
          "Off-Page & Authority Building (High-Quality Backlink Acquisition)",
          "Local SEO & Google Business Profile (Map Rankings, Local Citations)",
          "E-Commerce & Programmatic SEO (Product Feeds, Scalable Keywords)"
        ]
      },
      {
        title: "Next-Gen AI & Engine Optimisation",
        items: [
          "AEO (Answer Engine Optimisation for Featured Snippets & PAA)",
          "GEO (Generative Engine Optimisation for AI Search visibility)",
          "Semantic & Entity SEO (Topic Authority & Knowledge Graph)",
          "Voice Search (VSO) & App Store Optimisation (ASO)",
          "Video Engine Optimisation (YouTube & Video Search Rankings)"
        ]
      }
    ],
    keyMetrics: ["Organic Keywords & Traffic", "Domain Authority", "AI Citations & Featured Snippets", "Local Map Pack Rankings"]
  },
  {
    id: "paid-media",
    num: "02",
    category: "Paid Acceleration",
    title: "Paid Media & Performance Ads",
    tagline: "Precision ad campaigns engineered for immediate leads, sales, and high ROAS.",
    description: "Turn ad spend into predictable revenue. Our paid media team manages full-funnel ad campaigns across Search, Display, Social, and Messaging platforms with ruthless tracking and continuous bid optimization.",
    bgVariant: "tangerine",
    subCategories: [
      {
        title: "Search & Display Ads (SEM/PPC)",
        items: [
          "Google Search, Display, Shopping, & Performance Max (PMax)",
          "Microsoft Bing Ads Management",
          "Keyword Bidding, Negative Keywords, & Audience Targeting",
          "Ad Copy A/B Testing & High-Converting Landing Page Design"
        ]
      },
      {
        title: "Paid Social & Conversational Ads",
        items: [
          "LinkedIn B2B Lead Gen & Account-Based Marketing (ABM)",
          "Meta Ads (Facebook & Instagram Reels Lead/Sales Campaigns)",
          "Snapchat Ads, Story Ads, & TikTok / Reddit Campaign Execution",
          "WhatsApp Marketing & Conversational Campaign Automation"
        ]
      }
    ],
    keyMetrics: ["ROAS (Return on Ad Spend)", "CPL (Cost Per Lead)", "CPA (Cost Per Acquisition)", "Conversion Rate (CR)"],
    platforms: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Snapchat", "Reddit", "Bing", "WhatsApp"]
  },
  {
    id: "social-community",
    num: "03",
    category: "Community & Authority",
    title: "Social Media & Community Growth",
    tagline: "Build a loyal community and convert social engagement into paying clients.",
    description: "Showing up on social media isn't enough   you need to show up with purpose. We craft high-impact content strategies, manage organic channels, and build active brand communities that turn followers into brand advocates.",
    bgVariant: "default",
    subCategories: [
      {
        title: "Organic Social & Content Management",
        items: [
          "Monthly Content Calendars with Professional Copy & Visual Design",
          "Short-Form Video Strategy (Instagram Reels, YouTube Shorts)",
          "LinkedIn Thought Leadership & Executive Profiling",
          "Multi-Platform Channel Management & Brand Formatting"
        ]
      },
      {
        title: "Community & Creator Marketing",
        items: [
          "Active Community Management (Comment & Message Engagement)",
          "Influencer Marketing & Strategic Creator Partnerships",
          "Reddit & Quora Community Engagement & Brand Moderation",
          "Pinterest Visual Search & E-Commerce Integration"
        ]
      }
    ],
    keyMetrics: ["Engagement Rate", "Follower Growth", "Social Lead Volume", "Brand Sentiment & Reach"],
    platforms: ["LinkedIn", "Instagram", "Facebook", "YouTube", "Snapchat", "Reddit", "Pinterest"]
  },
  {
    id: "content-brand",
    num: "04",
    category: "Content & Messaging",
    title: "Content Marketing & Personal Branding",
    tagline: "Compelling storytelling and authority content that converts readers into buyers.",
    description: "Content is the engine of sustainable digital growth. We produce thoroughly researched articles, whitepapers, landing page copy, and founder personal branding that establish your market authority.",
    bgVariant: "ink",
    subCategories: [
      {
        title: "Content Strategy & Copywriting",
        items: [
          "SEO Blog Articles, In-Depth Guides, & Editorial Writing",
          "Website Copywriting, Sales Pages, & Conversion Copy",
          "Case Studies, Whitepapers, & High-Value Lead Magnets",
          "Email Newsletters & Automated Nurture Sequences"
        ]
      },
      {
        title: "Personal Branding for Leaders",
        items: [
          "Founder & Executive Positioning on LinkedIn & Media Outlets",
          "Podcast Pitching, Keynote Transcripts, & Thought Leadership",
          "Public Relations Copy & Brand Messaging Guidelines"
        ]
      }
    ],
    keyMetrics: ["Time on Page", "Lead Magnet Downloads", "Email Open & Click Rates", "Organic Backlinks"]
  },
  {
    id: "web-tech",
    num: "05",
    category: "Digital Technology",
    title: "Web Development, UI/UX & AI Tech",
    tagline: "Fast, beautiful, high-converting digital products built for the modern web.",
    description: "Your digital storefront must be fast, modern, and effortless to navigate. We build custom websites, landing pages, e-commerce stores, and AI workflow integrations that drive sales.",
    bgVariant: "default",
    subCategories: [
      {
        title: "Web & E-Commerce Development",
        items: [
          "Custom Web Development (Frontend, Backend, Modern Frameworks)",
          "UI/UX Interface Design & Interactive Prototyping",
          "Shopify Store Setup, Theme Customisation, & Checkout Optimisation",
          "Campaign Landing Page Design Optimized for Conversions"
        ]
      },
      {
        title: "AI Workflows & Modern Growth Tech",
        items: [
          "AI Content Optimisation & Brand-Aligned Prompt Workflows",
          "Conversational AI Chatbots & Customer Service Automation",
          "Omnichannel Funnel Integration & Tech Stack Setup",
          "Product-Led Growth (PLG) & Growth Marketing Experimentation"
        ]
      }
    ],
    keyMetrics: ["Page Load Speed (LCP)", "Bounce Rate", "Cart Abandonment Rate", "Form Conversion Rate"]
  },
  {
    id: "analytics-cro",
    num: "06",
    category: "Data Precision",
    title: "Analytics, Server-Side Tracking & CRO",
    tagline: "Clear attribution and conversion testing   eliminate guesswork from marketing.",
    description: "You can't improve what you don't measure. We implement bulletproof server-side tracking, custom dashboards, and user behavior analytics to optimize every step of your customer journey.",
    bgVariant: "tangerine",
    subCategories: [
      {
        title: "Tracking & Infrastructure Setup",
        items: [
          "Google Analytics 4 (GA4) Custom Configuration & Reporting",
          "Meta Conversions API (CAPI) Server-Side Event Tracking",
          "Google Tag Manager (GTM) Web & Server-Side Container Management",
          "Shopify & Multi-Channel E-Commerce Attribution Setup"
        ]
      },
      {
        title: "Conversion Rate Optimisation (CRO)",
        items: [
          "Heatmap Analysis & User Session Recording Audits",
          "Funnel Drop-off Identification & Friction Removal",
          "A/B & Multivariate Testing on High-Intent Pages",
          "Custom Executive Data Dashboards & Monthly ROAS Audits"
        ]
      }
    ],
    keyMetrics: ["Data Attribution Accuracy", "Conversion Rate Lift", "User Drop-off Reduction", "Clean Data Signals"]
  }
];

export function ServiceCatalog() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPillars = servicePillars.filter((pillar) => {
    // Filter by tab
    if (selectedFilter !== "all" && pillar.id !== selectedFilter) {
      return false;
    }
    // Filter by search query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase();
      const matchesTitle = pillar.title.toLowerCase().includes(q);
      const matchesDesc = pillar.description.toLowerCase().includes(q);
      const matchesCategory = pillar.category.toLowerCase().includes(q);
      const matchesSubItems = pillar.subCategories.some((sub) =>
        sub.title.toLowerCase().includes(q) ||
        sub.items.some((item) => item.toLowerCase().includes(q))
      );
      return matchesTitle || matchesDesc || matchesCategory || matchesSubItems;
    }
    return true;
  });

  return (
    <section className="py-12 md:py-20 px-margin-mobile md:px-margin-desktop relative" id="all-services">
      {/* Header Banner */}
      <div className="bg-surface-container-lowest border-4 border-ink p-6 md:p-12 brutalist-shadow mb-12 md:mb-16">
        <div className="max-w-4xl">
          <span className="bg-tangerine border-2 border-ink px-3 py-1 text-label-mono font-label-mono uppercase font-bold text-[12px] md:text-[14px] inline-block mb-4 brutalist-shadow">
            ALL-IN-ONE DIGITAL SERVICES CATALOG
          </span>
          <h2 className="text-[36px] sm:text-[50px] md:text-[70px] leading-[0.95] font-black uppercase text-ink mb-6">
            EVERY SERVICE. <br />
            <span className="text-tangerine">ONE ACCOUNTABLE TEAM.</span>
          </h2>
          <p className="text-[16px] md:text-[22px] font-bold text-ink leading-relaxed">
            Everything your business needs to attract customers, optimize conversions, and scale online. Filter by domain or search for any capability below.
          </p>
        </div>

        {/* Search & Filter Controls */}
        <div className="mt-8 pt-8 border-t-4 border-ink flex flex-col md:flex-row gap-4 items-stretch justify-between">
          {/* Search Box */}
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              placeholder="Search service (e.g. GA4, SEO, Reels, Google Ads)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-paper border-4 border-ink px-4 py-3 text-[14px] md:text-[16px] font-bold text-ink placeholder:text-ink/50 focus:outline-none focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 font-black text-ink hover:text-tangerine"
              >
                ✕
              </button>
            )}
          </div>

          {/* Quick Stats Pill */}
          <div className="bg-ink text-surface-container-lowest px-6 py-3 border-4 border-ink font-mono text-[14px] md:text-[16px] font-bold flex items-center justify-center whitespace-nowrap brutalist-shadow">
            SHOWING {filteredPillars.length} OF {servicePillars.length} SERVICE PILLARS
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 md:gap-3 mt-6">
          <button
            onClick={() => { setSelectedFilter("all"); setSearchQuery(""); }}
            className={`px-4 py-2 text-[13px] md:text-[15px] font-black uppercase border-2 md:border-4 border-ink transition-all brutalist-shadow ${
              selectedFilter === "all"
                ? "bg-tangerine text-ink -translate-y-1"
                : "bg-paper text-ink hover:bg-tangerine/30"
            }`}
          >
            ALL SERVICES ({servicePillars.length})
          </button>
          {servicePillars.map((p) => (
            <button
              key={p.id}
              onClick={() => { setSelectedFilter(p.id); setSearchQuery(""); }}
              className={`px-4 py-2 text-[13px] md:text-[15px] font-black uppercase border-2 md:border-4 border-ink transition-all brutalist-shadow ${
                selectedFilter === p.id
                  ? "bg-tangerine text-ink -translate-y-1"
                  : "bg-paper text-ink hover:bg-tangerine/30"
              }`}
            >
              {p.num}. {p.category}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid / List */}
      <div className="space-y-12 md:space-y-16">
        {filteredPillars.length === 0 ? (
          <div className="bg-surface-container-lowest border-4 border-ink p-12 text-center brutalist-shadow">
            <h3 className="text-[24px] font-black uppercase mb-4">No matching services found</h3>
            <p className="text-[16px] font-bold opacity-80 mb-6">Try clearing your search query or filter tab.</p>
            <button
              onClick={() => { setSelectedFilter("all"); setSearchQuery(""); }}
              className="bg-tangerine border-4 border-ink px-6 py-3 font-black uppercase brutalist-shadow"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          filteredPillars.map((pillar) => {
            const isDark = pillar.bgVariant === "ink";
            const isTangerine = pillar.bgVariant === "tangerine";

            let cardBgClass = "bg-surface-container-lowest text-ink";
            if (isTangerine) cardBgClass = "bg-tangerine text-ink";
            if (isDark) cardBgClass = "bg-ink text-surface-container-lowest";

            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className={`border-4 border-ink brutalist-shadow overflow-hidden ${cardBgClass} transition-all duration-300`}
              >
                {/* Pillar Header */}
                <div className={`p-6 md:p-10 border-b-4 border-ink ${isDark ? "border-surface-container-lowest/30" : ""}`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                    <span className={`text-label-mono font-label-mono font-bold uppercase tracking-widest px-3 py-1 border-2 border-current inline-block w-fit text-[12px] md:text-[14px] ${
                      isDark ? "text-tangerine border-tangerine" : "text-ink"
                    }`}>
                      PILLAR {pillar.num} &mdash; {pillar.category}
                    </span>

                    {pillar.platforms && (
                      <div className="flex flex-wrap gap-2">
                        {pillar.platforms.map((plat, idx) => (
                          <span
                            key={idx}
                            className={`text-[11px] md:text-[13px] font-bold px-2 py-0.5 border border-current ${
                              isDark ? "bg-surface-container-lowest/10" : "bg-paper"
                            }`}
                          >
                            {plat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <h3 className="text-[32px] sm:text-[44px] md:text-[56px] leading-[0.95] font-black uppercase mb-4">
                    {pillar.title}
                  </h3>

                  <p className={`text-[16px] md:text-[20px] font-bold leading-relaxed max-w-4xl ${
                    isDark ? "text-tangerine" : "text-ink/90"
                  }`}>
                    {pillar.tagline}
                  </p>

                  <p className="mt-4 text-[14px] md:text-[16px] font-medium leading-relaxed max-w-4xl opacity-90">
                    {pillar.description}
                  </p>
                </div>

                {/* Sub-categories Grid */}
                <div className="p-6 md:p-10 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                  {pillar.subCategories.map((sub, sIdx) => (
                    <div key={sIdx} className="space-y-4">
                      <h4 className={`text-[20px] md:text-[24px] font-black uppercase pb-2 border-b-4 ${
                        isDark ? "border-tangerine text-tangerine" : "border-ink text-ink"
                      }`}>
                        {sub.title}
                      </h4>
                      <ul className="space-y-3">
                        {sub.items.map((item, iIdx) => (
                          <li key={iIdx} className="flex items-start gap-3 text-[14px] md:text-[16px] font-medium leading-normal">
                            <span className={`min-w-3 h-3 rounded-full mt-1.5 inline-block ${
                              isDark ? "bg-tangerine" : isTangerine ? "bg-ink" : "bg-tangerine"
                            }`}></span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Footer / Key Metrics Bar */}
                {pillar.keyMetrics && (
                  <div className={`p-6 md:px-10 py-6 border-t-4 border-ink flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                    isDark ? "bg-surface-container-lowest/5 border-surface-container-lowest/30" : "bg-paper/50"
                  }`}>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-black text-[13px] md:text-[15px] uppercase tracking-wide mr-2">KEY OUTCOMES & METRICS:</span>
                      {pillar.keyMetrics.map((metric, mIdx) => (
                        <span
                          key={mIdx}
                          className={`text-[12px] md:text-[14px] font-bold px-3 py-1 border-2 border-ink brutalist-shadow ${
                            isDark ? "bg-tangerine text-ink" : "bg-surface-container-lowest text-ink"
                          }`}
                        >
                          ✓ {metric}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </section>
  );
}
