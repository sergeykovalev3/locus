import type { Metadata } from "next";
import { urbanist } from "@/lib/fonts";
import { getMetadataBase } from "@/lib/site";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: getMetadataBase(),
  title: {
    default: "Locus — Real Estate Showcase",
    template: "%s | Locus",
  },
  description:
    "A modern real estate front-end showcase: listings, property details, services, and contact — built with Next.js and React.",
  keywords: ["real estate", "properties", "Locus", "Next.js", "showcase"],
  icons:{
    icon: "/images/global/logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Locus",
    title: "Locus — Real Estate Showcase",
    description:
      "Explore property listings and a polished marketing experience — portfolio-quality UI for real estate.",
    images: [
      {
        url: "/images/home/intro/image.png",
        width: 1200,
        height: 630,
        alt: "Locus real estate showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Locus — Real Estate Showcase",
    description:
      "Explore property listings and a polished marketing experience — portfolio-quality UI for real estate.",
    images: ["/images/home/intro/image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={urbanist.variable}>
      <body
        className={`min-h-screen antialiased font-urb bg-grey08 text-white overflow-x-hidden`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
