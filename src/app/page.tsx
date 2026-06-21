"use client";

import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, BarChart3, Database, Workflow, ShieldCheck, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 pb-32">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-pink-50 -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] -z-10" />

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-8 border border-primary/20 shadow-sm">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Enterprise AI Solutions
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-gray-900 text-balance">
                  Transform Your Business With <span className="text-gradient">AI-Powered</span> Solutions
                </h1>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 text-balance">
                  We design, develop and deploy intelligent systems that automate operations, accelerate growth and unlock new revenue opportunities.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                  <Link href="#contact" className="w-full sm:w-auto px-8 py-4 rounded-full bg-primary text-white font-bold hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2">
                    Book Free AI Strategy Call <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link href="#portfolio" className="w-full sm:w-auto px-8 py-4 rounded-full glass-card hover:bg-white transition-all font-semibold flex items-center justify-center text-gray-700">
                    View Case Studies
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="flex-1 w-full relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-square w-full max-w-[600px] mx-auto glass-card rounded-3xl flex items-center justify-center overflow-hidden border border-white shadow-2xl shadow-primary/10"
              >
                {/* Placeholder for Interactive AI Network */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10" />
                <BrainCircuit className="w-32 h-32 text-primary opacity-50 animate-pulse" />
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/80 backdrop-blur-md rounded-2xl border border-white shadow-sm">
                  <p className="text-sm font-mono text-primary font-semibold">System.initialize("ai_core")</p>
                  <p className="text-sm font-mono text-gray-500">&gt; Machine Learning ready</p>
                  <p className="text-sm font-mono text-gray-500">&gt; Automation workflows active</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Technology Expertise */}
      <section className="container mx-auto px-6 border-y border-gray-200 py-12">
        <p className="text-center text-sm font-bold text-gray-400 mb-8 uppercase tracking-widest">Trusted Technology Expertise</p>
        <div className="flex flex-wrap justify-center gap-12 text-gray-400">
          {["Artificial Intelligence", "Machine Learning", "Data Science", "Computer Vision", "NLP", "Generative AI", "Cloud Engineering", "Full Stack Development"].map((tech) => (
            <div key={tech} className="text-lg font-bold tracking-tight">{tech}</div>
          ))}
        </div>
      </section>

      {/* Why Optivra Section */}
      <section className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Why Businesses Choose <span className="text-gradient">Optivra</span></h2>
          <p className="text-gray-600 text-lg text-balance">We don't just write code. We engineer scalable systems designed to solve complex business problems and generate measurable ROI.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "AI First Approach", icon: <BrainCircuit />, desc: "Every solution is architected with modern AI capabilities at its core, not as an afterthought." },
            { title: "Enterprise Architecture", icon: <ShieldCheck />, desc: "Robust, secure, and highly scalable systems built to handle mission-critical workloads." },
            { title: "Rapid MVP Development", icon: <Zap />, desc: "Go to market faster with our accelerated prototyping and agile delivery methodology." },
            { title: "End-to-End Delivery", icon: <Workflow />, desc: "From conceptualization and UI/UX to deployment and infrastructure management." },
            { title: "Scalable Systems", icon: <Database />, desc: "Cloud-native architectures designed to grow seamlessly with your user base." },
            { title: "Dedicated Support", icon: <BarChart3 />, desc: "Continuous monitoring, optimization, and post-launch technical partnership." }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 rounded-3xl hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all group"
            >
              <div className="w-14 h-14 rounded-2xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Case Studies / Portfolio */}
      <section id="portfolio" className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Proven <span className="text-gradient">Results</span></h2>
            <p className="text-gray-600 text-lg">Real-world applications of our AI and engineering expertise driving tangible business outcomes.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            { name: "ShadowAgent", tag: "AI Automation", desc: "Local AI Agent Platform automating Gmail, Calendar, WhatsApp and internal business workflows.", metric: "80% Time Saved" },
            { name: "AI Invitation Creator", tag: "Generative AI", desc: "SaaS platform leveraging generative AI models to instantly create highly personalized digital designs.", metric: "10x Faster Design" },
            { name: "Doctor Interface Platform", tag: "Healthcare", desc: "Secure workflow management system streamlining patient data and diagnosis pipelines.", metric: "HIPAA Compliant" }
          ].map((study, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] glass-card bg-white rounded-3xl mb-6 overflow-hidden relative border border-gray-100 shadow-md group-hover:shadow-xl transition-all">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity" />
                {/* Placeholder Image */}
                <div className="absolute inset-0 bg-gray-50 flex items-center justify-center">
                  <BrainCircuit className="w-16 h-16 text-gray-200 group-hover:text-primary transition-colors duration-500" />
                </div>
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="inline-block px-3 py-1 rounded-full bg-white text-primary text-xs font-bold shadow-sm mb-2 border border-gray-100">
                    {study.metric}
                  </div>
                </div>
              </div>
              <p className="text-primary text-sm font-bold mb-2 uppercase tracking-wider">{study.tag}</p>
              <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors">{study.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">{study.desc}</p>
              <span className="text-gray-900 font-semibold flex items-center gap-2 group-hover:gap-3 group-hover:text-primary transition-all">
                Read Case Study <ArrowRight className="w-4 h-4" />
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-24 border-y border-gray-200">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Our <span className="text-gradient">Services</span></h2>
            <p className="text-gray-600 text-lg">Comprehensive technology solutions tailored for forward-thinking enterprises.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "AI Consulting", "Machine Learning Development", "Data Science Solutions", 
              "Generative AI Applications", "AI Automation Systems", "Full Stack Development", 
              "Cloud Engineering", "CTO as a Service"
            ].map((service, i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-2xl hover:bg-primary/5 hover:shadow-md transition-all cursor-pointer border border-transparent hover:border-primary/20 group">
                <h3 className="font-bold text-gray-900 mb-2">{service}</h3>
                <p className="text-xs font-semibold text-primary opacity-0 group-hover:opacity-100 flex items-center gap-1 transition-all mt-4 -translate-x-2 group-hover:translate-x-0">
                  Learn more <ArrowRight className="w-3 h-3" />
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Our <span className="text-gradient">Leadership</span></h2>
          <p className="text-gray-600 text-lg">Guided by a global team of technology veterans and AI researchers.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            { name: "Sarveshwar Mandal", role: "Founder & CEO", desc: "Former enterprise architect with 10+ years scaling AI systems." },
            { name: "Placeholder CTO", role: "Chief Technology Officer", desc: "Expert in distributed systems and LLM orchestration." },
            { name: "Placeholder CMO", role: "Chief Marketing Officer", desc: "Driving growth strategies for deep-tech SaaS platforms." }
          ].map((member, i) => (
            <div key={i} className="glass-card bg-white p-8 rounded-3xl text-center group shadow-md hover:shadow-xl transition-all">
              <div className="w-24 h-24 mx-auto bg-gray-100 rounded-full mb-6 overflow-hidden border-2 border-transparent group-hover:border-primary transition-colors" />
              <h3 className="text-xl font-bold text-gray-900">{member.name}</h3>
              <p className="text-primary text-sm font-semibold mb-3">{member.role}</p>
              <p className="text-gray-600 text-sm">{member.desc}</p>
              <Link href="#" className="inline-block mt-6 text-sm font-semibold text-gray-500 hover:text-primary transition-colors">
                LinkedIn Profile
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-6 bg-gradient-to-br from-blue-50 to-pink-50 py-24 rounded-[3rem]">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">Client <span className="text-gradient">Success</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            { quote: "Optivra transformed our data infrastructure, leading to a 40% reduction in reporting time. Their team is exceptional.", author: "John Doe", role: "CTO, FinTech Corp" },
            { quote: "The AI automation tools implemented by Optivra completely revolutionized how we handle customer support.", author: "Sarah Smith", role: "VP Operations, RetailX" }
          ].map((t, i) => (
            <div key={i} className="bg-white p-10 rounded-3xl shadow-lg relative border border-white">
              <div className="text-6xl text-primary/10 absolute top-6 left-6 font-serif">"</div>
              <p className="text-lg relative z-10 mb-8 italic text-gray-600 font-medium leading-relaxed">"{t.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full" />
                <div>
                  <p className="font-bold text-gray-900">{t.author}</p>
                  <p className="text-sm text-primary font-medium">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Generation CTA */}
      <section id="contact" className="container mx-auto px-6">
        <div className="bg-gray-900 rounded-[3rem] p-8 md:p-16 relative overflow-hidden shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent z-0" />
          <div className="relative z-10 flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Free AI Readiness <br/><span className="text-primary">Assessment</span></h2>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                Book a 30-minute strategy session with our senior architects to discover how AI can transform your specific operations.
              </p>
              <ul className="space-y-4 mb-8">
                {["Identify automation bottlenecks", "Evaluate Generative AI use-cases", "Technical architecture review"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300">
                    <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex-1 w-full max-w-md">
              <form className="bg-white p-8 rounded-3xl shadow-xl flex flex-col gap-4">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Request Session</h3>
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-gray-900" />
                  <input type="text" placeholder="Last Name" className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-gray-900" />
                </div>
                <input type="email" placeholder="Work Email" className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-gray-900" />
                <input type="text" placeholder="Company Name" className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-gray-900" />
                <button className="w-full bg-primary text-white font-bold py-4 rounded-xl mt-4 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/30">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
