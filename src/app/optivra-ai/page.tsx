import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Optivra AI | The AI Operating System for Modern Businesses",
  description:
    "Meet your AI Workforce. Optivra AI gives businesses intelligent AI employees capable of automating sales, support, and operations from one unified platform.",
};

import HeroSection from "@/components/optivra-ai/HeroSection";
import InteractiveDemo from "@/components/optivra-ai/InteractiveDemo";
import IntegrationMarquee from "@/components/optivra-ai/IntegrationMarquee";
import AgentGrid from "@/components/optivra-ai/AgentGrid";
import BentoFeatures from "@/components/optivra-ai/BentoFeatures";
import Timeline from "@/components/optivra-ai/Timeline";
import Industries from "@/components/optivra-ai/Industries";
import OpportunityAssessment from "@/components/optivra-ai/OpportunityAssessment";
import EnterpriseSecurity from "@/components/optivra-ai/EnterpriseSecurity";
import PricingTable from "@/components/optivra-ai/PricingTable";
import FAQSection from "@/components/optivra-ai/FAQSection";

export default function OptivraAIPage() {
  return (
    <div className="relative bg-[#000000] overflow-x-hidden">

      {/* ── Global subtle dot pattern ── */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(212,175,55,0.15) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative z-10">
        <HeroSection />
        <InteractiveDemo />
        <IntegrationMarquee />
        <AgentGrid />
        <BentoFeatures />
        <Timeline />
        <Industries />
        <OpportunityAssessment />
        <EnterpriseSecurity />
        <PricingTable />
        <FAQSection />

        {/* ── Final CTA ── */}
        <section className="relative py-40 px-6 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(212,175,55,0.07) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(212,175,55,0.07) 1px, transparent 1px)
                `,
                backgroundSize: "60px 60px",
              }}
            />
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(212,175,55,0.12) 0%, transparent 70%)" }}
            />
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <p className="text-[11px] font-bold tracking-[0.3em] uppercase text-[#D4AF37]/70 mb-6">
              Start Today
            </p>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-6 leading-[1.0]">
              Your AI Workforce<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFDF00] to-[#F3E5AB]">
                is Ready to Deploy.
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-12 max-w-xl mx-auto font-light leading-relaxed">
              Join the waitlist and be among the first businesses to deploy an AI workforce. Early access spots are limited.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:hello@optivra.in?subject=Early%20Access%20%E2%80%94%20Optivra%20AI"
                className="relative group px-10 py-5 rounded-2xl bg-gradient-to-r from-[#D4AF37] to-[#FFDF00] text-black font-black text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/15 transition-colors" />
                <span className="relative">Get Early Access ✦</span>
              </a>
              <a
                href="mailto:hello@optivra.in?subject=Strategy%20Call%20%E2%80%94%20Optivra%20AI"
                className="px-10 py-5 rounded-2xl border border-white/10 bg-white/[0.03] text-white font-bold text-lg hover:bg-white/[0.07] hover:border-white/20 transition-all backdrop-blur-xl"
              >
                Schedule a Demo
              </a>
            </div>
            <p className="text-xs text-gray-600 mt-8 uppercase tracking-widest">
              14-day free trial · No credit card required · Cancel anytime
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
