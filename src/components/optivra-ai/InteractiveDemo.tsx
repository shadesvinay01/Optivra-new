"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Database, Mail, BarChart3, Play, ArrowRight, CheckCircle2, Zap } from "lucide-react";

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
    <section id="demo" className="py-32 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
          See It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">In Action.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Watch how Optivra AI seamlessly connects your tools to automate an entire business workflow in seconds.
        </p>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Trigger Button */}
        <button
          onClick={startSimulation}
          disabled={isPlaying}
          className="mb-12 px-8 py-4 rounded-xl bg-[#D4AF37] text-black font-black text-sm tracking-wide hover:bg-[#F3E5AB] hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Play className="w-4 h-4 fill-black" />
          {isPlaying ? "Simulating Workflow..." : "Simulate Inbound Lead"}
        </button>

        {/* 2x2 Grid of Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full relative">
          
          {/* Panel 1: WhatsApp */}
          <Panel 
            icon={MessageCircle} 
            title="WhatsApp AI Agent" 
            status={getStatus(0)}
            delay={0}
          >
            <div className="flex flex-col gap-3 mt-4 h-32 justify-end">
              <AnimatePresence>
                {currentStep >= 0 && (
                  <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} className="bg-white/10 p-3 rounded-xl rounded-bl-none text-sm text-gray-200 self-start w-3/4">
                    Hi, I'm interested in the Enterprise plan. Can we chat?
                  </motion.div>
                )}
                {currentStep >= 0 && (
                  <motion.div initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1 }} className="bg-[#D4AF37]/20 border border-[#D4AF37]/30 p-3 rounded-xl rounded-br-none text-sm text-[#D4AF37] self-end w-3/4">
                    Absolutely! I've qualified your request. I'll have our team send a proposal immediately.
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Panel>

          {/* Panel 2: CRM */}
          <Panel 
            icon={Database} 
            title="CRM Auto-Update" 
            status={getStatus(1)}
            delay={0.2}
          >
            <div className="flex flex-col gap-2 mt-4 h-32 justify-center">
              <div className="flex justify-between text-xs text-gray-500 mb-2 px-2">
                <span>Name</span>
                <span>Score</span>
                <span>Status</span>
              </div>
              <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10">
                <span className="text-sm text-gray-300">Acme Corp</span>
                <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">82</span>
                <span className="text-xs text-gray-400">Meeting Set</span>
              </div>
              <AnimatePresence>
                {currentStep >= 1 && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex justify-between items-center bg-[#D4AF37]/10 p-3 rounded-lg border border-[#D4AF37]/30 shadow-[0_0_15px_rgba(212,175,55,0.15)] relative overflow-hidden">
                    <motion.div className="absolute inset-0 bg-white/10" animate={{ x: ['-100%', '100%'] }} transition={{ duration: 1 }} />
                    <span className="text-sm text-white font-bold">New Lead</span>
                    <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">95</span>
                    <span className="text-xs text-[#D4AF37]">Qualifying</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Panel>

          {/* Panel 3: Email */}
          <Panel 
            icon={Mail} 
            title="Email Agent" 
            status={getStatus(2)}
            delay={0.4}
          >
            <div className="flex flex-col gap-3 mt-4 h-32 justify-center">
              <div className="border border-white/10 bg-black/50 rounded-lg p-4 relative overflow-hidden h-full">
                <AnimatePresence mode="wait">
                  {currentStep < 2 && (
                    <motion.div key="waiting" exit={{ opacity: 0 }} className="flex items-center justify-center h-full text-gray-600 text-sm italic">
                      Waiting for trigger...
                    </motion.div>
                  )}
                  {currentStep === 2 && (
                    <motion.div key="drafting" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 h-full text-[#D4AF37] text-sm">
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                        <Zap className="w-4 h-4" />
                      </motion.div>
                      Drafting custom proposal...
                    </motion.div>
                  )}
                  {currentStep > 2 && (
                    <motion.div key="sent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col h-full justify-center">
                      <div className="flex items-center gap-2 text-emerald-400 text-sm font-bold mb-2">
                        <CheckCircle2 className="w-4 h-4" /> Sent to Lead
                      </div>
                      <div className="text-xs text-gray-400 line-clamp-2">
                        Subject: Your Enterprise Proposal<br/>
                        Hi there, based on our WhatsApp chat, here is a custom plan...
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </Panel>

          {/* Panel 4: Dashboard */}
          <Panel 
            icon={BarChart3} 
            title="Finance Dashboard" 
            status={getStatus(3)}
            delay={0.6}
          >
            <div className="flex flex-col gap-3 mt-4 h-32 justify-center">
              <div className="flex justify-between items-end mb-2">
                <div className="text-gray-400 text-sm">Pipeline Value</div>
                <div className="text-xs text-emerald-400 font-bold">+ $12,500</div>
              </div>
              <div className="text-3xl font-black text-white flex items-center">
                $
                <AnimatePresence mode="wait">
                  <motion.span
                    key={currentStep >= 3 ? "new" : "old"}
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 20, opacity: 0, position: "absolute" }}
                  >
                    {currentStep >= 3 ? "154,890" : "142,390"}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full mt-4 overflow-hidden relative">
                <motion.div 
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-[#D4AF37] to-[#FFDF00]"
                  initial={{ width: "60%" }}
                  animate={{ width: currentStep >= 3 ? "75%" : "60%" }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </div>
          </Panel>

        </div>
      </div>
    </section>
  );
}

function Panel({ icon: Icon, title, status, delay, children }: { icon: any, title: string, status: StepStatus, delay: number, children: React.ReactNode }) {
  const isActive = status === "active";
  const isCompleted = status === "completed";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className={`relative p-6 rounded-2xl border transition-all duration-500 overflow-hidden ${
        isActive 
          ? "bg-[#0a0a0a] border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.15)] scale-[1.02]" 
          : isCompleted
            ? "bg-[#050505] border-[#D4AF37]/20"
            : "bg-[#030303] border-white/5 opacity-60"
      }`}
    >
      {isActive && (
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 to-transparent pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />
      )}
      
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${isActive || isCompleted ? "bg-[#D4AF37]/20 text-[#D4AF37]" : "bg-white/5 text-gray-500"}`}>
            <Icon className="w-5 h-5" />
          </div>
          <h3 className={`font-bold transition-colors ${isActive || isCompleted ? "text-white" : "text-gray-500"}`}>{title}</h3>
        </div>
        {isCompleted && (
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-emerald-400">
            <CheckCircle2 className="w-5 h-5" />
          </motion.div>
        )}
        {isActive && (
          <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2, ease: "linear" }} className="text-[#D4AF37]">
            <Zap className="w-5 h-5" />
          </motion.div>
        )}
      </div>
      
      {children}
    </motion.div>
  );
}
