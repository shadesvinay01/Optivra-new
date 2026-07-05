"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const FAQS = [
  { q: "How long does it take to implement Optivra AI?", a: "Unlike traditional enterprise software that takes months to deploy, Optivra AI can be integrated into your existing tech stack (CRM, ERP, Email) within 48 hours." },
  { q: "Is my business data used to train your models?", a: "Absolutely not. We utilize a zero-trust architecture. Your data remains entirely yours, is encrypted at rest and in transit, and is never used to train our base foundation models." },
  { q: "Do the AI Agents work with our existing software?", a: "Yes. Optivra AI integrates natively with over 150+ enterprise tools including Salesforce, HubSpot, Slack, Google Workspace, Microsoft Teams, and custom internal databases via our API." },
  { q: "Can the AI take actions without my approval?", a: "You have complete control over permissions. You can set agents to 'Auto-Pilot' for routine tasks (like data entry) or 'Copilot' for high-stakes actions (like sending a quote), which requires human approval." },
  { q: "What happens if the AI encounters a problem it can't solve?", a: "Optivra AI features intelligent routing. If an agent encounters an edge case or a low-confidence scenario, it instantly pauses the workflow and flags it to the designated human supervisor for intervention." },
  { q: "Do you offer on-premise deployment?", a: "Yes, for our Enterprise tier clients, we offer full on-premise deployment or dedicated VPC hosting to comply with strict regulatory requirements (e.g., HIPAA, SOC2)." }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-32 px-6 max-w-4xl mx-auto z-10 relative">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-black text-white tracking-tighter mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-400">Everything you need to know about deploying your AI workforce.</p>
      </div>

      <div className="flex flex-col gap-3">
        {FAQS.map((faq, i) => (
          <div key={i} className="border border-white/10 rounded-2xl bg-white/[0.02] overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
            >
              <span className="font-bold text-white pr-8">{faq.q}</span>
              <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 text-gray-400">
                {openIndex === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
              </div>
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-6 text-gray-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
