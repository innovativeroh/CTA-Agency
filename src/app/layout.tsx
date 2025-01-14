import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/core/Header";
import FooterSection from "@/components/core/FooterSection";

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
      <body
        className={`antialiased`}
      >
        <Header />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
