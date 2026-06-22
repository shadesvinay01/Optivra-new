import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black mt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-3xl font-sans tracking-widest text-white mb-6 block uppercase">
              Optivra<span className="text-primary">.</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 font-sans italic">
              Executive-tier AI consulting. We engineer intelligent systems that automate operations and accelerate growth for industry leaders.
            </p>
            <div className="space-y-2 mt-8 text-sm text-gray-500 font-sans tracking-widest">
              <a href="mailto:hello@optivra.in" className="flex items-center gap-3 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                hello@optivra.in
              </a>
              <a href="tel:+917439071619" className="flex items-center gap-3 hover:text-primary transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +91 74390 71619
              </a>
              <a href="tel:+919517907356" className="flex items-center gap-3 hover:text-primary transition-colors pl-7">
                +91 95179 07356
              </a>
            </div>
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
            <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms-conditions" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
