import React from 'react';
import { ShieldCheck, CheckCircle2, Award, Calendar, Briefcase, RefreshCw } from 'lucide-react';

export default function Results() {
  const metrics = [
    {
      number: '10+ Yrs',
      label: 'Digital Marketing Experience',
      sub: 'Professionally designing websites & running campaigns since 2010',
      badge: 'Proven Track Record',
    },
    {
      number: '90+',
      label: 'Businesses Partnered',
      sub: 'Collaborated with startups to large enterprises across diverse sectors',
      badge: 'Client Partnerships',
    },
    {
      number: '210+',
      label: 'Completed Web & SEO Projects',
      sub: 'Custom responsive websites, search consulting, and campaign rollouts',
      badge: 'Execution Excellence',
    },
    {
      number: '0 Mos',
      label: 'Long-Term Contract Lock-In',
      sub: 'You retain complete flexibility to pause, increase, or cancel anytime',
      badge: 'Client Control',
    },
  ];

  return (
    <section id="experience" className="relative py-28 md:py-40 bg-black text-white border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient radial glow in Nik Gold */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[radial-gradient(circle,_rgba(255,195,0,0.08)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#FFC300]/30 text-[#FFC300] font-mono text-xs uppercase tracking-wider mb-4">
            <span>[05 // AGENCY TRACK RECORD]</span>
            <span className="text-white/20">|</span>
            <span className="text-[#9CA3AF]">A DECADE OF GROWTH</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tighter text-white leading-tight">
            Over a Decade of <br />
            <span className="bg-gradient-to-r from-white via-[#FFC300] to-[#FFE17F] bg-clip-text text-transparent">
              Dedicated Online Excellence.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            Our numbers reflect genuine experience gained every single day in the online space since 2010. We prioritize quality over quantity and maintain complete transparency in our speech and behavior.
          </p>
        </div>

        {/* 4 Large Display Numbers in Rounded Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((item, idx) => (
            <div
              key={item.label}
              className="p-8 rounded-3xl bg-[#090a0d] border border-white/[0.08] hover:border-[#FFC300]/40 transition-all duration-300 relative overflow-hidden group shadow-lg"
            >
              <div className="flex items-center justify-between font-mono text-[11px] text-[#9CA3AF] mb-6">
                <span>BENCHMARK 0{idx + 1}</span>
                <span className="px-2 py-0.5 rounded bg-[#FFC300]/10 border border-[#FFC300]/25 text-[#FFC300] font-bold">
                  {item.badge}
                </span>
              </div>

              <div className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tighter group-hover:text-[#FFC300] transition-colors">
                {item.number}
              </div>

              <div className="mt-4 font-sans text-base font-bold text-white">
                {item.label}
              </div>

              <p className="mt-1 text-xs text-[#9CA3AF] leading-relaxed">
                {item.sub}
              </p>
            </div>
          ))}
        </div>

        {/* The Official Contract Flexibility Guarantee */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0c0d10] border border-white/[0.08] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#FFC300]/10 border border-[#FFC300]/30 flex items-center justify-center text-[#FFC300]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="font-mono text-xs text-white font-bold">
                OFFICIAL NIK MARKETING FLEXIBILITY PLEDGE
              </div>
              <div className="text-xs text-[#9CA3AF] mt-0.5">
                We never tie clients down with long-term contracts. Pause, restart, increase, or cancel your services within 1 business day notice.
              </div>
            </div>
          </div>
          <div className="font-mono text-[11px] text-[#FFC300] flex items-center gap-2 shrink-0">
            <CheckCircle2 className="w-4 h-4" />
            <span>Honesty & Full Client Control</span>
          </div>
        </div>

      </div>
    </section>
  );
}
