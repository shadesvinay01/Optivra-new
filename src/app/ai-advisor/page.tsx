import type { Metadata } from "next";
import AIBusinessAdvisor from "@/components/ui/AIBusinessAdvisor";

export const metadata: Metadata = {
  title: "AI Business Advisor | Discover Your AI Opportunities",
  description: "Take our 2-minute interactive assessment to discover exactly where AI can create the highest return on investment for your business.",
};

export default function AIAdvisorPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white flex flex-col relative overflow-hidden pt-20 pb-20">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px]" />
      </div>
      
      {/* Main Content */}
      <main className="flex-1 relative z-10 flex flex-col">
        <AIBusinessAdvisor />
      </main>
    </div>
  );
}
