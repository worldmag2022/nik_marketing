import React from 'react';
import { Quote, CheckCircle2, Shield, Heart, Sparkles, Handshake } from 'lucide-react';

export default function Testimonials() {
  const pillars = [
    {
      title: 'Agile & Personal Collaboration',
      text: 'Our team is intentionally kept small and agile. This structure allows us to be flexible and highly responsive to your business needs, bypassing corporate friction.',
      badge: 'Direct Senior Access',
      icon: Handshake,
    },
    {
      title: 'Honesty in Speech & Behavior',
      text: 'Honesty in speech and behavior are the most important elements of our agency. We present transparent data, realistic timelines, and unvarnished search audits.',
      badge: 'Core Value',
      icon: Shield,
    },
    {
      title: 'Quality Over Quantity',
      text: 'We do not run a churn-and-burn retainer factory. We accept a selective roster of businesses where we can dedicate deep attention to search rankings and revenue growth.',
      badge: 'Selective Partnerships',
      icon: Heart,
    },
  ];

  return (
    <section className="relative py-28 md:py-40 bg-black text-white border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle,_rgba(255,195,0,0.06)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#FFC300]/30 text-[#FFC300] font-mono text-xs uppercase tracking-wider mb-4">
            <span>[06 // PARTNERSHIP ETHOS]</span>
            <span className="text-white/20">|</span>
            <span className="text-[#9CA3AF]">WHY CLIENTS CHOOSE NIK</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tighter text-white leading-tight">
            Built on Intimate Relationships, <br />
            <span className="bg-gradient-to-r from-white via-[#FFC300] to-[#FFE17F] bg-clip-text text-transparent">
              Honesty, and Business Trust.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            Nik Marketing Agency is a dynamic, energetic, and creative team. We maintain an intimate and friendly environment while partnering with every business.
          </p>
        </div>

        {/* 3 Core Trust Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className="p-8 rounded-3xl bg-[#0a0b0e] border border-white/[0.08] hover:border-[#FFC300]/40 transition-all duration-300 relative overflow-hidden group shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-xl bg-[#14151a] border border-[#FFC300]/30 flex items-center justify-center text-[#FFC300]">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/25 text-[#FFC300] font-mono text-[10px] font-bold uppercase">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="font-sans text-xl font-bold text-white mb-3 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#9CA3AF] leading-relaxed">
                    {item.text}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs font-mono text-emerald-400">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>Verified Agency Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
