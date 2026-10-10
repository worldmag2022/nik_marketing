import React, { useState } from 'react';
import { ArrowUpRight, Search, Target, TrendingUp, ShieldCheck, Zap, Activity, CheckCircle2, ChevronRight, Layers } from 'lucide-react';

export default function Hero({ onOpenDiscovery }) {
  const [activeTab, setActiveTab] = useState('seo');

  const scenarios = {
    seo: {
      title: 'SEO Services & Local Map Pack Dominance',
      subtitle: 'Targeted organic traffic engineered for high-intent search queries',
      metric1: { label: 'EXPERIENCE', val: '10+ Yrs', note: 'In digital space since 2010' },
      metric2: { label: 'COMPLETED PROJECTS', val: '210+', note: 'Websites & SEO consulting' },
      metric3: { label: 'BUSINESSES SERVED', val: '90+', note: 'Startups to established brands' },
      metric4: { label: 'CONTRACT LOCK-IN', val: '0 Mos', note: '100% client-controlled flexibility' },
      channels: [
        { name: 'Local SEO & Google Map Pack Optimization', desc: 'Top 10 organic search ranking for regional queries', badge: 'High-Intent Calls', pct: 92 },
        { name: 'Ecommerce SEO & Programmatic Catalogues', desc: 'Product siloing, category authority & rich snippet schema', badge: 'Revenue Traffic', pct: 86 },
        { name: 'High-Quality Link Building & Off-Page Authority', desc: 'Editorial mentions, high-DR contextual backlink acquisition', badge: 'Domain Authority', pct: 78 },
        { name: 'Technical SEO Analysis & Full Audit Reports', desc: 'Core Web Vitals, crawl budget allocation & index optimization', badge: 'Verified 200 OK', pct: 98 },
      ]
    },
    ads: {
      title: 'Professional Google Ads Management',
      subtitle: 'PPC search campaigns with daily bid optimization and zero long-term lock-in',
      metric1: { label: 'MANAGEMENT STYLE', val: 'Agile', note: 'Dedicated senior account partner' },
      metric2: { label: 'CAMPAIGN CONTROL', val: '100%', note: 'Pause, restart, or scale anytime' },
      metric3: { label: 'AD CHANNELS', val: 'Google Search', note: 'Search, Display, & Retargeting' },
      metric4: { label: 'AUDIT REPORT', val: 'Free', note: 'Comprehensive waste spend analysis' },
      channels: [
        { name: 'High-Intent Google Search Campaigns', desc: 'Targeting commercial keywords at the moment buyers search', badge: 'Immediate Inquiries', pct: 94 },
        { name: 'Google Ads Account Restructure & Audit', desc: 'Eliminating negative keywords, wasted spend & bid leakage', badge: 'Cost Efficiency', pct: 88 },
        { name: 'Display Network & Strategic Retargeting', desc: 'Re-engaging visitors across relevant partner websites', badge: 'Brand Recall', pct: 80 },
        { name: 'Daily Budget Monitoring & Bid Cap Guardrails', desc: 'Adjusting bids to maximize qualified lead volume per dollar', badge: 'Strict Oversight', pct: 96 },
      ]
    },
    performance: {
      title: 'Performance Marketing & Conversion Optimization (CRO)',
      subtitle: 'Turning website visitors into qualified leads and measurable revenue',
      metric1: { label: 'APPROACH', val: 'Data-Led', note: 'Target, Personalize, Measure' },
      metric2: { label: 'FUNNEL SPEED', val: '<500ms', note: 'Fast, high-converting UX design' },
      metric3: { label: 'AI WORKFLOWS', val: 'Active', note: 'Automated outreach & intelligence' },
      metric4: { label: 'REPORTING', val: 'Transparent', note: 'No vanity impression inflation' },
      channels: [
        { name: 'Conversion Rate Optimization (CRO)', desc: 'Frictionless forms, clear value propositions & trust signals', badge: 'Max Lead Yield', pct: 90 },
        { name: 'Custom High-Performance Web Design', desc: 'Tailored websites designed for mobile responsiveness and speed', badge: '210+ Completed', pct: 95 },
        { name: 'AI & Marketing Automation Workflows', desc: 'Automating lead qualification, nurturing, and tracking telemetry', badge: 'Modern Stack', pct: 84 },
        { name: 'Full-Funnel Measurement & Analytics', desc: 'Clear tracking of conversions, cost per lead, and revenue return', badge: 'Verified Metrics', pct: 92 },
      ]
    }
  };

  const current = scenarios[activeTab];

  const clientLogos = [
    { name: 'Artnaz', file: 'artnaz.webp' },
    { name: 'SGTR Tractor', file: 'sgtr.webp' },
    { name: 'Charsoonet', file: 'charsoonet.webp' },
    { name: 'Faris Exchange', file: 'faris.webp' },
    { name: 'Fardad Danesh', file: 'fardaddanesh.webp' },
    { name: 'Ahanmall Market', file: 'ahanmall.webp' },
    { name: 'IranGeo', file: 'irangeo.webp' },
    { name: 'Bimarz', file: 'bimarz.webp' },
    { name: 'Takfarsh', file: 'takfarsh.webp' },
    { name: 'ARC Inspection', file: 'arc.webp' },
    { name: 'Fulcrum Therapy', file: 'fulcrum.webp' },
    { name: 'Artamed', file: 'artamed.webp' },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black text-white">
      {/* Background glow in official Nik Marketing brand gold */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-[radial-gradient(ellipse_at_top,_rgba(255,195,0,0.14)_0%,_rgba(0,100,86,0.06)_40%,_rgba(0,0,0,0)_75%)] pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Eyebrow Chip */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-[#FFC300]/30 backdrop-blur-md shadow-[0_0_20px_-5px_rgba(255,195,0,0.2)] hover:border-[#FFC300] transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#FFC300] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#FFC300] font-semibold">
              OVER 10 YEARS OF EXPERIENCE
            </span>
            <span className="text-white/20 text-xs">|</span>
            <span className="font-mono text-[11px] text-[#9CA3AF] tracking-tight">
              90+ BUSINESSES SCALED
            </span>
          </div>
        </div>

        {/* Hero Title with official Nik Marketing messaging */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="font-sans text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-[1.08] text-balance">
            Targeted Traffic. Qualified Leads. <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-[#FFC300] to-[#FFE17F] bg-clip-text text-transparent">
              Measurable Revenue Growth.
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg lg:text-xl text-[#9CA3AF] max-w-2xl mx-auto font-normal leading-relaxed text-pretty">
            Nik Marketing Agency is a specialized SEO, Google Ads, and performance marketing agency. From initial consultation to full campaign implementation, we help brands acquire high-intent customers and dominate search results.
          </p>
        </div>

        {/* Action CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-16">
          <button
            onClick={onOpenDiscovery}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFC300] hover:bg-[#FFE17F] text-black font-bold text-sm transition-all duration-300 shadow-[0_0_30px_-5px_rgba(255,195,0,0.45)] hover:shadow-[0_0_35px_-5px_rgba(255,195,0,0.6)] flex items-center justify-center gap-2 group cursor-pointer"
          >
            <span>Get a Free Strategy Quote</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
          <a
            href="#services"
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-[#FFC300]/40 font-medium text-sm transition-all flex items-center justify-center gap-2"
          >
            <span>Explore Our 10 Services</span>
            <span className="font-mono text-xs text-[#FFC300]">↓</span>
          </a>
        </div>

        {/* Interactive Engine Command Center */}
        <div className="relative max-w-5xl mx-auto rounded-2xl p-1 bg-gradient-to-b from-[#FFC300]/25 via-white/[0.05] to-transparent shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)]">
          <div className="rounded-[15px] bg-[#0c0d10] border border-white/[0.08] overflow-hidden">
            
            {/* Topbar */}
            <div className="px-4 sm:px-6 py-3.5 bg-[#08090b] border-b border-white/[0.07] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFC300]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                </div>
                <div className="h-4 w-px bg-white/10 mx-1 hidden sm:block" />
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[11px] text-[#9CA3AF] uppercase tracking-wider">
                    NIK MARKETING EXECUTION ENGINE
                  </span>
                </div>
              </div>

              {/* Tabs */}
              <div className="flex items-center gap-1 p-1 rounded-lg bg-black/60 border border-white/10">
                <button
                  onClick={() => setActiveTab('seo')}
                  className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                    activeTab === 'seo'
                      ? 'bg-[#FFC300] text-black font-bold shadow-sm'
                      : 'text-[#9CA3AF] hover:text-white'
                  }`}
                >
                  SEO & Local Search
                </button>
                <button
                  onClick={() => setActiveTab('ads')}
                  className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                    activeTab === 'ads'
                      ? 'bg-[#FFC300] text-black font-bold shadow-sm'
                      : 'text-[#9CA3AF] hover:text-white'
                  }`}
                >
                  Google Ads Management
                </button>
                <button
                  onClick={() => setActiveTab('performance')}
                  className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                    activeTab === 'performance'
                      ? 'bg-[#FFC300] text-black font-bold shadow-sm'
                      : 'text-[#9CA3AF] hover:text-white'
                  }`}
                >
                  CRO & Web Design
                </button>
              </div>
            </div>

            {/* Dashboard Body */}
            <div className="p-4 sm:p-6 lg:p-8 space-y-6">
              
              {/* 4 Stat Badges */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                <div className="p-4 rounded-xl bg-[#111216] border border-white/[0.07] relative overflow-hidden group hover:border-[#FFC300]/40 transition-colors">
                  <div className="font-mono text-[10px] text-[#9CA3AF] uppercase mb-1">
                    {current.metric1.label}
                  </div>
                  <div className="font-sans text-2xl sm:text-3xl font-bold text-[#FFC300] tracking-tight">
                    {current.metric1.val}
                  </div>
                  <div className="mt-1 font-mono text-[11px] text-white/70">
                    {current.metric1.note}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#111216] border border-white/[0.07] relative overflow-hidden group hover:border-[#FFC300]/40 transition-colors">
                  <div className="font-mono text-[10px] text-[#9CA3AF] uppercase mb-1">
                    {current.metric2.label}
                  </div>
                  <div className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {current.metric2.val}
                  </div>
                  <div className="mt-1 font-mono text-[11px] text-[#9CA3AF]">
                    {current.metric2.note}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#111216] border border-white/[0.07] relative overflow-hidden group hover:border-[#FFC300]/40 transition-colors">
                  <div className="font-mono text-[10px] text-[#9CA3AF] uppercase mb-1">
                    {current.metric3.label}
                  </div>
                  <div className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {current.metric3.val}
                  </div>
                  <div className="mt-1 font-mono text-[11px] text-[#9CA3AF]">
                    {current.metric3.note}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#111216] border border-white/[0.07] relative overflow-hidden group hover:border-emerald-500/40 transition-colors">
                  <div className="font-mono text-[10px] text-[#9CA3AF] uppercase mb-1">
                    {current.metric4.label}
                  </div>
                  <div className="font-sans text-2xl sm:text-3xl font-bold text-emerald-400 tracking-tight">
                    {current.metric4.val}
                  </div>
                  <div className="mt-1 font-mono text-[11px] text-emerald-400">
                    {current.metric4.note}
                  </div>
                </div>
              </div>

              {/* Service Capabilities Breakdown */}
              <div className="p-4 sm:p-5 rounded-xl bg-[#101115] border border-white/[0.07]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                      {current.title}
                    </h3>
                    <p className="text-[11px] font-mono text-[#9CA3AF] mt-0.5">
                      {current.subtitle}
                    </p>
                  </div>
                  <span className="font-mono text-[10px] px-2.5 py-1 rounded bg-[#FFC300]/10 border border-[#FFC300]/25 text-[#FFC300] self-start sm:self-auto font-semibold">
                    Consultation to Implementation
                  </span>
                </div>

                <div className="space-y-3.5">
                  {current.channels.map((chan) => (
                    <div key={chan.name} className="space-y-1.5">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs font-mono gap-1">
                        <span className="text-white flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FFC300] shrink-0" />
                          <span className="font-medium">{chan.name}</span>
                        </span>
                        <div className="flex items-center gap-3 text-[11px] sm:text-xs">
                          <span className="text-[#9CA3AF] hidden md:inline">{chan.desc}</span>
                          <span className="px-2 py-0.5 rounded bg-white/[0.05] text-[#FFC300] font-bold">
                            {chan.badge}
                          </span>
                        </div>
                      </div>
                      <div className="h-1.5 w-full rounded-full bg-white/[0.04] overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#FFC300] to-[#FFE17F] transition-all duration-700 ease-out"
                          style={{ width: `${chan.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Notice */}
              <div className="pt-2 flex flex-wrap items-center justify-between text-[11px] font-mono text-[#9CA3AF] border-t border-white/[0.07]">
                <div className="flex items-center gap-2">
                  <Activity className="w-3.5 h-3.5 text-[#FFC300]" />
                  <span>Personalized Marketing Strategies • Small & Agile Pod</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Quality Over Quantity In Every Project</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Real Collaborated Clients Logo Marquee */}
        <div className="mt-20 pt-10 border-t border-white/[0.07]">
          <div className="text-center font-mono text-[11px] uppercase tracking-widest text-[#9CA3AF] mb-8">
            Proud to Collaborate with 90+ Respected Businesses & Brands
          </div>
          
          <div className="relative overflow-hidden w-full [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
            <div className="flex items-center gap-8 sm:gap-12 whitespace-nowrap animate-marquee">
              {clientLogos.concat(clientLogos).map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 px-4 py-2 rounded-xl bg-[#111216]/80 border border-white/5 hover:border-[#FFC300]/30 transition-all shrink-0 group"
                >
                  <img
                    src={`/clients/${logo.file}`}
                    alt={logo.name}
                    className="w-7 h-7 rounded-lg object-contain bg-white/5 p-0.5 filter grayscale group-hover:grayscale-0 transition-all"
                  />
                  <span className="font-sans font-bold text-xs sm:text-sm tracking-wide text-white/70 group-hover:text-white transition-colors">
                    {logo.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
