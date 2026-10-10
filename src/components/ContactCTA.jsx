import React from 'react';
import { ArrowUpRight, CheckCircle2, Sparkles, Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

export default function ContactCTA({ onOpenDiscovery }) {
  return (
    <section id="contact" className="relative py-32 md:py-48 bg-black text-white border-t border-white/[0.08] overflow-hidden text-center">
      {/* Background radial dusk glow in Nik Gold & Emerald */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[550px] bg-[radial-gradient(ellipse_at_bottom,_rgba(255,195,0,0.18)_0%,_rgba(0,100,86,0.10)_40%,_rgba(0,0,0,0)_75%)] pointer-events-none blur-3xl -z-10" />
      <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[radial-gradient(circle,_rgba(255,195,0,0.12)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none blur-2xl -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#FFC300]/30 backdrop-blur-md text-[#FFC300] font-mono text-xs uppercase tracking-wider mb-8">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TOGETHER, LET'S EMBARK ON A JOURNEY OF GROWTH</span>
        </div>

        {/* Closing Headline from official site */}
        <h2 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[1.08] text-balance">
          Are You Looking to Grow Your <br />
          <span className="bg-gradient-to-r from-white via-[#FFC300] to-[#FFE17F] bg-clip-text text-transparent">
            Business in the Digital World?
          </span>
        </h2>

        {/* Subtitle */}
        <p className="mt-8 text-base sm:text-xl text-[#9CA3AF] max-w-2xl mx-auto leading-relaxed text-pretty">
          Let’s have a chat. Reach out for a tailored digital marketing strategy covering SEO, Google Ads, or custom web design. No pushy sales pitch, and no long-term contract lock-in.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12 mb-16">
          <button
            onClick={onOpenDiscovery}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFC300] hover:bg-[#FFE17F] text-black font-bold text-sm transition-all duration-300 shadow-[0_0_35px_-5px_rgba(255,195,0,0.5)] hover:shadow-[0_0_40px_-5px_rgba(255,195,0,0.7)] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Get a Free Strategy Quote</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          <a
            href="tel:7737768990"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-[#FFC300]/40 font-medium text-sm transition-all flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-[#FFC300]" />
            <span>Call (773) 776-8990</span>
          </a>
        </div>

        {/* Direct Contact & Location Strip */}
        <div className="pt-10 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-6 font-mono text-xs text-[#9CA3AF]">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-[#FFC300] shrink-0" />
            <span>5059 S California Ave, Chicago</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Mail className="w-4 h-4 text-[#FFC300] shrink-0" />
            <a href="mailto:hi@nik.marketing" className="hover:text-white transition-colors">hi@nik.marketing</a>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>100% Contract Freedom</span>
          </div>
        </div>

      </div>
    </section>
  );
}
