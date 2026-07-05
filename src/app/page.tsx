"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, BrainCircuit, BarChart3, Database, Workflow, ShieldCheck, Zap, Globe, Users } from "lucide-react";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
import Image from "next/image";
import Link from "next/link";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import FAQSection from "@/components/ui/FAQSection";
import TestimonialCarousel from "@/components/ui/TestimonialCarousel";
import ROICalculator from "@/components/ui/ROICalculator";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-32 bg-black selection:bg-primary/30 selection:text-white overflow-hidden">
      
      {/* Hero & Marquee Wrapper */}
      <div className="flex flex-col">
        {/* Ultra-Cinematic Hero Section */}
        <section className="relative pt-48 pb-24 overflow-hidden flex flex-col items-center justify-center border-b border-white/10" id="home">
          
          {/* Pitch Black Void Background */}
          <div className="absolute inset-0 bg-[#020202] -z-20" />
          
          {/* AI Ecosystem Node Network Background */}
          <div className="absolute inset-0 z-0 opacity-100">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.6" />
                  <stop offset="50%" stopColor="#FFDF00" stopOpacity="1" />
                  <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.6" />
                </linearGradient>
              </defs>
              {/* Dense Neural Lines */}
              <motion.path d="M 0 100 Q 200 300 500 200 T 1000 300" stroke="url(#lineGrad1)" strokeWidth="2" fill="transparent" animate={{ pathLength: [0, 1, 1], opacity: [0, 0.8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
              <motion.path d="M 100 800 Q 400 400 700 600 T 1200 200" stroke="url(#lineGrad1)" strokeWidth="3" fill="transparent" animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }} />
              <motion.path d="M 300 0 Q 600 500 900 300 T 1400 700" stroke="url(#lineGrad1)" strokeWidth="2" fill="transparent" animate={{ pathLength: [0, 1, 1], opacity: [0, 0.7, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }} />
              <motion.path d="M 800 900 Q 500 200 200 500 T -100 400" stroke="url(#lineGrad1)" strokeWidth="4" fill="transparent" animate={{ pathLength: [0, 1, 1], opacity: [0, 0.9, 0] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
              <motion.path d="M 500 500 Q 800 800 1100 400 T 1600 600" stroke="url(#lineGrad1)" strokeWidth="2" fill="transparent" animate={{ pathLength: [0, 1, 1], opacity: [0, 0.6, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 4 }} />
            </svg>
            
            {/* Floating Nodes */}
            {[
              { top: "20%", left: "15%", label: "AI Core" },
              { top: "60%", left: "10%", label: "LLMs" },
              { top: "30%", left: "80%", label: "Data Pipelines" },
              { top: "70%", left: "85%", label: "Computer Vision" },
              { top: "15%", left: "50%", label: "Cloud Infra" },
              { top: "85%", left: "40%", label: "Automation Flows" },
              { top: "45%", left: "25%", label: "Neural Nets" },
              { top: "55%", left: "75%", label: "RAG Systems" },
            ].map((node, i) => (
              <motion.div 
                key={i}
                className="absolute hidden md:flex items-center gap-2"
                style={{ top: node.top, left: node.left }}
                animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3 + i, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="w-3 h-3 rounded-full bg-primary shadow-[0_0_20px_var(--color-primary)]" />
                <span className="text-xs uppercase tracking-widest text-primary font-bold bg-black/80 px-3 py-1 border border-primary/40 backdrop-blur-md rounded-sm">{node.label}</span>
              </motion.div>
            ))}
          </div>

          {/* Central Core Glow & Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/20 rounded-full blur-[150px] -z-10 pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
          
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-2 border-primary/40 rounded-full border-dashed pointer-events-none -z-10 shadow-[0_0_50px_rgba(212,175,55,0.2)]"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-secondary/30 rounded-full pointer-events-none -z-10"
            animate={{ rotate: -360 }}
            transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
          />

          {/* Floating Gold Orbs (Neural Dust) */}
          {[
            { top: "10%", left: "20%", size: 150, delay: 0 },
            { top: "80%", left: "10%", size: 250, delay: 2 },
            { top: "30%", left: "80%", size: 200, delay: 5 },
            { top: "70%", left: "70%", size: 300, delay: 3 },
            { top: "50%", left: "50%", size: 150, delay: 1 },
            { top: "20%", left: "60%", size: 200, delay: 4 },
          ].map((orb, i) => (
            <motion.div
              key={`orb-${i}`}
              className="absolute rounded-full bg-primary/40 blur-[50px] -z-10 pointer-events-none"
              style={{
                width: orb.size,
                height: orb.size,
                top: orb.top,
                left: orb.left,
              }}
              animate={{
                x: [0, 60, 0, -60, 0],
                y: [0, -60, 0, 60, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{ duration: 12 + i * 2, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
            />
          ))}

          <div className="container mx-auto px-6 relative z-10 w-full flex flex-col items-center mt-20">
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="inline-flex items-center gap-3 px-6 py-2 border border-primary/20 bg-black/50 backdrop-blur-md text-[10px] tracking-[0.4em] font-medium text-primary uppercase mb-8 shadow-[0_0_30px_rgba(212,175,55,0.15)] rounded-full"
            >
              <motion.span 
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 bg-primary shadow-[0_0_10px_var(--color-primary)] rounded-full"
              />
              Elite AI & Technology Consulting
            </motion.div>

            {/* Massive Typography */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
              className="text-center w-full max-w-5xl z-10"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-sans font-black tracking-tight leading-[1.1] mb-6 text-white text-balance">
                Enterprise AI Consulting & Machine Learning Engineering That Drives <span className="text-gradient">Business Growth.</span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
              className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl text-center font-light leading-relaxed z-10 text-balance"
            >
              We help startups and enterprises with AI consulting, machine learning, computer vision, and data science to build products and automate operations faster.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto z-10"
            >
              <Link 
                href="/ai-advisor" 
                className="relative overflow-hidden bg-primary text-black px-8 py-4 flex items-center justify-center gap-3 hover:bg-white transition-all duration-500 font-bold tracking-widest uppercase text-xs sm:text-sm group w-full sm:w-auto text-center rounded-sm"
              >
                Discover AI Opportunities
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a 
                href="#contact" 
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold tracking-widest uppercase text-xs sm:text-sm hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center rounded-sm"
              >
                Get Technical Audit
              </a>
            </motion.div>

            {/* ROI Calculator CTA - Under the main buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              className="mt-8 z-10"
            >
              <a 
                href="#roi-calculator" 
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-black border border-primary text-primary font-bold tracking-widest uppercase text-xs sm:text-sm hover:bg-primary hover:text-black hover:shadow-[4px_4px_0px_#ffffff] transition-all duration-300 rounded-none shadow-[6px_6px_0px_rgba(212,175,55,0.4)] active:shadow-none active:translate-y-[6px] active:translate-x-[6px]"
              >
                Calculate AI ROI
              </a>
            </motion.div>

          </div>
          
          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
        </section>

        {/* Trusted By Marquee */}
        <div className="w-full border-b border-white/10 bg-[#020202] py-3 overflow-hidden relative">
          <div className="absolute left-0 top-0 w-16 md:w-32 h-full bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 w-16 md:w-32 h-full bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none" />
          
          <p className="text-center text-[10px] tracking-widest uppercase text-gray-500 font-bold mb-2">Trusted By Industry Leaders</p>
          
          <div className="flex w-max animate-marquee">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="flex items-center gap-16 px-8">
                {["GOOGLE", "IBM", "MICROSOFT", "NVIDIA", "META", "AMAZON", "SALESFORCE", "ORACLE"].map((company, idx) => (
                  <div key={idx} className="text-lg md:text-xl font-sans font-bold text-white/20 tracking-widest hover:text-white/50 transition-colors duration-500 cursor-default">
                    {company}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Bar Section */}
      <motion.section 
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="container mx-auto px-6 border-b border-white/10 pb-16"
      >
        <div className="flex flex-wrap justify-center gap-x-16 gap-y-12">
          {[
            { value: 200, suffix: "+", label: "Projects Delivered" },
            { value: 15, suffix: "+", label: "Industries Served" },
            { value: 50, suffix: "+", label: "AI Models Deployed" },
            { value: 12, suffix: "", label: "Countries Served" },
            { value: 10, suffix: "+", label: "Years Experience" }
          ].map((stat, i) => (
            <motion.div variants={fadeInUp} key={i} className="text-center group min-w-[120px]">
              <div className="text-4xl md:text-5xl font-sans font-black text-primary mb-2 group-hover:text-white transition-colors duration-500">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs tracking-widest uppercase text-gray-500 font-bold">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Optivra */}
      <section className="container mx-auto px-6" id="about">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6">We're on a mission to redefine what's <span className="text-primary italic relative inline-block">possible.<div className="absolute bottom-1 left-0 w-full h-0.5 bg-primary/50" /></span></h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed mb-8">
              Optivra is a technology consultancy dedicated to helping businesses unlock the power of AI, machine learning, and modern software solutions. We focus on building intelligent, scalable systems that solve real business problems and create measurable impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
              <div className="border-l border-primary/50 pl-6 hover:border-primary transition-colors">
                <h3 className="text-white font-bold mb-2">Our Mission</h3>
                <p className="text-gray-500 text-sm">To empower innovators with intelligent solutions that blend data, design, and technology.</p>
              </div>
              <div className="border-l border-primary/50 pl-6 hover:border-primary transition-colors">
                <h3 className="text-white font-bold mb-2">Our Vision</h3>
                <p className="text-gray-500 text-sm">To become the global benchmark for innovation and intelligence.</p>
              </div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 min-h-[400px]"
          >
            {/* Top Left: Main Stat */}
            <div className="bg-black border border-white/10 rounded-xl p-6 flex flex-col items-center justify-center relative overflow-hidden group hover:border-primary/40 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Globe className="w-10 h-10 text-primary mb-4" />
              </motion.div>
              <h3 className="text-4xl font-sans font-bold text-white mb-1 relative z-10">20+</h3>
              <p className="text-gray-400 text-[10px] tracking-widest uppercase font-bold text-center relative z-10">Global<br/>Specialists</p>
            </div>

            {/* Top Right: Talent Hubs */}
            <div className="bg-black border border-white/10 rounded-xl p-6 relative overflow-hidden group hover:border-primary/40 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[40px] rounded-full group-hover:bg-primary/20 transition-colors" />
              <p className="text-[10px] tracking-widest uppercase text-gray-500 font-bold mb-4">Talent Hubs</p>
              <div className="space-y-3">
                {['San Francisco, US', 'London, UK', 'Dubai, UAE', 'Bangalore, IN'].map((city, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    <span className="text-xs text-gray-300 font-medium">{city}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom: Scrolling Roles Marquee */}
            <div className="col-span-1 sm:col-span-2 bg-black border border-white/10 rounded-xl p-6 relative overflow-hidden flex flex-col justify-center group hover:border-primary/40 transition-colors">
              <p className="text-[10px] tracking-widest uppercase text-gray-500 font-bold mb-4">Elite Engineering Pods</p>
              
              <div className="flex gap-4 flex-wrap">
                {[
                  "AI/ML Engineers", 
                  "Data Scientists", 
                  "Cloud Architects", 
                  "Full-Stack Devs", 
                  "UI/UX Designers", 
                  "DevOps Specialists"
                ].map((role, idx) => (
                  <span key={idx} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 whitespace-nowrap group-hover:border-primary/30 transition-colors">
                    {role}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="container mx-auto px-6 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-[0.3em]">What We Do</p>
          <h2 className="text-4xl md:text-6xl font-sans font-bold mb-6 text-white">Our <span className="text-gradient italic">Expertise.</span></h2>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10"
        >
          {[
            { title: "AI Consulting", href: "/ai-consulting", desc: "Strategic enterprise AI adoption roadmaps and feasibility analysis.", icon: <BrainCircuit /> },
            { title: "AI Agents", href: "/ai-agent-development", desc: "Autonomous agentic workflows for customer support, sales, and internal ops.", icon: <Workflow /> },
            { title: "Machine Learning", href: "/machine-learning-services", desc: "Predictive modeling, regression, and custom ML architectures.", icon: <Database /> },
            { title: "Data Science", href: "/data-science-services", desc: "Advanced statistical analysis, Big Data pipelines, and visualization.", icon: <BarChart3 /> },
            { title: "Computer Vision", href: "/computer-vision-solutions", desc: "Object detection, facial recognition, and automated visual inspection.", icon: <Globe /> },
            { title: "Generative AI", href: "/generative-ai-development", desc: "Custom LLM fine-tuning, RAG pipelines, and enterprise generative models.", icon: <BrainCircuit /> },
            { title: "MVP Development", href: "/mvp-development", desc: "Rapid prototyping and minimum viable product engineering for startups.", icon: <Zap /> },
            { title: "CTO as a Service", href: "/cto-as-a-service", desc: "Fractional technical leadership and architectural due diligence.", icon: <ShieldCheck /> },
            { title: "Cloud Engineering", href: "/cloud-engineering", desc: "AWS/GCP/Azure infrastructure deployment, scaling, and Kubernetes management.", icon: <Database /> },
            { title: "Automation Systems", href: "/automation-systems", desc: "RPA and deep API integrations to eliminate manual business workflows.", icon: <Workflow /> }
          ].map((service, i) => (
            <Link href={service.href} key={i}>
              <motion.div variants={fadeInUp} className="p-10 bg-black hover:bg-primary/5 transition-colors duration-500 group flex flex-col min-h-[250px] relative overflow-hidden h-full">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] group-hover:bg-primary/10 transition-colors" />
                <div className="w-10 h-10 text-primary mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-300 relative z-10">{service.icon}</div>
                <h3 className="font-sans text-xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 relative z-10">{service.desc}</p>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0 relative z-10">
                  Explore Service <ArrowRight className="w-4 h-4" />
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </section>

      {/* Why Optivra Comparison */}
      <section className="container mx-auto px-6 py-16" id="why-us">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-[0.3em]">The Optivra Advantage</p>
          <h2 className="text-4xl md:text-5xl font-sans font-bold mb-6 text-white">Optivra vs <span className="text-gray-500">Traditional Agencies.</span></h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto bg-[#050505] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="grid grid-cols-3 bg-white/5 border-b border-white/10 p-6 text-sm md:text-base font-bold uppercase tracking-widest text-center">
            <div className="text-gray-400 text-left">Feature</div>
            <div className="text-white">Optivra</div>
            <div className="text-gray-600">Traditional Agencies</div>
          </div>
          {[
            { feature: "Delivery Speed", optivra: "Days / Weeks (AI Accelerated)", agency: "Months / Years" },
            { feature: "AI Expertise", optivra: "Native AI/ML Engineers", agency: "Generalist Developers" },
            { feature: "Architecture", optivra: "Modern Serverless & Edge", agency: "Legacy Monoliths" },
            { feature: "Cost Structure", optivra: "Value-Based & Transparent", agency: "Bloated Billable Hours" },
            { feature: "Support Model", optivra: "CTO-Level Partnership", agency: "Ticket-Based Support" }
          ].map((row, i) => (
            <div key={i} className="grid grid-cols-3 p-6 border-b border-white/5 last:border-0 items-center text-center text-sm md:text-base hover:bg-white/5 transition-colors">
              <div className="font-bold text-gray-300 text-left">{row.feature}</div>
              <div className="text-primary font-bold flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 hidden sm:block" /> {row.optivra}
              </div>
              <div className="text-gray-600 font-light">{row.agency}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-6 py-16" id="process">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-[0.3em]">Engineering Pipeline</p>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6">How We Build <span className="text-primary italic">Intelligence.</span></h2>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto">
          {/* Central Line */}
          <div className="absolute top-0 bottom-0 left-[28px] md:left-1/2 w-px bg-white/10 md:-translate-x-1/2 hidden sm:block" />
          
          <div className="space-y-12">
            {[
              { title: "Discovery", desc: "Deep-dive into your business operations, data availability, and pain points." },
              { title: "Strategy", desc: "Develop a high-ROI roadmap mapping AI use cases to business outcomes." },
              { title: "Architecture", desc: "Design a scalable, secure, and future-proof cloud & data infrastructure." },
              { title: "Development", desc: "Agile engineering of ML models, LLM pipelines, and automation scripts." },
              { title: "Deployment", desc: "Seamless integration into your existing systems with zero downtime." },
              { title: "Scale", desc: "Continuous monitoring, model retraining, and feature expansion." }
            ].map((step, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col sm:flex-row items-center gap-8 ${i % 2 === 0 ? "sm:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[28px] md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-black border-2 border-primary z-10 hidden sm:block shadow-[0_0_15px_var(--color-primary)]" />
                
                {/* Content Box */}
                <div className={`w-full sm:w-1/2 flex ${i % 2 === 0 ? "justify-start" : "justify-end"}`}>
                  <div className={`bg-[#050505] border border-white/10 p-6 rounded-xl shadow-xl w-full sm:w-[90%] md:w-[80%] hover:border-primary/50 transition-colors group relative overflow-hidden text-left ${i % 2 === 0 ? "sm:text-left" : "sm:text-right"}`}>
                    <div className={`absolute top-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] group-hover:bg-primary/10 transition-colors ${i % 2 === 0 ? "right-0" : "left-0"}`} />
                    <span className="text-primary text-xs font-bold uppercase tracking-widest block mb-2">Phase 0{i + 1}</span>
                    <h3 className="text-2xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">{step.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </section>

      {/* Lead Magnet Section */}
      <section className="container mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-[#050505]"
        >
          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-[100px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between p-10 md:p-16 gap-10">
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-widest uppercase text-primary font-bold mb-6">
                Free Download
              </span>
              <h2 className="text-3xl md:text-5xl font-sans font-black text-white mb-6 leading-tight">
                The 2026 Enterprise <br/>
                <span className="text-gradient">AI Adoption Playbook.</span>
              </h2>
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-xl mx-auto md:mx-0">
                A step-by-step roadmap for CTOs and founders to build scalable AI systems, automate workflows, and dominate the market without wasting capital.
              </p>
            </div>
            
            <div className="w-full md:w-[400px] bg-black/50 p-6 rounded-2xl border border-white/5 backdrop-blur-md">
              <h3 className="text-white font-bold mb-4">Where should we send it?</h3>
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;
                  window.location.href = `mailto:hello@optivra.in?subject=Send%20me%20the%20AI%20Playbook&body=Please%20send%20the%20playbook%20to%3A%20${email}`;
                }}
                className="flex flex-col gap-3"
              >
                <input 
                  type="email" 
                  name="email"
                  placeholder="name@company.com" 
                  required
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors rounded-lg"
                />
                <button 
                  type="submit"
                  className="w-full bg-primary text-black font-bold text-sm tracking-widest uppercase py-4 hover:bg-white transition-colors rounded-lg flex items-center justify-center gap-2"
                >
                  Download Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              <p className="text-[10px] text-gray-600 mt-4 text-center">
                Join 5,000+ tech leaders getting our weekly insights.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Products */}
      <section id="products" className="container mx-auto px-6 py-32">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <p className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-[0.3em]">Built In-House</p>
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6">
            Our <span className="text-primary italic">Products.</span>
          </h2>
          <p className="text-gray-400 text-lg font-light leading-relaxed">
            We don&apos;t just build for clients — we build for the world. These are products engineered and launched by the Optivra team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              id: "JA", name: "Jugnu AI", type: "AI Lead Engine", status: "Beta", statusColor: "yellow",
              desc: "India's first AI lead engine built exclusively for real estate brokers. Delivers CIBIL-verified, intent-scored buyers directly to your WhatsApp.",
              features: ["CIBIL Verified Buyers", "AI Intent Scoring", "WhatsApp AI Agent"],
              cta: "Get Early Access", mailto: "JugnuAI%20Enquiry"
            },
            {
              id: "SA", name: "ShadowAgent", type: "Autonomous AI Agent", status: "Live", statusColor: "green",
              desc: "A fully autonomous AI agent platform that silently monitors, analyzes, and executes tasks across your business stack 24/7 — without human intervention.",
              features: ["Autonomous multi-step task execution", "Real-time monitoring & alerting", "CRM & API integrations"],
              cta: "Request Demo", mailto: "ShadowAgent%20Enquiry"
            },
            {
              id: "BH", name: "BrutallyHonest", type: "AI Review Platform", status: "Beta", statusColor: "yellow",
              desc: "An AI-powered product review engine that cuts through marketing hype — generating Truth Scores, Pain Scores, and Hype Scores based on real user sentiment.",
              features: ["AI-generated Truth, Pain & Hype scores", "Real-time sentiment aggregation", "Product leaderboards & rankings"],
              cta: "Get Early Access", mailto: "BrutallyHonest%20Enquiry"
            },
            {
              id: "BG", name: "BhaloGo", type: "Travel Tech Platform", status: "Building", statusColor: "blue",
              desc: "An AI-powered travel platform built for the Indian market — helping users discover, plan, and book intelligent travel experiences tailored to their preferences.",
              features: ["AI trip planning engine", "Personalized destination matching", "Local experience marketplace"],
              cta: "Join Waitlist", mailto: "BhaloGo%20Enquiry"
            },
            {
              id: "EF", name: "EventFlow AI", type: "Event Revenue Engine", status: "Live", statusColor: "green",
              desc: "An AI-powered LinkedIn-to-Revenue engine for event organizers. Finds 1000+ decision makers, personalizes outreach, qualifies leads, and tracks every rupee of revenue attribution.",
              features: ["AI prospecting & BANT qualification", "Multi-channel automated outreach", "Revenue attribution dashboard"],
              cta: "Book Demo", mailto: "EventFlow%20Enquiry"
            },
            {
              id: "UV", name: "Urvoic 2.0", type: "Voice AI Platform", status: "Beta", statusColor: "yellow",
              desc: "A next-generation voice AI platform that enables businesses to deploy intelligent voice agents for customer support, sales calls, and operational workflows.",
              features: ["Human-like voice AI agents", "Real-time call analysis", "CRM & helpdesk integration"],
              cta: "Request Access", mailto: "Urvoic%20Enquiry"
            },
            {
              id: "UJ", name: "Ujaal", type: "EdTech AI Platform", status: "Building", statusColor: "blue",
              desc: "An AI-powered education platform designed to democratize quality learning in India — delivering personalized curriculum, adaptive assessments, and mentor matching.",
              features: ["Personalized AI learning paths", "Adaptive assessment engine", "Vernacular language support"],
              cta: "Join Waitlist", mailto: "Ujaal%20Enquiry"
            },
            {
              id: "SR", name: "SmartResearch AI", type: "Research Automation", status: "Beta", statusColor: "yellow",
              desc: "An AI-powered deep research engine that automatically synthesizes information from thousands of sources into concise, actionable intelligence reports in minutes.",
              features: ["Multi-source web research", "Auto-generated research reports", "Citation tracking & export"],
              cta: "Get Access", mailto: "SmartResearch%20Enquiry"
            },
            {
              id: "DF", name: "DemandForge AI", type: "Demand Generation", status: "Building", statusColor: "blue",
              desc: "An intelligent B2B demand generation platform that autonomously identifies high-intent buyers, crafts personalized outreach sequences, and fills your pipeline on autopilot.",
              features: ["Intent signal tracking", "AI-personalized outreach sequences", "Pipeline analytics dashboard"],
              cta: "Join Waitlist", mailto: "DemandForge%20Enquiry"
            },
            {
              id: "IV", name: "IdeaVentureX", type: "Startup Venture Builder", status: "Live", statusColor: "green",
              desc: "A startup ideation and venture building platform that helps founders validate business ideas, connect with co-founders, and accelerate from concept to company with AI-powered insights.",
              features: ["AI-powered idea validation", "Co-founder matching engine", "Startup growth & fundraising roadmap"],
              cta: "Explore Now", mailto: "IdeaVentureX%20Enquiry"
            },
            {
              id: "VP", name: "Vindex Protocol", type: "Livelihood Insurance Platform", status: "Live", statusColor: "green",
              desc: "An open-source livelihood insurance and fraud prevention platform that protects your income from AI disruption and market shifts — helping you pivot when traditional insurance won't.",
              features: ["Income security & family coverage", "Upskilling vouchers for career transition", "Decentralized proof of fraud engine"],
              cta: "Get Official Quote", mailto: "VindexProtocol%20Enquiry",
              website: "https://vindexprotocol.com"
            },
            {
              id: "UX", name: "UnicornX Media", type: "Digital Media Platform", status: "Building", statusColor: "blue",
              desc: "A comprehensive digital media and advertising ecosystem designed to optimize audience monetization, streamline ad placements, and drive high-converting cross-channel campaigns.",
              features: ["Omnichannel ad monetization", "AI-driven audience targeting", "Real-time campaign analytics"],
              cta: "Request Demo", mailto: "UnicornXMedia%20Enquiry",
              website: "https://unicornxmedia.com"
            },

          ].map((product) => (
            <div key={product.id} className="group relative border border-white/10 bg-[#050505] p-7 hover:border-primary/50 transition-all duration-500 overflow-hidden flex flex-col">
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 blur-[70px] rounded-full group-hover:bg-primary/10 transition-colors pointer-events-none" />
              <div className="relative z-10 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-primary/10 border border-primary/30 flex items-center justify-center text-primary font-black text-xs flex-shrink-0">
                      {product.id}
                    </div>
                    <div>
                      <h3 className="text-base font-sans font-bold text-white leading-tight">{product.name}</h3>
                      <p className="text-[9px] uppercase tracking-widest text-primary font-bold">{product.type}</p>
                    </div>
                  </div>
                  <span className={`text-[9px] tracking-widest uppercase font-bold px-2 py-1 border whitespace-nowrap ${
                    product.statusColor === "green" ? "border-green-500/30 text-green-400 bg-green-500/10" :
                    product.statusColor === "yellow" ? "border-yellow-500/30 text-yellow-400 bg-yellow-500/10" :
                    "border-blue-500/30 text-blue-400 bg-blue-500/10"
                  }`}>
                    {product.status}
                  </span>
                </div>
                <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-1">{product.desc}</p>
                <ul className="space-y-1.5 mb-6">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[11px] text-gray-500">
                      <span className="w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={'website' in product && (product as {website?: string}).website ? (product as {website?: string}).website : `mailto:hello@optivra.in?subject=${product.mailto}`}
                  target={'website' in product && (product as {website?: string}).website ? "_blank" : undefined}
                  rel={'website' in product && (product as {website?: string}).website ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest text-primary hover:text-white transition-colors group/link mt-auto"
                >
                  {product.cta}
                  <ArrowRight className="w-3 h-3 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* And Many More Strip */}
        <div className="mt-16 relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

          {/* Scrolling tags row 1 — left */}
          <div className="flex overflow-hidden mb-3">
            <div className="flex animate-marquee gap-3 whitespace-nowrap">
              {[
                "HealthSync AI", "LegalMind", "FinFlow Pro", "TalentRadar", "SoilSense",
                "RetailBot", "LogistiQ", "PolicyPulse", "NutriAI", "ClimateOS",
                "PropIntel", "SaaSify", "CreditIQ", "GovAssist AI", "SkillForge",
                "DataVault", "SecureNet AI", "CarbonTrace", "MediAssist", "UrbanFlow",
              ].map((name) => (
                <span key={name} className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/[0.03] text-gray-500 text-[11px] font-bold uppercase tracking-widest hover:border-primary/30 hover:text-gray-300 transition-colors cursor-default flex-shrink-0">
                  <span className="w-1 h-1 rounded-full bg-primary/60" />
                  {name}
                </span>
              ))}
              {[
                "HealthSync AI", "LegalMind", "FinFlow Pro", "TalentRadar", "SoilSense",
                "RetailBot", "LogistiQ", "PolicyPulse", "NutriAI", "ClimateOS",
                "PropIntel", "SaaSify", "CreditIQ", "GovAssist AI", "SkillForge",
                "DataVault", "SecureNet AI", "CarbonTrace", "MediAssist", "UrbanFlow",
              ].map((name) => (
                <span key={`dup-${name}`} className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/[0.03] text-gray-500 text-[11px] font-bold uppercase tracking-widest hover:border-primary/30 hover:text-gray-300 transition-colors cursor-default flex-shrink-0">
                  <span className="w-1 h-1 rounded-full bg-primary/60" />
                  {name}
                </span>
              ))}
            </div>
          </div>

          {/* Scrolling tags row 2 — right */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee-reverse gap-3 whitespace-nowrap">
              {[
                "AgriBot", "EduStream", "WealthOS", "TrustID", "InsureFlow",
                "RecruitAI", "MarketMapper", "CivicAI", "BrandVoice", "OrderMind",
                "PayShield", "DocFlow AI", "SmartFarm", "CoupleSync", "VideoMind",
                "SportsPulse", "HireGenius", "CleanTech AI", "GrowthLab", "VoiceBot",
              ].map((name) => (
                <span key={name} className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/[0.03] text-gray-500 text-[11px] font-bold uppercase tracking-widest hover:border-primary/30 hover:text-gray-300 transition-colors cursor-default flex-shrink-0">
                  <span className="w-1 h-1 rounded-full bg-primary/40" />
                  {name}
                </span>
              ))}
              {[
                "AgriBot", "EduStream", "WealthOS", "TrustID", "InsureFlow",
                "RecruitAI", "MarketMapper", "CivicAI", "BrandVoice", "OrderMind",
                "PayShield", "DocFlow AI", "SmartFarm", "CoupleSync", "VideoMind",
                "SportsPulse", "HireGenius", "CleanTech AI", "GrowthLab", "VoiceBot",
              ].map((name) => (
                <span key={`dup-${name}`} className="inline-flex items-center gap-2 px-4 py-2 border border-white/10 bg-white/[0.03] text-gray-500 text-[11px] font-bold uppercase tracking-widest hover:border-primary/30 hover:text-gray-300 transition-colors cursor-default flex-shrink-0">
                  <span className="w-1 h-1 rounded-full bg-primary/40" />
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Stats + CTA row */}
        <div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/10 bg-white/[0.02] px-8 py-6">
          <div className="flex flex-wrap items-center gap-8 md:gap-10">
            {[
              { value: "30+", label: "Products in Pipeline" },
              { value: "11", label: "Showcased Above" },
              { value: "5", label: "Live & Running" },
              { value: "∞", label: "Ideas Being Built" },
            ].map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-2xl font-black text-white font-sans">{stat.value}</p>
                <p className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">{stat.label}</p>
              </div>
            ))}
          </div>
          <a
            href="mailto:hello@optivra.in?subject=Product%20Collaboration%20Inquiry"
            className="inline-flex items-center gap-3 px-6 py-3 bg-primary text-black text-[11px] font-black uppercase tracking-widest hover:bg-white transition-colors flex-shrink-0"
          >
            Collaborate With Us
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </section>


      {/* Leadership Section */}
      <section className="container mx-auto px-6 py-16" id="team">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8"
        >
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-sans font-bold text-white mb-6">Minds Behind <span className="text-gradient italic">The Magic.</span></h2>
            <p className="text-gray-400 text-lg font-light">Visionary leaders driving innovation, backed by a global network of 20+ remote specialists.</p>
          </div>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { name: "Sarveshwar Mandal", role: "Chief Executive Officer", desc: "AI & Data Science leader with experience across global tech and finance. Specializes in machine learning, computer vision, and scalable product architecture.", image: "/sarveshwar.png", linkedin: "https://www.linkedin.com/in/sarveshwarm/", website: "https://sarveshwarmandal.com" },
            { name: "Rohitash Goyal", role: "Chief Technology Officer", desc: "Technology leader with deep expertise in full-stack development, cloud engineering, and modern DevOps ecosystems.", image: "/rohitash.png", linkedin: "https://www.linkedin.com/in/rohitashgoyal28/" },
            { name: "Mohd. Hidayat", role: "Chief Marketing Officer", desc: "Marketing leader driving strategic storytelling, digital expansion, and scalable growth frameworks. Transforms brands into high-impact platforms.", image: "/hidyat.png", linkedin: "https://www.linkedin.com/in/mohd-hidayat-u-85990954/" }
          ].map((member, i) => (
            <motion.div 
              variants={fadeInUp}
              key={i} 
              className="border border-white/10 bg-[#050505] p-10 group hover:border-primary/50 hover:-translate-y-2 transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Massive Cinematic Portrait */}
              <div className="w-full aspect-[4/5] max-w-[280px] rounded-lg border border-white/10 group-hover:border-primary group-hover:shadow-[0_0_30px_rgba(212,175,55,0.2)] mb-8 overflow-hidden relative filter grayscale group-hover:grayscale-0 transition-all duration-700 z-10">
                 <Image src={member.image} alt={member.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
              </div>
              
              <h3 className="text-3xl font-sans font-bold text-white mb-2 relative z-10">{member.name}</h3>
              <p className="text-primary text-xs tracking-widest uppercase font-bold mb-6 relative z-10">{member.role}</p>
              <p className="text-gray-500 text-sm font-light mb-8 relative z-10 flex-1">{member.desc}</p>
              
              <div className="flex gap-4 relative z-10">
                <a 
                  href={member.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                  aria-label={`LinkedIn profile for ${member.name}`}
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                {member.website && (
                  <a 
                    href={member.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                    aria-label={`Personal website for ${member.name}`}
                  >
                    <Globe className="w-4 h-4" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Testimonials Section */}
      <TestimonialCarousel />

      {/* ROI Calculator Section */}
      <ROICalculator />

      {/* FAQ Section */}
      <FAQSection />

      {/* Lead Generation CTA & Contact Form */}
      <section id="contact" className="container mx-auto px-6 pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Calendly CTA Box */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-primary/30 bg-[#050505] p-10 md:p-16 relative overflow-hidden group flex flex-col justify-center"
          >
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-sans font-bold mb-6 text-white leading-tight">
                Ready to <span className="text-gradient italic">Scale?</span>
              </h2>
              <p className="text-lg text-gray-400 mb-10 font-light leading-relaxed">
                Schedule a confidential strategy session with our partners to discuss your organization's AI readiness, engineering challenges, and integration roadmap.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <a 
                  href="https://calendly.com/hello-optivra" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-8 py-5 bg-primary text-black font-bold hover:bg-white hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 tracking-widest uppercase text-xs group/btn"
                >
                  Book Free AI Strategy Call
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                </a>
                <a 
                  href="https://calendly.com/hello-optivra" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-4 px-8 py-5 bg-transparent border border-primary/40 text-primary font-bold hover:bg-primary hover:text-black transition-all duration-500 tracking-widest uppercase text-xs group/btn2"
                >
                  Schedule Discovery Session
                  <ArrowRight className="w-4 h-4 group-hover/btn2:translate-x-2 transition-transform" />
                </a>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 text-gray-500 text-xs tracking-widest uppercase">
                <span className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-primary" /> Strict NDA</span>
                <span className="flex items-center gap-2"><Globe className="w-3 h-3 text-primary" /> Global Reach</span>
              </div>
            </div>
          </motion.div>

          {/* Direct Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-white/10 bg-black p-10 md:p-16 relative"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            
            <h3 className="text-2xl font-sans font-bold text-white mb-2">Direct Inquiry</h3>
            <p className="text-gray-500 text-sm font-light mb-8">Prefer to write to us? Send a direct message to our executive team.</p>
            
            <form className="flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input type="text" placeholder="FIRST NAME" className="bg-transparent border-b border-white/20 px-0 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-700 tracking-wider" required />
                <input type="text" placeholder="LAST NAME" className="bg-transparent border-b border-white/20 px-0 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-700 tracking-wider" required />
              </div>
              <input type="email" placeholder="WORK EMAIL" className="bg-transparent border-b border-white/20 px-0 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-700 tracking-wider" required />
              <input type="tel" placeholder="PHONE NUMBER" className="bg-transparent border-b border-white/20 px-0 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-700 tracking-wider" />
              <textarea placeholder="PROJECT DETAILS OR INQUIRY..." rows={4} className="bg-transparent border-b border-white/20 px-0 py-3 text-sm text-white focus:outline-none focus:border-primary transition-colors placeholder:text-gray-700 tracking-wider resize-none" required></textarea>
              
              <button type="submit" className="w-full bg-transparent border border-white/20 text-white font-bold py-5 mt-4 hover:border-primary hover:text-primary transition-all duration-300 tracking-widest uppercase text-sm">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
