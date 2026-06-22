import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cloud Engineering Services | Optivra – AI-Ready Cloud Architecture & DevOps",
  description:
    "Optivra designs and builds cloud-native infrastructure optimised for AI workloads. From multi-cloud architecture to Kubernetes orchestration and cost-optimised MLOps pipelines.",
  keywords: [
    "Cloud Engineering",
    "Cloud Architecture",
    "AI Cloud Infrastructure",
    "AWS Azure GCP",
    "Kubernetes",
    "DevOps",
    "MLOps Infrastructure",
    "Cloud Migration",
  ],
};

const deliverables = [
  "Multi-cloud architecture design (AWS, Azure, GCP) optimised for AI/ML workloads",
  "Kubernetes cluster setup, IaC (Terraform/Pulumi), and CI/CD pipeline engineering",
  "GPU-optimised compute environments for model training and high-throughput inference",
  "Cloud cost optimisation audit with actionable savings roadmap (avg. 35% reduction)",
];

const benefits = [
  {
    title: "AI-First Infrastructure",
    description:
      "We design cloud environments purpose-built for AI workloads—GPU scheduling, distributed training, model serving, and feature stores—not generic lift-and-shift migrations.",
    icon: "☁️",
  },
  {
    title: "Enterprise Security & Compliance",
    description:
      "Every architecture we design is built with zero-trust networking, secrets management, audit logging, and compliance with SOC 2, HIPAA, GDPR, and ISO 27001 requirements.",
    icon: "🔐",
  },
  {
    title: "Built to Scale Globally",
    description:
      "From day one, our architectures support multi-region active-active deployments, auto-scaling, and disaster recovery—so growth never breaks your infrastructure.",
    icon: "🌐",
  },
];

const steps = [
  {
    number: "01",
    title: "Cloud Assessment & Architecture Design",
    description:
      "We audit your existing cloud footprint, identify inefficiencies and security gaps, then design a target architecture aligned to your workload requirements, budget, and growth trajectory.",
  },
  {
    number: "02",
    title: "Infrastructure Build & Migration",
    description:
      "We provision all infrastructure using code (Terraform/Pulumi), build CI/CD pipelines, and execute migrations with zero-downtime strategies and comprehensive rollback plans.",
  },
  {
    number: "03",
    title: "Observability, Security & Ongoing Optimisation",
    description:
      "We configure full-stack observability (metrics, logs, traces), security monitoring, and cost dashboards—then provide monthly optimisation reviews to keep your cloud lean.",
  },
];

export default function CloudEngineeringPage() {
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
            <span className="text-[#D4AF37]">Cloud Engineering</span>
          </div>

          <div className="inline-flex items-center gap-3 px-5 py-2 border border-[#D4AF37]/20 bg-black/60 text-[10px] tracking-[0.4em] font-bold text-[#D4AF37] uppercase mb-8 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
            AI-Ready Cloud Infrastructure
          </div>

          <h1 className="text-5xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6 max-w-4xl">
            Cloud Infrastructure Built for{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #D4AF37, #F3E5AB)" }}
            >
              AI at Scale
            </span>
          </h1>

          <p className="text-xl text-gray-400 font-light leading-relaxed mb-10 max-w-2xl">
            We design, build, and operate cloud architectures that are
            engineered specifically for AI and ML workloads—scalable, secure,
            cost-optimised, and ready for the demands of enterprise AI.
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
        <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">Infrastructure Excellence</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 max-w-2xl leading-tight">
          Why Our Cloud Architectures Last
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
        <p className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-4">Cloud Migration Process</p>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 max-w-2xl leading-tight">
          How We Build Your Cloud Foundation
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
            Build a Cloud Foundation That{" "}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: "linear-gradient(90deg, #D4AF37, #F3E5AB)" }}
            >
              Never Holds You Back
            </span>
          </h2>
          <p className="text-gray-400 text-lg font-light mb-10 max-w-xl mx-auto">
            Book a free cloud architecture review. We'll assess your current
            infrastructure and identify security gaps, cost inefficiencies, and
            scalability bottlenecks.
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
