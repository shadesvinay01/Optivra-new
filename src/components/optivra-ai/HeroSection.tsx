"use client";

import { motion } from "framer-motion";
import { Zap, Play, ShieldCheck, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative pt-44 pb-20 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10 min-h-[90vh] justify-center">
      
      {/* Background Aurora / Blur Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 flex items-center justify-center">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3] 
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] w-[800px] h-[600px] bg-indigo-600/20 rounded-full blur-[150px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2] 
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-[10%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[150px]"
        />
      </div>

      <div className="relative z-10 w-full flex flex-col items-center">
        
        {/* Badges */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <Sparkles className="w-3 h-3" />
            Launching Soon
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
            <ShieldCheck className="w-3 h-3" />
            Enterprise Ready
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[1.05] max-w-5xl mb-8"
        >
          Meet Your <br className="hidden md:block"/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            AI Workforce.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl mb-12 leading-relaxed font-light"
        >
          Optivra AI is an <strong className="text-white font-medium">AI Operating System</strong> that gives businesses intelligent AI employees capable of automating sales, customer support, operations, reporting, and internal workflows—all from one unified platform.
        </motion.p>

        {/* CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8 w-full sm:w-auto"
        >
          <a href="#pricing" className="px-8 py-4 rounded-xl bg-white text-black font-black text-sm tracking-wide hover:bg-indigo-50 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] transition-all flex items-center justify-center gap-2 w-full sm:w-auto group">
            <Zap className="w-4 h-4 text-indigo-600 group-hover:scale-110 transition-transform" /> 
            Get Early Access
          </a>
          <a href="#demo" className="px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-sm tracking-wide hover:bg-white/10 transition-all flex items-center justify-center gap-2 w-full sm:w-auto backdrop-blur-md group">
            <Play className="w-4 h-4 text-purple-400 group-hover:scale-110 transition-transform" /> 
            Watch Live Demo
          </a>
        </motion.div>

        {/* Small text */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xs text-gray-500 uppercase tracking-widest font-bold"
        >
          Built for Startups, SMEs and Enterprises.
        </motion.p>

      </div>
    </section>
  );
}
