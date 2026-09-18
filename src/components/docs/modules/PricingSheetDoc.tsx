"use client";

import React from "react";
import { Check, ShieldCheck, Globe, CreditCard } from "lucide-react";

interface RateRow {
  service: string;
  usd: string;
  gbp: string;
  eur: string;
}

const rateCardData: RateRow[] = [
  { service: "AI Discovery / AI Opportunity Assessment", usd: "$750–$1,500", gbp: "£600–£1,200", eur: "€700–€1,400" },
  { service: "AI Automation Sprint", usd: "$3,500–$8,000", gbp: "£2,900–£6,500", eur: "€3,300–€7,500" },
  { service: "Custom AI Agent Development", usd: "$4,500–$12,000+", gbp: "£3,700–£10,000+", eur: "€4,200–€11,000+" },
  { service: "RAG / Knowledge Systems", usd: "$3,500–$10,000+", gbp: "£2,900–£8,300+", eur: "€3,300–€9,300+" },
  { service: "SaaS MVP Development", usd: "$5,000–$15,000+", gbp: "£4,100–£12,500+", eur: "€4,700–€14,000+" },
  { service: "Custom Software Engineering", usd: "$4,000–$15,000+", gbp: "£3,300–£12,500+", eur: "€3,700–€14,000+" },
  { service: "Computer Vision", usd: "$5,000–$15,000+", gbp: "£4,100–£12,500+", eur: "€4,700–€14,000+" },
  { service: "Advanced AI / Software Platform", usd: "$15,000–$40,000+", gbp: "£12,500–£33,000+", eur: "€14,000–€37,000+" },
  { service: "Dedicated Engineering (per engineer)", usd: "$3,500–$6,500/month", gbp: "£2,900–£5,400/month", eur: "€3,300–€6,000/month" },
  { service: "Senior AI Engineering", usd: "$5,000–$8,000/month", gbp: "£4,100–£6,600/month", eur: "€4,700–€7,500/month" },
  { service: "Time & Materials (Hourly)", usd: "$45–$85/hour", gbp: "£35–£70/hour", eur: "€40–€80/hour" },
];

export default function PricingSheetDoc() {
  return (
    <div className="space-y-8 text-gray-900 leading-relaxed font-sans text-xs max-w-[800px] mx-auto bg-white p-2">
      {/* Header Banner */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 space-y-3 border border-slate-800 shadow-xl">
        <div className="flex justify-between items-start">
          <span className="px-3.5 py-1.5 bg-[#D4AF37] text-slate-950 text-xs font-black rounded-xl uppercase tracking-widest">
            OPTIVRA • 2026 INTERNATIONAL RATE CARD
          </span>
          <span className="text-xs text-amber-400 font-mono">Last Updated: September 2026</span>
        </div>
        <h1 className="text-3xl font-black">Official International Rate Card</h1>
        <p className="text-gray-300 text-xs leading-relaxed">
          Standardized commercial rate cards across USD (US/Canada), GBP (United Kingdom), and EUR (Europe) based on an efficient India-based global delivery model.
        </p>
      </div>

      {/* Positioning Note */}
      <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1 text-slate-700">
        <span className="font-bold text-slate-900 uppercase text-[11px] block">Commercial Positioning</span>
        <p>
          Clients gain access to experienced AI and software engineering capabilities through a competitive international delivery model and transparent engagement pricing.
        </p>
      </div>

      {/* Main Rate Card Table */}
      <div className="space-y-3">
        <h2 className="font-extrabold text-sm uppercase tracking-wider text-slate-900 border-b-2 border-slate-950 pb-1">
          International Commercial Baseline Rates
        </h2>
        <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-xs">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-950 text-white text-[11px] font-mono">
                <th className="p-3 font-bold border-b border-gray-800">Service / Engagement</th>
                <th className="p-3 font-bold border-b border-gray-800 text-[#D4AF37]">USD (US / Canada)</th>
                <th className="p-3 font-bold border-b border-gray-800">GBP (United Kingdom)</th>
                <th className="p-3 font-bold border-b border-gray-800">EUR (Europe)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-xs">
              {rateCardData.map((row, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/70"}>
                  <td className="p-3 font-semibold text-slate-900">{row.service}</td>
                  <td className="p-3 font-mono font-bold text-slate-950 bg-amber-50/50">{row.usd}</td>
                  <td className="p-3 font-mono text-slate-800">{row.gbp}</td>
                  <td className="p-3 font-mono text-slate-800">{row.eur}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Scope Disclaimer */}
      <div className="p-4 bg-amber-50 border border-amber-300 rounded-xl text-amber-950 text-[11px] space-y-1">
        <span className="font-bold uppercase block text-[10px]">Pricing Disclaimer</span>
        <p>
          Pricing is indicative and depends on scope, complexity, integrations, data requirements, infrastructure, delivery timeline, and engagement model. Final pricing is confirmed through a project-specific proposal or Statement of Work.
        </p>
      </div>

      {/* Payment Terms & Tax Notice */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="p-4 border border-gray-200 rounded-xl bg-slate-50 space-y-2">
          <span className="font-bold text-slate-900 uppercase text-[10px] block">Standard Indicative Payment Terms</span>
          <p className="text-gray-700 text-[11px]">
            • Under $10k: 50% upfront / 30% milestone / 20% delivery<br />
            • $10k–$25k: 40% upfront / 30% milestone / 20% milestone / 10% delivery<br />
            • Above $25k: 30% upfront / milestone-based billing
          </p>
        </div>

        <div className="p-4 border border-gray-200 rounded-xl bg-slate-50 space-y-2">
          <span className="font-bold text-slate-900 uppercase text-[10px] block">Tax & Billing Notice</span>
          <p className="text-gray-700 text-[11px]">
            All prices exclusive of applicable taxes, VAT/GST, payment processing, third-party API costs, and cloud infrastructure. Final invoicing confirmed per contracting entity.
          </p>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 bg-slate-950 text-white rounded-xl flex justify-between items-center text-[10px] font-mono">
        <div>OPTIVRA • Official Rate Card 2026</div>
        <div>Contact: hello@optivra.in | https://www.optivra.in/</div>
      </div>
    </div>
  );
}

