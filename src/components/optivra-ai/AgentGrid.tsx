"use client";

import { motion } from "framer-motion";
import { 
  Headphones, LineChart, Megaphone, Users, Calculator, Settings, 
  Briefcase, BookOpen, FileText, CalendarDays, Mic, PieChart 
} from "lucide-react";

const AGENTS = [
  { name: "Sales Agent", icon: LineChart, desc: "Qualifies leads, books meetings, and updates CRM autonomously.", status: "Live" },
  { name: "Support Agent", icon: Headphones, desc: "Resolves L1/L2 tickets and handles customer inquiries 24/7.", status: "Live" },
  { name: "Marketing Agent", icon: Megaphone, desc: "Drafts campaigns, schedules posts, and optimizes ad spend.", status: "Live" },
  { name: "HR Agent", icon: Users, desc: "Screens resumes, schedules interviews, and answers policy FAQs.", status: "Beta" },
  { name: "Finance Agent", icon: Calculator, desc: "Generates invoices, tracks expenses, and reconciles accounts.", status: "Beta" },
  { name: "Operations Agent", icon: Settings, desc: "Monitors supply chain, tracks inventory, and alerts on delays.", status: "Building" },
  { name: "Executive Assistant", icon: Briefcase, desc: "Manages your inbox, calendar, and prioritises urgent tasks.", status: "Live" },
  { name: "Knowledge Agent", icon: BookOpen, desc: "Searches internal wikis to answer complex employee questions.", status: "Live" },
  { name: "Proposal Generator", icon: FileText, desc: "Drafts tailored business proposals based on client notes.", status: "Live" },
  { name: "Meeting Assistant", icon: CalendarDays, desc: "Joins calls, takes notes, and assigns action items to the team.", status: "Live" },
  { name: "Voice Agent", icon: Mic, desc: "Handles inbound phone calls with human-like conversational AI.", status: "Beta" },
  { name: "Data Analyst", icon: PieChart, desc: "Pulls metrics from databases and generates visual reports.", status: "Live" },
];

export default function AgentGrid() {
  return (
    <section id="agents" className="py-32 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
          Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">AI Workforce.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Deploy specialised AI employees across every department. They work 24/7, never sleep, and scale infinitely.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {AGENTS.map((agent, i) => (
          <motion.div
            key={agent.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative p-6 rounded-2xl bg-[#050505] border border-white/[0.06] hover:border-[#D4AF37]/30 transition-all overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/5 group-hover:to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-5">
                <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-gray-400 group-hover:text-[#D4AF37] group-hover:border-[#D4AF37]/30 transition-all duration-300">
                  <agent.icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md border ${
                  agent.status === "Live"     ? "bg-emerald-500/10 border-emerald-500/20 text-emerald-400" :
                  agent.status === "Beta"     ? "bg-[#D4AF37]/10 border-[#D4AF37]/20 text-[#D4AF37]" :
                                                "bg-blue-500/10 border-blue-500/20 text-blue-400"
                }`}>
                  {agent.status}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{agent.name}</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-light">{agent.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
