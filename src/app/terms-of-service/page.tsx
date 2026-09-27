import { type Metadata } from "next";
import { PageHero } from "~/components/ui/PageHero";
import { CallToAction } from "~/components/ui/CallToAction";
import { constructMetadata } from "~/lib/metadata";

export const metadata: Metadata = constructMetadata("/terms-of-service");

const sections = [
  { id: "about-ads-mini", number: "1", title: "About Ads Mini" },
  { id: "our-services", number: "2", title: "Our Services" },
  { id: "use-of-our-website", number: "3", title: "Use of Our Website" },
  { id: "client-engagements", number: "4", title: "Client Engagements" },
  { id: "candidate-recruitment-terms", number: "5", title: "Candidate & Recruitment Terms" },
  { id: "intellectual-property", number: "6", title: "Intellectual Property" },
  { id: "confidentiality", number: "7", title: "Confidentiality" },
  { id: "third-party-platforms-links", number: "8", title: "Third-Party Platforms & Links" },
  { id: "disclaimers", number: "9", title: "Disclaimers" },
  { id: "limitation-of-liability", number: "10", title: "Limitation of Liability" },
  { id: "indemnification", number: "11", title: "Indemnification" },
  { id: "governing-law-dispute-resolution", number: "12", title: "Governing Law & Dispute Resolution" },
  { id: "changes-to-these-terms", number: "13", title: "Changes to These Terms" },
  { id: "contact-us", number: "14", title: "Contact Us" },
];

export default function TermsOfServicePage() {
  return (
    <div className="bg-paper text-ink font-body-md selection:bg-tangerine selection:text-ink min-h-screen">
      {/* Hero Section */}
      <PageHero
        label="Legal &amp; Compliance"
        title={
          <>
            Terms of <span className="text-tangerine">Service.</span>
          </>
        }
      >
        <div className="space-y-4">
          <p className="font-label-mono text-[14px] md:text-[16px] text-ink/70 font-semibold uppercase tracking-wider">
            Last Updated: [Insert Date]
          </p>
          <p className="text-[18px] md:text-[22px] leading-relaxed font-medium">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the Ads Mini website and services, including our digital marketing services and recruitment services (together, the &ldquo;Services&rdquo;). By accessing our website or engaging us for any Service, you agree to be bound by these Terms. If you do not agree, please do not use our website or Services.
          </p>
        </div>
      </PageHero>

      {/* Main Content Area */}
      <div className="px-margin-mobile md:px-margin-desktop py-16 md:py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
          
          {/* Quick Jump Sidebar (Desktop) */}
          <aside className="hidden lg:block lg:col-span-4 sticky top-28 bg-surface-container-lowest border-4 border-ink p-6 brutalist-shadow">
            <h2 className="font-headline-md text-[18px] font-black uppercase mb-4 tracking-wider border-b-2 border-ink pb-2">
              Table of Contents
            </h2>
            <nav>
              <ul className="space-y-2 text-[13px] font-bold">
                {sections.map((sec) => (
                  <li key={sec.id}>
                    <a
                      href={`#${sec.id}`}
                      className="group flex items-center gap-2 hover:text-tangerine transition-colors py-1"
                    >
                      <span className="font-label-mono text-[11px] text-tangerine group-hover:text-ink font-bold w-5">
                        {sec.number.padStart(2, "0")}
                      </span>
                      <span className="leading-snug">{sec.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Policy Document Content */}
          <main className="lg:col-span-8 space-y-8 md:space-y-10">
            
            {/* Section 1 */}
            <section
              id="about-ads-mini"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  01
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  1. About Ads Mini
                </h2>
              </div>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-ink/90 font-medium">
                Ads Mini is a full-service digital marketing and recruitment agency helping businesses grow their online presence and build the right teams. References to &ldquo;we,&rdquo; &ldquo;us,&rdquo; and &ldquo;our&rdquo; refer to Ads Mini. References to &ldquo;you&rdquo; refer to any visitor, client, or candidate using our website or Services.
              </p>
            </section>

            {/* Section 2 */}
            <section
              id="our-services"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  02
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  2. Our Services
                </h2>
              </div>

              <div className="space-y-6">
                {/* Digital Marketing Services */}
                <div className="border-2 border-ink p-5 bg-paper/60">
                  <h3 className="font-headline-md text-[18px] md:text-[20px] font-black uppercase mb-3 text-ink">
                    Digital Marketing Services
                  </h3>
                  <p className="text-[15px] md:text-[17px] leading-relaxed text-ink/90 font-medium">
                    We provide SEO, paid media (PPC/SEM), social media marketing, content marketing, personal branding, analytics and tracking, and web development services. The specific scope, deliverables, timelines, and fees for any engagement will be set out in a separate proposal, statement of work, or service agreement signed between Ads Mini and the client. In the event of any conflict between these Terms and a signed service agreement, the signed agreement will govern for that engagement.
                  </p>
                </div>

                {/* Recruitment Services */}
                <div className="border-2 border-ink p-5 bg-paper/60">
                  <h3 className="font-headline-md text-[18px] md:text-[20px] font-black uppercase mb-3 text-ink">
                    Recruitment Services
                  </h3>
                  <p className="text-[15px] md:text-[17px] leading-relaxed text-ink/90 font-medium">
                    We provide end-to-end recruitment, executive search, bulk hiring, campus placement, and contract staffing services to hiring companies, and we assist job candidates in finding suitable roles. Recruitment services are provided on a reasonable-efforts basis. Ads Mini does not guarantee that any specific role will be filled, that any candidate will receive or accept an offer, or that any placement will result in long-term employment.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section
              id="use-of-our-website"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  03
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  3. Use of Our Website
                </h2>
              </div>
              <ul className="space-y-4 text-[15px] md:text-[17px] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>You agree to use our website only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use of, the site by anyone else.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>You agree not to attempt to gain unauthorised access to any part of our website, servers, or systems, or to introduce viruses, malware, or other harmful material.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>You agree not to scrape, copy, or reproduce content from our website without our prior written consent, except as permitted for normal personal or business use of the site.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>Any information you submit through our contact forms or during onboarding must be accurate and not misleading.</span>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section
              id="client-engagements"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  04
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  4. Client Engagements
                </h2>
              </div>
              <ul className="space-y-4 text-[15px] md:text-[17px] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>Any engagement for digital marketing or recruitment services will be governed by a separate written proposal, contract, or statement of work that sets out scope, fees, payment terms, and timelines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>Fees are payable as agreed in the relevant contract. Late payments may result in suspension of services and/or interest charges as specified in that contract.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>Either party may terminate an engagement in accordance with the notice period and terms set out in the specific service agreement.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>Marketing performance figures (traffic, leads, conversions, ROAS, etc.) shared in our proposals or case studies are historical results for specific clients and are not guarantees of future performance for any new engagement, as results depend on factors including market conditions, budget, industry, and platform algorithm changes outside our control.</span>
                </li>
              </ul>
            </section>

            {/* Section 5 */}
            <section
              id="candidate-recruitment-terms"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  05
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  5. Candidate &amp; Recruitment Terms
                </h2>
              </div>
              <ul className="space-y-4 text-[15px] md:text-[17px] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>By submitting your resume or applying through Ads Mini, you confirm that the information you provide is true and accurate to the best of your knowledge.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>Ads Mini acts as an intermediary between candidates and hiring companies. Final hiring decisions, including interview outcomes, offers, and compensation, are made solely by the hiring company.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>Ads Mini does not charge job candidates any fee for recruitment services. If anyone claiming to represent Ads Mini asks you for payment in connection with a job opportunity, please contact us immediately, as this would not be a legitimate request from our team.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>You may withdraw your application or request removal of your resume from our database at any time by contacting us.</span>
                </li>
              </ul>
            </section>

            {/* Section 6 */}
            <section
              id="intellectual-property"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  06
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  6. Intellectual Property
                </h2>
              </div>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-ink/90 font-medium">
                All content on the Ads Mini website, including text, graphics, logos, illustrations, and design elements, is the property of Ads Mini or its licensors and is protected by applicable intellectual property laws. Deliverables created for clients as part of a paid engagement (such as campaign creatives, ad copy, or website builds) will transfer to the client upon full payment, as specified in the relevant service agreement, except for any pre-existing tools, templates, or frameworks that remain the property of Ads Mini.
              </p>
            </section>

            {/* Section 7 */}
            <section
              id="confidentiality"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  07
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  7. Confidentiality
                </h2>
              </div>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-ink/90 font-medium">
                Both Ads Mini and our clients may share confidential business information in the course of an engagement, including marketing data, ad account access, and candidate information. Each party agrees to keep such information confidential and use it only for the purposes of the engagement, except where disclosure is required by law.
              </p>
            </section>

            {/* Section 8 */}
            <section
              id="third-party-platforms-links"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  08
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  8. Third-Party Platforms &amp; Links
                </h2>
              </div>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-ink/90 font-medium">
                Our Services may involve the use of third-party platforms such as Google, Meta, LinkedIn, and WhatsApp. Your use of these platforms is also subject to their respective terms of service. Our website may also contain links to third-party websites; we are not responsible for the content, policies, or practices of those external sites.
              </p>
            </section>

            {/* Section 9 */}
            <section
              id="disclaimers"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  09
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  9. Disclaimers
                </h2>
              </div>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-ink/90 font-medium">
                Our Services are provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. While we work diligently and in good faith to deliver strong results for every client and candidate, we do not guarantee specific marketing outcomes, search rankings, campaign performance, or recruitment placements, as these depend on factors beyond our control, including third-party platforms, market conditions, and decisions made by clients or hiring companies.
              </p>
            </section>

            {/* Section 10 */}
            <section
              id="limitation-of-liability"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  10
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  10. Limitation of Liability
                </h2>
              </div>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-ink/90 font-medium">
                To the maximum extent permitted by law, Ads Mini shall not be liable for any indirect, incidental, special, or consequential damages arising out of or related to your use of our website or Services, including loss of profits, data, or business opportunities. Our total liability for any claim arising from a paid engagement shall not exceed the fees paid by the client for the specific service giving rise to the claim, except where such limitation is not permitted by applicable law.
              </p>
            </section>

            {/* Section 11 */}
            <section
              id="indemnification"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  11
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  11. Indemnification
                </h2>
              </div>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-ink/90 font-medium">
                You agree to indemnify and hold Ads Mini harmless from any claims, damages, liabilities, and expenses arising from your misuse of our website or Services, your breach of these Terms, or any inaccurate information you provide to us.
              </p>
            </section>

            {/* Section 12 */}
            <section
              id="governing-law-dispute-resolution"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  12
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  12. Governing Law &amp; Dispute Resolution
                </h2>
              </div>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-ink/90 font-medium">
                These Terms are governed by the laws of India. Any disputes arising out of or in connection with these Terms or our Services shall first be attempted to be resolved amicably through good-faith discussion between the parties, and failing that, shall be subject to the exclusive jurisdiction of the courts at Indore, Madhya Pradesh.
              </p>
            </section>

            {/* Section 13 */}
            <section
              id="changes-to-these-terms"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  13
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  13. Changes to These Terms
                </h2>
              </div>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-ink/90 font-medium">
                We may update these Terms from time to time to reflect changes in our Services or for legal and operational reasons. We will post the updated version on this page with a revised &ldquo;Last Updated&rdquo; date. Continued use of our website or Services after changes take effect constitutes your acceptance of the updated Terms.
              </p>
            </section>

            {/* Section 14 */}
            <section
              id="contact-us"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  14
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  14. Contact Us
                </h2>
              </div>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-ink/90 mb-6 font-medium">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="bg-paper border-2 border-ink p-5 sm:p-6 space-y-3 font-bold text-[15px] md:text-[17px]">
                <div className="flex items-center gap-3">
                  <span className="font-label-mono uppercase text-secondary text-[12px] tracking-wider w-16">Email:</span>
                  <a
                    href="mailto:info@adsmini.com"
                    className="hover:text-tangerine underline underline-offset-4 decoration-2 transition-colors"
                  >
                    info@adsmini.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-label-mono uppercase text-secondary text-[12px] tracking-wider w-16">Phone:</span>
                  <a
                    href="tel:+918519022399"
                    className="hover:text-tangerine underline underline-offset-4 decoration-2 transition-colors"
                  >
                    +91 8519022399
                  </a>
                </div>
              </div>
            </section>

          </main>
        </div>
      </div>

      {/* Call to Action Section */}
      <CallToAction
        title="Have Questions About Our Terms of Service?"
        description="Reach out to our team directly. We are happy to clarify any questions regarding our terms, services, or client engagements."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </div>
  );
}
