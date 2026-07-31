"use client";

import React from "react";
import { Cpu, Globe, Rocket, ShieldCheck, Zap, Server, Code, Database, Check, HelpCircle, Layers } from "lucide-react";

interface ServiceDetail {
  id: string;
  name: string;
  category: string;
  overview: string;
  problemsSolved: string[];
  features: string[];
  deliverables: string[];
  techStack: string;
  timeline: string;
  startingPriceUSD: string;
  addons: string[];
  faq: { q: string; a: string };
}

const servicesData: ServiceDetail[] = [
  {
    id: "s1",
    name: "AI Strategy & Consulting",
    category: "AI & Strategy",
    overview: "Strategic AI roadmapping, feasibility assessment, and ROI alignment for enterprise adoption.",
    problemsSolved: ["Unclear AI ROI", "Misaligned tech stack", "Lack of AI roadmap"],
    features: ["AI Readiness Audit", "Technical Feasibility Study", "Vendor Selection", "ROI Forecast"],
    deliverables: ["AI Strategic Blueprint", "Risk Assessment Report", "Implementation Roadmap"],
    techStack: "OpenAI, Anthropic, Gemini, Architecture Specs",
    timeline: "1 - 2 Weeks",
    startingPriceUSD: "$1,499 USD",
    addons: ["Quarterly Advisory Retainer", "Boardroom Presentation Deck"],
    faq: { q: "How quickly can we see ROI?", a: "Our roadmap identifies quick wins within 30-60 days of phase one deployment." }
  },
  {
    id: "s2",
    name: "AI Agent Development",
    category: "Autonomous Systems",
    overview: "Autonomous multi-agent systems designed to execute complex, multi-step business operations independently.",
    problemsSolved: ["Manual workflow bottlenecks", "High operational error rates", "Slow response SLA"],
    features: ["Autonomous Reasoning Engine", "Multi-Agent Coordination (CrewAI/LangGraph)", "Tool & API Calling"],
    deliverables: ["Deployed Agent System", "API Endpoints", "Execution Logs Dashboard"],
    techStack: "Python, LangGraph, CrewAI, OpenAI, FastApi",
    timeline: "3 - 5 Weeks",
    startingPriceUSD: "$3,499 USD",
    addons: ["Human-in-the-loop Approval Portal", "Custom Tool Integrations"],
    faq: { q: "Can agents interact with legacy software?", a: "Yes, via REST APIs, webhooks, or custom RPA adapters." }
  },
  {
    id: "s3",
    name: "AI Chatbots & Conversational AI",
    category: "Conversational AI",
    overview: "Context-aware conversational assistants trained on enterprise knowledge bases for 24/7 customer & internal support.",
    problemsSolved: ["High support ticket volume", "Delayed customer response times", "Repetitive support queries"],
    features: ["Omnichannel Support (Web, WhatsApp, Slack)", "Intent Recognition", "Human Handoff"],
    deliverables: ["Chatbot Widget", "Omnichannel Router", "Conversation Analytics Dashboard"],
    techStack: "Next.js, LangChain, Pinecone, OpenAI, WhatsApp API",
    timeline: "2 - 3 Weeks",
    startingPriceUSD: "$1,999 USD",
    addons: ["Voice Input/Output Module", "Multi-lingual Live Translation"],
    faq: { q: "Does it support privacy compliance?", a: "Yes, data is encrypted and zero-retention API policies are enforced." }
  },
  {
    id: "s4",
    name: "AI Voice Agents",
    category: "Conversational AI",
    overview: "Natural human-like voice AI agents for outbound sales qualification and inbound customer service calls.",
    problemsSolved: ["High call center costs", "Inconsistent phone support quality", "Missed inbound leads"],
    features: ["Sub-500ms Latency Response", "Telephony Gateway Integration", "Real-Time Sentiment Analysis"],
    deliverables: ["SIP/Twilio Phone Integration", "Voice Script Pipeline", "Call Transcripts & Analytics"],
    techStack: "Python, ElevenLabs, Vapi, Twilio, OpenAI, WebSockets",
    timeline: "3 - 4 Weeks",
    startingPriceUSD: "$2,999 USD",
    addons: ["CRM Auto-Sync", "Interactive Voice Menu Routing"],
    faq: { q: "How realistic does the voice sound?", a: "We use state-of-the-art neural voice models that match natural human tone and pacing." }
  },
  {
    id: "s5",
    name: "AI Automation & Workflow Engineering",
    category: "Automation",
    overview: "End-to-end process automation connecting disparate systems, databases, and third-party APIs.",
    problemsSolved: ["Data entry errors", "Manual document handoffs", "Siloed applications"],
    features: ["Trigger-based Workflows", "Automated Exception Handling", "Audit Logs"],
    deliverables: ["n8n / Make / Custom Pipelines", "Integration Webhooks", "Monitoring Alerts"],
    techStack: "Python, Node.js, n8n, Zapier, PostgreSQL, Docker",
    timeline: "2 - 3 Weeks",
    startingPriceUSD: "$2,499 USD",
    addons: ["Real-time Slack/Teams Alerts", "Custom Database Sync Adapters"],
    faq: { q: "What happens if a third-party API goes down?", a: "Automated retry queues and alert notifications ensure zero data loss." }
  },
  {
    id: "s6",
    name: "Computer Vision & Visual Document OCR",
    category: "Computer Vision",
    overview: "Automated document parsing, object detection, and visual inspection using deep learning models.",
    problemsSolved: ["Manual invoice/PDF processing", "Quality control bottlenecks", "Visual defect inspection"],
    features: ["Structured Document Extraction", "Bounding Box Object Detection", "Real-Time Video Stream Parsing"],
    deliverables: ["Document Parser API", "Trained Vision Model Weights", "Admin Processing Portal"],
    techStack: "PyTorch, OpenCV, YOLOv8, Tesseract, FastApi, AWS Textract",
    timeline: "3 - 5 Weeks",
    startingPriceUSD: "$3,999 USD",
    addons: ["Mobile Camera SDK", "Edge Device Deployment (Jetson)"],
    faq: { q: "What document formats are supported?", a: "PDFs, scanned images, handwritten notes, invoices, and IDs." }
  },
  {
    id: "s7",
    name: "Generative AI & LLM Fine-Tuning",
    category: "GenAI & LLM",
    overview: "Custom domain-specific fine-tuning of open-source LLMs (Llama, Mistral) for enterprise privacy & accuracy.",
    problemsSolved: ["Hallucinations in generic LLMs", "Data privacy concerns with public APIs", "Domain-specific terminology"],
    features: ["LoRA / QLoRA Fine-Tuning", "Dataset Curation", "Evaluation Benchmarks"],
    deliverables: ["Fine-Tuned Model Weights", "Private Model Hosting Pipeline", "Eval Benchmark Report"],
    techStack: "PyTorch, HuggingFace, Llama 3, Mistral, Unsloth, vLLM",
    timeline: "4 - 6 Weeks",
    startingPriceUSD: "$4,999 USD",
    addons: ["On-Premise GPU Cluster Setup", "Continuous Reinforcement Learning (RLHF)"],
    faq: { q: "Why fine-tune instead of prompting?", a: "Fine-tuning improves specialized domain accuracy while significantly reducing per-token API costs." }
  },
  {
    id: "s8",
    name: "RAG Systems (Retrieval-Augmented Generation)",
    category: "GenAI & LLM",
    overview: "Enterprise vector search and knowledge retrieval engines enabling instant, grounded answers from internal documents.",
    problemsSolved: ["Information retrieval lag", "Hallucinated answers", "Unorganized knowledge base"],
    features: ["Hybrid Vector & Keyword Search", "Role-Based Document Access", "Citation & Source Linking"],
    deliverables: ["Vector Database Pipeline", "RAG API & Search Interface", "Ingestion Connectors"],
    techStack: "LangChain, LlamaIndex, Pinecone, Qdrant, PostgreSQL (pgvector)",
    timeline: "2 - 4 Weeks",
    startingPriceUSD: "$2,999 USD",
    addons: ["Confluence / Google Drive Auto-Sync", "Multi-Modal RAG (Images + Text)"],
    faq: { q: "How does RAG prevent hallucinations?", a: "Every answer is strictly constrained to retrieved context chunks with direct source citations." }
  },
  {
    id: "s9",
    name: "Custom SaaS Development",
    category: "Software Engineering",
    overview: "End-to-end development of multi-tenant B2B/B2C SaaS applications from architecture to deployment.",
    problemsSolved: ["Slow MVP launch time", "Scalability bottlenecks", "Clunky user interfaces"],
    features: ["Multi-Tenancy Architecture", "Stripe / Razorpay Subscription Billing", "Role-Based Access Control"],
    deliverables: ["Production Web App", "Full Source Code", "Admin Control Panel", "Deployment Pipeline"],
    techStack: "Next.js 16, React, TypeScript, Node.js, PostgreSQL, TailwindCSS",
    timeline: "6 - 10 Weeks",
    startingPriceUSD: "$6,999 USD",
    addons: ["Mobile Companion App", "Enterprise Single Sign-On (SAML/Okta)"],
    faq: { q: "Do we own the full source code?", a: "Yes, 100% intellectual property and code repository ownership is transferred upon delivery." }
  },
  {
    id: "s10",
    name: "Cloud, DevOps & MLOps Infrastructure",
    category: "Infrastructure",
    overview: "Containerized, auto-scaling cloud infrastructure, Terraform IaC, and MLOps model monitoring pipelines.",
    problemsSolved: ["Server downtime", "Manual deployment errors", "Unmonitored AI model drift"],
    features: ["Kubernetes Auto-Scaling", "Terraform Infrastructure as Code", "Model Monitoring & Drift Detection"],
    deliverables: ["AWS / GCP Cloud Setup", "CI/CD Pipeline Scripts", "Grafana / Prometheus Dashboards"],
    techStack: "AWS, GCP, Docker, Kubernetes, Terraform, MLflow, GitHub Actions",
    timeline: "2 - 4 Weeks",
    startingPriceUSD: "$2,499 USD",
    addons: ["24/7 Managed Cloud SLA", "Cost Optimization Audit"],
    faq: { q: "Which cloud providers do you support?", a: "AWS, Google Cloud Platform, Microsoft Azure, DigitalOcean, and private clouds." }
  }
];

export default function ServicesCatalogDoc() {
  return (
    <div className="space-y-10 text-gray-900 leading-relaxed font-sans">
      {/* Header Banner */}
      <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-12 space-y-3 shadow-xl border border-slate-800">
        <span className="px-3 py-1 bg-[#D4AF37] text-slate-950 text-xs font-bold rounded uppercase tracking-widest">
          Services & Solutions Catalog • USD Edition
        </span>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">Enterprise Services Catalog</h1>
        <p className="text-sm text-gray-300 max-w-3xl">
          Complete standardized catalog detailing business problems solved, key features, deliverables, technology stack, timelines, and USD ($) starting rates across all Optivra service offerings.
        </p>
      </div>

      {/* Services Breakdown */}
      <div className="space-y-10">
        {servicesData.map((srv, idx) => (
          <div key={srv.id} className="p-6 border border-gray-200 rounded-2xl bg-white space-y-4 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gray-200 pb-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-white bg-slate-950 px-2 py-0.5 rounded">
                    0{idx + 1}
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">{srv.name}</h2>
                </div>
                <span className="text-[11px] font-semibold text-[#D4AF37] uppercase tracking-wider block mt-1">
                  Category: {srv.category}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-mono bg-slate-100 text-slate-800 px-3 py-1 rounded-lg border border-gray-200">
                  Est. {srv.timeline}
                </span>
                <span className="text-xs font-bold font-mono bg-[#D4AF37]/20 text-yellow-900 border border-[#D4AF37]/40 px-3 py-1 rounded-lg">
                  Starting at {srv.startingPriceUSD}
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-700 font-medium leading-relaxed">{srv.overview}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {/* Problems Solved */}
              <div className="p-3.5 bg-red-50/60 border border-red-100 rounded-xl space-y-1.5">
                <span className="font-bold text-red-950 uppercase tracking-wider text-[11px] block">
                  Business Problems Solved
                </span>
                <ul className="space-y-1 text-gray-700">
                  {srv.problemsSolved.map((p, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-1.5">
                      <span className="text-red-500">•</span> {p}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Features */}
              <div className="p-3.5 bg-slate-50 border border-gray-200 rounded-xl space-y-1.5">
                <span className="font-bold text-slate-900 uppercase tracking-wider text-[11px] block">
                  Core Features
                </span>
                <ul className="space-y-1 text-gray-700">
                  {srv.features.map((f, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs pt-1">
              <div>
                <span className="font-bold text-slate-900 block mb-1 uppercase tracking-wider text-[11px]">
                  Deliverables:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {srv.deliverables.map((d, dIdx) => (
                    <span key={dIdx} className="bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded text-[11px] font-medium">
                      ✓ {d}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-bold text-slate-900 block mb-1 uppercase tracking-wider text-[11px]">
                  Technology Stack:
                </span>
                <span className="text-gray-600 font-mono text-[11px] block bg-gray-50 p-2 rounded border border-gray-200">
                  {srv.techStack}
                </span>
              </div>
            </div>

            {/* FAQ Item */}
            <div className="p-3 bg-amber-50/50 border border-amber-200/60 rounded-xl text-xs space-y-1">
              <div className="font-bold text-amber-950 flex items-center gap-1.5">
                <HelpCircle className="w-3.5 h-3.5 text-amber-600" /> FAQ: {srv.faq.q}
              </div>
              <div className="text-amber-900 text-[11px] pl-5">{srv.faq.a}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
