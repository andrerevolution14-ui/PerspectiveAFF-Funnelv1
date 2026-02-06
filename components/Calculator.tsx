'use client';

import { useState, useEffect } from 'react';
import { analytics } from '../lib/analytics';

interface CalculatorResults {
  currentMonthlyLeads: number;
  potentialMonthlyLeads: number;
  currentRevenue: number;
  potentialRevenue: number;
  monthlyGap: number;
  annualGap: number;
  leakPercentage: number;
}

export default function Calculator() {
  const [adSpend, setAdSpend] = useState<number>(2000);
  const [leadValue, setLeadValue] = useState<number>(500);
  const [currentCR, setCurrentCR] = useState<number>(2.5);
  const [results, setResults] = useState<CalculatorResults | null>(null);
  const [showModal, setShowModal] = useState(false);

  const calculateResults = () => {
    const avgCPC = 2;
    const monthlyClicks = adSpend / avgCPC;

    const currentMonthlyLeads = monthlyClicks * (currentCR / 100);
    const currentRevenue = currentMonthlyLeads * leadValue;

    const potentialCR = currentCR * 3;
    const potentialMonthlyLeads = monthlyClicks * (potentialCR / 100);
    const potentialRevenue = potentialMonthlyLeads * leadValue;

    const monthlyGap = potentialRevenue - currentRevenue;
    const annualGap = monthlyGap * 12;
    const leakPercentage = ((potentialRevenue - currentRevenue) / potentialRevenue) * 100;

    setResults({
      currentMonthlyLeads,
      potentialMonthlyLeads,
      currentRevenue,
      potentialRevenue,
      monthlyGap,
      annualGap,
      leakPercentage
    });

    setShowModal(true);

    analytics.calculatorCompleted({
      adSpend,
      currentCR,
      mobileTraffic: 80,
      leadValue,
      annualGap
    });
  };

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(num);
  };

  const closeModalAndScroll = () => {
    setShowModal(false);
    document.getElementById('pain-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="calculator" className="py-24 px-4 relative overflow-hidden bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="text-accent underline decoration-accent/30">Invisible</span> Leak Detector
          </h2>
          <p className="text-xl text-muted-foreground">
            Most businesses are losing over 60% of their ad spend to "Mobile Friction."
            Slide the bars below to see your exact revenue leak.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Inputs Card */}
          <div className="glass-card space-y-10">
            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-lg font-medium text-white">Monthly Ad Spend</label>
                <span className="text-primary font-bold">{formatCurrency(adSpend)}</span>
              </div>
              <input
                type="range"
                min="500"
                max="50000"
                step="500"
                value={adSpend}
                onChange={(e) => setAdSpend(parseInt(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-lg font-medium text-white">Value of One Lead</label>
                <span className="text-primary font-bold">{formatCurrency(leadValue)}</span>
              </div>
              <input
                type="range"
                min="10"
                max="5000"
                step="10"
                value={leadValue}
                onChange={(e) => setLeadValue(parseInt(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-lg font-medium text-white">Current Conversion Rate</label>
                <span className="text-primary font-bold">{currentCR}%</span>
              </div>
              <input
                type="range"
                min="0.1"
                max="10"
                step="0.1"
                value={currentCR}
                onChange={(e) => setCurrentCR(parseFloat(e.target.value))}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <button
              onClick={calculateResults}
              className="btn-primary w-full shadow-accent/20 flex items-center justify-center gap-2 group"
            >
              Reveal My Revenue Leak
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>

            <div className="pt-6 border-t border-muted">
              <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                <svg className="w-4 h-4 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Industry Benchmark: 80% Mobile Traffic.
              </p>
            </div>
          </div>
        </div>

        {/* Results Modal */}
        {showModal && results && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={() => setShowModal(false)}></div>
            <div className="relative glass-card bg-card/90 max-w-xl w-full p-10 overflow-hidden animate-count-up ring-4 ring-primary/20">
              <div className="absolute top-4 right-4 text-muted-foreground hover:text-white cursor-pointer" onClick={() => setShowModal(false)}>
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>

              <div className="text-center mb-10">
                <p className="text-accent font-bold tracking-widest uppercase text-sm mb-4">Your Annual Revenue Leak</p>
                <div className="text-6xl md:text-7xl font-black text-gradient animate-pulse-glow leading-tight">
                  {formatCurrency(results.annualGap)}
                </div>
                <p className="text-xl text-muted-foreground mt-6">
                  You are losing <span className="text-white font-bold">{Math.round(results.leakPercentage)}%</span> of your potential market share to "Mobile Friction."
                </p>
              </div>

              <div className="space-y-6 mb-10">
                <div className="p-4 rounded-xl bg-background/50 border border-muted flex justify-between items-center">
                  <span className="text-muted-foreground">Current Monthly Leads</span>
                  <span className="font-bold text-white">{Math.round(results.currentMonthlyLeads)}</span>
                </div>
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 flex justify-between items-center">
                  <span className="text-primary font-medium">Potential Monthly Leads</span>
                  <span className="font-bold text-primary text-xl">{Math.round(results.potentialMonthlyLeads)}</span>
                </div>
              </div>

              <button
                onClick={closeModalAndScroll}
                className="btn-primary w-full py-5 text-xl shadow-accent/40"
              >
                How Can I Fix This? →
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
