import { type Metadata } from "next";
import { env } from "~/env";

export const metadata: Metadata = {
  title: "Contact Ads Mini | Digital Marketing & Recruitment Agency",
  description: `Get in touch with Ads Mini. Whether you need digital marketing support or recruitment help, reach out at ${env.NEXT_PUBLIC_CONTACT_EMAIL} or call +91 8519022399.`,
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
