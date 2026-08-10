import { type Metadata } from "next";
import { CallToAction } from "~/components/ui/CallToAction";
import { PageHero } from "~/components/ui/PageHero";

export const metadata: Metadata = {
  title: "End-to-End Recruitment Agency | IT, Healthcare, Executive Hiring | Ads Mini",
  description: "Ads Mini provides end-to-end recruitment solutions: IT hiring, healthcare staffing, executive search, campus placement and bulk hiring. The right person for the right role, every time.",
};

export default function RecruitmentPage() {
  return (
    <div className="font-body-md bg-paper selection:bg-tangerine selection:text-ink">
      <main className="relative w-full">
        {/* Hero Section */}
        <PageHero
          label="01 / Services / Recruitment"
          title={
            <>
              The Right <br /><span className="text-tangerine italic">Person</span> for the <br />Right Role. Every Time.
            </>
          }
        >
          Hiring is one of the most consequential decisions a business makes. We don&apos;t just fill seats, we find the missing piece to your puzzle.
        </PageHero>

        {/* End-to-End Section */}
        <section className="py-20 md:py-section-gap px-margin-mobile md:px-margin-desktop relative overflow-hidden bg-ink text-paper">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-5 relative">
              <div className="w-full aspect-[3/4] bg-tangerine flex items-center justify-center p-6 md:p-8 relative border-2 border-paper">
                {/* <Image unoptimized width={1000} height={1000}                   alt="Cartoon mascot leaning casually against a wall"
                  className="w-full h-auto object-contain mix-blend-multiply filter invert"
                  src="/placeholder.svg"
                /> */}
                <div className="absolute -right-16 top-20 transform rotate-90 hidden md:block">
                  <span className="font-label-mono text-label-mono tracking-widest text-paper">END-TO-END</span>
                </div>
              </div>
            </div>
            <div className="md:col-span-7 md:col-start-6 mt-8 md:mt-0">
              <h2 className="font-headline-lg-mobile text-[40px] md:font-headline-lg md:text-[56px] leading-[1] mb-6 md:mb-8 text-tangerine uppercase">
                Full-Cycle <br />Recruitment
              </h2>
              <p className="text-[18px] md:text-[20px] mb-8 text-paper leading-[1.5] opacity-90">
                We manage the complete hiring lifecycle, from the first conversation about a role to the day the candidate joins and beyond. Our process is built to reduce time-to-hire, improve offer acceptance rates, and make sure the people we place actually stick around.
              </p>
              
              <div className="bg-paper text-ink border-4 border-tangerine p-6 md:p-8 brutalist-shadow">
                <h3 className="font-bold text-[20px] md:text-[24px] uppercase mb-4 text-tangerine">What end-to-end recruitment covers:</h3>
                <ul className="space-y-3 font-medium text-[16px]">
                  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tangerine mt-1">check_box</span> Hiring needs analysis and role briefing</li>
                  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tangerine mt-1">check_box</span> Job description creation and employer branding support</li>
                  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tangerine mt-1">check_box</span> Multi-channel sourcing &mdash; job boards, LinkedIn, referrals, direct outreach</li>
                  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tangerine mt-1">check_box</span> ATS management and candidate database building</li>
                  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tangerine mt-1">check_box</span> Resume screening and competency-based shortlisting</li>
                  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tangerine mt-1">check_box</span> Structured interview scheduling and coordination</li>
                  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tangerine mt-1">check_box</span> Skills assessments and background verification</li>
                  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tangerine mt-1">check_box</span> Offer management, negotiation support and documentation</li>
                  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tangerine mt-1">check_box</span> Onboarding support and first-30-day check-ins</li>
                  <li className="flex items-start gap-3"><span className="material-symbols-outlined text-tangerine mt-1">check_box</span> MIS reporting and recruitment analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Sectors & Roles We Hire For */}
        <section className="py-20 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-ink-b-2">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display-xl-mobile text-display-xl-mobile md:font-display-xl md:text-display-xl uppercase mb-12 md:mb-20 text-center">
              Sectors &amp; Roles <span className="text-tangerine">We Hire For</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
              <div className="border-t-4 border-ink pt-6">
                <h3 className="text-[24px] uppercase font-black mb-4">Information Technology &amp; Technology Services</h3>
                <ul className="list-disc pl-5 space-y-2 text-[16px] leading-[1.5]">
                  <li>Software Developers &mdash; Frontend, Backend, Full-Stack</li>
                  <li>Mobile App Developers &mdash; iOS, Android, React Native, Flutter</li>
                  <li>Data Scientists, Data Engineers and Business Intelligence Analysts</li>
                  <li>Cloud Engineers, DevOps and Site Reliability Engineers</li>
                  <li>Cybersecurity Analysts, Architects and Penetration Testers</li>
                  <li>QA Engineers and Test Automation Leads</li>
                  <li>Product Managers and Technical Program Managers</li>
                  <li>UI/UX Designers and Product Designers</li>
                  <li>3D Modelling Artists, Motion Designers and Creative Technologists</li>
                  <li>CTO, VP Engineering and Technology Leadership</li>
                </ul>
              </div>
              <div className="border-t-4 border-ink pt-6">
                <h3 className="text-[24px] uppercase font-black mb-4">Healthcare &amp; Medical</h3>
                <ul className="list-disc pl-5 space-y-2 text-[16px] leading-[1.5]">
                  <li>Doctors &mdash; General Physicians, Specialists, Consultants</li>
                  <li>RMOs (Resident Medical Officers) and JMOs</li>
                  <li>Nursing Staff &mdash; ICU, OT, Ward Nurses</li>
                  <li>Paramedical and Allied Health Professionals</li>
                  <li>Hospital Administrators and Healthcare Operations</li>
                  <li>Pharmacists and Lab Technicians</li>
                  <li>BDMs</li>
                </ul>
              </div>
              <div className="border-t-4 border-ink pt-6">
                <h3 className="text-[24px] uppercase font-black mb-4">Finance, Banking &amp; Insurance (BFSI)</h3>
                <ul className="list-disc pl-5 space-y-2 text-[16px] leading-[1.5]">
                  <li>Relationship Managers, Branch Managers and Financial Advisors</li>
                  <li>Credit Analysts, Risk Managers and Compliance Officers</li>
                  <li>Investment Banking and Wealth Management Professionals</li>
                  <li>Insurance Sales, Underwriters and Claims Specialists</li>
                </ul>
              </div>
              <div className="border-t-4 border-ink pt-6">
                <h3 className="text-[24px] uppercase font-black mb-4">Sales, Marketing &amp; Business Development</h3>
                <ul className="list-disc pl-5 space-y-2 text-[16px] leading-[1.5]">
                  <li>BDRs, SDRs, Inside Sales Representatives</li>
                  <li>Key Account Managers and Enterprise Sales Executives</li>
                  <li>Digital Marketing Managers, SEO Specialists, Performance Marketers</li>
                  <li>Brand Managers, Content Strategists and Social Media Managers</li>
                </ul>
              </div>
              <div className="border-t-4 border-ink pt-6">
                <h3 className="text-[24px] uppercase font-black mb-4">Operations, Supply Chain &amp; Logistics</h3>
                <ul className="list-disc pl-5 space-y-2 text-[16px] leading-[1.5]">
                  <li>Operations Managers, Supply Chain Analysts and Logistics Coordinators</li>
                  <li>Warehouse Managers and Procurement Officers</li>
                  <li>Quality Assurance and Process Improvement Specialists</li>
                </ul>
              </div>
              <div className="border-t-4 border-ink pt-6">
                <h3 className="text-[24px] uppercase font-black mb-4">Human Resources</h3>
                <ul className="list-disc pl-5 space-y-2 text-[16px] leading-[1.5]">
                  <li>HR Managers, HR Business Partners and Talent Acquisition Specialists</li>
                  <li>L&amp;D Managers and Organisational Development Professionals</li>
                  <li>Payroll Specialists and HR Operations</li>
                </ul>
              </div>
              <div className="border-t-4 border-ink pt-6 md:col-span-2">
                <h3 className="text-[24px] uppercase font-black mb-4">Other Domains</h3>
                <ul className="list-disc pl-5 space-y-2 text-[16px] leading-[1.5] md:columns-2">
                  <li>Legal &mdash; Corporate Lawyers, Compliance Managers, Contract Specialists</li>
                  <li>BPO / KPO / BPM</li>
                  <li>Finance &amp; Accounts &mdash; CFOs, Financial Controllers, CA/CPA professionals</li>
                  <li>Real Estate &mdash; Sales Managers, Site Engineers, Project Coordinators</li>
                  <li>Hospitality &mdash; General Managers, F&amp;B Managers, Front Office Leads</li>
                  <li>Manufacturing &mdash; Plant Heads, Production Managers, Quality Engineers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Specialised Hiring Solutions */}
        <section className="py-20 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-ink border-ink-b-2 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-[30vw] font-display-xl text-surface-container-lowest opacity-5 whitespace-nowrap pointer-events-none select-none">
            SOLUTIONS
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
               <div className="bg-tangerine border-4 border-ink p-8 brutalist-shadow">
                 <h3 className="text-[28px] uppercase font-black mb-4 leading-tight">Campus Placement Drives</h3>
                 <p className="mb-6 text-[16px] leading-[1.5]">We support educational institutions and companies running structured campus placement programmes, from pre-placement talks and aptitude assessments through to final placement coordination. We connect fresh graduates with companies building their early-career pipeline, and help businesses build talent pipelines from institutions that match their culture and requirements.</p>
                 <ul className="list-disc pl-5 space-y-2 text-[16px] leading-[1.5] font-bold">
                   <li>Pre-placement talk coordination with companies</li>
                   <li>Assessment design and shortlisting support</li>
                   <li>Interview scheduling and logistics management</li>
                   <li>Offer coordination and joining formalities support</li>
                   <li>Bulk hiring drives for IT &amp; Non-IT, and service sector companies</li>
                 </ul>
               </div>
               <div className="bg-surface-container-lowest border-4 border-ink p-8 brutalist-shadow">
                 <h3 className="text-[28px] uppercase font-black mb-4 leading-tight">High-Volume &amp; Bulk Hiring</h3>
                 <p className="mb-6 text-[16px] leading-[1.5]">When a business needs to scale fast, opening a new location, launching a new product line, or expanding a BPO operation, our bulk hiring team deploys immediately. We&apos;ve managed large-scale recruitment drives for domestic and international voice and chat processes, handling everything from sourcing to onboarding documentation.</p>
                 <ul className="list-disc pl-5 space-y-2 text-[16px] leading-[1.5] font-bold">
                   <li>Rapid deployment for 20 to 500+ positions</li>
                   <li>Multi-city sourcing and screening drives</li>
                   <li>SLA-driven delivery with daily progress reporting</li>
                   <li>Offer-to-joining tracking and attrition support</li>
                 </ul>
               </div>
               <div className="bg-paper border-4 border-ink p-8 brutalist-shadow">
                 <h3 className="text-[28px] uppercase font-black mb-4 leading-tight">Contract &amp; Flexible Staffing</h3>
                 <p className="mb-6 text-[16px] leading-[1.5]">Not every hire needs to be permanent. When demand spikes or a project needs specialised skills for a defined period, our staffing team provides contract professionals, temporary placements and project-based workforce solutions.</p>
                 <ul className="list-disc pl-5 space-y-2 text-[16px] leading-[1.5] font-bold">
                   <li>Contract staffing for short-term and long-term projects</li>
                   <li>Contract-to-permanent arrangements for trial assessments</li>
                   <li>Payroll management and compliance support for contract staff</li>
                   <li>RPO (Recruitment Process Outsourcing) for companies scaling rapidly</li>
                 </ul>
               </div>
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-20 md:py-section-gap px-margin-mobile md:px-margin-desktop bg-tangerine border-ink-b-2 relative grid-bg">
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <path className="dashed-path" d="M 100 100 Q 300 300 500 100 T 900 300" fill="none" stroke="#000" strokeWidth="4"></path>
            </svg>
          </div>
          <div className="text-center mb-12 md:mb-24 relative z-10">
            <h2 className="font-display-xl-mobile text-display-xl-mobile md:font-display-xl md:text-display-xl text-ink uppercase">
              How We <br /><span className="text-paper italic">Recruit</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 relative z-10">
            <div className="bg-surface-container-lowest border-4 border-ink p-8 brutalist-shadow relative group">
              <span className="bg-tangerine border-2 border-ink px-4 py-2 text-label-mono font-label-mono uppercase font-bold mb-4 md:mb-6 inline-block">STEP 1</span>
              <h3 className="text-[24px] font-black mb-3 md:mb-4 uppercase">Requirement Briefing</h3>
              <p className="font-body-md text-[16px] leading-[1.5]">We spend time understanding the role, the team, the culture and the non-negotiables before any sourcing begins.</p>
            </div>
            <div className="bg-surface-container-lowest border-4 border-ink p-8 brutalist-shadow relative group">
              <span className="bg-tangerine border-2 border-ink px-4 py-2 text-label-mono font-label-mono uppercase font-bold mb-4 md:mb-6 inline-block">STEP 2</span>
              <h3 className="text-[24px] font-black mb-3 md:mb-4 uppercase">Talent Mapping</h3>
              <p className="font-body-md text-[16px] leading-[1.5]">We map the candidate landscape, active and passive, for people who match your spec, not just whoever&apos;s available.</p>
            </div>
            <div className="bg-surface-container-lowest border-4 border-ink p-8 brutalist-shadow relative group">
              <span className="bg-tangerine border-2 border-ink px-4 py-2 text-label-mono font-label-mono uppercase font-bold mb-4 md:mb-6 inline-block">STEP 3</span>
              <h3 className="text-[24px] font-black mb-3 md:mb-4 uppercase">Screening &amp; Assessment</h3>
              <p className="font-body-md text-[16px] leading-[1.5]">Shortlisted candidates go through structured interviews, skills assessments and background verification before we present them.</p>
            </div>
            <div className="bg-surface-container-lowest border-4 border-ink p-8 brutalist-shadow relative group">
              <span className="bg-tangerine border-2 border-ink px-4 py-2 text-label-mono font-label-mono uppercase font-bold mb-4 md:mb-6 inline-block">STEP 4</span>
              <h3 className="text-[24px] font-black mb-3 md:mb-4 uppercase">Curated Presentation</h3>
              <p className="font-body-md text-[16px] leading-[1.5]">You get detailed candidate profiles with assessment summaries, not a stack of resumes.</p>
            </div>
            <div className="bg-surface-container-lowest border-4 border-ink p-8 brutalist-shadow relative group">
              <span className="bg-tangerine border-2 border-ink px-4 py-2 text-label-mono font-label-mono uppercase font-bold mb-4 md:mb-6 inline-block">STEP 5</span>
              <h3 className="text-[24px] font-black mb-3 md:mb-4 uppercase">Coordination &amp; Offer Support</h3>
              <p className="font-body-md text-[16px] leading-[1.5]">We manage scheduling, candidate communication and offer negotiation to keep the process moving.</p>
            </div>
            <div className="bg-surface-container-lowest border-4 border-ink p-8 brutalist-shadow relative group">
              <span className="bg-tangerine border-2 border-ink px-4 py-2 text-label-mono font-label-mono uppercase font-bold mb-4 md:mb-6 inline-block">STEP 6</span>
              <h3 className="text-[24px] font-black mb-3 md:mb-4 uppercase">Post-Placement Follow-Up</h3>
              <p className="font-body-md text-[16px] leading-[1.5]">We check in after placement to make sure both client and candidate are settled, a hire is only a success if it lasts.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <CallToAction 
          title="Tell Us Who You're Looking For"
          description="We are ready to find your next great hire. Submit your hiring brief and let's get to work."
          buttonText="Submit a Hiring Brief"
          buttonHref="/contact"
        />
      </main>
    </div>
  );
}
