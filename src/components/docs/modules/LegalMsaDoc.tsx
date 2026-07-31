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
  const date = customData?.date || "August 1, 2026";

  return (
    <div className="space-y-6 text-gray-900 leading-relaxed font-sans text-xs">
      <div className="border-b border-gray-300 pb-4 text-center space-y-1">
        <h1 className="text-xl font-bold text-slate-900 uppercase tracking-tight">MASTER SERVICE AGREEMENT (MSA)</h1>
        <p className="text-gray-500 font-mono text-[11px]">Contract Reference: MSA-OPT-2026</p>
      </div>

      <p>
        This Master Service Agreement ("MSA") is entered into as of <strong>{date}</strong> by and between <strong>Optivra Solutions</strong> ("Provider") and <strong>{clientCompany}</strong> ("Client").
      </p>

      <div className="space-y-4">
        <div>
          <h2 className="font-bold text-slate-900 uppercase">1. Services & Statements of Work</h2>
          <p className="text-gray-700 mt-1">
            Provider agrees to perform software development, AI engineering, and technology consulting services as specified in one or more Statements of Work ("SOW") executed under this MSA.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 uppercase">2. Intellectual Property Rights</h2>
          <p className="text-gray-700 mt-1">
            Upon full payment of all fees due under the applicable SOW, Provider hereby assigns and transfers to Client all right, title, and interest in and to all custom deliverables, code, algorithms, and documentation created specifically for Client under such SOW.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 uppercase">3. Fees & Payment Terms</h2>
          <p className="text-gray-700 mt-1">
            Client shall pay Provider the fees set forth in each SOW. Invoices are due net 15 days from receipt unless otherwise specified in the SOW. Late payments are subject to a 1.5% interest fee per month.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-slate-900 uppercase">4. Warranties & Limitation of Liability</h2>
          <p className="text-gray-700 mt-1">
            Provider warrants that services will be performed in a professional and workmanlike manner. Provider offers a 30-day post-delivery warranty against material defects. In no event shall either party's aggregate liability exceed the total fees paid under the applicable SOW.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-300">
        <div className="space-y-1">
          <div className="font-bold text-slate-900">Optivra Solutions</div>
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
