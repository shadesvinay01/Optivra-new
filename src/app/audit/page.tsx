"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, Activity, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function AuditLandingPage() {
  const router = useRouter();
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [progressText, setProgressText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    // Simulate analysis steps for UI feedback
    const steps = [
      "Initializing AI Auditor...",
      "Scraping website architecture...",
      "Analyzing support & sales pipelines...",
      "Calculating automation potential...",
      "Generating ROI forecast...",
      "Finalizing report...",
    ];

    let stepIndex = 0;
    const interval = setInterval(() => {
      if (stepIndex < steps.length) {
        setProgressText(steps[stepIndex]);
        stepIndex++;
      }
    }, 1500);

    try {
      const res = await fetch("/api/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url, email }),
      });

      const data = await res.json();
      clearInterval(interval);

      if (!res.ok) {
        throw new Error(data.error || "Failed to complete audit");
      }

      // Redirect to results page
      router.push(`/audit/results?id=${data.auditId}`);
    } catch (err: any) {
      clearInterval(interval);
      setError(err.message);
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white relative overflow-hidden flex flex-col items-center justify-center pt-24 pb-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-4xl">
        <Link
          href="/"
          className="text-gray-500 hover:text-primary transition-colors text-xs tracking-widest uppercase mb-8 block text-center"
        >
          ← Return to Optivra Home
        </Link>

        <div className="text-center mb-12">
          <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-4 inline-block border border-primary/30 px-4 py-1.5 bg-primary/10">
            Enterprise Grade Tool
          </p>
          <h1 className="text-4xl md:text-6xl font-sans font-black text-white leading-tight mb-6">
            Get Your AI{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #F3E5AB 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Opportunity Score
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light leading-relaxed">
            Enter your website URL to instantly calculate your AI Readiness Level, uncover automation opportunities, and forecast potential revenue growth.
          </p>
        </div>

        <div className="bg-[#050505] border border-white/10 p-8 md:p-12 shadow-2xl relative">
          {/* Top Edge Highlight */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/50 text-red-400 text-sm text-center">
              {error}
            </div>
          )}

          {isLoading ? (
            <div className="py-16 text-center flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-white/10 border-t-primary rounded-full animate-spin mb-8" />
              <p className="text-primary font-bold tracking-widest uppercase text-xs animate-pulse">
                {progressText || "Analyzing your business model..."}
              </p>
              <p className="text-gray-500 text-xs mt-4 max-w-md mx-auto">
                Our engine is crawling your site and applying the Optivra Enterprise AI Scoring matrix. This takes about 10-15 seconds.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <label className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    required
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    placeholder="https://yourcompany.com"
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-700"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-xs font-bold tracking-widest text-gray-500 uppercase mb-2">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-700"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-6 w-full bg-primary text-black font-bold tracking-widest uppercase py-5 flex items-center justify-center gap-3 hover:bg-white transition-all duration-300 group shadow-[0_0_20px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]"
              >
                Run Free AI Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}

          {/* Trust indicators */}
          {!isLoading && (
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Activity className="w-5 h-5 text-gray-500 mb-2" />
                <span className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold">
                  Evidence-Based Scoring
                </span>
              </div>
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-5 h-5 text-gray-500 mb-2" />
                <span className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold">
                  100% Private Analysis
                </span>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="w-5 h-5 text-gray-500 mb-2" />
                <span className="text-[10px] tracking-widest uppercase text-gray-400 font-semibold">
                  Instant ROI Report
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
