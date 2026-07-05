"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Zap, DollarSign, Users, CheckCircle2, TrendingUp, ChevronRight, Bell, Wifi } from "lucide-react";

const CONVERSATIONS = [
  {
    trigger: "Analyse our Q3 sales pipeline.",
    steps: [
      { type: "thinking", text: "Connecting to CRM database..." },
      { type: "thinking", text: "Running lead scoring models..." },
      {
        type: "response",
        text: "**Q3 Pipeline Analysis Complete**\n\n📊 Total Pipeline Value: **$1.42M**\n✅ Hot Leads (Score >85): **14 contacts**\n⚠️ At-Risk Deals: **3 deals — $180K**\n\nRecommendation: Prioritise *Acme Corp*, *NovaTech* & *Blueridge Industries* — combined value of $340K.",
      },
    ],
  },
  {
    trigger: "Draft a follow-up email for Acme Corp.",
    steps: [
      { type: "thinking", text: "Loading Acme Corp history..." },
      { type: "thinking", text: "Analysing previous communication tone..." },
      {
        type: "response",
        text: "**Draft Email — Acme Corp**\n\nSubject: Following up on your AI goals\n\nHi David,\n\nFollowing our call last Tuesday — Optivra AI's Data Analyst Agent could save your team ~15 hrs/week on reporting.\n\nWould Thursday at 3 PM work for a 20-min walkthrough?",
      },
    ],
  },
  {
    trigger: "Show last month's revenue breakdown.",
    steps: [
      { type: "thinking", text: "Fetching financial records..." },
      {
        type: "response",
        text: "**Revenue — June 2026**\n\n💰 Total: **$142,390**\n- Enterprise: $98,000 (69%)\n- SME Subs: $31,200 (22%)\n- Projects: $13,190 (9%)\n\n📈 MoM Growth: **+18.4%**\nTop vertical: **Healthcare (+32%)**",
      },
    ],
  },
];

const QUICK_PROMPTS = ["Analyse Q3 pipeline", "Draft Acme email", "Revenue breakdown"];

interface Message {
  role: "user" | "agent";
  text: string;
  isThinking?: boolean;
}

export default function InteractiveDemo() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "agent",
      text: "Hello! I'm your Optivra AI Agent. I have full access to your CRM, analytics, and communications. What would you like me to do?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [convIndex, setConvIndex] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const runConversation = async (conv: (typeof CONVERSATIONS)[0]) => {
    if (isProcessing) return;
    setIsProcessing(true);
    setMessages((prev) => [...prev, { role: "user", text: conv.trigger }]);

    for (const step of conv.steps) {
      await new Promise((r) => setTimeout(r, 700));
      if (step.type === "thinking") {
        setMessages((prev) => [...prev, { role: "agent", text: step.text, isThinking: true }]);
        await new Promise((r) => setTimeout(r, 1100));
        setMessages((prev) => prev.slice(0, -1));
      } else {
        setMessages((prev) => [...prev, { role: "agent", text: step.text }]);
      }
    }
    setIsProcessing(false);
  };

  const handleQuick = (i: number) => {
    const next = CONVERSATIONS[i];
    runConversation(next);
    setConvIndex((i + 1) % CONVERSATIONS.length);
  };

  const handleSend = () => {
    if (!input.trim() || isProcessing) return;
    setInput("");
    runConversation(CONVERSATIONS[convIndex]);
    setConvIndex((convIndex + 1) % CONVERSATIONS.length);
  };

  const renderText = (text: string) =>
    text.split("\n").map((line, i) => {
      const html = line
        .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/g, "<em>$1</em>");
      return <p key={i} className="leading-relaxed" dangerouslySetInnerHTML={{ __html: html }} />;
    });

  /* ── Chat Panel (shared logic, different shells) ── */
  const ChatContent = ({ compact }: { compact?: boolean }) => (
    <>
      {/* Messages */}
      <div className={`flex-1 overflow-y-auto flex flex-col gap-3 scroll-smooth ${compact ? "p-3 text-[11px]" : "p-5 text-sm"}`}>
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25 }}
              className={`flex gap-2 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              {msg.role === "agent" && (
                <div className={`rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFDF00] flex items-center justify-center shrink-0 shadow-[0_0_8px_rgba(212,175,55,0.3)] ${compact ? "w-5 h-5 mt-0.5" : "w-7 h-7 mt-0.5"}`}>
                  <Zap className={`text-black fill-black ${compact ? "w-2.5 h-2.5" : "w-3.5 h-3.5"}`} />
                </div>
              )}
              <div
                className={`max-w-[78%] rounded-2xl px-3 py-2 flex flex-col gap-0.5 ${
                  msg.role === "user"
                    ? "bg-[#D4AF37] text-black font-medium rounded-tr-sm"
                    : msg.isThinking
                    ? "bg-white/5 border border-white/10 text-gray-400 italic rounded-tl-sm"
                    : "bg-white/[0.06] border border-white/[0.08] text-gray-200 rounded-tl-sm"
                }`}
              >
                {msg.isThinking ? (
                  <div className="flex items-center gap-1.5">
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                      <Zap className="w-2.5 h-2.5 text-[#D4AF37]" />
                    </motion.div>
                    <span>{msg.text}</span>
                  </div>
                ) : (
                  renderText(msg.text)
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={bottomRef} />
      </div>

      {/* Quick Prompts */}
      {!compact && (
        <div className="px-4 py-2 flex gap-2 flex-wrap border-t border-white/[0.05]">
          {QUICK_PROMPTS.map((p, i) => (
            <button
              key={i}
              onClick={() => handleQuick(i)}
              disabled={isProcessing}
              className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-gray-400 hover:border-[#D4AF37]/40 hover:text-[#D4AF37] transition-all disabled:opacity-30 flex items-center gap-1"
            >
              <ChevronRight className="w-2.5 h-2.5" /> {p}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className={`border-t border-white/[0.08] flex items-center gap-2 ${compact ? "px-3 py-2" : "px-4 py-3"}`}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask your AI agent…"
          disabled={isProcessing}
          className={`flex-1 bg-transparent text-white placeholder-gray-600 focus:outline-none disabled:opacity-30 ${compact ? "text-[10px]" : "text-sm"}`}
        />
        <button
          onClick={handleSend}
          disabled={isProcessing}
          className={`rounded-full bg-[#D4AF37] flex items-center justify-center text-black hover:bg-[#F3E5AB] transition-colors disabled:opacity-30 shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.25)] ${compact ? "w-6 h-6" : "w-8 h-8"}`}
        >
          <Send className={compact ? "w-2.5 h-2.5" : "w-3.5 h-3.5"} />
        </button>
      </div>
    </>
  );

  return (
    <section id="demo" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      {/* Section Header */}
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
          See It{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">
            In Action.
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Your AI agent has full access to your business data — CRM, finance, communications — and acts on your behalf instantly.
        </p>
      </div>

      {/* Devices layout */}
      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-0">

        {/* ── LAPTOP MOCKUP ── */}
        <div className="relative w-full max-w-3xl z-10">
          {/* Glow */}
          <div className="absolute inset-0 bg-[#D4AF37]/10 blur-[80px] rounded-full -z-10" />

          {/* Screen */}
          <div className="w-full bg-[#111] rounded-t-[1.2rem] border border-[#2a2a2a] shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_40px_80px_rgba(0,0,0,0.8)] overflow-hidden"
               style={{ aspectRatio: "16/10" }}>
            {/* Traffic lights bar */}
            <div className="h-9 bg-[#0a0a0a] border-b border-white/[0.05] flex items-center px-4 justify-between shrink-0">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="flex items-center gap-1.5 bg-white/[0.04] border border-white/[0.06] rounded-md px-3 py-0.5">
                <span className="text-[10px] text-gray-500">app.optivra.in/agent</span>
              </div>
              <div className="flex gap-3 items-center">
                <Bell className="w-3.5 h-3.5 text-gray-600" />
                <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFDF00]" />
              </div>
            </div>

            {/* App content */}
            <div className="flex h-[calc(100%-36px)]">
              {/* Sidebar */}
              <div className="w-14 bg-black/60 border-r border-white/[0.05] flex flex-col items-center py-4 gap-5 shrink-0">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#D4AF37] to-[#FFDF00] flex items-center justify-center shadow-[0_0_10px_rgba(212,175,55,0.3)]">
                  <Zap className="w-3.5 h-3.5 text-black fill-black" />
                </div>
                {[DollarSign, Users, CheckCircle2, TrendingUp].map((Icon, i) => (
                  <div key={i} className={`w-7 h-7 rounded-lg flex items-center justify-center ${i === 0 ? "bg-[#D4AF37]/10 border border-[#D4AF37]/20" : "bg-white/[0.03]"}`}>
                    <Icon className={`w-3.5 h-3.5 ${i === 0 ? "text-[#D4AF37]" : "text-gray-600"}`} />
                  </div>
                ))}
              </div>

              {/* Stats panel */}
              <div className="w-44 bg-[#050505] border-r border-white/[0.05] p-4 flex flex-col gap-3 shrink-0">
                <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest mb-1">Live Overview</p>
                {[
                  { label: "Revenue MTD", val: "$142K", color: "text-[#D4AF37]" },
                  { label: "AI Agents", val: "12 Online", color: "text-emerald-400" },
                  { label: "Tasks Done", val: "8,294", color: "text-blue-400" },
                  { label: "Hours Saved", val: "340 hrs", color: "text-purple-400" },
                ].map((s, i) => (
                  <div key={i} className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.05]">
                    <p className="text-[9px] text-gray-600 mb-0.5">{s.label}</p>
                    <p className={`text-sm font-black ${s.color}`}>{s.val}</p>
                  </div>
                ))}
                {/* mini chart */}
                <div className="mt-auto">
                  <p className="text-[9px] text-gray-600 mb-2">Revenue Trend</p>
                  <div className="flex items-end gap-1 h-12">
                    {[30, 50, 40, 65, 80, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: i * 0.1 }}
                        className="flex-1 rounded-t-sm"
                        style={{ background: `rgba(212,175,55,${0.25 + h / 250})` }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Chat area */}
              <div className="flex-1 flex flex-col bg-[#030303] overflow-hidden">
                {/* Chat header */}
                <div className="px-4 py-2 border-b border-white/[0.05] flex items-center gap-2 shrink-0">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFDF00] flex items-center justify-center shadow-[0_0_8px_rgba(212,175,55,0.3)]">
                    <Zap className="w-3 h-3 text-black fill-black" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-white leading-none">Optivra AI Agent</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <motion.span animate={{ opacity: [1,0.3,1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <p className="text-[9px] text-emerald-400">Active — CRM, Finance, Email connected</p>
                    </div>
                  </div>
                </div>
                <ChatContent />
              </div>
            </div>
          </div>

          {/* Laptop hinge + base */}
          <div className="w-full h-2 bg-gradient-to-b from-[#888] to-[#666] rounded-b-sm" />
          <div className="mx-auto w-[60%] h-3 bg-gradient-to-b from-[#555] to-[#444] rounded-b-xl shadow-[0_8px_30px_rgba(0,0,0,0.6)]" />
        </div>

        {/* ── PHONE MOCKUP ── */}
        <div className="relative w-[220px] shrink-0 z-20 lg:-ml-10 lg:mt-20 self-center">
          {/* Glow */}
          <div className="absolute inset-0 bg-[#D4AF37]/5 blur-[40px] -z-10 rounded-full" />

          <div className="w-full bg-black rounded-[2rem] border-[5px] border-[#1a1a1a] shadow-[0_30px_80px_rgba(0,0,0,0.9),0_0_0_1px_rgba(255,255,255,0.05)] overflow-hidden flex flex-col" style={{ aspectRatio: "9/19.5" }}>
            {/* Dynamic Island */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-full z-30 border border-white/5 flex items-center justify-center gap-1.5">
              <Wifi className="w-2 h-2 text-gray-600" />
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            </div>

            {/* Screen */}
            <div className="flex-1 bg-[#050505] flex flex-col overflow-hidden">
              {/* Status bar */}
              <div className="h-8 shrink-0" />

              {/* Header */}
              <div className="px-3 py-2 border-b border-white/[0.06] flex items-center gap-2 shrink-0">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFDF00] flex items-center justify-center shadow-[0_0_8px_rgba(212,175,55,0.3)]">
                  <Zap className="w-3.5 h-3.5 text-black fill-black" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white leading-none">Optivra Agent</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <motion.span animate={{ opacity: [1,0.3,1] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-1 h-1 rounded-full bg-emerald-400" />
                    <p className="text-[9px] text-emerald-400">Online</p>
                  </div>
                </div>
              </div>

              {/* Compact chat */}
              <div className="flex-1 flex flex-col overflow-hidden">
                <ChatContent compact />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Caption */}
      <p className="text-center text-xs text-gray-600 mt-8 uppercase tracking-widest font-bold">
        Try it — click a prompt or type your own
      </p>
    </section>
  );
}
