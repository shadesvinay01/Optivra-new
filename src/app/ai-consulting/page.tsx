import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Consulting Services | Optivra – Elite AI Strategy & Advisory",
  description:
    "Optivra's AI consulting services help enterprises design, validate, and execute AI strategies that drive measurable ROI. Expert advisory from concept to deployment.",
  keywords: [
    "AI Consulting",
    "Enterprise AI Strategy",
    "AI Advisory",
    "AI Roadmap",
    "Artificial Intelligence Consulting",
    "AI Implementation",
    "AI Transformation",
  ],
};

const deliverables = [
  "Executive AI readiness assessment & gap analysis",
  "Custom AI strategy roadmap aligned to your business objectives",
  "Vendor & technology stack evaluation and selection",
  "Risk management framework for responsible AI adoption",
];

const benefits = [
  {
    title: "Strategic Clarity",
    description:
      "Cut through the AI hype with a data-driven roadmap built specifically for your industry, team size, and growth targets. No generic playbooks.",
    icon: "🧭",
  },
  {
    title: "Risk-Mitigated Execution",
    description:
      "We embed compliance, ethics, and security guardrails from day one—so your AI initiatives scale without regulatory exposure or technical debt.",
    icon: "🛡️",
  },
  {
    title: "Measurable ROI",
    description:
      "Every recommendation is tied to a business KPI. We define success metrics upfront and track progress to ensure your AI investment delivers returns.",
    icon: "📈",
  },
];

const steps = [
  {
    number: "01",
    title: "Discovery & Audit",
    description:
      "We conduct a deep-dive audit of your existing data infrastructure, processes, and team capabilities to identify the highest-value AI opportunities.",
  },
  {
    number: "02",
    title: "Strategy & Roadmap",
    description:
      "We deliver a prioritised AI roadmap with quick wins and long-term initiatives, complete with ROI projections, resource requirements, and risk profiles.",
  },
  {
    number: "03",
    title: "Advisory & Implementation Support",
    description:
      "Our senior consultants stay engaged through execution—reviewing vendor choices, guiding build-vs-buy decisions, and ensuring on-time delivery.",
  },
];

export default function AIConsultingPage() {
  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 bg-[#020202] -z-20" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full blur-[120px] -z-10 pointer-events-none opacity-30"
          style={{ background: "radial-gradient(ellipse, #D4AF37 0%, transparent 70%)" }}
        />

        <div className="container mx-auto px-6 max-w-6xl">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 mb-10 text-xs uppercase tracking-widest text-gray-500 font-bold">
            <Link href="/" className="hover:text-[#D4AF37] transition-colors">Home</Link>
            <span>/</span>
            <span className="text-[#D4AF37]">AI Consulting</span>
          </div>

          <div className="inline-flex items-center gap-3 px-5 py-2 border border-[#D4AF37]/20 bg-black/60 text-[10px] tracking-[0.4em] font-bold text-[#D4AF37] uppercase mb-8 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            Expert AI Advisory
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6 max-w-4xl">
            AI Consulting That{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #D4AF37, #F3E5AB)" }}
            >
              Drives Real Results
            </span>
          </h1>

          <p className="text-xl text-gray-400 font-light leading-relaxed mb-10 max-w-2xl">
            We help forward-thinking enterprises build AI strategies that are
            actionable, measurable, and aligned to boardroom-level outcomes—not
            just technology experiments.
          </p>

          {/* Deliverables */}
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

          {/* CTAs */}
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

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

      {/* Benefits Section */}
      <section className="py-24 container mx-auto px-6 max-w-6xl">
        <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">Why Optivra</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 max-w-2xl leading-tight">
          Three Reasons Enterprises Choose Our AI Advisory
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

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Process Timeline */}
      <section className="py-24 container mx-auto px-6 max-w-6xl">
        <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">Our Process</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 max-w-2xl leading-tight">
          How We Deliver AI Consulting Engagements
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

      {/* Final CTA Banner */}
      <section className="py-20 border-t border-white/10">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Ready to Build Your{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #D4AF37, #F3E5AB)" }}
            >
              AI Advantage?
            </span>
          </h2>
          <p className="text-gray-400 text-lg font-light mb-10 max-w-xl mx-auto">
            Book a complimentary 30-minute AI strategy session with one of our
            senior consultants. No commitment required.
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
