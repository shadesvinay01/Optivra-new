"use client";

import React from "react";
import { Building2, ShieldCheck, Award, Globe, Users, Cpu, Target, CheckCircle2, Mail, Phone, MapPin, Zap, Check, HeartHandshake, Layers, Sparkles, FileText, ChevronRight } from "lucide-react";

interface DocumentProps {
  customData?: {
    companyName?: string;
    clientName?: string;
    clientCompany?: string;
    date?: string;
    tagline?: string;
    foundedYear?: string;
    headquarters?: string;
    ceoName?: string;
  };
}

export default function CompanyProfileDoc({ customData }: DocumentProps) {
  const companyName = customData?.companyName || "OPTIVRA";
  const clientCompany = customData?.clientCompany || customData?.clientName || "Valued Enterprise Client";
  const tagline = customData?.tagline || "Building Intelligent Software for the AI-Driven Business";

  return (
    <div className="space-y-12 text-slate-900 leading-relaxed font-sans max-w-[800px] mx-auto bg-white p-2">
      {/* 1. Cover Page */}
      <section className="bg-slate-950 text-white rounded-3xl p-10 sm:p-16 space-y-8 shadow-2xl border border-slate-800 relative overflow-hidden min-h-[560px] flex flex-col justify-between">
        {/* Subtle Background Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="flex justify-between items-start z-10">
          <div className="space-y-1">
            <span className="text-3xl font-black tracking-widest uppercase text-white">
              OPTIVRA<span className="text-[#D4AF37]">.</span>
            </span>
            <div className="text-[11px] text-amber-400 font-mono tracking-widest">AI-FIRST TECHNOLOGY & PRODUCT ENGINEERING • 2026 COMPANY PROFILE</div>
          </div>
          <span className="px-3.5 py-1.5 bg-[#D4AF37] text-slate-950 text-xs font-black rounded-xl uppercase tracking-widest shadow-md">
            COMPANY PROFILE
          </span>
        </div>

        <div className="space-y-4 z-10 my-auto py-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-semibold text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" /> AI-First Software & Product Engineering
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight text-white">
            Building Intelligent Software for the AI-Driven Business
          </h1>
          <p className="text-base text-amber-200/90 font-medium max-w-2xl leading-relaxed">
            {tagline}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15 text-xs text-gray-300 z-10">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <span className="text-gray-400 block uppercase text-[10px] font-bold">Location</span>
            India-based • Serving Global Clients
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <span className="text-gray-400 block uppercase text-[10px] font-bold">Prepared For</span>
            {clientCompany}
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <span className="text-gray-400 block uppercase text-[10px] font-bold">Specialization</span>
            AI/ML & Product Engineering
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <span className="text-gray-400 block uppercase text-[10px] font-bold">Delivery Model</span>
            Flexible Global Delivery
          </div>
        </div>
      </section>

      {/* 2. Executive Leadership Welcome */}
      <section className="p-8 bg-slate-50 border border-slate-200 rounded-2xl space-y-4 relative">
        <div className="flex items-center gap-3 border-b border-slate-300 pb-3">
          <span className="w-8 h-8 rounded-full bg-slate-900 text-[#D4AF37] font-black text-sm flex items-center justify-center">02</span>
          <h2 className="text-2xl font-bold uppercase tracking-tight text-slate-900">Welcome Letter from Leadership</h2>
        </div>
        <div className="space-y-3 text-xs text-slate-700 italic leading-relaxed pt-1">
          <p className="text-sm font-semibold text-slate-900 not-italic">Dear Valued Clients & Partners,</p>
          <p>
            "Optivra is an AI-first technology and product engineering company focused on building intelligent software, AI systems, automation platforms, SaaS products, and custom digital solutions."
          </p>
          <p>
            "We combine AI/ML engineering with full-stack product development to help startups, growing businesses, and organizations turn complex ideas and operational challenges into practical technology."
          </p>
        </div>
        <div className="pt-3 border-t border-slate-200 text-xs font-bold text-slate-900 flex justify-between items-center">
          <span>— Leadership Team, Optivra</span>
          <span className="text-slate-500 font-mono text-[11px]">https://www.optivra.in/</span>
        </div>
      </section>

      {/* 3. Company Overview & Capability Statements */}
      <section className="space-y-5">
        <div className="flex items-center gap-3 border-b-2 border-slate-950 pb-2">
          <span className="w-8 h-8 rounded-full bg-slate-900 text-[#D4AF37] font-black text-sm flex items-center justify-center">03</span>
          <h2 className="text-2xl font-bold uppercase tracking-tight">Company Overview & Capabilities</h2>
        </div>
        <p className="text-xs text-slate-700 leading-relaxed">
          Optivra is an AI-first technology and product engineering company that helps startups, growing businesses, and organizations build, automate, and scale with AI and modern software engineering. Based in India, we deliver high-quality digital products and custom software solutions to clients worldwide through an efficient international delivery model.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-slate-950 text-white rounded-2xl text-center space-y-1 border border-slate-800">
            <div className="text-lg font-black text-[#D4AF37]">AI-First</div>
            <div className="text-[11px] text-gray-300 font-medium">Engineering Capability</div>
          </div>
          <div className="p-4 bg-slate-950 text-white rounded-2xl text-center space-y-1 border border-slate-800">
            <div className="text-lg font-black text-emerald-400">End-to-End</div>
            <div className="text-[11px] text-gray-300 font-medium">Product Development</div>
          </div>
          <div className="p-4 bg-slate-950 text-white rounded-2xl text-center space-y-1 border border-slate-800">
            <div className="text-lg font-black text-white">Global</div>
            <div className="text-[11px] text-gray-300 font-medium">Delivery Capability</div>
          </div>
          <div className="p-4 bg-slate-950 text-white rounded-2xl text-center space-y-1 border border-slate-800">
            <div className="text-lg font-black text-[#D4AF37]">Product & R&D</div>
            <div className="text-[11px] text-gray-300 font-medium">Technology Portfolio</div>
          </div>
        </div>
      </section>

      {/* 4. Vision & Mission Cards */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 border-b-2 border-slate-950 pb-2">
          <span className="w-8 h-8 rounded-full bg-slate-900 text-[#D4AF37] font-black text-sm flex items-center justify-center">04</span>
          <h2 className="text-2xl font-bold uppercase tracking-tight">Vision & Mission</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-3 border border-slate-800 shadow-md">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-full">
              OUR VISION
            </span>
            <h3 className="text-xl font-bold">Practical AI & Software Excellence</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              To empower organizations with practical artificial intelligence and modern product engineering, turning complex operational challenges into scalable, intuitive digital software.
            </p>
          </div>

          <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-3 border border-slate-800 shadow-md">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-full">
              OUR MISSION
            </span>
            <h3 className="text-xl font-bold">Empowering Businesses Through Software</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              To deliver intelligent software applications, AI automation, RAG knowledge systems, and robust full-stack platforms through a transparent and cost-efficient global delivery model.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Core Primary Capabilities */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 border-b-2 border-slate-950 pb-2">
          <span className="w-8 h-8 rounded-full bg-slate-900 text-[#D4AF37] font-black text-sm flex items-center justify-center">05</span>
          <h2 className="text-2xl font-bold uppercase tracking-tight">Primary Capabilities</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          {[
            { title: "AI/ML Engineering & Generative AI", desc: "Custom LLM integrations, fine-tuning, retrieval-augmented generation (RAG), and domain vector search." },
            { title: "AI Agents & Workflow Automation", desc: "Multi-agent autonomous systems, process automation pipelines, and API integrations." },
            { title: "Computer Vision & Data Science", desc: "Visual document OCR, object detection, automated data parsing, and predictive analytics." },
            { title: "SaaS & MVP Development", desc: "Full-stack SaaS application development, authentication, multi-tenancy, and subscription billing engines." },
            { title: "Full-Stack Software Engineering", desc: "Scalable web & mobile engineering, microservices architecture, and API development." },
            { title: "Cloud Engineering & AI Consulting", desc: "Cloud deployment, DevOps, infrastructure optimization, and technical AI strategy." }
          ].map((item, idx) => (
            <div key={idx} className="p-4 border border-slate-200 rounded-xl bg-slate-50/50 space-y-1">
              <div className="font-bold text-sm text-slate-900">{item.title}</div>
              <p className="text-slate-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. QA, Security & IP Governance */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 border-b-2 border-slate-950 pb-2">
          <span className="w-8 h-8 rounded-full bg-slate-900 text-[#D4AF37] font-black text-sm flex items-center justify-center">06</span>
          <h2 className="text-2xl font-bold uppercase tracking-tight">QA, Security & IP Governance</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-5 border border-slate-200 rounded-2xl bg-slate-50 space-y-2">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider block">Security & Quality</span>
            <div className="font-bold text-sm text-slate-900">QA, Security & Compliance Readiness</div>
            <p className="text-slate-600">Automated testing, security review, deployment controls, and compliance-readiness practices appropriate to project requirements.</p>
          </div>

          <div className="p-5 border border-slate-200 rounded-2xl bg-slate-50 space-y-2">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider block">Legal Governance</span>
            <div className="font-bold text-sm text-slate-900">Intellectual Property Ownership</div>
            <p className="text-slate-600">Ownership and licensing of project deliverables are governed by the applicable service agreement, statement of work, and payment terms. Exact IP ownership must always be determined by the signed agreement.</p>
          </div>
        </div>
      </section>

      {/* 7. Flexible Engagement Models */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 border-b-2 border-slate-950 pb-2">
          <span className="w-8 h-8 rounded-full bg-slate-900 text-[#D4AF37] font-black text-sm flex items-center justify-center">07</span>
          <h2 className="text-2xl font-bold uppercase tracking-tight">Flexible Engagement Models</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs">
          <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 space-y-1">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase block">Fixed-Price</span>
            <div className="font-bold text-slate-900">Fixed-Price Project</div>
            <p className="text-slate-600 text-[11px]">For clearly defined project scopes and milestone deliverables.</p>
          </div>
          <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 space-y-1">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase block">Time & Materials</span>
            <div className="font-bold text-slate-900">Time & Materials</div>
            <p className="text-slate-600 text-[11px]">For evolving requirements with flexible hourly billing ($45–$85/hr).</p>
          </div>
          <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 space-y-1">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase block">Dedicated</span>
            <div className="font-bold text-slate-900">Dedicated Engineering</div>
            <p className="text-slate-600 text-[11px]">For ongoing product development with dedicated engineers ($3,500–$6,500/mo).</p>
          </div>
          <div className="p-4 border border-slate-200 rounded-xl bg-slate-50 space-y-1">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase block">Partnership</span>
            <div className="font-bold text-slate-900">Monthly Partnership</div>
            <p className="text-slate-600 text-[11px]">For companies requiring ongoing technical support and maintenance.</p>
          </div>
        </div>
      </section>

      {/* 8. Contact & Footer */}
      <section className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 space-y-6 border border-slate-800">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">OPTIVRA</h2>
            <p className="text-xs text-gray-400">AI-First Technology & Product Engineering Company</p>
          </div>
          <span className="text-xs text-[#D4AF37] font-mono font-bold">https://www.optivra.in/</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-300">
          <div className="space-y-1">
            <span className="font-bold text-[#D4AF37] uppercase block text-[10px]">Location Positioning</span>
            <p className="text-white font-semibold">India-based</p>
            <p className="text-gray-400">Serving clients globally</p>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-[#D4AF37] uppercase block text-[10px]">Official Contact Email</span>
            <p className="text-white font-semibold font-mono">hello@optivra.in</p>
            <p className="text-gray-400">Website: https://www.optivra.in/</p>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-[#D4AF37] uppercase block text-[10px]">Engagement Inquiries</span>
            <p className="text-white font-semibold">Cost-Efficient International Delivery</p>
            <p className="text-gray-400">Schedule a project consultation</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 text-center text-[10px] text-gray-500">
          © 2026 OPTIVRA. All Rights Reserved. Company Profile Document.
        </div>
      </section>
    </div>
  );
}

