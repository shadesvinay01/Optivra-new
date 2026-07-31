"use client";

import React from "react";
import { CheckCircle2, Award, Shield, FileText, Globe, Mail, Phone } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function CapabilityStatementDoc() {
  return (
    <div className="space-y-8 text-gray-900 leading-relaxed font-sans text-xs">
      {/* Header Banner */}
      <div className="border-b-4 border-[#D4AF37] pb-6 flex justify-between items-start">
        <div>
          <span className="text-xs font-bold bg-slate-950 text-[#D4AF37] px-3 py-1 rounded uppercase tracking-widest">
            OFFICIAL CAPABILITY STATEMENT (1-2 PAGES)
          </span>
          <h1 className="text-3xl font-black text-slate-900 mt-2">OPTIVRA SOLUTIONS</h1>
          <p className="text-xs text-gray-600 font-medium">Enterprise AI Transformation & High-Velocity Engineering</p>
        </div>
        <div className="text-right text-xs space-y-1 font-mono text-gray-600">
          <div>UEI / CAGE: OPT-9842-X</div>
          <div>NAICS: 541511, 541512, 541715</div>
          <div>DUNS: 8942-0192</div>
        </div>
      </div>

      {/* 1. Company Overview */}
      <div className="space-y-2">
        <h2 className="font-bold text-sm text-slate-900 uppercase tracking-wider border-b border-gray-300 pb-1">
          Company Overview
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Optivra is an AI-first technology consulting firm specializing in enterprise artificial intelligence, custom software development, autonomous multi-agent systems, and cloud-native architecture. We help decision-makers reduce operational overhead, automate complex workflows, and build scalable digital products with zero tech debt.
        </p>
      </div>

      {/* 2. Core Competencies & Industries */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-4 border border-gray-200 rounded-xl bg-slate-50 space-y-2">
          <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-gray-300 pb-1">
            Core Competencies
          </h3>
          <div className="grid grid-cols-2 gap-1.5 text-[11px] text-gray-700">
            <div>✓ AI Strategy & Advisory</div>
            <div>✓ AI Agent Development</div>
            <div>✓ AI Workflow Automation</div>
            <div>✓ Generative AI & RAG</div>
            <div>✓ Machine Learning & ML</div>
            <div>✓ Computer Vision & OCR</div>
            <div>✓ Custom SaaS Development</div>
            <div>✓ Cloud & DevOps Solutions</div>
          </div>
        </div>

        <div className="p-4 border border-gray-200 rounded-xl bg-slate-50 space-y-2">
          <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider border-b border-gray-300 pb-1">
            Industries Served
          </h3>
          <div className="grid grid-cols-2 gap-1.5 text-[11px] text-gray-700">
            <div>• Healthcare & MedTech</div>
            <div>• Finance & FinTech</div>
            <div>• Retail & E-Commerce</div>
            <div>• Manufacturing Tech</div>
            <div>• Real Estate & PropTech</div>
            <div>• Logistics & Supply Chain</div>
            <div>• Public Sector & Gov</div>
            <div>• Education & EdTech</div>
          </div>
        </div>
      </div>

      {/* 3. Technology Stack */}
      <div className="space-y-2">
        <h2 className="font-bold text-sm text-slate-900 uppercase tracking-wider border-b border-gray-300 pb-1">
          Technology Stack
        </h2>
        <p className="text-gray-700 font-mono text-[11px] bg-slate-50 p-3 rounded border border-gray-200">
          OpenAI • Anthropic Claude • Google Gemini • LangChain • LangGraph • Python • FastAPI • React 19 • Next.js 16 • Node.js • TypeScript • PostgreSQL • Redis • Docker • Kubernetes • AWS • Azure • GCP • PyTorch • TensorFlow
        </p>
      </div>

      {/* 4. Key Differentiators & Engagement Models */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <h2 className="font-bold text-sm text-slate-900 uppercase tracking-wider border-b border-gray-300 pb-1">
            Key Differentiators
          </h2>
          <ul className="space-y-1 text-gray-700 text-[11px]">
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> <strong>AI-First Engineering:</strong> Models integrated natively into code backends.</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> <strong>Fast MVP Delivery:</strong> Concept to production in as little as 3-4 weeks.</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> <strong>100% IP Transfer:</strong> Client retains full ownership of source code and data.</li>
            <li className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> <strong>Scalable Cloud Architecture:</strong> Zero-downtime microservices.</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h2 className="font-bold text-sm text-slate-900 uppercase tracking-wider border-b border-gray-300 pb-1">
            Engagement Models
          </h2>
          <div className="grid grid-cols-2 gap-2 text-[11px]">
            <div className="p-2 bg-slate-900 text-white rounded text-center">
              <div className="font-bold text-[#D4AF37]">Fixed Price</div>
              <div className="text-[10px] text-gray-300">Milestone scope</div>
            </div>
            <div className="p-2 bg-slate-900 text-white rounded text-center">
              <div className="font-bold text-[#D4AF37]">Time & Material</div>
              <div className="text-[10px] text-gray-300">Flexible hourly</div>
            </div>
            <div className="p-2 bg-slate-900 text-white rounded text-center">
              <div className="font-bold text-[#D4AF37]">Dedicated Team</div>
              <div className="text-[10px] text-gray-300">Senior pod</div>
            </div>
            <div className="p-2 bg-slate-900 text-white rounded text-center">
              <div className="font-bold text-[#D4AF37]">Staff Augmentation</div>
              <div className="text-[10px] text-gray-300">Embedded devs</div>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Contact Information */}
      <div className="p-4 bg-slate-950 text-white rounded-xl flex flex-wrap justify-between items-center gap-4">
        <div className="space-y-1">
          <div className="font-bold text-[#D4AF37] uppercase text-xs">Optivra Solutions Inc.</div>
          <div className="text-[11px] text-gray-300">Website: https://optivra.in | Email: hello@optivra.in</div>
        </div>
        <div className="text-[11px] text-gray-400 font-mono">
          LinkedIn: linkedin.com/company/optivra
        </div>
      </div>
    </div>
  );
}
