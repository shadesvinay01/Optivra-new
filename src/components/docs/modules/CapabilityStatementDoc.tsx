"use client";

import React from "react";
import { CheckCircle2, Shield, Globe, Mail } from "lucide-react";

export default function CapabilityStatementDoc() {
  return (
    <div className="space-y-8 text-gray-900 leading-relaxed font-sans text-xs max-w-[800px] mx-auto bg-white p-2">
      {/* Header Banner */}
      <div className="border-b-4 border-[#D4AF37] pb-6 flex justify-between items-start">
        <div>
          <span className="text-xs font-bold bg-slate-950 text-[#D4AF37] px-3 py-1 rounded uppercase tracking-widest">
            OFFICIAL CAPABILITY STATEMENT (2 PAGES)
          </span>
          <h1 className="text-3xl font-black text-slate-900 mt-2">OPTIVRA</h1>
          <p className="text-xs text-gray-600 font-medium">AI-First Technology & Product Engineering</p>
        </div>
        <div className="text-right text-xs space-y-1 font-mono text-gray-600">
          <div>Website: https://www.optivra.in/</div>
          <div>Contact: hello@optivra.in</div>
          <div>Location: India-based</div>
        </div>
      </div>

      {/* 1. Company Overview */}
      <div className="space-y-2">
        <h2 className="font-bold text-sm text-slate-900 uppercase tracking-wider border-b border-gray-300 pb-1">
          Company Overview
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Optivra is an AI-first technology and product engineering company focused on building intelligent software, AI systems, automation platforms, SaaS products, and custom digital solutions. We combine AI/ML engineering with full-stack product development to help startups, growing businesses, and organizations turn complex ideas and operational challenges into practical technology.
        </p>
      </div>

      {/* 2. Core Capabilities & Service Areas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border border-gray-200 rounded-xl bg-slate-50 space-y-2">
          <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-gray-300 pb-1">
            Primary Capabilities
          </h3>
          <div className="grid grid-cols-2 gap-1.5 text-[11px] text-gray-700">
            <div>✓ AI/ML Engineering</div>
            <div>✓ Generative AI & RAG</div>
            <div>✓ AI Agents & Automation</div>
            <div>✓ Computer Vision & OCR</div>
            <div>✓ SaaS MVP Development</div>
            <div>✓ Full-Stack Software</div>
            <div>✓ Cloud & DevOps Eng.</div>
            <div>✓ AI Strategy Consulting</div>
          </div>
        </div>

        <div className="p-4 border border-gray-200 rounded-xl bg-slate-50 space-y-2">
          <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-gray-300 pb-1">
            Technology Portfolio & R&D
          </h3>
          <div className="space-y-1.5 text-[11px] text-gray-700">
            <div>• <strong>Optivra AI:</strong> Enterprise AI & Automation Platform Initiative</div>
            <div>• <strong>ShadowAgent:</strong> Multi-Agent Operational Framework</div>
            <div>• <strong>Jugnu AI:</strong> Intelligent Software R&D Prototype</div>
          </div>
        </div>
      </div>

      {/* 3. Technology Stack */}
      <div className="space-y-2">
        <h2 className="font-bold text-sm text-slate-900 uppercase tracking-wider border-b border-gray-300 pb-1">
          Core Technology Stack
        </h2>
        <p className="text-gray-700 font-mono text-[11px] bg-slate-50 p-3 rounded border border-gray-200">
          Python • OpenAI • Anthropic • FastApi • PyTorch • OpenCV • Next.js 16 • React • TypeScript • Node.js • PostgreSQL • Pinecone • Qdrant • Docker • AWS • GCP • TailwindCSS
        </p>
      </div>

      {/* 4. Key Differentiators & Engagement Models */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h2 className="font-bold text-sm text-slate-900 uppercase tracking-wider border-b border-gray-300 pb-1">
            Key Differentiators
          </h2>
          <ul className="space-y-1.5 text-gray-700 text-[11px]">
            <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" /> <strong>AI-First Engineering:</strong> Practical AI integrated natively into scalable backends.</li>
            <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" /> <strong>Efficient Delivery Model:</strong> India-based team serving international clients.</li>
            <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" /> <strong>Clear IP Governance:</strong> Deliverables governed transparently per SOW terms.</li>
            <li className="flex items-start gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" /> <strong>Quality Controls:</strong> Automated testing & security readiness practices.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-sm text-slate-900 uppercase tracking-wider border-b border-gray-300 pb-1">
            Engagement Models
          </h2>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2 bg-slate-900 text-white rounded text-center">
              <div className="font-bold text-[#D4AF37]">Fixed-Price</div>
              <div className="text-[10px] text-gray-300">Milestone scope</div>
            </div>
            <div className="p-2 bg-slate-900 text-white rounded text-center">
              <div className="font-bold text-[#D4AF37]">Time & Material</div>
              <div className="text-[10px] text-gray-300">$45–$85/hour</div>
            </div>
            <div className="p-2 bg-slate-900 text-white rounded text-center">
              <div className="font-bold text-[#D4AF37]">Dedicated Team</div>
              <div className="text-[10px] text-gray-300">$3.5k–$6.5k/mo</div>
            </div>
            <div className="p-2 bg-slate-900 text-white rounded text-center">
              <div className="font-bold text-[#D4AF37]">Tech Partnership</div>
              <div className="text-[10px] text-gray-300">Monthly support</div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Contact Information */}
      <div className="p-4 bg-slate-950 text-white rounded-xl flex flex-wrap justify-between items-center gap-4">
        <div className="space-y-1">
          <div className="font-bold text-[#D4AF37] uppercase text-xs">OPTIVRA</div>
          <div className="text-[11px] text-gray-300">Website: https://www.optivra.in/ | Email: hello@optivra.in</div>
        </div>
        <div className="text-[11px] text-gray-400 font-mono">
          India-Based • Global Delivery
        </div>
      </div>
    </div>
  );
}

