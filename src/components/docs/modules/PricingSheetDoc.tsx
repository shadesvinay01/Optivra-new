"use client";

import React from "react";
import { Check, ShieldCheck } from "lucide-react";

export default function PricingSheetDoc() {
  const tiers = [
    {
      name: "Starter MVP Scope",
      priceUSD: "$2,499 USD",
      timeline: "2 - 3 Weeks",
      features: ["Custom Next.js Web Application", "AI Chatbot or RAG Ingestion", "Stripe / Razorpay Integration", "Responsive Mobile UI", "30 Days Bug Support"]
    },
    {
      name: "Business Growth Package",
      priceUSD: "$5,999 USD",
      timeline: "4 - 6 Weeks",
      features: ["Full Multi-Tenant SaaS Architecture", "Custom AI Agent Workflow", "Clerk Authentication & Roles", "Admin Analytics Dashboard", "AWS / GCP Cloud Setup"]
    },
    {
      name: "Enterprise Transformation",
      priceUSD: "$12,500+ USD",
      timeline: "6 - 10 Weeks",
      features: ["Fine-Tuned Domain LLM / Vision Engine", "Dedicated Engineering Pod (3-5 devs)", "Custom Microservices Backend", "24/7 SLA Managed Cloud", "100% Code Ownership Transfer"]
    }
  ];

  return (
    <div className="space-y-8 text-gray-900 leading-relaxed font-sans text-xs">
      <div className="bg-slate-950 text-white rounded-2xl p-8 space-y-2 border border-slate-800">
        <span className="px-3 py-1 bg-[#D4AF37] text-slate-950 text-xs font-bold rounded uppercase tracking-widest">
          Rate Card & Commercial Tiers • USD Standard
        </span>
        <h1 className="text-3xl font-black">Official Pricing Sheet</h1>
        <p className="text-gray-300">Standardized engagement pricing, fixed project packages, and dedicated team rates in USD ($).</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tiers.map((t, idx) => (
          <div key={idx} className="p-6 border border-gray-200 rounded-2xl bg-white space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase text-[#D4AF37] tracking-wider block">Tier {idx + 1}</span>
              <h2 className="text-base font-bold text-slate-900">{t.name}</h2>
              <div className="text-2xl font-black text-slate-950">{t.priceUSD}</div>
              <div className="text-[11px] text-gray-500 font-mono">Est. Timeline: {t.timeline}</div>
              <div className="border-t border-gray-200 pt-3 space-y-2">
                {t.features.map((f, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2 text-gray-700">
                    <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-100 text-[10px] text-gray-400 text-center font-mono">
              Includes 100% IP Transfer
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
