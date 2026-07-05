"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, AlertCircle, BarChart3 } from "lucide-react";

const QUESTIONS = [
  {
    q: "How many employees does your company have?",
    options: ["1-10", "11-50", "51-200", "200+"],
    weight: [1, 2, 3, 4]
  },
  {
    q: "What is your primary bottleneck right now?",
    options: ["Lead Generation", "Customer Support", "Internal Operations", "Data & Reporting"],
    weight: [3, 3, 2, 2]
  },
  {
    q: "How do you currently handle repetitive tasks?",
    options: ["100% Manual", "Some Zapier/Scripts", "Mostly Automated", "Not Sure"],
    weight: [4, 2, 1, 3]
  },
  {
    q: "Do you have a centralized CRM or Database?",
    options: ["Yes, fully integrated", "Yes, but it's messy", "No, using spreadsheets", "No CRM"],
    weight: [1, 3, 4, 4]
  },
  {
    q: "What is your timeline for implementing AI?",
    options: ["ASAP", "Next 3 Months", "Next 6 Months", "Just Exploring"],
    weight: [4, 3, 2, 1]
  }
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
    setSubmitted(true);
    // In production, this would send to an API endpoint
  };

  return (
    <section className="py-32 px-6 max-w-4xl mx-auto z-10 relative">
      <div className="relative rounded-[2rem] bg-gradient-to-br from-indigo-900/20 to-purple-900/10 border border-indigo-500/20 p-8 md:p-12 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-[80px]" />
        
        <div className="relative z-10 text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">AI Opportunity Assessment</h2>
          <p className="text-indigo-200">Find out how much revenue you're losing to manual processes.</p>
        </div>

        <div className="relative min-h-[300px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            
            {/* Questions State */}
            {step < QUESTIONS.length && (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                <div className="flex justify-between items-center text-xs font-bold text-indigo-400 mb-2 uppercase tracking-widest">
                  <span>Question {step + 1} of {QUESTIONS.length}</span>
                  <div className="flex gap-1">
                    {QUESTIONS.map((_, i) => (
                      <div key={i} className={`w-8 h-1 rounded-full ${i <= step ? 'bg-indigo-500' : 'bg-white/10'}`} />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-6">{QUESTIONS[step].q}</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {QUESTIONS[step].options.map((opt, i) => (
                    <button
                      key={opt}
                      onClick={() => handleAnswer(QUESTIONS[step].weight[i])}
                      className="p-4 rounded-xl border border-white/10 bg-white/5 hover:bg-indigo-500/20 hover:border-indigo-500/50 text-white font-medium text-left transition-all group flex justify-between items-center"
                    >
                      {opt}
                      <ArrowRight className="w-4 h-4 text-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Email Capture State */}
            {step === QUESTIONS.length && !submitted && (
              <motion.div
                key="email"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center flex flex-col items-center gap-6"
              >
                <div className="w-16 h-16 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 mb-2">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Your AI Readiness Report is Ready.</h3>
                  <p className="text-gray-400">Enter your email to reveal your score, cost-savings estimate, and personalized AI implementation roadmap.</p>
                </div>
                
                <form onSubmit={handleSubmit} className="w-full max-w-md flex flex-col gap-3">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    placeholder="name@company.com" 
                    className="w-full p-4 rounded-xl bg-black/50 border border-white/10 text-white focus:outline-none focus:border-indigo-500 transition-colors"
                  />
                  <button type="submit" className="w-full p-4 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-colors">
                    Reveal My Score
                  </button>
                </form>
              </motion.div>
            )}

            {/* Final Result State */}
            {submitted && (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex flex-col items-center text-center gap-8"
              >
                <div className="relative w-48 h-48 rounded-full border-8 border-indigo-500/20 flex items-center justify-center">
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle cx="92" cy="92" r="88" className="stroke-indigo-500" strokeWidth="8" fill="none" strokeDasharray="552" strokeDashoffset={552 - (552 * (score / 20))} />
                  </svg>
                  <div className="flex flex-col items-center">
                    <span className="text-5xl font-black text-white">{Math.round((score / 20) * 100)}%</span>
                    <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest">Readiness Score</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">High AI Automation Potential</h3>
                  <p className="text-gray-400 max-w-md mx-auto mb-6">
                    Based on your responses, your business is losing approximately <strong className="text-white">32 hours per week</strong> to manual tasks. Deploying Optivra AI could reduce operational overhead by 40%.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="mailto:hello@optivra.in?subject=Strategy%20Call%20Request" className="px-8 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-colors">
                      Schedule Strategy Call
                    </a>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
