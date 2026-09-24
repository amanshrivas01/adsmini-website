import { type Metadata } from "next";
import { constructMetadata } from "~/lib/metadata";

export const metadata: Metadata = constructMetadata("/contact");

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
