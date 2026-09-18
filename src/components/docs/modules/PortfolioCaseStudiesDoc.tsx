"use client";

import React from "react";
import { Award, CheckCircle2, TrendingUp, Cpu, Globe, ArrowUpRight, ShieldCheck, Code } from "lucide-react";

export default function PortfolioCaseStudiesDoc() {
  const portfolioItems = [
    {
      title: "Optivra AI",
      type: "Public Product",
      overview: "Enterprise AI & Automation Platform initiative enabling conversational document search, workflow automation, and custom model orchestration.",
      techStack: "Next.js, Python, OpenAI, Vector Search, Cloud Infrastructure",
      url: "https://www.optivra.in/optivra-ai"
    },
    {
      title: "ShadowAgent",
      type: "Independent R&D Prototype",
      overview: "Autonomous multi-agent operational framework designed to execute multi-step business tasks and system triggers across disparate APIs.",
      techStack: "Python, LangGraph, CrewAI, FastAPI, Docker",
      url: "Independent R&D"
    },
    {
      title: "Jugnu AI",
      type: "Independent R&D Prototype",
      overview: "Specialized intelligent software R&D initiative exploring lightweight contextual reasoning models and visual document parsing pipelines.",
      techStack: "PyTorch, OpenCV, YOLO, Python, WebSockets",
      url: "Independent R&D"
    },
    {
      title: "Custom SaaS & Enterprise Workflow Automation",
      type: "Confidential Technology Initiative",
      overview: "Multi-tenant SaaS platform architecture with role-based access controls, subscription engine integration, and automated data pipelines.",
      techStack: "React / Next.js, Node.js, PostgreSQL, Stripe Integration, TailwindCSS",
      url: "Confidential Client Initiative"
    }
  ];

  return (
    <div className="space-y-8 text-gray-900 leading-relaxed font-sans text-xs max-w-[800px] mx-auto bg-white p-2">
      <div className="bg-slate-950 text-white rounded-2xl p-8 space-y-2 border border-slate-800">
        <span className="px-3 py-1 bg-[#D4AF37] text-slate-950 text-xs font-bold rounded uppercase tracking-widest">
          OPTIVRA • PORTFOLIO & R&D INITIATIVES
        </span>
        <h1 className="text-3xl font-black">Selected Technology & R&D Portfolio</h1>
        <p className="text-gray-300">Overview of public product initiatives, independent R&D prototypes, and confidential technology engineering projects.</p>
      </div>

      <div className="space-y-6">
        {portfolioItems.map((item, idx) => (
          <div key={idx} className="p-6 border border-gray-200 rounded-2xl bg-white space-y-3 shadow-xs">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gray-200 pb-2">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#D4AF37] block">Portfolio Item #{idx + 1}</span>
                <h2 className="text-base font-bold text-slate-900">{item.title}</h2>
              </div>
              <span className="text-xs font-mono font-bold bg-slate-900 text-white px-3 py-1 rounded-lg">
                {item.type}
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed">{item.overview}</p>

            <div className="pt-2 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 text-[11px] border-t border-gray-100 pt-3">
              <span className="font-mono text-gray-500 bg-gray-50 p-2 rounded border border-gray-200">
                Tech Stack: {item.techStack}
              </span>
              <span className="font-bold text-slate-900">{item.url}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

