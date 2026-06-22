import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "MVP Development | Optivra – Rapid AI-Powered Product Development",
  description:
    "Optivra builds venture-ready AI MVPs in 4–8 weeks. From product strategy to deployed product—we help founders and enterprises validate ideas with real users, fast.",
  keywords: [
    "MVP Development",
    "AI MVP",
    "Rapid Product Development",
    "Startup MVP",
    "Product Engineering",
    "Lean Startup",
    "Software MVP Development",
  ],
};

const deliverables = [
  "Product scoping, user story mapping, and technical architecture in Week 1",
  "Fully functional MVP with core AI features deployed to production in 4–8 weeks",
  "User onboarding flow, analytics instrumentation, and A/B testing framework",
  "Post-launch iteration plan based on real user feedback and usage data",
];

const benefits = [
  {
    title: "Speed Without Sacrifice",
    description:
      "We ship in 4–8 weeks using battle-tested tech stacks and AI-accelerated development—without cutting corners on security, scalability, or code quality.",
    icon: "🚀",
  },
  {
    title: "Investor-Ready Quality",
    description:
      "Our MVPs are built to impress—clean architecture, documented APIs, and scalable infrastructure that won't need a full rewrite after your Series A.",
    icon: "💼",
  },
  {
    title: "AI-Native by Default",
    description:
      "Every MVP we build is designed with AI at the core—LLM features, intelligent workflows, and data collection strategies that compound value over time.",
    icon: "🧠",
  },
];

const steps = [
  {
    number: "01",
    title: "Scoping & Architecture Sprint",
    description:
      "In Week 1, we co-create the product spec, define the MVP feature set, choose the tech stack, and design the system architecture—setting a clear build roadmap.",
  },
  {
    number: "02",
    title: "Agile Build & Weekly Demos",
    description:
      "We build in 1-week sprints with live demos every Friday. You see real progress weekly and can redirect priorities based on what you learn—no black-box development.",
  },
  {
    number: "03",
    title: "Launch, Measure & Iterate",
    description:
      "We deploy to production, configure analytics, and support your first user acquisition sprint—then provide a 4-week post-launch iteration cycle based on real data.",
  },
];

export default function MVPDevelopmentPage() {
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
            <span className="text-[#D4AF37]">MVP Development</span>
          </div>

          <div className="inline-flex items-center gap-3 px-5 py-2 border border-[#D4AF37]/20 bg-black/60 text-[10px] tracking-[0.4em] font-bold text-[#D4AF37] uppercase mb-8 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            Rapid Product Engineering
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6 max-w-4xl">
            MVP Development in{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #D4AF37, #F3E5AB)" }}
            >
              4–8 Weeks, Not Months
            </span>
          </h1>

          <p className="text-xl text-gray-400 font-light leading-relaxed mb-10 max-w-2xl">
            We help startups and enterprise innovation teams build and ship
            AI-powered MVPs fast—so you can validate with real users, raise
            capital, and iterate before the competition catches up.
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
        <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">What Sets Us Apart</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 max-w-2xl leading-tight">
          Why Founders Trust Optivra to Build Their MVP
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
        <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">The Build Process</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 max-w-2xl leading-tight">
          Idea to Live Product in Three Phases
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
            Your Idea Deserves to{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #D4AF37, #F3E5AB)" }}
            >
              Exist in the World
            </span>
          </h2>
          <p className="text-gray-400 text-lg font-light mb-10 max-w-xl mx-auto">
            Book a free product scoping call. We'll tell you exactly what we can
            build, in what timeframe, and what it'll take to get to launch.
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
