"use client";

import { motion } from "framer-motion";
import {
  Headphones, LineChart, Megaphone, Users, Calculator, Settings,
  Briefcase, BookOpen, FileText, CalendarDays, Mic, PieChart
} from "lucide-react";

const AGENTS = [
  { name: "Sales Agent",          icon: LineChart,    desc: "Qualifies leads, books meetings, and updates your CRM autonomously.",        status: "Live" },
  { name: "Support Agent",        icon: Headphones,   desc: "Resolves L1/L2 tickets and handles customer inquiries 24/7.",                status: "Live" },
  { name: "Marketing Agent",      icon: Megaphone,    desc: "Drafts campaigns, schedules posts, and optimises ad spend.",                 status: "Live" },
  { name: "HR Agent",             icon: Users,        desc: "Screens resumes, schedules interviews, and answers policy FAQs.",            status: "Beta" },
  { name: "Finance Agent",        icon: Calculator,   desc: "Generates invoices, tracks expenses, and reconciles accounts.",              status: "Beta" },
  { name: "Operations Agent",     icon: Settings,     desc: "Monitors supply chain, tracks inventory, and alerts on delays.",             status: "Building" },
  { name: "Executive Assistant",  icon: Briefcase,    desc: "Manages your inbox, calendar, and prioritises urgent tasks.",                status: "Live" },
  { name: "Knowledge Agent",      icon: BookOpen,     desc: "Searches internal wikis to answer complex employee questions.",              status: "Live" },
  { name: "Proposal Generator",   icon: FileText,     desc: "Drafts tailored business proposals based on client notes.",                  status: "Live" },
  { name: "Meeting Assistant",    icon: CalendarDays, desc: "Joins calls, takes notes, and assigns action items to the team.",            status: "Live" },
  { name: "Voice Agent",          icon: Mic,          desc: "Handles inbound phone calls with human-like conversational AI.",             status: "Beta" },
  { name: "Data Analyst",         icon: PieChart,     desc: "Pulls metrics from databases and generates visual reports.",                 status: "Live" },
];

const STATUS_STYLE: Record<string, string> = {
  Live:     "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
  Beta:     "bg-[#D4AF37]/10 border-[#D4AF37]/20 text-[#D4AF37]",
  Building: "bg-blue-500/10 border-blue-500/20 text-blue-400",
};

export default function AgentGrid() {
  return (
    <section id="agents" className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">

      {/* Section glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D4AF37]/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#D4AF37]/70 mb-4">Your AI Workforce</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-5">
            12 Specialised <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">AI Employees.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Each agent is an expert in its domain. Deploy across every department. They never sleep, never miss a deadline, and scale infinitely.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-px bg-white/[0.04] rounded-3xl overflow-hidden border border-white/[0.06]">
          {AGENTS.map((agent, i) => (
            <motion.div
              key={agent.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group relative p-7 bg-[#030303] hover:bg-[#0a0a0a] transition-colors overflow-hidden cursor-default"
            >
              {/* Hover gold sweep */}
              <div className="absolute inset-x-0 bottom-0 h-0 group-hover:h-[2px] bg-gradient-to-r from-[#D4AF37] to-[#FFDF00] transition-all duration-300" />
              {/* Corner glow */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/5 rounded-full blur-2xl transition-all duration-500 -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 flex flex-col h-full gap-4">
                <div className="flex items-start justify-between">
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/[0.07] flex items-center justify-center group-hover:border-[#D4AF37]/30 group-hover:bg-[#D4AF37]/5 transition-all duration-300">
                    <agent.icon className="w-5 h-5 text-gray-500 group-hover:text-[#D4AF37] transition-colors duration-300" />
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-lg border ${STATUS_STYLE[agent.status]}`}>
                    {agent.status}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-bold text-white mb-1.5 group-hover:text-[#F3E5AB] transition-colors">{agent.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed font-light group-hover:text-gray-400 transition-colors">{agent.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom tag */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-gray-600 uppercase tracking-[0.25em] font-bold mt-8"
        >
          More agents shipping monthly
        </motion.p>
      </div>
    </section>
  );
}
