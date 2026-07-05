"use client";

import { motion } from "framer-motion";
import { HeartPulse, Landmark, Factory, ShoppingBag, GraduationCap, Building2, Truck, Hotel, Scale, Briefcase } from "lucide-react";

const INDUSTRIES = [
  { icon: HeartPulse, name: "Healthcare", useCases: "Patient triaging, appointment scheduling, billing automation" },
  { icon: Landmark, name: "Finance", useCases: "Fraud detection, risk assessment, automated reporting" },
  { icon: Factory, name: "Manufacturing", useCases: "Supply chain prediction, QA monitoring, inventory tracking" },
  { icon: ShoppingBag, name: "Retail", useCases: "Personalised recommendations, inventory forecasting, support" },
  { icon: GraduationCap, name: "Education", useCases: "Student onboarding, adaptive learning, grading automation" },
  { icon: Building2, name: "Real Estate", useCases: "Lead qualification, virtual property tours, contract generation" },
  { icon: Truck, name: "Logistics", useCases: "Route optimisation, fleet tracking, document processing" },
  { icon: Hotel, name: "Hospitality", useCases: "Guest booking, concierge services, dynamic pricing" },
  { icon: Scale, name: "Legal", useCases: "Contract review, case research, document summarisation" },
  { icon: Briefcase, name: "Agencies", useCases: "Client reporting, content generation, campaign optimisation" },
];

export default function Industries() {
  return (
    <section id="industries" className="py-32 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-white tracking-tighter mb-4">
          Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">Your Industry.</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Optivra AI comes pre-trained on domain-specific knowledge for rapid deployment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {INDUSTRIES.map((ind, i) => (
          <motion.div
            key={ind.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="p-6 rounded-2xl bg-[#050505] border border-white/[0.06] hover:border-[#D4AF37]/30 transition-all flex flex-col group cursor-default"
          >
            <ind.icon className="w-7 h-7 text-gray-500 group-hover:text-[#D4AF37] mb-4 transition-colors" />
            <h3 className="text-base font-bold text-white mb-2">{ind.name}</h3>
            <p className="text-xs text-gray-500 leading-relaxed font-light">{ind.useCases}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
