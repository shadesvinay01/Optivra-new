"use client";

import { motion } from "framer-motion";

const INTEGRATIONS = [
  "Salesforce", "HubSpot", "Slack", "Microsoft Teams", 
  "Google Workspace", "Notion", "Jira", "Zendesk", 
  "Stripe", "QuickBooks", "Shopify", "Zapier", 
  "Zoho", "Intercom", "Airtable", "Asana"
];

export default function IntegrationMarquee() {
  return (
    <section className="py-20 border-y border-white/5 bg-[#03040a] overflow-hidden">
      <div className="text-center mb-10">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-[0.2em]">Integrates natively with your existing stack</p>
      </div>
      
      <div className="relative flex overflow-x-hidden">
        {/* Gradient Masks */}
        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#03040a] to-transparent z-10" />
        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#03040a] to-transparent z-10" />
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
          className="flex gap-6 whitespace-nowrap min-w-max px-6"
        >
          {/* Double array for infinite scroll effect */}
          {[...INTEGRATIONS, ...INTEGRATIONS].map((item, i) => (
            <div 
              key={i} 
              className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-400 font-medium text-sm flex items-center justify-center min-w-[140px]"
            >
              {item}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
