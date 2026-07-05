"use client";

import { motion } from "framer-motion";
import { Database, MessageCircle, PhoneCall, BarChart4, Network, ArrowRight } from "lucide-react";

export default function BentoFeatures() {
  return (
    <section id="features" className="py-32 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
          Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">Scale.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Optivra AI replaces disjointed software stacks with a single, unified intelligent operating system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[280px]">
        
        {/* Large Feature 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="md:col-span-2 lg:col-span-2 row-span-2 rounded-2xl bg-[#050505] border border-white/[0.06] p-8 flex flex-col relative overflow-hidden group hover:border-[#D4AF37]/30 transition-all"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 flex flex-col h-full">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-6 border border-[#D4AF37]/20">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">AI CRM & Sales Pipeline</h3>
            <p className="text-gray-400 leading-relaxed font-light max-w-md text-sm">
              A self-updating CRM. Our AI tracks every conversation, logs every meeting, updates lead scores autonomously, and tells your sales team exactly who to call next.
            </p>
            <div className="mt-6 flex-1 w-full bg-black/60 border border-white/[0.08] rounded-xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 flex items-end p-4">
                <span className="text-xs font-bold text-[#D4AF37] flex items-center gap-2">
                  Live Syncing
                  <motion.span animate={{ opacity: [1,0,1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                </span>
              </div>
              <div className="p-4 flex flex-col gap-2">
                {[1,2,3,4].map(i => (
                  <div key={i} className="h-10 w-full bg-white/[0.04] rounded-lg border border-white/[0.05] flex items-center px-4 justify-between">
                    <div className="w-28 h-1.5 bg-white/10 rounded-full" />
                    <div className="w-12 h-1.5 bg-[#D4AF37]/30 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="md:col-span-1 lg:col-span-2 rounded-2xl bg-[#050505] border border-white/[0.06] p-8 flex flex-col relative overflow-hidden group hover:border-[#D4AF37]/30 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-4 border border-[#D4AF37]/20">
            <MessageCircle className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">WhatsApp AI Assistant</h3>
          <p className="text-sm text-gray-400 leading-relaxed font-light">Deploy AI agents on WhatsApp to answer FAQs, qualify leads, and schedule bookings instantly—24/7.</p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="md:col-span-1 rounded-2xl bg-[#050505] border border-white/[0.06] p-8 flex flex-col relative overflow-hidden group hover:border-[#D4AF37]/30 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-4 border border-[#D4AF37]/20">
            <PhoneCall className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">AI Voice Calls</h3>
          <p className="text-xs text-gray-400 leading-relaxed font-light">Human-like voice AI that makes and receives business phone calls.</p>
        </motion.div>

        {/* Feature 4 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="md:col-span-1 rounded-2xl bg-[#050505] border border-white/[0.06] p-8 flex flex-col relative overflow-hidden group hover:border-[#D4AF37]/30 transition-all"
        >
          <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-4 border border-[#D4AF37]/20">
            <BarChart4 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Predictive Analytics</h3>
          <p className="text-xs text-gray-400 leading-relaxed font-light">AI models that forecast revenue and predict churn before it happens.</p>
        </motion.div>

        {/* Full Width Feature */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="md:col-span-3 lg:col-span-4 rounded-2xl bg-[#050505] border border-white/[0.06] p-8 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-[#D4AF37]/30 transition-all"
        >
          <div className="flex-1">
            <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 text-[#D4AF37] flex items-center justify-center mb-4 border border-[#D4AF37]/20">
              <Network className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Multi-Agent Collaboration</h3>
            <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
              Our agents don't work in silos. Your AI Sales Agent talks to your AI Finance Agent to instantly generate a custom proposal and invoice—triggered from a single CRM update.
            </p>
          </div>
          <div className="shrink-0">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
              <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
