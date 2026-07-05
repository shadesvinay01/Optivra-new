"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Zap, BarChart3, Users, CheckCircle2, TrendingUp, DollarSign, ChevronRight } from "lucide-react";

const AGENT_CONVERSATIONS = [
  {
    trigger: "Analyze our Q3 sales pipeline and give me a summary.",
    steps: [
      { type: "thinking", text: "Connecting to CRM database..." },
      { type: "thinking", text: "Pulling pipeline data for Q3..." },
      { type: "thinking", text: "Running lead scoring models..." },
      { type: "response", text: "**Q3 Pipeline Analysis Complete**\n\n📊 Total Pipeline Value: **$1.42M**\n✅ Hot Leads (Score >85): **14 contacts**\n⚠️ At-Risk Deals: **3 deals worth $180K**\n\nTop recommendation: Prioritize outreach to *Acme Corp*, *NovaTech*, and *Blueridge Industries* — combined value of $340K." },
    ],
  },
  {
    trigger: "Draft a personalized follow-up email for Acme Corp.",
    steps: [
      { type: "thinking", text: "Loading Acme Corp contact history..." },
      { type: "thinking", text: "Analyzing previous communication tone..." },
      { type: "response", text: "**Draft Email — Acme Corp**\n\nSubject: Following up on your AI automation goals\n\nHi David,\n\nI wanted to follow up on our conversation from last Tuesday. Based on the challenges you mentioned around manual reporting, I believe Optivra AI's Data Analyst Agent could save your team ~15 hours/week.\n\nWould Thursday at 3pm work for a quick 20-minute walkthrough?" },
    ],
  },
  {
    trigger: "Show me last month's revenue breakdown.",
    steps: [
      { type: "thinking", text: "Fetching financial records..." },
      { type: "thinking", text: "Generating revenue chart..." },
      { type: "response", text: "**Revenue Breakdown — June 2026**\n\n💰 Total Revenue: **$142,390**\n- Enterprise Contracts: $98,000 (69%)\n- SME Subscriptions: $31,200 (22%)\n- One-time Projects: $13,190 (9%)\n\n📈 MoM Growth: **+18.4%**\nTop performing vertical: **Healthcare (+32%)**" },
    ],
  },
];

const QUICK_PROMPTS = [
  "Analyze Q3 pipeline",
  "Draft Acme Corp email",
  "Show revenue breakdown",
];

interface Message {
  role: "user" | "agent";
  text: string;
  isThinking?: boolean;
}

export default function InteractiveDemo() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "agent", text: "Hello! I'm your Optivra AI Agent. I have access to your CRM, analytics, and communications. What would you like me to do?" },
  ]);
  const [input, setInput] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [convIndex, setConvIndex] = useState(0);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const runConversation = async (conv: typeof AGENT_CONVERSATIONS[0]) => {
    if (isProcessing) return;
    setIsProcessing(true);

    // Add user message
    setMessages(prev => [...prev, { role: "user", text: conv.trigger }]);

    // Process each step
    for (const step of conv.steps) {
      await new Promise(r => setTimeout(r, 800));
      if (step.type === "thinking") {
        setMessages(prev => [...prev, { role: "agent", text: step.text, isThinking: true }]);
        await new Promise(r => setTimeout(r, 1200));
        // Remove last thinking message before adding next
        setMessages(prev => prev.filter((_, i) => i !== prev.length - 1));
      } else {
        setMessages(prev => [...prev, { role: "agent", text: step.text }]);
      }
    }

    setIsProcessing(false);
  };

  const handleQuickPrompt = (index: number) => {
    const conv = AGENT_CONVERSATIONS[index];
    runConversation(conv);
    setConvIndex((index + 1) % AGENT_CONVERSATIONS.length);
  };

  const handleSend = () => {
    if (!input.trim() || isProcessing) return;
    const next = AGENT_CONVERSATIONS[convIndex];
    setInput("");
    runConversation(next);
    setConvIndex((convIndex + 1) % AGENT_CONVERSATIONS.length);
  };

  const renderText = (text: string) => {
    return text.split("\n").map((line, i) => {
      const bold = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      const italic = bold.replace(/\*(.*?)\*/g, '<em>$1</em>');
      return <p key={i} className={line.startsWith("📊") || line.startsWith("✅") || line.startsWith("⚠️") || line.startsWith("💰") || line.startsWith("📈") || line.startsWith("-") ? "pl-2" : ""} dangerouslySetInnerHTML={{ __html: italic }} />;
    });
  };

  return (
    <section id="demo" className="py-24 px-6 max-w-7xl mx-auto z-10 relative">
      {/* Section Header */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4">
          See It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">In Action.</span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Your AI agent has full access to your business data — CRM, finance, communications — and can act on your behalf instantly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">

        {/* Stats Panel */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="p-5 rounded-2xl bg-[#050505] border border-white/10">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Live Business Overview</p>
            <div className="flex flex-col gap-4">
              {[
                { icon: DollarSign, label: "Revenue MTD", value: "$142,390", change: "+18.4%", color: "text-[#D4AF37]" },
                { icon: Users, label: "Active AI Agents", value: "12", change: "All Online", color: "text-emerald-400" },
                { icon: CheckCircle2, label: "Tasks Automated", value: "8,294", change: "This Month", color: "text-blue-400" },
                { icon: TrendingUp, label: "Hours Saved", value: "340 hrs", change: "This Month", color: "text-purple-400" },
              ].map((stat, i) => (
                <div key={i} className="flex items-center gap-4 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                    <stat.icon className={`w-5 h-5 ${stat.color}`} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 font-medium">{stat.label}</p>
                    <p className="text-lg font-black text-white leading-tight">{stat.value}</p>
                  </div>
                  <span className="text-xs font-bold text-[#D4AF37] whitespace-nowrap">{stat.change}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pipeline Mini Chart */}
          <div className="p-5 rounded-2xl bg-[#050505] border border-white/10">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Revenue Trend (6mo)</p>
            <div className="flex items-end gap-2 h-24">
              {[40, 58, 45, 70, 85, 100].map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${h}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="flex-1 rounded-t-md"
                  style={{ background: `rgba(212, 175, 55, ${0.3 + (h / 200)})` }}
                />
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-gray-600 mt-2">
              {["Feb","Mar","Apr","May","Jun","Jul"].map(m => <span key={m}>{m}</span>)}
            </div>
          </div>
        </div>

        {/* AI Chat Interface */}
        <div className="lg:col-span-3 flex flex-col h-[580px] rounded-2xl bg-[#050505] border border-white/10 overflow-hidden shadow-2xl">
          
          {/* Chat Header */}
          <div className="px-5 py-4 border-b border-white/10 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFDF00] flex items-center justify-center shadow-[0_0_15px_rgba(212,175,55,0.3)]">
              <Zap className="w-4 h-4 text-black fill-black" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Optivra AI Agent</p>
              <div className="flex items-center gap-1.5">
                <motion.span
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                />
                <p className="text-[11px] text-emerald-400 font-medium">Active — Connected to CRM, Finance, Email</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-4 scroll-smooth">
            <AnimatePresence initial={false}>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex gap-3 ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {msg.role === "agent" && (
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#FFDF00] flex items-center justify-center shrink-0 mt-0.5 shadow-[0_0_8px_rgba(212,175,55,0.3)]">
                      <Zap className="w-3 h-3 text-black fill-black" />
                    </div>
                  )}
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed flex flex-col gap-1 ${
                    msg.role === "user"
                      ? "bg-[#D4AF37] text-black font-medium rounded-tr-sm"
                      : msg.isThinking
                      ? "bg-white/5 border border-white/10 text-gray-400 italic rounded-tl-sm"
                      : "bg-white/[0.06] border border-white/10 text-gray-200 rounded-tl-sm"
                  }`}>
                    {msg.isThinking ? (
                      <div className="flex items-center gap-2">
                        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                          <Zap className="w-3 h-3 text-[#D4AF37]" />
                        </motion.div>
                        <span className="text-xs">{msg.text}</span>
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
          <div className="px-5 py-2 flex gap-2 flex-wrap border-t border-white/5">
            {QUICK_PROMPTS.map((p, i) => (
              <button
                key={i}
                onClick={() => handleQuickPrompt(i)}
                disabled={isProcessing}
                className="text-[11px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-all disabled:opacity-40 flex items-center gap-1.5"
              >
                <ChevronRight className="w-3 h-3" /> {p}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="px-4 py-3 border-t border-white/10 flex items-center gap-3">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              placeholder="Ask your AI agent anything..."
              disabled={isProcessing}
              className="flex-1 bg-transparent text-white text-sm placeholder-gray-600 focus:outline-none disabled:opacity-40"
            />
            <button
              onClick={handleSend}
              disabled={isProcessing}
              className="w-9 h-9 rounded-full bg-[#D4AF37] flex items-center justify-center text-black hover:bg-[#F3E5AB] transition-colors disabled:opacity-40 shrink-0 shadow-[0_0_12px_rgba(212,175,55,0.3)]"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
