import React, { useState } from "react"
import { ArrowLeft, ArrowRight, Phone, Mail, MapPin, CheckCircle2, Clock, Send } from "lucide-react"
import { businessInfo } from "../data/servicesData"

interface ContactPageProps {
  onBackToHome: () => void
}

export function ContactPage({ onBackToHome }: ContactPageProps) {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    service: "AI Video Production & Ad Films",
    budget: "₹2 Lakhs – ₹5 Lakhs",
    timeline: "Within 2–4 Weeks",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#141310] font-sans selection:bg-[#b82329] selection:text-white">
      {/* =========================================================================
          TOP PAGE HEADER & BREADCRUMBS
      ========================================================================== */}
      <header className="border-b border-[#ded8cb] bg-[#f2efe9] pt-28 pb-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#747169] hover:text-[#b82329] transition-colors cursor-pointer group self-start"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Overview</span>
            </button>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#9d998f]">
              Direct Executive Access • 24-Hour Proposal Turnaround
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="section-badge text-[#b82329] mb-3 inline-block">
                Start a Conversation
              </span>
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                Let's Bring Your Vision <br />
                <em>to the Big Screen.</em>
              </h1>
            </div>
            <p className="max-w-md text-sm sm:text-base text-[#5d5951] leading-relaxed font-light">
              Our directors personally review every brief. Tell us about your project requirements, target audience, and broadcast vision.
            </p>
          </div>
        </div>
      </header>

      {/* =========================================================================
          CONTACT FORM & OFFICE COORDINATES
      ========================================================================== */}
      <section className="section-pad bg-[#f7f5f0]">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-[#ded8cb] shadow-sm">
              <h2 className="font-editorial text-2xl sm:text-3xl font-bold mb-2">Project Brief &amp; Quotation Request</h2>
              <p className="text-xs sm:text-sm text-[#5d5951] font-light mb-8">
                Fill in the details below. We will revert with a detailed scope of work and quotation within 24 hours.
              </p>

              {formSubmitted ? (
                <div className="p-8 bg-[#fdf2f2] border border-[#b82329]/30 text-center">
                  <CheckCircle2 className="w-12 h-12 text-[#b82329] mx-auto mb-4" />
                  <h3 className="font-editorial text-2xl font-bold text-[#141310] mb-2">Thank You for Your Inquiry</h3>
                  <p className="text-sm text-[#5d5951] font-light max-w-md mx-auto">
                    Our creative director will review your brief and get in touch with you shortly at <span className="font-bold text-[#141310]">{formData.email || formData.phone}</span>.
                  </p>
                  <button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 px-6 py-2.5 bg-[#141310] text-white text-xs font-mono uppercase tracking-wider font-bold"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#747169] mb-2">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 bg-[#fbf9f4] border border-[#ded8cb] text-sm focus:border-[#b82329] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#747169] mb-2">
                        Organization / Brand *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        placeholder="e.g. Enterprise Ltd / Govt Dept"
                        className="w-full px-4 py-3 bg-[#fbf9f4] border border-[#ded8cb] text-sm focus:border-[#b82329] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#747169] mb-2">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. rahul@company.com"
                        className="w-full px-4 py-3 bg-[#fbf9f4] border border-[#ded8cb] text-sm focus:border-[#b82329] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#747169] mb-2">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 bg-[#fbf9f4] border border-[#ded8cb] text-sm focus:border-[#b82329] outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#747169] mb-2">
                        Production Service
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-[#fbf9f4] border border-[#ded8cb] text-sm focus:border-[#b82329] outline-none"
                      >
                        <option>AI Video Production &amp; Ad Films</option>
                        <option>Corporate Film &amp; Heritage Documentaries</option>
                        <option>Coffee Table Book &amp; Archival Publishing</option>
                        <option>Fine-Art Photography &amp; Visual Documentation</option>
                        <option>Multi-Camera Studio &amp; Podcast Sets</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#747169] mb-2">
                        Estimated Budget Bracket
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 bg-[#fbf9f4] border border-[#ded8cb] text-sm focus:border-[#b82329] outline-none"
                      >
                        <option>₹1 Lakh – ₹3 Lakhs</option>
                        <option>₹3 Lakhs – ₹7 Lakhs</option>
                        <option>₹7 Lakhs – ₹15 Lakhs</option>
                        <option>₹15 Lakhs+ (Comprehensive Campaign)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#747169] mb-2">
                      Project Overview &amp; Objectives
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about the project goals, audience, deliverables, or desired shoot locations..."
                      className="w-full px-4 py-3 bg-[#fbf9f4] border border-[#ded8cb] text-sm focus:border-[#b82329] outline-none resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#b82329] hover:bg-[#9e1c21] text-white font-mono text-xs font-bold uppercase tracking-widest transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Submit Project Brief</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Coordinates Column */}
            <div className="lg:col-span-5 space-y-8">
              {/* Studio Coordinates Card */}
              <div className="bg-[#141310] text-white p-8 sm:p-10 border border-[#ded8cb]">
                <h3 className="font-editorial text-2xl font-bold mb-6 text-white">Studio Coordinates</h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#b82329] shrink-0 mt-1" />
                    <div>
                      <div className="font-mono text-xs font-bold uppercase text-[#ff6b6b] mb-1">HYDERABAD STUDIO</div>
                      <div className="text-xs sm:text-sm text-[#ccc7bd] leading-relaxed font-light">
                        Jubilee Hills / Madhapur Creative Hub, Hyderabad, Telangana, India
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#b82329] shrink-0 mt-1" />
                    <div>
                      <div className="font-mono text-xs font-bold uppercase text-[#ff6b6b] mb-1">GUNTUR PRODUCTION OFFICE</div>
                      <div className="text-xs sm:text-sm text-[#ccc7bd] leading-relaxed font-light">
                        Heritage Corridor, Guntur / Vijayawada Region, Andhra Pradesh, India
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[#b82329] shrink-0 mt-1" />
                    <div>
                      <div className="font-mono text-xs font-bold uppercase text-[#ff6b6b] mb-1">DIRECT TELEPHONE</div>
                      <a href="tel:+919505555277" className="text-xs sm:text-sm text-white hover:text-[#ff6b6b] block">
                        +91 95055 55277
                      </a>
                      <a href="tel:+919666974593" className="text-xs sm:text-sm text-white hover:text-[#ff6b6b] block">
                        +91 96669 74593
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-[#b82329] shrink-0 mt-1" />
                    <div>
                      <div className="font-mono text-xs font-bold uppercase text-[#ff6b6b] mb-1">OFFICIAL EMAIL</div>
                      <a href="mailto:shlokhentertainments@gmail.com" className="text-xs sm:text-sm text-white hover:text-[#ff6b6b] block">
                        shlokhentertainments@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/10">
                    <a
                      href="https://wa.me/919505555277?text=Hi%20Shlokh%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20production%20project."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shadow-sm rounded-none"
                    >
                      <span>Chat on WhatsApp (+91 95055 55277)</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours & Guarantee */}
              <div className="bg-white p-8 border border-[#ded8cb] shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="w-5 h-5 text-[#b82329]" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#141310]">
                    STUDIO WORKING HOURS
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-[#5d5951] leading-relaxed font-light space-y-2">
                  <div className="flex justify-between">
                    <span>Monday – Saturday:</span>
                    <span className="font-bold text-[#141310]">9:30 AM – 7:30 PM IST</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday / Emergency Shoots:</span>
                    <span className="font-bold text-[#141310]">On Prior Production Notice</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
