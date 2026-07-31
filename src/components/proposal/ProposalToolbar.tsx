"use client";

import React, { useState } from "react";
import { Download, Printer, Settings, Edit3, DollarSign, Check, Eye, ChevronDown } from "lucide-react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";
import { ProposalData } from "./ProposalDocument";

interface ProposalToolbarProps {
  data: ProposalData;
  onChangeData: (data: ProposalData) => void;
  documentRef: React.RefObject<HTMLDivElement | null>;
}

export default function ProposalToolbar({ data, onChangeData, documentRef }: ProposalToolbarProps) {
  const [isExporting, setIsExporting] = useState(false);
  const [showEditor, setShowEditor] = useState(false);

  const handleDownloadPDF = async () => {
    if (!documentRef.current) return;
    setIsExporting(true);

    try {
      const element = documentRef.current;
      const canvas = await html2canvas(element, {
        scale: 2, // high DPI
        useCORS: true,
        logging: false,
        backgroundColor: "#ffffff",
      });

      const imgData = canvas.toDataURL("image/jpeg", 0.98);
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });

      const imgWidth = 210; // A4 width mm
      const pageHeight = 297; // A4 height mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "JPEG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      const fileName = `Optivra_Proposal_${data.clientName.replace(/\s+/g, "_") || "Client"}.pdf`;
      pdf.save(fileName);
    } catch (err: any) {
      console.error("PDF Export Error:", err);
      alert("Failed to export PDF proposal: " + (err?.message || "Unknown error"));
    } finally {
      setIsExporting(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleToggleItem = (id: string) => {
    const updatedItems = (data.items || []).map((item) =>
      item.id === id ? { ...item, included: !item.included } : item
    );
    onChangeData({ ...data, items: updatedItems });
  };

  return (
    <div className="w-full max-w-[850px] mx-auto mb-6 bg-slate-900 border border-white/10 text-white rounded-xl p-4 shadow-xl">
      <div className="flex flex-wrap items-center justify-between gap-4">
        {/* Left Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleDownloadPDF}
            disabled={isExporting}
            className="flex items-center gap-2 px-5 py-2.5 bg-[#D4AF37] text-slate-950 font-bold text-xs rounded-lg hover:bg-yellow-400 transition-all shadow-md active:scale-95 disabled:opacity-50"
          >
            <Download className="w-4 h-4" />
            {isExporting ? "Generating PDF..." : "Download PDF Proposal"}
          </button>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2.5 bg-white/10 text-white text-xs font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/10"
          >
            <Printer className="w-4 h-4" />
            Print
          </button>
        </div>

        {/* Right Settings & Mode Controls */}
        <div className="flex items-center gap-3">
          {/* Currency Toggle */}
          <div className="flex items-center bg-black/40 rounded-lg p-1 border border-white/10 text-xs font-bold">
            <button
              onClick={() => onChangeData({ ...data, currency: "INR" })}
              className={`px-3 py-1 rounded transition-colors ${
                data.currency === "INR" ? "bg-[#D4AF37] text-black" : "text-gray-400 hover:text-white"
              }`}
            >
              ₹ INR
            </button>
            <button
              onClick={() => onChangeData({ ...data, currency: "USD" })}
              className={`px-3 py-1 rounded transition-colors ${
                data.currency === "USD" ? "bg-[#D4AF37] text-black" : "text-gray-400 hover:text-white"
              }`}
            >
              $ USD
            </button>
          </div>

          <button
            onClick={() => setShowEditor(!showEditor)}
            className="flex items-center gap-1.5 px-4 py-2.5 bg-white/10 text-white text-xs font-semibold rounded-lg hover:bg-white/20 transition-all border border-white/10"
          >
            <Edit3 className="w-4 h-4" />
            <span>{showEditor ? "Hide Editor" : "Customize Proposal"}</span>
          </button>
        </div>
      </div>

      {/* Live Customize Drawer */}
      {showEditor && (
        <div className="mt-5 pt-5 border-t border-white/10 space-y-4 text-xs">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div>
              <label className="block text-gray-400 mb-1 font-semibold">Client Name</label>
              <input
                type="text"
                value={data.clientName}
                onChange={(e) => onChangeData({ ...data, clientName: e.target.value })}
                className="w-full bg-black/60 border border-white/15 rounded p-2 text-white focus:border-[#D4AF37] outline-none"
                placeholder="e.g. Acme Corp"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1 font-semibold">Company / Org</label>
              <input
                type="text"
                value={data.clientCompany}
                onChange={(e) => onChangeData({ ...data, clientCompany: e.target.value })}
                className="w-full bg-black/60 border border-white/15 rounded p-2 text-white focus:border-[#D4AF37] outline-none"
                placeholder="e.g. Acme Technologies Inc."
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1 font-semibold">Project Title</label>
              <input
                type="text"
                value={data.projectTitle}
                onChange={(e) => onChangeData({ ...data, projectTitle: e.target.value })}
                className="w-full bg-black/60 border border-white/15 rounded p-2 text-white focus:border-[#D4AF37] outline-none"
                placeholder="e.g. AI & Digital Transformation"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div>
              <label className="block text-gray-400 mb-1 font-semibold">Proposal Reference #</label>
              <input
                type="text"
                value={data.proposalId}
                onChange={(e) => onChangeData({ ...data, proposalId: e.target.value })}
                className="w-full bg-black/60 border border-white/15 rounded p-2 text-white focus:border-[#D4AF37] outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1 font-semibold">Date</label>
              <input
                type="text"
                value={data.date}
                onChange={(e) => onChangeData({ ...data, date: e.target.value })}
                className="w-full bg-black/60 border border-white/15 rounded p-2 text-white focus:border-[#D4AF37] outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1 font-semibold">Discount (%)</label>
              <input
                type="number"
                value={data.discountPercent}
                onChange={(e) =>
                  onChangeData({ ...data, discountPercent: Number(e.target.value) })
                }
                className="w-full bg-black/60 border border-white/15 rounded p-2 text-white focus:border-[#D4AF37] outline-none"
              />
            </div>
            <div>
              <label className="block text-gray-400 mb-1 font-semibold">Tax (%)</label>
              <input
                type="number"
                value={data.taxPercent}
                onChange={(e) =>
                  onChangeData({ ...data, taxPercent: Number(e.target.value) })
                }
                className="w-full bg-black/60 border border-white/15 rounded p-2 text-white focus:border-[#D4AF37] outline-none"
              />
            </div>
          </div>

          {/* Select Included Catalog Services */}
          <div className="pt-2">
            <label className="block text-gray-400 mb-2 font-semibold">
              Select Services to Include in Proposal Document:
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {(data.items || []).map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleToggleItem(item.id)}
                  className={`flex items-center justify-between p-2.5 rounded-lg border text-left transition-all ${
                    item.included
                      ? "bg-white/10 border-[#D4AF37] text-white"
                      : "bg-black/40 border-white/10 text-gray-400"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center border ${
                        item.included
                          ? "bg-[#D4AF37] border-[#D4AF37] text-black"
                          : "border-gray-500"
                      }`}
                    >
                      {item.included && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span className="font-semibold text-xs">{item.title}</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#D4AF37]">
                    {data.currency === "INR" ? `₹${item.priceINR.toLocaleString()}` : `$${item.priceUSD.toLocaleString()}`}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
