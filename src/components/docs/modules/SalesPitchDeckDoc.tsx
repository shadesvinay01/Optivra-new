"use client";

import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Globe, Cpu } from "lucide-react";

export default function SalesPitchDeckDoc() {
  const slides = [
    {
      slide: "01",
      title: "OPTIVRA SOLUTIONS",
      subtitle: "Engineering Enterprise Intelligence & Scalable Software",
      body: "We build high-impact AI agents, custom web/mobile platforms, automated workflows, and cloud architectures for forward-thinking companies.",
      accent: "EXECUTIVE PITCH DECK"
    },
    {
      slide: "02",
      title: "The Enterprise Challenge",
      subtitle: "Legacy systems & fragmented workflows drain speed and capital",
      body: "Modern organizations face slow development cycles, high operational costs, and missed opportunities in leveraging enterprise AI & automation.",
      accent: "THE PROBLEM"
    },
    {
      slide: "03",
      title: "The Optivra Solution",
      subtitle: "AI-First Engineering + High-Velocity Software Delivery",
      body: "We deploy dedicated senior engineering pods to design, build, and deploy production-grade software and autonomous AI systems in weeks, not months.",
      accent: "OUR PROMISE"
    },
    {
      slide: "04",
      title: "Core Technology Offerings",
      subtitle: "End-to-End Capabilities Across the Modern Tech Stack",
      body: "1. Enterprise AI & RAG Agents\n2. Custom Next.js / React Web Platforms\n3. Cross-Platform Mobile Apps (iOS & Android)\n4. Automated Workflow & ETL Pipelines\n5. Cloud Infrastructure & DevOps (AWS/GCP)",
      accent: "CAPABILITIES"
    },
    {
      slide: "05",
      title: "Proven Impact & ROI",
      subtitle: "Quantifiable results delivered across 50+ projects",
      body: "• 99.9% Infrastructure Uptime Guarantee\n• Up to 70% reduction in manual operational workflows\n• 4.9/5 Average Client Satisfaction Rating\n• 100% Code Ownership & IP Transfer",
      accent: "RESULTS"
    },
    {
      slide: "06",
      title: "Let's Build Together",
      subtitle: "Book Your Discovery Call & Technical Architecture Review",
      body: "Email: hello@optivra.com • Website: optivra.com • Location: San Francisco / India",
      accent: "NEXT STEPS"
    }
  ];

  return (
    <div className="space-y-6 text-gray-900 leading-relaxed font-sans">
      <div className="text-center space-y-1 mb-4">
        <span className="text-xs font-bold bg-[#D4AF37] text-slate-950 px-3 py-1 rounded uppercase tracking-wider">
          Sales Pitch Deck • PDF Slide Presentation
        </span>
      </div>

      <div className="space-y-6">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-3 relative overflow-hidden shadow-lg"
          >
            <div className="flex justify-between items-center text-xs">
              <span className="text-[#D4AF37] font-bold uppercase tracking-widest">{slide.accent}</span>
              <span className="font-mono text-gray-500">SLIDE {slide.slide} / 06</span>
            </div>

            <h2 className="text-2xl font-extrabold text-white">{slide.title}</h2>
            <h3 className="text-sm font-semibold text-[#D4AF37]">{slide.subtitle}</h3>

            <p className="text-xs text-gray-300 whitespace-pre-line leading-relaxed pt-2">
              {slide.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
