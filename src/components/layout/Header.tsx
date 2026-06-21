import Link from "next/link";
import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 glass-card border-b border-white/40">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter text-gray-900">
          OPTIVRA<span className="text-primary">.</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <Link href="#services" className="hover:text-primary transition-colors">Services</Link>
          <Link href="#portfolio" className="hover:text-primary transition-colors">Case Studies</Link>
          <Link href="#insights" className="hover:text-primary transition-colors">Insights</Link>
          <Link href="#about" className="hover:text-primary transition-colors">About</Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link href="#contact" className="px-5 py-2.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white transition-all font-semibold text-sm shadow-sm">
            Book Strategy Call
          </Link>
        </div>

        <button className="md:hidden text-gray-900">
          <Menu />
        </button>
      </div>
    </header>
  );
}
