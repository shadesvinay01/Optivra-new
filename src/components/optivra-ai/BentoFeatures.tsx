"use client";

import { motion } from "framer-motion";
import { Database, MessageCircle, PhoneCall, BarChart4, Network, ArrowRight } from "lucide-react";

export default function BentoFeatures() {
  return (
    <section id="features" className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">

      {/* Grid bg */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.06) 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#D4AF37]/70 mb-4">Capabilities</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-5">
            One Platform. <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">Everything.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Replace your entire software stack with a single AI-powered operating system.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">

          {/* Large: CRM */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="md:col-span-4 rounded-3xl relative overflow-hidden group border border-white/[0.06] bg-[#030303] hover:border-[#D4AF37]/20 transition-all duration-500"
            style={{ minHeight: 340 }}
          >
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            {/* Top border glow */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10 p-8 h-full flex flex-col">
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center">
                  <Database className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <span className="text-xs text-gray-600 font-bold uppercase tracking-widest border border-white/[0.06] px-3 py-1 rounded-full">Core</span>
              </div>
              <h3 className="text-2xl font-black text-white mb-3">AI-Powered CRM</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm font-light mb-6">
                A self-updating CRM that tracks every conversation, logs every meeting, scores leads autonomously, and tells your team exactly who to call next — without manual input.
              </p>

              {/* Mock UI rows */}
              <div className="mt-auto space-y-2">
                <p className="text-[10px] font-bold text-gray-600 uppercase tracking-widest mb-3">Live Pipeline — Auto-syncing</p>
                {[
                  { name: "Acme Corp", score: 94, val: "$48K", stage: "Meeting Booked" },
                  { name: "NovaTech", score: 81, val: "$32K", stage: "Qualifying" },
                  { name: "Blueridge", score: 76, val: "$22K", stage: "Outreach Sent" },
                ].map((row) => (
                  <div key={row.name} className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] group-hover:border-[#D4AF37]/10 transition-colors">
                    <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] text-[9px] font-black flex items-center justify-center shrink-0">{row.name[0]}</div>
                    <span className="text-sm font-semibold text-white flex-1">{row.name}</span>
                    <span className="text-xs text-[#D4AF37] font-bold px-2 py-0.5 bg-[#D4AF37]/10 rounded-md">{row.score}%</span>
                    <span className="text-xs text-gray-400">{row.stage}</span>
                    <span className="text-sm font-black text-white ml-2">{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
            className="md:col-span-2 rounded-3xl border border-white/[0.06] bg-[#030303] p-8 flex flex-col relative overflow-hidden group hover:border-[#D4AF37]/20 transition-all duration-500"
            style={{ minHeight: 340 }}
          >
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-5">
              <MessageCircle className="w-6 h-6 text-[#D4AF37]" />
            </div>
            <h3 className="text-xl font-black text-white mb-3">WhatsApp AI</h3>
            <p className="text-sm text-gray-400 font-light leading-relaxed mb-6">Answer FAQs, qualify leads, and book appointments instantly — 24/7 on WhatsApp.</p>
            {/* Mini chat */}
            <div className="mt-auto space-y-2">
              <div className="bg-white/[0.05] rounded-xl rounded-tl-sm px-3 py-2 text-xs text-gray-300">Hi, what are your pricing plans?</div>
              <div className="bg-[#D4AF37]/10 border border-[#D4AF37]/15 rounded-xl rounded-tr-sm px-3 py-2 text-xs text-[#D4AF37] self-end ml-8">
                Great question! We have Starter from $499/mo, Growth from $1,499/mo, and Enterprise (custom). Want a personalised quote?
              </div>
            </div>
          </motion.div>

          {/* Voice */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}
            className="md:col-span-2 rounded-3xl border border-white/[0.06] bg-[#030303] p-8 flex flex-col relative overflow-hidden group hover:border-[#D4AF37]/20 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-5">
                <PhoneCall className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">AI Voice Calls</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">Human-like voice AI that makes outbound calls, handles inbound queries, and qualifies leads by phone.</p>
            </div>
          </motion.div>

          {/* Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
            className="md:col-span-2 rounded-3xl border border-white/[0.06] bg-[#030303] p-8 flex flex-col relative overflow-hidden group hover:border-[#D4AF37]/20 transition-all duration-500"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-5">
                <BarChart4 className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-black text-white mb-3">Predictive Analytics</h3>
              <p className="text-sm text-gray-400 font-light leading-relaxed">AI models forecast revenue, predict churn, and surface insights before problems occur.</p>
              {/* Mini chart */}
              <div className="mt-5 flex items-end gap-1 h-10">
                {[40,60,45,80,65,100].map((h,i)=>(
                  <motion.div key={i} initial={{height:0}} whileInView={{height:`${h}%`}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.08}}
                    className="flex-1 rounded-t-sm bg-gradient-to-t from-[#D4AF37]/60 to-[#D4AF37]/20" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Multi-agent — full width */}
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }}
            className="md:col-span-6 rounded-3xl border border-white/[0.06] bg-[#030303] p-8 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden group hover:border-[#D4AF37]/20 transition-all duration-500"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#D4AF37]/40 via-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="flex-1 relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-5">
                <Network className="w-6 h-6 text-[#D4AF37]" />
              </div>
              <h3 className="text-2xl font-black text-white mb-3">Multi-Agent Collaboration</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-2xl font-light">
                Agents work together, not in isolation. Your Sales Agent triggers the Finance Agent to generate an invoice, which triggers the Ops Agent to prepare a contract — all from a single CRM update. Zero manual hand-offs.
              </p>
            </div>
            <div className="shrink-0 relative z-10">
              <div className="w-14 h-14 rounded-full border border-[#D4AF37]/20 bg-[#D4AF37]/5 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all duration-300">
                <ArrowRight className="w-6 h-6 group-hover:-rotate-45 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
