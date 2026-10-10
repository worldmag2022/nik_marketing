import React, { useState } from 'react';
import { ArrowUpRight, Check, ExternalLink, ChevronRight, X, Briefcase, Globe } from 'lucide-react';

export default function SelectedWork({ onOpenDiscovery }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const realProjects = [
    {
      id: 'charsoonet',
      title: 'Charsoonet',
      sector: 'E-commerce & Digital Retail',
      logo: 'charsoonet.webp',
      badge: 'Ecommerce SEO',
      scope: ['Ecommerce SEO', 'Web Architecture', 'Conversion Optimization'],
      overview: 'Collaborated on organic search infrastructure and ecommerce SEO optimization to capture high-intent consumer product searches and streamline shopping cart conversions.',
      deliverables: 'Product taxonomy optimization, rich snippet schema, and Core Web Vitals speed tuning.',
    },
    {
      id: 'sgtr',
      title: 'Rajaei Tractor Industry (SGTR)',
      sector: 'Industrial Machinery & Equipment',
      logo: 'sgtr.webp',
      badge: 'B2B Search & SEO',
      scope: ['B2B SEO Consulting', 'Google Search', 'Technical Silos'],
      overview: 'Partnered with one of the premier industrial tractor parts manufacturers to expand commercial search presence for wholesale buyers, distributors, and fleet operators.',
      deliverables: 'Industrial keyword mapping, commercial inquiry landing architecture, and technical indexation.',
    },
    {
      id: 'faris',
      title: 'Faris Crypto Exchange',
      sector: 'Fintech & Digital Assets',
      logo: 'faris.webp',
      badge: 'Performance Marketing',
      scope: ['Performance Marketing', 'SEO Strategy', 'Digital Branding'],
      overview: 'Provided strategic digital marketing and SEO consulting for a high-security cryptocurrency exchange platform, focusing on user acquisition and trustworthy digital presence.',
      deliverables: 'Competitor gap analysis, high-security landing page optimization, and search trust building.',
    },
    {
      id: 'artnaz',
      title: 'Artnaz',
      sector: 'Handmade Arts & Design',
      logo: 'artnaz.webp',
      badge: 'Web Design & SEO',
      scope: ['Custom Web Design', 'Brand Identity', 'Organic Search'],
      overview: 'Designed a tailored, responsive digital storefront showcasing unique artisanal crafts with an emphasis on visual aesthetics, fast mobile checkout, and search discoverability.',
      deliverables: 'Custom responsive web design, mobile optimization, and targeted product SEO.',
    },
    {
      id: 'ahanmall',
      title: 'Ahanmall Market',
      sector: 'Industrial Steel & B2B Trading',
      logo: 'ahanmall.webp',
      badge: 'B2B Lead Generation',
      scope: ['Search Engine Optimization', 'Lead Capture', 'Technical SEO'],
      overview: 'Engineered a specialized search optimization strategy for a major industrial steel trading marketplace to capture high-volume commercial quotes from contractors and procurement teams.',
      deliverables: 'Daily price index page SEO, commercial search siloing, and speed optimization.',
    },
    {
      id: 'fulcrum',
      title: 'Fulcrum Therapy',
      sector: 'Healthcare & Physical Therapy',
      logo: 'fulcrum.webp',
      badge: 'Local SEO & Maps',
      scope: ['Local SEO', 'Google Map Pack', 'Conversion CRO'],
      overview: 'Executed targeted Local SEO to position Fulcrum Therapy at the top of nearby search results for physical rehabilitation, driving direct patient phone calls and appointment bookings.',
      deliverables: 'Google Business Profile optimization, local citation audit, and appointment booking flow.',
    },
    {
      id: 'takfarsh',
      title: 'Takfarsh',
      sector: 'Luxury Rugs & Commerce',
      logo: 'takfarsh.webp',
      badge: 'Catalogue SEO',
      scope: ['Ecommerce SEO', 'Content Strategy', 'Link Building'],
      overview: 'Optimized search rankings and category authority for an extensive luxury handwoven rug collection, connecting artisanal weavers with discerning buyers worldwide.',
      deliverables: 'High-DR link acquisition, category tree structuring, and image search optimization.',
    },
    {
      id: 'fardaddanesh',
      title: 'Fardad Danesh Pasargad',
      sector: 'Higher Education & Research',
      logo: 'fardaddanesh.webp',
      badge: 'Institutional SEO',
      scope: ['SEO Consulting', 'Web Consulting', 'Lead Generation'],
      overview: 'Developed academic organic search strategies and student recruitment consultation, elevating course visibility and institutional credibility in competitive search landscapes.',
      deliverables: 'Curriculum search silos, institutional schema markup, and applicant inquiry forms.',
    },
  ];

  return (
    <section id="projects" className="relative py-28 md:py-40 bg-black text-white border-t border-white/[0.08] overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,_rgba(255,195,0,0.08)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#FFC300]/30 text-[#FFC300] font-mono text-xs uppercase tracking-wider mb-4">
              <span>[03 // FEATURED CLIENT PROJECTS]</span>
              <span className="text-white/20">|</span>
              <span className="text-[#9CA3AF]">90+ PARTNERED BRANDS</span>
            </div>
            <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tighter text-white leading-tight">
              Proud to Collaborate with <br />
              <span className="bg-gradient-to-r from-white via-[#FFC300] to-[#FFE17F] bg-clip-text text-transparent">
                Market Leaders & Innovators.
              </span>
            </h2>
          </div>
          <div className="text-left md:text-right font-mono text-xs text-[#9CA3AF]">
            <span>210+ COMPLETED PROJECTS</span>
            <br />
            <span className="text-[#FFC300] font-bold">10+ YEARS IN THE ONLINE WORLD</span>
          </div>
        </div>

        {/* Real Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {realProjects.map((item) => (
            <div
              key={item.id}
              className="rounded-3xl bg-[#0a0b0e] border border-white/[0.08] p-6 sm:p-8 relative overflow-hidden transition-all duration-300 group hover:border-[#FFC300]/40 shadow-lg"
            >
              {/* Top Accent Gradient */}
              <div className="absolute top-0 left-0 right-0 h-28 bg-gradient-to-b from-[#FFC300]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="relative z-10 space-y-6">
                
                {/* Logo & Category */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className="w-12 h-12 rounded-2xl bg-[#14151a] border border-white/10 flex items-center justify-center p-2 group-hover:border-[#FFC300]/30 transition-colors">
                      <img
                        src={`/clients/${item.logo}`}
                        alt={item.title}
                        className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all"
                      />
                    </div>
                    <div>
                      <h3 className="font-sans font-bold text-base sm:text-lg text-white">
                        {item.title}
                      </h3>
                      <span className="font-mono text-xs text-[#9CA3AF]">{item.sector}</span>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full font-mono text-[10px] uppercase font-bold tracking-wider bg-[#FFC300]/10 border border-[#FFC300]/25 text-[#FFC300]">
                    {item.badge}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-[#9CA3AF] leading-relaxed">
                  {item.overview}
                </p>

                {/* Scope Pills */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/[0.06]">
                  {item.scope.map((s) => (
                    <span
                      key={s}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.03] border border-white/5 font-mono text-[11px] text-white/80"
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Footer Action */}
                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs font-mono text-[#9CA3AF]">
                    Status: <span className="text-emerald-400 font-semibold">Active Partnership</span>
                  </span>
                  <button
                    onClick={() => setSelectedProject(item)}
                    className="inline-flex items-center gap-1 font-mono text-xs text-[#FFC300] hover:text-white transition-colors cursor-pointer"
                  >
                    <span>View Project Scope</span>
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl rounded-3xl bg-[#0c0d11] border border-white/15 p-6 sm:p-8 shadow-2xl text-left space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <img
                  src={`/clients/${selectedProject.logo}`}
                  alt={selectedProject.title}
                  className="w-10 h-10 rounded-xl bg-white/5 p-1 object-contain"
                />
                <div>
                  <h3 className="font-sans text-xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <span className="font-mono text-xs text-[#9CA3AF]">
                    {selectedProject.sector}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-sm text-[#9CA3AF] leading-relaxed">
              <div>
                <h4 className="font-mono text-xs text-[#FFC300] uppercase tracking-wider font-bold mb-1">
                  COLLABORATION OBJECTIVE:
                </h4>
                <p>{selectedProject.overview}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-[#FFC300] uppercase tracking-wider font-bold mb-1">
                  DELIVERABLES EXECUTED:
                </h4>
                <p>{selectedProject.deliverables}</p>
              </div>

              <div>
                <h4 className="font-mono text-xs text-white uppercase tracking-wider font-bold mb-2">
                  SERVICES INCLUDED:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.scope.map((s) => (
                    <span key={s} className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-white">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="font-mono text-xs text-[#9CA3AF]">
                Nik Marketing Agency
              </span>
              <button
                onClick={() => {
                  setSelectedProject(null);
                  onOpenDiscovery();
                }}
                className="px-5 py-2.5 rounded-full bg-[#FFC300] hover:bg-[#FFE17F] text-black font-bold text-xs transition-colors flex items-center gap-1.5"
              >
                <span>Request Similar Strategy</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
