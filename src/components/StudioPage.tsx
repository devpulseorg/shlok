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

  Sliders,

  ZoomIn,

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

    <div className="min-h-screen bg-[#f7f5f0] text-[#141310] font-sans selection:bg-[#b82329] selection:text-white">

      {/* =========================================================================

          TOP PAGE HEADER & BREADCRUMBS (WARM PAPER EDITORIAL THEME)

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

              30+ Specialists • In-House Cinema Gear &amp; Virtual Stages

            </div>

          </div>



          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">

            <div>

              <span className="section-badge text-[#b82329] mb-3 inline-block">

                Directorial Leadership &amp; Production Infrastructure

              </span>

              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">

                Behind Every Film, <br />

                <em>A Disciplined Syndicate.</em>

              </h1>

            </div>

            <p className="max-w-md text-sm sm:text-base text-[#5d5951] leading-relaxed font-light">

              Thirty seasoned craftspeople, researchers, cinematographers, and colourists operating from our production bases in Hyderabad and Guntur.

            </p>

          </div>

        </div>

      </header>



      {/* =========================================================================

          SUB-NAVIGATION TABS

      ========================================================================== */}

      <section className="border-b border-[#ded8cb] bg-[#ede8df]/60 sticky top-20 z-40 backdrop-blur-md">

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 flex overflow-x-auto scrollbar-none py-3 gap-2">

          {[

            { id: "people", label: "01. Leadership & Guilds" },

            { id: "equipment", label: "02. Cinema Inventory" },

            { id: "process", label: "03. Production Roadmap" },

            { id: "space", label: "04. Soundstages & Lounge" },

          ].map((tab) => (

            <button

              key={tab.id}

              onClick={() => setActiveTab(tab.id as any)}

              className={`sub-tab-pill ${activeTab === tab.id ? "active" : ""}`}

            >

              {tab.label}

            </button>

          ))}

        </div>

      </section>



      {/* =========================================================================

          MAIN TAB CONTENT

      ========================================================================== */}

      <div className="section-pad bg-[#f7f5f0]">

        <div className="site-container">

          {/* TAB 1: LEADERSHIP & GUILDS */}

          {activeTab === "people" && (

            <div className="space-y-16 animate-in fade-in duration-300">

              {/* Executive Leadership */}

              <div>

                <div className="max-w-xl mb-8">

                  <span className="section-badge text-[#b82329] mb-2 inline-block">Vision &amp; Governance</span>

                  <h3 className="font-editorial text-2xl sm:text-4xl font-bold">Executive Leadership</h3>

                  <p className="text-xs sm:text-sm text-[#5d5951] font-light mt-2">

                    Directors steering state cultural archives, commercial campaigns, and institutional publications.

                  </p>

                </div>



                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                  {executiveLeaders.map((leader, idx) => (

                    <article

                      key={idx}

                      className="bg-white p-8 sm:p-10 border border-[#ded8cb] shadow-sm hover:border-[#b82329] transition-all duration-300 flex flex-col justify-between"

                    >

                      <div>

                        <div className="flex items-center gap-5 mb-6">

                          <div className="w-16 h-16 rounded-full bg-[#141310] text-white flex items-center justify-center font-editorial text-2xl font-bold shrink-0 shadow-md">

                            {leader.name.charAt(0)}

                          </div>

                          <div>

                            <span className="font-mono text-[10px] uppercase text-[#b82329] font-bold block mb-1">

                              {leader.role}

                            </span>

                            <h4 className="font-editorial text-2xl sm:text-3xl font-bold text-[#141310]">

                              {leader.name}

                            </h4>

                            <div className="text-[11px] font-mono text-[#747169] mt-0.5">

                              {leader.experience} Experience • {leader.focus}

                            </div>

                          </div>

                        </div>



                        <p className="text-xs sm:text-sm text-[#5d5951] leading-relaxed font-light mb-6">

                          {leader.bio}

                        </p>

                      </div>



                      <div className="pt-4 border-t border-[#ded8cb]/80 flex items-center justify-between">

                        <span className="text-[11px] font-mono text-[#747169]">

                          Portfolio: <span className="font-bold text-[#141310]">{leader.credits}</span>

                        </span>

                        <button

                          onClick={() => onOpenQuoteModal(`Brief with ${leader.name}`)}

                          className="text-xs font-mono font-bold text-[#b82329] hover:underline cursor-pointer"

                        >

                          Schedule Brief →

                        </button>

                      </div>

                    </article>

                  ))}

                </div>

              </div>



              {/* 4 Production Guilds */}

              <div className="pt-12 border-t border-[#ded8cb]">

                <div className="max-w-xl mb-8">

                  <span className="section-badge text-[#b82329] mb-2 inline-block">Production Syndicate</span>

                  <h3 className="font-editorial text-2xl sm:text-4xl font-bold">Specialized Guilds</h3>

                  <p className="text-xs sm:text-sm text-[#5d5951] font-light mt-2">

                    Four synchronized departments managing research, field capture, studio broadcast, and archival master grading.

                  </p>

                </div>



                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                  {productionSyndicateDepartments.map((dept, idx) => (

                    <div

                      key={idx}

                      className="bg-white p-6 border border-[#ded8cb] hover:border-[#b82329] shadow-sm transition-all"

                    >

                      <div className="w-10 h-10 rounded-full bg-[#f2efe9] text-[#b82329] flex items-center justify-center font-mono text-xs font-bold mb-4">

                        0{idx + 1}

                      </div>

                      <h4 className="font-editorial text-xl font-bold text-[#141310] mb-2 leading-snug">

                        {dept.title}

                      </h4>

                      <p className="text-xs text-[#5d5951] font-light leading-relaxed mb-4">

                        {dept.description}

                      </p>

                      <div className="pt-3 border-t border-[#ded8cb]/60 space-y-1.5">

                        {dept.capabilities.map((c, cIdx) => (

                          <div key={cIdx} className="text-[11px] font-mono text-[#747169] flex items-center gap-1.5">

                            <span className="w-1.5 h-1.5 rounded-full bg-[#b82329]" />

                            <span>{c}</span>

                          </div>

                        ))}

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          )}



          {/* TAB 2: EQUIPMENT INVENTORY */}

          {activeTab === "equipment" && (

            <div className="space-y-12 animate-in fade-in duration-300">

              <div className="max-w-xl">

                <span className="section-badge text-[#b82329] mb-2 inline-block">Technical Specifications</span>

                <h3 className="font-editorial text-2xl sm:text-4xl font-bold">In-House Cinema Gear</h3>

                <p className="text-xs sm:text-sm text-[#5d5951] font-light mt-2">

                  We own and maintain complete camera packages, anamorphic glass, cinema drones, and studio multi-cam sets.

                </p>

              </div>



              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {equipmentInventory.map((category, idx) => (

                  <div key={idx} className="bg-white p-8 border border-[#ded8cb] shadow-sm">

                    <div className="flex items-center justify-between pb-4 border-b border-[#ded8cb] mb-6">

                      <h4 className="font-editorial text-2xl font-bold text-[#141310]">{category.category}</h4>

                      <span className="text-xs font-mono text-[#747169] bg-[#f7f5f0] px-2.5 py-1 border border-[#ded8cb]">

                        {category.items.length} Units

                      </span>

                    </div>



                    <div className="space-y-4">

                      {category.items.map((item, itemIdx) => (

                        <div

                          key={itemIdx}

                          className="p-4 bg-[#fcfbfa] border border-[#ded8cb]/70 hover:border-[#b82329] transition-colors"

                        >

                          <div className="font-bold text-[#141310] text-sm">{item.name}</div>

                          <div className="text-[11px] font-mono text-[#747169] mt-1">Use: {item.useCase}</div>

                          <div className="text-xs text-[#5d5951] font-light mt-1.5">{item.specs}</div>

                        </div>

                      ))}

                    </div>

                  </div>

                ))}

              </div>

            </div>

          )}



          {/* TAB 3: PRODUCTION ROADMAP */}

          {activeTab === "process" && (

            <div className="space-y-12 animate-in fade-in duration-300">

              <div className="max-w-xl">

                <span className="section-badge text-[#b82329] mb-2 inline-block">Methodology</span>

                <h3 className="font-editorial text-2xl sm:text-4xl font-bold">6-Stage Production Roadmap</h3>

                <p className="text-xs sm:text-sm text-[#5d5951] font-light mt-2">

                  Rigorous, institutional pipeline from ethnographic field research to worldwide broadcast deliveries.

                </p>

              </div>



              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {productionProcessSteps.map((step, idx) => (

                  <div key={idx} className="bg-white p-8 border border-[#ded8cb] shadow-sm flex flex-col justify-between">

                    <div>

                      <div className="flex items-center justify-between mb-4">

                        <span className="w-8 h-8 rounded-full bg-[#f2efe9] text-[#b82329] flex items-center justify-center font-mono text-xs font-bold">

                          0{idx + 1}

                        </span>

                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#747169]">

                          {step.duration}

                        </span>

                      </div>

                      <h4 className="font-editorial text-xl font-bold text-[#141310] mb-2">{step.phase}</h4>

                      <p className="text-xs sm:text-sm text-[#5d5951] font-light leading-relaxed mb-6">

                        {step.description}

                      </p>

                    </div>

                    <div className="pt-4 border-t border-[#ded8cb]/60">

                      <div className="text-[10px] font-mono uppercase text-[#b82329] font-bold mb-1">Deliverables:</div>

                      <div className="text-xs text-[#141310] font-mono">{step.deliverables}</div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          )}



          {/* TAB 4: SOUNDSTAGES & PODCAST LOUNGE */}

          {activeTab === "space" && (

            <div className="space-y-12 animate-in fade-in duration-300">

              <div className="max-w-xl">

                <span className="section-badge text-[#b82329] mb-2 inline-block">Infrastructure</span>

                <h3 className="font-editorial text-2xl sm:text-4xl font-bold">Soundstages &amp; Podcast Lounge</h3>

                <p className="text-xs sm:text-sm text-[#5d5951] font-light mt-2">

                  Acoustically tuned, broadcast-ready spaces in Hyderabad and Guntur for interviews, podcasts, and virtual productions.

                </p>

              </div>



              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                <div className="bg-white p-8 sm:p-10 border border-[#ded8cb] shadow-sm">

                  <h4 className="font-editorial text-2xl font-bold mb-3 text-[#141310]">Hyderabad Broadcast Soundstage</h4>

                  <p className="text-xs sm:text-sm text-[#5d5951] font-light leading-relaxed mb-6">

                    Fully sound-isolated 2,400 sq.ft. facility in the Jubilee Hills / Madhapur creative corridor. Equipped with motorized overhead lighting grids, infinity cyclorama, and green screen capabilities.

                  </p>

                  <ul className="space-y-2.5 text-xs font-mono text-[#5d5951] mb-6">

                    <li className="flex items-center gap-2">

                      <CheckCircle2 className="w-4 h-4 text-[#b82329]" />

                      <span>NC-25 Acoustic Rating (Studio Silence)</span>

                    </li>

                    <li className="flex items-center gap-2">

                      <CheckCircle2 className="w-4 h-4 text-[#b82329]" />

                      <span>3-Camera 4K Live Broadcast Switching</span>

                    </li>

                    <li className="flex items-center gap-2">

                      <CheckCircle2 className="w-4 h-4 text-[#b82329]" />

                      <span>Direct Gigabit Fiber Uplink for Live Streaming</span>

                    </li>

                  </ul>

                  <button

                    onClick={() => onOpenQuoteModal("Hyderabad Soundstage Booking")}

                    className="btn-primary text-xs w-full sm:w-auto"

                  >

                    Inquire Stage Availability

                  </button>

                </div>



                <div className="bg-white p-8 sm:p-10 border border-[#ded8cb] shadow-sm">

                  <h4 className="font-editorial text-2xl font-bold mb-3 text-[#141310]">The Founder Podcast Suite</h4>

                  <p className="text-xs sm:text-sm text-[#5d5951] font-light leading-relaxed mb-6">

                    Intimate, warm wood-paneled lounge configured for executive interviews, author discussions, and multi-mic video podcasts.

                  </p>

                  <ul className="space-y-2.5 text-xs font-mono text-[#5d5951] mb-6">

                    <li className="flex items-center gap-2">

                      <CheckCircle2 className="w-4 h-4 text-[#b82329]" />

                      <span>Shure SM7B Microphones &amp; Cloudlifters</span>

                    </li>

                    <li className="flex items-center gap-2">

                      <CheckCircle2 className="w-4 h-4 text-[#b82329]" />

                      <span>Sony FX6 Multi-Angle Cinema Video Coverage</span>

                    </li>

                    <li className="flex items-center gap-2">

                      <CheckCircle2 className="w-4 h-4 text-[#b82329]" />

                      <span>Same-Day Audio Stems &amp; Social Reel Snippets</span>

                    </li>

                  </ul>

                  <button

                    onClick={() => onOpenQuoteModal("Podcast Suite Booking")}

                    className="btn-outline text-xs w-full sm:w-auto"

                  >

                    Book Podcast Lounge

                  </button>

                </div>

              </div>

            </div>

          )}



          {/* =====================================================================

              GROUND FILMING & BEHIND-THE-SCENES FIELD CHRONICLES

          ====================================================================== */}

          <div className="mt-20 pt-16 border-t border-[#ded8cb]">

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">

              <div>

                <span className="section-badge text-[#b82329] mb-2 inline-block">

                  Live From The Field

                </span>

                <h3 className="font-editorial text-3xl sm:text-4xl font-bold">

                  Field Expeditions &amp; Production Chronicles

                </h3>

              </div>

              <p className="text-xs sm:text-sm text-[#5d5951] font-light max-w-md">

                Unvarnished frames of our crews at work across bus stands, artisan clusters, village panchayats, and multi-cam auditoriums.

              </p>

            </div>



            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

              {groundFilmingPhotos.map((photo, idx) => (

                <article

                  key={idx}

                  onClick={() => onOpenLightbox({ src: photo.src, title: photo.title, subtitle: photo.caption })}

                  className="bg-white border border-[#ded8cb] hover:border-[#b82329] shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group cursor-pointer"

                >

                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">

                    <img

                      src={photo.src}

                      alt={photo.title}

                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"

                    />

                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">

                      <div className="w-10 h-10 rounded-full bg-white/90 text-[#141310] flex items-center justify-center shadow-lg">

                        <ZoomIn className="w-5 h-5 text-[#b82329]" />

                      </div>

                    </div>

                  </div>

                  <div className="p-4">

                    <h5 className="font-editorial text-base font-bold text-[#141310] mb-1 group-hover:text-[#b82329] transition-colors">

                      {photo.title}

                    </h5>

                    <p className="text-[11px] text-[#5d5951] font-light leading-relaxed line-clamp-2">

                      {photo.caption}

                    </p>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </div>

      </div>

    </div>

  )

}

