"use client";

import { Bot, Send, User, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
}

export default function InternalHermesAgent() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: 'user',
      content: input.trim(),
      id: Date.now().toString(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput('');
    setIsLoading(true);

    // Add a placeholder assistant message
    const assistantId = (Date.now() + 1).toString();
    setMessages(prev => [...prev, { role: 'assistant', content: '...', id: assistantId }]);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      const reply = data?.reply ?? '❌ Empty response from server.';

      setMessages(prev => {
        const copy = [...prev];
        copy[copy.length - 1] = { role: 'assistant', content: reply, id: assistantId };
        return copy;
      });

    } catch (err: any) {
      setMessages(prev => {
        const copy = [...prev];
        copy[copy.length - 1] = {
          role: 'assistant',
          content: `❌ Network error: ${err?.message ?? 'Could not reach server.'}`,
          id: assistantId,
        };
        return copy;
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#020202] text-gray-200 font-sans flex flex-col">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#050505] py-4 px-6 sticky top-0 z-50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <Bot className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-white tracking-wide">
              Hermes <span className="text-blue-400">Agent</span>
            </h1>
            <p className="text-[10px] uppercase tracking-widest text-gray-500">Optivra Internal Tool</p>
          </div>
        </div>
        <Link href="/" className="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-widest">
          Exit to Main Site
        </Link>
      </header>

      {/* Chat Area */}
      <main className="flex-1 overflow-y-auto p-6 space-y-8 max-w-4xl mx-auto w-full pb-36">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
            <Sparkles className="w-12 h-12 text-blue-500 mb-6 opacity-50" />
            <h2 className="text-3xl font-bold text-white mb-4">Hello, Optivra Team.</h2>
            <p className="text-gray-400 max-w-md mx-auto leading-relaxed">
              I&apos;m Hermes, your internal AI agent powered by Llama 3.3 70B via OpenRouter.
              Ask me anything — strategy, content, operations, code.
            </p>
          </div>
        ) : (
          messages.map((m) => (
            <div key={m.id} className={`flex gap-4 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              {m.role !== 'user' && (
                <div className="w-8 h-8 rounded-sm bg-blue-600/20 border border-blue-500/50 flex flex-shrink-0 items-center justify-center mt-1">
                  <Bot className="w-4 h-4 text-blue-400" />
                </div>
              )}
              <div
                className={`px-5 py-4 max-w-[85%] rounded-sm leading-relaxed whitespace-pre-wrap text-sm ${
                  m.role === 'user'
                    ? 'bg-white/10 text-white'
                    : 'bg-[#0A0A0A] border border-white/5 text-gray-300'
                }`}
              >
                {m.content === '...' ? (
                  <span className="flex gap-1 items-center text-gray-500">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </span>
                ) : m.content}
              </div>
              {m.role === 'user' && (
                <div className="w-8 h-8 rounded-sm bg-white/10 border border-white/20 flex flex-shrink-0 items-center justify-center mt-1">
                  <User className="w-4 h-4 text-gray-400" />
                </div>
              )}
            </div>
          ))
        )}
        <div ref={messagesEndRef} />
      </main>

      {/* Input Area */}
      <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-t from-[#020202] via-[#020202]/90 to-transparent p-6">
        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="relative flex items-center">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message Hermes..."
              className="w-full bg-[#0A0A0A] border border-white/10 rounded-full py-4 pl-6 pr-14 text-white focus:outline-none focus:border-blue-500/50 transition-colors shadow-2xl"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 w-10 h-10 bg-blue-600 hover:bg-blue-500 rounded-full flex items-center justify-center text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isLoading ? (
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <Send className="w-4 h-4 -ml-1" />
              )}
            </button>
          </form>
          <p className="text-center text-[10px] text-gray-600 uppercase tracking-widest mt-3">
            Powered by Llama 3.3 70B via OpenRouter · Free Tier
          </p>
        </div>
      </footer>
    </div>
  );
}
