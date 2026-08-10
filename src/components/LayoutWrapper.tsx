"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "~/components/Navbar";
import { Footer } from "~/components/Footer";
import { WhatsAppButton } from "~/components/ui/WhatsAppButton";
import { CustomCursor } from "~/components/ui/CustomCursor";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isStudioRoute = pathname.startsWith("/studio") || pathname.startsWith("/sanity");

  if (isStudioRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <CustomCursor />
      <Navbar />
      <main>{children}</main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
