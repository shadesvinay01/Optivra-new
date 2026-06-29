"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle2, Cpu, Code2, LineChart, ShieldCheck, HeadphonesIcon, Globe, Rocket, TerminalSquare, Search, Lock, Zap, FileText } from 'lucide-react';
import PricingDownloadButton from '@/components/ui/PricingDownloadButton';

export default function PricingPage() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
  };

  const coreServices = [
    { title: "Website Development", icon: <Globe className="w-6 h-6" /> },
    { title: "E-commerce Solutions", icon: <LineChart className="w-6 h-6" /> },
    { title: "Custom Software", icon: <TerminalSquare className="w-6 h-6" /> },
    { title: "Mobile Apps", icon: <Rocket className="w-6 h-6" /> },
    { title: "AI Chatbots & AI Agents", icon: <Cpu className="w-6 h-6" /> },
    { title: "AI Automation", icon: <Zap className="w-6 h-6" /> },
    { title: "CRM & ERP", icon: <Lock className="w-6 h-6" /> },
    { title: "SaaS Development", icon: <Code2 className="w-6 h-6" /> },
    { title: "UI/UX Design", icon: <FileText className="w-6 h-6" /> },
    { title: "Cloud & DevOps", icon: <ShieldCheck className="w-6 h-6" /> },
  ];

  const processSteps = [
    "Discovery Call",
    "Requirement Analysis",
    "Solution Design",
    "UI/UX Design",
    "Development",
    "QA Testing",
    "Deployment",
    "Training",
    "Ongoing Support"
  ];

  const includedFeatures = [
    "Discovery & Strategy Consultation",
    "Dedicated Project Manager",
    "Responsive Design",
    "Basic SEO Setup",
    "Google Analytics & Search Console Setup",
    "Security Best Practices",
    "Performance Optimization",
    "Deployment Support",
    "One User Training Session",
    "Project Documentation",
    "30 Days Post-Launch Bug Support"
  ];

  const pricingData = [
    { service: "Landing Page", price: "₹24,999" },
    { service: "Business Website", price: "₹49,999" },
    { service: "E-commerce Website", price: "₹79,999" },
    { service: "AI Chatbot", price: "₹49,999" },
    { service: "AI Automation", price: "₹75,000" },
    { service: "Custom Web Application", price: "₹1,99,999" },
    { service: "Mobile App Development", price: "₹2,49,999" },
    { service: "CRM Development", price: "₹99,999" },
    { service: "SaaS MVP Development", price: "₹4,99,999" },
    { service: "ERP / Enterprise AI", price: "Custom Quote" }
  ];

  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#D4AF37] selection:text-black pt-24 pb-16">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
            OPTIVRA
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-300">
            AI • Software • Automation • Digital Transformation
          </h2>
          <p className="text-xl text-[#D4AF37] max-w-3xl mx-auto">
            Building Intelligent Digital Solutions That Scale Businesses
          </p>
        </motion.div>

        {/* About Section */}
        <motion.div variants={itemVariants} className="glass-card rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h3 className="text-3xl font-semibold mb-6 text-gradient">About Optivra</h3>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Optivra is an AI-first technology consulting company helping startups, SMEs and enterprises build scalable software, AI solutions and business automation systems.
          </p>
        </motion.div>

        {/* Why Choose Us & Core Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-3xl font-semibold text-gradient">Why Choose Optivra</h3>
            <ul className="space-y-4">
              {['AI-first approach', 'End-to-end development', 'Dedicated Project Manager', 'Agile delivery', 'Secure & scalable architecture', 'Post-launch support'].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-lg text-gray-300">
                  <CheckCircle2 className="text-[#D4AF37] w-6 h-6 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div variants={itemVariants} className="space-y-8">
            <h3 className="text-3xl font-semibold text-gradient">Core Services</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {coreServices.map((service, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <div className="text-[#D4AF37]">{service.icon}</div>
                  <span className="text-gray-200">{service.title}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Our Process */}
        <motion.div variants={itemVariants} className="space-y-12">
          <h3 className="text-3xl font-semibold text-center text-gradient">Our Process</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="px-6 py-3 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] font-medium whitespace-nowrap">
                  {idx + 1}. {step}
                </div>
                {idx < processSteps.length - 1 && (
                  <div className="hidden md:block w-8 h-[2px] bg-white/20"></div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Printable Pricing Section Container */}
        <motion.div variants={itemVariants} id="pricing-print-section" className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Subtle background glow for aesthetics (hidden on print usually via bg colors in pdf) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4AF37]/10 via-transparent to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 space-y-16">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div>
                <h3 className="text-4xl font-bold text-white mb-2">Pricing Overview</h3>
                <p className="text-gray-400 text-lg">Indicative starting prices to help you estimate project budgets.</p>
              </div>
              {/* Note: In print mode, we might want to hide this button via CSS */}
              <div className="print:hidden">
                <PricingDownloadButton targetId="pricing-print-section" filename="Optivra_Pricing.pdf" />
              </div>
            </div>

            {/* Pricing Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-4 px-6 text-xl font-semibold text-[#D4AF37] w-2/3">Service</th>
                    <th className="py-4 px-6 text-xl font-semibold text-[#D4AF37] w-1/3">Starting From</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingData.map((row, idx) => (
                    <tr key={idx} className="border-b border-white/10 hover:bg-white/5 transition-colors group">
                      <td className="py-5 px-6 text-lg text-gray-200 group-hover:text-white transition-colors">
                        {row.service}
                      </td>
                      <td className="py-5 px-6 text-lg font-medium text-white">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Included Features */}
            <div className="space-y-6">
              <h4 className="text-2xl font-semibold text-white">Included at No Additional Cost</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
                {includedFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm md:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Commercial Notes */}
            <div className="mt-12 p-6 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-xl font-semibold text-[#D4AF37] mb-4">Commercial Notes</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Prices shown are <strong>starting prices</strong> and are intended for budgeting purposes only.</li>
                <li>Final quotation depends on project scope, features, integrations, timeline and business requirements.</li>
                <li>GST will be charged separately, if applicable.</li>
                <li>A detailed proposal is shared after the discovery call and requirement analysis.</li>
              </ul>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
