import React, { useState } from 'react';
import { 
  Search, 
  Target, 
  Layout, 
  MapPin, 
  ShoppingCart, 
  Link2, 
  FileSearch, 
  Cpu, 
  TrendingUp, 
  CheckCircle2, 
  ArrowUpRight, 
  Terminal, 
  Sliders, 
  ShieldCheck,
  Zap,
  Globe
} from 'lucide-react';

export default function Services({ onOpenDiscovery }) {
  // Service 1: SEO tab
  const [seoTab, setSeoTab] = useState('audit');

  // Service 2: Google Ads budget slider
  const [adsBudget, setAdsBudget] = useState(3500);

  // Service 3: CRO Variant toggle
  const [croVariant, setCroVariant] = useState('nik');

  return (
    <section id="services" className="relative py-28 md:py-40 bg-black text-white border-t border-white/[0.08] overflow-hidden">
      {/* Background radial gold glow */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(255,195,0,0.08)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none blur-3xl -z-10" />
      <div className="absolute bottom-1/4 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle,_rgba(0,100,86,0.08)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#FFC300]/30 text-[#FFC300] font-mono text-xs uppercase tracking-wider mb-4">
            <span>[02 // SERVICES WE CAN HELP YOU WITH]</span>
            <span className="text-white/20">|</span>
            <span className="text-[#9CA3AF]">10 CORE CAPABILITIES</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tighter text-white leading-tight">
            Effective Digital Marketing Demands Diverse Expertise. <br />
            <span className="bg-gradient-to-r from-white via-[#FFC300] to-[#FFE17F] bg-clip-text text-transparent">
              We Handle the Heavy Lifting.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            Trust our team to pinpoint the most advantageous services for your business. We collaborate with you to optimize outreach across search engines, paid ads, conversion funnels, and modern web infrastructure.
          </p>
        </div>

        {/* Distinctive Service Layouts */}
        <div className="space-y-16 lg:space-y-24">

          {/* ======================================================== */}
          {/* SERVICE PILLAR 01: Comprehensive SEO Ecosystem           */}
          {/* SEO Services, Local SEO, Ecommerce SEO, Link Building,   */}
          {/* & SEO Analysis & Audit Reports                           */}
          {/* ======================================================== */}
          <div className="rounded-3xl bg-[#090a0d] border border-white/[0.08] p-6 sm:p-8 lg:p-12 relative overflow-hidden group hover:border-[#FFC300]/30 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#13151a] border border-[#FFC300]/30 flex items-center justify-center text-[#FFC300]">
                    <Search className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#FFC300] tracking-widest uppercase font-bold">
                      SPECIALIZED EXPERTISE // ORGANIC SEARCH
                    </span>
                    <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      SEO Services & Search Dominance
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                  We are best in SEO. From deep technical site audits to competitive keyword research and Google Local Map Pack optimization, we position your business where qualified buyers search every day.
                </p>

                {/* The 5 Real SEO Services */}
                <div className="space-y-3 pt-2">
                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-[#FFC300] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase font-mono">Local SEO Services</h4>
                      <p className="text-xs text-[#9CA3AF] mt-0.5">Top 10 organic search ranking & Google Map Pack visibility for nearby local customers.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                    <ShoppingCart className="w-4 h-4 text-[#FFC300] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase font-mono">Ecommerce SEO</h4>
                      <p className="text-xs text-[#9CA3AF] mt-0.5">Optimized category silos, product schema, and organic revenue capture for online stores.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                    <Link2 className="w-4 h-4 text-[#FFC300] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase font-mono">High-Authority Link Building</h4>
                      <p className="text-xs text-[#9CA3AF] mt-0.5">Natural, high-DR contextual backlinks that establish undeniable domain trust.</p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 flex items-start gap-3">
                    <FileSearch className="w-4 h-4 text-[#FFC300] shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase font-mono">SEO Analysis & Audit Report</h4>
                      <p className="text-xs text-[#9CA3AF] mt-0.5">Full diagnostic analysis uncovering crawl bottlenecks, index issues, and missed traffic opportunities.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenDiscovery}
                    className="text-xs font-mono text-[#FFC300] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Request Free SEO Audit Report</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Interactive Diagnostic Inspector */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-[#0d0e12] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs">
                  
                  {/* Terminal Header */}
                  <div className="px-4 py-3 bg-[#08090b] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-[#FFC300]" />
                      <span className="text-white font-semibold text-[11px]">
                        nik-seo-audit --target --live-check
                      </span>
                    </div>

                    <div className="flex items-center gap-1 bg-black/60 p-1 rounded-md border border-white/10">
                      <button
                        onClick={() => setSeoTab('audit')}
                        className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
                          seoTab === 'audit' ? 'bg-[#FFC300] text-black font-bold' : 'text-[#9CA3AF]'
                        }`}
                      >
                        Technical Audit
                      </button>
                      <button
                        onClick={() => setSeoTab('local')}
                        className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
                          seoTab === 'local' ? 'bg-[#FFC300] text-black font-bold' : 'text-[#9CA3AF]'
                        }`}
                      >
                        Local Map Pack
                      </button>
                      <button
                        onClick={() => setSeoTab('links')}
                        className={`px-2 py-0.5 rounded text-[10px] transition-colors ${
                          seoTab === 'links' ? 'bg-[#FFC300] text-black font-bold' : 'text-[#9CA3AF]'
                        }`}
                      >
                        Backlink Profile
                      </button>
                    </div>
                  </div>

                  {/* Terminal Content */}
                  <div className="p-5 bg-[#07080a] text-[#9CA3AF] space-y-3 min-h-[280px]">
                    {seoTab === 'audit' && (
                      <div className="space-y-2">
                        <div className="text-emerald-400">// Status: 200 OK | Core Web Vitals Passed</div>
                        <div className="p-3 rounded bg-white/[0.03] border border-white/5 space-y-1.5">
                          <div className="flex justify-between text-white font-semibold">
                            <span>Mobile PageSpeed Performance</span>
                            <span className="text-[#FFC300]">99 / 100</span>
                          </div>
                          <div className="flex justify-between text-white font-semibold">
                            <span>Largest Contentful Paint (LCP)</span>
                            <span className="text-emerald-400">0.42s</span>
                          </div>
                          <div className="flex justify-between text-white font-semibold">
                            <span>Cumulative Layout Shift (CLS)</span>
                            <span className="text-emerald-400">0.00</span>
                          </div>
                        </div>
                        <div className="text-white/80 pt-1">
                          Audit Summary: Clean crawl structure, zero broken canonicals, structured Schema.org markup verified for rich SERP snippets.
                        </div>
                      </div>
                    )}

                    {seoTab === 'local' && (
                      <div className="space-y-2">
                        <div className="text-[#FFC300]">// Google Local Pack Ranking Signal Analysis:</div>
                        <div className="p-3 rounded bg-white/[0.03] border border-white/5 space-y-1.5">
                          <div className="flex justify-between text-white">
                            <span>Google Business Profile Health</span>
                            <span className="text-emerald-400 font-bold">100% Optimized</span>
                          </div>
                          <div className="flex justify-between text-white">
                            <span>Local Citation Consistency (NAP)</span>
                            <span className="text-emerald-400 font-bold">Verified</span>
                          </div>
                          <div className="flex justify-between text-white">
                            <span>Geographic Radius Authority</span>
                            <span className="text-[#FFC300] font-bold">Top 3 Map Pack</span>
                          </div>
                        </div>
                        <div className="text-xs text-[#9CA3AF]">
                          Local strategy actively captures customers ready to call, visit, or request immediate service.
                        </div>
                      </div>
                    )}

                    {seoTab === 'links' && (
                      <div className="space-y-2">
                        <div className="text-cyan-400">// Off-Page Trust & Contextual Authority:</div>
                        <div className="p-3 rounded bg-white/[0.03] border border-white/5 space-y-1.5">
                          <div className="flex justify-between text-white">
                            <span>Domain Rating (DR) Trajectory</span>
                            <span className="text-emerald-400 font-bold">+28 Pts (Continuous Upward Trend)</span>
                          </div>
                          <div className="flex justify-between text-white">
                            <span>Referring Domains Quality</span>
                            <span className="text-white font-bold">100% Contextual Editorial Mentions</span>
                          </div>
                          <div className="flex justify-between text-white">
                            <span>Spam Score</span>
                            <span className="text-emerald-400 font-bold">0% Clean</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* ======================================================== */}
          {/* SERVICE PILLAR 02: Google Ads Management                 */}
          {/* Search Ads, Display, Campaign Audits, Zero Lock-in       */}
          {/* ======================================================== */}
          <div className="rounded-3xl bg-[#090a0d] border border-white/[0.08] p-6 sm:p-8 lg:p-12 relative overflow-hidden group hover:border-[#FFC300]/30 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column: Interactive Budget & Yield Calculator */}
              <div className="lg:col-span-7 order-2 lg:order-1">
                <div className="p-6 rounded-2xl bg-[#0d0e12] border border-white/10 shadow-2xl space-y-6">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div>
                      <div className="font-mono text-[10px] text-[#FFC300] uppercase tracking-wider font-bold">
                        BUDGET & CAMPAIGN ESTIMATOR
                      </div>
                      <div className="font-sans text-base sm:text-lg font-bold text-white">
                        Google Ads Campaign Management
                      </div>
                    </div>
                    <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#FFC300]/10 border border-[#FFC300]/30 text-[#FFC300] font-semibold">
                      Zero Long-Term Contracts
                    </span>
                  </div>

                  {/* Slider */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#9CA3AF]">ESTIMATED MONTHLY AD BUDGET:</span>
                      <span className="text-[#FFC300] font-bold text-sm">
                        ${adsBudget.toLocaleString()} / mo
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1000"
                      max="20000"
                      step="500"
                      value={adsBudget}
                      onChange={(e) => setAdsBudget(Number(e.target.value))}
                      className="w-full accent-[#FFC300] bg-white/10 h-2 rounded-lg cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-[#9CA3AF]">
                      <span>$1,000 / mo</span>
                      <span>$10,000 / mo</span>
                      <span>$20,000+ / mo</span>
                    </div>
                  </div>

                  {/* Projected Metrics */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-black/60 border border-white/5">
                      <div className="font-mono text-[10px] text-[#9CA3AF]">QUALIFIED CLICKS</div>
                      <div className="font-sans text-lg sm:text-xl font-bold text-white mt-1">
                        ~{Math.round(adsBudget / 2.8).toLocaleString()}
                      </div>
                      <div className="font-mono text-[10px] text-emerald-400 mt-0.5">High Commercial Intent</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-black/60 border border-white/5">
                      <div className="font-mono text-[10px] text-[#9CA3AF]">EST. INQUIRIES / LEADS</div>
                      <div className="font-sans text-lg sm:text-xl font-bold text-[#FFC300] mt-1">
                        ~{Math.round((adsBudget / 2.8) * 0.082).toLocaleString()}
                      </div>
                      <div className="font-mono text-[10px] text-white/70 mt-0.5">8.2% Avg Conversion</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-black/60 border border-white/5">
                      <div className="font-mono text-[10px] text-[#9CA3AF]">CONTRACT COMMITMENT</div>
                      <div className="font-sans text-lg sm:text-xl font-bold text-emerald-400 mt-1">
                        None
                      </div>
                      <div className="font-mono text-[10px] text-emerald-400 mt-0.5">Pause or Cancel Anytime</div>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-[#9CA3AF] flex items-center justify-between">
                    <span>You retain 100% ownership of your Google Ads account at all times.</span>
                    <span className="text-[#FFC300] font-mono font-bold text-[11px]">1 Business Day Notice</span>
                  </div>

                </div>
              </div>

              {/* Right Column: Google Ads details */}
              <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#13151a] border border-[#FFC300]/30 flex items-center justify-center text-[#FFC300]">
                    <Target className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#FFC300] tracking-widest uppercase font-bold">
                      SPECIALIZED EXPERTISE // PAID ADS
                    </span>
                    <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Google Ads Management
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                  Google Ads is one of the most effective tools to directly market to customers who are actively searching for what you sell. We handle account setup, negative keyword pruning, bid capping, and continuous conversion tracking.
                </p>

                <div className="space-y-2.5 pt-2">
                  {[
                    'Search Ads at the Top of Google Search Results',
                    'Strategic Display Ads & High-Intent Retargeting',
                    'Google Ads Account Audits & Wasted Spend Elimination',
                    'Complete Freedom: No Multi-Year Lock-In Contracts',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#FFC300] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenDiscovery}
                    className="text-xs font-mono text-[#FFC300] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Request Google Ads Audit</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* ======================================================== */}
          {/* SERVICE PILLAR 03: Conversion Rate Optimization (CRO)    */}
          {/* & High-Performance Web Design (210+ Completed)           */}
          {/* ======================================================== */}
          <div className="rounded-3xl bg-[#090a0d] border border-white/[0.08] p-6 sm:p-8 lg:p-12 relative overflow-hidden group hover:border-[#FFC300]/30 transition-all">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#13151a] border border-[#FFC300]/30 flex items-center justify-center text-[#FFC300]">
                    <Layout className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#FFC300] tracking-widest uppercase font-bold">
                      CONVERSION & DESIGN // 210+ PROJECTS
                    </span>
                    <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      Web Design & CRO Optimization
                    </h3>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed">
                  Our founder has been professionally designing websites since 2010. We build modern, mobile-first websites engineered to turn incoming visitors into phone calls, quote requests, and paying clients.
                </p>

                <div className="space-y-2.5 pt-2">
                  {[
                    'Custom Modern Website Design & Development',
                    'Conversion Rate Optimization (CRO) & Funnel Polish',
                    'Mobile-First Responsiveness & Blazing Fast Load Times',
                    'Clear Calls-to-Action with Zero Form Friction',
                  ].map((feat) => (
                    <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                      <CheckCircle2 className="w-4 h-4 text-[#FFC300] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <button
                    onClick={onOpenDiscovery}
                    className="text-xs font-mono text-[#FFC300] hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <span>Discuss Web Design Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Interactive CRO Comparator */}
              <div className="lg:col-span-7">
                <div className="rounded-2xl bg-[#0d0e12] border border-white/10 shadow-2xl p-6 space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="font-mono text-xs text-[#9CA3AF]">
                      CONVERSION ARCHITECTURE BENCHMARK
                    </span>
                    <div className="flex items-center gap-1 bg-black/60 p-1 rounded-lg border border-white/10">
                      <button
                        onClick={() => setCroVariant('standard')}
                        className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                          croVariant === 'standard' ? 'bg-red-500/20 text-red-300 border border-red-500/30' : 'text-[#9CA3AF]'
                        }`}
                      >
                        Standard Website
                      </button>
                      <button
                        onClick={() => setCroVariant('nik')}
                        className={`px-3 py-1 rounded text-xs font-mono transition-all ${
                          croVariant === 'nik' ? 'bg-[#FFC300] text-black font-bold' : 'text-[#9CA3AF]'
                        }`}
                      >
                        Nik Optimized
                      </button>
                    </div>
                  </div>

                  <div className={`p-5 rounded-xl border transition-all duration-300 ${
                    croVariant === 'nik'
                      ? 'bg-gradient-to-br from-[#151720] to-[#0c0d10] border-[#FFC300]/40 shadow-[0_0_25px_-5px_rgba(255,195,0,0.15)]'
                      : 'bg-[#0a0a0c] border-red-500/20 opacity-80'
                  }`}>
                    {croVariant === 'nik' ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs px-2.5 py-1 rounded bg-[#FFC300]/15 text-[#FFC300] font-bold">
                            OPTIMIZED FOR CONVERSIONS
                          </span>
                          <span className="font-mono text-xs text-emerald-400 font-bold">3.8x Higher Lead Rate</span>
                        </div>
                        <div className="p-3.5 rounded-lg bg-black/60 border border-white/10 text-xs text-white/90">
                          Clear value proposition, instant click-to-call on mobile, 0.4s load speed, and personalized messaging for local searchers.
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
                          <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                            <div className="text-[10px] text-[#9CA3AF]">PAGE SPEED</div>
                            <div className="text-emerald-400 font-bold mt-0.5">0.4s LCP</div>
                          </div>
                          <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                            <div className="text-[10px] text-[#9CA3AF]">FORM BOUNCE</div>
                            <div className="text-emerald-400 font-bold mt-0.5">Minimal</div>
                          </div>
                          <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                            <div className="text-[10px] text-[#9CA3AF]">MOBILE UX</div>
                            <div className="text-[#FFC300] font-bold mt-0.5">100/100</div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs px-2.5 py-1 rounded bg-red-500/10 text-red-400">
                            GENERIC SLOW TEMPLATE
                          </span>
                          <span className="font-mono text-xs text-red-400">High Abandonment</span>
                        </div>
                        <div className="p-3.5 rounded-lg bg-black/60 border border-red-500/10 text-xs text-[#9CA3AF]">
                          Bloated plugins, 4+ seconds load time on 4G mobile, convoluted 10-field forms, confusing navigation.
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs opacity-60">
                          <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                            <div className="text-[10px] text-[#9CA3AF]">PAGE SPEED</div>
                            <div className="text-red-400 font-bold mt-0.5">4.2s Slow</div>
                          </div>
                          <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                            <div className="text-[10px] text-[#9CA3AF]">FORM BOUNCE</div>
                            <div className="text-red-400 font-bold mt-0.5">65%+</div>
                          </div>
                          <div className="p-2 rounded bg-white/[0.03] border border-white/5">
                            <div className="text-[10px] text-[#9CA3AF]">MOBILE UX</div>
                            <div className="text-[#9CA3AF] font-bold mt-0.5">Poor</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* ======================================================== */}
          {/* SERVICE PILLAR 04: AI & Automation & Performance Growth  */}
          {/* ======================================================== */}
          <div className="rounded-3xl bg-[#090a0d] border border-white/[0.08] p-6 sm:p-8 lg:p-12 relative overflow-hidden group hover:border-[#FFC300]/30 transition-all">
            <div className="space-y-8">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#13151a] border border-[#FFC300]/30 flex items-center justify-center text-[#FFC300]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-[#FFC300] tracking-widest uppercase font-bold">
                      MODERN MARKETING TOOLS // AUTOMATION
                    </span>
                    <h3 className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight">
                      AI & Automation & Performance Marketing
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[#9CA3AF]">
                    Continuous Data Analysis & Growth
                  </span>
                </div>
              </div>

              {/* 4 Pillars Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {[
                  {
                    step: 'CAPABILITY 01',
                    title: 'Target & Personalize',
                    desc: 'Identifying the exact customer segment ready to buy, tailoring messages to address their specific needs.',
                    tag: 'Audience Focus',
                  },
                  {
                    step: 'CAPABILITY 02',
                    title: 'Analyze & Automate',
                    desc: 'Deploying smart automation for lead capture, follow-ups, and marketing intelligence without manual overhead.',
                    tag: 'Efficiency',
                  },
                  {
                    step: 'CAPABILITY 03',
                    title: 'Optimize & Innovate',
                    desc: 'A/B testing ad copies, landing headlines, and keyword bids constantly to increase marketing yield.',
                    tag: 'Agile Iteration',
                  },
                  {
                    step: 'CAPABILITY 04',
                    title: 'Measure & Integrate',
                    desc: 'Connecting SEO, Google Ads, and CRM data so you see the exact ROI on every marketing dollar invested.',
                    tag: 'Full Transparency',
                  },
                ].map((item) => (
                  <div
                    key={item.step}
                    className="p-5 rounded-2xl bg-[#0c0d10] border border-white/[0.07] hover:border-[#FFC300]/30 transition-all"
                  >
                    <div className="flex items-center justify-between mb-3 font-mono text-[10px]">
                      <span className="text-[#9CA3AF]">{item.step}</span>
                      <span className="text-[#FFC300] font-bold">{item.tag}</span>
                    </div>
                    <h4 className="font-sans font-bold text-base text-white mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
