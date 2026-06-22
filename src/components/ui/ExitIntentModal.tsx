"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

export default function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const hasShown = sessionStorage.getItem("exitModalShown");
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsVisible(true);
        sessionStorage.setItem("exitModalShown", "true");
        document.removeEventListener("mouseleave", handleMouseLeave);
      }
    };

    // Delay attaching listener so it doesn't fire immediately on page load
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setIsVisible(false)}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg bg-black border border-primary/40 shadow-[0_0_80px_rgba(212,175,55,0.2)] overflow-hidden">
        {/* Top Gold Line */}
        <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent" />

        {/* Close Button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-10">
          {!submitted ? (
            <>
              {/* Badge */}
              <p className="text-[9px] tracking-[0.4em] uppercase text-primary font-bold mb-6 bg-primary/10 border border-primary/20 inline-block px-3 py-1">
                Free Offer — Limited Spots
              </p>

              <h2 className="text-3xl md:text-4xl font-sans font-black text-white leading-tight mb-4">
                Get Your Free{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #D4AF37 0%, #F3E5AB 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  AI Readiness Audit
                </span>
              </h2>

              <p className="text-gray-400 text-sm font-light leading-relaxed mb-8">
                We will analyze your current tech stack and deliver a{" "}
                <strong className="text-white">24-page custom AI blueprint</strong>{" "}
                for your specific industry — completely free. Valued at ₹50,000.
              </p>

              <div className="flex flex-col gap-3 mb-8 text-sm text-gray-400">
                {[
                  "Custom AI roadmap for your industry",
                  "Identify top 3 automation opportunities",
                  "ROI projection & implementation timeline",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {point}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your work email address"
                  className="w-full bg-white/5 border border-white/20 px-5 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-primary text-black font-bold tracking-widest uppercase text-xs hover:bg-white transition-all duration-300"
                >
                  Send Me the Free Audit <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <p className="text-gray-600 text-xs mt-4 text-center">
                No spam. Your data is 100% private. Unsubscribe anytime.
              </p>
            </>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">You're In!</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your AI Readiness Audit request has been received. Our team will reach out within{" "}
                <strong className="text-white">24 hours</strong> with your custom blueprint.
              </p>
              <button
                onClick={() => setIsVisible(false)}
                className="mt-8 text-primary text-xs tracking-widest uppercase font-bold hover:text-white transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
