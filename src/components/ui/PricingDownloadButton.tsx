"use client";

import React, { useState } from 'react';
import { Download } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface PricingDownloadButtonProps {
  targetId: string;
  filename?: string;
  className?: string;
}

export default function PricingDownloadButton({
  targetId,
  filename = 'Optivra_Pricing_List.pdf',
  className = '',
}: PricingDownloadButtonProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const element = document.getElementById(targetId);
      if (!element) {
        console.error(`Element with id ${targetId} not found`);
        return;
      }

      // Add a temporary class to ensure the element looks good in PDF
      element.classList.add('pdf-mode');

      const canvas = await html2canvas(element, {
        scale: 2, // Higher resolution
        useCORS: true,
        logging: false,
        backgroundColor: '#0a0a0a', // Assuming dark mode background
      });

      element.classList.remove('pdf-mode');

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save(filename);
    } catch (error) {
      console.error('Error generating PDF:', error);
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
