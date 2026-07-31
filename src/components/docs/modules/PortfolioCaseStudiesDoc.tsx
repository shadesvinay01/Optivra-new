"use client";

import React from "react";
import { Award, CheckCircle2, TrendingUp, Cpu, Globe, ArrowUpRight } from "lucide-react";

export default function PortfolioCaseStudiesDoc() {
  const caseStudies = [
    {
      title: "HealthTech AI Patient Triage Platform",
      client: "Global Healthcare Provider (US)",
      metrics: "98% Accuracy • 50,000+ Monthly Queries • $450K Annual Savings",
      problem: "High emergency room intake congestion and delayed patient triage responses.",
      solution: "HIPAA-compliant RAG AI triage assistant with real-time EHR integration.",
      techStack: "Python, FastAPI, OpenAI GPT-4, Pinecone, Next.js, AWS Medical",
      timeline: "4 Weeks"
    },
    {
      title: "FinTech Automated Invoice & OCR Engine",
      client: "Enterprise Supply Chain FinTech",
      metrics: "12sec Processing (vs 4hrs) • 99.8% Field Parsing • $1.2M Recovered",
      problem: "Manual verification of thousands of daily multi-page vendor invoices causing payment delays.",
      solution: "Computer Vision & YOLOv8 OCR pipeline with automated ERP ledger sync.",
      techStack: "PyTorch, OpenCV, YOLOv8, FastAPI, PostgreSQL, React",
      timeline: "5 Weeks"
    },
    {
      title: "E-Commerce Autonomous Multi-Agent Support",
      client: "Direct-to-Consumer Retail Platform",
      metrics: "72% Automated Deflection • 2.4x CSAT Score Increase",
      problem: "Surging customer support volume during peak shopping seasons overwhelming live agents.",
      solution: "Autonomous multi-agent support network handling order tracking, refunds, and recommendations.",
      techStack: "LangGraph, CrewAI, WhatsApp Business API, Shopify API, Node.js",
      timeline: "3 Weeks"
    }
  ];

  return (
    <div className="space-y-8 text-gray-900 leading-relaxed font-sans text-xs">
      <div className="bg-slate-950 text-white rounded-2xl p-8 space-y-2 border border-slate-800">
        <span className="px-3 py-1 bg-[#D4AF37] text-slate-950 text-xs font-bold rounded uppercase tracking-widest">
          Case Studies & Client Impact
        </span>
        <h1 className="text-3xl font-black">Featured Enterprise Portfolio</h1>
        <p className="text-gray-300">Real-world production case studies detailing technical architecture, execution, and quantifiable business ROI.</p>
      </div>

      <div className="space-y-6">
        {caseStudies.map((cs, idx) => (
          <div key={idx} className="p-6 border border-gray-200 rounded-2xl bg-white space-y-3 shadow-xs">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gray-200 pb-2">
              <div>
                <span className="text-[10px] font-bold uppercase text-[#D4AF37] block">Case Study #{idx + 1}</span>
                <h2 className="text-base font-bold text-slate-900">{cs.title}</h2>
              </div>
              <span className="text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-lg">
                {cs.metrics}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
              <div className="space-y-1">
                <span className="font-bold text-slate-900 uppercase text-[10px]">The Challenge</span>
                <p className="text-gray-600">{cs.problem}</p>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-slate-900 uppercase text-[10px]">The Solution</span>
                <p className="text-gray-600">{cs.solution}</p>
              </div>
            </div>

            <div className="pt-2 flex justify-between items-center text-[11px]">
              <span className="font-mono text-gray-500 bg-gray-50 p-2 rounded border border-gray-200">
                Stack: {cs.techStack}
              </span>
              <span className="font-bold text-slate-900">Delivery: {cs.timeline}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
