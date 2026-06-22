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
      
      {/* Ultra-Cinematic Hero Section */}
      <section className="relative min-h-[100vh] overflow-hidden flex flex-col items-center justify-center border-b border-white/10" id="home">
        
        {/* Pitch Black Void Background */}
        <div className="absolute inset-0 bg-[#020202] -z-20" />
        
        {/* AI Ecosystem Node Network Background */}
        <div className="absolute inset-0 z-0 opacity-40">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="lineGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00E5FF" stopOpacity="0.1" />
                <stop offset="50%" stopColor="#7C3AED" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#00E5FF" stopOpacity="0.1" />
              </linearGradient>
            </defs>
            {/* Neural Lines */}
            <motion.path d="M 100 200 Q 300 100 500 400 T 900 300" stroke="url(#lineGrad1)" strokeWidth="1" fill="transparent" animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} />
            <motion.path d="M 800 100 Q 600 300 700 600 T 200 700" stroke="url(#lineGrad1)" strokeWidth="1" fill="transparent" animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }} />
            <motion.path d="M 300 800 Q 500 500 800 500 T 1200 400" stroke="url(#lineGrad1)" strokeWidth="1" fill="transparent" animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }} />
          </svg>
          
          {/* Floating Nodes */}
          {[
            { top: "20%", left: "15%", label: "AI Core" },
            { top: "60%", left: "10%", label: "LLMs" },
            { top: "30%", left: "80%", label: "Data Pipelines" },
            { top: "70%", left: "85%", label: "Computer Vision" },
            { top: "15%", left: "50%", label: "Cloud Infra" },
            { top: "85%", left: "40%", label: "Automation Flows" },
          ].map((node, i) => (
            <motion.div 
              key={i}
              className="absolute hidden md:flex items-center gap-2"
              style={{ top: node.top, left: node.left }}
              animate={{ y: [0, -15, 0], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_15px_var(--color-primary)]" />
              <span className="text-[10px] uppercase tracking-widest text-primary font-bold bg-black/50 px-2 py-1 border border-primary/20 backdrop-blur-sm rounded-sm">{node.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Central Core Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-secondary/10 rounded-full blur-[150px] -z-10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] -z-10 pointer-events-none" />

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
              Building Intelligent Systems That Drive <span className="text-gradient">Real Business Outcomes.</span>
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl text-center font-light leading-relaxed z-10 text-balance"
          >
            We help startups and enterprises build AI products, automate operations, and scale technology faster.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto z-10"
          >
            <a 
              href="https://calendly.com/hello-optivra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative overflow-hidden bg-primary text-black px-8 py-4 flex items-center justify-center gap-3 hover:bg-white transition-all duration-500 font-bold tracking-widest uppercase text-xs sm:text-sm group w-full sm:w-auto text-center rounded-sm"
            >
              Book Free Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a 
              href="#portfolio" 
              className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold tracking-widest uppercase text-xs sm:text-sm hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center rounded-sm"
            >
              View Case Studies
            </a>
          </motion.div>

        </div>
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
      </section>

      {/* Trusted By Marquee */}
      <div className="w-full border-b border-white/10 bg-[#020202] py-12 overflow-hidden relative">
        <div className="absolute left-0 top-0 w-32 md:w-64 h-full bg-gradient-to-r from-[#020202] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-32 md:w-64 h-full bg-gradient-to-l from-[#020202] to-transparent z-10 pointer-events-none" />
        
        <p className="text-center text-[10px] tracking-widest uppercase text-gray-500 font-bold mb-8">Trusted By Industry Leaders</p>
        
        <div className="flex w-max animate-marquee">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex items-center gap-24 px-12">
              {["GOOGLE", "IBM", "MICROSOFT", "NVIDIA", "META", "AMAZON", "SALESFORCE", "ORACLE"].map((company, idx) => (
                <div key={idx} className="text-2xl md:text-4xl font-sans font-bold text-white/20 tracking-widest hover:text-white/50 transition-colors duration-500 cursor-default">
                  {company}
                </div>
              ))}
            </div>
          ))}
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
            { title: "Technology Consulting", desc: "Strategic guidance to align technology with your business goals and maximize ROI.", icon: <Workflow /> },
            { title: "AI & Machine Learning", desc: "Custom AI solutions that automate processes, generate insights, and drive innovation.", icon: <BrainCircuit /> },
            { title: "Data Science & Analytics", desc: "Turn raw data into actionable intelligence with advanced analytics.", icon: <BarChart3 /> },
            { title: "Full-Stack Development", desc: "End-to-end product development from concept to deployment.", icon: <Database /> },
            { title: "Cloud & Automation", desc: "Scalable cloud infrastructure and intelligent automation.", icon: <Zap /> },
            { title: "CTO Advisory", desc: "Interim/Fractional CTO services and technical due diligence.", icon: <ShieldCheck /> }
          ].map((service, i) => (
            <motion.div variants={fadeInUp} key={i} className="p-10 bg-black hover:bg-primary/5 transition-colors duration-500 group flex flex-col min-h-[250px] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[50px] group-hover:bg-primary/10 transition-colors" />
              <div className="w-10 h-10 text-primary mb-6 group-hover:scale-110 group-hover:text-white transition-all duration-300 relative z-10">{service.icon}</div>
              <h3 className="font-sans text-2xl font-bold text-white mb-4 relative z-10">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 relative z-10">{service.desc}</p>
              <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0 relative z-10">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
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
          <p className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-[0.3em]">Our Process</p>
          <h2 className="text-4xl md:text-6xl font-sans font-bold text-white mb-6">How We Deliver <span className="text-primary italic">Excellence.</span></h2>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { num: "01", title: "Consult", desc: "We assess current systems, identify inefficiencies, and build a clear digital roadmap." },
            { num: "02", title: "Build", desc: "We design and develop scalable technology solutions tailored to business goals." },
            { num: "03", title: "Automate", desc: "We integrate AI and automation to reduce manual processes and increase accuracy." },
            { num: "04", title: "Scale", desc: "We provide continuous optimization, analytics, and support to sustain growth." }
          ].map((step, i) => (
            <motion.div variants={fadeInUp} key={i} className="border-t border-primary/50 pt-8 relative group">
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-700" />
              <span className="text-5xl font-sans text-white/10 mb-4 block group-hover:text-primary/30 transition-colors duration-500">{step.num}</span>
              <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Product Showcase Section */}
      <section id="products" className="container mx-auto px-6 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-[0.3em]">Our Innovations</p>
          <h2 className="text-4xl md:text-6xl font-sans font-bold text-white mb-6">Funded AI <span className="text-primary italic">Product Room.</span></h2>
          <p className="text-gray-400 text-lg font-light">Explore our internally funded AI products and projects. Click to learn more or express your interest.</p>
        </motion.div>
        
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            { title: "AI Analytics Platform", desc: "Intelligent business analytics powered by machine learning for real-time insights.", tag: "AI Powered" },
            { title: "Smart Automation Suite", desc: "End-to-end workflow automation for enterprises. Reduce manual tasks by 80%.", tag: "Automation" },
            { title: "Data Visualization Engine", desc: "Transform complex datasets into stunning, interactive visual dashboards.", tag: "Data Science" }
          ].map((product, i) => (
            <motion.div variants={fadeInUp} key={i} className="border border-white/10 bg-[#050505] p-8 group hover:border-primary/50 transition-colors flex flex-col justify-between min-h-[250px] relative overflow-hidden">
              <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/10 rounded-full blur-[40px] group-hover:bg-primary/20 transition-colors duration-500" />
              <div className="relative z-10">
                <p className="text-primary text-xs font-bold mb-4 uppercase tracking-[0.2em]">{product.tag}</p>
                <h3 className="text-2xl font-sans font-bold text-white mb-4 group-hover:text-primary transition-colors">{product.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light">{product.desc}</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-xs uppercase tracking-widest text-primary font-bold opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 group-hover:translate-x-0 cursor-pointer relative z-10">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Case Studies / Projects */}
      <section id="portfolio" className="bg-[#050505] py-32 border-y border-white/10 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-sans font-bold text-white mb-6">Featured <span className="text-gradient italic">Projects.</span></h2>
              <p className="text-gray-400 text-lg font-light">Explore our diverse portfolio of successfully published websites and state-of-the-art digital applications.</p>
            </div>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { name: "The Shadow Agent", link: "https://theshadowagent.com", tag: "AI Assistant", desc: "Secure, offline AI desktop assistant running entirely on-device (via Ollama). Automates daily workflows with zero cloud exposure." },
              { name: "UnicornXMedia", link: "https://unicornxmedia.com", tag: "Founder Branding", desc: "Premium credibility platform helping founders gain authority through features across 500+ top media sites." },
              { name: "Rosebuddy", link: "https://rosebuddy.in", tag: "Emotional Support", desc: "Confidential, real-time voice and video session platform connecting users with professional listeners." },
              { name: "Vindex Protocol", link: "https://vindexprotocol.com", tag: "Web3 / Fintech", desc: "Decentralized open-source anti-fraud and income protection protocol safeguarding individuals." },
              { name: "BhaloGo", link: "https://bhalogo.com", tag: "On-Demand Logistics", desc: "Hyperlocal 60-minute delivery service operating in Agartala, providing ultra-fast logistics." },
              { name: "Brutally Honest", link: "https://brutallyhonest.xyz", tag: "AI Startup Roaster", desc: "Raw, AI-driven critique engine analyzing business ideas for logical fallacies and structural weaknesses." }
            ].map((study, i) => (
              <motion.a 
                variants={fadeInUp}
                href={study.link} target="_blank" rel="noopener noreferrer" key={i} 
                className="group cursor-pointer border border-white/10 bg-black p-8 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500 block relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-transparent border-r-transparent group-hover:border-r-primary/20 transition-all duration-300" />
                <p className="text-primary text-xs font-bold mb-6 uppercase tracking-[0.2em]">{study.tag}</p>
                <h3 className="text-2xl font-sans font-bold mb-4 text-white group-hover:text-primary transition-colors">{study.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light min-h-[5rem]">{study.desc}</p>
                
                <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                   <div className="text-white text-xs font-bold tracking-widest uppercase flex items-center gap-2">
                    Visit Website
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </motion.a>
            ))}
          </motion.div>
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

      {/* FAQ Section */}
      <section id="faq" className="container mx-auto px-6 py-16 border-t border-white/10 mt-16">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <p className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-[0.3em]">Got Questions?</p>
          <h2 className="text-4xl md:text-6xl font-sans font-bold text-white mb-6">Frequently Asked <span className="text-primary italic">Questions.</span></h2>
          <p className="text-gray-400 text-lg font-light">Everything you need to know about working with Optivra.</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-4"
        >
          {[
            { q: "What services does Optivra offer?", a: "We offer AI & Machine Learning consulting, Data Science & Analytics, Full-Stack Development, Cloud Automation, and Technology Strategy. Each solution is tailored to your specific business needs." },
            { q: "How do you ensure data security?", a: "We follow industry best practices including GDPR compliance, end-to-end encryption, regular security audits, and strict access controls. Your data never leaves secure environments without your explicit consent." },
            { q: "What industries do you work with?", a: "We work across FinTech, Healthcare, E-commerce, Manufacturing, and Education. Our team has deep domain expertise in each industry, ensuring solutions that are contextually relevant." },
            { q: "How long does a typical project take?", a: "Project timelines vary based on scope. A simple AI integration might take 4-6 weeks, while enterprise-scale transformations can span 3-6 months. We provide detailed timelines during consultation." },
            { q: "Do you offer ongoing support after project completion?", a: "Absolutely! We offer flexible maintenance and support packages including bug fixes, performance monitoring, security updates, and feature enhancements as your business grows." }
          ].map((faq, i) => (
            <motion.details 
              variants={fadeInUp}
              key={i} 
              className="group border border-white/10 bg-black [&_summary::-webkit-details-marker]:hidden hover:border-primary/50 transition-colors duration-300"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 font-sans text-xl text-white font-bold list-none">
                {faq.q}
                <span className="text-primary transition-transform duration-300 group-open:rotate-180">
                  <svg fill="none" height="24" shape-rendering="geometricPrecision" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                </span>
              </summary>
              <div className="p-6 pt-0 text-gray-400 font-light text-sm leading-relaxed border-t border-white/5 mt-2">
                {faq.a}
              </div>
            </motion.details>
          ))}
        </motion.div>
      </section>

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
              
              <a 
                href="https://calendly.com/hello-optivra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-4 px-8 py-5 bg-primary text-black font-bold hover:bg-white hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-500 tracking-widest uppercase text-xs group/btn mb-10"
              >
                Book via Calendly
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
              </a>
              
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
