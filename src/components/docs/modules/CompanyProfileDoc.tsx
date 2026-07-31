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
  const companyName = customData?.companyName || "Optivra Solutions";
  const clientCompany = customData?.clientCompany || customData?.clientName || "Valued Enterprise Client";
  const tagline = customData?.tagline || "Enterprise AI, Full-Stack Engineering & Autonomous Systems";

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
            <div className="text-[11px] text-amber-400 font-mono tracking-widest">OFFICIAL EXECUTIVE BROCHURE • 2026 EDITION</div>
          </div>
          <span className="px-3.5 py-1.5 bg-[#D4AF37] text-slate-950 text-xs font-black rounded-xl uppercase tracking-widest shadow-md">
            CONFIDENTIAL PROFILE
          </span>
        </div>

        <div className="space-y-4 z-10 my-auto py-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/15 rounded-full text-xs font-semibold text-[#D4AF37]">
            <Sparkles className="w-3.5 h-3.5" /> High-Velocity Software & Enterprise AI
          </div>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-white">
            Engineering Enterprise Intelligence
          </h1>
          <p className="text-lg text-amber-200/90 font-medium max-w-2xl leading-relaxed">
            {tagline}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/15 text-xs text-gray-300 z-10">
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <span className="text-gray-400 block uppercase text-[10px] font-bold">Headquarters</span>
            San Francisco, CA • USA
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <span className="text-gray-400 block uppercase text-[10px] font-bold">Prepared For</span>
            {clientCompany}
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <span className="text-gray-400 block uppercase text-[10px] font-bold">Specialization</span>
            Enterprise AI & Full-Stack
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/10">
            <span className="text-gray-400 block uppercase text-[10px] font-bold">Global SLA</span>
            24/7 Dual-Shore Delivery
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
          <p className="text-sm font-semibold text-slate-900 not-italic">Dear Valued Enterprise Partners & Leaders,</p>
          <p>
            "In today's hyper-competitive global market, artificial intelligence and modern cloud architectures are no longer optional extras—they are the foundational engines of enterprise survival and growth."
          </p>
          <p>
            "At Optivra, our purpose is clear: to bridge advanced technology research with production-grade engineering, delivering resilient software, autonomous AI agents, and workflow automations that create compounding business value."
          </p>
        </div>
        <div className="pt-3 border-t border-slate-200 text-xs font-bold text-slate-900 flex justify-between items-center">
          <span>— Executive Leadership Team, Optivra Solutions Inc.</span>
          <span className="text-slate-500 font-mono text-[11px]">San Francisco, CA</span>
        </div>
      </section>

      {/* 3. Company Overview & Core Metrics */}
      <section className="space-y-5">
        <div className="flex items-center gap-3 border-b-2 border-slate-950 pb-2">
          <span className="w-8 h-8 rounded-full bg-slate-900 text-[#D4AF37] font-black text-sm flex items-center justify-center">03</span>
          <h2 className="text-2xl font-bold uppercase tracking-tight">Company Overview & Scale</h2>
        </div>
        <p className="text-xs text-slate-700 leading-relaxed">
          Optivra Solutions is a premier global technology consultancy. We deploy embedded senior engineering pods across North America and Asia-Pacific to build cloud-native applications, generative AI systems, and automated data pipelines for growth-stage platforms and enterprise leaders.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 bg-slate-950 text-white rounded-2xl text-center space-y-1 border border-slate-800">
            <div className="text-3xl font-black text-[#D4AF37]">50+</div>
            <div className="text-[11px] text-gray-300 font-medium">Enterprise Projects</div>
          </div>
          <div className="p-4 bg-slate-950 text-white rounded-2xl text-center space-y-1 border border-slate-800">
            <div className="text-3xl font-black text-emerald-400">99.9%</div>
            <div className="text-[11px] text-gray-300 font-medium">Infrastructure Uptime</div>
          </div>
          <div className="p-4 bg-slate-950 text-white rounded-2xl text-center space-y-1 border border-slate-800">
            <div className="text-3xl font-black text-white">4.9/5</div>
            <div className="text-[11px] text-gray-300 font-medium">Client CSAT Score</div>
          </div>
          <div className="p-4 bg-slate-950 text-white rounded-2xl text-center space-y-1 border border-slate-800">
            <div className="text-3xl font-black text-[#D4AF37]">100%</div>
            <div className="text-[11px] text-gray-300 font-medium">IP Ownership Transfer</div>
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
              GLOBAL VISION
            </span>
            <h3 className="text-xl font-bold">Benchmark for Enterprise Intelligence</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              To be the global gold standard in AI integration—where every business idea transforms into optimized reality, and technology serves as the ultimate catalyst for human potential.
            </p>
          </div>

          <div className="p-6 bg-slate-900 text-white rounded-2xl space-y-3 border border-slate-800 shadow-md">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest bg-white/10 px-2.5 py-1 rounded-full">
              OUR MISSION
            </span>
            <h3 className="text-xl font-bold">Empowering Businesses Through Velocity</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              To empower organizations with intelligent software architectures and autonomous systems that reduce operational overhead, eliminate technical debt, and unlock new revenue streams.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Services & USD Rate Sheet */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 border-b-2 border-slate-950 pb-2">
          <span className="w-8 h-8 rounded-full bg-slate-900 text-[#D4AF37] font-black text-sm flex items-center justify-center">05</span>
          <h2 className="text-2xl font-bold uppercase tracking-tight">Core Services (USD Rate Catalog)</h2>
        </div>
        <div className="space-y-3 text-xs">
          {[
            { name: "Enterprise AI & RAG Knowledge Systems", rateUSD: "$1,500 – $5,000 USD", desc: "Retrieval-Augmented Generation, vector database indexing, multi-channel deployment (Slack, Web, WhatsApp)." },
            { name: "Full-Stack Web & Next.js Platforms", rateUSD: "$1,200 – $4,500 USD", desc: "High-performance React/Next.js platforms, SSR/SSG optimization, Headless CMS, sub-second page loads." },
            { name: "SaaS MVP Development (Zero to Launch)", rateUSD: "$4,500 – $12,000 USD", desc: "Complete multi-tenant SaaS architecture, Clerk authentication, Stripe billing, admin control center." },
            { name: "Cross-Platform Mobile Apps (iOS & Android)", rateUSD: "$3,000 – $8,500 USD", desc: "Fluid 60fps UI built with React Native / Flutter, offline storage sync, push notifications gateway." },
            { name: "Cloud Migration & DevOps Engineering", rateUSD: "$2,000 – $6,000 USD", desc: "AWS / GCP Terraform infrastructure, Kubernetes orchestration, Docker containerization, CI/CD automation." },
            { name: "Computer Vision & Autonomous Agents", rateUSD: "$2,500 – $9,000 USD", desc: "YOLO/OpenCV visual parsing, document OCR pipelines, multi-agent automated decision trees." }
          ].map((srv, idx) => (
            <div key={idx} className="p-4 border border-slate-200 rounded-xl bg-slate-50/50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="space-y-1">
                <div className="font-bold text-sm text-slate-900">{srv.name}</div>
                <p className="text-slate-600">{srv.desc}</p>
              </div>
              <span className="font-bold font-mono text-slate-950 bg-[#D4AF37]/20 border border-[#D4AF37]/40 px-3 py-1.5 rounded-lg whitespace-nowrap">
                Starting at {srv.rateUSD}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Development Workflow (5 Pillars) */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 border-b-2 border-slate-950 pb-2">
          <span className="w-8 h-8 rounded-full bg-slate-900 text-[#D4AF37] font-black text-sm flex items-center justify-center">06</span>
          <h2 className="text-2xl font-bold uppercase tracking-tight">Our 5-Stage Development Workflow</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 text-center text-xs">
          <div className="p-3.5 bg-slate-950 text-white rounded-xl space-y-1 border border-slate-800">
            <div className="font-bold text-[#D4AF37]">01. Discovery</div>
            <div className="text-[10px] text-gray-400">System audit & digital roadmap</div>
          </div>
          <div className="p-3.5 bg-slate-950 text-white rounded-xl space-y-1 border border-slate-800">
            <div className="font-bold text-[#D4AF37]">02. UI/UX Prototype</div>
            <div className="text-[10px] text-gray-400">Interactive Figma wireframes</div>
          </div>
          <div className="p-3.5 bg-slate-950 text-white rounded-xl space-y-1 border border-slate-800">
            <div className="font-bold text-[#D4AF37]">03. Agile Sprints</div>
            <div className="text-[10px] text-gray-400">Bi-weekly releases & working code</div>
          </div>
          <div className="p-3.5 bg-slate-950 text-white rounded-xl space-y-1 border border-slate-800">
            <div className="font-bold text-[#D4AF37]">04. QA & Security</div>
            <div className="text-[10px] text-gray-400">Automated testing & SOC2 audit</div>
          </div>
          <div className="p-3.5 bg-slate-950 text-white rounded-xl space-y-1 border border-slate-800">
            <div className="font-bold text-[#D4AF37]">05. Launch & Scale</div>
            <div className="text-[10px] text-gray-400">Cloud deployment & 30-day warranty</div>
          </div>
        </div>
      </section>

      {/* 7. Engagement Models (USD) */}
      <section className="space-y-4">
        <div className="flex items-center gap-3 border-b-2 border-slate-950 pb-2">
          <span className="w-8 h-8 rounded-full bg-slate-900 text-[#D4AF37] font-black text-sm flex items-center justify-center">07</span>
          <h2 className="text-2xl font-bold uppercase tracking-tight">Engagement Models (USD)</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-5 border border-slate-200 rounded-2xl bg-slate-50 space-y-2">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider block">Model A</span>
            <div className="font-bold text-sm text-slate-900">Dedicated Pod</div>
            <p className="text-slate-600">Full-time senior team (2-10 developers & architects) dedicated to your roadmap.</p>
            <div className="font-bold text-slate-950 font-mono text-[11px] pt-1">$3,500 – $6,500 USD / mo per dev</div>
          </div>

          <div className="p-5 border border-slate-200 rounded-2xl bg-slate-50 space-y-2">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider block">Model B</span>
            <div className="font-bold text-sm text-slate-900">Fixed-Price Project</div>
            <p className="text-slate-600">Best for well-defined MVPs, web portals, AI agents, and custom workflow automations.</p>
            <div className="font-bold text-slate-950 font-mono text-[11px] pt-1">Milestone Fixed Quote</div>
          </div>

          <div className="p-5 border border-slate-200 rounded-2xl bg-slate-50 space-y-2">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider block">Model C</span>
            <div className="font-bold text-sm text-slate-900">Time & Materials</div>
            <p className="text-slate-600">Flexible hourly or weekly sprint billing for evolving technical specifications.</p>
            <div className="font-bold text-slate-950 font-mono text-[11px] pt-1">$45 – $85 USD / hour</div>
          </div>
        </div>
      </section>

      {/* 8. Contact & Footer */}
      <section className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 space-y-6 border border-slate-800">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-white uppercase tracking-tight">Contact Information</h2>
            <p className="text-xs text-gray-400">Optivra Solutions Inc. • Global Technology Consultancy</p>
          </div>
          <span className="text-xs text-[#D4AF37] font-mono font-bold">www.optivra.com</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-gray-300">
          <div className="space-y-1">
            <span className="font-bold text-[#D4AF37] uppercase block text-[10px]">Headquarters</span>
            <p className="text-white font-semibold">San Francisco, CA • USA</p>
            <p className="text-gray-400">Bengaluru, KA • India</p>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-[#D4AF37] uppercase block text-[10px]">Direct Inquiries</span>
            <p className="text-white font-semibold font-mono">hello@optivra.com</p>
            <p className="text-gray-400">Response SLA: &lt;4 Hours</p>
          </div>

          <div className="space-y-1">
            <span className="font-bold text-[#D4AF37] uppercase block text-[10px]">Schedule Consultation</span>
            <p className="text-white font-semibold font-mono">calendly.com/hello-optivra</p>
            <p className="text-gray-400">Book Strategy Architecture Call</p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-4 text-center text-[10px] text-gray-500">
          © 2026 Optivra Solutions Inc. All Rights Reserved. Confidential Corporate Brochure.
        </div>
      </section>
    </div>
  );
}
