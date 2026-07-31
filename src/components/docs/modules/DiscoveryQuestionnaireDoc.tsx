"use client";

import React from "react";
import { HelpCircle, CheckSquare } from "lucide-react";

export default function DiscoveryQuestionnaireDoc() {
  const sections = [
    {
      title: "1. Business Objectives & Project Scope",
      questions: [
        "What is the primary business goal for this project? (e.g. Reduce manual hours, launch new SaaS product)",
        "What is the target completion date or key milestone deadline?",
        "What is the estimated project budget range in USD?"
      ]
    },
    {
      title: "2. Technical & Architecture Environment",
      questions: [
        "Do you have an existing code repository, or is this a greenfield (from scratch) build?",
        "What cloud infrastructure do you currently use? (AWS, GCP, Azure, On-Premise)",
        "What third-party APIs or internal databases need integration?"
      ]
    },
    {
      title: "3. AI & Automation Requirements",
      questions: [
        "Do you plan to leverage enterprise RAG, custom LLMs, AI agents, or computer vision?",
        "Where does your training/reference data reside? (PostgreSQL, PDF docs, Notion, Drive)",
        "Are there specific privacy or compliance standards required? (SOC2, HIPAA, GDPR)"
      ]
    }
  ];

  return (
    <div className="space-y-8 text-gray-900 leading-relaxed font-sans text-xs">
      <div className="bg-slate-950 text-white rounded-2xl p-8 space-y-2 border border-slate-800">
        <span className="px-3 py-1 bg-[#D4AF37] text-slate-950 text-xs font-bold rounded uppercase tracking-widest">
          Project Scoping Form
        </span>
        <h1 className="text-3xl font-black">Discovery & Requirements Intake Questionnaire</h1>
        <p className="text-gray-300">Please complete this questionnaire to help our architecture team prepare your technical proposal.</p>
      </div>

      <div className="space-y-6">
        {sections.map((sec, sIdx) => (
          <div key={sIdx} className="p-6 border border-gray-200 rounded-2xl bg-white space-y-4">
            <h2 className="text-sm font-bold text-slate-900 uppercase border-b border-gray-200 pb-2">{sec.title}</h2>
            <div className="space-y-4">
              {sec.questions.map((q, qIdx) => (
                <div key={qIdx} className="space-y-1.5">
                  <label className="font-semibold text-gray-800 block">• {q}</label>
                  <div className="h-16 bg-gray-50 border border-gray-300 rounded-lg p-2 text-gray-400 font-mono text-[10px]">
                    [Fill in response here...]
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
