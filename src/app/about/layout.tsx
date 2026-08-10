import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "About Ads Mini | Our Story, Team & Values",
  description: "Meet the team behind Ads Mini, an integrated digital marketing and recruitment agency with 6+ years of experience, 400+ clients, and results that speak for themselves.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
