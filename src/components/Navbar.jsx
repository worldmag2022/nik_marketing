import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Sparkles, Phone } from 'lucide-react';

export default function Navbar({ onOpenDiscovery }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Experience', href: '#experience' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out px-4 sm:px-6 md:px-8 ${
          scrolled
            ? 'py-3.5 bg-black/85 backdrop-blur-xl border-b border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo with official Nik Marketing emblem */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFC300]"
          >
            <div className="w-9 h-9 rounded-xl bg-[#111216] border border-[#FFC300]/30 flex items-center justify-center relative overflow-hidden group-hover:border-[#FFC300] transition-colors shadow-[0_0_15px_-3px_rgba(255,195,0,0.2)]">
              <span className="font-mono text-sm font-extrabold tracking-tighter text-[#FFC300]">
                NM
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-sans font-bold tracking-tight text-sm sm:text-base text-white leading-none">
                NIK MARKETING
              </span>
              <span className="font-mono text-[9px] text-[#FFC300] tracking-widest uppercase mt-0.5 font-medium">
                SEO & PERFORMANCE AGENCY
              </span>
            </div>
          </a>

          {/* Desktop Navigation Pill */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-1 px-4 py-1.5 rounded-full bg-[#0e1014]/90 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.5)]"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs text-[#9CA3AF] hover:text-[#FFC300] font-medium tracking-tight rounded-full hover:bg-white/[0.04] transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:7737768990"
              className="hidden xl:flex items-center gap-1.5 text-xs font-mono text-[#9CA3AF] hover:text-white transition-colors px-3 py-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFC300]" />
              <span>(773) 776-8990</span>
            </a>

            <button
              onClick={onOpenDiscovery}
              className="relative group overflow-hidden px-4.5 py-2 rounded-full text-xs font-bold text-black bg-[#FFC300] hover:bg-[#FFE17F] transition-all duration-300 shadow-[0_0_25px_-5px_rgba(255,195,0,0.4)] flex items-center gap-1.5 cursor-pointer"
            >
              <span className="relative z-10 font-bold tracking-tight">Get a Free Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 relative z-10 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenDiscovery}
              className="px-3 py-1.5 rounded-full text-xs font-bold text-black bg-[#FFC300] hover:bg-[#FFE17F] transition-colors"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#111216] border border-white/10 text-white hover:border-[#FFC300]/40 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FFC300]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 max-w-7xl mx-auto rounded-2xl bg-[#0c0d10]/98 backdrop-blur-2xl border border-white/10 p-5 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 px-3 text-sm font-medium text-[#9CA3AF] hover:text-[#FFC300] hover:bg-white/[0.04] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href="tel:7737768990"
                className="text-xs font-mono text-[#9CA3AF] flex items-center gap-2 px-2"
              >
                <Phone className="w-3.5 h-3.5 text-[#FFC300]" />
                <span>Call (773) 776-8990</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDiscovery();
                }}
                className="w-full py-2.5 rounded-xl text-center text-xs font-bold text-black bg-[#FFC300] hover:bg-[#FFE17F] transition-colors"
              >
                Get a Free Custom Strategy
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
