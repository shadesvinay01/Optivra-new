"use client";

import { motion } from "framer-motion";
import { 
  Headphones, 
  LineChart, 
  Megaphone, 
  Users, 
  Calculator, 
  Settings, 
  Briefcase, 
  BookOpen, 
  FileText, 
  CalendarDays, 
  Mic, 
  PieChart 
} from "lucide-react";

const AGENTS = [
  { name: "Sales Agent", icon: LineChart, desc: "Qualifies leads, books meetings, and updates CRM autonomously.", status: "Live" },
  { name: "Support Agent", icon: Headphones, desc: "Resolves L1/L2 tickets and handles customer inquiries 24/7.", status: "Live" },
  { name: "Marketing Agent", icon: Megaphone, desc: "Drafts campaigns, schedules posts, and optimizes ad spend.", status: "Live" },
  { name: "HR Agent", icon: Users, desc: "Screens resumes, schedules interviews, and answers policy FAQs.", status: "Beta" },
  { name: "Finance Agent", icon: Calculator, desc: "Generates invoices, tracks expenses, and reconciles accounts.", status: "Beta" },
  { name: "Operations Agent", icon: Settings, desc: "Monitors supply chain, tracks inventory, and alerts on delays.", status: "Building" },
  { name: "Executive Assistant", icon: Briefcase, desc: "Manages your inbox, calendar, and prioritizes urgent tasks.", status: "Live" },
  { name: "Knowledge Agent", icon: BookOpen, desc: "Searches internal wikis to answer complex employee questions.", status: "Live" },
  { name: "Proposal Generator", icon: FileText, desc: "Drafts tailored business proposals based on client notes.", status: "Live" },
  { name: "Meeting Assistant", icon: CalendarDays, desc: "Joins calls, takes notes, and assigns action items to the team.", status: "Live" },
  { name: "Voice Agent", icon: Mic, desc: "Handles inbound phone calls with human-like conversational AI.", status: "Beta" },
  { name: "Data Analyst", icon: PieChart, desc: "Pulls metrics from databases and generates visual reports.", status: "Live" }
];

export default function AgentGrid() {
  return (
    <section id="agents" className="py-32 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
          Meet Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">AI Workforce.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Deploy specialized AI employees across every department of your business. They work 24/7, never sleep, and scale infinitely.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {AGENTS.map((agent, i) => (
          <motion.div
            key={agent.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-indigo-500/30 hover:bg-white/[0.04] transition-all overflow-hidden"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-indigo-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 group-hover:bg-indigo-500/20 group-hover:text-indigo-400 group-hover:border-indigo-500/30 transition-all duration-300 shadow-lg">
                  <agent.icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md border ${
                  agent.status === 'Live' ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' :
                  agent.status === 'Beta' ? 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400' :
                  'bg-blue-500/10 border-blue-500/20 text-blue-400'
                }`}>
                  {agent.status}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{agent.name}</h3>
              <p className="text-sm text-gray-400 leading-relaxed font-light">{agent.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
