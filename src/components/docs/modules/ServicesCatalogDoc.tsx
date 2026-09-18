"use client";

import React from "react";
import { Cpu, Globe, Rocket, ShieldCheck, Zap, Server, Code, Database, Check, HelpCircle, Layers, CreditCard, Sparkles } from "lucide-react";

interface ServiceItem {
  num: string;
  name: string;
  whatItIs: string;
  useCases: string[];
  deliverables: string[];
  pricingUSD: string;
  pricingGBP: string;
  pricingEUR: string;
  disclaimer: string;
}

const serviceCatalogItems: ServiceItem[] = [
  {
    num: "01",
    name: "AI & Machine Learning",
    whatItIs: "Custom machine learning models, predictive analytics pipelines, statistical modeling, and MLOps deployment.",
    useCases: ["Predictive customer churn & demand forecasting", "Automated anomaly & fraud detection", "Custom model training & data pipelines"],
    deliverables: ["Trained model artifacts & weights", "Prediction REST API / microservice", "MLOps monitoring & evaluation pipeline"],
    pricingUSD: "$5,000–$15,000+",
    pricingGBP: "£4,100–£12,500+",
    pricingEUR: "€4,700–€14,000+",
    disclaimer: "Pricing depends on dataset complexity, feature engineering requirements, and model accuracy targets."
  },
  {
    num: "02",
    name: "Generative AI & LLM Applications",
    whatItIs: "Domain-tailored Generative AI integration, LLM fine-tuning, prompt orchestration, and custom generative tools.",
    useCases: ["Domain-specific text & content generation", "Automated document summary & parsing", "Custom fine-tuned open-source models"],
    deliverables: ["Fine-tuned model / API gateway", "Evaluation benchmarks & prompt suite", "Integration with web/mobile backends"],
    pricingUSD: "$4,500–$12,000+",
    pricingGBP: "£3,700–£10,000+",
    pricingEUR: "€4,200–€11,000+",
    disclaimer: "Token usage, API runtime costs, and GPU hosting infrastructure are billed directly by the cloud provider."
  },
  {
    num: "03",
    name: "AI Agents & Business Automation (Core Offer)",
    whatItIs: "Autonomous multi-agent systems and intelligent workflow automation connecting business tools and APIs.",
    useCases: ["Multi-agent operational task execution", "Customer support & lead triage automation", "Cross-application data sync & webhooks"],
    deliverables: ["Deployed Agent workflow pipeline", "n8n / LangGraph execution engine", "Monitoring & alert dashboard"],
    pricingUSD: "Starting from $3,500 ($3,500–$8,000 for Sprints, $4,500–$12,000+ for Custom Agents)",
    pricingGBP: "Starting from £2,900 (£2,900–£6,500 for Sprints, £3,700–£10,000+ for Custom Agents)",
    pricingEUR: "Starting from €3,300 (€3,300–€7,500 for Sprints, €4,200–€11,000+ for Custom Agents)",
    disclaimer: "Indicative pricing. Final quote confirmed via Statement of Work based on agent actions and API complexity."
  },
  {
    num: "04",
    name: "RAG & Knowledge Systems",
    whatItIs: "Enterprise vector search engines and retrieval-augmented generation systems for proprietary knowledge bases.",
    useCases: ["Internal knowledge search across PDFs/Notion/Drive", "Grounded AI chat with direct source citations", "Role-based document permission search"],
    deliverables: ["Vector DB ingestion pipeline (Qdrant/Pinecone/pgvector)", "RAG search API & frontend widget", "Source citation & security layer"],
    pricingUSD: "$3,500–$10,000+",
    pricingGBP: "£2,900–£8,300+",
    pricingEUR: "€3,300–€9,300+",
    disclaimer: "Document volume, indexing frequency, and security access controls affect total scope."
  },
  {
    num: "05",
    name: "SaaS & MVP Development (Core Offer)",
    whatItIs: "End-to-end MVP design and full-stack development for startups and businesses launching modern digital products.",
    useCases: ["B2B multi-tenant web platforms", "Subscribers billing & dashboard portals", "Rapid market validation launches"],
    deliverables: ["Full production Next.js/React codebase", "Authentication & RBAC setup", "Stripe/Razorpay billing integration"],
    pricingUSD: "Starting from $5,000 ($5,000–$15,000+)",
    pricingGBP: "Starting from £4,100 (£4,100–£12,500+)",
    pricingEUR: "Starting from €4,700 (€4,700–€14,000+)",
    disclaimer: "Includes core feature set agreed in SOW. Additional features quoted separately."
  },
  {
    num: "06",
    name: "Full-Stack Product Engineering",
    whatItIs: "Custom software engineering across modern web, mobile, and API architectures with clean code standards.",
    useCases: ["High-performance web applications", "Cross-platform mobile apps", "Scalable REST & GraphQL microservices"],
    deliverables: ["Production-ready repository", "CI/CD deployment pipeline", "Technical documentation & API specs"],
    pricingUSD: "$4,000–$15,000+",
    pricingGBP: "£3,300–£12,500+",
    pricingEUR: "€3,700–€14,000+",
    disclaimer: "Pricing based on architecture scope, team pod allocation, and delivery timeframe."
  },
  {
    num: "07",
    name: "Computer Vision",
    whatItIs: "Visual document OCR parsing, image classification, object detection, and visual inspection systems.",
    useCases: ["Automated invoice & document OCR parsing", "Visual quality control & defect identification", "Real-time object detection pipelines"],
    deliverables: ["Trained vision model pipeline", "Document parsing API engine", "Admin review portal"],
    pricingUSD: "$5,000–$15,000+",
    pricingGBP: "£4,100–£12,500+",
    pricingEUR: "€4,700–€14,000+",
    disclaimer: "Requires sample training dataset or annotated images for custom vision models."
  },
  {
    num: "08",
    name: "Data & Analytics",
    whatItIs: "Data warehousing, ETL pipeline engineering, business intelligence dashboards, and analytics integration.",
    useCases: ["Centralized data warehouse pipeline", "Interactive executive dashboards", "Automated ETL/ELT data pipelines"],
    deliverables: ["Data pipeline architecture", "Custom BI dashboards (Metabase/Looker/Superset)", "Data governance documentation"],
    pricingUSD: "$3,500–$10,000+",
    pricingGBP: "£2,900–£8,300+",
    pricingEUR: "€3,300–€9,300+",
    disclaimer: "Infrastructure hosting costs billed directly by cloud warehouse provider."
  },
  {
    num: "09",
    name: "Cloud & DevOps",
    whatItIs: "Cloud architecture setup, containerization, Infrastructure as Code (Terraform), and CI/CD automation.",
    useCases: ["AWS / GCP cloud infrastructure migration", "Kubernetes / Docker container orchestration", "Zero-downtime deployment pipelines"],
    deliverables: ["Terraform IaC scripts", "Configured CI/CD pipeline", "Monitoring & logging setup"],
    pricingUSD: "$3,000–$8,000+",
    pricingGBP: "£2,500–£6,500+",
    pricingEUR: "€2,800–£7,500+",
    disclaimer: "Does not include third-party cloud infrastructure hosting charges."
  },
  {
    num: "10",
    name: "Fractional CTO / AI Strategy",
    whatItIs: "Senior technical advisory, AI architecture roadmapping, vendor selection, and code audit leadership.",
    useCases: ["Technical feasibility assessment for founders", "AI adoption roadmap & architecture review", "Engineering team oversight"],
    deliverables: ["Architecture blueprint & tech stack selection", "Strategic AI roadmap document", "Bi-weekly strategy reviews"],
    pricingUSD: "$750–$1,500 (Discovery) / $3,500–$6,500/mo Retainer",
    pricingGBP: "£600–£1,200 (Discovery) / £2,900–£5,400/mo Retainer",
    pricingEUR: "€700–€1,400 (Discovery) / €3,300–€6,000/mo Retainer",
    disclaimer: "Retainer structures structured according to weekly hours and advisory scope."
  }
];

export default function ServicesCatalogDoc() {
  return (
    <div className="space-y-10 text-gray-900 leading-relaxed font-sans max-w-[800px] mx-auto bg-white p-2">
      {/* Header Banner */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 sm:p-12 space-y-4 shadow-2xl border border-slate-800">
        <div className="flex justify-between items-start">
          <span className="px-3.5 py-1.5 bg-[#D4AF37] text-slate-950 text-xs font-black rounded-xl uppercase tracking-widest">
            OPTIVRA • 2026 INTERNATIONAL CATALOG
          </span>
          <span className="text-xs text-amber-400 font-mono">Last Updated: September 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black tracking-tight">International Services & Solutions Catalog</h1>
        <p className="text-sm text-gray-300 max-w-3xl leading-relaxed">
          Comprehensive service definitions, use cases, key deliverables, and commercial market rate cards in USD ($), GBP (£), and EUR (€) built on an efficient India-based global delivery model.
        </p>
      </div>

      {/* Scope & Pricing Disclaimer Box */}
      <div className="p-5 bg-amber-50/80 border-2 border-amber-300 rounded-2xl text-xs space-y-2 text-amber-950">
        <div className="font-extrabold uppercase tracking-wider text-sm flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-amber-600" /> Commercial Scope & Pricing Disclaimer
        </div>
        <p className="leading-relaxed">
          Pricing is indicative and depends on scope, complexity, integrations, data requirements, infrastructure, delivery timeline, and engagement model. Final pricing is confirmed through a project-specific proposal or Statement of Work.
        </p>
      </div>

      {/* Core Commercial Offers Highlight */}
      <div className="space-y-4">
        <h2 className="text-2xl font-black uppercase text-slate-900 tracking-tight border-b-2 border-slate-950 pb-2">
          Core Commercial Offers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-2">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block">OFFER 01</span>
            <h3 className="text-base font-bold">AI Automation Sprint</h3>
            <div className="text-2xl font-black text-[#D4AF37]">Starting from $3,500</div>
            <p className="text-xs text-gray-300">Rapid 2-3 week sprint for workflow automation, API integration, and process optimization.</p>
          </div>
          <div className="p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-2">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block">OFFER 02</span>
            <h3 className="text-base font-bold">Custom AI Agent / AI System</h3>
            <div className="text-2xl font-black text-[#D4AF37]">Starting from $4,500</div>
            <p className="text-xs text-gray-300">Autonomous multi-agent systems, RAG knowledge platforms, and custom AI tools.</p>
          </div>
          <div className="p-5 bg-slate-900 text-white rounded-2xl border border-slate-800 space-y-2">
            <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block">OFFER 03</span>
            <h3 className="text-base font-bold">SaaS MVP Development</h3>
            <div className="text-2xl font-black text-[#D4AF37]">Starting from $5,000</div>
            <p className="text-xs text-gray-300">Full-stack web/mobile MVP from ground up including authentication, multi-tenancy, and billing.</p>
          </div>
        </div>
        <p className="text-[11px] text-gray-500 italic">* Commercial pricing ranges: USD ($), GBP (£), and EUR (€) outlined below. Final pricing depends on project scope.</p>
      </div>

      {/* Structured 10 Services Breakdown */}
      <div className="space-y-8">
        <h2 className="text-2xl font-black uppercase text-slate-900 tracking-tight border-b-2 border-slate-950 pb-2">
          Service Offerings Catalog
        </h2>

        {serviceCatalogItems.map((srv) => (
          <div key={srv.num} className="p-6 border border-gray-200 rounded-2xl bg-white space-y-4 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-gray-200 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-xs font-black text-white bg-slate-950 px-2.5 py-1 rounded-lg">
                  {srv.num}
                </span>
                <h3 className="text-xl font-extrabold text-slate-900">{srv.name}</h3>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-bold uppercase text-slate-500 tracking-wider block">What It Is</span>
              <p className="text-xs text-gray-700 leading-relaxed">{srv.whatItIs}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 bg-slate-50 border border-gray-200 rounded-xl space-y-1.5">
                <span className="font-bold text-slate-900 uppercase tracking-wider text-[10px] block">Typical Use Cases</span>
                <ul className="space-y-1 text-gray-700">
                  {srv.useCases.map((uc, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-[#D4AF37] font-bold">•</span> {uc}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3.5 bg-slate-50 border border-gray-200 rounded-xl space-y-1.5">
                <span className="font-bold text-slate-900 uppercase tracking-wider text-[10px] block">What Optivra Delivers</span>
                <ul className="space-y-1 text-gray-700">
                  {srv.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" /> {d}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pricing Rate Box */}
            <div className="p-4 bg-slate-950 text-white rounded-xl space-y-2">
              <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-wider block">Indicative Commercial Rates</span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 font-mono text-xs">
                <div className="bg-white/10 p-2 rounded border border-white/10">
                  <span className="text-gray-400 block text-[9px] uppercase font-sans">USD Rate Card</span>
                  <span className="text-[#D4AF37] font-bold">{srv.pricingUSD}</span>
                </div>
                <div className="bg-white/10 p-2 rounded border border-white/10">
                  <span className="text-gray-400 block text-[9px] uppercase font-sans">GBP Rate Card</span>
                  <span className="text-white font-bold">{srv.pricingGBP}</span>
                </div>
                <div className="bg-white/10 p-2 rounded border border-white/10">
                  <span className="text-gray-400 block text-[9px] uppercase font-sans">EUR Rate Card</span>
                  <span className="text-white font-bold">{srv.pricingEUR}</span>
                </div>
              </div>
              <p className="text-[10px] text-gray-400 italic pt-1">{srv.disclaimer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Engagement Models Section */}
      <div className="space-y-4">
        <h2 className="text-2xl font-black uppercase text-slate-900 tracking-tight border-b-2 border-slate-950 pb-2">
          Engagement Models
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div className="p-5 border border-gray-200 rounded-2xl bg-slate-50 space-y-2">
            <div className="font-bold text-sm text-slate-900">A. Fixed-Price Project</div>
            <p className="text-gray-600">Best for clearly defined project scopes, MVPs, and specific deliverables with predetermined milestones.</p>
          </div>
          <div className="p-5 border border-gray-200 rounded-2xl bg-slate-50 space-y-2">
            <div className="font-bold text-sm text-slate-900">B. Time & Materials</div>
            <p className="text-gray-600">Ideal for evolving requirements, continuous R&D, and flexible sprint-based feature development.</p>
          </div>
          <div className="p-5 border border-gray-200 rounded-2xl bg-slate-50 space-y-2">
            <div className="font-bold text-sm text-slate-900">C. Dedicated Engineering</div>
            <p className="text-gray-600">Full-time dedicated developers or AI engineers assigned to your team on monthly engagements.</p>
          </div>
          <div className="p-5 border border-gray-200 rounded-2xl bg-slate-50 space-y-2">
            <div className="font-bold text-sm text-slate-900">D. Monthly Technology Partnership</div>
            <p className="text-gray-600">For ongoing maintenance, technical support, cloud optimization, and minor feature updates.</p>
          </div>
        </div>
      </div>

      {/* Standard Indicative Payment Terms */}
      <div className="space-y-4">
        <h2 className="text-2xl font-black uppercase text-slate-900 tracking-tight border-b-2 border-slate-950 pb-2">
          Standard Indicative Payment Terms
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
          <div className="p-4 border border-gray-200 rounded-xl bg-white space-y-2">
            <div className="font-bold text-slate-900 text-sm">Projects under $10,000</div>
            <ul className="space-y-1 text-gray-600">
              <li>• 50% upfront deposit</li>
              <li>• 30% milestone review</li>
              <li>• 20% final delivery</li>
            </ul>
          </div>
          <div className="p-4 border border-gray-200 rounded-xl bg-white space-y-2">
            <div className="font-bold text-slate-900 text-sm">Projects $10,000–$25,000</div>
            <ul className="space-y-1 text-gray-600">
              <li>• 40% upfront deposit</li>
              <li>• 30% milestone 1</li>
              <li>• 20% milestone 2</li>
              <li>• 10% final delivery</li>
            </ul>
          </div>
          <div className="p-4 border border-gray-200 rounded-xl bg-white space-y-2">
            <div className="font-bold text-slate-900 text-sm">Projects above $25,000</div>
            <ul className="space-y-1 text-gray-600">
              <li>• 30% upfront deposit</li>
              <li>• Milestone-based billing per SOW schedule</li>
            </ul>
          </div>
        </div>
        <p className="text-[11px] text-gray-500 italic">* Note: These are standard indicative payment structures. Project-specific agreements may override them.</p>
      </div>

      {/* Tax & Billing Disclaimer */}
      <div className="p-5 bg-slate-100 border border-slate-300 rounded-2xl text-xs space-y-2 text-slate-800">
        <div className="font-bold uppercase tracking-wider text-slate-900">Tax & Billing Disclaimer</div>
        <p>
          All prices are exclusive of applicable taxes, VAT/GST, payment-processing fees, third-party software/API costs, cloud infrastructure, and other government-imposed charges unless explicitly stated otherwise.
        </p>
        <p>
          Applicable tax treatment depends on the client location, service structure, contracting entity, and applicable law. Final invoicing and tax treatment should be confirmed with the company's finance/tax advisors.
        </p>
      </div>

      {/* Post-Launch Support SLA */}
      <div className="p-5 bg-slate-900 text-white rounded-2xl space-y-2 text-xs border border-slate-800">
        <div className="font-bold uppercase text-[#D4AF37] tracking-wider">30-Day Post-Launch Support</div>
        <p className="text-gray-300">
          Where included in the applicable proposal or SOW, Optivra provides 30-Day Post-Launch Support for resolving defects attributable to the agreed project scope. New features, scope changes, and third-party issues are quoted separately.
        </p>
      </div>

      {/* Footer Contact */}
      <div className="bg-slate-950 text-white rounded-3xl p-8 space-y-4 border border-slate-800 text-xs">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <div>
            <div className="font-bold text-base text-white">OPTIVRA</div>
            <div className="text-gray-400">Official Contact: hello@optivra.in</div>
          </div>
          <div className="text-[#D4AF37] font-mono font-bold">https://www.optivra.in/</div>
        </div>
        <div className="text-center text-gray-500 text-[10px]">
          © 2026 OPTIVRA. All Rights Reserved. International Services Catalog.
        </div>
      </div>
    </div>
  );
}

