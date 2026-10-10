import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Users, CheckCircle2, Award, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function BrandStatement() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = textRef.current?.querySelectorAll('.reveal-word');
      if (words && words.length > 0) {
        gsap.fromTo(
          words,
          {
            opacity: 0.2,
            color: '#4B5563',
          },
          {
            opacity: 1,
            color: '#FFFFFF',
            stagger: 0.05,
            ease: 'none',
            scrollTrigger: {
              trigger: textRef.current,
              start: 'top 75%',
              end: 'bottom 45%',
              scrub: 0.8,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const statement = `At Nik Marketing Agency, we prioritize quality over quantity. Over the past decade, we have partnered with 90+ businesses—from energetic start-ups to industry leaders—to consult and implement high-performance SEO, Google Ads, and custom web design. Digital marketing must Target, Personalize, Measure, Engage, Innovate, Collaborate, Optimize, Analyze, Automate, and Integrate.`;

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-28 md:py-40 bg-black border-y border-white/[0.08] overflow-hidden"
    >
      {/* Background ambient radial glow in Nik Gold */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle,_rgba(255,195,0,0.08)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-12 mb-16 border-b border-white/[0.08]">
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs text-[#FFC300] tracking-widest font-bold uppercase">
              [01 // ABOUT NIK MARKETING]
            </span>
            <span className="text-white/20">/</span>
            <span className="font-mono text-xs text-[#9CA3AF]">OUR STORY & PHILOSOPHY</span>
          </div>
          <div className="font-mono text-xs text-[#9CA3AF] flex items-center gap-6">
            <span>FOUNDED IN 2010</span>
            <span>•</span>
            <span className="text-[#FFC300]">QUALITY OVER QUANTITY</span>
          </div>
        </div>

        {/* Large Editorial Manifesto with Scroll-Driven Word Reveal */}
        <div className="max-w-5xl">
          <p
            ref={textRef}
            className="font-sans text-2xl sm:text-4xl lg:text-5xl font-semibold tracking-tight leading-[1.3] text-balance"
          >
            {statement.split(' ').map((word, i) => (
              <span key={i} className="reveal-word inline-block mr-[0.3em] transition-colors">
                {word}
              </span>
            ))}
          </p>
        </div>

        {/* 10 Operational Pillars Pill Marquee */}
        <div className="mt-12 py-4 px-6 rounded-2xl bg-[#0f1014] border border-white/[0.06] overflow-x-auto flex items-center gap-4 text-xs font-mono">
          <span className="text-[#FFC300] font-bold uppercase shrink-0">OUR CORE TENETS:</span>
          {[
            'Target',
            'Personalize',
            'Measure',
            'Engage',
            'Innovate',
            'Collaborate',
            'Optimize',
            'Analyze',
            'Automate',
            'Integrate',
          ].map((item, idx) => (
            <span key={item} className="flex items-center gap-3 shrink-0 text-white/80">
              <span className="text-[#FFC300]">✦</span>
              <span>{item}</span>
            </span>
          ))}
        </div>

        {/* 3 Real Operating Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 pt-16 border-t border-white/[0.08]">
          
          <div className="p-7 rounded-2xl bg-[#0c0d10] border border-white/[0.08] hover:border-[#FFC300]/40 transition-all duration-300 group">
            <div className="font-mono text-xs text-[#FFC300] mb-4 flex items-center justify-between">
              <span>PRINCIPLE 01</span>
              <Users className="w-4 h-4 text-[#FFC300]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
              Small, Agile & Intimate Team
            </h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              We maintain a small and agile structure. You collaborate directly with senior strategists—Maziar Nikbakhsh, Pedram Bastani, and Parmida Shahbahrami—ensuring speed and flexibility without bureaucratic delays.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#0c0d10] border border-white/[0.08] hover:border-[#FFC300]/40 transition-all duration-300 group">
            <div className="font-mono text-xs text-[#FFC300] mb-4 flex items-center justify-between">
              <span>PRINCIPLE 02</span>
              <ShieldCheck className="w-4 h-4 text-[#FFC300]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
              Honesty in Speech & Behavior
            </h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              Transparency is our core foundation. We never lock clients into restrictive multi-year contracts. You retain complete control over your ad accounts, search assets, and monthly strategy.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-[#0c0d10] border border-white/[0.08] hover:border-[#FFC300]/40 transition-all duration-300 group">
            <div className="font-mono text-xs text-[#FFC300] mb-4 flex items-center justify-between">
              <span>PRINCIPLE 03</span>
              <Award className="w-4 h-4 text-[#FFC300]" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
              A Decade of Proven Execution
            </h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              With 10+ years in the online space and 210+ completed projects, we know what drives real business impact. We connect SEO and Google Ads directly to customer lifetime value and actual revenue.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
