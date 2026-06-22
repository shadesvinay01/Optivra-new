"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Optivra transformed our legacy operations. Their AI-driven logistics system reduced our package routing errors to near zero and increased processing speed by 40%. They are not just an agency; they operate like our internal CTO office.",
    author: "Marcus Vance",
    role: "VP of Operations, GlobalFreight",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "We were burning thousands on manual data entry. Optivra deployed a custom RAG LLM agent that completely automated our compliance checks. Our administrative overhead dropped by 60% in a matter of weeks.",
    author: "Sarah Lin",
    role: "CEO, MedTech Solutions",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    quote: "Their machine learning engineers are world-class. Optivra built a behavioral anomaly detection system for us that cut fraud by 85%. I haven't seen this level of enterprise execution speed anywhere else.",
    author: "David Chen",
    role: "Head of Product, SecurePay",
    image: "https://i.pravatar.cc/150?img=8"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  const prev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="container mx-auto px-6 py-24 border-t border-white/10" id="testimonials">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-[0.3em]">Client Success</p>
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6">Trusted by <span className="text-primary italic">Visionaries.</span></h2>
      </div>

      <div className="max-w-5xl mx-auto relative px-4 md:px-12">
        <div className="absolute top-0 left-0 text-primary/10 -translate-x-4 -translate-y-8 pointer-events-none">
          <Quote className="w-32 h-32 rotate-180" />
        </div>
        
        <div className="relative min-h-[300px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <p className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-10 italic">
                "{testimonials[currentIndex].quote}"
              </p>
              <div className="flex flex-col items-center gap-4">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].author} 
                  className="w-16 h-16 rounded-full border-2 border-primary/50 object-cover"
                />
                <div>
                  <h4 className="text-white font-bold tracking-wider">{testimonials[currentIndex].author}</h4>
                  <p className="text-primary text-xs uppercase tracking-[0.2em]">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={next}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-white hover:border-primary hover:text-primary hover:bg-primary/5 transition-all"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-12 h-1 rounded-full transition-all duration-300 ${idx === currentIndex ? "bg-primary" : "bg-white/20 hover:bg-white/40"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
