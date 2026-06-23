import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black mt-24">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2">
            <Link
              href="/"
              className="text-3xl font-sans tracking-widest text-white mb-6 block uppercase"
            >
              Optivra<span className="text-primary">.</span>
            </Link>
            <p className="text-gray-400 max-w-sm mb-6 font-sans italic text-sm leading-relaxed">
              Executive-tier AI consulting. We engineer intelligent systems that
              automate operations and accelerate growth for industry leaders.
            </p>

            {/* Newsletter */}
            <div className="mb-8">
              <p className="text-[10px] tracking-widest uppercase text-gray-500 font-bold mb-3">
                AI Insights Newsletter
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-white/5 border border-white/10 px-4 py-2.5 text-xs text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  className="px-4 py-2.5 bg-primary text-black font-bold text-xs tracking-widest uppercase hover:bg-white transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Careers */}
            <div className="mb-8 border border-white/10 p-4 bg-[#050505]">
              <p className="text-[10px] tracking-widest uppercase text-gray-400 font-bold mb-2">
                Join Our Team
              </p>
              <p className="text-xs text-gray-500 mb-3">
                Interested in joining Optivra? Send us your updated CV or resume.
              </p>
              <a
                href="mailto:hello@optivra.in?subject=Job%20Application%20-%20CV"
                className="text-primary text-xs hover:text-white transition-colors uppercase tracking-widest font-bold flex items-center gap-2"
              >
                Submit Resume →
              </a>
            </div>

            {/* Contact */}
            <div className="space-y-2 text-sm text-gray-500 font-sans tracking-wide">
              <a
                href="mailto:hello@optivra.in"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                hello@optivra.in
              </a>
              <a
                href="tel:+917439071619"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.11 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                +91 74390 71619
              </a>
              <a
                href="tel:+919517907356"
                className="flex items-center gap-3 hover:text-primary transition-colors pl-5"
              >
                +91 95179 07356
              </a>
              <a
                href="https://wa.me/917439071619"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-white tracking-widest uppercase text-xs mb-6">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link href="/ai-consulting" className="hover:text-primary transition-colors">
                  AI Consulting
                </Link>
              </li>
              <li>
                <Link href="/machine-learning-development" className="hover:text-primary transition-colors">
                  Machine Learning
                </Link>
              </li>
              <li>
                <Link href="/computer-vision" className="hover:text-primary transition-colors">
                  Computer Vision
                </Link>
              </li>
              <li>
                <Link href="/ai-agents" className="hover:text-primary transition-colors">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="/data-science" className="hover:text-primary transition-colors">
                  Data Science
                </Link>
              </li>
              <li>
                <Link href="/mvp-development" className="hover:text-primary transition-colors">
                  MVP Development
                </Link>
              </li>
              <li>
                <Link href="/automation" className="hover:text-primary transition-colors">
                  Automation
                </Link>
              </li>
              <li>
                <Link href="/cloud-engineering" className="hover:text-primary transition-colors">
                  Cloud Engineering
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-white tracking-widest uppercase text-xs mb-6">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link href="/#team" className="hover:text-primary transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link href="/#products" className="hover:text-primary transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link href="/#case-studies" className="hover:text-primary transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-primary transition-colors">
                  Insights & Research
                </Link>
              </li>
              <li>
                <a href="mailto:hello@optivra.in?subject=Job%20Application%20-%20CV" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="https://calendly.com/hello-optivra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  Book a Call
                </a>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="font-semibold text-white tracking-widest uppercase text-xs mb-6">
              Legal
            </h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>
                <Link href="/privacy-policy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-conditions" className="hover:text-primary transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/security-policy" className="hover:text-primary transition-colors">
                  Security Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-primary transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between text-xs tracking-widest text-gray-600 uppercase gap-4">
          <p>&copy; {new Date().getFullYear()} Optivra. All rights reserved.</p>
          <p className="text-gray-700">
            Building AI Systems That Create Business Growth
          </p>
        </div>
      </div>
    </footer>
  );
}
