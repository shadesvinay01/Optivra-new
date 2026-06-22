import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Agents Development | Optivra – Autonomous AI Agents & Multi-Agent Systems",
  description:
    "Optivra designs and deploys autonomous AI agents and multi-agent systems that perform complex tasks, make decisions, and integrate with your business workflows—24/7, without human intervention.",
  keywords: [
    "AI Agents",
    "Autonomous AI",
    "Multi-Agent Systems",
    "LLM Agents",
    "AI Workflow Automation",
    "Agentic AI",
    "AI Agent Development",
  ],
};

const deliverables = [
  "Custom LLM-powered agents with tool use, memory, and planning capabilities",
  "Multi-agent orchestration frameworks for complex, multi-step business workflows",
  "RAG-enhanced agents with access to your proprietary knowledge bases",
  "Agent evaluation suite with safety guardrails and human-in-the-loop controls",
];

const benefits = [
  {
    title: "True Autonomy",
    description:
      "Our agents don't just answer questions—they plan, execute multi-step tasks, use external tools, and adapt their approach based on intermediate results.",
    icon: "🤖",
  },
  {
    title: "Enterprise-Grade Safety",
    description:
      "Every agent ships with configurable guardrails, audit trails, and human-override mechanisms—ensuring compliance in regulated industries like finance and healthcare.",
    icon: "🔒",
  },
  {
    title: "Seamless Integration",
    description:
      "Our agents connect to your existing tools—CRMs, ERPs, databases, APIs, and communication platforms—via secure, well-tested integrations that require zero workflow disruption.",
    icon: "🔗",
  },
];

const steps = [
  {
    number: "01",
    title: "Use Case Definition & Agent Design",
    description:
      "We map the business process to an agent architecture—defining goals, tool sets, memory strategy, and escalation policies before writing a single line of code.",
  },
  {
    number: "02",
    title: "Development, Testing & Red-Teaming",
    description:
      "We build the agent, stress-test it across thousands of scenarios, and red-team it for edge cases and failure modes—ensuring reliable behaviour in production.",
  },
  {
    number: "03",
    title: "Deployment & Continuous Improvement",
    description:
      "We deploy agents into your environment with monitoring dashboards, feedback loops, and iterative prompt/model tuning to ensure continuous performance improvement.",
  },
];

export default function AIAgentsPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#020202] -z-20" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px] -z-10 pointer-events-none opacity-30"
          style={{ background: "radial-gradient(ellipse, #D4AF37 0%, transparent 70%)" }}
        />

        <div className="container mx-auto px-6 max-w-6xl">
          <div className="flex items-center gap-2 mb-10 text-xs uppercase tracking-widest text-gray-500 font-bold">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#D4AF37]">AI Agents</span>
          </div>

          <div className="inline-flex items-center gap-3 px-5 py-2 border border-[#D4AF37]/20 bg-black/60 text-[10px] tracking-[0.4em] font-bold text-[#D4AF37] uppercase mb-8 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            Autonomous AI Systems
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6 max-w-4xl">
            AI Agents That{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #D4AF37, #F3E5AB)" }}
            >
              Work While You Sleep
            </span>
          </h1>

          <p className="text-xl text-gray-400 font-light leading-relaxed mb-10 max-w-2xl">
            We build autonomous AI agents that plan, reason, and execute
            complex tasks end-to-end—replacing repetitive knowledge work and
            unlocking 24/7 operational capacity for your business.
          </p>

          <ul className="mb-12 space-y-3">
            {deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300 text-sm font-medium">
                <span className="mt-1 w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "#D4AF37" }}>
                  <svg className="w-2.5 h-2.5 text-black" fill="currentColor" viewBox="0 0 12 12">
                    <path d="M10 3L5 8.5 2 5.5l-1 1L5 10.5l6-7.5z" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://calendly.com/hello-optivra"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 font-bold tracking-widest uppercase text-xs text-black rounded-sm transition-all duration-300 hover:opacity-90 text-center"
              style={{ background: "#D4AF37" }}
            >
              Book Free AI Strategy Call
            </a>
            <Link
              href="/#contact"
              className="px-8 py-4 border font-bold tracking-widest uppercase text-xs text-white rounded-sm transition-all duration-300 hover:bg-white/10 text-center"
              style={{ borderColor: "rgba(212,175,55,0.4)" }}
            >
              Get Technical Audit
            </Link>
            <a
              href="https://calendly.com/hello-optivra"
              className="px-8 py-4 bg-white/5 border border-white/10 font-bold tracking-widest uppercase text-xs text-white rounded-sm hover:bg-white/10 transition-all duration-300 text-center"
            >
              Schedule Discovery Session
            </a>
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      {/* Benefits */}
      <section className="py-24 container mx-auto px-6 max-w-6xl">
        <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">Agent Capabilities</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 max-w-2xl leading-tight">
          What Makes Our AI Agents Different
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="border border-[#D4AF37]/30 bg-[#050505] p-8 rounded-sm hover:border-[#D4AF37]/60 transition-colors duration-300 group"
            >
              <div className="text-4xl mb-6">{benefit.icon}</div>
              <h3 className="text-white font-bold text-xl mb-4 group-hover:text-[#D4AF37] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-400 font-light leading-relaxed text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Process */}
      <section className="py-24 container mx-auto px-6 max-w-6xl">
        <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">Build Process</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 max-w-2xl leading-tight">
          How We Build Reliable AI Agents
        </h2>
        <div className="space-y-0">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-8 group">
              <div className="flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center text-black font-black text-sm flex-shrink-0 shadow-lg"
                  style={{ background: "#D4AF37" }}
                >
                  {step.number}
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 mt-2 mb-0" style={{ background: "rgba(212,175,55,0.2)" }} />
                )}
              </div>
              <div className="pb-14">
                <h3 className="text-white font-bold text-xl mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 font-light leading-relaxed text-sm max-w-xl">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Deploy Your First AI Agent{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #D4AF37, #F3E5AB)" }}
            >
              in 30 Days
            </span>
          </h2>
          <p className="text-gray-400 text-lg font-light mb-10 max-w-xl mx-auto">
            Book a free strategy session and we'll design your first agentic
            workflow—identifying the highest-ROI use case in your business.
          </p>
          <a
            href="https://calendly.com/hello-optivra"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 font-bold tracking-widest uppercase text-xs text-black rounded-sm transition-all duration-300 hover:opacity-90"
            style={{ background: "#D4AF37" }}
          >
            Book Free AI Strategy Call →
          </a>
        </div>
      </section>
    </div>
  );
}
