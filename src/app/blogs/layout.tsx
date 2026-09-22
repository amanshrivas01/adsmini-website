import { type Metadata } from "next";
import { constructMetadata } from "~/lib/metadata";

export const metadata: Metadata = constructMetadata("/blogs");

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
