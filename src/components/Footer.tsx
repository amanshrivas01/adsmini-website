import Link from "next/link";
import Image from "next/image";
import { env } from "~/env";

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest text-ink w-full relative border-t-4 border-ink">
      <div className="w-full px-margin-mobile md:px-margin-desktop py-6 md:py-12">
        
        {/* Top grid: About, Quick Links, Contact */}
        {/* Top grid: About, Quick Links, Contact */}
        <div className="grid grid-cols-2 md:grid-cols-12 gap-6 md:gap-8 mb-8 md:mb-12">
          <div className="col-span-2 md:col-span-5">
            <Link href="/" className="inline-block mb-4 md:mb-6">
              <Image src="/logo.svg" alt="Ads Mini Logo" width={180} height={84} className="object-contain h-10 md:h-12 w-auto origin-left" />
            </Link>
            <p className="hidden md:block text-[16px] md:text-[18px] leading-[1.5] font-medium max-w-md">
              Ads Mini is a digital marketing and recruitment agency helping businesses grow their brand and build the right teams. We bring performance, precision and a genuine commitment to every client engagement.
            </p>
          </div>
          <div className="col-span-1 md:col-span-3">
            <h3 className="text-[12px] md:text-[14px] font-label-mono uppercase tracking-widest text-secondary mb-2 md:mb-3">Quick Links</h3>
            <ul className="space-y-1 md:space-y-1.5 text-[12px] md:text-[14px] font-bold uppercase">
              <li><Link href="/" className="hover:text-tangerine transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-tangerine transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-tangerine transition-colors">All Services</Link></li>
              <li><Link href="/services/digital-marketing" className="hover:text-tangerine transition-colors">Digital Marketing</Link></li>
              <li><Link href="/services/recruitment" className="hover:text-tangerine transition-colors">Recruitment</Link></li>
              <li><Link href="/work" className="hover:text-tangerine transition-colors">Clients &amp; Work</Link></li>
              <li><Link href="/insights" className="hover:text-tangerine transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-tangerine transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-[12px] md:text-[14px] font-label-mono uppercase tracking-widest text-secondary mb-2 md:mb-3">Contact</h3>
            <ul className="space-y-1.5 text-[12px] md:text-[16px] font-bold mb-6">
              <li><a href={`mailto:${env.NEXT_PUBLIC_CONTACT_EMAIL}`} className="hover:text-tangerine transition-colors block">{env.NEXT_PUBLIC_CONTACT_EMAIL}</a></li>
              <li><a href="tel:+918519022399" className="hover:text-tangerine transition-colors block">+91 8519022399</a></li>
            </ul>

            <h3 className="text-[12px] md:text-[14px] font-label-mono uppercase tracking-widest text-secondary mb-2 md:mb-3">Socials</h3>
            <div className="flex flex-row items-center gap-3">
              <a href="https://www.instagram.com/adsmini_meme?igsh=NWx0YXp3dXlyOXZz&utm_source=qr" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-ink text-surface-container-lowest border-2 border-ink p-2.5 sm:px-4 sm:py-2 font-black uppercase brutalist-shadow-sm hover:bg-tangerine hover:text-ink transition-colors flex items-center justify-center gap-2 text-[14px]">
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={24}
                  height={24}
                />
                <span className="hidden sm:inline">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/adsmini/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-ink text-surface-container-lowest border-2 border-ink p-2.5 sm:px-4 sm:py-2 font-black uppercase brutalist-shadow-sm hover:bg-tangerine hover:text-ink transition-colors flex items-center justify-center gap-2 text-[14px]">
                <Image
                  src="/linkedin.png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Legal Row */}
        <div className="flex flex-col md:flex-row justify-between items-center border-t-2 border-ink pt-4 md:pt-6 text-[10px] md:text-[12px] font-bold uppercase gap-2 md:gap-2 text-center md:text-left">
          <p>&copy; 2026 Ads Mini. All Rights Reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="#" className="hover:text-tangerine transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-tangerine transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
