"use client";

import Link from "next/link";
import { Zap, Globe, MessageSquare, Mail } from "lucide-react";

export default function AIFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#050816] pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/optivra-ai" className="flex items-center gap-3 group mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.4)]">
                <Zap className="text-white w-4 h-4 fill-white" />
              </div>
              <span className="font-black text-lg tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                Optivra AI
              </span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The AI Operating System for Modern Businesses. Automate operations, scale intelligently, and build the future.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#features" className="text-gray-400 hover:text-white text-sm transition-colors">Features</a></li>
              <li><a href="#agents" className="text-gray-400 hover:text-white text-sm transition-colors">AI Agents</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</a></li>
              <li><a href="#security" className="text-gray-400 hover:text-white text-sm transition-colors">Security</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Case Studies</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-conditions" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Refund Policy</Link></li>
              <li><Link href="/security-policy" className="text-gray-400 hover:text-white text-sm transition-colors">Security Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Optivra AI. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>Powered by</span>
            <Link href="/" className="text-white font-bold hover:text-indigo-400 transition-colors">Optivra</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
