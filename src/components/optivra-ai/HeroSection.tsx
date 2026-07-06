"use client";

import { motion } from "framer-motion";
import { Zap, Play, ShieldCheck, Sparkles, TrendingUp, Users, CheckCircle2 } from "lucide-react";

const WORDS = ["Sales.", "Support.", "Operations.", "Reporting.", "Growth."];

function WordCycler() {
  return (
    <motion.span
      className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFDF00] to-[#F3E5AB]"
    >
      {WORDS.map((word, i) => (
        <motion.span
          key={word}
          initial={{ opacity: 0, y: 20, position: "absolute" as const }}
          animate={{
            opacity: [0, 1, 1, 0],
            y: [20, 0, 0, -20],
          }}
          transition={{
            duration: 2.5,
            delay: i * 2.5,
            repeat: Infinity,
            repeatDelay: (WORDS.length - 1) * 2.5,
            ease: "easeInOut",
          }}
          style={{ position: i === 0 ? "relative" : "absolute", left: 0 }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

const STATS = [
  { icon: TrendingUp, value: "3x", label: "Lead Conversion" },
  { icon: Zap, value: "40%", label: "Cost Reduction" },
  { icon: CheckCircle2, value: "0", label: "Manual Data Entry" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-32 pb-20">

      {/* ── Animated Grid Background ── */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212,175,55,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212,175,55,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* ── Radial fade over grid ── */}
      <div className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.12) 0%, transparent 70%)",
        }}
      />

      {/* ── Aurora Orbs ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-15%] left-[20%] w-[700px] h-[700px] bg-[#D4AF37]/20 rounded-full blur-[160px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, -20, 0], opacity: [0.08, 0.18, 0.08] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 3 }}
          className="absolute bottom-[0%] right-[10%] w-[500px] h-[500px] bg-[#FFDF00]/15 rounded-full blur-[150px]"
        />
      </div>

      {/* ── Floating particles ── */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 4 + (i % 4),
              delay: i * 0.6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute w-1 h-1 rounded-full bg-[#D4AF37]/40"
            style={{
              left: `${8 + (i * 7.5) % 84}%`,
              top: `${20 + (i * 13) % 60}%`,
            }}
          />
        ))}
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-6xl mx-auto">

        {/* Badge row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] text-xs font-bold uppercase tracking-widest backdrop-blur-xl shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <motion.span animate={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 1 }}>
              <Sparkles className="w-3 h-3" />
            </motion.span>
            Early Access Open
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold uppercase tracking-widest backdrop-blur-xl">
            <motion.span animate={{ opacity: [1, 0.3, 1] }} transition={{ duration: 1.5, repeat: Infinity }}>
              <ShieldCheck className="w-3 h-3" />
            </motion.span>
            Enterprise Ready
          </div>
        </motion.div>

        {/* Main headline — staggered word reveal */}
        <div className="overflow-hidden mb-4">
          <motion.p
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-[13px] md:text-sm font-bold tracking-[0.3em] uppercase text-[#D4AF37]/70 mb-5"
          >
            The AI Operating System for Modern Business
          </motion.p>
        </div>

        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[90px] font-black text-white tracking-tighter leading-[0.95]"
          >
            Scale Revenue.<br/>
            Cut Costs.
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl md:text-7xl lg:text-[90px] font-black tracking-tighter leading-[0.95] text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#FFDF00] to-[#F3E5AB]"
          >
            Automate Everything.
          </motion.h1>
        </div>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed font-light"
        >
          Optivra AI works 24/7 to qualify leads, handle support, and run operations so you can focus entirely on <strong className="text-white/90 font-medium">growth and strategy</strong>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <a
            href="mailto:hello@optivra.in?subject=Early%20Access%20-%20Optivra%20AI"
            className="relative group px-8 py-4 rounded-2xl bg-[#D4AF37] text-black font-black text-sm tracking-wide overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFDF00] to-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 shadow-[0_0_40px_rgba(212,175,55,0)] group-hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] transition-shadow" />
            <span className="relative flex items-center gap-2">
              <Zap className="w-4 h-4 fill-black group-hover:scale-110 transition-transform" />
              Get Early Access
            </span>
          </a>
          <a
            href="#demo"
            className="group px-8 py-4 rounded-2xl border border-white/10 bg-white/[0.03] text-white font-bold text-sm tracking-wide hover:bg-white/[0.07] hover:border-white/20 transition-all backdrop-blur-xl flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform fill-[#D4AF37]" />
            Watch Demo
          </a>
        </motion.div>

        {/* Animated Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-6"
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-xl hover:border-[#D4AF37]/30 transition-colors group"
            >
              <div className="w-8 h-8 rounded-xl bg-[#D4AF37]/10 flex items-center justify-center">
                <stat.icon className="w-4 h-4 text-[#D4AF37]" />
              </div>
              <div className="text-left">
                <p className="text-lg font-black text-white leading-none">{stat.value}</p>
                <p className="text-[11px] text-gray-500 font-medium leading-none mt-0.5">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <p className="text-[10px] text-gray-600 uppercase tracking-[0.3em] font-bold">Scroll to explore</p>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-[#D4AF37]/60" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
