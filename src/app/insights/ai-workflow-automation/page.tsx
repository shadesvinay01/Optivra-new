import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  Calendar,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
  Zap,
  Briefcase,
  Users,
  CreditCard,
  Settings,
  BarChart,
} from "lucide-react";

/* ─────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://optivra.in"),
  title: "AI Workflow Automation: Complete Business Guide (2026) | Optivra",
  description:
    "Learn how AI workflow automation helps businesses streamline operations, reduce manual work, improve productivity, and accelerate digital transformation.",
  keywords: [
    "AI Workflow Automation",
    "Workflow automation",
    "AI workflow automation software",
    "Business workflow automation",
    "AI process automation",
    "Intelligent workflow automation",
    "Workflow automation solutions",
    "AI business automation",
    "Process automation",
    "AI consulting services",
    "Digital workflow automation",
  ],
  authors: [{ name: "Optivra Team", url: "https://optivra.in" }],
  alternates: {
    canonical: "https://optivra.in/insights/ai-workflow-automation",
  },
  openGraph: {
    title: "AI Workflow Automation: Benefits, Examples & Implementation Guide (2026)",
    description:
      "Learn how AI workflow automation helps businesses streamline operations, reduce manual work, improve productivity, and accelerate digital transformation.",
    url: "https://optivra.in/insights/ai-workflow-automation",
    siteName: "Optivra",
    images: [
      {
        url: "/ai-workflow-automation-hero.png",
        width: 1200,
        height: 630,
        alt: "AI Workflow Automation: Complete Business Guide",
      },
    ],
    type: "article",
    publishedTime: "2026-07-03T16:00:00Z",
    authors: ["https://optivra.in"],
    tags: [
      "AI Workflow Automation",
      "Process Automation",
      "Business Automation",
      "AI Strategy",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Workflow Automation: Complete Business Guide (2026)",
    description:
      "Learn how AI workflow automation streamlines operations, reduces manual work, and accelerates digital transformation.",
    images: ["/ai-workflow-automation-hero.png"],
    site: "@optivra",
  },
};

/* ─────────────────────────────────────────────
   STRUCTURED DATA (JSON-LD)
───────────────────────────────────────────── */
const articleJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "AI Workflow Automation: The Complete Guide to Streamlining Business Operations in 2026",
  description:
    "Learn how AI workflow automation helps businesses streamline operations, reduce manual work, improve productivity, and accelerate digital transformation.",
  image: "https://optivra.in/ai-workflow-automation-hero.png",
  datePublished: "2026-07-03T16:00:00Z",
  dateModified: "2026-07-03T16:00:00Z",
  author: {
    "@type": "Organization",
    name: "Optivra",
    url: "https://optivra.in",
  },
  publisher: {
    "@type": "Organization",
    name: "Optivra",
    logo: {
      "@type": "ImageObject",
      url: "https://optivra.in/favicon.ico",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://optivra.in/insights/ai-workflow-automation",
  },
  articleSection: "Automation",
  keywords:
    "AI Workflow Automation, intelligent workflow automation, process automation, business operations 2026",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI workflow automation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI workflow automation combines artificial intelligence with business workflows to automate repetitive tasks, improve decision-making, and streamline operations.",
      },
    },
    {
      "@type": "Question",
      name: "Is AI workflow automation suitable for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many AI-powered workflow tools are scalable and can help startups and SMEs improve efficiency without large infrastructure investments.",
      },
    },
    {
      "@type": "Question",
      name: "Which departments benefit the most?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sales, customer support, HR, finance, operations, and marketing are among the departments that often realize significant productivity gains.",
      },
    },
    {
      "@type": "Question",
      name: "How do I get started?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Begin by identifying repetitive, high-volume tasks with clear business value, then automate one workflow at a time while measuring results.",
      },
    },
  ],
};

/* ─────────────────────────────────────────────
   COMPARISON DATA
───────────────────────────────────────────── */
const comparisonRows = [
  { feature: "Rule-Based Tasks", traditional: "Yes", ai: "Yes" },
  { feature: "Learns from Data", traditional: "No", ai: "Yes" },
  { feature: "Decision Support", traditional: "Limited", ai: "Advanced" },
  { feature: "Handles Unstructured Data", traditional: "No", ai: "Yes" },
  { feature: "Continuous Improvement", traditional: "No", ai: "Yes" },
];

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function AIWorkflowAutomationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="min-h-screen bg-black text-white">
        {/* ── Breadcrumb ── */}
        <div className="border-b border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-4 flex items-center gap-2 text-[11px] text-gray-600 uppercase tracking-widest font-bold">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/insights" className="hover:text-primary transition-colors">Insights</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-gray-500">AI Workflow Automation</span>
          </div>
        </div>

        {/* ── Hero Header ── */}
        <header className="border-b border-white/10">
          <div className="max-w-5xl mx-auto px-6 pt-16 pb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1">
                Automation
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-600 bg-white/5 border border-white/10 px-3 py-1">
                Complete Guide
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans leading-tight text-white mb-6">
              AI Workflow Automation:{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #D4AF37 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                The Complete Guide
              </span>{" "}
              (2026)
            </h1>

            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl mb-8">
              Learn how AI workflow automation helps businesses streamline operations, reduce manual
              work, improve productivity, and accelerate digital transformation.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-[11px] text-gray-600 uppercase tracking-widest font-bold">
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" /> July 3, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" /> 10 min read
              </span>
              <span>By Optivra Team</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="max-w-5xl mx-auto px-6 pb-0">
            <div className="relative w-full aspect-[21/9] overflow-hidden border border-white/10">
              <Image
                src="/ai-workflow-automation-hero.png"
                alt="AI Workflow Automation"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          </div>
        </header>

        {/* ── Body ── */}
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16">
            {/* ── Main Article ── */}
            <article>
              {/* Intro Box */}
              <div className="border border-primary/30 bg-primary/5 p-6 mb-14 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-3">Quick Overview</p>
                <p className="text-white font-semibold text-lg leading-relaxed">
                  Every business follows workflows—whether it&apos;s processing customer inquiries, approving
                  invoices, onboarding employees, or managing sales opportunities. Many of these processes
                  still rely on manual effort, which can slow operations and increase the risk of errors.{" "}
                  <strong className="text-primary">AI workflow automation</strong> combines artificial intelligence
                  with business process automation to execute repetitive tasks, analyze information, make
                  decisions based on predefined rules, and coordinate activities across multiple systems.
                </p>
              </div>

              {/* Section 1 */}
              <section id="why-businesses-need-it" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  Why Businesses Need AI Workflow Automation
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <p className="text-gray-400 leading-relaxed mb-6">
                  As organizations grow, manual workflows often become bottlenecks. AI workflow automation addresses
                  these issues by creating consistent, scalable, and data-driven processes. Common challenges include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Repetitive administrative work",
                    "Delayed approvals",
                    "Human errors",
                    "Disconnected software systems",
                    "Slow customer response times",
                    "Limited operational visibility",
                  ].map((challenge) => (
                    <div key={challenge} className="flex items-center gap-3 p-4 border border-white/10 bg-white/[0.02]">
                      <AlertTriangle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                      <span className="text-gray-300 text-sm font-medium">{challenge}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 2 */}
              <section id="key-benefits" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  Key Benefits
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full flex-shrink-0">
                      <BarChart className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">Increased Productivity</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Employees spend less time on repetitive work and more time on strategic activities.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full flex-shrink-0">
                      <CreditCard className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">Reduced Operational Costs</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Automation minimizes manual effort, helping businesses improve efficiency while controlling costs.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">Improved Accuracy</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        AI reduces errors in tasks such as data entry, document processing, and reporting.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full flex-shrink-0">
                      <Zap className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">Faster Decision-Making</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        AI analyzes large volumes of information quickly, enabling faster operational decisions.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-10 h-10 bg-primary/10 flex items-center justify-center rounded-full flex-shrink-0">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg mb-1">Better Customer Experience</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        Automated workflows improve response times, service consistency, and customer satisfaction.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="common-examples" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  Common AI Workflow Automation Examples
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-white/10 bg-[#050505] p-6">
                    <h3 className="text-lg font-black text-white mb-3">Sales</h3>
                    <ul className="space-y-2">
                      {["Lead qualification", "CRM updates", "Proposal generation", "Follow-up reminders", "Meeting scheduling"].map((t) => (
                        <li key={t} className="text-gray-400 text-sm flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-primary" /> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border border-white/10 bg-[#050505] p-6">
                    <h3 className="text-lg font-black text-white mb-3">Customer Support</h3>
                    <ul className="space-y-2">
                      {["Ticket routing", "FAQ responses", "Escalation management", "Customer feedback analysis"].map((t) => (
                        <li key={t} className="text-gray-400 text-sm flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-primary" /> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border border-white/10 bg-[#050505] p-6">
                    <h3 className="text-lg font-black text-white mb-3">Finance</h3>
                    <ul className="space-y-2">
                      {["Invoice processing", "Expense approvals", "Payment reminders", "Financial reporting"].map((t) => (
                        <li key={t} className="text-gray-400 text-sm flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-primary" /> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border border-white/10 bg-[#050505] p-6">
                    <h3 className="text-lg font-black text-white mb-3">Human Resources</h3>
                    <ul className="space-y-2">
                      {["Resume screening", "Interview scheduling", "Employee onboarding", "Leave approvals"].map((t) => (
                        <li key={t} className="text-gray-400 text-sm flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-primary" /> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border border-white/10 bg-[#050505] p-6 md:col-span-2">
                    <h3 className="text-lg font-black text-white mb-3">Operations</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {["Inventory monitoring", "Procurement workflows", "Vendor management", "Compliance tracking"].map((t) => (
                        <li key={t} className="text-gray-400 text-sm flex items-center gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-primary" /> {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 4 */}
              <section id="ai-vs-traditional" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  AI Workflow vs Traditional Workflow Automation
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/[0.02]">
                        <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.3em] text-gray-500 font-bold">Feature</th>
                        <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.3em] text-gray-400 font-bold">Traditional Automation</th>
                        <th className="text-left py-3 px-4 text-[10px] uppercase tracking-[0.3em] text-primary font-bold">AI Workflow Automation</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map((row, i) => (
                        <tr key={row.feature} className={`border-b border-white/5 ${i % 2 === 0 ? "bg-black" : "bg-white/[0.02]"}`}>
                          <td className="py-3 px-4 text-gray-300 font-medium">{row.feature}</td>
                          <td className="py-3 px-4 text-gray-500">{row.traditional}</td>
                          <td className="py-3 px-4 text-primary font-bold">{row.ai}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              {/* Section 5 */}
              <section id="industries" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  Industries Using AI Workflow Automation
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <div className="space-y-4">
                  {[
                    { title: "Healthcare", desc: "Appointment scheduling, patient documentation, and claims processing." },
                    { title: "Manufacturing", desc: "Production planning, predictive maintenance, and quality control." },
                    { title: "Retail", desc: "Inventory optimization, order processing, and customer support." },
                    { title: "Financial Services", desc: "Fraud detection, compliance monitoring, and invoice automation." },
                    { title: "Logistics", desc: "Shipment tracking, route optimization, and warehouse operations." },
                  ].map((ind) => (
                    <div key={ind.title} className="flex items-start gap-4 p-4 border border-white/10 bg-[#050505]">
                      <Briefcase className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="text-white font-bold text-base mb-1">{ind.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{ind.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 6 */}
              <section id="roadmap" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  Implementation Roadmap
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <div className="space-y-4">
                  {[
                    { step: "01", text: "Identify repetitive workflows." },
                    { step: "02", text: "Map the existing process." },
                    { step: "03", text: "Define measurable goals." },
                    { step: "04", text: "Select suitable AI tools." },
                    { step: "05", text: "Integrate with existing systems." },
                    { step: "06", text: "Test the workflow." },
                    { step: "07", text: "Monitor performance and improve continuously." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 border border-white/10 bg-[#050505] p-5">
                      <div className="text-primary font-black text-sm">Step {item.step}</div>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 7 */}
              <section id="mistakes-and-best-practices" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  Mistakes to Avoid & Best Practices
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-white/10 p-6 bg-white/[0.02]">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400" /> Mistakes to Avoid
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "Automating inefficient workflows.",
                        "Ignoring employee adoption.",
                        "Using AI without quality data.",
                        "Failing to define success metrics.",
                        "Overcomplicating the first implementation.",
                      ].map((m) => (
                        <li key={m} className="text-gray-400 text-sm flex items-start gap-2">
                          <div className="w-3.5 h-3.5 bg-red-500/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full" />
                          </div>
                          {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border border-white/10 p-6 bg-white/[0.02]">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400" /> Best Practices
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "Start with high-impact processes.",
                        "Involve business users early.",
                        "Measure ROI regularly.",
                        "Ensure security and compliance.",
                        "Scale automation gradually.",
                      ].map((m) => (
                        <li key={m} className="text-gray-400 text-sm flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-green-400 mt-1 flex-shrink-0" /> {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </section>

              {/* Section 8 - FAQ */}
              <section id="faq" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  Frequently Asked Questions
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <div className="space-y-4">
                  {[
                    {
                      q: "What is AI workflow automation?",
                      a: "AI workflow automation combines artificial intelligence with business workflows to automate repetitive tasks, improve decision-making, and streamline operations.",
                    },
                    {
                      q: "Is AI workflow automation suitable for small businesses?",
                      a: "Yes. Many AI-powered workflow tools are scalable and can help startups and SMEs improve efficiency without large infrastructure investments.",
                    },
                    {
                      q: "Which departments benefit the most?",
                      a: "Sales, customer support, HR, finance, operations, and marketing are among the departments that often realize significant productivity gains.",
                    },
                    {
                      q: "How do I get started?",
                      a: "Begin by identifying repetitive, high-volume tasks with clear business value, then automate one workflow at a time while measuring results.",
                    }
                  ].map((item, i) => (
                    <details key={i} className="border border-white/10 bg-[#050505] group overflow-hidden">
                      <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer list-none hover:border-primary/30 transition-colors">
                        <h3 className="text-white font-bold text-sm leading-snug group-open:text-primary transition-colors">
                          {item.q}
                        </h3>
                        <ChevronRight className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5 group-open:rotate-90 transition-transform" />
                      </summary>
                      <div className="px-5 pb-5 border-t border-white/10 pt-4">
                        <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* Final Thoughts */}
              <section id="conclusion" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  Final Thoughts
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <p className="text-gray-400 leading-relaxed mb-4">
                  AI workflow automation helps businesses operate more efficiently by reducing manual work, improving consistency, and enabling teams to focus on higher-value activities.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Organizations that approach automation strategically—starting with well-defined workflows and measurable goals—are better positioned to achieve sustainable operational improvements.
                </p>
              </section>

              {/* CTA */}
              <section id="cta" className="border border-primary/30 bg-primary/5 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <Settings className="w-4 h-4 text-primary" />
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                      Ready to Automate Your Workflows?
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-3 font-sans">
                    Transform Operations with Optivra
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6 max-w-xl">
                    Optivra helps businesses implement <Link href="/automation" className="text-primary hover:underline">AI workflow automation</Link>, custom software, ERP, CRM, and digital transformation solutions tailored to their operational goals. Whether you&apos;re automating customer support, finance, HR, or sales processes, our team can help you design practical, scalable solutions.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="https://calendly.com/hello-optivra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-7 py-3.5 bg-primary text-black font-black text-xs tracking-widest uppercase hover:bg-white transition-colors"
                    >
                      Book Free Consultation <ArrowRight className="w-4 h-4" />
                    </a>
                    <a
                      href="mailto:hello@optivra.in?subject=AI%20Workflow%20Automation"
                      className="inline-flex items-center gap-3 px-7 py-3.5 border border-white/20 text-white font-bold text-xs tracking-widest uppercase hover:border-primary hover:text-primary transition-colors"
                    >
                      Email Our Team
                    </a>
                  </div>
                </div>
              </section>
            </article>

            {/* ── Sidebar ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-8 space-y-6">
                {/* Table of Contents */}
                <div className="border border-white/10 bg-[#050505] p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-4">
                    Contents
                  </p>
                  <nav className="space-y-2">
                    {[
                      { id: "why-businesses-need-it", label: "Why Automate?" },
                      { id: "key-benefits", label: "Key Benefits" },
                      { id: "common-examples", label: "Common Examples" },
                      { id: "ai-vs-traditional", label: "AI vs Traditional" },
                      { id: "industries", label: "Industries Using It" },
                      { id: "roadmap", label: "Implementation Roadmap" },
                      { id: "mistakes-and-best-practices", label: "Mistakes & Best Practices" },
                      { id: "faq", label: "FAQ" },
                      { id: "cta", label: "Get Started" },
                    ].map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="flex items-center gap-2 text-gray-600 hover:text-white text-[11px] font-medium tracking-wide transition-colors group"
                      >
                        <span className="w-1 h-1 rounded-full bg-primary/40 group-hover:bg-primary flex-shrink-0" />
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Share */}
                <div className="border border-white/10 bg-[#050505] p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-4">
                    Share This Guide
                  </p>
                  <div className="space-y-2">
                    <a
                      href="https://twitter.com/intent/tweet?url=https://optivra.in/insights/ai-workflow-automation&text=AI+Workflow+Automation%3A+Complete+Business+Guide+%282026%29&via=optivra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-xs text-gray-500 hover:text-white border border-white/10 px-4 py-2.5 hover:border-white/20 transition-colors"
                    >
                      <span className="font-bold">𝕏</span> Share on X
                    </a>
                    <a
                      href="https://www.linkedin.com/shareArticle?mini=true&url=https://optivra.in/insights/ai-workflow-automation&title=AI+Workflow+Automation+Complete+Guide"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-xs text-gray-500 hover:text-white border border-white/10 px-4 py-2.5 hover:border-white/20 transition-colors"
                    >
                      <span className="font-bold text-[#0A66C2]">in</span> Share on LinkedIn
                    </a>
                  </div>
                </div>

                {/* Related */}
                <div className="border border-white/10 bg-[#050505] p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-gray-500 mb-4">
                    Related Guides
                  </p>
                  <div className="space-y-3">
                    {[
                      { label: "AI Automation for Small Business", href: "/insights/ai-automation-for-small-businesses" },
                      { label: "AI Agents vs AI Chatbots", href: "/insights/ai-agents-vs-ai-chatbots" },
                      { label: "Enterprise Automation Playbook", href: "/insights/enterprise-automation-playbook" },
                    ].map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="flex items-start gap-2 text-[11px] text-gray-500 hover:text-primary transition-colors group"
                      >
                        <ArrowRight className="w-3 h-3 flex-shrink-0 mt-0.5 group-hover:translate-x-1 transition-transform" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* CTA card */}
                <div className="border border-primary/20 bg-primary/5 p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-3">
                    Free Consultation
                  </p>
                  <p className="text-white font-bold text-sm mb-2">Want to automate?</p>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">
                    Talk to an Optivra AI specialist. No pitch — just answers.
                  </p>
                  <a
                    href="https://calendly.com/hello-optivra"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-black bg-primary px-4 py-2.5 hover:bg-white transition-colors w-full justify-center"
                  >
                    Book Now <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* ── Back Nav ── */}
        <div className="border-t border-white/10">
          <div className="max-w-5xl mx-auto px-6 py-6 flex items-center justify-between">
            <Link
              href="/insights"
              className="text-gray-600 hover:text-primary text-[11px] tracking-widest uppercase font-bold transition-colors flex items-center gap-2"
            >
              ← All Insights
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-primary text-[11px] tracking-widest uppercase font-bold transition-colors"
            >
              Optivra Home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
