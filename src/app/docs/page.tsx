"use client";

import React from "react";
import DocHubViewer from "@/components/docs/DocHubViewer";
import Link from "next/link";
import { ArrowLeft, Sparkles, FileText } from "lucide-react";

export default function EnterpriseDocsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white pt-28 pb-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto mb-8 space-y-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-400 hover:text-[#D4AF37] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#D4AF37]/10 text-[#D4AF37] border border-[#D4AF37]/30">
            <FileText className="w-3.5 h-3.5" /> Enterprise Document Suite
          </span>
        </div>

        <div className="text-center space-y-2">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Enterprise Client Documentation & PDF Hub
          </h1>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Access, customize, print, and export all 14 official enterprise business documents, contracts, sales pitch decks, and catalogs in high-resolution PDF format.
          </p>
        </div>
      </div>

      <DocHubViewer />
    </main>
  );
}
