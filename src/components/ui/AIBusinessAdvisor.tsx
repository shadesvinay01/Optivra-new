"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, ArrowRight, CheckCircle2, ChevronRight, Loader2, Sparkles, Building, Briefcase, FileText, Download } from "lucide-react";

// Types
type Step = "intro" | "chat_intro" | "q1" | "q2" | "q3" | "q4" | "q5" | "processing" | "result" | "lead_capture" | "success";

interface AssessmentData {
  industry: string;
  challenge: string;
  size: string;
  tools: string[];
  goal: string;
}

interface AIResult {
  score: number;
  summary: string;
  opportunities: Array<{
    title: string;
    impact: string;
    roi: string;
    eta: string;
  }>;
  roiEstimate: {
    timeSaved: string;
    costReduction: string;
    readiness: string;
    impact: string;
  };
}

export default function AIBusinessAdvisor() {
  const [step, setStep] = useState<Step>("intro");
  const [data, setData] = useState<AssessmentData>({
    industry: "",
    challenge: "",
    size: "",
    tools: [],
    goal: ""
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [aiResult, setAiResult] = useState<AIResult | null>(null);
  
  // Lead form state
  const [leadForm, setLeadForm] = useState({ name: "", email: "", company: "", country: "", phone: "" });
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);

  // Helper to advance step
  const nextStep = (next: Step) => setStep(next);

  // Options
  const industries = ["SaaS", "Healthcare", "Manufacturing", "Retail / E-commerce", "Finance", "Education", "Logistics", "Marketing Agency", "IT Services", "Consulting", "Real Estate", "Other"];
  const challenges = ["Too much manual work", "Slow customer support", "Sales follow-up", "Reporting takes too much time", "Data is scattered", "Poor visibility into business metrics", "Team productivity", "Knowledge management", "Too many repetitive tasks", "Other"];
  const sizes = ["Just me", "2–10 employees", "11–50 employees", "51–200 employees", "200+"];
  const toolsList = ["Google Workspace", "Microsoft 365", "Slack", "HubSpot", "Salesforce", "Zoho", "Jira", "Excel", "ERP", "Shopify", "Custom Software", "None"];
  const goals = ["Reduce costs", "Increase revenue", "Save employee time", "Improve customer support", "Improve decision making", "Automate workflows", "Build AI-powered products", "Scale operations", "Other"];

  // Handle Tool Selection (Multi-select)
  const toggleTool = (tool: string) => {
    if (tool === "None") {
      setData({ ...data, tools: ["None"] });
      return;
    }
    let newTools = [...data.tools].filter(t => t !== "None");
    if (newTools.includes(tool)) {
      newTools = newTools.filter(t => t !== tool);
    } else {
      newTools.push(tool);
    }
    setData({ ...data, tools: newTools });
  };

  // Simulate API Call to Gemini
  const submitAssessment = async () => {
    setStep("processing");
    setIsProcessing(true);
    
    try {
      const response = await fetch("/api/advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      const result = await response.json();
      setAiResult(result);
      setIsProcessing(false);
      setStep("result");
    } catch (error) {
      console.error("Error generating report", error);
      // Fallback dummy data if API fails
      setAiResult({
        score: 82,
        summary: "Based on your responses, your business appears to have significant opportunities in workflow automation and operational intelligence. Since your team currently relies on manual reporting and repetitive processes, implementing AI-driven automation could improve efficiency while reducing operational overhead. Your existing technology stack is also well suited for AI integration.",
        opportunities: [
          { title: "Workflow Automation", impact: "★★★★★", roi: "High", eta: "3–5 weeks" },
          { title: "AI Knowledge Assistant", impact: "★★★★☆", roi: "Medium", eta: "2–3 weeks" },
          { title: "Business Intelligence Dashboard", impact: "★★★★☆", roi: "High", eta: "4–6 weeks" }
        ],
        roiEstimate: { timeSaved: "18–25 hours/week", costReduction: "Medium to High", readiness: "82%", impact: "High" }
      });
      setIsProcessing(false);
      setStep("result");
    }
  };

  const submitLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingLead(true);
    
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ contact: leadForm, assessment: data, result: aiResult }),
      });
    } catch (error) {
      console.error("Failed to save lead", error);
    }
    
    setIsSubmittingLead(false);
    setStep("success");
  };

  // Processing Messages Animation
  const processingMessages = [
    "Analyzing your business...",
    "Finding automation opportunities...",
    "Calculating AI readiness...",
    "Generating personalized recommendations...",
    "Almost done..."
  ];
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    if (step === "processing") {
      const interval = setInterval(() => {
        setMsgIndex(prev => (prev < processingMessages.length - 1 ? prev + 1 : prev));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [step]);

  // Framer motion variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 min-h-[600px] flex flex-col justify-center">
      <AnimatePresence mode="wait">
        
        {/* STEP: Intro */}
        {step === "intro" && (
          <motion.div key="intro" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="text-center">
            <div className="inline-flex items-center justify-center p-4 bg-white/5 border border-white/10 rounded-full mb-8 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
              <Sparkles className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-6 tracking-tight text-balance">
              Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">AI Opportunities</span>
            </h1>
            <p className="text-xl text-gray-400 font-light mb-8 max-w-2xl mx-auto leading-relaxed">
              Answer a few quick questions and receive a personalized AI Opportunity Report tailored to your business.
            </p>
            <div className="flex items-center justify-center gap-3 text-sm text-gray-500 font-medium tracking-widest uppercase mb-12">
              <Clock className="w-4 h-4" /> Estimated time: 2 Minutes
            </div>
            <button 
              onClick={() => nextStep("chat_intro")}
              className="px-10 py-5 bg-white text-black font-bold tracking-widest uppercase text-sm hover:bg-gray-200 transition-all rounded-sm inline-flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              Start Assessment <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        )}

        {/* STEP: Chat Intro */}
        {step === "chat_intro" && (
          <motion.div key="chat_intro" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="max-w-2xl mx-auto w-full">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.4)]">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div className="bg-white/5 border border-white/10 p-6 rounded-2xl rounded-tl-none backdrop-blur-md">
                <p className="text-lg text-gray-200 mb-4 leading-relaxed">👋 Hello!</p>
                <p className="text-lg text-gray-200 mb-4 leading-relaxed">I&apos;m Optivra&apos;s AI Business Advisor.</p>
                <p className="text-lg text-gray-200 mb-4 leading-relaxed">I&apos;ll analyze your business and identify where Artificial Intelligence can create the highest return on investment.</p>
                <p className="text-lg text-gray-200 leading-relaxed">This assessment takes less than 2 minutes.</p>
              </div>
            </div>
            <div className="flex justify-end">
              <button onClick={() => nextStep("q1")} className="px-8 py-4 bg-blue-600 text-white font-bold tracking-widest uppercase text-xs hover:bg-blue-500 transition-all rounded-sm flex items-center gap-2">
                Let&apos;s Begin <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP: Q1 Industry */}
        {step === "q1" && (
          <QuestionStep 
            key="q1"
            title="What best describes your business?"
            options={industries}
            onSelect={(val) => { setData({ ...data, industry: val }); nextStep("q2"); }}
          />
        )}

        {/* STEP: Q2 Challenge */}
        {step === "q2" && (
          <QuestionStep 
            key="q2"
            title="What's your biggest operational challenge right now?"
            options={challenges}
            onSelect={(val) => { setData({ ...data, challenge: val }); nextStep("q3"); }}
          />
        )}

        {/* STEP: Q3 Size */}
        {step === "q3" && (
          <QuestionStep 
            key="q3"
            title="How large is your organization?"
            options={sizes}
            onSelect={(val) => { setData({ ...data, size: val }); nextStep("q4"); }}
          />
        )}

        {/* STEP: Q4 Tools (Multi-Select) */}
        {step === "q4" && (
          <motion.div key="q4" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="max-w-3xl mx-auto w-full">
            <h2 className="text-3xl font-sans font-bold text-white mb-8 text-center">Which tools does your business currently use? <span className="text-sm font-normal text-gray-500 block mt-2">(Select all that apply)</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
              {toolsList.map(tool => (
                <button
                  key={tool}
                  onClick={() => toggleTool(tool)}
                  className={`p-4 text-sm font-medium border text-left transition-all rounded-sm ${data.tools.includes(tool) ? 'bg-blue-600/20 border-blue-500 text-blue-100 shadow-[0_0_15px_rgba(59,130,246,0.2)]' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:text-white'}`}
                >
                  <div className="flex items-center justify-between">
                    {tool}
                    {data.tools.includes(tool) && <CheckCircle2 className="w-4 h-4 text-blue-400" />}
                  </div>
                </button>
              ))}
            </div>
            <div className="flex justify-end">
              <button 
                disabled={data.tools.length === 0}
                onClick={() => nextStep("q5")} 
                className="px-8 py-4 bg-white text-black font-bold tracking-widest uppercase text-xs hover:bg-gray-200 transition-all rounded-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continue <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP: Q5 Goal */}
        {step === "q5" && (
          <QuestionStep 
            key="q5"
            title="If AI could solve ONE problem this quarter, what would it be?"
            options={goals}
            onSelect={(val) => { setData({ ...data, goal: val }); submitAssessment(); }}
          />
        )}

        {/* STEP: Processing */}
        {step === "processing" && (
          <motion.div key="processing" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="text-center py-20">
            <div className="relative w-32 h-32 mx-auto mb-10">
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: "linear" }} className="absolute inset-0 border-2 border-dashed border-blue-500/30 rounded-full" />
              <motion.div animate={{ rotate: -360 }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} className="absolute inset-2 border border-purple-500/50 rounded-full" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Bot className="w-10 h-10 text-white animate-pulse" />
              </div>
            </div>
            <h3 className="text-2xl font-sans font-bold text-white mb-4">
              <AnimatePresence mode="wait">
                <motion.span key={msgIndex} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}>
                  {processingMessages[msgIndex]}
                </motion.span>
              </AnimatePresence>
            </h3>
            <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mt-8 uppercase tracking-widest font-mono">
              <Loader2 className="w-4 h-4 animate-spin" /> Estimated time: 5 seconds
            </div>
          </motion.div>
        )}

        {/* STEP: Result Page */}
        {step === "result" && aiResult && (
          <motion.div key="result" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="w-full">
            
            {/* Top Score Section */}
            <div className="text-center mb-16">
              <p className="text-xs font-bold text-blue-400 mb-4 uppercase tracking-[0.3em]">Analysis Complete</p>
              <h2 className="text-4xl font-sans font-bold text-white mb-10">AI Opportunity Score</h2>
              
              <div className="relative w-48 h-48 mx-auto flex items-center justify-center">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle cx="96" cy="96" r="90" className="stroke-white/10 stroke-[8px] fill-transparent" />
                  <motion.circle 
                    cx="96" cy="96" r="90" 
                    className="stroke-blue-500 stroke-[8px] fill-transparent" 
                    strokeDasharray="565"
                    initial={{ strokeDashoffset: 565 }}
                    animate={{ strokeDashoffset: 565 - (565 * aiResult.score) / 100 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                  />
                </svg>
                <div className="text-5xl font-black font-mono text-white">
                  {aiResult.score} <span className="text-2xl text-gray-500">/ 100</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
              {/* Summary */}
              <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <FileText className="w-5 h-5 text-purple-400" />
                  <h3 className="text-lg font-bold text-white uppercase tracking-widest">Executive Summary</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {aiResult.summary}
                </p>
              </div>

              {/* ROI Dashboard */}
              <div className="bg-white/5 border border-white/10 p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
                  <BarChart3 className="w-5 h-5 text-blue-400" />
                  <h3 className="text-lg font-bold text-white uppercase tracking-widest">ROI Estimate</h3>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Potential Time Saved</p>
                    <p className="text-xl font-mono text-white">{aiResult.roiEstimate.timeSaved}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Cost Reduction</p>
                    <p className="text-xl font-mono text-green-400">{aiResult.roiEstimate.costReduction}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">AI Readiness</p>
                    <p className="text-xl font-mono text-white">{aiResult.roiEstimate.readiness}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Business Impact</p>
                    <p className="text-xl font-mono text-blue-400">{aiResult.roiEstimate.impact}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Opportunities */}
            <div className="mb-16">
              <h3 className="text-2xl font-sans font-bold text-white mb-8 text-center">Top 3 Recommended Opportunities</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {aiResult.opportunities.map((opp, i) => (
                  <div key={i} className="bg-[#050505] border border-white/10 p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 blur-[30px] rounded-full" />
                    <div className="text-sm font-bold text-blue-500 mb-2 uppercase tracking-widest">#{i + 1}</div>
                    <h4 className="text-lg font-bold text-white mb-6 h-14">{opp.title}</h4>
                    <div className="space-y-4 pt-4 border-t border-white/10">
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Potential Impact</span>
                        <span className="text-yellow-400 text-sm tracking-widest">{opp.impact}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Estimated ROI</span>
                        <span className="text-green-400 text-xs font-bold uppercase tracking-widest">{opp.roi}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Implementation</span>
                        <span className="text-white text-xs font-mono">{opp.eta}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center pb-10">
              <button 
                onClick={() => nextStep("lead_capture")}
                className="px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold tracking-widest uppercase text-sm hover:opacity-90 transition-all rounded-sm inline-flex items-center gap-3 shadow-[0_0_40px_rgba(59,130,246,0.3)]"
              >
                Download Full PDF Report <Download className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}

        {/* STEP: Lead Capture */}
        {step === "lead_capture" && (
          <motion.div key="lead_capture" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="max-w-xl mx-auto w-full">
            <div className="bg-white/5 border border-white/10 p-10 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-50 pointer-events-none" />
              
              <div className="relative z-10">
                <h2 className="text-3xl font-sans font-bold text-white mb-4">Unlock Your Complete AI Opportunity Report</h2>
                <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                  Receive a personalized PDF containing your business analysis, recommended AI roadmap, technology recommendations, and estimated timeline.
                </p>

                <form onSubmit={submitLead} className="space-y-4">
                  <div>
                    <label className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 block">Full Name</label>
                    <input required type="text" value={leadForm.name} onChange={e => setLeadForm({...leadForm, name: e.target.value})} className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 block">Business Email</label>
                    <input required type="email" value={leadForm.email} onChange={e => setLeadForm({...leadForm, email: e.target.value})} className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 block">Company Name</label>
                    <input required type="text" value={leadForm.company} onChange={e => setLeadForm({...leadForm, company: e.target.value})} className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 block">Country</label>
                      <input required type="text" value={leadForm.country} onChange={e => setLeadForm({...leadForm, country: e.target.value})} className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" />
                    </div>
                    <div>
                      <label className="text-[10px] text-gray-500 uppercase tracking-widest mb-1 block">Phone (Optional)</label>
                      <input type="tel" value={leadForm.phone} onChange={e => setLeadForm({...leadForm, phone: e.target.value})} className="w-full bg-black/50 border border-white/10 px-4 py-3 text-white focus:border-blue-500 focus:outline-none transition-colors" />
                    </div>
                  </div>
                  
                  <button 
                    disabled={isSubmittingLead}
                    type="submit" 
                    className="w-full mt-6 px-8 py-4 bg-white text-black font-bold tracking-widest uppercase text-xs hover:bg-gray-200 transition-all rounded-sm flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmittingLead ? <Loader2 className="w-4 h-4 animate-spin" /> : "Generate My AI Report"}
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        )}

        {/* STEP: Success */}
        {step === "success" && (
          <motion.div key="success" variants={containerVariants} initial="hidden" animate="visible" exit="exit" className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center justify-center p-4 bg-green-500/10 border border-green-500/30 rounded-full mb-8">
              <CheckCircle2 className="w-12 h-12 text-green-400" />
            </div>
            <h2 className="text-4xl font-sans font-bold text-white mb-6">Thank You.</h2>
            <p className="text-xl text-gray-400 font-light mb-4 leading-relaxed">
              Your personalized report is being prepared. A copy has been sent to your email.
            </p>
            <p className="text-gray-500 mb-12">
              Would you like to discuss the recommendations with one of our AI consultants?
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://calendly.com/hello-optivra"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-blue-600 text-white font-bold tracking-widest uppercase text-xs hover:bg-blue-500 transition-all rounded-sm w-full sm:w-auto"
              >
                Schedule Strategy Call
              </a>
              <a 
                href="/"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold tracking-widest uppercase text-xs hover:bg-white/10 transition-all rounded-sm w-full sm:w-auto"
              >
                Return to Homepage
              </a>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}

// Sub-component for single-choice questions
function QuestionStep({ title, options, onSelect }: { title: string, options: string[], onSelect: (val: string) => void }) {
  return (
    <motion.div 
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
        exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
      }}
      initial="hidden" animate="visible" exit="exit" className="max-w-3xl mx-auto w-full"
    >
      <h2 className="text-3xl md:text-4xl font-sans font-bold text-white mb-10 text-center text-balance">{title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {options.map((opt, i) => (
          <button
            key={i}
            onClick={() => onSelect(opt)}
            className="p-5 bg-white/5 border border-white/10 text-left text-gray-300 hover:bg-white/10 hover:border-white/30 hover:text-white transition-all rounded-sm group flex justify-between items-center"
          >
            {opt}
            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0" />
          </button>
        ))}
      </div>
    </motion.div>
  );
}
