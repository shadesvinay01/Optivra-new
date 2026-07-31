"use client";

import React, { forwardRef } from "react";
import { CheckCircle2, ShieldCheck, Zap, Globe, Cpu, Terminal, Award, Clock, FileText, Check, Phone, Mail, ArrowRight, Target, Compass, Sparkles } from "lucide-react";

export interface ProposalData {
  clientName: string;
  clientCompany: string;
  projectTitle: string;
  proposalId: string;
  date: string;
  validUntil: string;
  currency: "USD" | "INR";
  discountPercent: number;
  taxPercent: number;
  customNotes: string;
  investmentAmountUSD?: number;
  items?: any[];
}

interface ProposalDocumentProps {
  data: ProposalData;
  isPrintMode?: boolean;
}

const ProposalDocument = forwardRef<HTMLDivElement, ProposalDocumentProps>(
  ({ data, isPrintMode = false }, ref) => {
    return (
      <div
        ref={ref}
        id="proposal-document"
        className={`w-full max-w-[850px] mx-auto bg-[#FBF9F5] text-gray-900 shadow-2xl font-sans transition-all space-y-12 ${
          isPrintMode ? "p-0 shadow-none border-none" : "p-8 sm:p-14 border border-gray-200 rounded-sm"
        }`}
      >
        {/* Page 1: Cover Page */}
        <section className="bg-[#4A2E20] text-white rounded-3xl p-10 sm:p-16 space-y-8 shadow-2xl relative overflow-hidden min-h-[550px] flex flex-col justify-between border border-[#382217]">
          <div className="flex justify-between items-start z-10">
            <div className="space-y-1">
              <span className="text-3xl font-black tracking-widest uppercase text-white">
                OPTIVRA<span className="text-[#D4AF37]">.</span>
              </span>
              <div className="text-xs text-amber-200/70 tracking-widest font-mono">OFFICIAL BUSINESS PROPOSAL</div>
            </div>
            <span className="px-3.5 py-1.5 bg-[#D4AF37] text-slate-950 text-xs font-bold rounded-lg uppercase tracking-widest">
              CONFIDENTIAL
            </span>
          </div>

          <div className="space-y-4 z-10 my-auto py-10">
            <div className="text-xs uppercase font-bold tracking-[0.2em] text-[#D4AF37]">
              TRANSFORMING IDEAS INTO INTELLIGENT SOLUTIONS
            </div>
            <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-tight text-white">
              Business<br />Proposal
            </h1>
          </div>

          <div className="pt-6 border-t border-amber-900/40 text-xs text-amber-100/80 z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <span className="text-amber-300/60 block uppercase text-[10px] font-bold">Presented By</span>
              <span className="font-bold text-sm text-white">OPTIVRA</span>
            </div>
            <div className="sm:text-right">
              <span className="text-amber-300/60 block uppercase text-[10px] font-bold">Prepared For</span>
              <span className="font-bold text-sm text-[#D4AF37]">
                {data.clientCompany || data.clientName || "[Client Company Name]"}
              </span>
            </div>
          </div>
        </section>

        {/* Page 2: About Us */}
        <section className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-200 space-y-6">
          <div className="border-b-2 border-[#4A2E20] pb-3 flex justify-between items-center">
            <h2 className="text-3xl font-black text-[#4A2E20] tracking-tight">About Us</h2>
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Optivra</span>
          </div>

          <p className="text-base text-gray-700 leading-relaxed">
            Optivra is a technology consultancy dedicated to helping businesses unlock the power of AI, machine learning, and modern software solutions. We focus on building intelligent, scalable systems that solve real business problems and create measurable impact.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-xs">
            <div className="p-4 bg-[#FBF9F5] rounded-xl border border-amber-900/10 space-y-1">
              <div className="font-bold text-[#4A2E20] text-sm">AI-First Approach</div>
              <p className="text-gray-600">Integrating machine intelligence directly into business systems.</p>
            </div>
            <div className="p-4 bg-[#FBF9F5] rounded-xl border border-amber-900/10 space-y-1">
              <div className="font-bold text-[#4A2E20] text-sm">Scalable Engineering</div>
              <p className="text-gray-600">Built for high availability, security, and enterprise growth.</p>
            </div>
            <div className="p-4 bg-[#FBF9F5] rounded-xl border border-amber-900/10 space-y-1">
              <div className="font-bold text-[#4A2E20] text-sm">Measurable Impact</div>
              <p className="text-gray-600">Focused on clear business metrics, efficiency, and ROI.</p>
            </div>
          </div>
        </section>

        {/* Page 3: Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 bg-[#4A2E20] text-white rounded-2xl space-y-4 shadow-md border border-[#382217] flex flex-col justify-between">
            <div className="space-y-3">
              <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">OUR PURPOSE</div>
              <h3 className="text-3xl font-black">MISSION</h3>
              <p className="text-xs text-amber-100/90 leading-relaxed pt-2">
                To empower innovators, creators, and businesses with intelligent solutions that blend data, design, and technology—driving measurable growth, meaningful impact, and lasting value in a rapidly evolving world.
              </p>
            </div>
            <div className="pt-6 border-t border-amber-900/40 text-[11px] text-[#D4AF37] font-semibold">
              • Data • Design • Technology
            </div>
          </div>

          <div className="p-8 bg-[#4A2E20] text-white rounded-2xl space-y-4 shadow-md border border-[#382217] flex flex-col justify-between">
            <div className="space-y-3">
              <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">OUR GOAL</div>
              <h3 className="text-3xl font-black">VISION</h3>
              <p className="text-xs text-amber-100/90 leading-relaxed pt-2">
                To become the global benchmark for innovation and intelligence—where every idea transforms into optimized reality, and technology serves as the ultimate catalyst for human potential.
              </p>
            </div>
            <div className="pt-6 border-t border-amber-900/40 text-[11px] text-[#D4AF37] font-semibold">
              • Innovation • Intelligence • Scale
            </div>
          </div>
        </section>

        {/* Page 4: Problem Statement */}
        <section className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-200 space-y-6">
          <div className="border-b-2 border-[#4A2E20] pb-3">
            <h2 className="text-3xl font-black text-[#4A2E20] tracking-tight">Problem Statement</h2>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed font-medium">
            In today's fast-moving markets, most organizations face similar technology roadblocks:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 bg-amber-50/50 border border-amber-200/60 rounded-xl space-y-1">
              <div className="font-bold text-[#4A2E20]">❌ Legacy Systems</div>
              <p className="text-gray-600">Monolithic architectures that slow down innovation and updates.</p>
            </div>
            <div className="p-4 bg-amber-50/50 border border-amber-200/60 rounded-xl space-y-1">
              <div className="font-bold text-[#4A2E20]">❌ Disconnected Data</div>
              <p className="text-gray-600">Siloed data repositories limiting accuracy and real-time insights.</p>
            </div>
            <div className="p-4 bg-amber-50/50 border border-amber-200/60 rounded-xl space-y-1">
              <div className="font-bold text-[#4A2E20]">❌ Manual Workflows</div>
              <p className="text-gray-600">Repetitive manual tasks that waste valuable team time and resources.</p>
            </div>
            <div className="p-4 bg-amber-50/50 border border-amber-200/60 rounded-xl space-y-1">
              <div className="font-bold text-[#4A2E20]">❌ Lack of In-House AI Expertise</div>
              <p className="text-gray-600">Difficulty hiring and retaining skilled AI, ML, and automation talent.</p>
            </div>
          </div>

          <div className="p-4 bg-[#4A2E20] text-white rounded-xl text-xs space-y-1">
            <div className="font-bold text-[#D4AF37]">The Impact:</div>
            <p className="text-amber-100/90 leading-relaxed">
              These gaps cause inefficiency, poor scalability, and missed growth opportunities. Businesses know they must digitize—they just need a partner who can make it happen intelligently and effectively.
            </p>
          </div>
        </section>

        {/* Page 5: Our Solution / Approach */}
        <section className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-200 space-y-6">
          <div className="border-b-2 border-[#4A2E20] pb-3">
            <h2 className="text-3xl font-black text-[#4A2E20] tracking-tight">Our Solution / Approach</h2>
          </div>

          <p className="text-sm text-gray-700 leading-relaxed font-medium">
            Optivra delivers end-to-end IT transformation built on four core pillars:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-5 bg-[#FBF9F5] border border-amber-900/10 rounded-xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#4A2E20] text-[#D4AF37] font-bold text-xs flex items-center justify-center">1</span>
                <span className="font-bold text-base text-[#4A2E20]">Consult</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We assess current systems, identify inefficiencies, and build a clear digital roadmap tailored to your goals.
              </p>
            </div>

            <div className="p-5 bg-[#FBF9F5] border border-amber-900/10 rounded-xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#4A2E20] text-[#D4AF37] font-bold text-xs flex items-center justify-center">2</span>
                <span className="font-bold text-base text-[#4A2E20]">Build</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We design and develop scalable technology solutions tailored precisely to your specific business priorities.
              </p>
            </div>

            <div className="p-5 bg-[#FBF9F5] border border-amber-900/10 rounded-xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#4A2E20] text-[#D4AF37] font-bold text-xs flex items-center justify-center">3</span>
                <span className="font-bold text-base text-[#4A2E20]">Automate</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We integrate AI and automation to reduce manual processes, accelerate velocity, and increase data accuracy.
              </p>
            </div>

            <div className="p-5 bg-[#FBF9F5] border border-amber-900/10 rounded-xl space-y-2">
              <div className="flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-[#4A2E20] text-[#D4AF37] font-bold text-xs flex items-center justify-center">4</span>
                <span className="font-bold text-base text-[#4A2E20]">Scale</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                We provide continuous optimization, analytics, and support to sustain long-term business growth.
              </p>
            </div>
          </div>

          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-950 font-semibold text-center">
            "Our model ensures measurable results—not just technology deployment, but complete business transformation."
          </div>
        </section>

        {/* Page 6: What We Do */}
        <section className="bg-[#4A2E20] text-white rounded-2xl p-8 sm:p-12 shadow-xl space-y-6 border border-[#382217]">
          <div className="border-b border-amber-900/50 pb-3 flex justify-between items-center">
            <h2 className="text-3xl font-black text-white tracking-tight">What We Do</h2>
            <span className="text-xs text-[#D4AF37] font-mono">OPTIVRA CAPABILITIES</span>
          </div>

          <p className="text-xs text-amber-100/90 leading-relaxed">
            We believe technology should simplify growth, not complicate it. Our mission is to make advanced AI and software capabilities accessible to businesses of all sizes, empowering them to operate smarter, faster, and more competitively.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs">
            {[
              "TECHNOLOGY CONSULTING",
              "AI & MACHINE LEARNING CONSULTING",
              "DATA SCIENCE & ANALYTICS",
              "FULL-STACK PRODUCT DEVELOPMENT",
              "CLOUD & AUTOMATION",
              "STARTUP GUIDANCE"
            ].map((cap, idx) => (
              <div key={idx} className="p-4 bg-[#382217] border border-amber-900/40 rounded-xl font-bold text-[#D4AF37] flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Page 7: Our Process / Workflow */}
        <section className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-200 space-y-6">
          <div className="border-b-2 border-[#4A2E20] pb-3">
            <h2 className="text-3xl font-black text-[#4A2E20] tracking-tight">Our Process / Workflow</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-6 bg-[#CBB5A1]/20 border border-[#CBB5A1] rounded-2xl space-y-2">
              <div className="font-extrabold text-base text-[#4A2E20]">Discovery & Analysis</div>
              <p className="text-gray-700 leading-relaxed">
                Comprehensive business audit, legacy system assessment, and pain-point report identification.
              </p>
            </div>

            <div className="p-6 bg-[#4A2E20] text-white rounded-2xl space-y-2">
              <div className="font-extrabold text-base text-[#D4AF37]">Design & Planning</div>
              <p className="text-amber-100/90 leading-relaxed">
                Customized roadmap development, proposed system architecture, and ROI projection modeling.
              </p>
            </div>

            <div className="p-6 bg-[#4A2E20] text-white rounded-2xl space-y-2">
              <div className="font-extrabold text-base text-[#D4AF37]">Implementation & Testing</div>
              <p className="text-amber-100/90 leading-relaxed">
                End-to-end solution deployment, workflow automation setup, QA testing, and user onboarding.
              </p>
            </div>

            <div className="p-6 bg-[#CBB5A1]/20 border border-[#CBB5A1] rounded-2xl space-y-2">
              <div className="font-extrabold text-base text-[#4A2E20]">Optimization & Support</div>
              <p className="text-gray-700 leading-relaxed">
                Real-time performance tracking, continuous AI fine-tuning, monitoring, and ongoing support SLA.
              </p>
            </div>
          </div>
        </section>

        {/* Page 8: Why Choose Optivra */}
        <section className="bg-white rounded-2xl p-8 sm:p-12 shadow-sm border border-gray-200 space-y-6">
          <div className="border-b-2 border-[#4A2E20] pb-3">
            <h2 className="text-3xl font-black text-[#4A2E20] tracking-tight uppercase">Why Choose Optivra</h2>
          </div>

          <div className="space-y-4 text-xs text-gray-700">
            <div className="p-4 bg-slate-50 border border-gray-200 rounded-xl space-y-1">
              <div className="font-bold text-sm text-[#4A2E20]">1. Expert-Led Team</div>
              <p className="leading-relaxed">
                Our team brings deep technical mastery across AI, machine learning, data engineering, and full-stack development. Every project is guided by specialists who understand both the technology and the business impact behind it.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-gray-200 rounded-xl space-y-1">
              <div className="font-bold text-sm text-[#4A2E20]">2. Innovation with Precision</div>
              <p className="leading-relaxed">
                We don't just follow trends—we build intelligent, scalable systems grounded in real problem-solving. Our solutions are engineered to be reliable, future-ready, and aligned with your long-term goals.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-gray-200 rounded-xl space-y-1">
              <div className="font-bold text-sm text-[#4A2E20]">3. Strong Strategic Thinking</div>
              <p className="leading-relaxed">
                We approach every project with a systems mindset, identifying root causes and designing solutions that create lasting, compounding value for your business.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-gray-200 rounded-xl space-y-1">
              <div className="font-bold text-sm text-[#4A2E20]">4. Fast, Clear, and Collaborative</div>
              <p className="leading-relaxed">
                You get transparent communication, structured execution, and rapid development cycles—so you always know what's happening and when.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-gray-200 rounded-xl space-y-1">
              <div className="font-bold text-sm text-[#4A2E20]">5. Custom-Built Solutions</div>
              <p className="leading-relaxed">
                Nothing is generic. We tailor every solution based on your business model, data environment, and strategic priorities.
              </p>
            </div>

            <div className="p-4 bg-slate-50 border border-gray-200 rounded-xl space-y-1">
              <div className="font-bold text-sm text-[#4A2E20]">6. Long-Term Partnership Mindset</div>
              <p className="leading-relaxed">
                Our goal isn't to deliver once—it's to build a sustained relationship where your business keeps evolving, improving, and outperforming competitors.
              </p>
            </div>
          </div>
        </section>

        {/* Page 9: Partnership & Next Steps */}
        <section className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-xl space-y-6 border border-slate-800 text-center">
          <div className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">COLLABORATION</div>
          <h2 className="text-3xl sm:text-4xl font-black">PARTNERSHIP & NEXT STEPS</h2>

          <p className="text-xs text-gray-300 max-w-xl mx-auto leading-relaxed">
            We believe powerful partnerships are built on clarity, trust, and shared ambition. Optivra is ready to collaborate with your organization to design a smarter, more efficient digital future.
          </p>

          <p className="text-xs text-gray-300 max-w-xl mx-auto leading-relaxed">
            Together, we'll align your goals, uncover high-impact opportunities, and build a roadmap for intelligent transformation.
          </p>

          <div className="pt-4">
            <a
              href="mailto:hello@optivra.in"
              className="inline-block px-8 py-3 bg-[#D4AF37] text-slate-950 font-bold rounded-xl text-xs uppercase tracking-wider hover:bg-white transition-all shadow-lg"
            >
              Schedule Your Strategy Meeting
            </a>
          </div>
        </section>

        {/* Page 10: Thank You & Contact Info */}
        <section className="bg-[#4A2E20] text-white rounded-2xl p-8 sm:p-12 shadow-xl space-y-8 border border-[#382217]">
          <div className="space-y-2">
            <h2 className="text-4xl font-black text-white">Thank You</h2>
            <p className="text-sm text-amber-200/90 font-medium">We look forward to working with you.</p>
          </div>

          <div className="pt-6 border-t border-amber-900/40 grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-amber-100">
            <div className="space-y-1">
              <div className="font-bold text-[#D4AF37] uppercase flex items-center gap-1.5">
                <Mail className="w-4 h-4" /> Email Us
              </div>
              <p className="font-mono text-white">hello@optivra.in</p>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-[#D4AF37] uppercase flex items-center gap-1.5">
                <Globe className="w-4 h-4" /> Visit Website
              </div>
              <p className="font-mono text-white">www.optivra.in</p>
            </div>

            <div className="space-y-1">
              <div className="font-bold text-[#D4AF37] uppercase flex items-center gap-1.5">
                <Phone className="w-4 h-4" /> Phone Support
              </div>
              <p className="font-mono text-white">+91-8360934511 / +91-6280179738</p>
            </div>
          </div>

          <div className="pt-4 border-t border-amber-900/30 text-center text-[10px] text-amber-300/50">
            Optivra Solutions • Transforming Ideas Into Intelligent Solutions • Confidential Business Proposal
          </div>
        </section>
      </div>
    );
  }
);

ProposalDocument.displayName = "ProposalDocument";

export default ProposalDocument;
