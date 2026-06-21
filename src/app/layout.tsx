import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optivra | Premium AI Consulting & Product Engineering",
  description: "Transform your business with AI-powered solutions. Optivra designs, develops and deploys intelligent systems that automate operations and accelerate growth.",
  keywords: ["AI Consulting India", "Machine Learning Company", "AI Development Services", "AI Automation Solutions", "Data Science Consulting", "Generative AI Development"],
  openGraph: {
    title: "Optivra | Elite AI Consulting",
    description: "Building Intelligent Systems That Drive Business Growth",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col antialiased selection:bg-primary/20 text-gray-900 bg-[#F9FAFB]`}>
        <Header />
        <main className="flex-1 mt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
