"use client";

import { motion } from "framer-motion";

const INTEGRATIONS = [
  "Salesforce", "HubSpot", "Slack", "Microsoft Teams",
  "Google Workspace", "Notion", "Jira", "Zendesk",
  "Stripe", "QuickBooks", "Shopify", "Zapier",
  "Zoho", "Intercom", "Airtable", "Asana",
];

export default function IntegrationMarquee() {
  return (
    <section className="py-20 border-y border-white/[0.06] bg-[#030303] overflow-hidden">
      <div className="text-center mb-10">
        <p className="text-xs font-bold text-gray-600 uppercase tracking-[0.2em]">Integrates natively with your existing stack</p>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10" />
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex gap-4 whitespace-nowrap min-w-max px-4"
        >
          {[...INTEGRATIONS, ...INTEGRATIONS].map((item, i) => (
            <div
              key={i}
              className="px-5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-gray-500 font-medium text-sm flex items-center justify-center min-w-[130px] hover:border-[#D4AF37]/20 hover:text-gray-300 transition-colors"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
