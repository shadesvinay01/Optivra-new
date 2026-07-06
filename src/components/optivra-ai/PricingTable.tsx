"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";

const TIERS = [
  {
    name: "Starter",
    desc: "For teams automating specific workflows.",
    price: "$499",
    period: "/mo",
    cta: "Get Early Access",
    highlighted: false,
    features: ["1 Custom AI Agent", "CRM Integration", "Email Automation", "Basic Analytics", "Community Support"],
  },
  {
    name: "Growth",
    desc: "For businesses deploying a full AI workforce.",
    price: "$1,499",
    period: "/mo",
    cta: "Get Early Access",
    highlighted: true,
    features: ["5 Custom AI Agents", "Multi-Agent Collaboration", "WhatsApp & Voice AI", "Predictive Analytics", "Priority Support"],
  },
  {
    name: "Enterprise",
    desc: "Custom-trained models for large organisations.",
    price: "Custom",
    period: "",
    cta: "Contact Sales",
    highlighted: false,
    features: ["Unlimited AI Agents", "On-Premise Deployment", "Custom Model Fine-Tuning", "Dedicated Success Manager", "SLA Guarantee"],
  },
];

export default function PricingTable() {
  return (
    <section id="pricing" className="relative py-32 px-6 max-w-7xl mx-auto overflow-hidden">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[300px] bg-[#D4AF37]/8 blur-[120px] pointer-events-none" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#D4AF37]/70 mb-4">Pricing</p>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-5">
            The Cost of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">a Department.</span><br />
            <span className="text-3xl md:text-4xl font-bold text-gray-400">Priced like Software.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {TIERS.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`rounded-3xl p-8 flex flex-col relative overflow-hidden ${
                tier.highlighted
                  ? "bg-[#0a0a0a] md:-translate-y-4"
                  : "bg-[#050505] border border-white/[0.06]"
              }`}
            >
              {tier.highlighted && (
                <>
                  {/* Gold border via box shadow */}
                  <div className="absolute inset-0 rounded-3xl border border-[#D4AF37]/30 pointer-events-none" />
                  {/* Top glow bar */}
                  <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
                  {/* Shadow */}
                  <div className="absolute inset-0 rounded-3xl shadow-[0_0_80px_rgba(212,175,55,0.1)] pointer-events-none" />
                  {/* Badge */}
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#D4AF37] to-[#FFDF00] text-black text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                    ✦ Most Popular
                  </div>
                </>
              )}

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-xl font-bold text-white mb-1">{tier.name}</h3>
                <p className="text-sm text-gray-500 mb-7 leading-relaxed">{tier.desc}</p>

                <div className="flex items-end gap-1 mb-8">
                  <span className={`text-5xl font-black tracking-tight ${tier.highlighted ? "text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-300" : "text-white"}`}>{tier.price}</span>
                  {tier.period && <span className="text-gray-500 pb-1">{tier.period}</span>}
                </div>

                <ul className="flex-1 space-y-3.5 mb-8">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${tier.highlighted ? "bg-[#D4AF37]/20 text-[#D4AF37]" : "bg-white/5 text-gray-500"}`}>
                        <Check className="w-2.5 h-2.5" />
                      </div>
                      <span className="text-gray-300">{feat}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`mailto:hello@optivra.in?subject=${encodeURIComponent(`${tier.name} Plan — Early Access`)}`}
                  className={`w-full py-4 rounded-2xl font-black text-sm text-center transition-all block ${
                    tier.highlighted
                      ? "bg-gradient-to-r from-[#D4AF37] to-[#FFDF00] text-black hover:shadow-[0_0_30px_rgba(212,175,55,0.4)]"
                      : "bg-white/[0.05] border border-white/10 text-white hover:bg-white/10"
                  }`}
                >
                  {tier.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="text-center text-xs text-gray-600 mt-10 uppercase tracking-widest"
        >
          All plans include a 14-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
