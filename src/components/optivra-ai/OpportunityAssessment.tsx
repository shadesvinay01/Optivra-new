"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BarChart3 } from "lucide-react";

const QUESTIONS = [
  { q: "How many employees does your company have?", options: ["1–10", "11–50", "51–200", "200+"], weight: [1, 2, 3, 4] },
  { q: "What is your primary bottleneck right now?", options: ["Lead Generation", "Customer Support", "Internal Operations", "Data & Reporting"], weight: [3, 3, 2, 2] },
  { q: "How do you currently handle repetitive tasks?", options: ["100% Manual", "Some Zapier/Scripts", "Mostly Automated", "Not Sure"], weight: [4, 2, 1, 3] },
  { q: "Do you have a centralised CRM or database?", options: ["Yes, fully integrated", "Yes, but it's messy", "No, using spreadsheets", "No CRM at all"], weight: [1, 3, 4, 4] },
  { q: "What is your timeline for implementing AI?", options: ["ASAP", "Next 3 Months", "Next 6 Months", "Just Exploring"], weight: [4, 3, 2, 1] },
];

export default function OpportunityAssessment() {
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (weight: number) => {
    setScore(score + weight);
    setStep(step + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:hello@optivra.in?subject=AI%20Readiness%20Report%20Request&body=Hi%2C%20I%20just%20completed%20the%20AI%20Opportunity%20Assessment%20on%20your%20website.%20My%20email%20is%20${encodeURIComponent(email)}.%20Please%20send%20me%20my%20personalised%20report.`;
    setSubmitted(true);
  };

  const pct = Math.round((score / 20) * 100);
  const circumference = 2 * Math.PI * 54;

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto z-10 relative">
      <div className="relative rounded-2xl bg-[#050505] border border-[#D4AF37]/20 p-8 md:p-12 overflow-hidden shadow-[0_0_60px_rgba(212,175,55,0.05)]">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-[80px]" />
        
        <div className="relative z-10 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">AI Opportunity Assessment</h2>
          <p className="text-gray-400">Find out how much revenue you are losing to manual processes.</p>
        </div>

        <div className="relative min-h-[300px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            
            {/* Questions */}
            {step < QUESTIONS.length && (
              <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }} className="flex flex-col gap-6">
                <div className="flex justify-between items-center text-xs font-bold text-[#D4AF37] mb-2 uppercase tracking-widest">
                  <span>Question {step + 1} of {QUESTIONS.length}</span>
                  <div className="flex gap-1">
                    {QUESTIONS.map((_, i) => (
                      <div key={i} className={`w-8 h-1 rounded-full ${i <= step ? "bg-[#D4AF37]" : "bg-white/10"}`} />
                    ))}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{QUESTIONS[step].q}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {QUESTIONS[step].options.map((opt, i) => (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(QUESTIONS[step].weight[i])}
                      className="p-4 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/40 text-white font-medium text-left transition-all group flex justify-between items-center"
                    >
                      {opt}
                      <ArrowRight className="w-4 h-4 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Email Capture */}
            {step === QUESTIONS.length && !submitted && (
              <motion.div key="email" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center flex flex-col items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] mb-2">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Your AI Readiness Report is Ready.</h3>
                  <p className="text-gray-400">Enter your email to receive your score, cost-savings estimate, and a personalised AI implementation roadmap.</p>
                </div>
                <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-3">
                  <input
                    type="email" value={email} onChange={e => setEmail(e.target.value)} required
                    placeholder="name@company.com"
                    className="w-full p-4 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37]/50 transition-colors"
                  />
                  <button type="submit" className="w-full p-4 rounded-xl bg-[#D4AF37] hover:bg-[#F3E5AB] text-black font-bold transition-colors">
                    Get My Report
                  </button>
                </form>
              </motion.div>
            )}

            {/* Result */}
            {submitted && (
              <motion.div key="result" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-center text-center gap-8">
                <div className="relative w-44 h-44 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 120 120">
                    <circle cx="60" cy="60" r="54" stroke="rgba(255,255,255,0.05)" strokeWidth="8" fill="none" />
                    <motion.circle
                      cx="60" cy="60" r="54"
                      stroke="#D4AF37" strokeWidth="8" fill="none"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      initial={{ strokeDashoffset: circumference }}
                      animate={{ strokeDashoffset: circumference - (circumference * pct / 100) }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                  </svg>
                  <div className="flex flex-col items-center z-10">
                    <span className="text-5xl font-black text-white">{pct}%</span>
                    <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-widest">Readiness</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">High AI Automation Potential</h3>
                  <p className="text-gray-400 max-w-md mx-auto mb-6">
                    Based on your responses, your business is losing approximately <strong className="text-white">32 hours/week</strong> to manual tasks. Deploying Optivra AI could reduce operational overhead by up to 40%.
                  </p>
                  <a href="mailto:hello@optivra.in?subject=Strategy%20Call%20-%20AI%20Assessment" className="px-8 py-3 rounded-xl bg-[#D4AF37] hover:bg-[#F3E5AB] text-black font-bold transition-colors inline-block">
                    Schedule a Strategy Call
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
