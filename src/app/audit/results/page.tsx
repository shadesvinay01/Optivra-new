"use client";

import { useEffect, useState, useRef, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Download, ShieldCheck, Zap, BarChart3, Clock, DollarSign, BrainCircuit, Target, Workflow, Users, Activity } from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

function AuditResultsContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const reportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!id) {
      setError("No audit ID provided");
      setLoading(false);
      return;
    }

    const fetchAudit = async () => {
      try {
        const res = await fetch(`/api/audit/${id}`);
        if (!res.ok) throw new Error("Failed to load audit");
        const json = await res.json();
        setData(json);
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAudit();
  }, [id]);

  const generatePDF = async () => {
    if (!reportRef.current) return;
    try {
      const canvas = await html2canvas(reportRef.current, { scale: 2, useCORS: true, backgroundColor: "#000000" });
      const imgData = canvas.toDataURL("image/jpeg", 1.0);
      const pdf = new jsPDF("p", "pt", "a4");
      
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      
      pdf.addImage(imgData, "JPEG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`Optivra_AI_Audit_${data?.companyName || "Report"}.pdf`);
    } catch (e) {
      console.error("PDF generation failed", e);
      alert("Failed to generate PDF. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-white/10 border-t-primary rounded-full animate-spin" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen bg-black flex flex-col items-center justify-center text-white p-6">
        <p className="text-red-400 mb-6">{error || "Audit not found"}</p>
        <Link href="/audit" className="text-primary hover:underline uppercase tracking-widest text-xs">
          Run New Audit
        </Link>
      </div>
    );
  }

  // Format data for Recharts
  const radarData = [
    { subject: "Customer Support", A: data.categoryScores.customerSupport, fullMark: 20 },
    { subject: "Sales Automation", A: data.categoryScores.sales, fullMark: 20 },
    { subject: "Marketing", A: data.categoryScores.marketing, fullMark: 20 },
    { subject: "Operations", A: data.categoryScores.operations, fullMark: 20 },
    { subject: "Data Intelligence", A: data.categoryScores.dataIntelligence, fullMark: 20 },
  ];

  const roiData = [
    { name: "Current Baseline", value: 100 },
    { name: "With AI Systems", value: 100 + ((100 - data.totalScore) / 2) }, // Simulated Growth
  ];

  return (
    <div className="bg-black min-h-screen text-white pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <Link href="/audit" className="text-gray-500 hover:text-primary transition-colors text-xs tracking-widest uppercase mb-4 block">
              ← New Audit
            </Link>
            <h1 className="text-3xl md:text-5xl font-sans font-black text-white">
              AI Opportunity <span className="text-primary">Report</span>
            </h1>
            <p className="text-gray-400 mt-2 text-sm">
              Analysis for: <span className="text-white font-mono">{data.url}</span>
            </p>
          </div>
          <button
            onClick={generatePDF}
            className="flex items-center gap-3 px-6 py-3 bg-white/5 border border-white/10 hover:border-primary hover:text-primary transition-colors text-xs tracking-widest uppercase font-bold"
          >
            <Download className="w-4 h-4" /> Download PDF
          </button>
        </div>

        {/* --- PDF WRAPPER START --- */}
        <div ref={reportRef} className="bg-[#050505] border border-white/10 p-8 md:p-12 shadow-2xl space-y-16 print-container relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

          {/* SECTION 1: Executive Summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            <div className="md:col-span-2 space-y-6">
              <h2 className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold border border-primary/30 px-3 py-1 bg-primary/10 inline-block">
                Executive Summary
              </h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">Detected Industry</p>
                  <p className="text-xl font-bold">{data.industry}</p>
                </div>
                <div>
                  <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">Business Model</p>
                  <p className="text-xl font-bold">{data.businessModel}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
                Based on our structural analysis of your digital footprint, your business is currently categorized as <strong className="text-white">{data.readinessLevel}</strong>. There is substantial room for automated margin expansion and operational efficiency through targeted AI deployment.
              </p>
            </div>
            
            {/* Massive Score Gauge */}
            <div className="border border-white/10 bg-black p-8 flex flex-col items-center justify-center text-center">
              <div className="relative w-32 h-32 flex items-center justify-center mb-4">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#222" strokeWidth="10" />
                  <circle 
                    cx="50" cy="50" r="45" fill="none" stroke="#D4AF37" strokeWidth="10" 
                    strokeDasharray={`${(data.totalScore / 100) * 283} 283`}
                    className="transition-all duration-1000 ease-out"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black text-white">{data.totalScore}</span>
                  <span className="text-[9px] text-gray-500 uppercase tracking-widest">/ 100</span>
                </div>
              </div>
              <p className="text-xs font-bold tracking-widest uppercase text-primary">{data.readinessLevel}</p>
              <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-wider">Overall Opportunity Score</p>
            </div>
          </div>

          {/* SECTION 2: AI Radar & ROI */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10 border-t border-white/10 pt-16">
            
            {/* Radar Chart */}
            <div>
              <h3 className="text-xl font-sans font-bold mb-6 flex items-center gap-3">
                <Target className="w-5 h-5 text-primary" /> Capability Matrix
              </h3>
              <div className="h-[300px] w-full bg-black border border-white/10 p-4">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid stroke="#333" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: "#888", fontSize: 10 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 20]} tick={false} axisLine={false} />
                    <Radar name="Score" dataKey="A" stroke="#D4AF37" fill="#D4AF37" fillOpacity={0.4} />
                    <Tooltip contentStyle={{ backgroundColor: "#000", border: "1px solid #333" }} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* ROI Forecast */}
            <div>
              <h3 className="text-xl font-sans font-bold mb-6 flex items-center gap-3">
                <BarChart3 className="w-5 h-5 text-primary" /> Financial Impact Forecast
              </h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-black border border-white/10 p-6">
                  <Clock className="w-5 h-5 text-primary mb-3" />
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Hours Saved / Month</p>
                  <p className="text-2xl font-bold">{data.roiForecast.hoursSaved}+</p>
                </div>
                <div className="bg-black border border-white/10 p-6">
                  <DollarSign className="w-5 h-5 text-primary mb-3" />
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Annual Savings Potential</p>
                  <p className="text-2xl font-bold text-green-400">{data.roiForecast.potentialSavings}</p>
                </div>
              </div>
              <div className="bg-black border border-white/10 p-6">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-4">Revenue Growth Trajectory</p>
                <div className="h-[120px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={roiData} layout="vertical" margin={{ top: 0, right: 0, bottom: 0, left: 0 }}>
                      <XAxis type="number" hide />
                      <YAxis dataKey="name" type="category" width={100} tick={{ fill: "#888", fontSize: 10 }} axisLine={false} tickLine={false} />
                      <Tooltip cursor={{ fill: "#111" }} contentStyle={{ backgroundColor: "#000", border: "1px solid #333" }} />
                      <Bar dataKey="value" fill="#D4AF37" radius={[0, 4, 4, 0]} barSize={20} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>

          {/* SECTION 3: Deep Breakdown */}
          <div className="border-t border-white/10 pt-16 relative z-10">
            <h3 className="text-2xl font-sans font-bold mb-8">System Analysis Breakdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-black border border-white/10 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold flex items-center gap-2"><Users className="w-4 h-4 text-primary" /> Customer Support</h4>
                  <span className="text-primary font-mono">{data.categoryScores.customerSupport}/20</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{data.justifications.customerSupport}</p>
              </div>

              <div className="bg-black border border-white/10 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold flex items-center gap-2"><DollarSign className="w-4 h-4 text-primary" /> Sales Automation</h4>
                  <span className="text-primary font-mono">{data.categoryScores.sales}/20</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{data.justifications.sales}</p>
              </div>

              <div className="bg-black border border-white/10 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold flex items-center gap-2"><Target className="w-4 h-4 text-primary" /> Marketing</h4>
                  <span className="text-primary font-mono">{data.categoryScores.marketing}/20</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{data.justifications.marketing}</p>
              </div>

              <div className="bg-black border border-white/10 p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="font-bold flex items-center gap-2"><Workflow className="w-4 h-4 text-primary" /> Operations</h4>
                  <span className="text-primary font-mono">{data.categoryScores.operations}/20</span>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">{data.justifications.operations}</p>
              </div>

            </div>
          </div>

          {/* SECTION 4: Roadmap & Recommendations */}
          <div className="border-t border-white/10 pt-16 relative z-10">
            <h3 className="text-2xl font-sans font-bold mb-8">Implementation Roadmap</h3>
            <div className="bg-black border border-primary/30 p-8">
              <div className="space-y-6">
                {data.recommendations.map((rec: string, i: number) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-8 h-8 shrink-0 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm">
                      {i + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{rec}</h4>
                      <p className="text-xs text-gray-500">High-impact initiative identified based on your {data.industry} architecture.</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 pt-8 border-t border-white/10 text-center">
                <p className="text-sm text-gray-400 mb-6">Ready to architect these systems? Our engineering partners are standing by.</p>
                <a 
                  href="https://calendly.com/hello-optivra" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold tracking-widest uppercase text-xs hover:bg-white transition-colors"
                >
                  Schedule Strategy Session
                </a>
              </div>
            </div>
          </div>

        </div>
        {/* --- PDF WRAPPER END --- */}
      </div>
    </div>
  );
}

export default function AuditResultsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-black flex items-center justify-center"><div className="w-16 h-16 border-4 border-white/10 border-t-primary rounded-full animate-spin" /></div>}>
      <AuditResultsContent />
    </Suspense>
  );
}
