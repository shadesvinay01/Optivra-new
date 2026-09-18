"use client";

import React from "react";
import { HelpCircle } from "lucide-react";

export default function FaqDoc() {
  const faqs = [
    {
      q: "Who owns the project code and intellectual property (IP)?",
      a: "Ownership and licensing of project deliverables are governed by the applicable service agreement, statement of work, and payment terms. Client-specific deliverables can be assigned according to the executed agreement, while pre-existing frameworks and general components remain under Optivra's IP."
    },
    {
      q: "What currencies and engagement rates do you support?",
      a: "We offer international rate cards in USD ($), GBP (£), and EUR (€). Final commercial quotes depend on project scope and are confirmed via Statement of Work."
    },
    {
      q: "What warranty or support is provided after launch?",
      a: "Where included in the applicable proposal or SOW, Optivra provides 30-Day Post-Launch Support for resolving defects attributable to the agreed project scope. New features, scope changes, and third-party issues are quoted separately."
    },
    {
      q: "How do you handle security, testing, and compliance-readiness?",
      a: "We apply automated testing, security review, deployment controls, and compliance-readiness practices appropriate to project requirements."
    },
    {
      q: "Where is Optivra located and how is delivery managed?",
      a: "Optivra is an India-based AI-first technology and product engineering company serving clients globally through remote engineering and flexible delivery structures."
    }
  ];

  return (
    <div className="space-y-8 text-gray-900 leading-relaxed font-sans text-xs max-w-[800px] mx-auto bg-white p-2">
      <div className="bg-slate-950 text-white rounded-2xl p-8 space-y-2 border border-slate-800">
        <span className="px-3 py-1 bg-[#D4AF37] text-slate-950 text-xs font-bold rounded uppercase tracking-widest">
          OPTIVRA • KNOWLEDGEBASE & FAQ
        </span>
        <h1 className="text-3xl font-black">Frequently Asked Questions</h1>
        <p className="text-gray-300">Answers regarding engagement models, IP governance, security readiness, and technical delivery.</p>
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

