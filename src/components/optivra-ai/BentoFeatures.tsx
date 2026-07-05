"use client";

import { motion } from "framer-motion";
import { Database, MessageCircle, PhoneCall, BrainCircuit, BarChart4, Network, ArrowRight } from "lucide-react";

export default function BentoFeatures() {
  return (
    <section id="features" className="py-32 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
          Everything You Need to <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Scale.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Optivra AI replaces disjointed software stacks with a single, unified intelligent operating system.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[300px]">
        
        {/* Large Feature 1 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="md:col-span-2 lg:col-span-2 row-span-2 rounded-[2rem] bg-white/[0.02] border border-white/5 p-8 relative overflow-hidden group hover:border-indigo-500/30 transition-all"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative z-10 h-full flex flex-col">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-6">
              <Database className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">AI CRM & Sales Pipeline</h3>
            <p className="text-gray-400 leading-relaxed font-light max-w-md">
              A self-updating CRM. Our AI tracks every conversation, logs every meeting, updates lead scores autonomously, and tells your sales team exactly who to call next.
            </p>
            
            {/* Visual */}
            <div className="mt-8 flex-1 w-full bg-black/50 border border-white/10 rounded-xl overflow-hidden relative shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10 flex items-end p-4">
                <span className="text-xs font-bold text-indigo-400 flex items-center gap-2">Live Syncing <motion.span animate={{ opacity: [1,0,1] }} transition={{ repeat: Infinity, duration: 1 }} className="w-2 h-2 rounded-full bg-indigo-500" /></span>
              </div>
              <div className="p-4 flex flex-col gap-2">
                {[1,2,3].map(i => (
                  <div key={i} className="h-12 w-full bg-white/5 rounded-lg border border-white/5 flex items-center px-4 justify-between">
                    <div className="w-24 h-2 bg-white/20 rounded-full" />
                    <div className="w-12 h-2 bg-green-500/50 rounded-full" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
          className="md:col-span-1 lg:col-span-2 row-span-1 rounded-[2rem] bg-gradient-to-br from-purple-500/5 to-pink-500/5 border border-white/5 p-8 relative overflow-hidden group hover:border-purple-500/30 transition-all"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <MessageCircle className="w-6 h-6" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">WhatsApp AI Assistant</h3>
          <p className="text-sm text-gray-400 leading-relaxed font-light">Deploy AI agents on WhatsApp to answer FAQs, qualify leads, and schedule bookings instantly.</p>
        </motion.div>

        {/* Feature 3 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="md:col-span-1 lg:col-span-1 row-span-1 rounded-[2rem] bg-white/[0.02] border border-white/5 p-8 relative overflow-hidden group hover:border-emerald-500/30 transition-all"
        >
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
            <PhoneCall className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">AI Voice Calls</h3>
          <p className="text-xs text-gray-400 leading-relaxed font-light">Human-like voice AI that makes and receives phone calls.</p>
        </motion.div>

        {/* Feature 4 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="md:col-span-2 lg:col-span-1 row-span-1 rounded-[2rem] bg-white/[0.02] border border-white/5 p-8 relative overflow-hidden group hover:border-blue-500/30 transition-all"
        >
          <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
            <BarChart4 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Predictive Analytics</h3>
          <p className="text-xs text-gray-400 leading-relaxed font-light">AI models that forecast revenue and predict churn.</p>
        </motion.div>

        {/* Long feature row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="md:col-span-3 lg:col-span-4 row-span-1 rounded-[2rem] bg-[#0c0c16] border border-white/5 p-8 flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-indigo-500/30 transition-all"
        >
          <div className="flex-1">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-4">
              <Network className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Multi-Agent Collaboration</h3>
            <p className="text-gray-400 text-sm max-w-xl leading-relaxed">
              Our agents don't work in silos. Your AI Sales Agent can talk to your AI Finance Agent to instantly generate and send a custom proposal and invoice based on a CRM update.
            </p>
          </div>
          <div className="shrink-0">
            <button className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-indigo-600 transition-colors">
              <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform" />
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
