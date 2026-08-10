"use client";
import Image from "next/image";
import { useEffect } from "react";
import { PageHero } from "~/components/ui/PageHero";

export default function AboutPage() {
  useEffect(() => {
    // Simple scroll reveal
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observer.observe(el);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-paper text-ink font-body-md selection:bg-tangerine selection:text-ink">
      <main>
        {/* Hero Section */}
        <PageHero
          label="The Ads Mini Manifesto"
          title={
            <>
              Built With <span className="text-tangerine">Purpose.</span> <br className="hidden md:block" />
              Run by Professionals.
            </>
          }
        >
          We are a performance-driven agency that combines digital marketing and recruitment under one roof, helping businesses attract the right customers and build the right teams to scale sustainably.
        </PageHero>

        {/* Our Story Section */}
        <section className="px-margin-mobile md:px-margin-desktop py-20 md:py-section-gap relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-5 md:col-start-2 reveal-on-scroll">
              <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg uppercase mb-6 md:mb-8 relative inline-block">
                Our Story
                <div className="absolute -left-6 -top-6 w-12 h-12 bg-tangerine rounded-full -z-10 opacity-50"></div>
              </h2>
              <div className="space-y-4 md:space-y-6 font-body-md md:text-body-lg text-body-md md:text-body-lg">
                <p>Ads Mini wasn&apos;t built to be two businesses. It became one because our clients needed both.</p>
                <p>We started as a digital marketing agency focused on one thing&mdash;delivering real, measurable growth. No inflated promises. No confusing reports. Just strategies that worked.</p>
                <p>As our clients grew, the same conversation kept happening:<br/><span className="italic font-medium">&ldquo;The leads are coming in... now can you help us hire the right people?&rdquo;</span></p>
                <p>At first, we made introductions. Then we realized this wasn&apos;t a one-off request&mdash;it was the next challenge every growing business faced. So we expanded our mission.</p>
                <p>Today, Ads Mini combines digital marketing and recruitment under one roof, helping businesses attract the right customers and build the right teams. Because sustainable growth isn&apos;t just about getting noticed&mdash;it&apos;s about having the people to keep growing.</p>
              </div>
            </div>
            <div className="md:col-span-4 md:col-start-8 relative mt-8 md:mt-0 reveal-on-scroll" style={{ transitionDelay: "0.2s" }}>
              <div className="hand-drawn-border bg-surface-container-lowest p-8 brutalist-shadow relative z-10 h-full flex flex-col justify-center">
                <h3 className="font-headline-md text-headline-md mb-3 md:mb-4 uppercase">The Spark</h3>
                <p className="font-body-md text-body-md">We didn't start in a boardroom. We started with a whiteboard, too much coffee, and a belief that agencies could do better.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission/Vision & Approach */}
        <section className="bg-ink text-surface-container-lowest px-margin-mobile md:px-margin-desktop py-20 md:py-section-gap relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[30vw] font-display-xl text-surface-container-lowest opacity-5 whitespace-nowrap pointer-events-none select-none">
            PURPOSE
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-6xl mx-auto relative z-10">
            <div className="reveal-on-scroll border-t-2 border-tangerine pt-6 md:pt-8">
              <span className="font-label-mono text-label-mono text-tangerine uppercase tracking-widest mb-3 md:mb-4 block">Our Mission</span>
              <h3 className="font-headline-md text-[24px] md:text-[32px] leading-tight mb-4 md:mb-6 uppercase">To help businesses grow with clarity, by building the visibility they need and the teams that can carry it forward.</h3>
            </div>
            <div className="reveal-on-scroll border-t-2 border-tangerine pt-6 md:pt-8" style={{ transitionDelay: "0.2s" }}>
              <span className="font-label-mono text-label-mono text-tangerine uppercase tracking-widest mb-3 md:mb-4 block">Our Vision</span>
              <h3 className="font-headline-md text-[24px] md:text-[32px] leading-tight mb-4 md:mb-6 uppercase">To be the most trusted integrated digital marketing and recruitment agency for businesses that take growth seriously.</h3>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="bg-paper px-margin-mobile md:px-margin-desktop py-20 md:py-section-gap relative overflow-hidden">
          <div className="text-center mb-16 md:mb-24 reveal-on-scroll">
            <span className="font-label-mono text-[14px] md:text-[16px] uppercase tracking-widest text-tangerine block mb-3 md:mb-4 font-bold">What We Stand For</span>
            <h2 className="text-[50px] md:text-[80px] lg:text-[100px] leading-[0.9] font-black uppercase inline-block relative text-ink">
              Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Value 1 */}
            <div className="bg-surface-container-lowest border-4 border-ink p-8 md:p-12 brutalist-shadow relative group hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300 reveal-on-scroll cursor-default">
              <span className="font-label-mono text-[14px] md:text-[16px] block mb-4 md:mb-6 text-tangerine opacity-50 group-hover:opacity-100 transition-opacity">01</span>
              <h3 className="text-[24px] md:text-[32px] font-black uppercase mb-3 md:mb-4 text-ink">Transparency</h3>
              <p className="text-[16px] md:text-[18px] leading-[1.6] font-medium text-ink opacity-80 group-hover:opacity-100 transition-opacity">We share everything, the good, the bad, and the work in progress. No black-box strategies, no hidden markups.</p>
            </div>
            {/* Value 2 */}
            <div className="bg-surface-container-lowest border-4 border-ink p-8 md:p-12 brutalist-shadow relative group hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300 reveal-on-scroll cursor-default" style={{ transitionDelay: "0.1s" }}>
              <span className="font-label-mono text-[14px] md:text-[16px] block mb-4 md:mb-6 text-tangerine opacity-50 group-hover:opacity-100 transition-opacity">02</span>
              <h3 className="text-[24px] md:text-[32px] font-black uppercase mb-3 md:mb-4 text-ink">Ownership</h3>
              <p className="text-[16px] md:text-[18px] leading-[1.6] font-medium text-ink opacity-80 group-hover:opacity-100 transition-opacity">Your targets become our targets. We don&apos;t just execute tasks, we take responsibility for the outcomes.</p>
            </div>
            {/* Value 3 */}
            <div className="bg-surface-container-lowest border-4 border-ink p-8 md:p-12 brutalist-shadow relative group hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300 reveal-on-scroll cursor-default">
              <span className="font-label-mono text-[14px] md:text-[16px] block mb-4 md:mb-6 text-tangerine opacity-50 group-hover:opacity-100 transition-opacity">03</span>
              <h3 className="text-[24px] md:text-[32px] font-black uppercase mb-3 md:mb-4 text-ink">Expertise</h3>
              <p className="text-[16px] md:text-[18px] leading-[1.6] font-medium text-ink opacity-80 group-hover:opacity-100 transition-opacity">We believe in doing a few things exceptionally well. Our team is made up of specialists, not generalists.</p>
            </div>
            {/* Value 4 */}
            <div className="bg-surface-container-lowest border-4 border-ink p-8 md:p-12 brutalist-shadow relative group hover:-translate-y-2 hover:-translate-x-2 transition-transform duration-300 reveal-on-scroll cursor-default" style={{ transitionDelay: "0.1s" }}>
              <span className="font-label-mono text-[14px] md:text-[16px] block mb-4 md:mb-6 text-tangerine opacity-50 group-hover:opacity-100 transition-opacity">04</span>
              <h3 className="text-[24px] md:text-[32px] font-black uppercase mb-3 md:mb-4 text-ink">Long-Term Thinking</h3>
              <p className="text-[16px] md:text-[18px] leading-[1.6] font-medium text-ink opacity-80 group-hover:opacity-100 transition-opacity">We don&apos;t optimize for the first month. We build strategies and hiring pipelines that hold up for years, not just quarters.</p>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="bg-ink text-surface-container-lowest px-margin-mobile md:px-margin-desktop py-20 md:py-section-gap relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[30vw] font-display-xl text-surface-container-lowest opacity-5 whitespace-nowrap pointer-events-none select-none">
            APPROACH
          </div>
          <div className="max-w-4xl mx-auto text-center relative z-10 reveal-on-scroll">
             <h2 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl uppercase mb-8 md:mb-12 text-tangerine">Our Approach</h2>
             <div className="space-y-6 font-body-lg md:text-[24px] leading-relaxed text-surface-container-lowest">
               <p>We don&apos;t believe in one-size-fits-all. Before we recommend anything, we spend real time understanding your business, its goals, its challenges, its market position, and the people it actually needs. Only then do we build a plan.</p>
               <p>Every engagement at Ads Mini starts with a diagnostic conversation. We ask the questions most agencies skip. Then we build a strategy that addresses the root of the problem, not just the surface symptom.</p>
             </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="bg-surface-variant px-margin-mobile md:px-margin-desktop py-20 md:py-section-gap border-y-4 border-ink relative overflow-hidden">
          <svg className="absolute top-0 right-0 w-48 md:w-64 h-48 md:h-64 -translate-y-1/2 translate-x-1/2 z-0 opacity-20" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <circle cx="100" cy="100" fill="none" r="90" stroke="#000" strokeDasharray="20 10" strokeWidth="4"></circle>
          </svg>
          <div className="mb-16 md:mb-32 text-center reveal-on-scroll flex flex-col items-center relative z-10">
            <span className="font-label-mono text-[14px] md:text-[16px] uppercase tracking-widest text-ink block mb-3 md:mb-4 font-bold">Leadership</span>
            <h2 className="text-[40px] md:text-[60px] lg:text-[80px] leading-[0.9] font-black uppercase text-ink text-center relative inline-block">
              The Minds <br />Behind The Madness
              {/* Doodle 2: Confident Leaning Guy */}
              <div className="hidden lg:block absolute -top-8 -right-28 z-20 w-32 h-44 pointer-events-none float-animation">
                <Image
                  src="/doodle2.png"
                  alt="Confident Leaning Guy Doodle"
                  width={160}
                  height={220}
                  className="object-contain drop-shadow-[3px_3px_0_#000]"
                />
              </div>
            </h2>
          </div>
          
          <div className="max-w-7xl mx-auto space-y-24 md:space-y-40 relative z-10">
            {/* Aman */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative reveal-on-scroll">
              <div className="md:col-span-5 relative group order-1">
                <div className="bg-tangerine w-full aspect-[3/4] border-4 border-ink absolute top-4 left-4 md:top-6 md:left-6 z-0 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                <div className="bg-surface-container-lowest w-full aspect-[3/4] border-4 border-ink brutalist-shadow relative z-10 flex flex-col justify-end p-0 overflow-hidden">
                  <Image 
                    src="/aman.png" 
                    alt="Aman Shrivas - Founder & CEO" 
                    width={800} height={1000} unoptimized
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="relative z-20 bg-white/90 backdrop-blur-sm p-4 md:p-6 border-t-4 border-ink w-full">
                    <h3 className="font-black text-[24px] md:text-[32px] uppercase leading-none mb-1 text-ink">Aman Shrivas</h3>
                    <p className="font-label-mono text-[14px] md:text-[16px] text-tangerine uppercase font-bold tracking-wider">Founder &amp; CEO</p>
                  </div>
                </div>
              </div>
              <div className="md:col-span-6 md:col-start-7 mt-12 md:mt-0 font-body-md text-left order-2">
                <div className="space-y-6 text-[16px] md:text-[18px] leading-[1.6] text-ink font-medium">
                  <p>Aman founded Ads Mini with a simple belief: every business deserves the opportunity to grow&mdash;with the right visibility and the right people behind it.</p>
                  <p>With extensive experience in digital marketing, performance marketing, growth strategy, and scaling businesses, Aman has partnered with startups, SMEs, and established brands across India and international markets to turn ambitious goals into measurable outcomes.</p>
                  <p>His approach has always been straightforward: listen first, understand the business, identify what&apos;s holding it back, and then build strategies that create real impact. No unnecessary jargon. No one-size-fits-all solutions. Just practical ideas backed by data, creativity, and execution.</p>
                  <p>Over the years, one thing became clear: bringing customers through the door is only half the challenge. Businesses also need the right people to keep that momentum going. That realization shaped Ads Mini into a full-service agency that combines digital marketing and recruitment under one roof.</p>
                  <p>Today, Aman continues to lead Ads Mini with the same philosophy it started with: help businesses grow with honesty, innovation, and strategies that deliver lasting results not just impressive presentations.</p>
                </div>
              </div>
            </div>

            {/* Akansha */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center relative reveal-on-scroll" style={{ transitionDelay: "0.2s" }}>
              <div className="md:col-span-6 mt-12 md:mt-0 font-body-md text-left order-2 md:order-1">
                <div className="space-y-6 text-[16px] md:text-[18px] leading-[1.6] text-ink font-medium">
                  <p>Akansha leads the recruitment practice at Ads Mini with expertise in end-to-end talent acquisition, strategic hiring, and workforce planning. From technical and non-technical roles to high-volume recruitment, she has helped businesses build strong teams across diverse industries.</p>
                  <p>Her experience covers the entire hiring lifecycle from understanding business requirements and crafting job descriptions to sourcing, screening, interview coordination, offer management, and seamless onboarding. She is also well-versed in ATS and HRMS platforms, recruitment analytics, compliance, and optimizing hiring workflows.</p>
                  <p>What sets Akansha apart is her belief that recruitment is more than filling positions; it&apos;s about connecting the right talent with the right opportunity. She focuses on creating efficient hiring processes, delivering an exceptional candidate experience, and helping organizations build teams that drive long-term growth.</p>
                </div>
              </div>
              <div className="md:col-span-5 md:col-start-8 relative group order-1 md:order-2">
                <div className="bg-tangerine w-full aspect-[3/4] border-4 border-ink absolute top-4 -right-4 md:top-6 md:-right-6 z-0 group-hover:-translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
                <div className="bg-surface-container-lowest w-full aspect-[3/4] border-4 border-ink brutalist-shadow relative z-10 flex flex-col justify-end p-0 overflow-hidden">
                  <Image 
                    src="/image.png" 
                    alt="Akansha Shrivastava - Head of Recruitment" 
                    width={800} height={1000} unoptimized
                    className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="relative z-20 bg-white/90 backdrop-blur-sm p-4 md:p-6 border-t-4 border-ink w-full text-right md:text-left">
                    <h3 className="font-black text-[24px] md:text-[32px] uppercase leading-none mb-1 text-ink">Akansha Shrivastava</h3>
                    <p className="font-label-mono text-[14px] md:text-[16px] text-tangerine uppercase font-bold tracking-wider">Head of Recruitment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-tangerine border-t-4 border-ink py-16 md:py-24 relative overflow-hidden">
          <svg className="absolute inset-0 w-full h-full -z-10 pointer-events-none opacity-20" preserveAspectRatio="none">
            <path className="dashed-path" d="M 0,50 Q 500,100 1000,50" fill="transparent" stroke="#000" strokeWidth="4"></path>
          </svg>
          <div className="px-margin-mobile md:px-margin-desktop reveal-on-scroll relative z-10">
            <h3 className="text-[32px] md:text-[48px] font-black uppercase text-center mb-12 text-ink">Trusted &amp; Certified By</h3>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 items-center max-w-5xl mx-auto">
              {[
                "Google Partner",
                "Meta Business Partner",
                "LinkedIn Marketing Solutions",
                "Snapchat Ads Manager Certified"
              ].map((cert, i) => (
                <span key={i} className="bg-surface-container-lowest border-4 border-ink px-6 py-3 rounded-lg text-label-mono font-label-mono uppercase font-bold brutalist-shadow hover:-translate-y-1 hover:translate-x-1 transition-transform cursor-default text-ink text-center">
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
