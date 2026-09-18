"use client";

import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Globe, Cpu } from "lucide-react";

export default function SalesPitchDeckDoc() {
  const slides = [
    {
      slide: "01",
      title: "OPTIVRA",
      subtitle: "AI-First Technology & Product Engineering",
      body: "Building Intelligent Software for the AI-Driven Business.\nIndia-based, serving clients globally.",
      accent: "EXECUTIVE PRESENTATION"
    },
    {
      slide: "02",
      title: "The Problem",
      subtitle: "Navigating AI adoption & software scalability challenges",
      body: "Startups and growing businesses struggle to bridge advanced AI research with production-grade software engineering, resulting in slow execution, high operational overhead, and unfulfilled AI potential.",
      accent: "THE CHALLENGE"
    },
    {
      slide: "03",
      title: "What We Build",
      subtitle: "Intelligent software, AI systems, automation platforms & SaaS",
      body: "We combine AI/ML engineering with full-stack product development to turn complex ideas and operational challenges into practical, scalable technology.",
      accent: "OUR PROMISE"
    },
    {
      slide: "04",
      title: "AI & Automation",
      subtitle: "Autonomous Agents, RAG & Workflow Engineering",
      body: "• Custom AI Agents & Multi-Agent Operations\n• Enterprise RAG & Knowledge Systems\n• End-to-End Business Workflow Automation\n• Computer Vision & Visual Document OCR Parsing",
      accent: "CAPABILITIES"
    },
    {
      slide: "05",
      title: "SaaS & Product Engineering",
      subtitle: "Full-Stack Web, Mobile & Cloud Systems",
      body: "• SaaS MVP Development (Zero to Launch)\n• High-Performance Next.js & React Applications\n• Cross-Platform Mobile Apps (iOS & Android)\n• Cloud Infrastructure, DevOps & Microservices",
      accent: "ENGINEERING"
    },
    {
      slide: "06",
      title: "Our Technology Portfolio",
      subtitle: "Internal Products & Technology Initiatives",
      body: "• Optivra AI — Enterprise AI & Automation Platform Initiative\n• ShadowAgent — Autonomous Multi-Agent Operational Framework\n• Jugnu AI — Specialized Intelligent Software R&D Prototype",
      accent: "R&D PORTFOLIO"
    },
    {
      slide: "07",
      title: "How We Work",
      subtitle: "Agile, transparent & quality-driven development",
      body: "1. Discovery & Technical Blueprinting\n2. Interactive UI/UX Prototyping\n3. Agile Sprints & Continuous Releases\n4. QA, Security & Deployment Controls\n5. 30-Day Post-Launch Support",
      accent: "METHODOLOGY"
    },
    {
      slide: "08",
      title: "Engagement Models",
      subtitle: "Flexible structures tailored to project requirements",
      body: "• Fixed-Price Project — For clearly defined scopes\n• Time & Materials — For evolving requirements ($45–$85/hr)\n• Dedicated Engineering — Embedded full-time engineers ($3,500–$6,500/mo)\n• Monthly Technology Partnership — Ongoing technical support & maintenance",
      accent: "ENGAGEMENT"
    },
    {
      slide: "09",
      title: "Indicative Pricing",
      subtitle: "Competitive international delivery rate cards",
      body: "• AI Automation Sprint: Starting from $3,500 / £2,900 / €3,300\n• Custom AI Agent Development: Starting from $4,500 / £3,700 / €4,200\n• SaaS MVP Development: Starting from $5,000 / £4,100 / €4,700\n* Final pricing confirmed via Statement of Work.",
      accent: "COMMERCIALS"
    },
    {
      slide: "10",
      title: "Why Optivra",
      subtitle: "AI-First Expertise + Cost-Efficient Engineering Model",
      body: "• End-to-end product & AI capabilities under one roof\n• India-based delivery model offering high technical quality and efficiency\n• Clear IP governance and transparent commercial terms\n• QA, security review & deployment controls built-in",
      accent: "THE ADVANTAGE"
    },
    {
      slide: "11",
      title: "Next Steps",
      subtitle: "Let's build your next digital product together",
      body: "Schedule a technical architecture call or request a project proposal.\n\nWebsite: https://www.optivra.in/\nEmail: hello@optivra.in",
      accent: "GET IN TOUCH"
    }
  ];

  return (
    <div className="space-y-6 text-gray-900 leading-relaxed font-sans max-w-[800px] mx-auto bg-white p-2">
      <div className="text-center space-y-1 mb-4">
        <span className="text-xs font-bold bg-[#D4AF37] text-slate-950 px-3 py-1 rounded uppercase tracking-wider">
          OPTIVRA • International Sales Deck 2026 (11 Slides)
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
              <span className="font-mono text-gray-500">SLIDE {slide.slide} / 11</span>
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

