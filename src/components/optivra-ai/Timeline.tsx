"use client";

import { motion } from "framer-motion";
import { Plug, Brain, Rocket, Activity, BarChart3 } from "lucide-react";

const STEPS = [
  { icon: Plug,     num: "01", title: "Connect",  desc: "Link Optivra AI to your existing CRM, ERP, email, and databases via one-click integrations." },
  { icon: Brain,    num: "02", title: "Train",     desc: "The AI automatically reads your past tickets, calls, and wikis to deeply learn your business." },
  { icon: Rocket,   num: "03", title: "Deploy",    desc: "Turn on specialised AI agents for Sales, HR, and Support with customised permissions in minutes." },
  { icon: Activity, num: "04", title: "Automate",  desc: "Agents begin executing workflows, answering queries, and booking meetings autonomously." },
  { icon: BarChart3,num: "05", title: "Monitor",   desc: "Track every action, review performance, and approve high-stakes decisions from the dashboard." },
];

export default function Timeline() {
  return (
    <section id="how-it-works" className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">

      {/* Central glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#D4AF37]/6 blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#D4AF37]/70 mb-4">Implementation</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-5">
            Live in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">48 Hours.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            From integration to full autonomy — faster than onboarding a new employee.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative max-w-5xl mx-auto">

          {/* Animated connecting line */}
          <div className="absolute top-10 left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-px bg-white/[0.04] hidden lg:block overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: "easeInOut", delay: 0.3 }}
              className="h-full bg-gradient-to-r from-[#D4AF37] via-[#FFDF00] to-[#D4AF37]"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-0">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center text-center px-4 group"
              >
                {/* Icon circle */}
                <div className="relative mb-8">
                  {/* Ring */}
                  <div className="w-20 h-20 rounded-full border border-white/[0.07] flex items-center justify-center bg-[#030303] group-hover:border-[#D4AF37]/40 transition-colors duration-300 relative z-10 shadow-[0_0_0_8px_rgba(0,0,0,0.4)]">
                    <step.icon className="w-7 h-7 text-gray-500 group-hover:text-[#D4AF37] transition-colors duration-300" />
                    {/* Number badge */}
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center text-black text-[10px] font-black shadow-[0_0_12px_rgba(212,175,55,0.5)]">
                      {i + 1}
                    </div>
                  </div>
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-full bg-[#D4AF37]/0 group-hover:bg-[#D4AF37]/10 blur-xl transition-all duration-500" />
                </div>

                <p className="text-[10px] font-bold text-[#D4AF37]/50 tracking-widest uppercase mb-1">{step.num}</p>
                <h3 className="text-lg font-black text-white mb-2 group-hover:text-[#F3E5AB] transition-colors">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed max-w-[180px] font-light">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
