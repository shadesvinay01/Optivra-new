"use client";

import { motion, Variants } from "framer-motion";
import { ArrowRight, Handshake, DollarSign, Briefcase, Users, HelpCircle, CheckCircle2 } from "lucide-react";
import FAQSection from "@/components/ui/FAQSection";

export default function PartnersPage() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const partnerBenefits = [
    { title: "High Conversions", desc: "Our AI solutions sell themselves. With a proven track record, converting leads into clients is seamless.", icon: <CheckCircle2 className="w-6 h-6" /> },
    { title: "Dedicated Support", desc: "Get direct access to our tech and sales teams to help you close deals and answer technical questions.", icon: <Users className="w-6 h-6" /> },
    { title: "Marketing Material", desc: "Access premium pitch decks, case studies, and ROI calculators to present to your network.", icon: <Briefcase className="w-6 h-6" /> },
  ];

  const services = [
    "Enterprise AI Consulting",
    "Autonomous AI Agents",
    "Machine Learning & Data Science",
    "Computer Vision Solutions",
    "Custom MVP Development",
    "Cloud & Data Engineering"
  ];

  const idealClients = [
    "Funded Startups needing rapid MVP scaling",
    "Mid-Market Enterprises looking to automate workflows",
    "Legacy Businesses wanting digital & AI transformation",
    "Agencies seeking technical delivery partners"
  ];

  const faqs = [
    {
      question: "How do I track my referrals and commissions?",
      answer: "We provide a transparent tracking dashboard where you can see the status of your leads, ongoing deals, and pending payouts in real time."
    },
    {
      question: "Is there a cap on how much I can earn?",
      answer: "No. Our commission structure is uncapped. The more enterprise deals you close, the more you earn. We thrive when you thrive."
    },
    {
      question: "Do I need technical knowledge to sell?",
      answer: "Not necessarily. While high-level understanding helps, our technical sales engineers will jump on calls with your clients to handle the technical heavy lifting."
    },
    {
      question: "When do I get paid?",
      answer: "Commissions are paid out within 15 days of the client clearing their invoice for the respective milestone."
    }
  ];

  return (
    <div className="flex flex-col gap-32 pb-32 bg-black selection:bg-primary/30 selection:text-white overflow-hidden pt-32">
      
      {/* Hero Section */}
      <section className="relative px-6 flex flex-col items-center justify-center text-center max-w-5xl mx-auto z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="inline-flex items-center gap-3 px-6 py-2 border border-primary/20 bg-black/50 backdrop-blur-md text-[10px] tracking-[0.4em] font-medium text-primary uppercase mb-8 shadow-[0_0_30px_rgba(212,175,55,0.15)] rounded-full"
        >
          <Handshake className="w-4 h-4 text-primary" />
          Partner Program
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-sans font-black tracking-tight leading-[1.1] mb-6 text-white text-balance"
        >
          Grow Your Revenue With <span className="text-gradient">Optivra.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-400 max-w-3xl font-light leading-relaxed mb-12 text-balance"
        >
          Refer high-ticket enterprise AI and engineering projects. Earn industry-leading commissions. We handle the delivery, you collect the rewards.
        </motion.p>
        
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <a
            href="#apply"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-primary text-black font-bold tracking-widest uppercase text-sm hover:bg-white transition-all duration-300 rounded-sm w-full sm:w-auto"
          >
            Become a Partner
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </section>

      {/* Why Partner */}
      <section className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-[0.3em]">The Advantage</p>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6">Why Partner With <span className="text-primary italic">Optivra?</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {partnerBenefits.map((benefit, i) => (
            <motion.div 
              key={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-[#050505] border border-white/10 p-8 hover:border-primary/50 transition-colors group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-[40px] group-hover:bg-primary/10 transition-colors" />
              <div className="w-12 h-12 text-primary mb-6 relative z-10 flex items-center justify-center bg-primary/10 rounded-full border border-primary/20">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 relative z-10">{benefit.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed relative z-10">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Commission Structure */}
      <section className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-gradient-to-br from-[#0a0a0a] to-[#050505] border border-white/10 rounded-3xl p-10 md:p-16 relative overflow-hidden text-center"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[100px] pointer-events-none" />
          
          <DollarSign className="w-12 h-12 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6">Lucrative <span className="text-gradient">Commissions.</span></h2>
          <p className="text-gray-400 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto">
            Our projects typically range from $10k to $250k+. You earn a generous percentage on the lifetime value of the client for the first year.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="bg-black/50 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-primary font-bold text-xl mb-2">10% - 15% Base Referral</h3>
              <p className="text-gray-400 text-sm">For standard referrals where you simply introduce the client and we handle the entire sales cycle.</p>
            </div>
            <div className="bg-black/50 border border-white/10 p-8 rounded-xl backdrop-blur-sm">
              <h3 className="text-primary font-bold text-xl mb-2">Up to 20% Co-Selling</h3>
              <p className="text-gray-400 text-sm">For partners who actively manage the relationship and help close the deal alongside our team.</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Services & Ideal Clients */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-sans font-bold text-white mb-8">What You'll <span className="text-primary italic">Sell</span></h2>
            <div className="space-y-4">
              {services.map((service, idx) => (
                <div key={idx} className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_10px_var(--color-primary)]" />
                  <span className="text-gray-300 font-medium">{service}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-sans font-bold text-white mb-8">Ideal <span className="text-primary italic">Clients</span></h2>
            <div className="space-y-4">
              {idealClients.map((client, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-[#050505] border border-white/10 p-4 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{client}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section id="apply" className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto bg-[#050505] border border-primary/20 rounded-2xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] pointer-events-none" />
          
          <div className="text-center mb-10">
            <h2 className="text-3xl font-sans font-bold text-white mb-4">Apply to <span className="text-gradient">Partner</span></h2>
            <p className="text-gray-400 text-sm">Tell us a bit about yourself and your network. We'll be in touch within 24 hours.</p>
          </div>

          <form 
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const name = formData.get('name');
              const email = formData.get('email');
              const whatsapp = formData.get('whatsapp');
              const linkedin = formData.get('linkedin');
              const info = formData.get('info');
              
              window.location.href = `mailto:hello@optivra.in?subject=Partner%20Application:%20${name}&body=Name:%20${name}%0AEmail:%20${email}%0AWhatsApp:%20${whatsapp}%0ALinkedIn:%20${linkedin}%0A%0AInfo:%0A${info}`;
            }}
            className="space-y-6 relative z-10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Full Name</label>
                <input type="text" name="name" required className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors rounded-sm" />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Work Email</label>
                <input type="email" name="email" required className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors rounded-sm" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">WhatsApp Number</label>
                <input type="tel" name="whatsapp" required className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors rounded-sm" placeholder="+91..." />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">LinkedIn Profile (Optional)</label>
                <input type="url" name="linkedin" className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors rounded-sm" placeholder="https://linkedin.com/in/..." />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">Tell us about your network / audience</label>
              <textarea name="info" required rows={4} className="w-full bg-black border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-primary transition-colors rounded-sm" placeholder="Who do you typically work with?"></textarea>
            </div>

            <button type="submit" className="w-full bg-primary text-black font-bold tracking-widest uppercase text-sm py-4 hover:bg-white transition-all duration-300 rounded-sm flex items-center justify-center gap-2">
              Submit Application
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </motion.div>
      </section>

      {/* FAQs */}
      <section className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-[0.3em]">Support</p>
          <h2 className="text-3xl md:text-5xl font-sans font-bold text-white mb-6">Partner <span className="text-primary italic">FAQs.</span></h2>
        </div>
        
        {/* We use the custom FAQSection component from the project if available, or just render it inline. The prompt uses an import for FAQSection, let's just make sure it's valid. Since it's imported at the top, we will pass faqs to it or render inline. */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
             <div key={i} className="bg-[#050505] border border-white/10 p-6 rounded-xl hover:border-primary/30 transition-colors">
               <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                 <HelpCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                 {faq.question}
               </h3>
               <p className="text-gray-400 text-sm ml-8 leading-relaxed">{faq.answer}</p>
             </div>
          ))}
        </div>
      </section>

    </div>
  );
}
