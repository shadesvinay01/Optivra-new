import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI Insights & Strategy Blog | Optivra",
  description:
    "Explore expert articles on AI automation ROI, enterprise LLMs, computer vision, AI agents, machine learning in healthcare, and practical AI strategy for business leaders.",
  keywords: [
    "AI strategy blog",
    "AI automation ROI",
    "enterprise LLM",
    "computer vision use cases",
    "AI consulting insights",
    "machine learning healthcare",
    "AI agents 2025",
    "chatbot implementation",
    "data science pipeline",
  ],
  alternates: { canonical: "https://optivra.in/blog" },
  openGraph: {
    title: "AI Insights & Strategy Blog | Optivra",
    description:
      "Expert articles on AI automation, LLMs, computer vision, and AI strategy for enterprise leaders.",
    url: "https://optivra.in/blog",
    type: "website",
  },
};

const posts = [
  {
    slug: "ai-automation-roi-guide",
    title: "How to Calculate the True ROI of AI Automation for Your Business",
    category: "AI Strategy",
    date: "June 18, 2025",
    excerpt:
      "Most executives underestimate AI's financial impact because they measure it wrong. Here's the framework Optivra uses to calculate tangible, auditable ROI before a single line of code is written.",
  },
  {
    slug: "computer-vision-use-cases-manufacturing",
    title: "7 Computer Vision Use Cases Transforming Manufacturing in 2025",
    category: "Computer Vision",
    date: "June 10, 2025",
    excerpt:
      "From defect detection to predictive maintenance, computer vision is rewriting the rules of industrial production—cutting waste and boosting throughput at scale.",
  },
  {
    slug: "llm-for-enterprise-deployment-guide",
    title: "The Enterprise LLM Deployment Playbook: From POC to Production",
    category: "LLMs & NLP",
    date: "June 3, 2025",
    excerpt:
      "Deploying a large language model is 20% model selection and 80% infrastructure, data governance, and change management. We break down the full production roadmap.",
  },
  {
    slug: "ai-agents-2025-state-of-the-field",
    title: "AI Agents in 2025: Autonomous Systems That Are Actually Ready for Work",
    category: "AI Agents",
    date: "May 27, 2025",
    excerpt:
      "The hype cycle has matured. We examine the agent frameworks, orchestration patterns, and real enterprise deployments that are delivering measurable business value right now.",
  },
  {
    slug: "machine-learning-in-healthcare",
    title: "Machine Learning in Healthcare: Diagnostic AI, Drug Discovery & Beyond",
    category: "Healthcare AI",
    date: "May 20, 2025",
    excerpt:
      "Healthcare is the highest-stakes domain for ML—where model errors cost lives. We explore the proven clinical applications and the regulatory guardrails that make them safe.",
  },
  {
    slug: "chatbot-implementation-guide",
    title: "Building a Customer Support Chatbot That Actually Resolves Issues",
    category: "Chatbots",
    date: "May 12, 2025",
    excerpt:
      "Most chatbots frustrate customers. We walk through the architecture, training data strategy, and escalation logic that separate AI-powered support from digital dead-ends.",
  },
  {
    slug: "modern-data-science-pipeline",
    title: "The Modern Data Science Pipeline: MLOps, Feature Stores & Real-Time Inference",
    category: "Data Science",
    date: "May 5, 2025",
    excerpt:
      "Ad-hoc notebooks are not a data strategy. Here's how leading engineering teams build reproducible, observable, and high-performance ML pipelines that actually ship to production.",
  },
  {
    slug: "cost-reduction-with-ai",
    title: "Cut Operational Costs by 40%: A Practical AI Automation Blueprint",
    category: "Operations",
    date: "April 28, 2025",
    excerpt:
      "Across industries, the most impactful AI projects are not the flashiest—they are the ones that quietly eliminate thousands of manual hours per quarter. Here's the blueprint.",
  },
  {
    slug: "ai-consulting-complete-guide",
    title: "What AI Consulting Actually Is (And How to Pick the Right Partner)",
    category: "AI Consulting",
    date: "April 21, 2025",
    excerpt:
      "The AI consulting market is crowded with slide decks and buzzwords. This guide shows you how to evaluate partners, scope engagements, and avoid expensive dead ends.",
  },
  {
    slug: "future-of-work-with-ai",
    title: "The Future of Work with AI: Augmentation, Automation & the New Org Chart",
    category: "Future of Work",
    date: "April 14, 2025",
    excerpt:
      "AI isn't replacing jobs wholesale—it's restructuring them. Leaders who design human-AI collaboration now will have a decisive talent and productivity advantage within three years.",
  },
];

const categoryColors: Record<string, string> = {
  "AI Strategy": "text-[#D4AF37] border-[#D4AF37]/40 bg-[#D4AF37]/10",
  "Computer Vision": "text-blue-400 border-blue-400/40 bg-blue-400/10",
  "LLMs & NLP": "text-purple-400 border-purple-400/40 bg-purple-400/10",
  "AI Agents": "text-emerald-400 border-emerald-400/40 bg-emerald-400/10",
  "Healthcare AI": "text-rose-400 border-rose-400/40 bg-rose-400/10",
  "Chatbots": "text-cyan-400 border-cyan-400/40 bg-cyan-400/10",
  "Data Science": "text-indigo-400 border-indigo-400/40 bg-indigo-400/10",
  "Operations": "text-orange-400 border-orange-400/40 bg-orange-400/10",
  "AI Consulting": "text-[#D4AF37] border-[#D4AF37]/40 bg-[#D4AF37]/10",
  "Future of Work": "text-teal-400 border-teal-400/40 bg-teal-400/10",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#050816]">
      {/* Hero */}
      <section className="relative pt-24 pb-20 px-6 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4AF37]/6 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-purple-600/5 rounded-full blur-[100px]" />
        </div>

        <div className="relative max-w-5xl mx-auto text-center">
          <span className="inline-block mb-4 px-4 py-1.5 border border-[#D4AF37]/30 text-[#D4AF37] text-xs tracking-[0.3em] uppercase font-medium">
            Optivra Intelligence
          </span>
          <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="text-white">AI Insights &</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37]">
              Strategy
            </span>
          </h1>
          <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Practical intelligence on AI automation, enterprise LLMs, computer vision, and building
            AI systems that deliver measurable business outcomes.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link
              href="/"
              className="text-xs tracking-[0.2em] uppercase text-gray-500 hover:text-[#D4AF37] transition-colors"
            >
              ← Back to Home
            </Link>
            <span className="text-white/20">|</span>
            <span className="text-xs tracking-[0.2em] uppercase text-gray-500">
              {posts.length} Articles Published
            </span>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Blog Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {posts.map((post, i) => (
              <article
                key={post.slug}
                className="group relative bg-white/5 border border-white/10 p-6 hover:border-[#D4AF37]/30 transition-all duration-300 hover:bg-white/[0.07] backdrop-blur-sm flex flex-col"
              >
                {/* Top accent line on hover */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D4AF37]/0 to-transparent group-hover:via-[#D4AF37]/60 transition-all duration-500" />

                <div className="flex items-start justify-between gap-3 mb-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-1 text-[10px] font-semibold tracking-[0.15em] uppercase border rounded-sm ${categoryColors[post.category] || "text-gray-400 border-gray-400/40 bg-gray-400/10"}`}
                  >
                    {post.category}
                  </span>
                  <span className="text-[11px] text-gray-600 shrink-0 pt-1">{post.date}</span>
                </div>

                <h2 className="text-white font-semibold text-base leading-snug mb-3 group-hover:text-[#D4AF37] transition-colors duration-300 line-clamp-3">
                  {post.title}
                </h2>

                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1 mb-5">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-[10px] text-gray-600 tracking-widest uppercase font-medium">
                    #{String(i + 1).padStart(2, "0")}
                  </span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="flex items-center gap-2 text-xs text-[#D4AF37] hover:text-white transition-colors duration-200 font-semibold tracking-wider uppercase group/link"
                    aria-label={`Read article: ${post.title}`}
                  >
                    Read More
                    <svg
                      className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <div className="border border-[#D4AF37]/20 bg-white/[0.02] p-10 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent pointer-events-none" />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to Turn These Insights Into{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">
                  Results?
                </span>
              </h2>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Book a free 30-minute AI strategy call with our team. No slides, no pitch—
                just a focused conversation about your specific challenges.
              </p>
              <a
                href="https://calendly.com/hello-optivra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#D4AF37] text-black font-bold text-xs tracking-[0.2em] uppercase hover:bg-white transition-colors duration-200"
              >
                Book Free AI Strategy Call
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
