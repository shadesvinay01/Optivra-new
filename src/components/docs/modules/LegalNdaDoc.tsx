"use client";

import React from "react";

interface LegalDocProps {
  customData?: {
    clientName?: string;
    clientCompany?: string;
    date?: string;
  };
}

export default function LegalNdaDoc({ customData }: LegalDocProps) {
  const clientCompany = customData?.clientCompany || customData?.clientName || "[Client Company Name]";
  const date = customData?.date || "August 1, 2026";

  return (
    <div className="space-y-6 text-gray-900 leading-relaxed font-sans text-xs">
      <div className="border-b border-gray-300 pb-4 text-center space-y-1">
        <h1 className="text-xl font-bold text-slate-900 uppercase tracking-tight">MUTUAL NON-DISCLOSURE AGREEMENT (NDA)</h1>
        <p className="text-gray-500 font-mono text-[11px]">Effective Date: {date}</p>
      </div>

      <p>
        This Mutual Non-Disclosure Agreement ("Agreement") is entered into on <strong>{date}</strong> ("Effective Date") by and between <strong>Optivra Solutions</strong> ("Disclosing/Receiving Party") and <strong>{clientCompany}</strong> ("Disclosing/Receiving Party").
      </p>

      <div className="space-y-4">
        <div>
          <h2 className="font-bold text-slate-900 uppercase">1. Purpose & Definition of Confidential Information</h2>
          <p className="text-gray-700 mt-1">
            "Confidential Information" refers to any proprietary information, technical data, trade secrets, software source code, algorithms, business models, financial data, or customer lists disclosed by either Party to the other Party in connection with exploring a potential business relationship.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 uppercase">2. Obligations of Receiving Party</h2>
          <p className="text-gray-700 mt-1">
            The Receiving Party agrees to hold all Confidential Information in strict confidence and shall not disclose such information to third parties without prior written approval. The Receiving Party agrees to protect the Confidential Information using at least the same degree of care it uses for its own confidential data.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 uppercase">3. Exclusions from Confidentiality</h2>
          <p className="text-gray-700 mt-1">
            Confidential Information does not include information that: (a) is or becomes publicly known through no breach of this Agreement; (b) was already in the Receiving Party's possession prior to disclosure; or (c) is independently developed without reference to the Confidential Information.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 uppercase">4. Term & Governing Law</h2>
          <p className="text-gray-700 mt-1">
            This Agreement shall remain in effect for a period of two (2) years from the Effective Date. This Agreement shall be governed by and construed in accordance with the laws of California, USA / Karnataka, India.
          </p>
        </div>
      </div>

      {/* Signature Block */}
      <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-300">
        <div className="space-y-1">
          <div className="font-bold text-slate-900">For Optivra Solutions</div>
          <div className="text-gray-500">Authorized Signature</div>
          <div className="pt-4 text-gray-400">Date: {date}</div>
        </div>

        <div className="space-y-1">
          <div className="font-bold text-slate-900">For {clientCompany}</div>
          <div className="text-gray-500">Authorized Signature</div>
          <div className="pt-4 text-gray-400">Date: ____________________</div>
        </div>
      </div>
    </div>
  );
}
