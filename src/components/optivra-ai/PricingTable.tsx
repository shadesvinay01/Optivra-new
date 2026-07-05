"use client";

import { Check } from "lucide-react";

const TIERS = [
  {
    name: "Starter",
    desc: "For small teams looking to automate specific workflows.",
    price: "$499",
    period: "/mo",
    cta: "Get Early Access",
    highlighted: false,
    features: ["1 Custom AI Agent", "CRM Integration", "Email Automation", "Basic Analytics", "Community Support"],
  },
  {
    name: "Growth",
    desc: "For scaling businesses ready to deploy a full AI workforce.",
    price: "$1,499",
    period: "/mo",
    cta: "Get Early Access",
    highlighted: true,
    features: ["5 Custom AI Agents", "Multi-Agent Collaboration", "WhatsApp & Voice AI", "Predictive Analytics", "Priority Support"],
  },
  {
    name: "Enterprise",
    desc: "Custom-trained models and dedicated infrastructure for large orgs.",
    price: "Custom",
    period: "",
    cta: "Contact Sales",
    highlighted: false,
    features: ["Unlimited AI Agents", "On-Premise Deployment", "Custom Model Fine-Tuning", "Dedicated Success Manager", "SLA Guarantee"],
  },
];

export default function PricingTable() {
  return (
    <section id="pricing" className="py-32 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-4">
          Transparent, <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">Scaleable Pricing.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Pay for the value of an entire department at a fraction of the cost.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {TIERS.map((tier) => (
          <div
            key={tier.name}
            className={`rounded-2xl p-8 flex flex-col relative transition-all ${
              tier.highlighted
                ? "bg-[#050505] border-2 border-[#D4AF37]/40 shadow-[0_0_50px_rgba(212,175,55,0.1)] md:-translate-y-4"
                : "bg-[#050505] border border-white/[0.06]"
            }`}
          >
            {tier.highlighted && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#D4AF37] text-black text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
            <p className="text-sm text-gray-500 mb-6 h-10">{tier.desc}</p>
            <div className="flex items-baseline gap-1 mb-8">
              <span className="text-5xl font-black text-white">{tier.price}</span>
              <span className="text-gray-500 font-medium">{tier.period}</span>
            </div>
            <ul className="flex-1 space-y-4 mb-8">
              {tier.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <Check className={`w-4 h-4 shrink-0 mt-0.5 ${tier.highlighted ? "text-[#D4AF37]" : "text-gray-500"}`} />
                  {feat}
                </li>
              ))}
            </ul>
            <a
              href={`mailto:hello@optivra.in?subject=${encodeURIComponent(`${tier.name} Plan - Early Access Request`)}`}
              className={`w-full py-4 rounded-xl font-bold text-center transition-all block ${
                tier.highlighted
                  ? "bg-[#D4AF37] hover:bg-[#F3E5AB] text-black shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                  : "bg-white/[0.06] hover:bg-white/10 text-white border border-white/10"
              }`}
            >
              {tier.cta}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
