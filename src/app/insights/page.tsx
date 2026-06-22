import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  metadataBase: new URL("https://optivra.in"),
  title: "AI Insights & Research | Optivra",
  description:
    "Expert guides on AI agents, machine learning, computer vision, automation, and MVP development for startups and enterprises.",
  keywords: [
    "AI consulting blog",
    "AI agents guide",
    "AI for startups",
    "MVP cost guide",
    "automation playbook",
    "computer vision use cases",
  ],
  openGraph: {
    title: "AI Insights & Research | Optivra",
    description:
      "Expert guides on AI, ML, computer vision, and automation for startups and enterprises.",
    type: "website",
    url: "https://optivra.in/insights",
  },
};

const articles = [
  {
    category: "AI Agents",
    title: "The Complete Guide to Building Production-Ready AI Agents in 2025",
    description:
      "From LangChain to custom RAG pipelines — learn how to architect AI agents that actually work in enterprise environments, not just demos.",
    readTime: "18 min read",
    slug: "complete-guide-ai-agents-2025",
    featured: true,
  },
  {
    category: "AI for Startups",
    title: "How Startups Can Compete with Enterprise AI on a $50K Budget",
    description:
      "A tactical breakdown of the exact AI stack early-stage startups should use to maximize ROI without burning their runway.",
    readTime: "12 min read",
    slug: "ai-startups-50k-budget",
    featured: true,
  },
  {
    category: "MVP Development",
    title: "The Real Cost of Building an AI-Powered MVP in 2025",
    description:
      "Detailed cost breakdown across engineering, infrastructure, model training, and go-to-market. No fluff, just real numbers.",
    readTime: "10 min read",
    slug: "ai-mvp-cost-guide-2025",
    featured: true,
  },
  {
    category: "Computer Vision",
    title: "10 Computer Vision Use Cases Generating Millions in ROI Right Now",
    description:
      "Quality inspection, predictive maintenance, retail analytics — the concrete computer vision applications making real business impact.",
    readTime: "14 min read",
    slug: "computer-vision-use-cases-roi",
    featured: false,
  },
  {
    category: "Automation",
    title: "The Enterprise Automation Playbook: From RPA to Intelligent AI Workflows",
    description:
      "A comprehensive framework for mapping, prioritizing, and implementing automation initiatives across operations, finance, and HR.",
    readTime: "16 min read",
    slug: "enterprise-automation-playbook",
    featured: false,
  },
  {
    category: "Data Science",
    title: "Building a Data Science Team from Scratch: The Startup Playbook",
    description:
      "When to hire your first data scientist, what stack to choose, and how to build a data culture that drives decisions.",
    readTime: "11 min read",
    slug: "data-science-team-startup-playbook",
    featured: false,
  },
];

const categories = [
  "All",
  "AI Agents",
  "AI for Startups",
  "Computer Vision",
  "Automation",
  "Data Science",
  "MVP Development",
  "Cloud Engineering",
];

export default function InsightsPage() {
  const featuredArticles = articles.filter((a) => a.featured);
  const regularArticles = articles.filter((a) => !a.featured);

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero */}
      <section className="border-b border-white/10 py-32">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-[10px] tracking-[0.4em] uppercase text-primary font-bold mb-6">
              Optivra Insights
            </p>
            <h1 className="text-5xl md:text-7xl font-sans font-black text-white mb-6 leading-tight">
              AI Research &{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #D4AF37 0%, #F3E5AB 50%, #D4AF37 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Playbooks.
              </span>
            </h1>
            <p className="text-xl text-gray-400 font-light leading-relaxed mb-10">
              Tactical guides, deep dives, and research from the Optivra team to help
              you build and scale AI products faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://calendly.com/hello-optivra"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-black font-bold tracking-widest uppercase text-xs hover:bg-white transition-all duration-300"
              >
                Book Free AI Strategy Call <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-bold tracking-widest uppercase text-xs hover:border-primary hover:text-primary transition-all duration-300"
              >
                Get Technical Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <div className="border-b border-white/10 overflow-x-auto">
        <div className="container mx-auto px-6">
          <div className="flex gap-8 py-5 min-w-max">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`text-[11px] tracking-widest uppercase font-bold transition-colors whitespace-nowrap ${
                  cat === "All"
                    ? "text-primary border-b-2 border-primary pb-1"
                    : "text-gray-500 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      <section className="py-20 border-b border-white/10">
        <div className="container mx-auto px-6">
          <h2 className="text-[10px] tracking-[0.4em] uppercase text-gray-500 font-bold mb-12">
            Featured Guides
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featuredArticles.map((article, i) => (
              <Link
                key={i}
                href={`/insights/${article.slug}`}
                className="group border border-white/10 bg-[#050505] p-8 hover:border-primary/50 transition-all duration-500 block"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-primary font-bold bg-primary/10 px-3 py-1 border border-primary/20">
                    {article.category}
                  </span>
                  <span className="text-[10px] text-gray-600">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-sans font-bold text-white mb-4 group-hover:text-primary transition-colors leading-snug">
                  {article.title}
                </h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed mb-8">
                  {article.description}
                </p>
                <div className="flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase group-hover:gap-4 transition-all">
                  Read Guide <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-[10px] tracking-[0.4em] uppercase text-gray-500 font-bold mb-12">
            Latest Articles
          </h2>
          <div className="flex flex-col gap-0 divide-y divide-white/10">
            {regularArticles.map((article, i) => (
              <Link
                key={i}
                href={`/insights/${article.slug}`}
                className="group flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 hover:text-primary transition-colors"
              >
                <div className="flex-1">
                  <span className="text-[9px] tracking-[0.3em] uppercase text-primary font-bold mb-3 block">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-sans font-bold text-white group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-[10px] text-gray-600 whitespace-nowrap">
                    {article.readTime}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-primary group-hover:translate-x-2 transition-all" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-white/10 py-20 bg-[#050505]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-4">
            Get AI Insights in Your Inbox
          </h2>
          <p className="text-gray-400 mb-10 max-w-xl mx-auto">
            Join 2,400+ founders and engineering leaders who get weekly AI playbooks, case studies, and tactical guides from Optivra.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your work email"
              className="flex-1 bg-transparent border border-white/20 px-6 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-primary text-black font-bold text-xs tracking-widest uppercase hover:bg-white transition-colors whitespace-nowrap"
            >
              Subscribe Free
            </button>
          </form>
          <p className="text-gray-600 text-xs mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Back link */}
      <div className="container mx-auto px-6 py-8 border-t border-white/10">
        <Link href="/" className="text-gray-600 hover:text-primary text-xs tracking-widest uppercase transition-colors">
          ← Back to Optivra Home
        </Link>
      </div>
    </div>
  );
}
