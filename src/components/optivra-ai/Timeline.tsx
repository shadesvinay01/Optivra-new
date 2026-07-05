"use client";

import { motion } from "framer-motion";
import { Plug, Brain, Rocket, Activity, BarChart3 } from "lucide-react";

const STEPS = [
  { icon: Plug, title: "Connect", desc: "Link Optivra AI to your existing CRM, ERP, email, and databases via one-click integrations." },
  { icon: Brain, title: "Train", desc: "The AI automatically reads your past tickets, sales calls, and company wikis to learn your business." },
  { icon: Rocket, title: "Deploy", desc: "Turn on specialized AI agents for Sales, HR, and Support with customized permissions." },
  { icon: Activity, title: "Automate", desc: "Agents begin executing workflows, answering queries, and booking meetings autonomously." },
  { icon: BarChart3, title: "Monitor", desc: "Track every action, review performance, and approve high-stakes decisions from the dashboard." },
];

export default function Timeline() {
  return (
    <section id="how-it-works" className="py-32 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
          How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Works.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          From integration to full autonomy in minutes, not months.
        </p>
      </div>

      <div className="relative max-w-5xl mx-auto">
        {/* Connecting Line */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-white/5 -translate-y-1/2 hidden lg:block rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
          {STEPS.map((step, i) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-center mb-6 relative shadow-xl shadow-black group-hover:scale-110 group-hover:border-indigo-500/50 transition-all z-10">
                <div className="absolute inset-0 bg-indigo-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <step.icon className="w-6 h-6 text-gray-400 group-hover:text-indigo-400 transition-colors relative z-10" />
                
                {/* Number Badge */}
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[10px] font-black shadow-[0_0_10px_rgba(99,102,241,0.5)]">
                  {i + 1}
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed max-w-[200px]">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
