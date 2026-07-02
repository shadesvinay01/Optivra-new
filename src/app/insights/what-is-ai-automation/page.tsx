import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Calendar, ChevronRight, CheckCircle, AlertTriangle, Zap } from "lucide-react";

/* ─────────────────────────────────────────────
   SEO METADATA  (full Open Graph + Twitter)
───────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://optivra.in"),
  title: "What Is AI Automation? A Complete Guide for Businesses (2026) | Optivra",
  description:
    "Learn what AI automation is, how it works, its business benefits, implementation roadmap, real-world use cases, and how companies can adopt AI successfully in 2026.",
  keywords: [
    "what is AI automation",
    "AI automation for business",
    "AI automation benefits",
    "AI workflow automation",
    "business process automation AI",
    "AI automation 2026",
    "how AI automation works",
    "AI automation use cases",
    "AI automation guide",
    "enterprise AI automation",
  ],
  authors: [{ name: "Optivra Team", url: "https://optivra.in" }],
  alternates: {
    canonical: "https://optivra.in/insights/what-is-ai-automation",
  },
  openGraph: {
    title: "What Is AI Automation? A Complete Guide for Businesses (2026)",
    description:
      "Learn what AI automation is, how it works, its business benefits, implementation roadmap, real-world use cases, and how companies can adopt AI successfully in 2026.",
    url: "https://optivra.in/insights/what-is-ai-automation",
    siteName: "Optivra",
    images: [
      {
        url: "/ai-automation-hero.png",
        width: 1200,
        height: 630,
        alt: "What Is AI Automation? A Complete Guide for Businesses",
      },
    ],
    type: "article",
    publishedTime: "2026-07-03T00:00:00Z",
    authors: ["https://optivra.in"],
    tags: ["AI Automation", "Business Automation", "AI Strategy", "Workflow Automation"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What Is AI Automation? A Complete Guide for Businesses (2026)",
    description:
      "Learn what AI automation is, how it works, its benefits, and real-world use cases for 2026.",
    images: ["/ai-automation-hero.png"],
    site: "@optivra",
  },
};

/* ─────────────────────────────────────────────
   STRUCTURED DATA  (JSON-LD)
───────────────────────────────────────────── */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "What Is AI Automation? A Complete Guide for Businesses (2026)",
  description:
    "Learn what AI automation is, how it works, its business benefits, implementation roadmap, real-world use cases, and how companies can adopt AI successfully in 2026.",
  image: "https://optivra.in/ai-automation-hero.png",
  datePublished: "2026-07-03T00:00:00Z",
  dateModified: "2026-07-03T00:00:00Z",
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
    "@id": "https://optivra.in/insights/what-is-ai-automation",
  },
  articleSection: "Automation",
  keywords:
    "AI automation, business automation, workflow automation, AI for business, AI strategy 2026",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is AI automation only for large enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. SMEs can start with focused workflows and scale gradually. Many AI automation tools offer affordable entry points that deliver measurable ROI even for small teams.",
      },
    },
    {
      "@type": "Question",
      name: "Will AI automation replace employees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI usually augments people by automating repetitive tasks, freeing employees to focus on higher-value strategic work that requires creativity and human judgment.",
      },
    },
    {
      "@type": "Question",
      name: "How long does AI automation implementation take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Simple projects may take days or weeks, while enterprise-wide programs can take several months depending on the complexity of workflows and existing infrastructure.",
      },
    },
  ],
};

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function WhatIsAIAutomationPage() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
            <span className="text-gray-500">AI Automation Guide</span>
          </div>
        </div>

        {/* ── Hero ── */}
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

            <h1 className="text-4xl md:text-6xl font-black font-sans leading-tight text-white mb-6">
              What Is AI Automation?{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #D4AF37 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                A Complete Guide
              </span>{" "}
              for Businesses (2026)
            </h1>

            <p className="text-xl text-gray-400 font-light leading-relaxed max-w-3xl mb-8">
              Artificial Intelligence automation combines AI technologies with workflow automation
              to perform repetitive tasks, support decision-making, and improve operational
              efficiency — without proportional headcount growth.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-[11px] text-gray-600 uppercase tracking-widest font-bold">
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" /> July 3, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" /> 12 min read
              </span>
              <span>By Optivra Team</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="max-w-5xl mx-auto px-6 pb-0">
            <div className="relative w-full aspect-[21/9] overflow-hidden border border-white/10">
              <Image
                src="/ai-automation-hero.png"
                alt="What Is AI Automation — futuristic neural network visualization"
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

            {/* Main Content */}
            <article className="prose-custom">

              {/* Quick Answer Box */}
              <div className="border border-primary/30 bg-primary/5 p-6 mb-12 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-3">Quick Answer</p>
                <p className="text-white font-semibold text-lg leading-relaxed">
                  AI automation uses artificial intelligence — including machine learning, NLP, and
                  computer vision — to handle tasks that traditionally required human judgment,
                  enabling businesses to scale operations, cut costs, and free employees for
                  strategic work.
                </p>
              </div>

              {/* Section 1 */}
              <section id="what-is" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  What Is AI Automation?
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <p className="text-gray-400 leading-relaxed mb-4">
                  AI automation refers to the use of artificial intelligence to automate tasks that
                  normally require human judgment. Unlike traditional rule-based automation (RPA),
                  AI can <strong className="text-white">understand language, analyze unstructured data, recognize patterns,
                  and continuously improve</strong> from feedback and new data.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  Businesses deploy AI automation across customer support, sales, HR, finance,
                  marketing, operations, document processing, analytics, and more — often achieving
                  dramatic improvements in speed, accuracy, and cost per transaction.
                </p>
              </section>

              {/* Section 2 — Why */}
              <section id="why" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  Why Businesses Are Investing in AI Automation
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <p className="text-gray-400 leading-relaxed mb-6">
                  The business case for AI automation has never been stronger. Across industries,
                  organizations are realizing measurable returns across five key dimensions:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: "💰", title: "Reduce Operational Costs", desc: "Automating repetitive workflows eliminates manual labour costs and human error overhead." },
                    { icon: "⚡", title: "Increase Productivity", desc: "Employees focus on creative and strategic work instead of manual, low-value tasks." },
                    { icon: "🎯", title: "Improve Customer Experience", desc: "24/7 AI-powered responses, personalization, and faster resolution times." },
                    { icon: "📈", title: "Scale Without Hiring", desc: "Handle 10× the volume without a proportional increase in headcount." },
                    { icon: "🧠", title: "Actionable Data Insights", desc: "AI surfaces patterns and predictions from data that humans would miss." },
                    { icon: "🔒", title: "Consistency & Compliance", desc: "AI processes follow the same rules every time — reducing regulatory risk." },
                  ].map((item) => (
                    <div key={item.title} className="border border-white/10 bg-white/[0.02] p-5 hover:border-primary/30 transition-colors group">
                      <span className="text-2xl block mb-3">{item.icon}</span>
                      <h3 className="text-white font-bold text-sm mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 3 — How It Works */}
              <section id="how-it-works" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  How AI Automation Works
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <p className="text-gray-400 leading-relaxed mb-8">
                  Implementing AI automation is not a single-step process. Successful deployments
                  follow a structured five-phase roadmap that starts with workflow discovery and
                  ends with continuous optimization.
                </p>
                <div className="space-y-4">
                  {[
                    { step: "01", title: "Identify Repetitive Workflows", desc: "Map and prioritize processes with high volume, low variability, and clear rules — these offer the fastest ROI." },
                    { step: "02", title: "Collect & Prepare Quality Data", desc: "AI is only as good as its training data. Clean, labelled, representative datasets are non-negotiable." },
                    { step: "03", title: "Select the Right AI Model or Platform", desc: "Choose between off-the-shelf tools (GPT, Claude) or custom-trained models based on your use case and data sensitivity." },
                    { step: "04", title: "Integrate with Existing Software", desc: "Connect AI to your CRM, ERP, email, ticketing, and other tools via API — avoid creating data silos." },
                    { step: "05", title: "Monitor, Measure & Optimize", desc: "Track KPIs from day one. AI systems degrade without oversight — continuous feedback loops maintain performance." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-5 border border-white/10 bg-[#050505] p-5 hover:border-primary/30 transition-colors group">
                      <div className="w-10 h-10 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-black text-xs flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <h3 className="text-white font-bold text-sm mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-gray-500 text-xs leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 4 — Use Cases */}
              <section id="use-cases" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  Top Business Use Cases in 2026
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <p className="text-gray-400 leading-relaxed mb-6">
                  The most successful AI automation deployments today span every business function.
                  Here are the highest-impact use cases delivering real results:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { category: "Customer Support", use: "AI chatbots & virtual agents for 24/7 resolution" },
                    { category: "Sales", use: "Lead scoring, prioritization & follow-up sequences" },
                    { category: "Operations", use: "Email classification & intelligent routing" },
                    { category: "Finance", use: "Automated invoice processing & reconciliation" },
                    { category: "Meetings", use: "AI-generated summaries, action items & notes" },
                    { category: "HR", use: "Recruitment screening & candidate shortlisting" },
                    { category: "Manufacturing", use: "Predictive maintenance & quality inspection" },
                    { category: "Supply Chain", use: "Demand forecasting & inventory optimization" },
                    { category: "Marketing", use: "Personalized content generation & A/B testing" },
                    { category: "Legal", use: "Contract review, clause extraction & compliance checks" },
                  ].map((item) => (
                    <div key={item.use} className="flex items-start gap-3 p-4 border border-white/10 bg-white/[0.02] hover:border-primary/20 transition-colors">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <div>
                        <span className="text-primary text-[10px] font-bold uppercase tracking-widest block mb-1">{item.category}</span>
                        <p className="text-gray-400 text-xs leading-relaxed">{item.use}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5 — Benefits */}
              <section id="benefits" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  Benefits of AI Automation
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <p className="text-gray-400 leading-relaxed mb-6">
                  Organizations adopting AI automation consistently report improvements across four
                  core dimensions — and the compounding effect over 12–24 months is significant:
                </p>
                <div className="border border-white/10 bg-[#050505] overflow-hidden">
                  <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
                    {[
                      { metric: "3–8×", label: "Faster Processing" },
                      { metric: "60–90%", label: "Error Reduction" },
                      { metric: "40–70%", label: "Cost Savings" },
                      { metric: "24/7", label: "Uptime vs Human 9–5" },
                    ].map((item) => (
                      <div key={item.label} className="p-6 text-center border-b md:border-b-0 border-white/10">
                        <p className="text-3xl font-black text-primary mb-1">{item.metric}</p>
                        <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-4 leading-relaxed">
                  * Ranges based on Optivra client outcomes and published industry benchmarks (McKinsey, Deloitte, Gartner 2025–2026).
                </p>
              </section>

              {/* Section 6 — Challenges */}
              <section id="challenges" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  Common Challenges (and How to Avoid Them)
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <p className="text-gray-400 leading-relaxed mb-6">
                  Most AI automation projects that fail do so for predictable, avoidable reasons.
                  Understanding these pitfalls before you start dramatically improves your success rate:
                </p>
                <div className="space-y-3">
                  {[
                    { challenge: "Poor Data Quality", fix: "Audit and clean your data before any AI project begins. Garbage in = garbage out — without exception." },
                    { challenge: "Undefined Business Goals", fix: "Start with a specific KPI you want to move, not a vague desire to 'use AI'. Measure from day one." },
                    { challenge: "Resistance to Change", fix: "Involve employees early. Frame automation as removing burden, not replacing people. Training matters." },
                    { challenge: "Weak Integration Planning", fix: "Map your tech stack before choosing an AI tool. Integration complexity is often the biggest hidden cost." },
                    { challenge: "Not Measuring ROI", fix: "Define your success metrics upfront: cost per ticket, processing time, error rate, CSAT. Track weekly." },
                  ].map((item) => (
                    <div key={item.challenge} className="border border-white/10 bg-[#050505] p-5 hover:border-yellow-500/20 transition-colors group">
                      <div className="flex items-start gap-3">
                        <AlertTriangle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                        <div>
                          <h3 className="text-white font-bold text-sm mb-1">{item.challenge}</h3>
                          <p className="text-gray-500 text-xs leading-relaxed"><strong className="text-primary">Fix: </strong>{item.fix}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 7 — FAQ */}
              <section id="faq" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  Frequently Asked Questions
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <div className="space-y-4">
                  {[
                    {
                      q: "Is AI automation only for large enterprises?",
                      a: "No. SMEs can start with focused, high-volume workflows and scale gradually. Many AI automation platforms (Zapier AI, Make, Microsoft Power Automate) have SME-friendly pricing. The key is starting with one process, proving ROI, and expanding.",
                    },
                    {
                      q: "Will AI automation replace employees?",
                      a: "Rarely in a wholesale sense. AI typically augments employees by handling repetitive, low-judgment tasks — freeing humans for relationship management, creative strategy, and complex problem-solving. Most organizations redeploy, not retrench.",
                    },
                    {
                      q: "How long does AI automation implementation take?",
                      a: "Simple single-workflow projects (e.g., email classification, invoice reading) can go live in 2–6 weeks. Mid-size programs (multi-department, integrated) typically take 3–6 months. Enterprise-wide transformations with change management and custom model training can span 6–18 months.",
                    },
                    {
                      q: "What industries benefit most from AI automation?",
                      a: "Financial services, healthcare, manufacturing, e-commerce, logistics, and professional services currently see the highest ROI. However, any industry with high-volume, rule-driven processes is a strong candidate.",
                    },
                    {
                      q: "How much does AI automation cost?",
                      a: "Costs range dramatically: off-the-shelf tools start from ₹2,000–₹20,000/month. Custom AI automation solutions from specialized firms like Optivra typically start at ₹3–10 lakh for a well-defined project. Enterprise programs can run ₹50L+. ROI usually pays back investment within 6–12 months.",
                    },
                  ].map((item, i) => (
                    <details key={i} className="border border-white/10 bg-[#050505] group overflow-hidden">
                      <summary className="flex items-start justify-between gap-4 p-5 cursor-pointer list-none hover:border-primary/30 transition-colors">
                        <h3 className="text-white font-bold text-sm leading-snug group-open:text-primary transition-colors">{item.q}</h3>
                        <ChevronRight className="w-4 h-4 text-gray-600 flex-shrink-0 mt-0.5 group-open:rotate-90 transition-transform" />
                      </summary>
                      <div className="px-5 pb-5 border-t border-white/10 pt-4">
                        <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </section>

              {/* CTA Section */}
              <section id="cta" className="border border-primary/30 bg-primary/5 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">Ready to Automate?</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-3 font-sans">
                    Start Your AI Automation Journey with Optivra
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6 max-w-xl">
                    Optivra helps businesses implement practical AI automation solutions tailored to
                    their workflows — from discovery and data preparation to full deployment and
                    ongoing optimization. Book a free consultation today.
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
                      href="mailto:hello@optivra.in?subject=AI%20Automation%20Inquiry"
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
                      { id: "what-is", label: "What Is AI Automation?" },
                      { id: "why", label: "Why Businesses Invest" },
                      { id: "how-it-works", label: "How It Works" },
                      { id: "use-cases", label: "Top Use Cases" },
                      { id: "benefits", label: "Benefits" },
                      { id: "challenges", label: "Common Challenges" },
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
                      href="https://twitter.com/intent/tweet?url=https://optivra.in/insights/what-is-ai-automation&text=What+Is+AI+Automation%3F+A+Complete+Guide+for+Businesses+(2026)&via=optivra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-xs text-gray-500 hover:text-white border border-white/10 px-4 py-2.5 hover:border-white/20 transition-colors"
                    >
                      <span className="font-bold">𝕏</span> Share on X
                    </a>
                    <a
                      href="https://www.linkedin.com/shareArticle?mini=true&url=https://optivra.in/insights/what-is-ai-automation&title=What+Is+AI+Automation%3F"
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
                      { label: "Enterprise Automation Playbook", href: "/insights/enterprise-automation-playbook" },
                      { label: "Building Production AI Agents", href: "/insights/complete-guide-ai-agents-2025" },
                      { label: "AI for Startups on $50K", href: "/insights/ai-startups-50k-budget" },
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

                {/* Optivra Card */}
                <div className="border border-primary/20 bg-primary/5 p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-3">
                    Free Consultation
                  </p>
                  <p className="text-white font-bold text-sm mb-2">Ready to automate?</p>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">
                    Talk to an Optivra AI specialist. No pitch deck — just answers.
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
