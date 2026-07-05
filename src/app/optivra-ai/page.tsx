"use client";

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
    <>
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
      
      {/* Final CTA */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center relative z-10">
        <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full -z-10" />
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">
          Ready to hire your <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">AI Workforce?</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Join the waitlist today to get early access to Optivra AI before the public launch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#pricing" className="px-10 py-5 rounded-2xl bg-white text-black font-black text-lg hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all">
            Get Early Access
          </a>
        </div>
      </section>
    </>
  );
}
