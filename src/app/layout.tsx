import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL('https://optivra.in'),
  title: "Optivra | Elite AI Consulting & Strategy",
  description: "Executive-tier AI consulting. We design and deploy intelligent systems that automate operations and accelerate growth for industry leaders.",
  keywords: ["Enterprise AI Consulting", "Executive Tech Strategy", "AI Board Advisory", "Machine Learning Systems"],
  openGraph: {
    title: "Optivra | Elite AI Consulting",
    description: "Executive-tier AI consulting and intelligent systems.",
    type: "website",
    url: "https://optivra.in",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Optivra | Elite AI Consulting",
    description: "Executive-tier AI consulting and intelligent systems.",
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} font-sans min-h-screen flex flex-col antialiased selection:bg-primary/30 selection:text-white bg-[#0A0A0A] text-white`}>
        <Header />
        <main className="flex-1 mt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
