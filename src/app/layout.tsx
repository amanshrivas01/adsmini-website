import "~/styles/globals.css";

import { type Metadata } from "next";
import { Inter, JetBrains_Mono, Montserrat } from "next/font/google";
import { LayoutWrapper } from "~/components/LayoutWrapper";
import { GTagManager } from "~/components/analytics/GTagManager";
import { constructMetadata } from "~/lib/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = constructMetadata("/");

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${montserrat.variable} antialiased`}>
        <GTagManager />
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
