"use client";

import React, { useState, useRef } from "react";
import ProposalDocument, { ProposalData } from "@/components/proposal/ProposalDocument";
import ProposalToolbar from "@/components/proposal/ProposalToolbar";
import { Sparkles, FileText, ArrowLeft } from "lucide-react";
import Link from "next/link";

const initialProposalData: ProposalData = {
  clientName: "Enterprise Client",
  clientCompany: "Acme Corporation",
  projectTitle: "AI & Full-Stack Digital Transformation",
  proposalId: "OPT-2026-8942",
  date: "August 1, 2026",
  validUntil: "August 31, 2026",
  currency: "USD",
  discountPercent: 10,
  taxPercent: 0,
  investmentAmountUSD: 12500,
  customNotes: "Includes end-to-end technical documentation, CI/CD pipeline, performance monitoring, and 30-day warranty.",
  items: [
    {
      id: "srv-1",
      title: "Landing Page & Web Development",
      category: "Web & Design",
      description: "Custom ultra-high conversion, cinematic landing page or corporate website built with Next.js, React, TailwindCSS, and Framer Motion.",
      deliverables: ["Modern Responsive UI/UX", "SEO Optimization & Meta", "CMS Integration", "Analytics & Tracking"],
      timeline: "1 - 2 Weeks",
      priceINR: 49999,
      priceUSD: 699,
      included: true,
    },
    {
      id: "srv-2",
      title: "Full-Stack Web & E-Commerce Application",
      category: "Custom Software",
      description: "Robust scalable web application or custom e-commerce solution with dynamic product catalog, cart, payments, and admin dashboard.",
      deliverables: ["React / Next.js Frontend", "Node.js / Python Backend API", "Stripe / Razorpay Integration", "Admin Analytics Dashboard"],
      timeline: "3 - 4 Weeks",
      priceINR: 99999,
      priceUSD: 1399,
      included: true,
    },
    {
      id: "srv-3",
      title: "Autonomous AI Chatbots & RAG Agents",
      category: "AI & LLM",
      description: "Custom AI assistant trained on enterprise knowledge base (RAG) with natural language capabilities, multi-channel deployment (Web, WhatsApp, Slack).",
      deliverables: ["Custom Vector Database RAG", "LLM Fine-Tuning & Prompting", "CRM / Helpdesk Sync", "User Conversation Logs"],
      timeline: "2 - 3 Weeks",
      priceINR: 75000,
      priceUSD: 999,
      included: true,
    },
    {
      id: "srv-4",
      title: "Enterprise Workflow & Process Automation",
      category: "Automation",
      description: "End-to-end workflow automation connecting internal tools, databases, APIs, email alerts, and data processing pipelines.",
      deliverables: ["Automated Pipeline Architecture", "API Integration Suite", "Exception Handling & Logging", "Team Training & Handoff"],
      timeline: "2 - 3 Weeks",
      priceINR: 85000,
      priceUSD: 1199,
      included: true,
    },
    {
      id: "srv-5",
      title: "Mobile Application (iOS & Android)",
      category: "Mobile",
      description: "Cross-platform mobile application with fluid native UI, real-time push notifications, offline storage, and cloud sync.",
      deliverables: ["React Native / Flutter App", "App Store & Play Store Publishing", "Push Notification Gateway", "Offline Data Caching"],
      timeline: "4 - 6 Weeks",
      priceINR: 199999,
      priceUSD: 2699,
      included: false,
    },
    {
      id: "srv-6",
      title: "SaaS MVP Development",
      category: "SaaS & Enterprise",
      description: "Complete MVP build from ground up including authentication, multi-tenancy, billing subscriptions, API architecture, and database.",
      deliverables: ["Full SaaS Architecture", "Authentication & RBAC", "Subscription Billing Engine", "Production Deployment"],
      timeline: "6 - 8 Weeks",
      priceINR: 349999,
      priceUSD: 4699,
      included: false,
    },
  ],
};

export default function ProposalPage() {
  const [proposalData, setProposalData] = useState<ProposalData>(initialProposalData);
  const documentRef = useRef<HTMLDivElement | null>(null);

  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28 pb-20 px-4 sm:px-6">
      {/* Header Banner */}
      <div className="max-w-[850px] mx-auto mb-8 space-y-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
            <FileText className="w-3.5 h-3.5" /> Official PDF Proposal Mode
          </span>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
            Company Portfolio & Services Proposal
          </h1>
          <p className="text-sm text-gray-400 max-w-xl mx-auto">
            View, customize, print, or download your official business proposal PDF containing Optivra's portfolio highlights, services catalog, and pricing schedule.
          </p>
        </div>
      </div>

      {/* Control Toolbar */}
      <ProposalToolbar
        data={proposalData}
        onChangeData={setProposalData}
        documentRef={documentRef}
      />

      {/* Printable Document Sheet Container */}
      <div className="flex justify-center overflow-x-auto pb-12">
        <ProposalDocument ref={documentRef} data={proposalData} />
      </div>
    </main>
  );
}
