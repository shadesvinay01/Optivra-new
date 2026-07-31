"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/#home" className="text-2xl font-sans font-bold tracking-widest text-white uppercase relative z-[60]">
            Optivra<span className="text-[#D4AF37]">.</span>
          </Link>
          
          <nav className="hidden lg:flex items-center gap-8 text-xs tracking-[0.2em] font-medium text-gray-400 uppercase">
            <Link href="/#home" className="text-[#D4AF37] font-bold hover:text-white transition-colors">
              Home
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/#home"
              className="px-5 py-2.5 bg-[#D4AF37] text-black font-bold text-xs tracking-widest uppercase hover:bg-white transition-all rounded-sm"
            >
              Home
            </Link>
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
            <Link href="/#home" onClick={toggleMenu} className="text-[#D4AF37] transition-colors">
              Home
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
