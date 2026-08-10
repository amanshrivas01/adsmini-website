import { type Metadata } from "next";
import Image from "next/image";
import { CallToAction } from "~/components/ui/CallToAction";
import { PageHero } from "~/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Digital Marketing Services | SEO, PPC, Social Media & Performance | Ads Mini",
  description:
    "We design and execute performance-focused digital marketing strategies that generate real business outcomes: more traffic, better qualified leads, and stronger revenue.",
};

const seoStack = [
  { title: "Technical SEO", desc: "Site architecture, Core Web Vitals, crawlability, indexing" },
  { title: "On-Page SEO", desc: "Content structure, metadata, schema markup, internal linking" },
  { title: "Off-Page SEO", desc: "Authority building through high-quality backlink acquisition" },
  { title: "Local SEO (LSO)", desc: "Google Business Profile, local citations, map rankings" },
  { title: "International SEO", desc: "Hreflang, geo-targeting, multi-region strategy" },
  { title: "AEO", desc: "Answer Engine Optimisation for featured snippets and People Also Ask" },
  { title: "GEO", desc: "Generative Engine Optimisation for AI-driven search results" },
  { title: "E-Commerce SEO", desc: "Product page optimisation, category SEO, feed management" },
  { title: "Programmatic SEO", desc: "Scalable page creation for high-volume keyword targeting" },
  { title: "Semantic SEO & Entity SEO", desc: "Topic authority, knowledge graph signals" },
  { title: "Mobile SEO", desc: "Mobile-first indexing and performance optimisation" },
  { title: "Image SEO", desc: "Alt text, structured data, Google Lens visibility" },
  { title: "Video Engine Optimisation (VEO)", desc: "YouTube and video search rankings" },
  { title: "YouTube SEO", desc: "Titles, descriptions, chapters, thumbnails, engagement signals" },
  { title: "ASO", desc: "App Store Optimisation for mobile application visibility" },
  { title: "VSO", desc: "Voice Search Optimisation for smart devices and assistants" },
  { title: "SXO", desc: "Search Experience Optimisation, combining SEO with UX" },
  { title: "Zero-Click SEO", desc: "Optimising for visibility without requiring a click" },
  { title: "Schema Optimisation", desc: "Rich results, FAQ schema, product schema" },
  { title: "Knowledge Graph Optimisation", desc: "Brand entity building on Google" },
  { title: "AI Search Optimisation", desc: "Positioning for Perplexity, ChatGPT and Gemini results" },
  { title: "Social & Forum Marketing", desc: "LinkedIn Optimisation, Reddit Marketing, Quora Marketing, Pinterest SEO" },
];

const howWeWorkSteps = [
  { step: "01", title: "Discovery", desc: "A full audit of your current digital presence, competitive landscape and business objectives. No assumptions." },
  { step: "02", title: "Strategy", desc: "Based on the findings, we build a customised multi-channel strategy with defined KPIs and realistic timelines." },
  { step: "03", title: "Execution", desc: "Our specialists execute with attention to detail and consistency. Every campaign goes through a structured approval process before it goes live." },
  { step: "04", title: "Optimisation", desc: "We monitor performance continuously, running tests and making data-driven adjustments to improve results month over month." },
  { step: "05", title: "Reporting", desc: "You get clear, jargon-free reports every month showing exactly what was done, what worked, and what's planned next." },
];

export default function DigitalMarketingPage() {
  return (
    <div className="bg-paper text-ink font-body-md selection:bg-tangerine selection:text-ink min-h-screen">
      <main className="relative w-full">
        {/* Page Hero */}
        <PageHero
          label="PAGE 3 — DIGITAL MARKETING SERVICES"
          title={
            <>
              Digital Marketing <br />
              <span className="text-tangerine">That Moves the Needle</span>
            </>
          }
        >
          <p className="text-base md:text-xl font-medium text-ink leading-relaxed max-w-4xl">
            We design and execute performance-focused digital marketing strategies that generate real business outcomes: more traffic, better qualified leads, and stronger revenue. No fluff, just measurable growth.
          </p>
        </PageHero>

        {/* 1. Search & Visibility Services */}
        <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-24 bg-surface-container-lowest border-b-4 border-ink">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 md:mb-14">
              <span className="font-label-mono text-xs md:text-sm text-tangerine font-bold tracking-widest uppercase block mb-2">
                ORGANIC &amp; SEARCH DISCOVERY
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-ink leading-none">
                Search &amp; Visibility Services
              </h2>
            </div>

            {/* SEO Main Card */}
            <div className="bg-paper border-4 border-ink p-6 md:p-10 brutalist-shadow mb-10 md:mb-14 relative">
              {/* Doodle 1: LOUDER! Megaphone Monster */}
              <div className="hidden lg:block absolute -top-16 -right-6 z-20 w-36 h-36 pointer-events-none float-animation">
                <Image
                  src="/doodle1.png"
                  alt="Louder Megaphone Doodle"
                  width={160}
                  height={160}
                  className="object-contain drop-shadow-[3px_3px_0_#000]"
                />
              </div>
              <div className="border-b-4 border-ink pb-6 mb-6">
                <span className="font-label-mono text-xs font-bold px-3 py-1 bg-tangerine text-ink border-2 border-ink uppercase inline-block mb-3">
                  CORE ORGANIC PILLAR
                </span>
                <h3 className="text-2xl md:text-3xl font-black uppercase text-ink">
                  SEO — Search Engine Optimisation
                </h3>
              </div>
              
              <p className="text-base md:text-lg font-medium leading-relaxed mb-8 text-ink/90">
                SEO isn&apos;t a one-time fix, it&apos;s an ongoing investment in your brand&apos;s long-term discoverability. We build strategies grounded in technical depth, audience research and consistent execution. In 2026, SEO covers a lot more ground than keywords, so we cover the full spectrum of modern search visibility.
              </p>

              {/* Accordion Dropdown for SEO Stack */}
              <details className="group border-4 border-ink brutalist-shadow bg-surface-container-lowest overflow-hidden">
                <summary className="w-full bg-paper text-ink p-5 font-black text-lg md:text-xl uppercase flex items-center justify-between cursor-pointer select-none border-b-4 border-ink hover:bg-tangerine transition-colors list-none [&::-webkit-details-marker]:hidden">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="bg-tangerine text-ink font-label-mono text-xs px-2.5 py-1 border-2 border-ink font-bold">
                      01 / STACK
                    </span>
                    <span>OUR COMPLETE SEO STACK ({seoStack.length} SPECIALTIES)</span>
                  </div>
                  <span className="font-mono text-lg font-black transition-transform duration-300 group-open:rotate-180 ml-2">
                    ▼
                  </span>
                </summary>

                <div className="p-4 md:p-6 bg-paper">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center font-label-mono text-xs font-bold text-ink/80 mb-4 uppercase tracking-wider border-b-2 border-ink/20 pb-3 gap-1">
                    <span>Hover rows to highlight</span>
                    <span className="text-tangerine font-bold">Scroll to explore all 22 specialties ↓</span>
                  </div>
                  
                  <div className="border-t-4 border-ink max-h-[460px] overflow-y-auto scroll-smooth pr-1">
                    {seoStack.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col md:flex-row md:items-center justify-between border-b-2 border-ink py-3.5 px-3 md:px-6 hover:bg-tangerine/10 transition-colors w-full group/item cursor-default"
                      >
                        <div className="md:w-1/3 flex items-center gap-3 mb-1 md:mb-0">
                          <span className="font-label-mono text-tangerine text-xs md:text-sm font-bold w-8 shrink-0">
                            {(idx + 1).toString().padStart(2, "0")}
                          </span>
                          <h4 className="font-black text-base uppercase text-ink">
                            {item.title}
                          </h4>
                        </div>
                        <div className="md:w-2/3">
                          <p className="text-sm md:text-base font-medium text-ink/90 md:pl-4 leading-normal">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </details>
            </div>

            {/* CRO Card */}
            <div className="bg-tangerine text-ink border-4 border-ink p-6 md:p-10 brutalist-shadow">
              <span className="font-label-mono text-xs font-bold px-3 py-1 bg-surface-container-lowest text-ink border-2 border-ink uppercase inline-block mb-3">
                CONVERSION OPTIMISATION
              </span>
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-3">
                CRO — Conversion Rate Optimisation
              </h3>
              <p className="text-base md:text-lg font-medium leading-relaxed">
                Traffic without conversion is wasted. We audit landing pages, user flows and checkout processes to find drop-off points and systematically improve conversion rates through structured testing and iteration.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Paid Media Services */}
        <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-24 bg-ink text-paper border-b-4 border-ink relative overflow-hidden">
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="mb-10 md:mb-14">
              <span className="font-label-mono text-xs md:text-sm font-bold text-tangerine tracking-widest uppercase block mb-2">
                PAID ACQUISITION &amp; ADVERTISING
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-paper leading-none">
                Paid Media Services
              </h2>
            </div>

            {/* SEM / PPC */}
            <div className="bg-paper text-ink border-4 border-tangerine p-6 md:p-10 brutalist-shadow mb-10 md:mb-14">
              <span className="font-label-mono text-xs font-bold px-3 py-1 bg-tangerine text-ink border-2 border-ink uppercase inline-block mb-3">
                SEARCH ENGINE MARKETING
              </span>
              <h3 className="text-2xl md:text-3xl font-black uppercase text-ink mb-4">
                SEM / PPC — Google Ads &amp; Search Engine Marketing
              </h3>
              <p className="text-base md:text-lg font-medium leading-relaxed mb-8 text-ink/90">
                When you need immediate visibility, paid search delivers, but only when it&apos;s managed with real discipline. Our PPC specialists build and manage campaigns that get the most out of every rupee of ad spend by targeting the right keywords, the right audiences, and the right moments.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t-4 border-ink">
                <div>
                  <h4 className="text-base md:text-lg font-black uppercase text-tangerine mb-4">What we manage:</h4>
                  <ul className="space-y-2.5 font-bold text-sm md:text-base">
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0 text-tangerine">✔</span>
                      <span>Google Search, Display, Shopping, YouTube and Performance Max campaigns</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0 text-tangerine">✔</span>
                      <span>Audience segmentation and keyword bidding strategy</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0 text-tangerine">✔</span>
                      <span>Ad copy and landing page A/B testing</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0 text-tangerine">✔</span>
                      <span>Conversion tracking setup, attribution modelling and ROAS reporting</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0 text-tangerine">✔</span>
                      <span>Ongoing bid management and budget optimisation</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0 text-tangerine">✔</span>
                      <span>Microsoft Bing Ads management</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-base md:text-lg font-black uppercase text-tangerine mb-4">Key metrics we optimise:</h4>
                  <ul className="space-y-2.5 font-bold text-sm md:text-base">
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0 text-tangerine">⚡</span>
                      <span>CPC (Cost Per Click), CPL (Cost Per Lead), CPA (Cost Per Acquisition)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0 text-tangerine">⚡</span>
                      <span>CTR (Click-Through Rate), ROAS (Return on Ad Spend), ROI (Return on Investment)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0 text-tangerine">⚡</span>
                      <span>CPM (Cost Per Mille) for awareness campaigns</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Media Marketing (SMM & SMO) */}
            <div className="bg-surface-container-lowest text-ink border-4 border-paper p-6 md:p-10 brutalist-shadow mb-10 md:mb-14">
              <span className="font-label-mono text-xs font-bold px-3 py-1 bg-tangerine text-ink border-2 border-ink uppercase inline-block mb-3">
                SOCIAL ENGAGEMENT &amp; ACQUISITION
              </span>
              <h3 className="text-2xl md:text-3xl font-black uppercase text-ink mb-4">
                Social Media Marketing (SMM &amp; SMO)
              </h3>
              <p className="text-base md:text-lg font-medium leading-relaxed mb-8 text-ink/90">
                Social media is where your audience actually lives. Showing up isn&apos;t enough, you need to show up with purpose. We create and manage social strategies that build real communities, elevate brand authority, and convert engagement into paying customers.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t-4 border-ink">
                <div>
                  <h4 className="text-base md:text-lg font-black uppercase text-ink mb-4">Platforms we manage:</h4>
                  <ul className="space-y-2 font-medium text-sm md:text-base">
                    <li><strong className="font-black uppercase text-tangerine">LinkedIn:</strong> B2B lead generation, thought leadership, company page management</li>
                    <li><strong className="font-black uppercase text-tangerine">Instagram:</strong> Reels strategy, content calendar, paid campaigns</li>
                    <li><strong className="font-black uppercase text-tangerine">Facebook:</strong> Community building, lead ads, retargeting, WhatsApp integration</li>
                    <li><strong className="font-black uppercase text-tangerine">YouTube:</strong> Channel management, SEO, paid video campaigns</li>
                    <li><strong className="font-black uppercase text-tangerine">Snapchat:</strong> Snap Ads, Story Ads, AR Lens campaigns</li>
                    <li><strong className="font-black uppercase text-tangerine">Reddit Marketing:</strong> Community engagement and targeted advertising</li>
                    <li><strong className="font-black uppercase text-tangerine">Pinterest SEO:</strong> Visual search and e-commerce integration</li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-base md:text-lg font-black uppercase text-ink mb-4">Our services include:</h4>
                  <ul className="space-y-2.5 font-bold text-sm md:text-base">
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0">✓</span>
                      <span>Monthly content calendars with professionally written and designed posts</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0">✓</span>
                      <span>Community management — comments, messages, brand monitoring</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0">✓</span>
                      <span>Influencer marketing and brand partnership coordination</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0">✓</span>
                      <span>Paid social advertising — audience targeting, retargeting, lookalike campaigns</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0">✓</span>
                      <span>Organic video — Reels, Shorts and platform-native video strategy</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Performance Marketing */}
            <div className="bg-tangerine text-ink border-4 border-paper p-6 md:p-10 brutalist-shadow">
              <span className="font-label-mono text-xs font-bold px-3 py-1 bg-surface-container-lowest text-ink border-2 border-ink uppercase inline-block mb-3">
                REVENUE-DRIVEN CAMPAIGNS
              </span>
              <h3 className="text-2xl md:text-3xl font-black uppercase mb-4">
                Performance Marketing
              </h3>
              <p className="text-base md:text-lg font-medium leading-relaxed mb-6">
                Performance marketing means paying for what actually works. We run structured campaigns across Google, Meta and other platforms with clear attribution, so you always know exactly which channels are generating revenue, leads and conversions.
              </p>
              
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3.5 font-bold text-sm md:text-base pt-5 border-t-2 border-ink">
                <li className="flex items-start gap-2.5">
                  <span className="shrink-0">🔹</span>
                  <span>Campaign architecture across search, social and display</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="shrink-0">🔹</span>
                  <span>WhatsApp marketing and conversational campaign management</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="shrink-0">🔹</span>
                  <span>Native advertising and programmatic display</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="shrink-0">🔹</span>
                  <span>Full-funnel performance tracking with GA4, Meta CAPI, and server-side tracking</span>
                </li>
                <li className="flex items-start gap-2.5 md:col-span-2">
                  <span className="shrink-0">🔹</span>
                  <span>Shopify store tracking — browser-side and server-side GTM setup</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Content & Brand Services */}
        <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-24 bg-paper border-b-4 border-ink bg-grid-pattern">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 md:mb-14">
              <span className="font-label-mono text-xs md:text-sm font-bold text-tangerine tracking-widest uppercase block mb-2">
                AUTHORITY &amp; BRAND BUILDING
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-ink leading-none">
                Content &amp; Brand Services
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Content Marketing */}
              <div className="bg-surface-container-lowest border-4 border-ink p-6 md:p-10 brutalist-shadow flex flex-col justify-between">
                <div>
                  <span className="font-label-mono text-xs font-bold px-3 py-1 bg-tangerine text-ink border-2 border-ink uppercase inline-block mb-4">
                    ORGANIC GROWTH ENGINE
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-ink mb-4">
                    Content Marketing
                  </h3>
                  <p className="text-base md:text-lg font-medium leading-relaxed mb-6 text-ink/90">
                    Content marketing is the most sustainable form of digital growth there is. A well-executed content strategy attracts the right audience, builds credibility, and fuels every other channel, SEO, social, email, paid. We create content that&apos;s researched, clearly written, and built around your buyer&apos;s actual journey.
                  </p>
                  <ul className="space-y-2.5 font-bold text-sm md:text-base pt-4 border-t-4 border-ink">
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0">✍️</span>
                      <span>Blog writing, long-form guides and thought leadership articles</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0">✍️</span>
                      <span>Website copywriting and landing page content</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0">✍️</span>
                      <span>Case studies, whitepapers and lead magnet creation</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0">✍️</span>
                      <span>Email marketing content and newsletter campaigns</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="shrink-0">✍️</span>
                      <span>Video scripts and social media copy</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Personal Branding */}
              <div className="bg-tangerine text-ink border-4 border-ink p-6 md:p-10 brutalist-shadow flex flex-col justify-between">
                <div>
                  <span className="font-label-mono text-xs font-bold px-3 py-1 bg-surface-container-lowest text-ink border-2 border-ink uppercase inline-block mb-4">
                    EXECUTIVE POSITIONING
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase mb-4">
                    Personal Branding
                  </h3>
                  <p className="text-base md:text-lg font-medium leading-relaxed mb-6">
                    Your brand isn&apos;t just your company, it&apos;s the people behind it. We help founders, executives and professionals build a consistent, credible online presence that opens doors and builds trust before the first conversation even happens.
                  </p>
                </div>
                <div className="bg-surface-container-lowest border-4 border-ink p-5 brutalist-shadow mt-6">
                  <p className="font-black text-sm md:text-base uppercase text-ink">
                    Build authority, inspire trust, and establish founder-led growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. AI & Modern Marketing */}
        <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-24 bg-surface-container-lowest border-b-4 border-ink">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 md:mb-14">
              <span className="font-label-mono text-xs md:text-sm font-bold text-tangerine tracking-widest uppercase block mb-2">
                NEXT-GEN MARKETING
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase text-ink mb-4 leading-none">
                AI &amp; Modern Marketing
              </h2>
              <p className="text-base md:text-lg font-medium leading-relaxed text-ink/90 max-w-4xl">
                The way people search and buy is changing fast. We help businesses stay ahead with strategies built for how the current landscape actually works:
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "AI Content Optimisation", desc: "Structuring content for AI-generated search results (Perplexity, ChatGPT, Gemini)." },
                { title: "Prompt Engineering", desc: "Brand-aligned AI content workflows for efficiency and tone consistency." },
                { title: "Omnichannel Marketing", desc: "A unified brand experience seamless across every digital touchpoint." },
                { title: "PLG & Community Growth", desc: "Community-Led Growth and Product-Led Growth (PLG) strategies." },
                { title: "Growth Marketing", desc: "Rapid experimentation and hypothesis-driven iteration across channels." },
                { title: "Affiliate & Influencer", desc: "Scalable affiliate marketing and influencer partnership programme management." },
              ].map((item, index) => (
                <div key={index} className="bg-paper border-4 border-ink p-6 brutalist-shadow hover:bg-tangerine/10 transition-colors">
                  <h3 className="font-black text-base md:text-lg uppercase text-ink mb-2">
                    🤖 {item.title}
                  </h3>
                  <p className="text-sm font-medium text-ink/90 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Data, Tech & Product Infrastructure */}
        <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-24 bg-paper border-b-4 border-ink bg-grid-pattern">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Analytics & Tracking */}
              <div className="bg-ink text-paper border-4 border-ink p-6 md:p-10 brutalist-shadow flex flex-col justify-between">
                <div>
                  <span className="font-label-mono text-xs font-bold px-3 py-1 bg-tangerine text-ink border-2 border-ink uppercase inline-block mb-4">
                    DATA &amp; ATTRIBUTION
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-tangerine mb-6">
                    Analytics &amp; Tracking
                  </h3>
                  <ul className="space-y-4 font-medium text-sm md:text-base">
                    <li className="border-b border-paper/20 pb-3">
                      <strong className="text-tangerine block uppercase font-black mb-1">Google Analytics 4 (GA4)</strong>
                      Full implementation and reporting.
                    </li>
                    <li className="border-b border-paper/20 pb-3">
                      <strong className="text-tangerine block uppercase font-black mb-1">Meta Conversions API (CAPI)</strong>
                      Server-side event tracking for accurate attribution.
                    </li>
                    <li className="border-b border-paper/20 pb-3">
                      <strong className="text-tangerine block uppercase font-black mb-1">Google Tag Manager (GTM)</strong>
                      Browser-side and server-side container setup.
                    </li>
                    <li className="border-b border-paper/20 pb-3">
                      <strong className="text-tangerine block uppercase font-black mb-1">Heatmap Analysis</strong>
                      User behaviour recording and click-map analysis.
                    </li>
                    <li className="border-b border-paper/20 pb-3">
                      <strong className="text-tangerine block uppercase font-black mb-1">Funnel Optimisation</strong>
                      Drop-off identification and conversion improvement.
                    </li>
                    <li>
                      <strong className="text-tangerine block uppercase font-black mb-1">Web Analytics &amp; Data Dashboards</strong>
                      Custom executive reporting dashboards.
                    </li>
                  </ul>
                </div>
              </div>

              {/* Web & Technology */}
              <div className="bg-surface-container-lowest text-ink border-4 border-ink p-6 md:p-10 brutalist-shadow flex flex-col justify-between">
                <div>
                  <span className="font-label-mono text-xs font-bold px-3 py-1 bg-tangerine text-ink border-2 border-ink uppercase inline-block mb-4">
                    DIGITAL PRODUCTS &amp; TECH
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black uppercase text-ink mb-6">
                    Web &amp; Technology
                  </h3>
                  <ul className="space-y-4 font-medium text-sm md:text-base">
                    <li className="border-b border-ink/20 pb-3">
                      <strong className="text-ink block uppercase font-black mb-1">UI/UX Design</strong>
                      User interface and experience design for websites and apps.
                    </li>
                    <li className="border-b border-ink/20 pb-3">
                      <strong className="text-ink block uppercase font-black mb-1">Web Development</strong>
                      Frontend, backend and full-stack development.
                    </li>
                    <li className="border-b border-ink/20 pb-3">
                      <strong className="text-ink block uppercase font-black mb-1">Shopify &amp; E-Commerce</strong>
                      Store setup and optimisation.
                    </li>
                    <li className="border-b border-ink/20 pb-3">
                      <strong className="text-ink block uppercase font-black mb-1">Landing Page Development</strong>
                      High-converting landing pages for paid campaigns.
                    </li>
                    <li>
                      <strong className="text-ink block uppercase font-black mb-1">SaaS Product Integration</strong>
                      Technical setup and product integration.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 6. How We Work */}
        <section className="px-margin-mobile md:px-margin-desktop py-16 md:py-24 bg-tangerine text-ink border-b-4 border-ink">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10 md:mb-14 text-center">
              <span className="font-label-mono text-xs md:text-sm font-bold text-ink uppercase tracking-widest block mb-2">
                STRUCTURED EXECUTION
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase leading-none">
                How We Work
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {howWeWorkSteps.map((item, index) => (
                <div key={index} className="bg-paper border-4 border-ink p-6 brutalist-shadow flex flex-col justify-between">
                  <div>
                    <span className="font-label-mono text-xs font-bold px-2.5 py-1 bg-tangerine border-2 border-ink inline-block mb-4">
                      {item.step}
                    </span>
                    <h3 className="text-lg md:text-xl font-black uppercase text-ink mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm font-medium text-ink/90 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Call To Action */}
        <CallToAction
          title="Let's Build a Digital Strategy That Works for Your Business"
          description="Ready to replace fluff with measurable revenue growth? Request a free audit today."
          buttonText="Request a Free Audit"
          buttonHref="/contact"
        />
      </main>
    </div>
  );
}
