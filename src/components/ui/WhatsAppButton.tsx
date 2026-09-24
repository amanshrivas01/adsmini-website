"use client";

import Image from "next/image";
import React from "react";
import { siteConfig } from "~/data/data";

export function WhatsAppButton() {
  const whatsappUrl = siteConfig.contact.whatsappHref;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with AdsMini on WhatsApp"
      className="fixed bottom-16 right-5 sm:bottom-20 sm:right-6 md:bottom-24 md:right-8 z-50 group flex items-center gap-2"
    >
      {/* Floating Badge Label */}
      <span className="hidden sm:inline-block bg-paper text-ink font-label-mono text-xs font-bold uppercase border-2 border-ink px-3 py-1.5 shadow-[3px_3px_0_#000] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat on WhatsApp
      </span>

      {/* Floating Animated Icon Image Directly */}
      <div 
        className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 hover:scale-110 active:scale-95 transition-transform duration-300"
        style={{ animation: "floatAnim 3.5s ease-in-out infinite" }}
      >
        <Image
          src="/Gemini_Generated_Image_8o0qi18o0qi18o0q (1).png"
          alt="WhatsApp Chat"
          fill
          sizes="80px"
          className="object-contain"
        />
      </div>
    </a>
  );
}
