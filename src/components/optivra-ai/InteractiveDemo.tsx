"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BarChart3, MessageSquare, Users, CheckCircle2, TrendingUp, DollarSign, Bell, Zap } from "lucide-react";

const MODULES = [
  { id: "dashboard", label: "Overview" },
  { id: "crm", label: "CRM" },
  { id: "chat", label: "AI Chat" },
  { id: "tasks", label: "Tasks" },
];

export default function InteractiveDemo() {
  const [activeModule, setActiveModule] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveModule((prev) => (prev + 1) % MODULES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="demo" className="relative py-24 px-6 max-w-7xl mx-auto z-10">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-8 xl:gap-16">
        
        {/* Laptop Mockup (Desktop Dashboard) */}
        <div className="relative w-full max-w-4xl order-2 lg:order-1">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-[80px] -z-10 rounded-full" />
          
          <div className="relative w-full bg-[#0a0a0a] rounded-[1.2rem] p-[8px] border border-[#2a2a2a] shadow-[0_40px_100px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.05)] aspect-[16/10] flex flex-col overflow-hidden">
            {/* Top Bar Simulated */}
            <div className="h-10 w-full bg-[#111] border-b border-white/5 flex items-center px-4 justify-between shrink-0">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="flex gap-4 text-xs font-medium text-gray-500">
                {MODULES.map((mod, i) => (
                  <button 
                    key={mod.id} 
                    onClick={() => setActiveModule(i)}
                    className={`transition-colors ${activeModule === i ? "text-white" : "hover:text-gray-300"}`}
                  >
                    {mod.label}
                  </button>
                ))}
              </div>
              <div className="flex gap-3">
                <Bell className="w-4 h-4 text-gray-500" />
                <div className="w-5 h-5 rounded-full bg-indigo-500" />
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="flex-1 bg-[#050505] p-6 overflow-hidden relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeModule}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="w-full h-full flex flex-col gap-6"
                >
                  {/* Dashboard View */}
                  {MODULES[activeModule].id === "dashboard" && (
                    <>
                      <div className="flex items-center justify-between">
                        <h2 className="text-xl font-bold text-white">Live Operations</h2>
                        <span className="text-xs font-medium px-2 py-1 bg-green-500/10 text-green-400 rounded-md">System Optimal</span>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { title: "Total Revenue", val: "$142,390", icon: DollarSign, color: "text-green-400" },
                          { title: "Active AI Agents", val: "12", icon: Users, color: "text-indigo-400" },
                          { title: "Tasks Automated", val: "8,294", icon: CheckCircle2, color: "text-purple-400" }
                        ].map((stat, i) => (
                          <div key={i} className="bg-white/5 border border-white/5 p-4 rounded-xl flex flex-col gap-3">
                            <div className="flex justify-between items-center text-gray-400">
                              <span className="text-xs font-medium">{stat.title}</span>
                              <stat.icon className="w-4 h-4" />
                            </div>
                            <span className={`text-2xl font-black ${stat.color}`}>{stat.val}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex-1 bg-white/5 border border-white/5 rounded-xl p-4 flex flex-col">
                        <span className="text-xs font-medium text-gray-400 mb-4">Revenue Forecast vs Actual (AI Predicted)</span>
                        <div className="flex-1 flex items-end gap-2">
                          {[40, 70, 45, 90, 65, 100, 80, 110].map((h, i) => (
                            <motion.div 
                              key={i} 
                              initial={{ height: 0 }} 
                              animate={{ height: `${h}%` }} 
                              transition={{ duration: 0.5, delay: i * 0.05 }}
                              className="flex-1 bg-gradient-to-t from-indigo-600 to-purple-500 rounded-t-sm"
                            />
                          ))}
                        </div>
                      </div>
                    </>
                  )}

                  {/* CRM View */}
                  {MODULES[activeModule].id === "crm" && (
                    <>
                      <h2 className="text-xl font-bold text-white">AI Sales Pipeline</h2>
                      <div className="flex gap-4 h-full">
                        {["New Leads", "AI Qualifying", "Meeting Booked"].map((col, i) => (
                          <div key={i} className="flex-1 bg-white/5 border border-white/5 rounded-xl p-3 flex flex-col gap-3">
                            <span className="text-xs font-bold text-gray-400">{col}</span>
                            {[1, 2, 3].map((card) => (
                              <motion.div 
                                key={card}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: (i * 0.2) + (card * 0.1) }}
                                className="bg-white/5 border border-white/5 p-3 rounded-lg flex flex-col gap-2"
                              >
                                <span className="text-xs font-bold text-white">Acme Corp Enterprise</span>
                                <div className="flex justify-between items-center text-[10px] text-gray-500">
                                  <span>Intent Score: 94%</span>
                                  <span className="text-green-400 font-bold">$12k</span>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </>
                  )}

                  {/* Other Views... */}
                  {(MODULES[activeModule].id === "chat" || MODULES[activeModule].id === "tasks") && (
                    <div className="flex-1 flex items-center justify-center text-gray-500 text-sm">
                      <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 4, ease: "linear" }}>
                        <Zap className="w-8 h-8 text-indigo-500/50" />
                      </motion.div>
                    </div>
                  )}

                </motion.div>
              </AnimatePresence>
            </div>
          </div>
          {/* Laptop Base */}
          <div className="relative mx-auto w-[104%] -left-[2%] h-[12px] bg-gradient-to-b from-[#909098] to-[#5a5a60] rounded-b-[1rem] border-t border-[#bbb] shadow-[0_20px_60px_rgba(0,0,0,0.6)]" />
        </div>

        {/* iPhone Mockup (Mobile Agent) */}
        <div className="relative w-[280px] shrink-0 order-1 lg:order-2 z-20 lg:-ml-16 mt-0 lg:mt-24">
          <div className="relative w-full aspect-[9/19.5] bg-black rounded-[2.5rem] border-[6px] border-[#222] shadow-2xl overflow-hidden flex flex-col">
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full z-30" />
            
            {/* Screen */}
            <div className="flex-1 bg-[#050505] p-5 pt-12 flex flex-col gap-4 relative overflow-hidden">
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">Optivra Agent</h4>
                  <p className="text-[10px] text-green-400">Online • Automating tasks</p>
                </div>
              </div>

              <div className="flex-1 flex flex-col gap-3 justify-end pb-2">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                  className="bg-white/10 p-3 rounded-2xl rounded-tl-sm self-start text-xs text-white max-w-[85%]"
                >
                  I've analyzed the new Q3 leads. 14 of them have high intent scores (&gt;85%).
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5 }}
                  className="bg-white/10 p-3 rounded-2xl rounded-tl-sm self-start text-xs text-white max-w-[85%]"
                >
                  Should I draft personalized outreach emails for them?
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 2.8 }}
                  className="bg-indigo-600 p-3 rounded-2xl rounded-tr-sm self-end text-xs text-white max-w-[85%]"
                >
                  Yes, draft them and send to my CRM for approval.
                </motion.div>
              </div>

              <div className="h-10 rounded-full bg-white/10 border border-white/5 flex items-center px-4">
                <span className="text-[10px] text-gray-500">Message Optivra Agent...</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
