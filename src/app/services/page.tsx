import { type Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PageHero } from "~/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Digital Marketing & Recruitment Services | Ads Mini",
  description:
    "At AdsMini, we bring Digital Marketing and Recruitment together to help businesses scale with confidence. Grow faster, hire smarter.",
};

export default function ServicesPage() {
  return (
    <div className="bg-paper text-ink min-h-screen selection:bg-tangerine selection:text-ink">
      <main className="relative w-full">
        {/* Page Hero Component */}
        <PageHero
          label="Digital Marketing & Recruitment"
          title={
            <>
              Grow Faster. <br />
              <span className="text-tangerine">Hire Smarter.</span>
            </>
          }
        >
          <div className="space-y-4">
            <p className="text-[18px] md:text-[24px] font-bold text-ink leading-relaxed">
              Business growth isn’t driven by marketing alone—or hiring alone. It happens when the right strategy meets the right people.
            </p>
            <p className="text-[16px] md:text-[20px] font-medium leading-relaxed opacity-90">
              At AdsMini, we bring Digital Marketing and Recruitment together to help businesses scale with confidence. Whether you’re looking to attract more customers, build a stronger team, or accelerate your next phase of growth, we provide the expertise and execution to make it happen.
            </p>
          </div>
        </PageHero>

        {/* Section 1: One Partner. Two Growth Engines. */}
        <section className="py-12 sm:py-16 md:py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-lowest border-b-4 border-ink">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 sm:mb-14">
              <span className="font-label-mono text-xs sm:text-sm text-tangerine font-bold tracking-widest uppercase block mb-2">
                INTEGRATED APPROACH
              </span>
              <h2 className="text-[clamp(28px,5vw,56px)] font-black uppercase text-ink leading-[0.95]">
                One Partner. <br className="hidden sm:block" />Two Growth Engines.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
              {/* Engine 1: Digital Marketing */}
              <div className="bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow flex flex-col justify-between h-full relative">
                {/* Doodle 4: Chubby Character Sitting on Orange Sphere */}
                <div className="hidden lg:block absolute -top-16 -right-6 z-20 w-32 h-36 pointer-events-none float-animation">
                  <Image
                    src="/doodle4.png"
                    alt="Chubby Sitting Doodle"
                    width={140}
                    height={160}
                    className="object-contain drop-shadow-[3px_3px_0_#000]"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-center mb-6 pb-4 border-b-4 border-ink">
                    <span className="font-label-mono text-xs sm:text-sm font-bold bg-tangerine text-ink border-2 border-ink px-3 py-1 uppercase brutalist-shadow-sm">
                      ENGINE 01
                    </span>
                    <span className="material-symbols-outlined text-3xl sm:text-4xl text-ink">
                      campaign
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-ink mb-4 sm:mb-6">
                    Digital Marketing
                  </h3>
                  
                  <p className="text-base sm:text-lg font-bold text-ink/90 leading-relaxed mb-6 sm:mb-8">
                    Build a stronger online presence, connect with the right audience, and turn clicks into customers through data-driven marketing strategies designed to deliver measurable business growth.
                  </p>
                </div>

                <div className="pt-6 border-t-4 border-ink">
                  <Link
                    href="/services/digital-marketing"
                    className="inline-flex items-center justify-center gap-2 bg-tangerine text-ink font-black text-sm sm:text-base uppercase border-3 border-ink px-6 py-3.5 shadow-[4px_4px_0_#000] hover:bg-tangerine/90 transition-all w-full sm:w-auto text-center"
                  >
                    <span>Explore Digital Marketing</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

              {/* Engine 2: Recruitment */}
              <div className="bg-ink text-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center mb-6 pb-4 border-b-4 border-surface-container-lowest">
                    <span className="font-label-mono text-xs sm:text-sm font-bold bg-tangerine text-ink border-2 border-ink px-3 py-1 uppercase brutalist-shadow-sm">
                      ENGINE 02
                    </span>
                    <span className="material-symbols-outlined text-3xl sm:text-4xl text-tangerine">
                      group_add
                    </span>
                  </div>
                  
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase text-tangerine mb-4 sm:mb-6">
                    Recruitment
                  </h3>
                  
                  <p className="text-base sm:text-lg font-bold text-surface-container-lowest/90 leading-relaxed mb-6 sm:mb-8">
                    Find the right talent without the hassle. Our recruitment specialists help businesses hire skilled professionals who align with their goals, culture, and long-term vision.
                  </p>
                </div>

                <div className="pt-6 border-t-4 border-surface-container-lowest">
                  <Link
                    href="/services/recruitment"
                    className="inline-flex items-center justify-center gap-2 bg-tangerine text-ink font-black text-sm sm:text-base uppercase border-3 border-ink px-6 py-3.5 shadow-[4px_4px_0_#FFF] hover:bg-tangerine/90 transition-all w-full sm:w-auto text-center"
                  >
                    <span>Explore Recruitment</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Why AdsMini? */}
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-tangerine border-b-4 border-ink">
          <div className="max-w-6xl mx-auto">
            <div className="bg-paper border-4 border-ink p-6 sm:p-10 md:p-14 shadow-[8px_8px_0_#000]">
              <div className="mb-6 sm:mb-10 border-b-4 border-ink pb-4 sm:pb-6">
                <span className="font-mono text-xs sm:text-sm font-bold text-tangerine tracking-widest uppercase block mb-2">
                  THE ADSMINI ADVANTAGE
                </span>
                <h2 className="text-[clamp(30px,5vw,60px)] font-black uppercase text-ink leading-[0.95]">
                  Why AdsMini?
                </h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-surface-container-lowest border-3 border-ink p-5 sm:p-8 shadow-[4px_4px_0_#000]">
                  <p className="text-base sm:text-xl font-bold text-ink leading-relaxed">
                    We believe growth should be simple. Instead of coordinating multiple agencies, partner with one team that understands both your market and your workforce.
                  </p>
                </div>
                
                <div className="bg-ink text-surface-container-lowest border-3 border-ink p-5 sm:p-8 shadow-[4px_4px_0_#000]">
                  <p className="text-base sm:text-xl font-bold text-paper leading-relaxed">
                    With a strategic approach, transparent communication, and a results-driven mindset, AdsMini helps businesses strengthen their brand, expand their reach, and build high-performing teams—all from a single trusted partner.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Call To Action */}
        <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-paper border-b-4 border-ink bg-grid-pattern">
          <div className="max-w-5xl mx-auto">
            <div className="bg-surface-container-lowest border-4 border-ink p-6 sm:p-10 md:p-14 shadow-[8px_8px_0_#000] text-center">
              <span className="font-mono text-xs sm:text-sm font-bold text-tangerine tracking-widest uppercase block mb-2 sm:mb-3">
                START YOUR JOURNEY
              </span>
              
              <h2 className="text-[clamp(28px,5vw,56px)] font-black uppercase text-ink leading-[0.95] mb-4 sm:mb-6">
                Let’s Build What’s Next
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl font-bold text-ink/90 leading-relaxed max-w-3xl mx-auto mb-6 sm:mb-8">
                Whether you’re launching a new business, expanding your operations, or preparing for your next stage of growth, AdsMini is ready to support your journey.
              </p>
              
              <div className="bg-tangerine border-3 border-ink p-4 sm:p-6 shadow-[4px_4px_0_#000] max-w-2xl mx-auto mb-8 sm:mb-10 transform -rotate-1">
                <p className="text-base sm:text-xl font-black text-ink">
                  Your next customer. Your next great hire. Your next milestone. It all starts here.
                </p>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-ink text-surface-container-lowest font-black text-base sm:text-lg uppercase border-3 border-ink px-8 py-4 shadow-[4px_4px_0_#F97316] w-full sm:w-auto text-center"
              >
                <span>Let’s Grow Together</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
