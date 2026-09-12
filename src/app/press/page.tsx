import React from "react";
import { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Press & Media | Optivra",
  description:
    "Explore selected media coverage and editorial features related to Optivra, AI, technology and its founder Sarveshwar Mandal.",
  openGraph: {
    title: "Press & Media | Optivra",
    description:
      "Explore selected media coverage and editorial features related to Optivra, AI, technology and its founder Sarveshwar Mandal.",
    url: "https://optivra.in/press",
    siteName: "Optivra",
    type: "website",
  },
};

export default function PressPage() {
  return (
    <div className="min-h-screen bg-black pt-32 pb-24 selection:bg-primary/30 selection:text-white">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Hero Section */}
        <div className="mb-16 border-b border-white/10 pb-12">
          <span className="inline-block py-1 px-3.5 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-[0.3em] uppercase text-primary font-bold mb-6">
            Press &amp; Media
          </span>
          <h1 className="text-4xl md:text-6xl font-sans font-bold text-white mb-6 tracking-tight">
            Press &amp; Media
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed max-w-3xl">
            News, editorial coverage and selected media features related to
            Optivra and its work in AI and technology.
          </p>
        </div>

        {/* Media Coverage Section */}
        <div>
          <h2 className="text-xs font-bold text-gray-500 uppercase tracking-[0.3em] mb-8">
            Selected Coverage
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business Mint Feature Card */}
            <article className="group relative border border-white/10 bg-[#050505] p-8 md:p-10 rounded-xl hover:border-primary/50 transition-all duration-500 flex flex-col justify-between overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 blur-[70px] rounded-full group-hover:bg-primary/10 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[10px] tracking-widest uppercase font-bold px-3 py-1 bg-primary/10 border border-primary/30 text-primary rounded-sm">
                    Business Mint
                  </span>
                  <span className="text-xs text-gray-500 font-light">
                    Editorial Feature
                  </span>
                </div>

                <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  Sarveshwar Mandal &amp; Optivra
                </h3>

                <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                  An editorial feature covering Sarveshwar Mandal and Optivra's
                  journey in AI, technology and innovation.
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <a
                  href="https://businessmint.in/article/sarveshwar-mandal-optivra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors group/link"
                >
                  Read Article
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
                <span className="text-[10px] uppercase tracking-wider text-gray-600">
                  External Link
                </span>
              </div>
            </article>

            <article className="border border-white/10 bg-[#050505] p-8 md:p-10 rounded-xl group hover:border-primary/40 transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <span className="text-[10px] tracking-widest uppercase font-bold px-3 py-1 bg-primary/10 border border-primary/30 text-primary rounded-sm">
                    The Business Stories
                  </span>
                  <span className="text-xs text-gray-500 font-light">
                    Feature Story
                  </span>
                </div>

                <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  From Data Science to Autonomous AI: How Sarveshwar Mandal is Building the Next Generation of Intelligent Business Systems
                </h3>

                <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                  Feature story on Sarveshwar Mandal &amp; Optivra building enterprise-grade autonomous AI architectures.
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                <a
                  href="https://thebusinessstories.com/from-data-science-to-autonomous-ai-how-sarveshwar-mandal-is-building-the-next-generation-of-intelligent-business-systems/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary hover:text-white transition-colors group/link"
                >
                  Read Article
                  <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
                <span className="text-[10px] uppercase tracking-wider text-gray-600">
                  External Link
                </span>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}
