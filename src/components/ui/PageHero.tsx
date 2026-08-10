"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "~/lib/utils";

export interface PageHeroProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  label: string;
  title: React.ReactNode;
  children?: React.ReactNode;
}

export function PageHero({
  label,
  title,
  children,
  className,
  ...props
}: PageHeroProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
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

    if (sectionRef.current) {
      const elements = sectionRef.current.querySelectorAll(".reveal-on-scroll");
      elements.forEach((el) => observer.observe(el));
    }
    
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className={cn("relative px-margin-mobile md:px-margin-desktop py-20 md:py-section-gap min-h-[70vh] md:min-h-[90vh] flex items-center bg-paper overflow-hidden border-b-4 border-ink bg-grid-pattern", className)}
      {...props}
    >
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter relative z-20 w-full max-w-7xl mx-auto">
        <div className="md:col-span-10 md:col-start-2 reveal-on-scroll">
          <span className="font-label-mono text-[14px] md:text-[16px] text-tangerine tracking-widest mb-6 md:mb-8 block uppercase font-bold">
            {label}
          </span>
          <h1 className="text-[50px] sm:text-[70px] md:text-[80px] lg:text-[100px] font-black text-ink uppercase leading-[0.9] mb-6 md:mb-8 break-words hyphens-auto">
            {title}
          </h1>
          <div className="w-24 h-4 bg-ink mb-8 md:mb-12 reveal-on-scroll" style={{ transitionDelay: "0.2s" }}></div>
          {children && (
            <div className="text-[18px] md:text-[24px] font-bold text-ink leading-[1.5] max-w-4xl reveal-on-scroll" style={{ transitionDelay: "0.3s" }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
