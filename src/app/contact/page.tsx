"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "~/components/ui/button";
import { env } from "~/env";
import { interestOptions, contactFormSchema, type ContactFormData } from "~/lib/contact-schema";

export default function ContactPage() {
  const [selectedInterest, setSelectedInterest] = useState<(typeof interestOptions)[number]>("Digital Marketing");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Form State
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    selectedInterest: "Digital Marketing",
    requirement: "",
    source: "",
    website_url: "",
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [apiError, setApiError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error for field when user types
    if (fieldErrors[field]) {
      setFieldErrors((prev) => {
        const copy = { ...prev };
        delete copy[field];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError(null);
    setFieldErrors({});

    const dataToValidate: ContactFormData = {
      ...formData,
      selectedInterest,
    };

    // Client-side Zod validation
    const validation = contactFormSchema.safeParse(dataToValidate);
    if (!validation.success) {
      const errors: Record<string, string> = {};
      validation.error.errors.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0].toString()] = err.message;
        }
      });
      setFieldErrors(errors);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToValidate),
      });

      const resData = (await response.json()) as {
        success?: boolean;
        fieldErrors?: Record<string, string>;
        error?: string;
      };

      if (!response.ok || !resData.success) {
        if (resData.fieldErrors) {
          setFieldErrors(resData.fieldErrors);
        }
        setApiError(resData.error ?? "Failed to submit message. Please try again.");
        setIsSubmitting(false);
        return;
      }

      // Success
      setIsSuccess(true);
      setIsSubmitting(false);
      setFormData({
        fullName: "",
        companyName: "",
        email: "",
        phone: "",
        selectedInterest: "Digital Marketing",
        requirement: "",
        source: "",
        website_url: "",
      });
    } catch (err) {
      console.error("Submission error:", err);
      setApiError(`Network error. Please check your internet connection or email ${env.NEXT_PUBLIC_CONTACT_EMAIL} directly.`);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-paper text-ink min-h-screen overflow-x-hidden selection:bg-tangerine selection:text-ink">
      <main className="relative w-full overflow-hidden">
        {/* Hero / Form Section */}
        <section className="relative pt-20 md:pt-section-gap px-margin-mobile md:px-margin-desktop pb-20 grid-bg min-h-[70vh] md:min-h-[90vh]">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 relative z-10">
              
              {/* Left Column: Text & Direct Contact */}
              <div className="lg:col-span-5">
                <p className="font-label-mono text-label-mono uppercase mb-4 tracking-widest text-tangerine font-bold">01 / Contact</p>
                <h1 className="font-display-xl-mobile md:font-display-xl text-display-xl-mobile md:text-display-xl uppercase leading-[0.9] break-words mb-8">
                  Let&apos;s Start a <br />
                  <span className="text-tangerine italic">Conversation</span>
                </h1>
                <p className="text-[18px] md:text-[24px] font-bold leading-[1.5] border-l-4 border-tangerine pl-4 md:pl-6 mb-12">
                  Whether you&apos;re looking to grow your brand, fill a critical role, or both, we&apos;re here to help. Reach out and one of our specialists will get back to you within one business day.
                </p>

                <div className="bg-surface-container-lowest border-4 border-ink p-8 brutalist-shadow mb-12">
                  <h2 className="text-[24px] font-black uppercase mb-6 text-tangerine">Direct Contact Details</h2>
                  <ul className="space-y-4 text-[18px] font-medium">
                    <li className="flex flex-col">
                      <span className="text-[12px] font-label-mono uppercase tracking-widest text-secondary font-bold mb-1">Email</span>
                      <a href={`mailto:${env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="hover:text-tangerine transition-colors font-bold">{env.NEXT_PUBLIC_CONTACT_EMAIL}</a>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-[12px] font-label-mono uppercase tracking-widest text-secondary font-bold mb-1">Phone</span>
                      <a href="tel:+918519022399" className="hover:text-tangerine transition-colors font-bold">+91 8519022399</a>
                    </li>
                    <li className="flex flex-col">
                      <span className="text-[12px] font-label-mono uppercase tracking-widest text-secondary font-bold mb-1">Business Hours</span>
                      <span className="font-bold">Monday to Friday, 11:00 AM &ndash; 8:00 PM IST</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <div className="bg-tangerine border-4 border-ink p-8 md:p-12 brutalist-shadow">
                  {isSuccess ? (
                    <div className="bg-surface-container-lowest border-4 border-ink p-8 text-center brutalist-shadow">
                      <span className="text-[50px] block mb-4">🎉</span>
                      <h2 className="text-[32px] font-black uppercase text-ink mb-4 leading-none">
                        MESSAGE RECEIVED!
                      </h2>
                      <p className="text-[18px] font-bold text-ink mb-6 leading-relaxed">
                        Thank you for reaching out to Ads Mini! We have received your inquiry and our specialists will review it and get back to you within 1 business day.
                      </p>
                      <Button
                        variant="default"
                        size="lg"
                        onClick={() => setIsSuccess(false)}
                        className="w-full sm:w-auto"
                      >
                        Send Another Message
                      </Button>
                    </div>
                  ) : (
                    <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                      {apiError && (
                        <div className="bg-red-500 text-white border-4 border-ink p-4 font-bold text-[15px] brutalist-shadow">
                          ⚠️ {apiError}
                        </div>
                      )}

                      {/* Honeypot hidden input */}
                      <input
                        type="text"
                        name="website_url"
                        value={formData.website_url ?? ""}
                        onChange={(e) => handleInputChange("website_url", e.target.value)}
                        tabIndex={-1}
                        autoComplete="off"
                        className="hidden pointer-events-none"
                        aria-hidden="true"
                      />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Full Name */}
                        <div className="flex flex-col">
                          <label htmlFor="fullName" className="text-[14px] font-black uppercase mb-2">
                            Full Name (required)
                          </label>
                          <input
                            type="text"
                            id="fullName"
                            value={formData.fullName}
                            onChange={(e) => {
                              // Restrict input to letters, spaces, hyphens, and apostrophes only
                              const filtered = e.target.value.replace(/[^a-zA-Z\s'.\-]/g, "");
                              handleInputChange("fullName", filtered);
                            }}
                            maxLength={100}
                            required
                            className={`bg-paper border-4 ${fieldErrors.fullName ? "border-red-600 bg-red-50" : "border-ink"} p-4 text-[16px] font-bold outline-none focus:bg-surface-container-lowest transition-colors placeholder:text-ink/40`}
                            placeholder="John Doe"
                          />
                          {fieldErrors.fullName && (
                            <span className="text-red-900 font-bold text-[12px] mt-1 uppercase">
                              ✕ {fieldErrors.fullName}
                            </span>
                          )}
                        </div>

                        {/* Company Name */}
                        <div className="flex flex-col">
                          <label htmlFor="companyName" className="text-[14px] font-black uppercase mb-2">
                            Company Name (required)
                          </label>
                          <input
                            type="text"
                            id="companyName"
                            value={formData.companyName}
                            onChange={(e) => handleInputChange("companyName", e.target.value)}
                            maxLength={100}
                            required
                            className={`bg-paper border-4 ${fieldErrors.companyName ? "border-red-600 bg-red-50" : "border-ink"} p-4 text-[16px] font-bold outline-none focus:bg-surface-container-lowest transition-colors placeholder:text-ink/40`}
                            placeholder="Acme Corp"
                          />
                          {fieldErrors.companyName && (
                            <span className="text-red-900 font-bold text-[12px] mt-1 uppercase">
                              ✕ {fieldErrors.companyName}
                            </span>
                          )}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Email */}
                        <div className="flex flex-col">
                          <label htmlFor="email" className="text-[14px] font-black uppercase mb-2">
                            Email Address (required)
                          </label>
                          <input
                            type="email"
                            id="email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value.trim())}
                            maxLength={100}
                            required
                            className={`bg-paper border-4 ${fieldErrors.email ? "border-red-600 bg-red-50" : "border-ink"} p-4 text-[16px] font-bold outline-none focus:bg-surface-container-lowest transition-colors placeholder:text-ink/40`}
                            placeholder="john@example.com"
                          />
                          {fieldErrors.email && (
                            <span className="text-red-900 font-bold text-[12px] mt-1 uppercase">
                              ✕ {fieldErrors.email}
                            </span>
                          )}
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col">
                          <label htmlFor="phone" className="text-[14px] font-black uppercase mb-2">
                            Phone Number (optional)
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            value={formData.phone ?? ""}
                            onChange={(e) => {
                              // Restrict input to digits, leading +, spaces, hyphens, and parentheses only
                              const filtered = e.target.value.replace(/[^0-9+\s\-()]/g, "");
                              handleInputChange("phone", filtered);
                            }}
                            maxLength={16}
                            className={`bg-paper border-4 ${fieldErrors.phone ? "border-red-600 bg-red-50" : "border-ink"} p-4 text-[16px] font-bold outline-none focus:bg-surface-container-lowest transition-colors placeholder:text-ink/40`}
                            placeholder="+91 85190 22399"
                          />
                          {fieldErrors.phone && (
                            <span className="text-red-900 font-bold text-[12px] mt-1 uppercase">
                              ✕ {fieldErrors.phone}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Interest Dropdown */}
                      <div className="flex flex-col">
                        <label className="text-[14px] font-black uppercase mb-2">I am interested in:</label>
                        <div className="relative">
                          <button
                            type="button"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="w-full bg-paper border-4 border-ink p-4 text-[16px] font-bold text-left flex justify-between items-center outline-none cursor-pointer rounded-none hover:bg-surface-container-lowest transition-colors"
                          >
                            <span>{selectedInterest}</span>
                            <span className={`material-symbols-outlined transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}>
                              expand_more
                            </span>
                          </button>

                          {isDropdownOpen && (
                            <div className="absolute top-full left-0 w-full -mt-1 bg-paper border-4 border-t-0 border-ink shadow-xl z-30 flex flex-col overflow-hidden">
                              {interestOptions.map((option) => (
                                <button
                                  key={option}
                                  type="button"
                                  onClick={() => {
                                    setSelectedInterest(option);
                                    handleInputChange("selectedInterest", option);
                                    setIsDropdownOpen(false);
                                  }}
                                  className={`p-4 text-[16px] font-bold text-left border-b-2 border-ink/20 last:border-b-0 transition-colors cursor-pointer ${
                                    selectedInterest === option
                                      ? "bg-tangerine text-ink font-black"
                                      : "bg-paper text-ink hover:bg-tangerine/20"
                                  }`}
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>

                      {/* Requirement */}
                      <div className="flex flex-col">
                        <div className="flex justify-between items-center mb-2">
                          <label htmlFor="requirement" className="text-[14px] font-black uppercase">
                            Tell us about your requirement (required)
                          </label>
                          <span className="text-[12px] font-mono font-bold text-ink/70">
                            {formData.requirement.length} / 2000
                          </span>
                        </div>
                        <textarea
                          id="requirement"
                          value={formData.requirement}
                          onChange={(e) => handleInputChange("requirement", e.target.value)}
                          maxLength={2000}
                          required
                          rows={5}
                          className={`bg-paper border-4 ${fieldErrors.requirement ? "border-red-600 bg-red-50" : "border-ink"} p-4 text-[16px] font-bold outline-none focus:bg-surface-container-lowest transition-colors placeholder:text-ink/40 resize-none`}
                          placeholder="How can we help you achieve your goals?"
                        ></textarea>
                        {fieldErrors.requirement && (
                          <span className="text-red-900 font-bold text-[12px] mt-1 uppercase">
                            ✕ {fieldErrors.requirement}
                          </span>
                        )}
                      </div>

                      {/* Source */}
                      <div className="flex flex-col">
                        <label htmlFor="source" className="text-[14px] font-black uppercase mb-2">
                          How did you hear about us? (optional)
                        </label>
                        <input
                          type="text"
                          id="source"
                          value={formData.source ?? ""}
                          onChange={(e) => handleInputChange("source", e.target.value)}
                          maxLength={200}
                          className="bg-paper border-4 border-ink p-4 text-[16px] font-bold outline-none focus:bg-surface-container-lowest transition-colors placeholder:text-ink/40"
                          placeholder="Google, LinkedIn, Referral, etc."
                        />
                      </div>

                      <Button
                        type="submit"
                        variant="secondary"
                        size="lg"
                        disabled={isSubmitting}
                        className="w-full mt-4"
                      >
                        {isSubmitting ? "SUBMITTING..." : "SEND MESSAGE"}
                      </Button>
                    </form>
                  )}
                </div>
              </div>

            </div>

            {/* Alternative CTAs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 mt-16 pt-12 border-t-4 border-ink relative z-10">
              <div>
                <p className="text-[14px] font-label-mono uppercase tracking-widest text-tangerine mb-2 font-bold">For Businesses &mdash; Digital Marketing</p>
                <p className="text-[18px] md:text-[24px] font-bold mb-6">Want a free audit of your current digital presence?</p>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/services">
                    Request a Free Digital Audit
                  </Link>
                </Button>
              </div>
              <div>
                <p className="text-[14px] font-label-mono uppercase tracking-widest text-tangerine mb-2 font-bold">For Businesses &mdash; Recruitment</p>
                <p className="text-[18px] md:text-[24px] font-bold mb-6">Have a specific hiring need?</p>
                <Button variant="secondary" size="lg" asChild>
                  <Link href="/about">
                    Submit a Hiring Brief
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
