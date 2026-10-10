import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight, HelpCircle, Phone, Mail } from 'lucide-react';

export default function FAQ({ onOpenDiscovery }) {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openIndex, setOpenIndex] = useState(0);

  const categories = [
    { id: 'general', name: 'General & Contracts' },
    { id: 'seo', name: 'SEO & Local Search' },
    { id: 'ads', name: 'Google Ads & Strategy' },
  ];

  const faqData = {
    general: [
      {
        q: 'Do you require long-term contracts or commitments?',
        a: 'Absolutely not. At Nik Marketing, we firmly believe in flexibility and not tying our clients down with long-term contracts. We never ask you to commit to anything you are not entirely comfortable with. You are always in control of your campaigns. At any given time, you can pause, restart, increase, decrease, or cancel your services within one business day of notifying your account manager.',
      },
      {
        q: 'How much experience does Nik Marketing Agency have?',
        a: 'Our digital marketing agency has over a decade of digital marketing and web design experience (since 2010). Over the years, we have partnered with 90+ businesses in the online space—from startups to large companies—and completed more than 210 website design and SEO consulting projects.',
      },
      {
        q: 'What makes Nik Marketing different from other agencies?',
        a: 'We are a small, agile, and energetic team led by senior strategists: Maziar Nikbakhsh, Pedram Bastani, and Parmida Shahbahrami. We prioritize quality over quantity, operate with complete honesty in speech and behavior, and communicate directly with you without layers of junior account representatives.',
      },
    ],
    seo: [
      {
        q: 'What is Local SEO and how does it help my business grow?',
        a: 'Local SEO is a targeted marketing strategy designed to ensure your website secures a prominent position within the top 10 organic search results and Google Local Map Pack when potential customers in your vicinity search for your services. It drives direct phone calls, map directions, and qualified local leads.',
      },
      {
        q: 'What does a complete SEO Analysis & Audit Report include?',
        a: 'Our SEO audit examines technical Core Web Vitals, mobile responsiveness, crawl errors, canonical links, schema markup, backlink quality, and competitor keyword gaps. We provide a clear, actionable roadmap to fix bottlenecks and increase your organic search traffic.',
      },
      {
        q: 'Do you offer Ecommerce SEO and Link Building?',
        a: 'Yes. For online stores, we optimize product taxonomy, category siloing, and product schema. We also execute high-authority contextual link building to ethically build your domain authority without risky spam tactics.',
      },
    ],
    ads: [
      {
        q: 'How do you manage Google Ads campaigns?',
        a: 'We handle the entire process from account setup and commercial intent keyword research to writing compelling ad copy and managing daily bid budgets. We continuously prune negative keywords and monitor performance to maximize your return on ad spend (ROAS).',
      },
      {
        q: 'Do I maintain ownership of my Google Ads account?',
        a: 'Yes, 100%. You maintain full ownership and administrative access to your Google Ads account, data, and billing settings at all times. All campaign data belongs to you.',
      },
      {
        q: 'How can we get started with Nik Marketing?',
        a: 'Simply request a free quote or schedule a consultation. We will conduct a preliminary review of your website and digital presence, and have an honest conversation about the most effective services for your business.',
      },
    ],
  };

  const currentFaqs = faqData[activeCategory];

  return (
    <section id="faq" className="relative py-28 md:py-40 bg-black text-white border-t border-white/[0.08] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-[#FFC300]/30 text-[#FFC300] font-mono text-xs uppercase tracking-wider mb-4">
            <span>[07 // FREQUENTLY ASKED QUESTIONS]</span>
            <span className="text-white/20">|</span>
            <span className="text-[#9CA3AF]">CLEAR ANSWERS</span>
          </div>
          <h2 className="font-sans text-3xl sm:text-5xl font-extrabold tracking-tighter text-white leading-tight">
            Frequently Asked Questions <br />
            <span className="bg-gradient-to-r from-white via-[#FFC300] to-[#FFE17F] bg-clip-text text-transparent">
              About Our Services & Process.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#9CA3AF] leading-relaxed">
            Everything you need to know about our contract flexibility, SEO methodology, Google Ads management, and agency experience.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(0);
              }}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#FFC300] text-black font-bold shadow-md'
                  : 'bg-white/[0.04] hover:bg-white/[0.08] text-[#9CA3AF] hover:text-white border border-white/5'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* FAQ Accordion Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-8 space-y-4">
            {currentFaqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={faq.q}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen
                      ? 'bg-[#0d0e12] border-[#FFC300]/30 shadow-lg'
                      : 'bg-[#08090b] border-white/[0.06] hover:border-white/12'
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="font-sans font-bold text-base sm:text-lg text-white tracking-tight">
                      {faq.q}
                    </span>
                    <span className="p-1.5 rounded-full bg-white/[0.04] text-[#9CA3AF] shrink-0">
                      {isOpen ? <Minus className="w-4 h-4 text-[#FFC300]" /> : <Plus className="w-4 h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm text-[#9CA3AF] leading-relaxed animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Quick Contact Card */}
          <div className="lg:col-span-4 p-8 rounded-3xl bg-[#090a0d] border border-white/[0.08] relative overflow-hidden space-y-6 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-[#14151a] border border-[#FFC300]/30 flex items-center justify-center text-[#FFC300]">
              <HelpCircle className="w-5 h-5" />
            </div>

            <div>
              <h3 className="font-sans text-xl font-bold text-white">
                Have a question for our team?
              </h3>
              <p className="mt-2 text-xs text-[#9CA3AF] leading-relaxed">
                If you need consultation for the development of your online business, reach out directly to Maziar and the team.
              </p>
            </div>

            <div className="space-y-2 text-xs font-mono text-[#9CA3AF] pt-2 border-t border-white/[0.06]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FFC300]" />
                <a href="tel:7737768990" className="hover:text-white transition-colors">(773) 776-8990</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FFC300]" />
                <a href="mailto:hi@nik.marketing" className="hover:text-white transition-colors">hi@nik.marketing</a>
              </div>
            </div>

            <button
              onClick={onOpenDiscovery}
              className="w-full py-3 rounded-full bg-[#FFC300] hover:bg-[#FFE17F] text-black font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <span>Get a Free Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
