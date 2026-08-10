import Image from "next/image";
import { type Metadata } from "next";
import { CallToAction } from "~/components/ui/CallToAction";
import { PageHero } from "~/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Our Work & Client Results | Ads Mini",
};

type Metric = {
  value: string;
  label: string;
  highlight?: boolean;
};

type WorkResult = {
  clientName: string;
  industry: string;
  description: string;
  metrics: Metric[];
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
};

type ClientLogoItem = {
  name: string;
  tagline?: string;
  logo?: string;
  logoWidth?: number;
  logoHeight?: number;
};

const googleAdsResults: WorkResult[] = [
  {
    clientName: "Tresmode",
    industry: "Footwear E-Commerce",
    description:
      "Performance Max campaigns across women's, men's and all-products segments. Total conversion value of ₹5.32 Crore against ₹8.27L spend.",
    logo: "/Tresmode.jpeg",
    logoWidth: 415,
    logoHeight: 739,
    metrics: [
      { value: "83.4K", label: "Clicks" },
      { value: "8.28M", label: "Purchases" },
      { value: "10.02x", label: "Value/Cost", highlight: true },
    ],
  },
  {
    clientName: "Isha Life",
    industry: "D2C Fashion",
    description:
      "Scaled from zero to 5.61M purchase events with an average CPC of just ₹2.49 across the Apr 2022 to Jul 2023 campaign period.",
    logo: "/Isha.jpeg",
    logoWidth: 335,
    logoHeight: 597,
    metrics: [
      { value: "731K", label: "Clicks" },
      { value: "5.61M", label: "Purchases" },
      { value: "₹2.49", label: "Avg. CPC", highlight: true },
    ],
  },
  {
    clientName: "Neera",
    industry: "E-Commerce / Retail",
    description:
      "Multi-country Performance Max campaigns (USA, Canada) with total conversion value exceeding ₹88L on ₹6.86L spend.",
    metrics: [
      { value: "1.54M", label: "Purchases" },
      { value: "739", label: "Conv." },
      { value: "₹928", label: "Cost/Conv.", highlight: true },
    ],
  },
  {
    clientName: "Renew Drycleaners",
    industry: "Home Services, UK",
    description:
      "High-Quality Drycleaners campaign: 48,018 clicks, 8,007 conversions, 16.75x ROAS. Total account spend £35,042 generating 13,501 conversions.",
    metrics: [
      { value: "51.7K", label: "Clicks" },
      { value: "8.11K", label: "Conv." },
      { value: "£3.36", label: "Cost/Conv.", highlight: true },
    ],
  },
  {
    clientName: "Tech Fynder",
    industry: "Tech Recruitment",
    description:
      "A long-term campaign from Q1 2021 to Q3 2024, delivering 207K conversions at an exceptionally low cost per conversion of €0.43.",
    logo: "/techfynder.jpeg",
    logoWidth: 200,
    logoHeight: 200,
    metrics: [
      { value: "1.68M", label: "Clicks" },
      { value: "207K", label: "Conv." },
      { value: "€0.43", label: "Cost/Conv.", highlight: true },
    ],
  },
  {
    clientName: "Moon Tours",
    industry: "Travel & Tourism",
    description:
      "A sustained travel campaign from Jan 2024 to Jan 2025, generating 630 conversions from 14.3K qualified clicks.",
    logo: "/moonturandtravel.jpeg",
    logoWidth: 447,
    logoHeight: 447,
    metrics: [
      { value: "14.3K", label: "Clicks" },
      { value: "630", label: "Conv." },
      { value: "$15.48", label: "Cost/Conv.", highlight: true },
    ],
  },
];

type CardVariant = "default" | "meta";

const chalboResult: WorkResult = {
  clientName: "Chalbo India Pvt Ltd",
  industry: "Mobility / EV",
  description:
    "An awareness and traffic campaign from Sept 2021 to Oct 2022, with ₹57.7K total investment delivering 40.4K impressions.",
  metrics: [
    { value: "2.68K", label: "Clicks" },
    { value: "40.4K", label: "Impressions" },
    { value: "₹21.53", label: "Avg. CPC" },
  ],
};

const metaAdsResults: WorkResult[] = [
  {
    clientName: "Sizzle",
    industry: "F&B, E-Commerce",
    description:
      "257 campaigns managed. ₹4.47L purchase conversion value generated. The best-performing campaign hit 3.04x ROAS on ₹17,095.",
    metrics: [
      { value: "₹2.59L", label: "Total Spend" },
      { value: "79", label: "Purchases" },
      { value: "1.73x", label: "Avg. ROAS", highlight: true },
    ],
  },
  {
    clientName: "The Digital Bundle",
    industry: "Digital Products",
    description:
      "AI Avatar Reels campaigns consistently delivering 2.37x–2.68x ROAS. Total purchase conversion value ₹2,43,289 across 8 campaigns.",
    metrics: [
      { value: "₹99,086", label: "Total Spend" },
      { value: "1,454", label: "Purchases" },
      { value: "2.46x", label: "Avg. ROAS", highlight: true },
    ],
  },
  {
    clientName: "Okapi",
    industry: "E-Commerce",
    description:
      "Facebook purchase campaigns across 5 ad sets. 4,65,794 total impressions, 2,41,550 accounts reached, 6.87x average ROAS.",
    metrics: [
      { value: "₹60,404", label: "Total Spend" },
      { value: "318", label: "Purchases" },
      { value: "6.87x", label: "Avg. ROAS", highlight: true },
    ],
  },
  {
    clientName: "GT Groups",
    industry: "Real Estate",
    description:
      "Lead generation plus awareness for housing. The Loan Mela campaign alone reached 9,89,339 impressions with 4,796 total link clicks.",
    metrics: [
      { value: "₹23,728", label: "Total Spend" },
      { value: "1.1M", label: "Impressions" },
      { value: "₹8.15", label: "CPC", highlight: true },
    ],
  },
  {
    clientName: "Catchy Trade",
    industry: "Trading / Finance",
    description:
      "13 campaigns, 5,95,843 total impressions. Facebook lead-gen plus messaging campaigns at ₹97.30 per messaging conversation.",
    metrics: [
      { value: "₹1,09,414", label: "Total Spend" },
      { value: "5,04,111", label: "Reached" },
      { value: "₹168", label: "Cost/Lead", highlight: true },
    ],
  },
  {
    clientName: "Stabo Life Pvt Ltd",
    industry: "Health & Wellness",
    description:
      "6 lead generation campaigns, 91,166 total impressions, 57,280 people reached, with strong CPL performance across every campaign.",
    metrics: [
      { value: "₹13,389", label: "Total Spend" },
      { value: "97", label: "Leads" },
      { value: "₹138", label: "Cost/Lead", highlight: true },
    ],
  },
];

const saRenovationResult: WorkResult = {
  clientName: "S&A Renovation",
  industry: "Home Renovation, Canada",
  description:
    "Bathroom and basement renovation campaigns, 56,493 total impressions, 26,720 people reached across 9 targeted campaigns.",
  logo: "/sr.jpeg",
  logoWidth: 447,
  logoHeight: 447,
  metrics: [
    { value: "$1,171", label: "Total Spend" },
    { value: "44", label: "FB Leads" },
    { value: "$26.71", label: "Avg. Cost/Lead" },
  ],
};

const digitalMarketingClientsWithLogos: ClientLogoItem[] = [
  { name: "dgMarket", tagline: "Global Government Procurement" },
  {
    name: "Tresmode",
    tagline: "Footwear E-Commerce",
    logo: "/Tresmode.jpeg",
    logoWidth: 415,
    logoHeight: 739,
  },
  { name: "Neera", tagline: "E-Commerce / D2C" },
  {
    name: "Isha Life",
    tagline: "D2C Clothing Brand",
    logo: "/Isha.jpeg",
    logoWidth: 335,
    logoHeight: 597,
  },
  { name: "Renew Drycleaners", tagline: "UK Home Services" },
  {
    name: "Tech Fynder",
    tagline: "Tech Recruitment",
    logo: "/techfynder.jpeg",
    logoWidth: 200,
    logoHeight: 200,
  },
  {
    name: "Moon Tours",
    tagline: "Travel & Tourism",
    logo: "/moonturandtravel.jpeg",
    logoWidth: 447,
    logoHeight: 447,
  },
  { name: "Chalbo India", tagline: "EV Mobility" },
  { name: "Sizzle", tagline: "F&B E-Commerce" },
  { name: "The Digital Bundle", tagline: "Digital Products" },
  { name: "Okapi", tagline: "E-Commerce" },
  { name: "GT Groups", tagline: "Real Estate" },
  { name: "Catchy Trade", tagline: "Finance & Trading" },
  { name: "Stabo Life", tagline: "Health & Wellness" },
  {
    name: "S&A Renovation",
    tagline: "Canada Home Renovation",
    logo: "/sr.jpeg",
    logoWidth: 447,
    logoHeight: 447,
  },
  {
    name: "TRUE Hospitals",
    tagline: "Cosmetic & Aesthetic Hospital",
    logo: "/truehospital.jpeg",
    logoWidth: 1280,
    logoHeight: 458,
  },
  {
    name: "Theindiglobal",
    tagline: "Handloom Textile Brand",
    logo: "/theindiglobal.jpeg",
    logoWidth: 1200,
    logoHeight: 628,
  },
  {
    name: "KIK 365",
    tagline: "Gaming Platform",
    logo: "/kik365.jpeg",
    logoWidth: 972,
    logoHeight: 210,
  },
  {
    name: "Show Stopper",
    tagline: "Clothing Brand",
    logo: "/showstopper.jpeg",
    logoWidth: 1185,
    logoHeight: 1327,
  },
  {
    name: "GS Textile Seoni",
    tagline: "Clothing Brand",
    logo: "/bajaj.jpeg",
    logoWidth: 250,
    logoHeight: 300,
  },
  {
    name: "Z-Force",
    tagline: "Commercial E-Rickshaw",
    logo: "/zforce.jpeg",
    logoWidth: 447,
    logoHeight: 447,
  },
  {
    name: "T Shubh Mangal Garden",
    tagline: "Event & Banquet Venue",
    logo: "/tshubhmangalgardenandresort.jpeg",
    logoWidth: 888,
    logoHeight: 888,
  },
  {
    name: "Kishan Patel Career Counselling",
    tagline: "Education Consulting",
    logo: "/bestcareercounselling.jpeg",
    logoWidth: 414,
    logoHeight: 483,
  },
  {
    name: "Tata Motors Commercial",
    tagline: "Commercial Vehicles",
    logo: "/tata.jpeg",
    logoWidth: 451,
    logoHeight: 414,
  },
];

const recruitmentClientsWithLogos: ClientLogoItem[] = [
  {
    name: "Efficacy Global",
    tagline: "Global Talent Solutions",
    logo: "/efficiencyglobal.jpeg",
    logoWidth: 447,
    logoHeight: 447,
  },
  {
    name: "Transcom",
    tagline: "Global Customer Care & Hiring",
    logo: "/transcom.jpeg",
    logoWidth: 600,
    logoHeight: 600,
  },
  {
    name: "Webkorps",
    tagline: "IT & Software Engineering",
    logo: "/webkorps.jpeg",
    logoWidth: 500,
    logoHeight: 500,
  },
  {
    name: "Tekite Solution",
    tagline: "Technology & Software",
    logo: "/tekit.jpeg",
    logoWidth: 1553,
    logoHeight: 417,
  },
  {
    name: "TRUE Hospitals",
    tagline: "Healthcare & Clinical Staffing",
    logo: "/truehospital.jpeg",
    logoWidth: 1280,
    logoHeight: 458,
  },
  { name: "Dovin", tagline: "Enterprise Technology" },
  { name: "NA Supreme", tagline: "Corporate Services" },
  { name: "Kuber Alpha", tagline: "Financial Services" },
  { name: "Skyline", tagline: "Real Estate & Infra" },
];

function WorkCard({
  data,
  variant = "default",
}: {
  data: WorkResult;
  variant?: CardVariant;
}) {
  const isMeta = variant === "meta";
  return (
    <div
      className={`${isMeta ? "bg-surface-container-lowest border-ink text-ink" : "bg-paper border-ink"} brutalist-shadow flex h-full flex-col justify-between border-4 p-4 md:p-6`}
    >
      <div>
        {/* Header with Square Logo (if available) & Industry Badge */}
        <div className="border-ink/20 mb-5 flex items-center justify-between gap-4 border-b-2 pb-4">
          {data.logo ? (
            <div className="border-ink bg-paper relative h-14 w-14 shrink-0 overflow-hidden border-2 shadow-[2px_2px_0_#000]">
              <Image
                unoptimized
                src={data.logo}
                alt={`${data.clientName} logo`}
                fill
                className="object-cover"
              />
            </div>
          ) : (
            <div />
          )}
          <span className="bg-paper border-ink border px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase opacity-80 md:text-[12px]">
            {data.industry}
          </span>
        </div>

        <h3 className="mb-3 text-[24px] leading-tight font-black uppercase md:text-[28px]">
          {data.clientName}
        </h3>
        <p className="mb-6 text-[14px] leading-[1.5] font-medium md:text-[16px]">
          {data.description}
        </p>
      </div>

      <div className="border-ink grid grid-cols-3 gap-2 border-t-2 pt-4 text-center">
        {data.metrics.map((metric, idx) => (
          <div key={idx}>
            <p className="text-[16px] font-black md:text-[20px]">
              {metric.value}
            </p>
            <p className="text-[10px] font-bold uppercase opacity-70 md:text-[11px]">
              {metric.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturedWorkCard({
  data,
}: {
  data: WorkResult;
  variant?: CardVariant;
}) {
  return (
    <div
      className={`bg-surface-container-lowest text-ink border-ink brutalist-shadow mt-8 border-4 p-6 md:p-8`}
    >
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
        <div className="space-y-3 md:w-2/3">
          <div className="flex items-center gap-3">
            {data.logo && (
              <div className="border-ink bg-paper relative h-14 w-14 shrink-0 overflow-hidden border-2 shadow-[2px_2px_0_#000]">
                <Image
                  unoptimized
                  src={data.logo}
                  alt={`${data.clientName} logo`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <span className="text-[12px] font-bold tracking-wider uppercase opacity-80 md:text-[14px]">
              {data.industry}
            </span>
          </div>

          <h3 className="text-[24px] leading-tight font-black uppercase md:text-[32px]">
            {data.clientName}
          </h3>
          <p className="text-[14px] leading-[1.5] font-medium md:text-[16px]">
            {data.description}
          </p>
        </div>

        <div className="border-ink grid w-full grid-cols-3 gap-2 border-t-2 pt-4 text-center md:w-auto md:gap-8 md:border-t-0 md:border-l-2 md:pt-0 md:pl-8">
          {data.metrics.map((metric, idx) => (
            <div key={idx}>
              <p className="text-[20px] font-black md:text-[24px]">
                {metric.value}
              </p>
              <p className="text-[10px] font-bold uppercase opacity-80 md:text-[12px]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WorkPage() {
  return (
    <div className="bg-paper text-ink selection:bg-tangerine selection:text-ink min-h-screen overflow-x-hidden">
      <main className="relative w-full">
        {/* Hero Section */}
        <PageHero
          label="04 / WORK & CASE STUDIES"
          title={
            <>
              Work We&apos;re <br />
              <span className="text-tangerine italic">Proud Of</span>
            </>
          }
        >
          Every result here was earned through real strategy, consistent
          execution and honest client partnerships. Numbers don&apos;t lie  
          here is what we have actually achieved together.
        </PageHero>

        {/* Google Ads Section */}
        <section className="px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-ink relative border-b-4 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <p className="font-label-mono text-label-mono text-tangerine mb-2 font-bold tracking-widest uppercase">
                [ PERFORMANCE MARKETING ]
              </p>
              <h2 className="text-ink text-[36px] leading-[1] font-black uppercase md:text-[56px]">
                Google Ads <br />{" "}
                <span className="text-tangerine">Client Results</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {googleAdsResults.map((result, index) => (
                <WorkCard key={index} data={result} />
              ))}
            </div>

            {/* Full width feature Card for Chalbo */}
            <FeaturedWorkCard data={chalboResult} />
          </div>
        </section>

        {/* Facebook & Meta Ads Section */}
        <section className="px-margin-mobile md:px-margin-desktop bg-ink text-paper border-ink relative border-b-4 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12">
              <p className="font-label-mono text-label-mono text-tangerine mb-2 font-bold tracking-widest uppercase">
                [ SOCIAL VELOCITY ]
              </p>
              <h2 className="text-[36px] leading-[1] font-black uppercase md:text-[56px]">
                Facebook &amp; Meta <br />{" "}
                <span className="text-tangerine">Client Results</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {metaAdsResults.map((result, index) => (
                <WorkCard key={index} data={result} variant="meta" />
              ))}
            </div>

            {/* S&A Renovation Extra Box */}
            <FeaturedWorkCard data={saRenovationResult} variant="meta" />
          </div>
        </section>

        {/* Messaging & Analytics Section */}
        <section className="px-margin-mobile md:px-margin-desktop bg-paper border-ink grid-bg relative border-b-4 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
              {/* WhatsApp Stats */}
              <div>
                <div className="mb-8">
                  <p className="font-label-mono text-label-mono text-tangerine mb-2 font-bold tracking-widest uppercase">
                    [ DIRECT ENGAGEMENT ]
                  </p>
                  <h2 className="text-[32px] leading-[1] font-black uppercase md:text-[48px]">
                    WhatsApp &amp; <br /> Messaging
                  </h2>
                </div>
                <p className="mb-8 text-[16px] leading-[1.5] font-medium md:text-[18px]">
                  Multiple WhatsApp campaign accounts managed simultaneously.
                  Lowest recorded cost per conversation: ₹6.26. Highest volume
                  month: 547 conversations at ₹12.48 each.
                </p>
                <ul className="space-y-4 text-[16px] font-bold md:text-[18px]">
                  <li className="border-ink flex justify-between border-b-2 pb-2">
                    <span>Total Conversations</span>{" "}
                    <span className="text-tangerine">1,139+</span>
                  </li>
                  <li className="border-ink flex justify-between border-b-2 pb-2">
                    <span>Cost Per Conversation (Avg.)</span>{" "}
                    <span className="text-tangerine">₹25.16</span>
                  </li>
                  <li className="border-ink flex justify-between border-b-2 pb-2">
                    <span>Total Managed Spend</span>{" "}
                    <span className="text-tangerine">₹28,654</span>
                  </li>
                  <li className="border-ink flex justify-between border-b-2 pb-2">
                    <span>Growth vs Previous Period</span>{" "}
                    <span className="text-tangerine">550.9%</span>
                  </li>
                </ul>
              </div>

              {/* GA4 Stats */}
              <div>
                <div className="mb-8">
                  <p className="font-label-mono text-label-mono text-tangerine mb-2 font-bold tracking-widest uppercase">
                    [ DATA &amp; INSIGHTS ]
                  </p>
                  <h2 className="text-[32px] leading-[1] font-black uppercase md:text-[48px]">
                    GA4 Website <br /> Performance
                  </h2>
                </div>
                <div className="bg-surface-container-lowest border-ink brutalist-shadow border-4 p-6 md:p-8">
                  <h3 className="text-tangerine mb-4 text-[20px] font-black uppercase md:text-[24px]">
                    dgMarket
                  </h3>
                  <p className="mb-8 text-[14px] leading-[1.5] font-medium md:text-[16px]">
                    Monthly traffic growth across Jan&ndash;May 2026. Direct
                    traffic dominates, with Organic Search growing from 12.77%
                    (Feb) to strong engagement levels by April&ndash;May.
                    Organic Social drove 36.84%&ndash;65.45% of key events
                    across the tracked months.
                  </p>
                  <div className="grid grid-cols-2 gap-2 md:gap-4">
                    <div className="bg-paper border-ink border-2 p-3 text-center md:p-4">
                      <p className="text-[20px] font-black md:text-[28px]">
                        2.1M
                      </p>
                      <p className="text-ink/70 text-[10px] font-bold uppercase md:text-[12px]">
                        Active Users (YTD)
                      </p>
                    </div>
                    <div className="bg-paper border-ink border-2 p-3 text-center md:p-4">
                      <p className="text-[20px] font-black md:text-[28px]">
                        6.7M
                      </p>
                      <p className="text-ink/70 text-[10px] font-bold uppercase md:text-[12px]">
                        Events (YTD)
                      </p>
                    </div>
                    <div className="bg-paper border-ink border-2 p-3 text-center md:p-4">
                      <p className="text-tangerine text-[20px] font-black md:text-[28px]">
                        +2,124%
                      </p>
                      <p className="text-ink/70 text-[10px] font-bold uppercase md:text-[12px]">
                        User Growth YoY
                      </p>
                    </div>
                    <div className="bg-paper border-ink border-2 p-3 text-center md:p-4">
                      <p className="text-[20px] font-black md:text-[28px]">
                        268
                      </p>
                      <p className="text-ink/70 text-[10px] font-bold uppercase md:text-[12px]">
                        Key Events
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Combined Infinite Marquee Client Logo Showcase */}
        {(() => {
          const combinedLogos = Array.from(
            new Map(
              [...digitalMarketingClientsWithLogos, ...recruitmentClientsWithLogos]
                .filter((client) => Boolean(client.logo))
                .map((client) => [client.logo, client])
            ).values()
          );

          return (
            <section className="py-20 md:py-28 bg-surface-container-lowest border-b-4 border-ink relative overflow-hidden">
              <div className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop mb-12 text-center">
                <span className="font-label-mono text-tangerine mb-3 block text-xs sm:text-sm font-bold tracking-widest uppercase">
                  TRUSTED PARTNERSHIPS
                </span>
                <h2 className="text-ink text-[clamp(32px,5.5vw,64px)] leading-[0.95] font-black uppercase">
                  OUR <span className="text-tangerine italic">CLIENTS</span> &amp; PARTNERS
                </h2>
              </div>

              {/* Frameless Infinite Marquee Track (No horizontal black bars, larger logos) */}
              <div className="w-full overflow-hidden relative py-6 md:py-8 bg-surface-container-lowest">
                {/* Subtle Left/Right Fade Gradient Masks */}
                <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none"></div>

                {/* Animated Marquee Row */}
                <div
                  className="flex items-center gap-12 sm:gap-20 md:gap-24 w-max hover:[animation-play-state:paused]"
                  style={{ animation: "marqueeScroll 30s linear infinite" }}
                >
                  {[...combinedLogos, ...combinedLogos, ...combinedLogos].map((client, idx) => (
                    <div
                      key={`${client.name}-${idx}`}
                      className="flex items-center justify-center shrink-0 relative h-20 sm:h-28 md:h-32 w-44 sm:w-60 md:w-72 transition-transform duration-300 hover:scale-110"
                    >
                      <Image
                        unoptimized
                        src={client.logo!}
                        alt={`${client.name} logo`}
                        fill
                        className="object-contain filter grayscale opacity-85 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          );
        })()}

        {/* CTA Section */}
        <CallToAction
          title="OUR NEXT SUCCESS STORY?"
          description="You've seen the numbers we deliver. Let's talk about the results we can build for your business."
          buttonText="TALK TO OUR TEAM"
          buttonHref="/contact"
        />
      </main>
    </div>
  );
}
