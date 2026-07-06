"use client";

import Link from "next/link";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="#home" className="text-2xl font-sans font-bold tracking-widest text-white uppercase relative z-[60]">
            Optivra<span className="text-primary">.</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8 text-[11px] tracking-[0.2em] font-medium text-gray-400 uppercase">
            <Link href="/#home" className="hover:text-primary transition-colors">Home</Link>
            <Link href="/#about" className="hover:text-primary transition-colors">About</Link>
            
            {/* Dropdown for Services */}
            <div className="relative group cursor-pointer h-20 flex items-center">
              <span className="flex items-center gap-1 hover:text-primary transition-colors">
                Services <ChevronDown className="w-3 h-3" />
              </span>
              <div className="absolute top-20 left-0 min-w-[220px] bg-black border border-white/10 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-4 flex flex-col gap-1 z-50 pointer-events-none group-hover:pointer-events-auto">
                <Link href="/ai-consulting" className="px-6 py-2 hover:text-primary hover:bg-white/5 transition-colors block">AI Consulting</Link>
                <Link href="/machine-learning-development" className="px-6 py-2 hover:text-primary hover:bg-white/5 transition-colors block">Machine Learning</Link>
                <Link href="/computer-vision" className="px-6 py-2 hover:text-primary hover:bg-white/5 transition-colors block">Computer Vision</Link>
                <Link href="/ai-agents" className="px-6 py-2 hover:text-primary hover:bg-white/5 transition-colors block">AI Agents</Link>
                <Link href="/data-science" className="px-6 py-2 hover:text-primary hover:bg-white/5 transition-colors block">Data Science</Link>
                <Link href="/mvp-development" className="px-6 py-2 hover:text-primary hover:bg-white/5 transition-colors block">MVP Development</Link>
                <Link href="/automation" className="px-6 py-2 hover:text-primary hover:bg-white/5 transition-colors block">Automation</Link>
                <Link href="/cloud-engineering" className="px-6 py-2 hover:text-primary hover:bg-white/5 transition-colors block">Cloud Engineering</Link>
              </div>
            </div>

            <Link href="/insights" className="hover:text-primary transition-colors">Insights</Link>
            <Link href="/optivra-ai" className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-black transition-all rounded-full flex items-center gap-1.5">
              <Sparkles className="w-3 h-3" /> Optivra AI
            </Link>
            <Link href="/#products" className="hover:text-primary transition-colors">Products</Link>
            <Link href="/#contact" className="hover:text-primary transition-colors">Contact</Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/audit"
              className="px-5 py-2.5 bg-transparent text-gray-400 border border-white/10 hover:border-primary hover:text-primary transition-all font-semibold text-xs tracking-widest uppercase"
            >
              Get Free Audit
            </Link>
            <a 
              href="https://calendly.com/hello-optivra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-primary text-black hover:bg-white transition-all font-bold text-xs tracking-widest uppercase"
            >
              Book Free Call
            </a>
          </div>

          <button className="lg:hidden text-white relative z-[60] p-2" onClick={toggleMenu} aria-label="Toggle Menu">
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black z-40 flex flex-col pt-32 px-6 h-screen overflow-y-auto">
          <nav className="flex flex-col gap-8 text-lg font-sans font-bold text-white uppercase tracking-widest">
            <Link href="#home" onClick={toggleMenu} className="hover:text-primary transition-colors">Home</Link>
            <Link href="#about" onClick={toggleMenu} className="hover:text-primary transition-colors">About</Link>
            <Link href="#team" onClick={toggleMenu} className="hover:text-primary transition-colors">Team</Link>
            <div className="flex flex-col gap-4">
              <span className="text-gray-500">Services</span>
              <div className="flex flex-col gap-4 pl-4 text-sm font-sans text-gray-300 font-light tracking-normal">
                <Link href="#services" onClick={toggleMenu} className="hover:text-primary transition-colors">Strategy & Consulting</Link>
                <Link href="#services" onClick={toggleMenu} className="hover:text-primary transition-colors">App Development</Link>
                <Link href="#services" onClick={toggleMenu} className="hover:text-primary transition-colors">DevOps & Performance</Link>
                <Link href="#services" onClick={toggleMenu} className="hover:text-primary transition-colors">Data & Analytics</Link>
                <Link href="#services" onClick={toggleMenu} className="hover:text-primary transition-colors">Artificial Intelligence</Link>
                <Link href="#services" onClick={toggleMenu} className="hover:text-primary transition-colors">Cloud & Modernization</Link>
              </div>
            </div>
            <Link href="/optivra-ai" onClick={toggleMenu} className="text-primary flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> Optivra AI
            </Link>
            <Link href="#products" onClick={toggleMenu} className="hover:text-primary transition-colors">Products</Link>
            <Link href="#faq" onClick={toggleMenu} className="hover:text-primary transition-colors">FAQ</Link>
            <Link href="#portfolio" onClick={toggleMenu} className="hover:text-primary transition-colors">Projects</Link>
          </nav>
          
          <div className="mt-12 mb-8">
            <a 
              href="https://calendly.com/hello-optivra" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={toggleMenu}
              className="w-full block text-center px-6 py-4 bg-primary text-black font-bold text-xs tracking-widest uppercase hover:bg-white transition-colors"
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </>
  );
}
