"use client";

import { Shield, Lock, Server, FileDigit, KeyRound, Building } from "lucide-react";

export default function EnterpriseSecurity() {
  return (
    <section id="security" className="py-32 px-6 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/20 text-[#D4AF37] text-xs font-bold uppercase tracking-widest mb-6">
            <Shield className="w-3 h-3" />
            Enterprise Security
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter mb-6">
            Your Data.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] to-[#F3E5AB]">Your Rules.</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
            Optivra AI is built on a zero-trust architecture. We never train public models on your proprietary business data, and every interaction is cryptographically secured.
          </p>
          <div className="flex flex-col gap-6">
            <div className="flex gap-4">
              <div className="w-11 h-11 shrink-0 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                <Server className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">Flexible Deployment</h4>
                <p className="text-sm text-gray-500">Deploy on our secure cloud infrastructure or self-host entirely on-premise within your own VPC.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-11 h-11 shrink-0 rounded-full bg-white/[0.04] border border-white/[0.08] flex items-center justify-center">
                <Lock className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h4 className="text-white font-bold mb-1">AES-256 Encryption</h4>
                <p className="text-sm text-gray-500">All data is encrypted at rest and in transit using enterprise-grade cryptographic standards.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-full max-w-lg">
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: KeyRound, label: "Role-Based Access (RBAC)" },
              { icon: FileDigit, label: "Immutable Audit Logs" },
              { icon: Building, label: "SOC2 Compliant Architecture" },
              { icon: Shield, label: "Data Loss Prevention (DLP)" },
            ].map((feature, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#050505] border border-white/[0.06] hover:border-[#D4AF37]/30 transition-all flex flex-col items-center text-center gap-4 group">
                <feature.icon className="w-8 h-8 text-gray-500 group-hover:text-[#D4AF37] transition-colors" />
                <span className="text-sm font-bold text-white leading-tight">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
