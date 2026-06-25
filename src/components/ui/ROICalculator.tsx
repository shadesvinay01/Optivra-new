"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, DollarSign, Clock, Users } from "lucide-react";

export default function ROICalculator() {
  const [employees, setEmployees] = useState(50);
  const [hoursWasted, setHoursWasted] = useState(10);
  const [averageSalary, setAverageSalary] = useState(60000);

  // Calculations
  const weeksPerYear = 52;
  const workingHoursPerYear = 2080;
  const hourlyRate = averageSalary / workingHoursPerYear;
  
  const totalHoursWastedAnnual = employees * hoursWasted * weeksPerYear;
  const financialWaste = totalHoursWastedAnnual * hourlyRate;
  
  // Assuming AI recovers 75% of wasted time
  const aiEfficiencyFactor = 0.75;
  const estimatedSavings = financialWaste * aiEfficiencyFactor;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="roi-calculator" className="container mx-auto px-6 py-32 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="text-center max-w-3xl mx-auto mb-16">
        <p className="text-xs font-bold text-gray-500 mb-4 uppercase tracking-[0.3em] flex items-center justify-center gap-2">
          <Calculator className="w-4 h-4 text-primary" />
          The Cost of Inaction
        </p>
        <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-6">
          Calculate Your <span className="text-primary italic">AI ROI.</span>
        </h2>
        <p className="text-gray-400 text-lg font-light">
          Discover how much capital your business is losing to manual workflows, and see the exact savings AI automation can generate.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* Input Controls */}
        <div className="lg:col-span-3 border border-white/10 bg-[#050505] p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full pointer-events-none" />
          
          <h3 className="text-xl font-bold text-white mb-8 border-b border-white/10 pb-4">Input Parameters</h3>
          
          <div className="space-y-8">
            {/* Employees */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm text-gray-400 font-medium flex items-center gap-2">
                  <Users className="w-4 h-4 text-primary" />
                  Team Size
                </label>
                <span className="text-white font-bold font-mono text-lg">{employees}</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="500" 
                value={employees} 
                onChange={(e) => setEmployees(parseInt(e.target.value))}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>1</span>
                <span>500+</span>
              </div>
            </div>

            {/* Hours Wasted */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm text-gray-400 font-medium flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Hours wasted weekly per person
                </label>
                <span className="text-white font-bold font-mono text-lg">{hoursWasted} hrs</span>
              </div>
              <input 
                type="range" 
                min="1" 
                max="40" 
                value={hoursWasted} 
                onChange={(e) => setHoursWasted(parseInt(e.target.value))}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>1 hr</span>
                <span>40 hrs</span>
              </div>
            </div>

            {/* Average Salary */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <label className="text-sm text-gray-400 font-medium flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-primary" />
                  Average Annual Salary (USD)
                </label>
                <span className="text-white font-bold font-mono text-lg">{formatCurrency(averageSalary)}</span>
              </div>
              <input 
                type="range" 
                min="30000" 
                max="250000" 
                step="5000"
                value={averageSalary} 
                onChange={(e) => setAverageSalary(parseInt(e.target.value))}
                className="w-full h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-primary"
              />
              <div className="flex justify-between text-xs text-gray-600 mt-2">
                <span>$30k</span>
                <span>$250k</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Panel */}
        <div className="lg:col-span-2 border border-primary/30 bg-[#0A0A0A] p-8 md:p-10 flex flex-col justify-center relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-50" />
          <motion.div 
            className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[80px] rounded-full pointer-events-none"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="relative z-10 text-center flex flex-col h-full justify-between">
            <div>
              <p className="text-sm text-gray-400 uppercase tracking-widest mb-2 font-medium">Estimated Annual Savings</p>
              <motion.h3 
                key={estimatedSavings}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-sans font-black text-white mb-2 tracking-tighter"
              >
                {formatCurrency(estimatedSavings)}
              </motion.h3>
              <p className="text-xs text-primary font-bold tracking-widest uppercase mb-10">Based on 75% AI Recovery Rate</p>

              <div className="grid grid-cols-2 gap-4 mb-10 text-left">
                <div className="bg-black/40 border border-white/5 p-4 rounded-sm">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Hours Wasted/Yr</p>
                  <p className="text-lg font-mono font-medium text-gray-300">{totalHoursWastedAnnual.toLocaleString()}</p>
                </div>
                <div className="bg-black/40 border border-white/5 p-4 rounded-sm">
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Financial Leak</p>
                  <p className="text-lg font-mono font-medium text-red-400">{formatCurrency(financialWaste)}</p>
                </div>
              </div>
            </div>

            <a 
              href="https://calendly.com/hello-optivra" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full bg-primary text-black px-6 py-4 flex items-center justify-center gap-3 hover:bg-white transition-all duration-300 font-bold tracking-widest uppercase text-xs group/btn rounded-sm"
            >
              Unlock These Savings
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
