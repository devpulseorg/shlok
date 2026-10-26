import React, { useState } from "react"
import {
  ArrowLeft,
  ArrowRight,
  Camera,
  Compass,
  Film,
  Layers,
  Sparkles,
  Users,
  Video,
  Tv,
  Mic,
  Award,
  CheckCircle2,
  Sliders
} from "lucide-react"
import {
  executiveLeaders,
  productionSyndicateDepartments,
  equipmentInventory,
  productionProcessSteps,
} from "../data/studioData"

interface StudioPageProps {
  onBackToHome: () => void
  onOpenQuoteModal: (serviceName?: string) => void
  onOpenLightbox: (data: { src: string; title: string; subtitle?: string }) => void
}

export function StudioPage({ onBackToHome, onOpenQuoteModal, onOpenLightbox }: StudioPageProps) {
  const [activeTab, setActiveTab] = useState<"people" | "equipment" | "process" | "space">("people")

  const groundFilmingPhotos = [
    {
      src: "/images/portfolio_photos/p08_bus_beneficiary_shoot.jpg",
      title: "Rural Transit & Passenger Feedback",
      caption: "Interviewing women commuters outside RTC bus services on welfare transit schemes.",
    },
    {
      src: "/images/portfolio_photos/p08_village_hall_interview.jpg",
      title: "Village Hall Community Dialogue",
      caption: "Capturing authentic accounts of agricultural credit and welfare beneficiaries.",
    },
    {
      src: "/images/portfolio_photos/p08_field_editing_laptop.jpg",
      title: "Rapid On-Location Post-Production",
      caption: "Editors cutting and subtitling interviews on field laptops for immediate review.",
    },
    {
      src: "/images/portfolio_photos/p08_beneficiary_interview_saree.jpg",
      title: "Grassroots Beneficiary Testimonial",
      caption: "Filming direct beneficiary experiences with cinema cameras and lapel audio.",
    },
    {
      src: "/images/portfolio_photos/p08_community_elder_interview.jpg",
      title: "Community Elders & Public Sentiment",
      caption: "Documenting village leadership viewpoints with full consent and clarity.",
    },
    {
      src: "/images/portfolio_photos/p11_stage_multicam_shoot.jpg",
      title: "Auditorium Multi-Camera Production",
      caption: "Statewide welfare conventions captured with dual telephoto camera rigs.",
    },
    {
      src: "/images/portfolio_photos/p12_workshop_craftsman_shoot.jpg",
      title: "Artisan Workshop Filming",
      caption: "Documenting cottage industry workers and handloom units at work.",
    },
    {
      src: "/images/portfolio_photos/p12_artisan_smiling_portrait.jpg",
      title: "Generational Craft Portraiture",
      caption: "Capturing pride and resilience in traditional handloom communities.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#141310] text-white font-sans selection:bg-[#b82329] selection:text-white">
      {/* =========================================================================
          TOP PAGE HEADER & BREADCRUMBS
      ========================================================================== */}
      <header className="border-b border-white/10 bg-[#0e0d0c] pt-28 pb-12 px-4 sm:px-8 lg:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/60 hover:text-[#ff6b6b] transition-colors cursor-pointer group self-start"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>← Back to Overview</span>
            </button>
            <div className="text-[11px] font-mono uppercase tracking-wider text-white/40">
              30+ Specialists • In-House Cinema Gear &amp; Virtual Stages
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="section-badge text-[#ff6b6b] border-[#ff6b6b]/30 mb-3 inline-block">
                Directorial Leadership &amp; Production Infrastructure
              </span>
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05]">
                The Creative Engine <br />
                <em>Behind the Frames.</em>
              </h1>
            </div>
            <p className="max-w-md text-sm sm:text-base text-[#a9a59c] leading-relaxed font-light">
              More than 30 in-house professionals under one roof, backed by fully owned cinema cameras, drones, soundstages, and post-production suites.
            </p>
          </div>
        </div>
      </header>

      {/* =========================================================================
          INTERACTIVE TAB SWITCHER
      ========================================================================== */}
      <section className="section-pad bg-[#141310]">
        <div className="site-container">
          <div className="flex items-center gap-2 border-b border-white/15 pb-2 mb-10 overflow-x-auto scrollbar-none">
            {[
              { id: "people", label: "People & Leadership" },
              { id: "equipment", label: "Owned Equipment & Gear" },
              { id: "process", label: "6-Stage Process" },
              { id: "space", label: "Studio & Podcast Sets" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`studio-tab-btn cursor-pointer ${activeTab === tab.id ? "active" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: PEOPLE & LEADERSHIP */}
          {activeTab === "people" && (
            <div className="space-y-12">
              <div>
                <div className="mb-8">
                  <span className="text-[11px] uppercase tracking-widest text-[#ff6b6b] font-mono font-bold block mb-1">
                    Executive Stewardship
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    Founders &amp; Creative Directorate
                  </h3>
                  <p className="text-xs sm:text-sm text-[#a9a59c] max-w-2xl mt-1.5 leading-relaxed font-light">
                    Two decades of institutional guidance, governmental trust, and directorial storytelling across Telangana, Andhra Pradesh, and India.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {executiveLeaders.map((leader, idx) => (
                    <div
                      key={leader.id}
                      className="p-8 rounded-none bg-gradient-to-b from-[#1f1d19] to-[#171512] border border-white/15 hover:border-[#b82329]/50 transition-all flex flex-col justify-between shadow-xl"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 bg-[#b82329]/20 text-[#ff6b6b] border border-[#b82329]/40 font-bold">
                            {idx === 0 ? "01 • " + leader.titleBadge : "02 • " + leader.titleBadge}
                          </span>
                          <span className="text-xs font-mono text-white/40">
                            {idx === 0 ? "20+ YRS LEGACY" : "LEAD DIRECTOR"}
                          </span>
                        </div>

                        <div className="flex items-start gap-5 mb-6">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#b82329] to-[#701014] text-white flex items-center justify-center font-editorial text-2xl font-bold shrink-0 shadow-lg border border-white/20">
                            {leader.initials}
                          </div>
                          <div>
                            <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                              {leader.name}
                            </h4>
                            <div className="text-xs font-mono text-[#ff6b6b] mt-0.5 uppercase tracking-wide">
                              {leader.role}
                            </div>
                            <div className="text-[11px] font-mono text-white/50 mt-1">
                              {leader.credentials}
                            </div>
                          </div>
                        </div>

                        <blockquote className="p-4 bg-white/5 border-l-2 border-[#b82329] text-xs sm:text-sm italic text-[#d4cfc4] mb-6 leading-relaxed">
                          "{leader.quote}"
                        </blockquote>

                        <p className="text-xs sm:text-sm text-[#a9a59c] leading-relaxed mb-6 font-light">
                          {leader.description}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-white/10 space-y-2">
                        {leader.highlights.map((item, hIdx) => (
                          <div key={hIdx} className="flex items-start gap-2 text-xs text-[#ccc7bd]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#ff6b6b] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 4 Syndicate Departments */}
              <div className="pt-8 border-t border-white/10">
                <div className="mb-6">
                  <span className="text-[11px] uppercase tracking-widest text-[#ff6b6b] font-mono font-bold block mb-1">
                    Guild Structure
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                    4 Core Production Guilds
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {productionSyndicateDepartments.map((dept, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-white/5 border border-white/10 hover:border-[#b82329]/50 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-[10px] font-mono uppercase text-[#ff6b6b] font-bold">
                            GUILD 0{idx + 1}
                          </span>
                          <span className="text-[10px] font-mono text-white/50">
                            {dept.headcount}
                          </span>
                        </div>
                        <h4 className="font-editorial text-xl font-bold text-white mb-2 leading-snug">
                          {dept.title}
                        </h4>
                        <p className="text-xs text-[#a9a59c] leading-relaxed mb-4 font-light">
                          {dept.summary}
                        </p>
                      </div>

                      <div className="space-y-1.5 pt-3 border-t border-white/10">
                        {dept.capabilities.map((cap, cIdx) => (
                          <div key={cIdx} className="text-[11px] font-mono text-white/70 flex items-center gap-1.5">
                            <span className="w-1 h-1 rounded-full bg-[#ff6b6b]" />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: OWNED EQUIPMENT & GEAR */}
          {activeTab === "equipment" && (
            <div className="space-y-8">
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-widest text-[#ff6b6b] font-mono font-bold block mb-1">
                  100% In-House Ownership
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                  Technical Arsenal &amp; Camera Rigs
                </h3>
                <p className="text-xs sm:text-sm text-[#a9a59c] max-w-2xl mt-1.5 leading-relaxed font-light">
                  We own our cinema equipment outright — eliminating third-party rental delays and guaranteeing broadcast compliance.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {equipmentInventory.map((category, idx) => (
                  <div key={idx} className="p-6 bg-white/5 border border-white/10">
                    <h4 className="font-editorial text-xl font-bold text-[#ff6b6b] mb-4 pb-2 border-b border-white/10 flex items-center justify-between">
                      <span>{category.category}</span>
                      <span className="text-xs font-mono text-white/50">{category.items.length} Units</span>
                    </h4>
                    <div className="space-y-3">
                      {category.items.map((item, iIdx) => (
                        <div key={iIdx} className="text-xs border-b border-white/5 pb-2 last:border-0">
                          <div className="font-bold text-white">{item.name}</div>
                          <div className="text-[11px] text-[#a9a59c] font-light mt-0.5">{item.spec}</div>
                          <div className="text-[10px] font-mono text-white/40 mt-0.5">Use: {item.useCase}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: 6-STAGE PROCESS */}
          {activeTab === "process" && (
            <div className="space-y-8">
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-widest text-[#ff6b6b] font-mono font-bold block mb-1">
                  Execution Methodology
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                  Our 6-Stage Production Lifecycle
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productionProcessSteps.map((step, idx) => (
                  <div key={idx} className="p-6 bg-white/5 border border-white/10 flex flex-col justify-between">
                    <div>
                      <div className="font-mono text-xs font-bold text-[#ff6b6b] mb-2">STAGE 0{idx + 1}</div>
                      <h4 className="font-editorial text-xl font-bold text-white mb-2">{step.phase}</h4>
                      <p className="text-xs text-[#a9a59c] leading-relaxed mb-4 font-light">{step.detail}</p>
                    </div>
                    <div className="text-[10px] font-mono text-[#ff6b6b] bg-[#b82329]/15 px-3 py-1 border border-[#b82329]/30">
                      Deliverable: {step.deliverable}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: STUDIO & PODCAST SETS */}
          {activeTab === "space" && (
            <div className="space-y-8">
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-widest text-[#ff6b6b] font-mono font-bold block mb-1">
                  Facilities
                </span>
                <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                  Studio Soundstages &amp; Podcast Lounge
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-white/5 border border-white/10">
                  <h4 className="font-editorial text-2xl font-bold text-white mb-2">Velvet Talk Show &amp; Podcast Lounge</h4>
                  <p className="text-xs sm:text-sm text-[#a9a59c] leading-relaxed font-light mb-4">
                    Acoustically isolated studio set with multi-camera Sony FX6 setup, Shure broadcast mics, and soft ambient studio lighting for leadership interviews.
                  </p>
                  <div className="text-xs font-mono text-[#ff6b6b]">Hyderabad &amp; Guntur Facilities</div>
                </div>

                <div className="p-8 bg-white/5 border border-white/10">
                  <h4 className="font-editorial text-2xl font-bold text-white mb-2">Virtual Production &amp; Chroma Stage</h4>
                  <p className="text-xs sm:text-sm text-[#a9a59c] leading-relaxed font-light mb-4">
                    High-end green screen cyclorama with live camera tracking and real-time AI background projection for commercials and digital avatar broadcasts.
                  </p>
                  <div className="text-xs font-mono text-[#ff6b6b]">4K HDR Real-Time Pipeline</div>
                </div>
              </div>
            </div>
          )}

          {/* FIELD IMPACT OPERATIONAL MOSAIC */}
          <div className="mt-20 pt-12 border-t border-white/10">
            <div className="mb-8">
              <span className="text-[11px] uppercase tracking-widest text-[#ff6b6b] font-mono font-bold block mb-1">
                Real-World Ground Execution
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white">
                When Responsibility Was Entrusted to Us
              </h3>
              <p className="text-xs sm:text-sm text-[#a9a59c] max-w-2xl mt-1.5 leading-relaxed font-light">
                Hundreds of citizen and artisan interactions filmed on location across Telangana and Andhra Pradesh for SERP, Stree Nidhi, and government welfare programs.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {groundFilmingPhotos.map((photo, idx) => (
                <div
                  key={idx}
                  onClick={() =>
                    onOpenLightbox({
                      src: photo.src,
                      title: photo.title,
                      subtitle: photo.caption,
                    })
                  }
                  className="group relative aspect-[4/3] bg-white/5 border border-white/10 overflow-hidden cursor-pointer"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <div className="text-xs font-bold font-editorial leading-snug">{photo.title}</div>
                    <div className="text-[10px] text-white/70 line-clamp-1 mt-0.5">{photo.caption}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 p-8 bg-gradient-to-r from-[#1c1916] to-[#141310] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <div>
              <h4 className="font-editorial text-2xl font-bold mb-1">
                Book Studio Soundstage or Directorial Team
              </h4>
              <p className="text-xs sm:text-sm text-[#ccc7bd] font-light">
                Available for corporate productions, TV commercial shoots, and executive interview series.
              </p>
            </div>
            <button
              onClick={() => onOpenQuoteModal("Studio & Crew Booking")}
              className="btn-primary text-xs shrink-0 cursor-pointer"
            >
              Check Availability
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
