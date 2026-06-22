import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppWidget from "@/components/ui/WhatsAppWidget";
import ExitIntentModal from "@/components/ui/ExitIntentModal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://optivra.in"),
  title: {
    default: "Optivra | AI Consulting & Product Engineering",
    template: "%s | Optivra",
  },
  description:
    "Optivra builds enterprise AI systems, machine learning products, and intelligent automation that drive measurable business growth. Book a free AI strategy call today.",
  keywords: [
    "AI consulting India",
    "Enterprise AI consulting",
    "Machine learning development",
    "AI agents development",
    "Computer vision consulting",
    "MVP development startup",
    "AI automation services",
    "Cloud engineering AI",
    "CTO as a service India",
    "AI product engineering",
  ],
  openGraph: {
    title: "Optivra | AI Consulting & Product Engineering",
    description:
      "We build enterprise AI systems and intelligent automation that drive real business growth. Book your free AI strategy call.",
    type: "website",
    url: "https://optivra.in",
    siteName: "Optivra",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Optivra | AI Consulting & Product Engineering",
    description:
      "We build enterprise AI systems and intelligent automation that drive real business growth.",
    site: "@optivra",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://optivra.in",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://optivra.in/#organization",
      name: "Optivra",
      url: "https://optivra.in",
      logo: "https://optivra.in/logo.png",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-74390-71619",
        contactType: "sales",
        availableLanguage: ["English", "Hindi"],
      },
      sameAs: ["https://www.linkedin.com/company/optivra"],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://optivra.in/#localbusiness",
      name: "Optivra",
      description:
        "Enterprise AI consulting, machine learning development, and intelligent automation services.",
      url: "https://optivra.in",
      telephone: "+91-74390-71619",
      email: "hello@optivra.in",
      address: {
        "@type": "PostalAddress",
        addressCountry: "IN",
      },
      priceRange: "₹₹₹",
      openingHours: "Mo-Fr 09:00-18:00",
    },
    {
      "@type": "WebSite",
      "@id": "https://optivra.in/#website",
      url: "https://optivra.in",
      name: "Optivra",
      description: "AI Consulting & Product Engineering",
      potentialAction: {
        "@type": "SearchAction",
        target: "https://optivra.in/insights?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans min-h-screen flex flex-col antialiased selection:bg-primary/30 selection:text-white bg-black text-white`}
      >
        <Header />
        <main className="flex-1 mt-20">{children}</main>
        <Footer />
        <WhatsAppWidget />
        <ExitIntentModal />
      </body>
    </html>
  );
}
