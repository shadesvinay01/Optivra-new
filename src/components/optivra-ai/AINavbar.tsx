"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function AINavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-2xl border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/optivra-ai" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.4)] group-hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transition-all">
            <Zap className="text-white w-5 h-5 fill-white" />
          </div>
          <span className="font-black text-xl tracking-tight text-white group-hover:text-indigo-400 transition-colors">
            Optivra AI
          </span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-8">
          {["Features", "How it Works", "Industries", "Security", "Pricing", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, "-")}`}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors tracking-wide"
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <a
            href="mailto:hello@optivra.in?subject=Schedule%20Demo%20-%20Optivra%20AI"
            className="hidden lg:block text-sm font-semibold text-gray-300 hover:text-white transition-colors"
          >
            Schedule Demo
          </a>
          <a
            href="#pricing"
            className="px-6 py-2.5 rounded-full bg-white text-black font-bold text-sm tracking-wide hover:bg-indigo-100 hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all"
          >
            Get Early Access
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
