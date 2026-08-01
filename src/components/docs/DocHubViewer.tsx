"use client";

import React, { useState, useRef } from "react";
import { Download, Printer, Search, FileText, Check, Sparkles, Shield, FileSpreadsheet, Send, Lock, HelpCircle, Layers, Presentation, Briefcase, Building2, FileCheck } from "lucide-react";

// Import document modules
import CompanyProfileDoc from "./modules/CompanyProfileDoc";
import ServicesCatalogDoc from "./modules/ServicesCatalogDoc";
import CapabilityStatementDoc from "./modules/CapabilityStatementDoc";
import PortfolioCaseStudiesDoc from "./modules/PortfolioCaseStudiesDoc";
import PricingSheetDoc from "./modules/PricingSheetDoc";
import LegalNdaDoc from "./modules/LegalNdaDoc";
import LegalMsaDoc from "./modules/LegalMsaDoc";
import ClientOnboardingGuideDoc from "./modules/ClientOnboardingGuideDoc";
import DiscoveryQuestionnaireDoc from "./modules/DiscoveryQuestionnaireDoc";
import FaqDoc from "./modules/FaqDoc";
import SalesPitchDeckDoc from "./modules/SalesPitchDeckDoc";
import ProposalDocument from "../proposal/ProposalDocument";

export type DocType =
  | "company-profile"
  | "services-catalog"
  | "capability-statement"
  | "portfolio-case-studies"
  | "pricing-sheet"
  | "proposal-template"
  | "nda"
  | "msa"
  | "sow"
  | "onboarding-guide"
  | "discovery-questionnaire"
  | "faq"
  | "sales-pitch-deck";

interface DocDefinition {
  id: DocType;
  title: string;
  badge: string;
  category: "Company" | "Sales & Catalogs" | "Legal Contracts" | "Operations";
  iconName: string;
}

const docList: DocDefinition[] = [
  { id: "company-profile", title: "Company Profile", badge: "15-20 Pages", category: "Company", iconName: "Building2" },
  { id: "services-catalog", title: "Services Catalog", badge: "20-30 Pages", category: "Company", iconName: "Briefcase" },
  { id: "capability-statement", title: "Capability Statement", badge: "2 Pages", category: "Company", iconName: "FileCheck" },
  { id: "portfolio-case-studies", title: "Portfolio & Case Studies", badge: "Case Studies", category: "Company", iconName: "Sparkles" },
  
  { id: "proposal-template", title: "Proposal Template", badge: "Official 10-Pg Brochure", category: "Sales & Catalogs", iconName: "Send" },
  { id: "pricing-sheet", title: "Pricing Sheet", badge: "USD Rate Card", category: "Sales & Catalogs", iconName: "FileSpreadsheet" },
  { id: "sales-pitch-deck", title: "Sales Pitch Deck", badge: "6 PDF Slides", category: "Sales & Catalogs", iconName: "Presentation" },

  { id: "nda", title: "NDA (Non-Disclosure)", badge: "Legal Agreement", category: "Legal Contracts", iconName: "Lock" },
  { id: "msa", title: "Master Service Agreement (MSA)", badge: "Enterprise Contract", category: "Legal Contracts", iconName: "Shield" },
  { id: "sow", title: "Statement of Work (SOW)", badge: "Scope Contract", category: "Legal Contracts", iconName: "FileText" },

  { id: "onboarding-guide", title: "Client Onboarding Guide", badge: "Playbook", category: "Operations", iconName: "Layers" },
  { id: "discovery-questionnaire", title: "Discovery Questionnaire", badge: "Intake Form", category: "Operations", iconName: "Check" },
  { id: "faq", title: "FAQ Document", badge: "Q&A Knowledgebase", category: "Operations", iconName: "HelpCircle" },
];

export default function DocHubViewer() {
  const [activeDoc, setActiveDoc] = useState<DocType>("company-profile");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [isExporting, setIsExporting] = useState(false);

  // Live client customization fields
  const [clientName, setClientName] = useState("Enterprise Client");
  const [clientCompany, setClientCompany] = useState("Acme Corporation");
  const [date, setDate] = useState("August 1, 2026");

  const docContainerRef = useRef<HTMLDivElement | null>(null);

  const categories = ["All", "Company", "Sales & Catalogs", "Legal Contracts", "Operations"];

  const filteredDocs = docList.filter((doc) => {
    const matchesSearch = doc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          doc.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCat = selectedCategory === "All" || doc.category === selectedCategory;
    return matchesSearch && matchesCat;
  });

  const activeDocDetails = docList.find((d) => d.id === activeDoc) || docList[0];

  const handleDownloadPDF = () => {
    if (!docContainerRef.current) return;
    setIsExporting(true);

    try {
      const docTitle = `Optivra_${activeDocDetails.title.replace(/[\s\/\(\)]+/g, "_")}`;
      const content = docContainerRef.current.innerHTML;

      // Collect all stylesheets from the current page
      const styleSheets = Array.from(document.styleSheets)
        .map((sheet) => {
          try {
            return Array.from(sheet.cssRules)
              .map((rule) => rule.cssText)
              .join("\n");
          } catch {
            // Cross-origin stylesheets may be inaccessible
            return "";
          }
        })
        .join("\n");

      const printWindow = window.open("", "_blank", "width=900,height=1200");
      if (!printWindow) {
        alert("Please allow popups to download the PDF, then try again.");
        setIsExporting(false);
        return;
      }

      printWindow.document.write(`
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <title>${docTitle}</title>
            <style>
              ${styleSheets}
              @media print {
                @page { size: A4; margin: 10mm; }
                body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
                .no-print { display: none !important; }
              }
              body { background: white; margin: 0; padding: 0; }
            </style>
          </head>
          <body>
            <div style="max-width:820px;margin:0 auto;background:white;padding:24px;">
              ${content}
            </div>
            <script>
              window.onload = function() {
                window.print();
                setTimeout(function() { window.close(); }, 1000);
              };
            </script>
          </body>
        </html>
      `);
      printWindow.document.close();
    } catch (err: unknown) {
      console.error("PDF Generation Error:", err);
      const msg = err instanceof Error ? err.message : "Unknown error";
      alert("Failed to export PDF: " + msg);
    } finally {
      setTimeout(() => setIsExporting(false), 1500);
    }
  };

  const renderActiveDocument = () => {
    const customData = { clientName, clientCompany, date };

    switch (activeDoc) {
      case "company-profile":
        return <CompanyProfileDoc customData={customData} />;
      case "services-catalog":
        return <ServicesCatalogDoc />;
      case "capability-statement":
        return <CapabilityStatementDoc />;
      case "portfolio-case-studies":
        return <PortfolioCaseStudiesDoc />;
      case "pricing-sheet":
        return <PricingSheetDoc />;
      case "nda":
        return <LegalNdaDoc customData={customData} />;
      case "msa":
      case "sow":
        return <LegalMsaDoc customData={customData} />;
      case "onboarding-guide":
        return <ClientOnboardingGuideDoc />;
      case "discovery-questionnaire":
        return <DiscoveryQuestionnaireDoc />;
      case "faq":
        return <FaqDoc />;
      case "sales-pitch-deck":
        return <SalesPitchDeckDoc />;
      case "proposal-template":
      default:
        return (
          <ProposalDocument
            data={{
              clientName,
              clientCompany,
              projectTitle: "AI Transformation & Technology Solutions",
              proposalId: "OPT-2026-X1",
              date,
              validUntil: "30 Days",
              currency: "USD",
              discountPercent: 0,
              taxPercent: 0,
              investmentAmountUSD: 12500,
              customNotes: "Full end-to-end delivery guarantee.",
              items: [],
            }}
          />
        );
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-8 font-sans">
      {/* Top Master Selection Bar / Document Grid */}
      <div className="bg-slate-900 border border-white/10 rounded-3xl p-6 text-white space-y-6 shadow-2xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/10 pb-4">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-widest block">
              ENTERPRISE DOCUMENTATION HUB
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Select Any Document to Open & Download PDF
            </h2>
          </div>

          {/* Search & Category Filter */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <Search className="w-4 h-4 text-gray-400 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search documents..."
                className="w-full bg-black/60 border border-white/15 rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-gray-500 focus:border-[#D4AF37] outline-none"
              />
            </div>

            <div className="flex items-center gap-1 bg-black/50 p-1 rounded-xl border border-white/10 text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-lg transition-all font-semibold ${
                    selectedCategory === cat ? "bg-[#D4AF37] text-slate-950" : "text-gray-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 13 Master Document Buttons Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {filteredDocs.map((doc) => {
            const isActive = activeDoc === doc.id;
            return (
              <button
                key={doc.id}
                onClick={() => setActiveDoc(doc.id)}
                className={`p-3.5 rounded-2xl text-left border transition-all flex flex-col justify-between gap-3 h-28 group relative overflow-hidden ${
                  isActive
                    ? "bg-[#D4AF37] text-slate-950 font-bold border-[#D4AF37] shadow-lg scale-[1.02]"
                    : "bg-white/5 border-white/10 text-gray-300 hover:bg-white/10 hover:border-white/20 hover:text-white"
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${isActive ? "bg-slate-950 text-[#D4AF37]" : "bg-black/40 text-gray-400"}`}>
                    {doc.badge}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${isActive ? "bg-slate-950" : "bg-gray-600 group-hover:bg-[#D4AF37]"}`} />
                </div>

                <div>
                  <div className="text-xs font-bold leading-snug line-clamp-2">{doc.title}</div>
                  <div className={`text-[10px] mt-0.5 ${isActive ? "text-slate-900" : "text-gray-400"}`}>
                    {doc.category}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Live Client Parameter Controls */}
        <div className="pt-2 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs">
          <span className="font-semibold text-gray-400">Live Client Parameters:</span>
          <div className="flex flex-wrap items-center gap-3">
            <input
              type="text"
              value={clientCompany}
              onChange={(e) => setClientCompany(e.target.value)}
              placeholder="Client Company Name"
              className="bg-black/60 border border-white/15 rounded-lg px-3 py-1.5 text-white text-xs focus:border-[#D4AF37] outline-none"
            />
            <input
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              placeholder="Client Contact Name"
              className="bg-black/60 border border-white/15 rounded-lg px-3 py-1.5 text-white text-xs focus:border-[#D4AF37] outline-none"
            />
            <input
              type="text"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Effective Date"
              className="bg-black/60 border border-white/15 rounded-lg px-3 py-1.5 text-white text-xs focus:border-[#D4AF37] outline-none"
            />
          </div>
        </div>
      </div>

      {/* Action Header & Selected Document Viewer Canvas */}
      <div className="space-y-4">
        {/* Sticky Action Exporter Bar */}
        <div className="bg-slate-900 border border-white/10 rounded-2xl p-4 sm:p-5 flex flex-wrap items-center justify-between gap-4 text-white shadow-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37]">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-mono block">Active Document</span>
              <h3 className="text-xl font-extrabold text-white">{activeDocDetails.title}</h3>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleDownloadPDF}
              disabled={isExporting}
              className="flex items-center gap-2 px-6 py-3 bg-[#D4AF37] text-slate-950 font-black text-xs rounded-xl hover:bg-yellow-400 transition-all shadow-lg active:scale-95 disabled:opacity-50 uppercase tracking-wider"
            >
              <Download className="w-4 h-4" />
              {isExporting ? "Generating PDF..." : `Download ${activeDocDetails.title} PDF`}
            </button>

            <button
              onClick={() => window.print()}
              className="flex items-center gap-2 px-4 py-3 bg-white/10 text-white text-xs font-bold rounded-xl hover:bg-white/20 transition-all border border-white/10 uppercase tracking-wider"
            >
              <Printer className="w-4 h-4" />
              Print
            </button>
          </div>
        </div>

        {/* Printable Document Box Container */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 shadow-2xl border border-gray-200 overflow-x-auto">
          <div ref={docContainerRef} className="w-full max-w-[820px] mx-auto bg-white p-2">
            {renderActiveDocument()}
          </div>
        </div>
      </div>
    </div>
  );
}
