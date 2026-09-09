import { type Metadata } from "next";
import { PageHero } from "~/components/ui/PageHero";
import { CallToAction } from "~/components/ui/CallToAction";

export const metadata: Metadata = {
  title: "Privacy Policy | Ads Mini",
  description:
    "Learn how Ads Mini collects, uses, discloses, and protects your information as a website visitor, marketing client, or job candidate.",
};

const sections = [
  { id: "who-this-policy-applies-to", number: "1", title: "Who This Policy Applies To" },
  { id: "information-we-collect", number: "2", title: "Information We Collect" },
  { id: "how-we-use-your-information", number: "3", title: "How We Use Your Information" },
  { id: "how-we-share-information", number: "4", title: "How We Share Information" },
  { id: "cookies-tracking-technologies", number: "5", title: "Cookies & Tracking Technologies" },
  { id: "data-retention", number: "6", title: "Data Retention" },
  { id: "data-security", number: "7", title: "Data Security" },
  { id: "your-rights", number: "8", title: "Your Rights" },
  { id: "international-data-transfers", number: "9", title: "International Data Transfers" },
  { id: "childrens-privacy", number: "10", title: "Children's Privacy" },
  { id: "contact-us", number: "11", title: "Contact Us" },
  { id: "changes-to-this-policy", number: "12", title: "Changes to This Policy" },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-paper text-ink font-body-md selection:bg-tangerine selection:text-ink min-h-screen">
      {/* Hero Section */}
      <PageHero
        label="Legal &amp; Compliance"
        title={
          <>
            Privacy <span className="text-tangerine">Policy.</span>
          </>
        }
      >
        <div className="space-y-4">
          <p className="font-label-mono text-[14px] md:text-[16px] text-ink/70 font-semibold uppercase tracking-wider">
            Last Updated: [Insert Date]
          </p>
          <p className="text-[18px] md:text-[22px] leading-relaxed font-medium">
            Ads Mini (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our,&rdquo; or &ldquo;Ads Mini&rdquo;) is a full-service digital marketing and recruitment agency. This Privacy Policy explains how we collect, use, disclose, and protect information when you visit our website, engage us for digital marketing services, apply for a role through our recruitment services, or otherwise interact with us. By using our website or services, you agree to the practices described in this policy.
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
              id="who-this-policy-applies-to"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  01
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  1. Who This Policy Applies To
                </h2>
              </div>
              <p className="text-[16px] md:text-[18px] leading-relaxed mb-6 font-medium text-ink/90">
                This policy applies to three broad groups of people, and different parts of it will matter more depending on which group you fall into:
              </p>
              <ul className="space-y-4 text-[15px] md:text-[17px] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="font-bold text-ink">Website Visitors</strong> &mdash; anyone browsing adsmini.com or our web app, including through contact forms and general enquiries.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="font-bold text-ink">Marketing Clients</strong> &mdash; businesses that engage Ads Mini for SEO, paid media, social media, content, or related digital marketing services, and the individuals within those businesses we correspond with.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <div>
                    <strong className="font-bold text-ink">Job Candidates</strong> &mdash; individuals who apply for a role we are recruiting for, submit a resume to us, or are sourced by our recruitment team on behalf of a hiring client.
                  </div>
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section
              id="information-we-collect"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  02
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  2. Information We Collect
                </h2>
              </div>

              <div className="space-y-6">
                {/* General Information */}
                <div className="border-2 border-ink p-5 bg-paper/60">
                  <h3 className="font-headline-md text-[18px] md:text-[20px] font-black uppercase mb-3 text-ink">
                    General Information
                  </h3>
                  <ul className="space-y-3 text-[15px] md:text-[17px] leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-tangerine border border-ink mt-2 flex-shrink-0"></span>
                      <span>Contact details you submit through our website &mdash; name, company name, email address, phone number, and the content of your enquiry.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-tangerine border border-ink mt-2 flex-shrink-0"></span>
                      <span>Technical information collected automatically &mdash; IP address, browser type, device type, pages visited, and time spent on the site, typically through cookies and analytics tools.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-tangerine border border-ink mt-2 flex-shrink-0"></span>
                      <span>Communication records &mdash; emails, call notes, and messages exchanged with our team.</span>
                    </li>
                  </ul>
                </div>

                {/* Information From Marketing Clients */}
                <div className="border-2 border-ink p-5 bg-paper/60">
                  <h3 className="font-headline-md text-[18px] md:text-[20px] font-black uppercase mb-3 text-ink">
                    Information From Marketing Clients
                  </h3>
                  <ul className="space-y-3 text-[15px] md:text-[17px] leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-tangerine border border-ink mt-2 flex-shrink-0"></span>
                      <span>Business information necessary to run campaigns &mdash; company details, target audience data, ad account access (Google Ads, Meta Business Manager, LinkedIn Campaign Manager, etc.), website analytics access, and billing information.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-tangerine border border-ink mt-2 flex-shrink-0"></span>
                      <span>Any customer or audience data you provide to us for the purpose of running campaigns on your behalf, which you confirm you are lawfully entitled to share with us.</span>
                    </li>
                  </ul>
                </div>

                {/* Information From Job Candidates */}
                <div className="border-2 border-ink p-5 bg-paper/60">
                  <h3 className="font-headline-md text-[18px] md:text-[20px] font-black uppercase mb-3 text-ink">
                    Information From Job Candidates
                  </h3>
                  <ul className="space-y-3 text-[15px] md:text-[17px] leading-relaxed">
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-tangerine border border-ink mt-2 flex-shrink-0"></span>
                      <span>Resume and CV details &mdash; name, contact information, work history, education, skills, certifications, and references.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-tangerine border border-ink mt-2 flex-shrink-0"></span>
                      <span>Information gathered during screening &mdash; interview notes, assessment results, and background verification details, where applicable.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-tangerine border border-ink mt-2 flex-shrink-0"></span>
                      <span>Any additional information you choose to share with us during the recruitment process, such as salary expectations or notice period.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section
              id="how-we-use-your-information"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  03
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  3. How We Use Your Information
                </h2>
              </div>
              <ul className="space-y-3 text-[15px] md:text-[17px] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>To respond to enquiries and provide the services you or your business have requested.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>To plan, execute, and report on digital marketing campaigns on behalf of our clients.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>To match job candidates with relevant roles and share candidate profiles with hiring clients for genuine recruitment purposes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>To communicate with you about your enquiry, campaign, or application status.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>To improve our website, services, and internal processes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>To comply with legal obligations and enforce our agreements.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>To send occasional updates or marketing communications, where you have consented to receive them, you may opt out at any time.</span>
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section
              id="how-we-share-information"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  04
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  4. How We Share Information
                </h2>
              </div>
              <p className="text-[16px] md:text-[18px] leading-relaxed mb-6 font-bold text-ink">
                We do not sell personal information. We share information only in the following circumstances:
              </p>
              <div className="space-y-4 text-[15px] md:text-[17px] leading-relaxed">
                <div className="border-l-4 border-tangerine pl-4 py-1">
                  <strong className="font-bold text-ink">With Hiring Clients</strong> &mdash; If you are a job candidate, we share your resume and relevant profile information with the specific hiring company or companies you are being considered for, so they can evaluate your candidacy. We do not share your information with third-party recruiters or unrelated companies without your knowledge.
                </div>
                <div className="border-l-4 border-tangerine pl-4 py-1">
                  <strong className="font-bold text-ink">With Service Providers</strong> &mdash; We use trusted third-party platforms to deliver our services, including Google Ads, Meta Business Suite, LinkedIn Marketing Solutions, Google Analytics (GA4), WhatsApp Business, and similar advertising, analytics, and communication tools. These providers process data under their own privacy policies and applicable data processing agreements.
                </div>
                <div className="border-l-4 border-tangerine pl-4 py-1">
                  <strong className="font-bold text-ink">For Legal Reasons</strong> &mdash; We may disclose information where required by law, regulation, legal process, or governmental request, or to protect the rights, property, or safety of Ads Mini, our clients, or others.
                </div>
                <div className="border-l-4 border-tangerine pl-4 py-1">
                  <strong className="font-bold text-ink">Business Transfers</strong> &mdash; If Ads Mini is involved in a merger, acquisition, or sale of assets, information may be transferred as part of that transaction, subject to appropriate confidentiality protections.
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section
              id="cookies-tracking-technologies"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  05
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  5. Cookies &amp; Tracking Technologies
                </h2>
              </div>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-ink/90">
                Our website uses cookies and similar technologies to understand how visitors use our site, remember preferences, and measure the performance of our own marketing campaigns. This may include analytics cookies (such as Google Analytics), advertising cookies (such as Meta Pixel and Google Ads remarketing tags), and functional cookies necessary for the site to work correctly. You can control or disable cookies through your browser settings, though some site features may not work as intended if you do.
              </p>
            </section>

            {/* Section 6 */}
            <section
              id="data-retention"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  06
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  6. Data Retention
                </h2>
              </div>
              <ul className="space-y-4 text-[15px] md:text-[17px] leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>Marketing client data is retained for the duration of our engagement and for a reasonable period afterward, for reporting, billing, and legal record-keeping purposes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>Job candidate data is retained for the duration of the relevant hiring process and, with your consent, may be retained afterward so we can consider you for future roles. You may request deletion of your data at any time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>General website enquiry data is retained only as long as reasonably necessary to respond to and follow up on your enquiry.</span>
                </li>
              </ul>
            </section>

            {/* Section 7 */}
            <section
              id="data-security"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  07
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  7. Data Security
                </h2>
              </div>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-ink/90">
                We use reasonable administrative, technical, and physical safeguards designed to protect personal information from unauthorised access, disclosure, alteration, or destruction, including restricted access to candidate and client records, secure storage systems, and confidentiality obligations for our team. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Section 8 */}
            <section
              id="your-rights"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  08
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  8. Your Rights
                </h2>
              </div>
              <p className="text-[16px] md:text-[18px] leading-relaxed mb-6 font-medium text-ink/90">
                Depending on your location and applicable law, you may have the right to:
              </p>
              <ul className="space-y-3 text-[15px] md:text-[17px] leading-relaxed mb-6">
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>Access the personal information we hold about you.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>Request correction of inaccurate or incomplete information.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>Request deletion of your personal information, subject to any legal or contractual obligations that require us to retain it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>Withdraw consent to marketing communications at any time.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 bg-ink mt-2 flex-shrink-0"></span>
                  <span>Object to or restrict certain uses of your information.</span>
                </li>
              </ul>
              <p className="text-[15px] md:text-[17px] leading-relaxed font-bold border-t-2 border-ink pt-4">
                To exercise any of these rights, please contact us using the details in Section 11 below.
              </p>
            </section>

            {/* Section 9 */}
            <section
              id="international-data-transfers"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  09
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  9. International Data Transfers
                </h2>
              </div>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-ink/90">
                As we work with clients and candidates across India and internationally, your information may be processed in countries other than your own, including where our service providers operate. Where this happens, we take reasonable steps to ensure your information continues to receive an appropriate level of protection.
              </p>
            </section>

            {/* Section 10 */}
            <section
              id="childrens-privacy"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  10
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  10. Children&apos;s Privacy
                </h2>
              </div>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-ink/90">
                Our website and services are not directed at individuals under the age of 18. We do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us so we can remove it.
              </p>
            </section>

            {/* Section 11 */}
            <section
              id="contact-us"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  11
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  11. Contact Us
                </h2>
              </div>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-ink/90 mb-6">
                If you have questions about this Privacy Policy or how your information is handled, please contact us:
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

            {/* Section 12 */}
            <section
              id="changes-to-this-policy"
              className="scroll-mt-28 bg-surface-container-lowest border-4 border-ink p-6 sm:p-8 md:p-10 brutalist-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-label-mono text-[14px] bg-tangerine border-2 border-ink px-2.5 py-0.5 font-black">
                  12
                </span>
                <h2 className="font-headline-md text-[22px] sm:text-[26px] md:text-[30px] font-black uppercase text-ink">
                  12. Changes to This Policy
                </h2>
              </div>
              <p className="text-[15px] md:text-[17px] leading-relaxed text-ink/90">
                We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. We will post the updated version on this page with a revised &ldquo;Last Updated&rdquo; date. We encourage you to review this policy periodically.
              </p>
            </section>

          </main>
        </div>
      </div>

      {/* Call to Action Section */}
      <CallToAction
        title="Have Questions About Our Privacy Policy?"
        description="Reach out to our team directly. We are happy to answer any questions about how we handle your data."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />
    </div>
  );
}
