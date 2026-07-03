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
  Megaphone,
  CreditCard,
} from "lucide-react";

/* ─────────────────────────────────────────────
   SEO METADATA
───────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL("https://optivra.in"),
  title: "AI Automation for Small Businesses: Complete Guide (2026) | Optivra",
  description:
    "Discover how small businesses can use AI automation to reduce costs, improve productivity, automate repetitive work, and scale efficiently in 2026.",
  keywords: [
    "AI Automation for Small Businesses",
    "AI for small business",
    "Business process automation",
    "AI workflow automation",
    "AI tools for SMEs",
    "Small business automation",
    "AI consulting services",
    "AI productivity",
    "AI business solutions",
    "Digital transformation for SMEs",
  ],
  authors: [{ name: "Optivra Team", url: "https://optivra.in" }],
  alternates: {
    canonical: "https://optivra.in/insights/ai-automation-for-small-businesses",
  },
  openGraph: {
    title: "AI Automation for Small Businesses: Benefits, Use Cases & ROI (2026)",
    description:
      "Discover how small businesses can use AI automation to reduce costs, improve productivity, automate repetitive work, and scale efficiently in 2026.",
    url: "https://optivra.in/insights/ai-automation-for-small-businesses",
    siteName: "Optivra",
    images: [
      {
        url: "/ai-small-business-hero.png",
        width: 1200,
        height: 630,
        alt: "AI Automation for Small Businesses: Complete Guide",
      },
    ],
    type: "article",
    publishedTime: "2026-07-03T16:00:00Z",
    authors: ["https://optivra.in"],
    tags: [
      "AI Automation",
      "Small Business",
      "Business Automation",
      "AI Strategy",
      "Workflow Automation",
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Automation for Small Businesses: Complete Guide (2026)",
    description:
      "Learn how SMEs can leverage AI automation to cut costs, save time, and grow faster.",
    images: ["/ai-small-business-hero.png"],
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
    "AI Automation for Small Businesses: The Complete Guide to Saving Time, Reducing Costs, and Growing Faster (2026)",
  description:
    "Discover how small businesses can use AI automation to reduce costs, improve productivity, automate repetitive work, and scale efficiently in 2026.",
  image: "https://optivra.in/ai-small-business-hero.png",
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
    "@id": "https://optivra.in/insights/ai-automation-for-small-businesses",
  },
  articleSection: "AI for Startups",
  keywords:
    "AI Automation for Small Businesses, AI for SMEs, workflow automation, digital transformation",
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is AI automation affordable for small businesses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many AI solutions are available on subscription models, making them accessible for startups and SMEs. The right choice depends on your business needs and expected return on investment.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need technical expertise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily. Many platforms offer user-friendly interfaces, while implementation partners can help with more advanced integrations.",
      },
    },
    {
      "@type": "Question",
      name: "Which department should automate first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Customer support, sales, finance, and administrative workflows are often good starting points because they involve repetitive tasks with measurable outcomes.",
      },
    },
  ],
};

/* ─────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────── */
export default function SmallBusinessAIAutomationPage() {
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
            <span className="text-gray-500">SME Automation Guide</span>
          </div>
        </div>

        {/* ── Hero Header ── */}
        <header className="border-b border-white/10">
          <div className="max-w-5xl mx-auto px-6 pt-16 pb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-primary bg-primary/10 border border-primary/20 px-3 py-1">
                AI for Startups
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase font-bold text-gray-600 bg-white/5 border border-white/10 px-3 py-1">
                Complete Guide
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-sans leading-tight text-white mb-6">
              AI Automation for Small Businesses:{" "}
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
              Discover how small businesses can save time, reduce costs, and grow faster by using
              AI automation to eliminate repetitive work and scale efficiently.
            </p>

            <div className="flex flex-wrap items-center gap-6 text-[11px] text-gray-600 uppercase tracking-widest font-bold">
              <span className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5" /> July 3, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5" /> 8 min read
              </span>
              <span>By Optivra Team</span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="max-w-5xl mx-auto px-6 pb-0">
            <div className="relative w-full aspect-[21/9] overflow-hidden border border-white/10">
              <Image
                src="/ai-small-business-hero.png"
                alt="AI Automation for Small Businesses"
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
              {/* Intro / TL;DR */}
              <div className="border border-primary/30 bg-primary/5 p-6 mb-14 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[60px] rounded-full pointer-events-none" />
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-primary mb-3">Quick Overview</p>
                <p className="text-white font-semibold text-lg leading-relaxed">
                  For many small business owners, every hour and every rupee matter. Teams are often small, 
                  employees handle multiple responsibilities, and repetitive administrative work can consume 
                  valuable time that could be spent serving customers or growing the business.{" "}
                  <Link href="/insights/what-is-ai-automation" className="text-primary hover:underline">AI automation</Link>{" "}
                  offers a practical way to streamline operations without requiring a large workforce.
                </p>
              </div>

              {/* Section 1 */}
              <section id="why-adopt" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  Why Small Businesses Should Adopt AI
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <p className="text-gray-400 leading-relaxed mb-6">
                  Modern AI tools are more accessible than ever. Small businesses can automate repetitive
                  work while maintaining flexibility and control. Common benefits include:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Reduced operational costs",
                    "Faster customer response times",
                    "Better team productivity",
                    "Improved data accuracy",
                    "Consistent business processes",
                    "More time for innovation and growth",
                  ].map((benefit) => (
                    <div key={benefit} className="flex items-center gap-3 p-4 border border-white/10 bg-white/[0.02]">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-gray-300 text-sm font-medium">{benefit}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 2 */}
              <section id="where-value" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  Where AI Delivers the Biggest Value
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                
                <div className="space-y-8">
                  <div className="border border-white/10 bg-[#050505] p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-5 h-5 text-blue-400" />
                      <h3 className="text-lg font-black text-white">Customer Support</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      AI assistants can answer common questions, provide order updates, and collect customer information around the clock.
                    </p>
                    <p className="text-blue-400 text-[10px] uppercase tracking-widest font-bold mb-2">Benefits:</p>
                    <ul className="space-y-1">
                      {["Faster responses", "Lower support workload", "Improved customer satisfaction"].map((b) => (
                        <li key={b} className="text-gray-500 text-xs flex items-center gap-2">
                          <span className="w-1 h-1 bg-blue-400/50 rounded-full" /> {b}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border border-white/10 bg-[#050505] p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Briefcase className="w-5 h-5 text-primary" />
                      <h3 className="text-lg font-black text-white">Sales</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      AI helps sales teams by qualifying leads, sending follow-up emails, scheduling meetings, updating CRM records, and recommending next actions. This allows sales representatives to focus on building relationships.
                    </p>
                  </div>

                  <div className="border border-white/10 bg-[#050505] p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Megaphone className="w-5 h-5 text-pink-400" />
                      <h3 className="text-lg font-black text-white">Marketing</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">
                      AI can support marketing by generating content ideas, assisting with email campaigns, scheduling social media posts, analyzing campaign performance, and personalizing customer communication.
                    </p>
                  </div>

                  <div className="border border-white/10 bg-[#050505] p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <CreditCard className="w-5 h-5 text-green-400" />
                      <h3 className="text-lg font-black text-white">Finance & HR</h3>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Routine financial tasks can be simplified through AI-assisted invoice processing, expense categorization, and forecasting. HR teams can automate resume screening, interview scheduling, employee onboarding, and leave management.
                    </p>
                  </div>
                </div>
              </section>

              {/* Section 3 */}
              <section id="common-examples" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  Common AI Automation Examples
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <p className="text-gray-400 leading-relaxed mb-6">
                  Small businesses frequently automate the following tasks:
                </p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Appointment booking",
                    "Customer inquiries",
                    "Lead management",
                    "Email sorting",
                    "Report generation",
                    "Inventory monitoring",
                    "Meeting summaries",
                    "Internal documentation",
                    "Knowledge management",
                    "Workflow approvals",
                  ].map((task) => (
                    <span key={task} className="px-3 py-1.5 border border-white/20 text-gray-300 text-xs rounded-full bg-white/5">
                      {task}
                    </span>
                  ))}
                </div>
              </section>

              {/* Section 4 */}
              <section id="roadmap" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  Implementation Roadmap
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <p className="text-gray-400 leading-relaxed mb-6">
                  Start with tasks that are repetitive, time-consuming, rule-based, high volume, and low creativity. Avoid automating complex decision-making processes before your underlying workflows are well defined.
                </p>
                
                <div className="space-y-4">
                  {[
                    { step: "01", text: "Identify repetitive tasks that consume the most employee time." },
                    { step: "02", text: "Measure the current time and cost involved." },
                    { step: "03", text: "Prioritize one or two high-impact automation opportunities." },
                    { step: "04", text: "Integrate AI with your existing business tools." },
                    { step: "05", text: "Train employees on the new workflows." },
                    { step: "06", text: "Monitor performance and refine the process over time." },
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 border border-white/10 bg-[#050505] p-5">
                      <div className="text-primary font-black text-sm">Step {item.step}</div>
                      <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Section 5 */}
              <section id="measuring" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  Measuring Success & Mistakes to Avoid
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border border-white/10 p-6 bg-white/[0.02]">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-green-400" /> Measure Metrics Like
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "Time saved per week",
                        "Reduction in manual work",
                        "Customer response time",
                        "Employee productivity",
                        "Cost savings",
                        "Customer satisfaction",
                        "Revenue influenced by automation",
                      ].map((m) => (
                        <li key={m} className="text-gray-400 text-sm flex items-start gap-2">
                          <CheckCircle className="w-3.5 h-3.5 text-green-400 mt-1 flex-shrink-0" /> {m}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border border-white/10 p-6 bg-white/[0.02]">
                    <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-4 h-4 text-red-400" /> Avoid Mistakes Like
                    </h3>
                    <ul className="space-y-2">
                      {[
                        "Automating inefficient processes",
                        "Ignoring data quality",
                        "Choosing tools without clear business goals",
                        "Failing to monitor performance",
                        "Neglecting employee training",
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
                </div>
                <p className="text-gray-400 text-sm mt-4 text-center italic">
                  Successful AI adoption combines technology with thoughtful process improvement.
                </p>
              </section>

              {/* Section 6 - FAQ */}
              <section id="faq" className="mb-14">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 font-sans">
                  Frequently Asked Questions
                </h2>
                <div className="h-px bg-gradient-to-r from-primary/50 to-transparent mb-6" />
                <div className="space-y-4">
                  {[
                    {
                      q: "Is AI automation affordable for small businesses?",
                      a: "Many AI solutions are available on subscription models, making them accessible for startups and SMEs. The right choice depends on your business needs and expected return on investment.",
                    },
                    {
                      q: "Do I need technical expertise?",
                      a: "Not necessarily. Many platforms offer user-friendly interfaces, while implementation partners can help with more advanced integrations.",
                    },
                    {
                      q: "Which department should automate first?",
                      a: "Customer support, sales, finance, and administrative workflows are often good starting points because they involve repetitive tasks with measurable outcomes.",
                    },
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
                  AI automation is no longer limited to large enterprises. Small businesses can use AI to simplify operations, improve customer experiences, and create more capacity for growth.
                </p>
                <p className="text-gray-400 leading-relaxed">
                  The most successful approach is to begin with one or two high-impact workflows, measure the results, and expand gradually as your team gains confidence and experience.
                </p>
              </section>

              {/* CTA */}
              <section id="cta" className="border border-primary/30 bg-primary/5 p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-4 h-4 text-primary" />
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                      Ready to Scale Your Business?
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black text-white mb-3 font-sans">
                    Partner With Optivra
                  </h2>
                  <p className="text-gray-400 leading-relaxed mb-6 max-w-xl">
                    Optivra helps startups and SMEs design and implement practical <Link href="/automation" className="text-primary hover:underline">AI automation solutions</Link> that improve productivity and support sustainable growth. Our services include <Link href="/insights/ai-workflow-automation" className="text-primary hover:underline">workflow optimization</Link>, custom software development, ERP and CRM implementation, and digital transformation consulting.
                  </p>
                  <p className="text-gray-400 leading-relaxed mb-6 max-w-xl">
                    If you&apos;re planning your first AI automation project or looking to scale existing workflows, our team can help you identify the right opportunities and build solutions tailored to your business.
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
                      href="mailto:hello@optivra.in?subject=AI%20Automation%20for%20Small%20Business"
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
                      { id: "why-adopt", label: "Why Adopt AI" },
                      { id: "where-value", label: "Where AI Delivers Value" },
                      { id: "common-examples", label: "Common Examples" },
                      { id: "roadmap", label: "Implementation Roadmap" },
                      { id: "measuring", label: "Measuring Success" },
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
                      href="https://twitter.com/intent/tweet?url=https://optivra.in/insights/ai-automation-for-small-businesses&text=AI+Automation+for+Small+Businesses%3A+Complete+Guide+%282026%29&via=optivra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-xs text-gray-500 hover:text-white border border-white/10 px-4 py-2.5 hover:border-white/20 transition-colors"
                    >
                      <span className="font-bold">𝕏</span> Share on X
                    </a>
                    <a
                      href="https://www.linkedin.com/shareArticle?mini=true&url=https://optivra.in/insights/ai-automation-for-small-businesses&title=AI+Automation+for+Small+Businesses"
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
                      { label: "What Is AI Automation?", href: "/insights/what-is-ai-automation" },
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
                  <p className="text-white font-bold text-sm mb-2">Ready to automate?</p>
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
