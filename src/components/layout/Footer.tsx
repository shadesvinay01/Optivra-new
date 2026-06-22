import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black mt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-serif tracking-widest text-white mb-6 block uppercase">
              Optivra<span className="text-primary">.</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 font-serif italic">
              Executive-tier AI consulting. We engineer intelligent systems that automate operations and accelerate growth for industry leaders.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-white tracking-widest uppercase text-xs mb-6">Expertise</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-primary transition-colors">AI Strategy</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Machine Learning Architecture</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Generative Models</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Enterprise Automation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white tracking-widest uppercase text-xs mb-6">The Firm</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><Link href="#" className="hover:text-primary transition-colors">Our Leadership</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Case Studies</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Insights & Research</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Engage Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs tracking-widest text-gray-600 uppercase">
          <p>&copy; {new Date().getFullYear()} Optivra. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
