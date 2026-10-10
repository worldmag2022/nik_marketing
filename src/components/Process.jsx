import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight, Search, FileText, Play, TrendingUp, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Process({ onOpenDiscovery }) {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      phase: 'STAGE 01 // DISCOVERY',
      title: 'Consultation & Goal Alignment',
      description: 'Every project begins with a conversation. We discuss your business model, identify target audiences, and evaluate whether SEO, Google Ads, or a new website will yield the highest return.',
      deliverables: [
        'Business & Competitor Landscape Evaluation',
        'Target Audience & Commercial Intent Mapping',
        'Current Search Visibility & Website Speed Baseline',
        'Personalized Service Selection & Budget Recommendation',
      ],
      outputBadge: 'DELIVERABLE: STRATEGIC ROADMAP CONSULTATION',
      accent: 'border-[#FFC300]/40 text-[#FFC300]',
      glow: 'from-[#FFC300]/15 to-transparent',
    },
    {
      phase: 'STAGE 02 // AUDIT & ARCHITECTURE',
      title: 'Comprehensive Audit & Action Plan',
      description: 'We dig deep into the data. Our team performs a forensic audit of your website, on-page content, technical Core Web Vitals, backlink profile, or existing Google Ads account.',
      deliverables: [
        'Full Technical SEO Analysis & Crawl Bottlenecks Report',
        'High-Intent Keyword Matrix (Local Map Pack & Commercial SERP)',
        'Google Ads Account Audit & Waste Elimination Plan',
        'Conversion Funnel Wireframing & UX Architecture',
      ],
      outputBadge: 'DELIVERABLE: IN-DEPTH AUDIT REPORT & BLUEPRINT',
      accent: 'border-[#FFE17F]/40 text-[#FFE17F]',
      glow: 'from-[#FFE17F]/15 to-transparent',
    },
    {
      phase: 'STAGE 03 // IMPLEMENTATION',
      title: 'Agile Implementation & Execution',
      description: 'Our small and agile team handles all the heavy lifting. We implement on-page optimizations, resolve technical issues, launch search-engineered Google Ads, or deploy custom responsive web pages.',
      deliverables: [
        'On-Page Optimization (Metadata, Schema Markup, Content Structure)',
        'Google Ads Setup & High-Relevance Ad Copy Creation',
        'Local SEO Citations & Google Business Profile Polish',
        'Mobile-First Responsive Website Development',
      ],
      outputBadge: 'DELIVERABLE: FULL CAMPAIGN LAUNCH',
      accent: 'border-[#FFC300]/40 text-[#FFC300]',
      glow: 'from-[#FFC300]/15 to-transparent',
    },
    {
      phase: 'STAGE 04 // OPTIMIZATION & GROWTH',
      title: 'Continuous Optimization & Reporting',
      description: 'We do not set and forget. We continuously analyze performance data, adjust keyword bids, optimize conversion rates, and provide transparent reporting. You retain 100% control with zero lock-in contracts.',
      deliverables: [
        'Daily & Weekly Google Ads Bid Cap Adjustments',
        'Organic Search Ranking & Traffic Trajectory Tracking',
        'Continuous Conversion Rate Optimization (CRO)',
        'Direct Access to Senior Account Managers via Call or Email',
      ],
      outputBadge: 'DELIVERABLE: MEASURABLE REVENUE GROWTH',
      accent: 'border-emerald-500/40 text-emerald-400',
      glow: 'from-emerald-500/15 to-transparent',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      const stepElements = containerRef.current?.querySelectorAll('.process-card');
      if (stepElements) {
        stepElements.forEach((el, index) => {
          ScrollTrigger.create({
            trigger: el,
            start: 'top 60%',
            end: 'bottom 60%',
            onEnter: () => setActiveStep(index),
            onEnterBack: () => setActiveStep(index),
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="process" ref={containerRef} className="relative py-28 md:py-40 bg-black text-white border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 right-1/4 w-[700px] h-[700px] bg-[radial-gradient(circle,_rgba(255,195,0,0.06)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Pinned / Sticky Panel */}
          <div className="lg:col-span-5 lg:sticky lg:top-32 lg:h-fit space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#FFC300]/30 text-[#FFC300] font-mono text-xs uppercase tracking-wider">
              <span>[04 // HOW WE WORK]</span>
              <span className="text-white/20">|</span>
              <span className="text-[#9CA3AF]">AGILE & RESPONSIVE</span>
            </div>

            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tighter text-white leading-tight">
              From Consultation to <br />
              <span className="bg-gradient-to-r from-white via-[#FFC300] to-[#FFE17F] bg-clip-text text-transparent">
                Implementation.
              </span>
            </h2>

            <p className="text-base text-[#9CA3AF] leading-relaxed">
              We specialize in consulting and implementing digital marketing projects. Our small, agile team is flexible and responsive, collaborating closely with you at every stage of the journey.
            </p>

            {/* Quick Step Indicators */}
            <div className="space-y-2 pt-4 hidden lg:block">
              {steps.map((st, i) => (
                <div
                  key={st.phase}
                  className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                    activeStep === i
                      ? 'bg-white/[0.06] border-[#FFC300]/40 text-white shadow-md'
                      : 'bg-transparent border-transparent text-[#9CA3AF] opacity-50'
                  }`}
                >
                  <span className="font-mono text-xs">{st.phase.split('//')[0]}</span>
                  <span className="font-sans text-xs font-semibold">{st.title.split('&')[0]}</span>
                  <span className={`w-2 h-2 rounded-full ${activeStep === i ? 'bg-[#FFC300]' : 'bg-white/20'}`} />
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenDiscovery}
                className="px-6 py-3 rounded-full bg-[#FFC300] hover:bg-[#FFE17F] text-black font-bold text-xs transition-all flex items-center gap-2 shadow-[0_0_20px_-3px_rgba(255,195,0,0.3)] cursor-pointer"
              >
                <span>Start with a Free Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Layered Step Cards */}
          <div className="lg:col-span-7 space-y-8">
            {steps.map((step, idx) => (
              <div
                key={step.phase}
                className={`process-card rounded-3xl bg-[#090a0d] border border-white/[0.08] p-6 sm:p-8 lg:p-10 relative overflow-hidden transition-all duration-500 ${
                  activeStep === idx
                    ? 'border-[#FFC300]/30 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.8)]'
                    : 'opacity-70'
                }`}
              >
                {/* Glow backdrop */}
                <div
                  className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl ${step.glow} pointer-events-none blur-2xl`}
                />

                <div className="relative z-10 space-y-6">
                  
                  {/* Step Header */}
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#FFC300] tracking-wider uppercase">
                      {step.phase}
                    </span>
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/[0.04] border border-white/10 text-[#9CA3AF]">
                      STEP 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-sans text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-sm text-[#9CA3AF] leading-relaxed">
                    {step.description}
                  </p>

                  {/* Checklist */}
                  <div className="space-y-2.5 pt-2">
                    <div className="font-mono text-[10px] uppercase text-[#9CA3AF] tracking-widest font-semibold">
                      KEY DELIVERABLES:
                    </div>
                    {step.deliverables.map((del) => (
                      <div key={del} className="flex items-start gap-2.5 text-xs text-white/90">
                        <Check className="w-4 h-4 text-[#FFC300] shrink-0 mt-0.5" />
                        <span>{del}</span>
                      </div>
                    ))}
                  </div>

                  {/* Deliverable Pill */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="font-mono text-[11px] text-[#FFC300] font-semibold">
                      {step.outputBadge}
                    </span>
                    <span className="font-mono text-xs text-[#9CA3AF]">
                      100% COLLABORATIVE
                    </span>
                  </div>

                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
