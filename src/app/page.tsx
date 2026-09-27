import Image from "next/image";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { SectionHeading } from "~/components/ui/SectionHeading";
import { CallToAction } from "~/components/ui/CallToAction";
import { siteConfig } from "~/data/data";

export default function HomePage() {
  const { hero } = siteConfig.content;
  const { heroPrimary, heroSecondary } = siteConfig.ctas;

  return (
    <div className="w-full max-w-full overflow-x-hidden bg-paper text-ink">
      {/* 1. Hero: Massive headline */}
      <section className="relative w-full min-h-[calc(100svh-60px)] border-b-4 border-ink bg-surface-container-lowest flex flex-col justify-center pt-6 pb-12 md:py-12 overflow-hidden bg-grid-pattern">
        {/* Doodle 5: Growth Inspectors in Hero Left */}
        <div className="hidden lg:block absolute top-14 left-4 sm:top-16 sm:left-6 lg:top-18 lg:left-8 z-20 w-28 sm:w-36 md:w-44 lg:w-48 xl:w-56 h-auto pointer-events-none float-animation">
          <Image
            src="/doodle5.png"
            alt="Growth Inspectors Doodle"
            width={260}
            height={150}
            className="object-contain drop-shadow-[4px_4px_0_#000]"
          />
        </div>

        {/* Doodle 2: Leaning Guy on Hero Right Side */}
        <div className="hidden lg:block absolute right-1 sm:right-2 md:right-4 lg:right-6 xl:right-10 top-1/2 -translate-y-1/2 z-20 w-28 sm:w-36 md:w-44 lg:w-52 xl:w-60 h-[55%] sm:h-[65%] lg:h-[70%] max-h-[480px] pointer-events-none float-animation">
          <Image
            src="/doodle2.png"
            alt="Leaning Character Doodle"
            fill
            sizes="(max-width: 1280px) 200px, 240px"
            className="object-contain object-bottom drop-shadow-[5px_5px_0_#000]"
          />
        </div>

        <div className="px-margin-mobile md:px-margin-desktop flex flex-col items-center justify-center flex-grow relative z-10 w-full max-w-full overflow-x-hidden text-center my-auto">
            
            <h1 className="text-[clamp(26px,4.8vw,78px)] leading-[0.95] md:leading-[0.9] font-black uppercase tracking-tighter text-ink relative z-20 mb-4 md:mb-6 max-w-full">
              <span className="inline-block mb-2 md:mb-4 border-4 border-ink text-ink px-3 sm:px-6 md:px-8 py-2 md:py-2.5 transform -rotate-2 brutalist-shadow whitespace-nowrap">
                {hero.badge1}
              </span><br />
              <span className="inline-block whitespace-nowrap">
                {hero.badge2}
              </span>
            </h1>
            
            <p className="text-[14px] leading-[1.4] sm:text-[17px] md:text-[20px] lg:text-[22px] md:leading-[1.3] font-black text-ink mb-6 md:mb-8 bg-surface-container-lowest border-4 border-ink p-4 md:p-6 brutalist-shadow mx-auto max-w-3xl transform rotate-0 md:-rotate-1 relative z-20 w-[calc(100%-12px)] sm:w-auto">
              {hero.subheadline}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 z-20 w-full sm:w-auto mt-2 md:mt-4">
              <Button variant="default" size="lg" asChild className="w-full sm:w-auto min-w-[200px] sm:min-w-[220px]">
                <Link href={heroPrimary.href}>
                  {heroPrimary.label}
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto min-w-[200px] sm:min-w-[220px]">
                <a href={heroSecondary.href} className="inline-flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">call</span>
                  <span>{heroSecondary.label}</span>
                </a>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10 relative">
            {/* Card 1: Specialists, Not Generalists */}
            <div className="bg-surface-container-lowest border-4 border-ink p-6 md:p-8 brutalist-shadow transform rotate-0 sm:rotate-[-2deg]">
              <h3 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[34px] leading-[1.15] font-black uppercase mb-6 md:mb-8 border-b-4 border-ink pb-4 break-words">
                Specialists, Not Generalists
              </h3>
              <p className="text-body-md md:text-body-lg font-bold">
                Every client gets a dedicated team with real domain expertise. No junior staff learning on your budget. No quietly outsourced execution. Just people who know exactly what they&apos;re doing and are accountable for what they deliver.
              </p>
            </div>

            {/* Card 2: Results Over Reports (with Doodle 1) */}
            <div className="bg-tangerine border-4 border-ink p-6 md:p-8 brutalist-shadow transform rotate-0 sm:rotate-[2deg] relative">
              {/* Doodle 1: LOUDER! Megaphone Monster */}
              <div className="hidden lg:block absolute -top-16 -right-6 lg:-top-20 lg:-right-8 z-20 w-32 h-32 lg:w-36 lg:h-36 pointer-events-none hover:scale-110 transition-transform">
                <Image
                  src="/doodle1.png"
                  alt="Louder Megaphone Doodle"
                  width={160}
                  height={160}
                  className="object-contain drop-shadow-[3px_3px_0_#000]"
                />
              </div>
              <h3 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[34px] leading-[1.15] font-black uppercase mb-6 md:mb-8 border-b-4 border-ink pb-4 break-words">
                Results Over Reports
              </h3>
              <p className="text-body-md md:text-body-lg font-bold">
                We&apos;re not in the business of pretty dashboards you never open. Every strategy is tied to a measurable outcome: traffic, leads, conversions, revenue, hires. If the number isn&apos;t moving, we change the approach, not the excuse.
              </p>
            </div>

            {/* Card 3: One Partner, Two Disciplines */}
            <div className="bg-surface-container-lowest border-4 border-ink p-6 md:p-8 brutalist-shadow transform rotate-0 sm:rotate-[-2deg]">
              <h3 className="text-[22px] sm:text-[24px] md:text-[28px] lg:text-[34px] leading-[1.15] font-black uppercase mb-6 md:mb-8 border-b-4 border-ink pb-4 break-words">
                One Partner, Two Disciplines
              </h3>
              <p className="text-body-md md:text-body-lg font-bold">
                Marketing and recruitment handled by one agency means less back-and-forth, better strategic alignment, and stronger long-term results. You talk to one team. They handle both sides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Industries: Editorial List Layout */}
      <section className="py-12 md:py-16 bg-tangerine border-b-ink-4 overflow-hidden relative">
        <div className="px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="mb-8 md:mb-12 flex justify-center text-center">
            <SectionHeading variant="light">INDUSTRIES</SectionHeading>
          </div>
          <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3.5 md:gap-4 max-w-5xl xl:max-w-6xl mx-auto">
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
              <div 
                key={index} 
                className="bg-surface-container-lowest border-2 md:border-3 lg:border-4 border-ink px-3.5 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 brutalist-shadow hover:-translate-y-1 transition-transform duration-300 cursor-default"
              >
                <span className="text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] font-black uppercase text-ink leading-none whitespace-nowrap">
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
          {siteConfig.content.stats.map((stat, idx) => {
            const isTangerine = stat.variant === "tangerine";
            const rotations = [
              "transform rotate-0 sm:-rotate-1 lg:-rotate-2",
              "transform rotate-0 sm:rotate-1 lg:rotate-2",
              "transform rotate-0 sm:-rotate-1 lg:-rotate-1",
              "transform rotate-0 sm:rotate-1 lg:rotate-2",
            ];
            return (
              <div
                key={idx}
                className={`flex flex-col items-center justify-between text-center ${
                  isTangerine
                    ? "bg-tangerine text-ink"
                    : "bg-surface-container-lowest text-ink"
                } border-4 border-ink px-3 py-6 sm:px-5 sm:py-8 brutalist-shadow ${
                  rotations[idx % rotations.length]
                } transition-transform min-h-[220px] sm:min-h-[260px]`}
              >
                <div className="flex items-center justify-center flex-grow py-2 w-full">
                  <span
                    className={`${
                      stat.value.includes("\n")
                        ? "text-[clamp(22px,2.8vw,38px)] leading-[1.1]"
                        : "text-[clamp(28px,3.6vw,52px)] sm:text-[clamp(40px,5vw,72px)] leading-none"
                    } font-black ${
                      isTangerine
                        ? "text-surface-container-lowest drop-shadow-[2px_2px_0_rgba(0,0,0,1)] sm:drop-shadow-[4px_4px_0_rgba(0,0,0,1)]"
                        : "text-tangerine drop-shadow-[2px_2px_0_rgba(0,0,0,1)] sm:drop-shadow-[4px_4px_0_rgba(0,0,0,1)]"
                    } ${stat.value.includes("\n") ? "uppercase" : "whitespace-nowrap"}`}
                  >
                    {stat.value.split("\n").map((part, pIdx) => (
                      <span key={pIdx}>
                        {part}
                        {pIdx < stat.value.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                </div>
                <span className="text-[13px] sm:text-[15px] lg:text-[16px] font-black uppercase tracking-wider border-t-4 border-ink pt-3 w-full">
                  {stat.label}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. CTA: Bold poster */}
      <CallToAction 
        title="READY TO GROW?"
        description="Let's talk about what your business actually needs right now, more leads, better visibility, the right hires on your team, or all three at once."
        buttonText={siteConfig.ctas.globalConsultation.label}
        buttonHref={siteConfig.ctas.globalConsultation.href}
      />
    </div>
  );
}
