import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/core/Header";
import FooterSection from "@/components/core/FooterSection";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "CTA Agency | Designing Digital Strategies",
  description: "CTA Agency | Designing Digital Strategies",
  icons: {
    icon: "/Logo_1.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`h-full antialiased bg-black`}>
        <Header />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
