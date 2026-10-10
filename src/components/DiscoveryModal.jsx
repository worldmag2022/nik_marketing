import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Shield, Phone, Mail } from 'lucide-react';

export default function DiscoveryModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    service: 'SEO Services & Technical Audit',
    budget: '$1,000 - $3,000 / mo',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl rounded-3xl bg-[#0c0d11] border border-white/15 p-6 sm:p-8 shadow-2xl text-left overflow-hidden">
        
        {/* Glow ambient background in Nik Gold */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-[radial-gradient(circle,_rgba(255,195,0,0.18)_0%,_rgba(0,0,0,0)_70%)] pointer-events-none blur-2xl" />

        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors"
          aria-label="Close quote modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/30 text-[#FFC300] mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-sans text-2xl font-bold text-white">
              Consultation Request Received
            </h3>
            <p className="text-sm text-[#9CA3AF] max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-white font-semibold">{formData.name || 'there'}</span>. Maziar and our senior marketing team will review your website <span className="text-[#FFC300] font-mono">{formData.website || 'provided'}</span> and contact you at <span className="text-white">{formData.email}</span> within one business day.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-full bg-[#FFC300] hover:bg-[#FFE17F] text-black font-bold text-xs transition-colors"
              >
                Return to Site
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-[#FFC300]/10 border border-[#FFC300]/25 font-mono text-[10px] text-[#FFC300] uppercase tracking-wider mb-2 font-bold">
                <span>Free Strategy Consultation</span>
              </div>
              <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Get a Free Quote
              </h3>
              <p className="text-xs sm:text-sm text-[#9CA3AF] mt-1 leading-relaxed">
                Connect directly with our agile team. We analyze your website and provide a transparent, personalized growth plan.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[#9CA3AF] block text-[11px]">YOUR FULL NAME</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white focus:border-[#FFC300] focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#9CA3AF] block text-[11px]">EMAIL ADDRESS</label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white focus:border-[#FFC300] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[#9CA3AF] block text-[11px]">WEBSITE URL</label>
                  <input
                    type="text"
                    required
                    placeholder="https://yourcompany.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white focus:border-[#FFC300] focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#9CA3AF] block text-[11px]">PHONE (OPTIONAL)</label>
                  <input
                    type="tel"
                    placeholder="(773) 000-0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white focus:border-[#FFC300] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[#9CA3AF] block text-[11px]">PRIMARY SERVICE NEEDED</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white focus:border-[#FFC300] focus:outline-none transition-colors"
                  >
                    <option value="SEO Services & Technical Audit">SEO Services & Audit</option>
                    <option value="Local SEO & Google Maps">Local SEO & Google Maps</option>
                    <option value="Google Ads Management">Google Ads Management</option>
                    <option value="Ecommerce SEO & CRO">Ecommerce SEO & CRO</option>
                    <option value="Web Design & Development">Custom Web Design</option>
                    <option value="Link Building & Authority">Link Building Services</option>
                    <option value="AI & Marketing Automation">AI & Automation</option>
                    <option value="Full Performance Marketing">Full-Service Growth</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#9CA3AF] block text-[11px]">APPROX. MONTHLY BUDGET</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-black/60 border border-white/10 text-white focus:border-[#FFC300] focus:outline-none transition-colors"
                  >
                    <option value="Under $1,000 / mo">Under $1,000 / mo</option>
                    <option value="$1,000 - $3,000 / mo">$1,000 – $3,000 / mo</option>
                    <option value="$3,000 - $7,000 / mo">$3,000 – $7,000 / mo</option>
                    <option value="$7,000+ / mo">$7,000+ / mo (Scale)</option>
                  </select>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-[#FFC300] hover:bg-[#FFE17F] text-black font-sans font-bold text-xs tracking-tight transition-all duration-300 shadow-[0_0_20px_-3px_rgba(255,195,0,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Free Strategy Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-[10px] text-[#9CA3AF] pt-1">
                <Shield className="w-3 h-3 text-emerald-400" />
                <span>Zero Long-Term Lock-In • Privacy Protected</span>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
