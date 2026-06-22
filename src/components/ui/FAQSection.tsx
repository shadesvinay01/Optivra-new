"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is AI consulting and how can it benefit my business?",
    answer: "AI consulting involves assessing your current operations, identifying inefficiencies, and designing custom artificial intelligence solutions to automate workflows, reduce costs, and accelerate revenue. Our enterprise AI consulting helps you scale faster than your competitors."
  },
  {
    question: "How much does custom AI development cost?",
    answer: "The cost of AI development varies based on the complexity, data availability, and required integrations. Simple MVP automation can start at $10k, while full-scale enterprise AI ecosystems with custom LLM fine-tuning can range from $50k to $250k+. We offer transparent, value-based pricing."
  },
  {
    question: "How long does it take to deploy an AI solution?",
    answer: "Our accelerated engineering pipeline allows us to deploy AI MVPs in 4 to 8 weeks. Enterprise-grade deployments with complex legacy system integrations typically take 3 to 6 months depending on data readiness and compliance requirements."
  },
  {
    question: "What industries do you serve?",
    answer: "We specialize in Healthcare, E-Commerce, Logistics, Financial Services (Fintech), SaaS, and Manufacturing. Our AI agents and computer vision models are tailored specifically to the regulatory and operational demands of these sectors."
  },
  {
    question: "Do you offer CTO as a Service?",
    answer: "Yes, our fractional CTO services provide startups and enterprises with high-level technical leadership, architecture design, and team scaling without the overhead of a full-time executive hire."
  },
  {
    question: "How do you ensure data privacy and security in AI models?",
    answer: "We employ strict SOC2 and HIPAA compliant architectures. We use zero-retention API policies, on-premise deployment options, and private cloud architectures (AWS/Azure) to ensure your proprietary data never leaks into public LLMs."
  },
  {
    question: "Can you fine-tune open-source models like Llama 3?",
    answer: "Absolutely. We specialize in fine-tuning open-source models (Llama, Mistral) on your private data to create highly specialized, cost-effective generative AI solutions that you completely own."
  },
  {
    question: "What is an autonomous AI agent?",
    answer: "An autonomous AI agent is a system that can perceive its environment, make decisions using an LLM, and execute actions via APIs without human intervention. We build agents for customer support, data entry, and sales outreach."
  },
  {
    question: "Do you integrate AI into existing legacy systems?",
    answer: "Yes, we excel at bridging the gap between legacy monoliths and modern AI capabilities. We build robust API layers and middleware to seamlessly integrate predictive models into your existing ERP or CRM."
  },
  {
    question: "What is RAG (Retrieval-Augmented Generation)?",
    answer: "RAG is an AI framework that connects Large Language Models to your private databases. This allows the AI to give highly accurate, factual answers based exclusively on your company documents, eliminating hallucinations."
  },
  {
    question: "How do you measure the ROI of an AI project?",
    answer: "We establish clear KPIs during the Discovery phase. ROI is typically measured through hours of manual work saved, percentage increase in processing speed, reduction in error rates, or direct revenue uplift from personalization."
  },
  {
    question: "Do you provide post-launch support and maintenance?",
    answer: "Yes, our Scale phase includes continuous model monitoring, retraining to prevent data drift, performance optimization, and 24/7 technical support."
  },
  {
    question: "What technologies do your machine learning engineers use?",
    answer: "We leverage a modern tech stack including Python, PyTorch, TensorFlow, CUDA, Next.js, React, Node.js, AWS SageMaker, GCP Vertex AI, and vector databases like Pinecone and Weaviate."
  },
  {
    question: "Can AI really replace my customer support team?",
    answer: "While AI won't replace your entire team, our autonomous support agents can deflect 70-80% of routine queries instantly, allowing your human agents to focus exclusively on complex, high-value customer interactions."
  },
  {
    question: "What is Computer Vision used for?",
    answer: "Computer Vision enables machines to understand and process visual data. We deploy it for automated quality inspection in manufacturing, facial recognition for security, and real-time package tracking in logistics."
  },
  {
    question: "Are your AI solutions biased?",
    answer: "We implement rigorous bias testing and fairness constraints during the model training phase. We constantly monitor outputs to ensure our AI systems make equitable, neutral, and accurate decisions."
  },
  {
    question: "How do we start a project with Optivra?",
    answer: "You can start by booking a free Strategy Call. We will discuss your current bottlenecks, evaluate if AI is the right solution, and outline a high-level roadmap and cost estimate."
  },
  {
    question: "Do I own the intellectual property of the custom software?",
    answer: "Yes, upon full payment and project completion, all intellectual property rights to the custom software and fine-tuned models are fully transferred to your organization."
  },
  {
    question: "What is MVP Development?",
    answer: "Minimum Viable Product (MVP) development is the rapid creation of a core software product with enough features to attract early adopters and validate a product idea early in the product development cycle."
  },
  {
    question: "Why should we choose Optivra over traditional agencies?",
    answer: "Traditional agencies rely on bloated teams and legacy tech. Optivra uses native AI engineers, modern serverless architecture, and an agile methodology to deliver superior products in weeks, not years."
  },
  {
    question: "Can you help with Cloud Migration?",
    answer: "Yes, our Cloud Engineering team handles seamless migrations from on-premise to AWS, GCP, or Azure, optimizing for security, scalability, and cost-efficiency."
  },
  {
    question: "Do you build mobile applications?",
    answer: "Yes, we build high-performance cross-platform mobile apps using React Native and Flutter, seamlessly integrated with robust AI-powered backends."
  },
  {
    question: "What is Predictive Analytics?",
    answer: "Predictive analytics uses historical data, statistical algorithms, and machine learning to identify the likelihood of future outcomes, helping businesses optimize inventory, forecast sales, and reduce churn."
  },
  {
    question: "How do you handle rapid scaling?",
    answer: "We build all our systems using Kubernetes and serverless architectures on auto-scaling cloud infrastructure, ensuring your application can handle 10x traffic spikes flawlessly."
  },
  {
    question: "Do you offer an AI Readiness Audit?",
    answer: "Yes, we offer an in-depth AI Readiness Audit where we analyze your data infrastructure, security protocols, and operational workflows to identify high-impact AI integration points."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="container mx-auto px-6 py-24 border-t border-white/10" id="faq">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-[0.3em]">Knowledge Base</p>
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6">Frequently Asked <span className="text-primary italic">Questions.</span></h2>
        <p className="text-gray-400 text-lg font-light">Everything you need to know about our enterprise AI engineering, pricing, and deployment processes.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-white/10">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
            >
              <span className={`text-lg md:text-xl font-bold font-sans transition-colors ${openIndex === index ? "text-primary" : "text-white group-hover:text-primary"}`}>
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="flex-shrink-0 ml-4"
              >
                <ChevronDown className={`w-6 h-6 ${openIndex === index ? "text-primary" : "text-gray-500 group-hover:text-primary"}`} />
              </motion.div>
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <p className="pb-6 text-gray-400 text-sm md:text-base leading-relaxed font-light">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
      
      {/* FAQ Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  );
}
