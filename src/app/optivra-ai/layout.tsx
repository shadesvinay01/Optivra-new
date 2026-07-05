import type { Metadata } from "next";
import AINavbar from "@/components/optivra-ai/AINavbar";
import AIFooter from "@/components/optivra-ai/AIFooter";

export const metadata: Metadata = {
  title: "Optivra AI | The AI Operating System for Modern Businesses",
  description: "Meet your AI Workforce. Optivra AI gives businesses intelligent AI employees capable of automating sales, support, and operations from one unified platform.",
};

export default function OptivraAILayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-200 font-sans selection:bg-indigo-500/30">
      <AINavbar />
      <main className="flex flex-col min-h-screen">
        {children}
      </main>
      <AIFooter />
    </div>
  );
}
