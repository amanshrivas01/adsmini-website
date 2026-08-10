import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { CallToAction } from "~/components/ui/CallToAction";

export default function HomePage() {
  return (
    <div className="w-full max-w-full overflow-x-hidden bg-paper text-ink">
      {/* 1. Hero: Massive headline */}
      <section className="relative w-full h-[calc(100svh-60px)] min-h-[600px] border-b-4 border-ink bg-surface-container-lowest flex flex-col pt-4 md:pt-8 overflow-hidden bg-grid-pattern">
        {/* Doodle 5: Growth Inspectors in Hero Left */}
        <div className="hidden lg:block absolute top-12 left-6 lg:left-14 z-30 w-48 md:w-64 h-auto pointer-events-none float-animation">
          <Image
            src="/doodle5.png"
            alt="Growth Inspectors Doodle"
            width={260}
            height={150}
            className="object-contain drop-shadow-[4px_4px_0_#000]"
          />
        </div>

        {/* Doodle 2: Leaning Guy on Hero Right Side */}
        <div className="hidden lg:block absolute right-2 lg:right-6 xl:right-12 top-1/2 -translate-y-1/2 z-30 w-44 md:w-56 lg:w-64 h-[75%] max-h-[520px] pointer-events-none float-animation">
          <Image
            src="/doodle2.png"
            alt="Leaning Character Doodle"
            fill
            sizes="(max-width: 1280px) 220px, 260px"
            className="object-contain object-bottom drop-shadow-[5px_5px_0_#000]"
          />
        </div>

        <div className="px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center flex-grow relative z-10 w-full max-w-full overflow-x-hidden pb-24 md:pb-12 text-center">
            
            <h1 className="text-[clamp(28px,7.4vw,100px)] leading-[0.95] md:leading-[0.9] font-black uppercase tracking-tighter text-ink relative z-20 mb-5 md:mb-10 max-w-full">
              <span className="inline-block mb-3 md:mb-6 border-4 border-ink text-ink px-3 sm:px-8 py-2 md:py-3 transform -rotate-2 brutalist-shadow whitespace-nowrap">
                WE BUILD BRANDS
              </span><br />
              <span className="inline-block whitespace-nowrap">
                WE BUILD TEAMS
              </span>
            </h1>
            
            <p className="text-[14px] leading-[1.4] sm:text-[18px] md:text-[22px] lg:text-[24px] md:leading-[1.3] font-black text-ink mb-6 md:mb-10 bg-surface-container-lowest border-4 border-ink p-4 md:p-6 brutalist-shadow mx-auto max-w-4xl transform rotate-0 md:-rotate-1 relative z-20 w-[calc(100%-12px)] sm:w-auto">
              Ads Mini is a full-service digital marketing and recruitment agency. You bring the ambition, we bring the visibility to get you noticed and the people to help you deliver on it. All under one roof.
            </p>
            
            <div className="absolute bottom-6 left-0 right-0 px-margin-mobile md:relative md:bottom-auto md:px-0 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 z-20 w-full sm:w-auto md:mt-10">
              <Button variant="default" size="lg" asChild className="w-full sm:w-auto min-w-[220px]">
                <Link href="/services">
                  Explore Our Services
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto min-w-[220px]">
                <Link href="/contact">
                  Request a Callback
                </Link>
              </Button>
            </div>
        </div>  
      </section>

      {/* 2. Who We Are: Editorial magazine spread layout */}
      <section className="py-20 md:py-section-gap border-b-ink-4 bg-tangerine relative overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-10">
          {/* <div className="md:col-span-1 flex justify-center md:justify-start">
            <span className="bg-tangerine border-2 border-ink px-4 py-2 text-label-mono font-label-mono uppercase font-bold vertical-text hidden md:block brutalist-shadow">ISSUE 01   WHO WE ARE</span>
            <span className="bg-tangerine border-2 border-ink px-4 py-2 text-label-mono font-label-mono uppercase font-bold block md:hidden brutalist-shadow mb-8">ISSUE 01   WHO WE ARE</span>
          </div> */}
          <div className="md:col-span-5 relative">
            <div className="bg-surface-container-lowest border-ink-4 p-6 md:p-8 brutalist-shadow h-full flex flex-col justify-between relative overflow-hidden">
              <div>
                <h2 className="text-[clamp(32px,7vw,100px)] leading-[0.95] md:leading-[90px] font-black uppercase mb-6 md:mb-8 break-words hyphens-auto">
                  WHO <br />WE ARE.
                </h2>
              </div>

              {/* Doodle 5 in Who We Are Box */}
              <div className="relative my-4 sm:my-6 w-full flex justify-center items-center overflow-hidden">
                <Image
                  src="/doodle5.png"
                  alt="Who We Are Growth Inspectors Doodle"
                  width={360}
                  height={200}
                  className="object-contain drop-shadow-[3px_3px_0_#000] float-animation max-h-[160px] sm:max-h-[200px] md:max-h-[220px] w-auto h-auto max-w-full"
                />
              </div>

              <div className="w-full h-4 bg-ink mb-6 md:mb-8"></div>
            </div>
          </div>
          <div className="md:col-span-6 flex flex-col justify-center gap-6 md:gap-8 mt-6 md:mt-0">
            <div className="bg-surface-container-lowest border-ink-4 p-6 md:p-8 brutalist-shadow">
              <p className="text-body-lg font-body-lg font-bold mb-0 first-letter:text-[60px] sm:first-letter:text-[80px] md:first-letter:text-[120px] first-letter:leading-[50px] sm:first-letter:leading-[70px] md:first-letter:leading-[100px] first-letter:font-black first-letter:text-tangerine first-letter:float-left first-letter:mr-3 sm:first-letter:mr-4 md:first-letter:mr-6 first-letter:-mt-1 sm:first-letter:-mt-2 md:first-letter:-mt-4">
                Every business hits the same wall eventually: either nobody knows you exist, or you don&apos;t have the people to handle the growth once they do. Most agencies pick a side and specialise in exactly one of those problems. We didn&apos;t.
              </p>
            </div>
            <div className="bg-surface-container-lowest border-ink-4 p-6 md:p-8 brutalist-shadow">
              <p className="text-body-lg font-body-lg font-bold mb-0">
                Ads Mini was built to handle both visibility and people, under one accountable roof. We run performance marketing that actually moves numbers, and we run recruitment that actually fills roles with people who stay. No handoffs between three different vendors. No one pointing fingers at &ldquo;the other agency&rdquo; when something slips.
              </p>
            </div>
            <div className="bg-ink border-ink-4 p-6 md:p-8 brutalist-shadow">
              <p className="text-body-lg font-body-lg font-black text-surface-container-lowest mb-0 border-l-8 border-tangerine pl-4 md:pl-6">
                We work with founders just getting started and with established companies scaling across India and international markets. Whether you need to dominate search rankings, run paid campaigns that convert, or hire your next great employee, that&apos;s the conversation we&apos;re built for.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Services: Illustrated editorial layout */}
      <section className="py-20 md:py-section-gap bg-surface-container-lowest text-ink border-b-4 border-ink relative overflow-hidden bg-grid-pattern">
        <div className="px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="mb-12 md:mb-24 flex items-center justify-center md:justify-start gap-4 md:gap-8">
            <SectionHeading variant="tangerine">SERVICES</SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {/* Service 1 */}
            <div className="bg-surface-container-lowest border-4 border-ink p-5 md:p-6 brutalist-shadow">
              <div className="flex justify-between items-center mb-6 md:mb-8 border-b-4 border-ink pb-4">
                <span className="text-[50px] sm:text-[60px] md:text-[80px] leading-none font-black text-ink">01</span>
                <span className="material-symbols-outlined text-[60px] sm:text-[80px] md:text-[120px] text-ink">campaign</span>
              </div>
              <h3 className="text-[24px] leading-[26px] md:text-[40px] md:leading-[40px] font-black uppercase mb-4 md:mb-6 break-words">Digital <br />Marketing</h3>
              <p className="text-body-md md:text-body-lg font-bold">
                SEO, PPC, social media and content strategy, built on data, not guesswork. We tell you what&apos;s working, what isn&apos;t, and what we&apos;re doing about it.
              </p>
            </div>
            {/* Service 2 */}
            <div className="bg-ink text-surface-container-lowest border-4 border-ink p-5 md:p-6 brutalist-shadow mt-0 md:mt-12">
              <div className="flex justify-between items-center mb-6 md:mb-8 border-b-4 border-surface-container-lowest pb-4">
                <span className="text-[50px] sm:text-[60px] md:text-[80px] leading-none font-black">02</span>
                <span className="material-symbols-outlined text-[60px] sm:text-[80px] md:text-[120px]">group_add</span>
              </div>
              <h3 className="text-[24px] leading-[26px] md:text-[40px] md:leading-[40px] font-black uppercase mb-4 md:mb-6 break-words">Recruitment <br />Solutions</h3>
              <p className="text-body-md md:text-body-lg font-bold">
                From your first hire to your next C-suite leader, we find people who fit the role and the culture, not just the job description. Zero compromise on fit.
              </p>
            </div>
            {/* Service 3 */}
            <div className="bg-surface-container-lowest border-4 border-ink p-5 md:p-6 brutalist-shadow mt-0 md:mt-24">
              <div className="flex justify-between items-center mb-6 md:mb-8 border-b-4 border-ink pb-4">
                <span className="text-[50px] sm:text-[60px] md:text-[80px] leading-none font-black text-ink">03</span>
                <span className="material-symbols-outlined text-[60px] sm:text-[80px] md:text-[120px] text-ink">trending_up</span>
              </div>
              <h3 className="text-[24px] leading-[26px] md:text-[40px] md:leading-[40px] font-black uppercase mb-4 md:mb-6 break-words">Integrated <br />Growth Strategy</h3>
              <p className="text-body-md md:text-body-lg font-bold">
                When you need both, we don&apos;t run them as two separate plans. Your hiring roadmap moves in step with your marketing pipeline, because growth on one side without the other just creates bottlenecks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why Ads Mini: Bold, poster-style statements */}
      <section className="py-20 md:py-section-gap bg-surface-container-lowest border-b-ink-4 bg-grid-pattern relative overflow-hidden">
        <div className="px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="mb-12 md:mb-24 text-center">
            <SectionHeading variant="light">WHY Ads Mini?</SectionHeading>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 relative">
            {/* Card 1 with Doodle 1 */}
            <div className="bg-tangerine border-4 border-ink p-6 md:p-8 brutalist-shadow transform rotate-0 sm:rotate-[-2deg] relative">
              {/* Doodle 1: LOUDER! Megaphone Monster */}
              <div className="hidden lg:block absolute -top-20 -right-8 z-20 w-36 h-36 pointer-events-none hover:scale-110 transition-transform">
                <Image
                  src="/doodle1.png"
                  alt="Louder Megaphone Doodle"
                  width={160}
                  height={160}
                  className="object-contain drop-shadow-[3px_3px_0_#000]"
                />
              </div>
              <h3 className="text-[24px] leading-[28px] md:text-[40px] md:leading-[44px] font-black uppercase mb-6 md:mb-8 border-b-4 border-ink pb-4 break-words">Results Over Reports</h3>
              <p className="text-body-md md:text-body-lg font-bold">We&apos;re not in the business of pretty dashboards you never open. Every strategy is tied to a measurable outcome: traffic, leads, conversions, revenue, hires. If the number isn&apos;t moving, we change the approach, not the excuse.</p>
            </div>
            <div className="bg-surface-container-lowest border-4 border-ink p-6 md:p-8 brutalist-shadow transform rotate-0 sm:rotate-[3deg]">
              <h3 className="text-[24px] leading-[28px] md:text-[40px] md:leading-[44px] font-black uppercase mb-6 md:mb-8 border-b-4 border-ink pb-4 break-words">Specialists, Not Generalists</h3>
              <p className="text-body-md md:text-body-lg font-bold">Every client gets a dedicated team with real domain expertise. No junior staff learning on your budget. No quietly outsourced execution. Just people who know exactly what they&apos;re doing and are accountable for what they deliver.</p>
            </div>
            <div className="bg-surface-container-lowest border-4 border-ink p-6 md:p-8 brutalist-shadow transform rotate-0 sm:rotate-[-2deg]">
              <h3 className="text-[24px] leading-[28px] md:text-[40px] md:leading-[44px] font-black uppercase mb-6 md:mb-8 border-b-4 border-ink pb-4 break-words">One Partner, Two Disciplines</h3>
              <p className="text-body-md md:text-body-lg font-bold">Marketing and recruitment handled by one agency means less back-and-forth, better strategic alignment, and stronger long-term results. You talk to one team. They handle both sides.</p>
            </div>
          </div>
        </div>
      </section>
      {/* 5. Industries: Editorial List Layout */}
      <section className="py-20 md:py-section-gap bg-tangerine border-b-ink-4 overflow-hidden relative">
        <div className="px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="mb-12 md:mb-24 flex justify-center text-center">
            <SectionHeading variant="light">INDUSTRIES</SectionHeading>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-4 md:gap-6 max-w-7xl mx-auto pt-4 md:pt-12">
            {[
              "Technology, SaaS & IT",
              "E-Commerce & Retail",
              "Healthcare & Pharma",
              "Finance & Insurance",
              "Manufacturing & Logistics",
              "Real Estate & Infra",
              "Education & EdTech",
              "Hospitality & Tourism",
              "Government & Enterprise",
              "Media & Communications",
              "Automotive"
            ].map((industry, index) => (
              <div key={index} className="bg-surface-container-lowest border-2 md:border-4 border-ink px-3 py-2 sm:px-5 sm:py-3 md:px-8 md:py-4 brutalist-shadow hover:-translate-y-1 md:hover:-translate-y-2 transition-transform duration-300 cursor-default">
                <span className="text-[13px] sm:text-[18px] md:text-[28px] font-black uppercase text-ink leading-none">
                  {industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Stats: Oversized Tangerine numbers */}
      <section className="py-16 sm:py-20 lg:py-section-gap bg-ink text-surface-container-lowest border-b-ink-4 relative overflow-hidden">
        {/* Doodle 3: UP THERE! Pointing Upwards at Stats */}
        <div className="hidden lg:block absolute bottom-4 left-6 lg:left-16 z-20 w-44 h-52 pointer-events-none float-animation">
          <Image
            src="/doodle3.png"
            alt="Up There Pointing Glove Doodle"
            width={200}
            height={240}
            className="object-contain drop-shadow-[4px_4px_0_#FA9948]"
          />
        </div>

        <div className="px-margin-mobile md:px-margin-desktop grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-6 lg:gap-8 relative z-10 max-w-7xl mx-auto items-stretch">
          {/* Stat 1 */}
          <div className="flex flex-col items-center justify-between text-center bg-surface-container-lowest text-ink border-4 border-ink px-3 py-6 sm:px-5 sm:py-8 brutalist-shadow transform rotate-0 sm:-rotate-1 lg:-rotate-2 transition-transform min-h-[220px] sm:min-h-[260px]">
            <div className="flex items-center justify-center flex-grow py-2 w-full">
              <span className="text-[clamp(40px,5vw,72px)] leading-none font-black text-tangerine drop-shadow-[2px_2px_0_rgba(0,0,0,1)] sm:drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
                6+
              </span>
            </div>
            <span className="text-[13px] sm:text-[15px] lg:text-[16px] font-black uppercase tracking-wider border-t-4 border-ink pt-3 w-full">
              Years of Experience
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center justify-between text-center bg-tangerine text-ink border-4 border-ink px-3 py-6 sm:px-5 sm:py-8 brutalist-shadow transform rotate-0 sm:rotate-1 lg:rotate-2 transition-transform min-h-[220px] sm:min-h-[260px]">
            <div className="flex items-center justify-center flex-grow py-2 w-full">
              <span className="text-[clamp(40px,5vw,72px)] leading-none font-black text-surface-container-lowest drop-shadow-[2px_2px_0_rgba(0,0,0,1)] sm:drop-shadow-[4px_4px_0_rgba(0,0,0,1)]">
                400+
              </span>
            </div>
            <span className="text-[13px] sm:text-[15px] lg:text-[16px] font-black uppercase tracking-wider border-t-4 border-ink pt-3 w-full">
              Clients Served
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center justify-between text-center bg-surface-container-lowest text-ink border-4 border-ink px-3 py-6 sm:px-5 sm:py-8 brutalist-shadow transform rotate-0 sm:-rotate-1 lg:-rotate-1 transition-transform min-h-[220px] sm:min-h-[260px]">
            <div className="flex items-center justify-center flex-grow py-2 w-full">
              <span className="text-[clamp(28px,3.6vw,52px)] leading-none font-black text-tangerine drop-shadow-[2px_2px_0_rgba(0,0,0,1)] sm:drop-shadow-[4px_4px_0_rgba(0,0,0,1)] whitespace-nowrap">
                10,000+
              </span>
            </div>
            <span className="text-[13px] sm:text-[15px] lg:text-[16px] font-black uppercase tracking-wider border-t-4 border-ink pt-3 w-full">
              Campaigns Managed
            </span>
          </div>

          {/* Stat 4 */}
          <div className="flex flex-col items-center justify-between text-center bg-tangerine text-ink border-4 border-ink px-3 py-6 sm:px-5 sm:py-8 brutalist-shadow transform rotate-0 sm:rotate-1 lg:rotate-2 transition-transform min-h-[220px] sm:min-h-[260px]">
            <div className="flex items-center justify-center flex-grow py-2 w-full">
              <span className="text-[clamp(22px,2.8vw,38px)] leading-[1.1] font-black text-surface-container-lowest drop-shadow-[2px_2px_0_rgba(0,0,0,1)] sm:drop-shadow-[4px_4px_0_rgba(0,0,0,1)] uppercase">
                MULTI<br />COUNTRY
              </span>
            </div>
            <span className="text-[13px] sm:text-[15px] lg:text-[16px] font-black uppercase tracking-wider border-t-4 border-ink pt-3 w-full">
              Client Base
            </span>
          </div>
        </div>
      </section>

      {/* 7. CTA: Bold poster */}
      <CallToAction 
        title="READY TO GROW?"
        description="Let's talk about what your business actually needs right now, more leads, better visibility, the right hires on your team, or all three at once."
        buttonText="Schedule a Free Consultation"
        buttonHref="/contact"
      />
    </div>
  );
}
