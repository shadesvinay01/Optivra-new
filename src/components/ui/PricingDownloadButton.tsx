"use client";

import React, { useState } from 'react';
import { Download } from 'lucide-react';
import { jsPDF } from 'jspdf';
import autoTable from 'jspdf-autotable';

interface PricingDownloadButtonProps {
  filename?: string;
  className?: string;
}

export default function PricingDownloadButton({
  filename = 'Optivra_Pricing_List.pdf',
  className = '',
}: PricingDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    try {
      const doc = new jsPDF();
      
      // Title
      doc.setFontSize(22);
      doc.setTextColor(0, 0, 0);
      doc.text("Optivra Pricing Overview", 14, 20);
      
      // Subtitle
      doc.setFontSize(11);
      doc.setTextColor(100, 100, 100);
      doc.text("Indicative starting prices to help you estimate project budgets.", 14, 28);

      // Table Data
      const tableColumn = ["Service", "Starting From"];
      const tableRows = [
        ["Landing Page", "Rs. 24,999"],
        ["Business Website", "Rs. 49,999"],
        ["E-commerce Website", "Rs. 79,999"],
        ["AI Chatbot", "Rs. 49,999"],
        ["AI Automation", "Rs. 75,000"],
        ["Custom Web Application", "Rs. 1,99,999"],
        ["Mobile App Development", "Rs. 2,49,999"],
        ["CRM Development", "Rs. 99,999"],
        ["SaaS MVP Development", "Rs. 4,99,999"],
        ["ERP / Enterprise AI", "Custom Quote"]
      ];

      autoTable(doc, {
        head: [tableColumn],
        body: tableRows,
        startY: 35,
        theme: 'grid',
        headStyles: { fillColor: [212, 175, 55], textColor: [0, 0, 0], fontStyle: 'bold' },
        styles: { fontSize: 11, cellPadding: 5 },
        alternateRowStyles: { fillColor: [250, 250, 250] },
      });

      // Notes
      // @ts-ignore
      const finalY = doc.lastAutoTable.finalY || 130;
      doc.setFontSize(12);
      doc.setTextColor(0, 0, 0);
      doc.setFont("helvetica", "bold");
      doc.text("Commercial Notes:", 14, finalY + 15);
      
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(80, 80, 80);
      const notes = [
        "• Prices shown are starting prices and are intended for budgeting purposes only.",
        "• Final quotation depends on project scope, features, integrations, timeline and business requirements.",
        "• GST will be charged separately, if applicable.",
        "• A detailed proposal is shared after the discovery call and requirement analysis."
      ];
      
      let noteY = finalY + 22;
      notes.forEach(note => {
        doc.text(note, 14, noteY);
        noteY += 6;
      });

      doc.save(filename);
    } catch (error: any) {
      console.error('Error generating PDF:', error);
      alert(`Failed to generate PDF: ${error?.message || "Unknown error"}`);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      <Download className="w-4 h-4" />
      {isDownloading ? 'Generating PDF...' : 'Download Pricing PDF'}
    </button>
  );
}
