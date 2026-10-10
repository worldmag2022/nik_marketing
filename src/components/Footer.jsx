import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Phone, Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Footer({ onOpenDiscovery }) {
  const [chicagoTime, setChicagoTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setChicagoTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
          timeZone: 'America/Chicago',
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative bg-[#050607] border-t border-white/[0.08] pt-20 pb-12 overflow-hidden text-[#9CA3AF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/[0.06]">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#111216] border border-[#FFC300]/30 flex items-center justify-center">
                <span className="font-mono text-sm font-extrabold text-[#FFC300]">NM</span>
              </div>
              <span className="font-sans font-bold text-base tracking-tight text-white">
                NIK MARKETING AGENCY
              </span>
            </div>

            <p className="text-xs text-[#9CA3AF] max-w-sm leading-relaxed">
              We are a specialized SEO and Google Ads agency with a performance marketing approach. Delivering targeted traffic, qualified leads, and measurable growth since 2010.
            </p>

            <div className="pt-2 flex flex-col gap-2 font-mono text-xs">
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-3.5 h-3.5 text-[#FFC300] shrink-0" />
                <span>5059 S California Ave, Chicago</span>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Phone className="w-3.5 h-3.5 text-[#FFC300] shrink-0" />
                <a href="tel:7737768990" className="hover:text-[#FFC300] transition-colors">(773) 776-8990</a>
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Mail className="w-3.5 h-3.5 text-[#FFC300] shrink-0" />
                <a href="mailto:hi@nik.marketing" className="hover:text-[#FFC300] transition-colors">hi@nik.marketing</a>
              </div>
            </div>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 font-mono text-[11px] text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>CHICAGO OFFICE // {chicagoTime ? `${chicagoTime} CST` : 'OPEN'}</span>
              </div>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 font-mono text-xs">
            <div>
              <div className="text-white font-bold uppercase tracking-wider mb-4">
                SERVICES
              </div>
              <ul className="space-y-2.5">
                <li><a href="#services" className="hover:text-[#FFC300] transition-colors">SEO Services</a></li>
                <li><a href="#services" className="hover:text-[#FFC300] transition-colors">Local SEO</a></li>
                <li><a href="#services" className="hover:text-[#FFC300] transition-colors">Ecommerce SEO</a></li>
                <li><a href="#services" className="hover:text-[#FFC300] transition-colors">Link Building</a></li>
                <li><a href="#services" className="hover:text-[#FFC300] transition-colors">SEO Audit Report</a></li>
                <li><a href="#services" className="hover:text-[#FFC300] transition-colors">Google Ads Management</a></li>
                <li><a href="#services" className="hover:text-[#FFC300] transition-colors">Conversion CRO</a></li>
                <li><a href="#services" className="hover:text-[#FFC300] transition-colors">Web Design</a></li>
              </ul>
            </div>

            <div>
              <div className="text-white font-bold uppercase tracking-wider mb-4">
                AGENCY
              </div>
              <ul className="space-y-2.5">
                <li><a href="#about" className="hover:text-[#FFC300] transition-colors">Our Story & Tenets</a></li>
                <li><a href="#projects" className="hover:text-[#FFC300] transition-colors">Partnered Brands</a></li>
                <li><a href="#process" className="hover:text-[#FFC300] transition-colors">Consultation to Launch</a></li>
                <li><a href="#experience" className="hover:text-[#FFC300] transition-colors">10+ Years Track Record</a></li>
                <li><a href="#faq" className="hover:text-[#FFC300] transition-colors">FAQ & Flexibility Pledge</a></li>
                <li><a href="#contact" className="hover:text-[#FFC300] transition-colors">Contact Information</a></li>
              </ul>
            </div>

            <div>
              <div className="text-white font-bold uppercase tracking-wider mb-4">
                GET IN TOUCH
              </div>
              <ul className="space-y-2.5">
                <li>
                  <button onClick={onOpenDiscovery} className="hover:text-[#FFC300] transition-colors flex items-center gap-1 cursor-pointer text-[#FFC300]">
                    <span>Get a Free Quote</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </li>
                <li>
                  <a href="https://www.instagram.com/maziyaar.nik/" target="_blank" rel="noreferrer" className="hover:text-[#FFC300] transition-colors flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                    <span>@maziyaar.nik</span>
                  </a>
                </li>
                <li><a href="mailto:hi@nik.marketing" className="hover:text-[#FFC300] transition-colors">Email Us</a></li>
                <li><a href="tel:7737768990" className="hover:text-[#FFC300] transition-colors">Call (773) 776-8990</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-[11px] text-[#9CA3AF]/70">
          <div>
            Copyright © 2026 Nik Marketing Agency. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white transition-colors cursor-pointer">Terms of Service</span>
            <span className="hover:text-white transition-colors cursor-pointer">Cookie Policy</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
