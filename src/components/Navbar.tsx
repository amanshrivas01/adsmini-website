"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

const serviceItems = [
  { href: "/services/digital-marketing", label: "Digital Marketing" },
  { href: "/services/recruitment", label: "Recruitment" }
];

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsServicesDropdownOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname?.startsWith(`${href}/`);
  };

  return (
    <nav className="bg-surface-container-lowest text-ink w-full sticky top-0 z-50 border-b-4 border-ink h-[80px] flex items-center">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop h-full mx-auto bg-grid-pattern">
        
        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 relative z-50 inline-block hover:opacity-90 transition-opacity"
          onClick={closeMobileMenu}
        >
          <Image
            src="/logo.svg"
            alt="Ads Mini Logo"
            width={150}
            height={70}
            className="object-contain h-9 md:h-11 w-auto origin-left"
          />
        </Link>

        {/* Desktop Links Container */}
        <div className="hidden md:flex gap-1.5 lg:gap-2 items-center bg-surface-container-lowest border-2 border-ink px-2 py-1.5 shadow-[4px_4px_0_#000]">
          {/* About Link */}
          <Button
            variant={isActive("/about") ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link href="/about">ABOUT</Link>
          </Button>

          {/* Services Dropdown Trigger */}
          <div
            className="relative"
            ref={dropdownRef}
            onMouseEnter={() => setIsServicesDropdownOpen(true)}
            onMouseLeave={() => setIsServicesDropdownOpen(false)}
          >
            <Button
              variant={isActive("/services") ? "default" : "ghost"}
              size="sm"
              className="gap-1.5"
              asChild
            >
              <Link href="/services">
                SERVICES
                <span className={`text-[10px] transition-transform duration-200 ${isServicesDropdownOpen ? "rotate-180" : ""}`}>
                  ▼
                </span>
              </Link>
            </Button>

            {/* Desktop Services Dropdown Menu */}
            {isServicesDropdownOpen && (
              <div className="absolute top-full left-0 pt-2 w-64 z-50">
                <div className="bg-surface-container-lowest border-2 border-ink shadow-[4px_4px_0_#000] p-1.5 flex flex-col gap-1">
                  {serviceItems.map((item) => (
                    <Button
                      key={item.href}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start font-bold text-[13px] uppercase text-ink hover:bg-tangerine border-0 transition-colors h-9 px-3"
                      asChild
                      onClick={() => setIsServicesDropdownOpen(false)}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Work Link */}
          <Button
            variant={isActive("/work") ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link href="/work">WORK</Link>
          </Button>

          {/* Blogs Link */}
          <Button
            variant={isActive("/blogs") || isActive("/insights") ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link href="/blogs">BLOGS</Link>
          </Button>

          {/* Contact Link */}
          <Button
            variant={isActive("/contact") ? "default" : "ghost"}
            size="sm"
            asChild
          >
            <Link href="/contact">CONTACT</Link>
          </Button>
        </div>

        {/* Desktop CTA */}
        <Button variant="outline" size="sm" asChild className="hidden md:inline-flex">
          <Link href="/contact">GET IN TOUCH</Link>
        </Button>

        {/* Mobile Menu Toggle Button */}
        <Button
          variant="outline"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          <span className="material-symbols-outlined text-[24px]">
            {isMobileMenuOpen ? "close" : "menu"}
          </span>
        </Button>
      </div>

      {/* Mobile Menu Overlay Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[80px] bottom-0 bg-ink/50 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="bg-surface-container-lowest border-b-4 border-ink brutalist-shadow w-full max-h-full overflow-y-auto p-5 space-y-3">
            {/* 1. About */}
            <Button
              variant={isActive("/about") ? "default" : "outline"}
              className="w-full justify-start text-left h-12 text-base font-black"
              asChild
              onClick={closeMobileMenu}
            >
              <Link href="/about">ABOUT</Link>
            </Button>

            {/* 2. Mobile Services Accordion Box */}
            <div className="border-2 border-ink shadow-[4px_4px_0_#000] bg-surface-container-lowest overflow-hidden">
              <div className="flex items-center justify-between bg-tangerine border-b-2 border-ink">
                <Link
                  href="/services"
                  onClick={closeMobileMenu}
                  className="px-4 py-3 font-black text-base uppercase text-ink flex-grow hover:underline"
                >
                  SERVICES
                </Link>
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="px-4 py-3 font-black text-base text-ink border-l-2 border-ink hover:bg-surface-container-lowest transition-colors"
                  aria-label="Toggle services sub-menu"
                >
                  {isMobileServicesOpen ? "▲" : "▼"}
                </button>
              </div>

              {isMobileServicesOpen && (
                <div className="flex flex-col p-2 gap-1 bg-surface-container-lowest">
                  {serviceItems.map((item) => (
                    <Button
                      key={item.href}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start font-bold text-xs uppercase text-ink hover:bg-tangerine transition-colors h-10 px-3"
                      asChild
                      onClick={closeMobileMenu}
                    >
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* 3. Work */}
            <Button
              variant={isActive("/work") ? "default" : "outline"}
              className="w-full justify-start text-left h-12 text-base font-black"
              asChild
              onClick={closeMobileMenu}
            >
              <Link href="/work">WORK</Link>
            </Button>

            {/* 4. Blogs */}
            <Button
              variant={isActive("/blogs") || isActive("/insights") ? "default" : "outline"}
              className="w-full justify-start text-left h-12 text-base font-black"
              asChild
              onClick={closeMobileMenu}
            >
              <Link href="/blogs">BLOGS</Link>
            </Button>

            {/* 5. Contact */}
            <Button
              variant={isActive("/contact") ? "default" : "outline"}
              className="w-full justify-start text-left h-12 text-base font-black"
              asChild
              onClick={closeMobileMenu}
            >
              <Link href="/contact">CONTACT</Link>
            </Button>

            <div className="pt-2">
              <Button variant="outline" size="lg" className="w-full text-base font-black" asChild onClick={closeMobileMenu}>
                <Link href="/contact">GET IN TOUCH</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
