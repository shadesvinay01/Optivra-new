"use client";

import React from "react";

interface LegalDocProps {
  customData?: {
    clientName?: string;
    clientCompany?: string;
    date?: string;
  };
}

export default function LegalMsaDoc({ customData }: LegalDocProps) {
  const clientCompany = customData?.clientCompany || customData?.clientName || "[Client Company Name]";
  const date = customData?.date || "September 18, 2026";

  return (
    <div className="space-y-6 text-gray-900 leading-relaxed font-sans text-xs max-w-[800px] mx-auto bg-white p-2">
      <div className="border-b border-gray-300 pb-4 text-center space-y-1">
        <h1 className="text-xl font-bold text-slate-900 uppercase tracking-tight">MASTER SERVICE AGREEMENT (MSA)</h1>
        <p className="text-gray-500 font-mono text-[11px]">Contract Reference: MSA-OPT-2026</p>
      </div>

      <p>
        This Master Service Agreement ("MSA") is entered into as of <strong>{date}</strong> by and between <strong>OPTIVRA</strong> ("Provider") and <strong>{clientCompany}</strong> ("Client").
      </p>

      <div className="space-y-4">
        <div>
          <h2 className="font-bold text-slate-900 uppercase">1. Services & Statements of Work</h2>
          <p className="text-gray-700 mt-1">
            Provider agrees to perform software development, AI engineering, and technology consulting services as specified in one or more Statements of Work ("SOW") executed under this MSA.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 uppercase">2. Intellectual Property Rights & Governance</h2>
          <p className="text-gray-700 mt-1">
            Ownership and licensing of project deliverables are governed by the applicable service agreement, statement of work, and payment terms. Client-specific custom deliverables can be assigned according to the executed agreement. Provider retains rights to pre-existing technology, reusable frameworks, libraries, tools, know-how, and general-purpose components unless specifically agreed otherwise in writing. Exact IP ownership must always be determined by the signed agreement.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 uppercase">3. Fees & Payment Terms</h2>
          <p className="text-gray-700 mt-1">
            Client shall pay Provider the fees set forth in each SOW. Payment structures and milestone billing terms follow the executed proposal or SOW schedule.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 uppercase">4. QA, Security & Post-Launch Support</h2>
          <p className="text-gray-700 mt-1">
            Provider applies automated testing, security review, deployment controls, and compliance-readiness practices appropriate to project requirements. Where included in the applicable SOW, Provider provides 30-Day Post-Launch Support for resolving defects attributable to the agreed project scope.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-300">
        <div className="space-y-1">
          <div className="font-bold text-slate-900">OPTIVRA</div>
          <div className="text-gray-500">Authorized Signature</div>
          <div className="pt-4 text-gray-400">Date: {date}</div>
        </div>

        <div className="space-y-1">
          <div className="font-bold text-slate-900">{clientCompany}</div>
          <div className="text-gray-500">Authorized Signature</div>
          <div className="pt-4 text-gray-400">Date: ____________________</div>
        </div>
      </div>
    </div>
  );
}

