"use client";

import React from "react";
import { HelpCircle } from "lucide-react";

export default function FaqDoc() {
  const faqs = [
    {
      q: "Who owns the code and intellectual property (IP)?",
      a: "You retain 100% full ownership of all custom source code, repositories, AI models, and design assets upon milestone payments."
    },
    {
      q: "What currency are quotes provided in?",
      a: "All global proposals and invoices are standardized in USD ($), with flexible payment options via Stripe, wire transfer, or credit."
    },
    {
      q: "What warranty or support is included post-launch?",
      a: "Every project includes a complimentary 30-day bug warranty and post-launch support SLA covering technical maintenance."
    },
    {
      q: "How do you handle data privacy and AI model security?",
      a: "We enforce zero-retention API policies, SOC2 and HIPAA compliance standards, and private vector database hosting to ensure complete data security."
    },
    {
      q: "How quickly can a dedicated team start?",
      a: "Senior engineering pods are assigned within 24–48 hours of agreement execution, with kickoff meetings scheduled immediately."
    }
  ];

  return (
    <div className="space-y-8 text-gray-900 leading-relaxed font-sans text-xs">
      <div className="bg-slate-950 text-white rounded-2xl p-8 space-y-2 border border-slate-800">
        <span className="px-3 py-1 bg-[#D4AF37] text-slate-950 text-xs font-bold rounded uppercase tracking-widest">
          Knowledge Base & FAQ
        </span>
        <h1 className="text-3xl font-black">Frequently Asked Questions</h1>
        <p className="text-gray-300">Answers to common client questions regarding engagement models, IP security, billing, and technical delivery.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((f, idx) => (
          <div key={idx} className="p-5 border border-gray-200 rounded-xl bg-white space-y-2 shadow-xs">
            <div className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <HelpCircle className="w-4 h-4 text-[#D4AF37] shrink-0" />
              Q: {f.q}
            </div>
            <p className="text-gray-600 pl-6 leading-relaxed">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
