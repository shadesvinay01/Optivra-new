"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MessageCircle, Database, Mail, BarChart3, 
  Play, CheckCircle2, Zap, DollarSign, Users, TrendingUp, Bell 
} from "lucide-react";

type StepStatus = "idle" | "active" | "completed";

export default function InteractiveDemo() {
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [isPlaying, setIsPlaying] = useState(false);

  const startSimulation = async () => {
    if (isPlaying) return;
    setIsPlaying(true);
    setCurrentStep(-1);
    
    // Step 0: WhatsApp
    await new Promise(r => setTimeout(r, 500));
    setCurrentStep(0);
    
    // Step 1: CRM
    await new Promise(r => setTimeout(r, 2000));
    setCurrentStep(1);
    
    // Step 2: Email
    await new Promise(r => setTimeout(r, 2000));
    setCurrentStep(2);
    
    // Step 3: Dashboard
    await new Promise(r => setTimeout(r, 2000));
    setCurrentStep(3);

    await new Promise(r => setTimeout(r, 2500));
    setIsPlaying(false);
  };

  const getStatus = (stepIndex: number): StepStatus => {
    if (currentStep === stepIndex) return "active";
    if (currentStep > stepIndex) return "completed";
    return "idle";
  };

  return (
    <section id="demo" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
          See It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">In Action.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
          Watch how Optivra AI seamlessly connects your tools to automate an entire business workflow in seconds.
        </p>

        <button
          onClick={startSimulation}
          disabled={isPlaying}
          className="mx-auto px-8 py-4 rounded-xl bg-[#D4AF37] text-black font-black text-sm tracking-wide hover:bg-[#F3E5AB] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Play className="w-4 h-4 fill-black" />
          {isPlaying ? "Simulating Workflow..." : "Simulate Inbound Lead"}
        </button>
      </div>

      <div className="relative flex flex-col items-center justify-center">

        {/* ── LAPTOP MOCKUP ── */}
        <div className="relative w-full max-w-5xl z-10">
          {/* Glow */}
          <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[100px] rounded-full -z-10" />

          {/* Screen */}
          <div className="w-full bg-[#111] rounded-t-[1.2rem] border border-[#2a2a2a] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden"
               style={{ aspectRatio: "16/10" }}>
            
            {/* Browser / App traffic lights bar */}
            <div className="h-9 bg-[#0a0a0a] border-b border-white/[0.05] flex items-center px-4 justify-between shrink-0">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] rounded-md px-3 py-0.5">
                <span className="text-[10px] text-gray-500">app.optivra.in/automations</span>
              </div>
              <div className="flex gap-3 items-center">
                <Bell className="w-3.5 h-3.5 text-gray-600" />
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFDF00]" />
              </div>
            </div>

            {/* App content layout */}
            <div className="flex h-[calc(100%-36px)]">
              
              {/* Sidebar */}
              <div className="w-14 bg-black/60 border-r border-white/[0.05] flex flex-col items-center py-4 gap-5 shrink-0 hidden sm:flex">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#FFDF00] flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                  <Zap className="w-3.5 h-3.5 text-black fill-black" />
                </div>
                {[DollarSign, Users, CheckCircle2, TrendingUp].map((Icon, i) => (
                  <div key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center ${i === 2 ? "bg-[#D4AF37]/10 border border-[#D4AF37]/20" : "bg-white/[0.03]"}`}>
                    <Icon className={`w-3.5 h-3.5 ${i === 2 ? "text-[#D4AF37]" : "text-gray-600"}`} />
                  </div>
                ))}
              </div>

              {/* Stats / Dashboard Panel */}
              <div className="w-48 bg-[#050505] border-r border-white/[0.05] p-4 flex flex-col gap-3 shrink-0 hidden md:flex">
                <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest mb-1">Live Overview</p>
                
                {/* Revenue Card (Updates during simulation) */}
                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  <p className="text-[9px] text-gray-600 mb-0.5">Revenue MTD</p>
                  <p className="text-sm font-black text-[#D4AF37]">
                    $
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={currentStep >= 3 ? "new" : "old"}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 10, opacity: 0, position: "absolute" }}
                      >
                        {currentStep >= 3 ? "154,890" : "142,390"}
                      </motion.span>
                    </AnimatePresence>
                  </p>
                  {currentStep >= 3 && (
                    <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-[9px] text-emerald-400 mt-1 font-bold">+ $12,500 just now</motion.p>
                  )}
                </div>

                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  <p className="text-[9px] text-gray-600 mb-0.5">AI Agents</p>
                  <p className="text-sm font-black text-emerald-400">12 Online</p>
                </div>

                <div className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                  <p className="text-[9px] text-gray-600 mb-0.5">Tasks Done</p>
                  <p className="text-sm font-black text-blue-400">8,294</p>
                </div>

                <div className="mt-auto">
                  <p className="text-[9px] text-gray-600 mb-2">Revenue Trend</p>
                  <div className="flex items-end gap-1 h-12">
                    {[30, 50, 40, 65, 80, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: `${h * 0.8}%` }}
                        animate={{ height: (i === 5 && currentStep >= 3) ? "100%" : `${h * 0.8}%` }}
                        transition={{ duration: 0.6 }}
                        className="flex-1 rounded-t-sm"
                        style={{ background: `rgba(212,175,55,${0.25 + h / 250})` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Main Area: The Workflow Simulator */}
              <div className="flex-1 bg-[#030303] overflow-y-auto p-6 md:p-8 relative">
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm">Automated Sales Flow</h3>
                    <p className="text-[10px] text-gray-500">Trigger: New WhatsApp Message</p>
                  </div>
                </div>

                {/* 2x2 Grid of Panels (Compact for laptop view) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                  
                  {/* Panel 1: WhatsApp */}
                  <WorkflowPanel icon={MessageCircle} title="WhatsApp AI" status={getStatus(0)}>
                    <div className="flex flex-col gap-2 mt-3 h-24 justify-end">
                      <AnimatePresence>
                        {currentStep >= 0 && (
                          <motion.div initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className="bg-white/10 p-2 rounded-lg rounded-bl-none text-xs text-gray-200 self-start w-11/12">
                            I'm interested in the Enterprise plan.
                          </motion.div>
                        )}
                        {currentStep >= 0 && (
                          <motion.div initial={{ opacity: 0, x: 5 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="bg-[#D4AF37]/20 border border-[#D4AF37]/30 p-2 rounded-lg rounded-br-none text-xs text-[#D4AF37] self-end w-11/12">
                            Qualified! Our team will send a proposal.
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </WorkflowPanel>

                  {/* Panel 2: CRM */}
                  <WorkflowPanel icon={Database} title="CRM Auto-Update" status={getStatus(1)}>
                    <div className="flex flex-col gap-1 mt-3 h-24 justify-center">
                      <div className="flex justify-between items-center bg-white/5 p-2 rounded border border-white/10">
                        <span className="text-xs text-gray-300">Acme Corp</span>
                        <span className="text-[10px] text-emerald-400">Score: 82</span>
                      </div>
                      <AnimatePresence>
                        {currentStep >= 1 && (
                          <motion.div initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="flex justify-between items-center bg-[#D4AF37]/10 p-2 rounded border border-[#D4AF37]/30 shadow-[0_0_10px_rgba(212,175,55,0.15)] mt-1">
                            <span className="text-xs text-white font-bold">New Lead</span>
                            <span className="text-[10px] text-emerald-400 font-bold">Score: 95</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </WorkflowPanel>

                  {/* Panel 3: Email */}
                  <WorkflowPanel icon={Mail} title="Email Agent" status={getStatus(2)}>
                    <div className="flex flex-col gap-2 mt-3 h-24 justify-center">
                      <div className="border border-white/10 bg-black/50 rounded-lg p-3 relative h-full">
                        <AnimatePresence mode="wait">
                          {currentStep < 2 && (
                            <motion.div key="waiting" exit={{ opacity: 0 }} className="flex items-center justify-center h-full text-gray-600 text-xs italic">
                              Waiting...
                            </motion.div>
                          )}
                          {currentStep === 2 && (
                            <motion.div key="drafting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5 h-full text-[#D4AF37] text-xs">
                              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}><Zap className="w-3 h-3" /></motion.div>
                              Drafting proposal...
                            </motion.div>
                          )}
                          {currentStep > 2 && (
                            <motion.div key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full justify-center">
                              <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-bold mb-1">
                                <CheckCircle2 className="w-3 h-3" /> Sent Proposal
                              </div>
                              <div className="text-[9px] text-gray-400 line-clamp-2">
                                Subject: Enterprise Plan<br/>Hi there, here is a custom plan...
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </WorkflowPanel>

                  {/* Panel 4: Invoice / Finance Trigger */}
                  <WorkflowPanel icon={BarChart3} title="Finance Update" status={getStatus(3)}>
                     <div className="flex flex-col gap-2 mt-3 h-24 justify-center items-center">
                        <AnimatePresence mode="wait">
                          {currentStep < 3 && (
                            <motion.div key="wait" exit={{opacity:0}} className="text-xs text-gray-600 italic">Pending Deal Closure...</motion.div>
                          )}
                          {currentStep >= 3 && (
                            <motion.div key="done" initial={{opacity:0, scale:0.8}} animate={{opacity:1, scale:1}} className="flex flex-col items-center">
                              <div className="w-10 h-10 rounded-full bg-emerald-400/20 flex items-center justify-center mb-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                              </div>
                              <p className="text-xs text-emerald-400 font-bold">Pipeline Updated</p>
                              <p className="text-[10px] text-gray-400">Check Dashboard</p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                     </div>
                  </WorkflowPanel>

                </div>

              </div>
            </div>
          </div>

          {/* Laptop hinge + base */}
          <div className="w-full h-2 bg-gradient-to-b from-[#888] to-[#666] rounded-b-sm" />
          <div className="mx-auto w-[60%] h-3 bg-gradient-to-b from-[#555] to-[#444] rounded-b-xl shadow-[0_8px_30px_rgba(0,0,0,0.6)]" />
        </div>
      </div>

    </section>
  );
}

function WorkflowPanel({ icon: Icon, title, status, children }: { icon: any, title: string, status: StepStatus, children: React.ReactNode }) {
  const isActive = status === "active";
  const isCompleted = status === "completed";

  return (
    <motion.div
      className={`relative p-4 rounded-xl border transition-all duration-300 overflow-hidden ${
        isActive 
          ? "bg-[#0a0a0a] border-[#D4AF37]/50 shadow-[0_0_20px_rgba(212,175,55,0.15)] scale-[1.02]" 
          : isCompleted
            ? "bg-[#050505] border-[#D4AF37]/20"
            : "bg-[#030303] border-white/5 opacity-50"
      }`}
    >
      {isActive && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}
      
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center gap-2">
          <div className={`w-6 h-6 rounded-md flex items-center justify-center transition-colors ${isActive || isCompleted ? "bg-[#D4AF37]/20 text-[#D4AF37]" : "bg-white/5 text-gray-500"}`}>
            <Icon className="w-3.5 h-3.5" />
          </div>
          <h3 className={`font-bold text-xs transition-colors ${isActive || isCompleted ? "text-white" : "text-gray-500"}`}>{title}</h3>
        </div>
        {isCompleted && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-emerald-400">
            <CheckCircle2 className="w-3.5 h-3.5" />
          </motion.div>
        )}
        {isActive && (
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="text-[#D4AF37]">
            <Zap className="w-3.5 h-3.5" />
          </motion.div>
        )}
      </div>
      
      {children}
    </motion.div>
  );
}
