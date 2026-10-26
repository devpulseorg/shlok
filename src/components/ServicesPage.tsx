import React, { useState } from "react"
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Sliders } from "lucide-react"
import { servicesData, businessInfo, type ServiceItem } from "../data/servicesData"

interface ServicesPageProps {
  onBackToHome: () => void
  onOpenQuoteModal: (serviceName?: string) => void
}

export function ServicesPage({ onBackToHome, onOpenQuoteModal }: ServicesPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")

  const categories = [
    "All",
    "AI & Emerging",
    "Corporate & Commercial",
    "Government & Public",
    "Studio & Audio",
    "Post-Production",
  ]

  const filteredServices =
    selectedCategory === "All"
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory)

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
              14 Specialized Capabilities • End-to-End Turnkey Execution
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="section-badge text-[#b82329] mb-3 inline-block">
                Production Services &amp; Capabilities
              </span>
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                From Concept <br />
                <em>to High-Impact Screen.</em>
              </h1>
            </div>
            <p className="max-w-md text-sm sm:text-base text-[#5d5951] leading-relaxed font-light">
              {businessInfo.coverageAndPricing}
            </p>
          </div>
        </div>
      </header>

      {/* =========================================================================
          SERVICES GRID & CATEGORIES
      ========================================================================== */}
      <section className="section-pad bg-[#f7f5f0]">
        <div className="site-container">
          {/* Segmented Category Filter */}
          <div className="category-filter-wrap mb-10">
            <div className="category-segmented-bar">
              {categories.map((cat) => {
                const count =
                  cat === "All"
                    ? servicesData.length
                    : servicesData.filter((s) => s.category === cat).length
                const isActive = selectedCategory === cat
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`category-tab-btn cursor-pointer ${isActive ? "active" : ""}`}
                  >
                    <span>{cat}</span>
                    <span className="category-tab-badge">{count}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* 14 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <article
                key={service.slug}
                className="bg-white border border-[#ded8cb] hover:border-[#b82329] shadow-sm hover:shadow-xl transition-all duration-300 p-8 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-[#b82329]">
                      {service.number}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 bg-[#f7f5f0] border border-[#ded8cb] text-[#747169]">
                      {service.category}
                    </span>
                  </div>

                  <h3 className="font-editorial text-2xl font-bold text-[#141310] group-hover:text-[#b82329] transition-colors mb-3 leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5d5951] leading-relaxed mb-6 font-light">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-6 pt-4 border-t border-[#f0ede6]">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#9d998f] block mb-2 font-bold">
                      KEY DELIVERABLES:
                    </span>
                    {service.deliverables.map((deliv, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#423f39]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#b82329] shrink-0 mt-0.5" />
                        <span className="leading-snug">{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#ded8cb]/60 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {service.tags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="text-[9px] font-mono text-[#747169] bg-[#f7f5f0] px-2 py-0.5 border border-[#ded8cb]">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenQuoteModal(service.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[#b82329] hover:text-[#9e1c21] cursor-pointer"
                  >
                    <span>Inquire</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* =========================================================================
              EVERY PRODUCTION INCLUDES (VIRALOOP QUALITY BENCHMARK)
          ========================================================================== */}
          <div className="mt-20 pt-16 border-t border-[#ded8cb]">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="section-badge text-[#b82329] mb-2 inline-block">
                Broadcast Standard &amp; Deliverables
              </span>
              <h3 className="font-editorial text-3xl sm:text-4xl font-bold">
                Every Production Includes.
              </h3>
              <p className="text-xs sm:text-sm text-[#5d5951] font-light mt-2">
                Uncompromising broadcast standards across documentary, commercial, and archival deliverables.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 border border-[#ded8cb]">
                <div className="w-8 h-8 rounded-full bg-[#fdf2f2] text-[#b82329] flex items-center justify-center font-mono text-xs font-bold mb-4">
                  01
                </div>
                <h4 className="font-editorial text-lg font-bold mb-2">Cinema 4K Deliverables</h4>
                <p className="text-xs text-[#5d5951] font-light leading-relaxed">
                  Master exports formatted in Cinema DCI 4K, Apple ProRes 422 HQ, and web-optimized H.265.
                </p>
              </div>

              <div className="bg-white p-6 border border-[#ded8cb]">
                <div className="w-8 h-8 rounded-full bg-[#fdf2f2] text-[#b82329] flex items-center justify-center font-mono text-xs font-bold mb-4">
                  02
                </div>
                <h4 className="font-editorial text-lg font-bold mb-2">Multi-Aspect Ratios</h4>
                <p className="text-xs text-[#5d5951] font-light leading-relaxed">
                  16:9 Theatrical widescreen, 9:16 vertical viral reels, and 1:1 social cuts for every campaign.
                </p>
              </div>

              <div className="bg-white p-6 border border-[#ded8cb]">
                <div className="w-8 h-8 rounded-full bg-[#fdf2f2] text-[#b82329] flex items-center justify-center font-mono text-xs font-bold mb-4">
                  03
                </div>
                <h4 className="font-editorial text-lg font-bold mb-2">Studio Master Audio</h4>
                <p className="text-xs text-[#5d5951] font-light leading-relaxed">
                  Dialogue noise reduction, original score integration, and separate dialogue/music/FX stems.
                </p>
              </div>

              <div className="bg-white p-6 border border-[#ded8cb]">
                <div className="w-8 h-8 rounded-full bg-[#fdf2f2] text-[#b82329] flex items-center justify-center font-mono text-xs font-bold mb-4">
                  04
                </div>
                <h4 className="font-editorial text-lg font-bold mb-2">Full Commercial Rights</h4>
                <p className="text-xs text-[#5d5951] font-light leading-relaxed">
                  Complete ownership transfer for worldwide digital, television, theatrical, and OTT distribution.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Conversion Strip */}
          <div className="mt-16 p-8 bg-[#141310] text-white border border-[#ded8cb] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-lg">
            <div>
              <h4 className="font-editorial text-2xl font-bold mb-1">
                Need a Custom Production Package?
              </h4>
              <p className="text-xs sm:text-sm text-[#ccc7bd] font-light">
                We design tailored production workflows combining live cinematography, AI video synthesis, and studio multi-cam sets.
              </p>
            </div>
            <button
              onClick={() => onOpenQuoteModal("Custom Production Package")}
              className="btn-primary text-xs shrink-0 cursor-pointer"
            >
              Request Custom Quote
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
