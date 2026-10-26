import React, { useState, useEffect } from "react"

import {

  Play,

  ArrowRight,

  Phone,

  Mail,

  MapPin,

  CheckCircle2,

  Sliders,

  Camera,

  Video,

  Mic,

  Tv,

  Layers,

  Sparkles,

  Users,

  Compass,

  X,

  ExternalLink,

  ChevronRight,

  Menu,

  BookOpen,

  Award,

  Volume2,

  ZoomIn,

  MessageSquare,

  Film,

  Heart,

  Globe,

  Radio,

  Clock,

  Send,

  MessageCircle,

} from "lucide-react"



import {

  servicesData,

  businessInfo,

  type ServiceItem,

} from "./data/servicesData"

import {

  portfolioItems,

  craftClustersList,

  type PortfolioItem,

} from "./data/portfolioData"

import {

  studioTeam,

  equipmentInventory,

  productionProcessSteps,

  executiveLeaders,

  productionSyndicateDepartments,

} from "./data/studioData"

import { photographyItems, type PhotographyItem } from "./data/photographyData"



import { PhotographicWorkPage } from "./components/PhotographicWorkPage"

import { WorkPage } from "./components/WorkPage"

import { ServicesPage } from "./components/ServicesPage"

import { PublicationsPage } from "./components/PublicationsPage"

import { StudioPage } from "./components/StudioPage"

import { ContactPage } from "./components/ContactPage"

import { HeroCinematicAnimation } from "./components/HeroCinematicAnimation"



type AppView =

  | "home"

  | "work"

  | "services"

  | "photography"

  | "publications"

  | "studio"

  | "contact"



export default function App() {

  const [currentView, setCurrentView] = useState<AppView>("home")
  const [isEntranceFinished, setIsEntranceFinished] = useState(false)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  const [quotePreselectedService, setQuotePreselectedService] = useState<string>("")

  const [videoModalOpen, setVideoModalOpen] = useState(false)

  const [activeVideoTitle, setActiveVideoTitle] = useState("")

  const [lightboxOpen, setLightboxOpen] = useState(false)

  const [activeLightboxImage, setActiveLightboxImage] = useState<{

    src: string

    title: string

    subtitle?: string

  } | null>(null)



  // Listen to hash changes for multi-page routing

  useEffect(() => {

    const syncHash = () => {
      const hash = window.location.hash.toLowerCase()
      if (hash === "#/our-photographic-work" || hash === "#/photography") {
        setCurrentView("photography")
        setIsEntranceFinished(true)
      } else if (hash === "#/work" || hash === "#/portfolio") {
        setCurrentView("work")
        setIsEntranceFinished(true)
      } else if (hash === "#/services" || hash === "#/capabilities") {
        setCurrentView("services")
        setIsEntranceFinished(true)
      } else if (hash === "#/publications" || hash === "#/books") {
        setCurrentView("publications")
        setIsEntranceFinished(true)
      } else if (hash === "#/studio" || hash === "#/about") {
        setCurrentView("studio")
        setIsEntranceFinished(true)
      } else if (hash === "#/contact" || hash === "#/inquire") {
        setCurrentView("contact")
        setIsEntranceFinished(true)
      } else {
        setCurrentView("home")
      }
      window.scrollTo({ top: 0, behavior: "smooth" })
    }

    syncHash()
    window.addEventListener("hashchange", syncHash)

    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsEntranceFinished(true)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("hashchange", syncHash)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])



  const navigateTo = (view: AppView) => {

    setCurrentView(view)

    setMobileMenuOpen(false)

    if (view === "home") window.location.hash = "#/"

    else if (view === "photography") window.location.hash = "#/our-photographic-work"

    else window.location.hash = `#/${view}`

    window.scrollTo({ top: 0, behavior: "smooth" })

  }



  const handleOpenQuoteModal = (serviceName?: string) => {

    setQuotePreselectedService(serviceName || "")

    setQuoteModalOpen(true)

  }



  const handleOpenVideo = (title: string) => {

    setActiveVideoTitle(title)

    setVideoModalOpen(true)

  }



  const handleOpenLightbox = (data: { src: string; title: string; subtitle?: string }) => {

    setActiveLightboxImage(data)

    setLightboxOpen(true)

  }



  return (

    <div className="min-h-screen bg-[#f7f5f0] text-[#141310] font-sans selection:bg-[#b82329] selection:text-white">

      {/* =========================================================================

          NAVBAR: OFFICIAL COMPANY LOGO + VIRALOOP PILL CONTRAST NAVIGATION

      ========================================================================== */}

      <header className={`sticky top-0 z-50 w-full border-b border-[#ded8cb]/80 bg-[#f7f5f0]/90 backdrop-blur-xl transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${currentView === "home" && !isEntranceFinished ? "opacity-0 -translate-y-full pointer-events-none hidden" : "opacity-100 translate-y-0 pointer-events-auto"}`}>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 h-20 flex items-center justify-between">

          {/* Official Company Logo */}

          <a

            href="#hero"

            onClick={(e) => {

              e.preventDefault()

              navigateTo("home")

            }}

            className="logo-wrapper focus:outline-none flex items-center cursor-pointer group"

            aria-label="Shlokh Entertainments Home"

          >

            <img

              src="/images/shlokh_logo_transparent.png"

              alt="Shlokh Entertainments"

              className="logo-img"

              style={{ height: "40px", width: "auto" }}

            />

          </a>



          {/* Centered Pill Desktop Navigation with Crisp High-Contrast States */}

          <nav

            aria-label="Main Navigation"

            className="hidden md:flex nav-pill-bar"

          >

            <button

              onClick={() => navigateTo("home")}

              className={`nav-pill-item ${currentView === "home" ? "active" : ""}`}

            >

              Home

            </button>

            <button

              onClick={() => navigateTo("work")}

              className={`nav-pill-item ${currentView === "work" ? "active" : ""}`}

            >

              Work

            </button>

            <button

              onClick={() => navigateTo("services")}

              className={`nav-pill-item ${currentView === "services" ? "active" : ""}`}

            >

              Disciplines

            </button>

            <button

              onClick={() => navigateTo("photography")}

              className={`nav-pill-item ${currentView === "photography" ? "active" : ""}`}

            >

              Archive

            </button>

            <button

              onClick={() => navigateTo("publications")}

              className={`nav-pill-item ${currentView === "publications" ? "active" : ""}`}

            >

              Books

            </button>

            <button

              onClick={() => navigateTo("studio")}

              className={`nav-pill-item ${currentView === "studio" ? "active" : ""}`}

            >

              Studio

            </button>

            <button

              onClick={() => navigateTo("contact")}

              className={`nav-pill-item ${currentView === "contact" ? "active" : ""}`}

            >

              Contact

            </button>

          </nav>



          {/* Right Action Button */}

          <div className="hidden lg:flex items-center gap-3">

            <button

              onClick={() => navigateTo("contact")}

              className="btn-header-cta"

            >

              <span>Start a Project</span>

              <ArrowRight className="w-3.5 h-3.5" />

            </button>

          </div>



          {/* Mobile Menu Trigger */}

          <button

            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}

            className="md:hidden p-2 text-[#141310] hover:text-[#b82329] transition-colors"

            aria-label="Toggle Navigation"

          >

            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}

          </button>

        </div>



        {/* Mobile Dropdown Menu */}

        {mobileMenuOpen && (

          <div className="md:hidden border-b border-[#ded8cb] bg-[#f7f5f0] px-6 py-6 shadow-xl animate-in slide-in-from-top-4 duration-200">

            <div className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider">

              <button

                onClick={() => navigateTo("home")}

                className={`py-2 text-left ${currentView === "home" ? "text-[#b82329] font-bold" : "text-[#5d5951]"}`}

              >

                01. Home

              </button>

              <button

                onClick={() => navigateTo("work")}

                className={`py-2 text-left ${currentView === "work" ? "text-[#b82329] font-bold" : "text-[#5d5951]"}`}

              >

                02. Work &amp; Films

              </button>

              <button

                onClick={() => navigateTo("services")}

                className={`py-2 text-left ${currentView === "services" ? "text-[#b82329] font-bold" : "text-[#5d5951]"}`}

              >

                03. Disciplines &amp; Capabilities

              </button>

              <button

                onClick={() => navigateTo("photography")}

                className={`py-2 text-left ${currentView === "photography" ? "text-[#b82329] font-bold" : "text-[#5d5951]"}`}

              >

                04. Visual Archive

              </button>

              <button

                onClick={() => navigateTo("publications")}

                className={`py-2 text-left ${currentView === "publications" ? "text-[#b82329] font-bold" : "text-[#5d5951]"}`}

              >

                05. Publications &amp; Books

              </button>

              <button

                onClick={() => navigateTo("studio")}

                className={`py-2 text-left ${currentView === "studio" ? "text-[#b82329] font-bold" : "text-[#5d5951]"}`}

              >

                06. Studio &amp; Leadership

              </button>

              <button

                onClick={() => navigateTo("contact")}

                className={`py-2 text-left ${currentView === "contact" ? "text-[#b82329] font-bold" : "text-[#5d5951]"}`}

              >

                07. Contact &amp; Inquiry

              </button>



              <div className="pt-4 border-t border-[#ded8cb] flex flex-col gap-2">

                <button

                  onClick={() => navigateTo("contact")}

                  className="w-full py-3 bg-[#b82329] text-white font-bold text-center uppercase tracking-wider"

                >

                  Start a Project Brief

                </button>

                <a

                  href="https://wa.me/919505555277?text=Hi%20Shlokh%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20project."

                  target="_blank"

                  rel="noopener noreferrer"

                  className="w-full py-3 bg-[#25D366] text-white font-bold text-center uppercase tracking-wider flex items-center justify-center gap-2"

                >

                  <span>WhatsApp (+91 95055 55277)</span>

                </a>

              </div>

            </div>

          </div>

        )}

      </header>



      {/* =========================================================================

          VIEW SWITCHER: SUB-PAGES VS HOMEPAGE

      ========================================================================== */}

      {currentView === "photography" ? (

        <PhotographicWorkPage

          onBackToHome={() => navigateTo("home")}

          onOpenQuoteModal={handleOpenQuoteModal}

        />

      ) : currentView === "work" ? (

        <WorkPage

          onBackToHome={() => navigateTo("home")}

          onOpenQuoteModal={handleOpenQuoteModal}

          onOpenVideoModal={handleOpenVideo}

          onOpenLightbox={handleOpenLightbox}

        />

      ) : currentView === "services" ? (

        <ServicesPage

          onBackToHome={() => navigateTo("home")}

          onOpenQuoteModal={handleOpenQuoteModal}

        />

      ) : currentView === "publications" ? (

        <PublicationsPage

          onBackToHome={() => navigateTo("home")}

          onOpenQuoteModal={handleOpenQuoteModal}

          onOpenLightbox={handleOpenLightbox}

        />

      ) : currentView === "studio" ? (

        <StudioPage

          onBackToHome={() => navigateTo("home")}

          onOpenQuoteModal={handleOpenQuoteModal}

          onOpenLightbox={handleOpenLightbox}

        />

      ) : currentView === "contact" ? (

        <ContactPage onBackToHome={() => navigateTo("home")} />

      ) : (

        /* =======================================================================

            ACTUAL HOMEPAGE FLOW WITH ANIMATIONS "JUST LIKE BEFORE"

        ======================================================================== */

        <main className="w-full overflow-x-hidden">

          {/* -------------------------------------------------------------------

              ACT 1: CINEMATIC HERO WITH 35MM FILMSTRIP, TIME-CODE & ANIMATIONS

          -------------------------------------------------------------------- */}

          <section id="hero" className="hero-section bg-[#f7f5f0] relative overflow-hidden">

            <div className="hero-bg-overlay" />

            <div className="hero-horizon-line" aria-hidden="true" />



            <div className="site-container relative z-10 w-full">

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-4 lg:gap-x-12 items-center pt-4 sm:pt-6 pb-8 sm:py-12 lg:py-16">

                {/* 1. Header & Title (Row 1 on Mobile, Left Column Row 1 on Desktop) */}

                <div className="order-1 lg:col-span-7 max-w-2xl">

                  <div className="hero-eyebrow-entrance inline-flex items-center gap-2 text-[11px] sm:text-sm uppercase tracking-[0.16em] text-[#b82329] font-condensed font-bold mb-2 sm:mb-4">

                    <span className="w-2 h-2 rounded-full bg-[#b82329] animate-pulse" />

                    <span>CAPTURING STORIES • CREATING IMPACT</span>

                    <span className="w-8 h-px bg-[#b82329]/30 hidden sm:inline-block" />

                  </div>



                  <h1 className="mb-2 sm:mb-5">

                    <span className="block font-condensed font-bold text-4xl sm:text-6xl md:text-8xl lg:text-[7.25rem] text-[#141310] leading-[0.88] tracking-tight uppercase">

                      <span className="hero-text-line block">

                        <span className="hero-text-line-inner-1">STORIES</span>

                      </span>

                      <span className="hero-text-line block my-1 sm:my-1.5">

                        <span className="hero-text-line-inner-2">DESERVE</span>

                      </span>

                      <span className="hero-text-line block">

                        <span className="hero-text-line-inner-3">

                          TO BE <span className="text-[#b82329]">SEEN.</span>

                        </span>

                      </span>

                    </span>

                  </h1>

                </div>



                {/* 2. Compact Cinema Monitor Card with Authentic 35mm Filmstrip Spool Animation */}

                <div className="order-2 lg:col-span-5 lg:row-span-2 relative my-2 sm:my-5 lg:my-0">

                  <HeroCinematicAnimation

                    onExplore={() => navigateTo("photography")}

                  />



                  {/* Floating Aesthetic Accent Badge */}

                  <div className="hidden xl:flex absolute -top-5 -left-6 z-20 bg-white/95 backdrop-blur-sm p-3 shadow-xl border border-[#ded8cb] items-center gap-2.5 max-w-[215px] rounded-none">

                    <Award className="w-6 h-6 text-[#b82329] shrink-0" />

                    <div className="text-[10px] text-[#141310] leading-snug">

                      <span className="font-bold block">State Coffee Table Books</span>

                      Launched by Hon'ble CM Sri Nara Chandrababu Naidu

                    </div>

                  </div>

                </div>



                {/* 3. Description, Actions & Trust Badges (Left Column Row 2 on Desktop) */}

                <div className="order-3 lg:col-span-7 max-w-2xl">

                  <p className="hero-desc-entrance text-xs sm:text-base text-[#5d5951] leading-relaxed font-normal mb-4 sm:mb-8 max-w-xl">

                    From Chief Ministerial coffee-table publications to 50+ cinema-grade documentary and commercial films. Preserving India's living cultural fabric with uncompromised visual artistry.

                  </p>



                  <div className="hero-actions-entrance flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-4 mb-5 sm:mb-9">

                    <button

                      onClick={() => navigateTo("contact")}

                      className="btn-primary group justify-center py-2.5 px-4 sm:py-3.5 sm:px-6 text-xs sm:text-sm font-bold shadow-lg shadow-[#b82329]/25 cursor-pointer rounded-none w-full sm:w-auto"

                    >

                      <span>Start a Project</span>

                      <ArrowRight className="w-3.5 h-3.5 ml-1" />

                    </button>



                    <div className="flex items-center gap-2.5 sm:gap-4 w-full sm:w-auto">

                      <button

                        onClick={() => navigateTo("photography")}

                        className="btn-outline flex-1 sm:flex-initial justify-center py-2.5 px-3 sm:py-3.5 sm:px-5 text-xs sm:text-sm bg-white/95 hover:bg-[#b82329] hover:text-white text-[#b82329] border-[#b82329]/60 font-bold shadow-sm transition-all cursor-pointer rounded-none whitespace-nowrap"

                      >

                        <Camera className="w-3.5 h-3.5 shrink-0" />

                        <span>Visual Archive</span>

                        <span className="px-1.5 py-0.5 rounded-none text-[9px] bg-[#b82329]/15 group-hover:bg-white/20 font-mono hidden xs:inline">

                          40+ Photos

                        </span>

                      </button>



                      <button

                        onClick={() => navigateTo("services")}

                        className="btn-outline flex-1 sm:flex-initial justify-center py-2.5 px-3 sm:py-3.5 sm:px-5 text-xs sm:text-sm bg-white/90 hover:bg-white text-[#141310] border-[#ded8cb] rounded-none whitespace-nowrap cursor-pointer"

                      >

                        <span>14 Disciplines</span>

                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />

                      </button>

                    </div>

                  </div>



                  {/* Location & Heritage Badges */}

                  <div className="hero-badges-entrance pt-3 sm:pt-4 border-t border-[#ded8cb] flex items-center gap-x-3 sm:gap-x-5 text-[10px] sm:text-xs uppercase tracking-wider text-[#747169] overflow-x-auto scrollbar-none">

                    <div className="flex items-center gap-1.5 shrink-0">

                      <MapPin className="w-3.5 h-3.5 text-[#b82329] shrink-0" />

                      <span className="text-[#3b3832] font-medium">Hyderabad &amp; Guntur</span>

                    </div>

                    <span className="text-[#c2bcb0] shrink-0">•</span>

                    <div className="flex items-center gap-1.5 shrink-0">

                      <Award className="w-3.5 h-3.5 text-[#b82329] shrink-0" />

                      <span className="text-[#3b3832] font-medium">20+ Years Craft</span>

                    </div>

                    <span className="text-[#c2bcb0] shrink-0">•</span>

                    <span className="text-[#141310] font-bold shrink-0">500+ Films</span>

                  </div>

                </div>

              </div>

            </div>

          </section>



          {/* =========================================================================

              LIVE ACCREDITATION MARQUEE TICKER (ANIMATED CONTINUOUS SLIDER)

          ========================================================================== */}

          <div

            className="overflow-hidden whitespace-nowrap border-y border-[#ded8cb] py-3 bg-[#ede8df] text-[#141310] text-[11px] sm:text-xs font-mono tracking-widest uppercase select-none"

            aria-label="Client & Partner Accreditations"

          >

            <div className="marquee-track flex items-center gap-10 inline-flex">

              {[

                "EMPANELLED WITH GOVT. OF ANDHRA PRADESH",

                "MINISTRY OF TEXTILES CRAFT CLUSTERS",

                "SERP & MEPMA STATEWIDE BENEFICIARY ARCHIVE",

                "500+ AD FILMS & DOCUMENTARIES",

                "AP TOURISM PANORAMA ARCHIVES",

                "24 MASTER PUBLICATION SPREADS",

                "AI VIDEO SYNTHESIS & VIRTUAL PRODUCTION",

                "HYDERABAD & GUNTUR CINEMA UNITS",

                "EMPANELLED WITH GOVT. OF ANDHRA PRADESH",

                "MINISTRY OF TEXTILES CRAFT CLUSTERS",

                "SERP & MEPMA STATEWIDE BENEFICIARY ARCHIVE",

                "500+ AD FILMS & DOCUMENTARIES",

              ].map((item, idx) => (

                <span key={idx} className="flex items-center gap-3">

                  <span className="w-2 h-2 rounded-full bg-[#b82329]" />

                  <span>{item}</span>

                </span>

              ))}

            </div>

          </div>



          {/* =========================================================================

              KEY STATS & TRUST STRIP (CRIMSON ACCENT)

          ========================================================================== */}

          <section

            className="bg-[#b82329] text-white border-b border-[#9e1c21]"

            aria-label="Company Metrics"

          >

            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-white/20">

                {businessInfo.stats.map((stat, idx) => (

                  <div

                    key={idx}

                    className="p-6 lg:p-8 flex flex-col justify-center text-center sm:text-left"

                  >

                    <div className="text-3xl sm:text-4xl font-editorial font-bold tracking-tight leading-none mb-2">

                      {stat.value}

                    </div>

                    <div className="text-[10px] sm:text-xs uppercase tracking-wider font-medium text-white/85 leading-snug font-mono">

                      {stat.label}

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </section>



          {/* -------------------------------------------------------------------

              ACT 2: WHAT WE BRING TO LIFE (SERVICES TEASER - 6 CLEAN CARDS)

          -------------------------------------------------------------------- */}

          <section className="py-16 sm:py-20 lg:py-24 border-b border-[#ded8cb] bg-[#f7f5f0]">

            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">

                <div>

                  <span className="font-mono text-xs uppercase tracking-widest text-[#b82329] block mb-2 font-bold">

                    OUR DISCIPLINES

                  </span>

                  <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight">

                    WHAT WE BRING TO LIFE.

                  </h2>

                </div>

                <button

                  onClick={() => navigateTo("services")}

                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#141310] hover:text-[#b82329] font-bold group cursor-pointer transition-colors"

                >

                  <span>Explore all 14 disciplines</span>

                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#b82329]" />

                </button>

              </div>



              {/* 6 Grid Cards */}

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {[

                  {

                    icon: Film,

                    num: "01",

                    title: "Documentaries & Heritage Films",

                    desc: "Cinema-grade cultural, social impact, and oral history documentation filmed with ethnographic rigor.",

                    tag: "4K Master • Arri & RED",

                  },

                  {

                    icon: BookOpen,

                    num: "02",

                    title: "Coffee Table Books & Publications",

                    desc: "Comprehensive state publications research, design, archival photography, and editorial printing.",

                    tag: "Official CM Releases",

                  },

                  {

                    icon: Tv,

                    num: "03",

                    title: "Commercials & Brand Ad Films",

                    desc: "Narrative commercial storytelling, high-CTR digital advertisements, and corporate legacy showcases.",

                    tag: "Multi-Format Cuts",

                  },

                  {

                    icon: Camera,

                    num: "04",

                    title: "Fine-Art & Archival Photography",

                    desc: "Museum-grade portraiture, living loom captures, and tactile documentation of rare indigenous crafts.",

                    tag: "High-Resolution Archival",

                  },

                  {

                    icon: Mic,

                    num: "05",

                    title: "Soundstages & Podcast Lounges",

                    desc: "Acoustically treated soundstages, multi-cam broadcast sets, and dedicated founder podcast suites.",

                    tag: "Hyderabad & Guntur",

                  },

                  {

                    icon: Compass,

                    num: "06",

                    title: "Field Expeditions & Research",

                    desc: "Pan-India rural production capability navigating remote tribal settlements and deep artisan belts.",

                    tag: "100% Field Readiness",

                  },

                ].map((item, idx) => {

                  const Icon = item.icon

                  return (

                    <div

                      key={idx}

                      onClick={() => navigateTo("services")}

                      className="bg-white p-8 border border-[#ded8cb] hover:border-[#b82329] transition-all duration-300 shadow-sm hover:shadow-lg flex flex-col justify-between group cursor-pointer"

                    >

                      <div>

                        <div className="flex items-center justify-between mb-6">

                          <div className="w-10 h-10 bg-[#f2efe9] group-hover:bg-[#fdf2f2] text-[#141310] group-hover:text-[#b82329] flex items-center justify-center transition-colors">

                            <Icon className="w-5 h-5" />

                          </div>

                          <span className="font-mono text-xs text-[#9d998f] font-bold">

                            {item.num}

                          </span>

                        </div>

                        <h3 className="font-editorial text-xl font-bold mb-2 group-hover:text-[#b82329] transition-colors">

                          {item.title}

                        </h3>

                        <p className="text-xs sm:text-sm text-[#5d5951] font-light leading-relaxed mb-6">

                          {item.desc}

                        </p>

                      </div>

                      <div className="pt-4 border-t border-[#ded8cb]/60 flex items-center justify-between">

                        <span className="text-[10px] font-mono text-[#747169] bg-[#f7f5f0] px-2.5 py-1 border border-[#ded8cb]">

                          {item.tag}

                        </span>

                        <span className="text-xs font-mono font-bold text-[#b82329] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">

                          Details →

                        </span>

                      </div>

                    </div>

                  )

                })}

              </div>

            </div>

          </section>



          {/* -------------------------------------------------------------------

              ACT 3: STORIES THAT DEFINE LEGACIES (SELECTED WORK - 3 SPOTLIGHTS)

          -------------------------------------------------------------------- */}

          <section className="py-16 sm:py-20 lg:py-24 border-b border-[#ded8cb] bg-gradient-to-r from-[#ede8df]/40 via-white/50 to-[#ede8df]/30">

            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">

              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">

                <div>

                  <span className="font-mono text-xs uppercase tracking-widest text-[#b82329] block mb-2 font-bold">

                    SELECTED WORK

                  </span>

                  <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight">

                    STORIES THAT DEFINE LEGACIES.

                  </h2>

                </div>

                <button

                  onClick={() => navigateTo("work")}

                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#141310] hover:text-[#b82329] font-bold group cursor-pointer transition-colors"

                >

                  <span>View all 50 projects</span>

                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-[#b82329]" />

                </button>

              </div>



              {/* 3 Spotlight Case Study Cards with Metric Pills */}

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Case 1: Weaves of Andhra Pradesh */}

                <div

                  onClick={() => navigateTo("publications")}

                  className="bg-white border border-[#ded8cb] hover:border-[#b82329] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden flex flex-col justify-between group cursor-pointer"

                >

                  <div>

                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">

                      <img

                        src="/images/portfolio_photos/p10_cm_launching_weaves_book.jpg"

                        alt="Weaves of Andhra Pradesh CM Launch"

                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"

                      />

                      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 border border-white/10">

                        Official State Publication

                      </div>

                    </div>

                    <div className="p-6 sm:p-8">

                      <div className="text-[11px] font-mono text-[#b82329] font-bold uppercase tracking-wider mb-2">

                        Handlooms • Cultural Heritage

                      </div>

                      <h3 className="font-editorial text-2xl font-bold mb-3 text-[#141310] group-hover:text-[#b82329] transition-colors">

                        Weaves of Andhra Pradesh

                      </h3>

                      <p className="text-xs sm:text-sm text-[#5d5951] font-light leading-relaxed mb-6">

                        Historic documentation covering 10 major weaving traditions, launched officially by the Hon'ble Chief Minister Sri Nara Chandrababu Naidu.

                      </p>

                    </div>

                  </div>



                  {/* 3 Metric Pills */}

                  <div className="px-6 pb-6 pt-4 border-t border-[#ded8cb]/60 bg-[#fcfbfa] grid grid-cols-3 gap-2 text-center">

                    <div>

                      <div className="font-editorial text-lg font-bold text-[#141310]">10</div>

                      <div className="text-[9px] font-mono uppercase text-[#747169]">Clusters</div>

                    </div>

                    <div>

                      <div className="font-editorial text-lg font-bold text-[#b82329]">50,000+</div>

                      <div className="text-[9px] font-mono uppercase text-[#747169]">Copies</div>

                    </div>

                    <div>

                      <div className="font-editorial text-lg font-bold text-[#141310]">CM Launch</div>

                      <div className="text-[9px] font-mono uppercase text-[#747169]">Ceremony</div>

                    </div>

                  </div>

                </div>



                {/* Case 2: Culture in Motion */}

                <div

                  onClick={() => navigateTo("work")}

                  className="bg-white border border-[#ded8cb] hover:border-[#b82329] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden flex flex-col justify-between group cursor-pointer"

                >

                  <div>

                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">

                      <img

                        src="/images/mockup_assets/featured_culture_in_motion.jpg"

                        alt="Culture in Motion"

                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"

                      />

                      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 border border-white/10">

                        Cinematic Master Film

                      </div>

                    </div>

                    <div className="p-6 sm:p-8">

                      <div className="text-[11px] font-mono text-[#b82329] font-bold uppercase tracking-wider mb-2">

                        Documentary • 4K Cinema

                      </div>

                      <h3 className="font-editorial text-2xl font-bold mb-3 text-[#141310] group-hover:text-[#b82329] transition-colors">

                        Culture in Motion: Living Bharat

                      </h3>

                      <p className="text-xs sm:text-sm text-[#5d5951] font-light leading-relaxed mb-6">

                        An intimate visual journey capturing temples, artisan lineages, spiritual rituals, and festive gatherings across southern India.

                      </p>

                    </div>

                  </div>



                  {/* 3 Metric Pills */}

                  <div className="px-6 pb-6 pt-4 border-t border-[#ded8cb]/60 bg-[#fcfbfa] grid grid-cols-3 gap-2 text-center">

                    <div>

                      <div className="font-editorial text-lg font-bold text-[#141310]">4K RAW</div>

                      <div className="text-[9px] font-mono uppercase text-[#747169]">Arri Alexa</div>

                    </div>

                    <div>

                      <div className="font-editorial text-lg font-bold text-[#b82329]">Original</div>

                      <div className="text-[9px] font-mono uppercase text-[#747169]">Score</div>

                    </div>

                    <div>

                      <div className="font-editorial text-lg font-bold text-[#141310]">Broadcast</div>

                      <div className="text-[9px] font-mono uppercase text-[#747169]">Statewide</div>

                    </div>

                  </div>

                </div>



                {/* Case 3: Savara Tribal Art & MEPMA */}

                <div

                  onClick={() => navigateTo("publications")}

                  className="bg-white border border-[#ded8cb] hover:border-[#b82329] transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden flex flex-col justify-between group cursor-pointer"

                >

                  <div>

                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">

                      <img

                        src="/images/portfolio_photos/p10_savara_tribal_art_book.jpg"

                        alt="Savara Tribal Art Chronicle"

                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"

                      />

                      <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 border border-white/10">

                        Tribal Heritage &amp; Welfare

                      </div>

                    </div>

                    <div className="p-6 sm:p-8">

                      <div className="text-[11px] font-mono text-[#b82329] font-bold uppercase tracking-wider mb-2">

                        Ethnography • Wall Art Murals

                      </div>

                      <h3 className="font-editorial text-2xl font-bold mb-3 text-[#141310] group-hover:text-[#b82329] transition-colors">

                        Savara Tribal Art &amp; Women SHGs

                      </h3>

                      <p className="text-xs sm:text-sm text-[#5d5951] font-light leading-relaxed mb-6">

                        Extensive ground research in the Eastern Ghats documenting indigenous wall art rituals and women micro-entrepreneurs.

                      </p>

                    </div>

                  </div>



                  {/* 3 Metric Pills */}

                  <div className="px-6 pb-6 pt-4 border-t border-[#ded8cb]/60 bg-[#fcfbfa] grid grid-cols-3 gap-2 text-center">

                    <div>

                      <div className="font-editorial text-lg font-bold text-[#141310]">14</div>

                      <div className="text-[9px] font-mono uppercase text-[#747169]">Settlements</div>

                    </div>

                    <div>

                      <div className="font-editorial text-lg font-bold text-[#b82329]">24</div>

                      <div className="text-[9px] font-mono uppercase text-[#747169]">Artisans</div>

                    </div>

                    <div>

                      <div className="font-editorial text-lg font-bold text-[#141310]">National</div>

                      <div className="text-[9px] font-mono uppercase text-[#747169]">Archive</div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </section>



          {/* -------------------------------------------------------------------

              ACT 4: DUAL HERITAGE GATEWAYS (VISUAL ARCHIVE & PUBLICATIONS)

          -------------------------------------------------------------------- */}

          <section className="py-16 sm:py-20 lg:py-24 border-b border-[#ded8cb] bg-[#f7f5f0]">

            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">

              <div className="text-center max-w-2xl mx-auto mb-12">

                <span className="font-mono text-xs uppercase tracking-widest text-[#b82329] block mb-2 font-bold">

                  NATIONAL HERITAGE ARCHIVES

                </span>

                <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight">

                  EXPLORE THE VAULTS.

                </h2>

                <p className="text-xs sm:text-sm text-[#5d5951] font-light mt-3">

                  Two dedicated repositories honoring India's master weavers, tribal artists, and state-level documentation.

                </p>

              </div>



              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                {/* Gateway A: The Visual Archive */}

                <div

                  onClick={() => navigateTo("photography")}

                  className="relative bg-[#141310] text-white p-8 sm:p-12 border border-[#ded8cb] overflow-hidden group cursor-pointer shadow-lg flex flex-col justify-between"

                >

                  <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-700">

                    <img

                      src="/images/portfolio_photos/p17_handloom_weaver_portrait.jpg"

                      alt="Visual Archive"

                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"

                    />

                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#141310] via-[#141310]/80 to-transparent"></div>



                  <div className="relative z-10 mb-8">

                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff8085] bg-black/60 px-3 py-1 border border-white/10 inline-block mb-4">

                      40+ High-Resolution Plates

                    </span>

                    <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-white mb-3">

                      The Visual Archive

                    </h3>

                    <p className="text-xs sm:text-sm text-[#ccc7bd] font-light leading-relaxed max-w-md">

                      Fine-art portraiture of master weavers at the loom, bell-metal artisans, and rural textile heritage documented without artificial enhancements.

                    </p>

                  </div>



                  <div className="relative z-10 pt-4 border-t border-white/20 flex items-center justify-between">

                    <span className="font-mono text-xs uppercase tracking-wider text-[#ded8cb] font-bold">

                      Enter Archive Gallery

                    </span>

                    <span className="w-10 h-10 rounded-full bg-[#b82329] text-white flex items-center justify-center group-hover:translate-x-2 transition-transform">

                      <ArrowRight className="w-4 h-4" />

                    </span>

                  </div>

                </div>



                {/* Gateway B: Chief Ministerial Publications */}

                <div

                  onClick={() => navigateTo("publications")}

                  className="relative bg-[#141310] text-white p-8 sm:p-12 border border-[#ded8cb] overflow-hidden group cursor-pointer shadow-lg flex flex-col justify-between"

                >

                  <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-700">

                    <img

                      src="/images/portfolio_photos/p10_cm_launching_mepma_book.jpg"

                      alt="State Publications"

                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"

                    />

                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-[#141310] via-[#141310]/80 to-transparent"></div>



                  <div className="relative z-10 mb-8">

                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#ff8085] bg-black/60 px-3 py-1 border border-white/10 inline-block mb-4">

                      4 Hardbound Volumes • 10 Craft Clusters

                    </span>

                    <h3 className="font-editorial text-3xl sm:text-4xl font-bold text-white mb-3">

                      Chief Ministerial Books

                    </h3>

                    <p className="text-xs sm:text-sm text-[#ccc7bd] font-light leading-relaxed max-w-md">

                      Prestigious publications honoring handlooms, MEPMA women's cooperatives, and tribal arts, launched officially at state ceremonies.

                    </p>

                  </div>



                  <div className="relative z-10 pt-4 border-t border-white/20 flex items-center justify-between">

                    <span className="font-mono text-xs uppercase tracking-wider text-[#ded8cb] font-bold">

                      Explore Publications &amp; Chapters

                    </span>

                    <span className="w-10 h-10 rounded-full bg-[#b82329] text-white flex items-center justify-center group-hover:translate-x-2 transition-transform">

                      <ArrowRight className="w-4 h-4" />

                    </span>

                  </div>

                </div>

              </div>

            </div>

          </section>



          {/* -------------------------------------------------------------------

              ACT 5: HERITAGE, VISION & LEADERSHIP (STUDIO TEASER)

          -------------------------------------------------------------------- */}

          <section className="py-16 sm:py-20 lg:py-24 border-b border-[#ded8cb] bg-[#f2efe9]">

            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                <div className="lg:col-span-6 space-y-6">

                  <span className="font-mono text-xs uppercase tracking-widest text-[#b82329] block font-bold">

                    ABOUT SHLOKH

                  </span>

                  <h2 className="font-editorial text-3xl sm:text-5xl font-bold tracking-tight text-[#141310] leading-[1.1]">

                    HERITAGE. VISION. CRAFT.

                  </h2>

                  <p className="text-sm sm:text-base text-[#5d5951] font-light leading-relaxed">

                    Founded with an unyielding mandate to chronicle India's cultural tapestry, Shlokh bridges raw ethnographic field sensitivity with high-end commercial cinema infrastructure.

                  </p>

                  <p className="text-xs sm:text-sm text-[#5d5951] font-light leading-relaxed">

                    Operating dedicated soundstages in Hyderabad and Guntur, our syndicate deploys cinema-grade gear (Arri Alexa, Cooke glass, drones, and acoustic podcast suites) across the deepest artisan belts of the nation.

                  </p>



                  <div className="pt-2">

                    <button

                      onClick={() => navigateTo("studio")}

                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#141310] hover:bg-[#b82329] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"

                    >

                      <span>Meet the Studio &amp; Leadership</span>

                      <ArrowRight className="w-4 h-4" />

                    </button>

                  </div>

                </div>



                {/* Leadership Spotlight Cards */}

                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">

                  <div className="bg-white p-6 border border-[#ded8cb] shadow-sm">

                    <div className="w-14 h-14 bg-[#141310] text-white flex items-center justify-center font-editorial text-2xl font-bold mb-4">

                      S

                    </div>

                    <div className="font-mono text-[10px] uppercase text-[#b82329] font-bold mb-1">

                      FOUNDER &amp; MANAGING DIRECTOR

                    </div>

                    <h3 className="font-editorial text-xl font-bold mb-2">Shlokh</h3>

                    <p className="text-xs text-[#5d5951] font-light leading-relaxed">

                      Visionary director driving state-level cultural documentation, brand films, and national artisan expeditions.

                    </p>

                  </div>



                  <div className="bg-white p-6 border border-[#ded8cb] shadow-sm">

                    <div className="w-14 h-14 bg-[#b82329] text-white flex items-center justify-center font-editorial text-2xl font-bold mb-4">

                      SK

                    </div>

                    <div className="font-mono text-[10px] uppercase text-[#b82329] font-bold mb-1">

                      CREATIVE &amp; EDITORIAL DIRECTOR

                    </div>

                    <h3 className="font-editorial text-xl font-bold mb-2">Sasi Krishna</h3>

                    <p className="text-xs text-[#5d5951] font-light leading-relaxed">

                      Leading cinematic direction, research curation, and authoring Chief Ministerial coffee-table publications.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </section>



          {/* -------------------------------------------------------------------

              ACT 6: CONVERSION BANNER (LET'S CREATE SOMETHING TIMELESS)

          -------------------------------------------------------------------- */}

          <section className="py-16 sm:py-20 lg:py-24 bg-[#141310] text-white border-b border-[#ded8cb]">

            <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 text-center">

              <div className="max-w-3xl mx-auto">

                <span className="text-xs font-mono uppercase tracking-widest text-[#ff8085] bg-white/10 px-3.5 py-1.5 border border-white/20 inline-block mb-6">

                  START A PROJECT BRIEF

                </span>



                <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6">

                  LET'S CREATE <br />

                  <span className="italic font-normal text-[#ff6b6b]">SOMETHING TIMELESS.</span>

                </h2>



                <p className="text-sm sm:text-base text-[#ccc7bd] font-light leading-relaxed mb-8 max-w-xl mx-auto">

                  Ready to document your cultural heritage, launch a state-level publication, or produce a landmark film? Our directors review every brief within 24 hours.

                </p>



                {/* Dual CTAs (Viraloop Style) */}

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">

                  <button

                    onClick={() => navigateTo("contact")}

                    className="w-full sm:w-auto px-8 py-4 bg-[#b82329] hover:bg-[#9e1c21] text-white font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer"

                  >

                    <span>Start a Project Brief</span>

                    <ArrowRight className="w-4 h-4" />

                  </button>



                  <a

                    href="https://wa.me/919505555277?text=Hi%20Shlokh%20Studio%2C%20I%20would%20like%20to%20discuss%20a%20project."

                    target="_blank"

                    rel="noopener noreferrer"

                    className="w-full sm:w-auto px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-mono text-xs font-bold uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2 shadow-lg cursor-pointer"

                  >

                    <span>Chat on WhatsApp</span>

                    <ArrowRight className="w-4 h-4" />

                  </a>

                </div>



                {/* Trust Badges */}

                <div className="pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">

                  <div>

                    <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-1">

                      ★★★★★ Official Commendations

                    </div>

                    <div className="text-[11px] text-[#9d998f] font-light">

                      Launched by Hon'ble Chief Ministers

                    </div>

                  </div>

                  <div>

                    <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-1">

                      40+ State &amp; Brand Partners

                    </div>

                    <div className="text-[11px] text-[#9d998f] font-light">

                      Government, Corporate &amp; Cultural Bodies

                    </div>

                  </div>

                  <div>

                    <div className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-1">

                      24-Hour Scope Turnaround

                    </div>

                    <div className="text-[11px] text-[#9d998f] font-light">

                      Direct Executive Access &amp; Feasibility

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </section>

        </main>

      )}



      {/* =========================================================================

          EDITORIAL DARK FOOTER

      ========================================================================== */}

      <footer className="bg-[#0f0e0d] text-[#ded8cb] border-t border-white/10 pt-16 pb-12">

        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">

            {/* Brand Column with Light Header Logo */}

            <div className="lg:col-span-2 space-y-4">

              <img

                src="/images/shlokh_logo_light_header.png"

                alt="Shlokh Entertainments"

                className="h-9 w-auto max-w-[200px] object-contain block"

              />

              <p className="text-xs sm:text-sm text-[#9d998f] font-light max-w-sm leading-relaxed">

                National heritage documentary studio, state publication author, and cinema-grade commercial production house based in Hyderabad and Guntur.

              </p>

              <div className="pt-2 text-[11px] font-mono text-[#747169]">

                © {new Date().getFullYear()} Shlokh Entertainments &amp; Publications. All rights reserved.

              </div>

            </div>



            {/* Navigation Directory */}

            <div>

              <div className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">

                Directory

              </div>

              <ul className="space-y-2.5 text-xs font-mono uppercase tracking-wider text-[#9d998f]">

                <li>

                  <button onClick={() => navigateTo("home")} className="hover:text-white transition-colors cursor-pointer">

                    Home

                  </button>

                </li>

                <li>

                  <button onClick={() => navigateTo("work")} className="hover:text-white transition-colors cursor-pointer">

                    Work &amp; Films

                  </button>

                </li>

                <li>

                  <button onClick={() => navigateTo("services")} className="hover:text-white transition-colors cursor-pointer">

                    Disciplines

                  </button>

                </li>

                <li>

                  <button onClick={() => navigateTo("photography")} className="hover:text-white transition-colors cursor-pointer">

                    Visual Archive

                  </button>

                </li>

                <li>

                  <button onClick={() => navigateTo("publications")} className="hover:text-white transition-colors cursor-pointer">

                    State Books

                  </button>

                </li>

                <li>

                  <button onClick={() => navigateTo("studio")} className="hover:text-white transition-colors cursor-pointer">

                    Studio &amp; Guilds

                  </button>

                </li>

                <li>

                  <button onClick={() => navigateTo("contact")} className="hover:text-white transition-colors cursor-pointer">

                    Contact &amp; Quotes

                  </button>

                </li>

              </ul>

            </div>



            {/* Direct Connect */}

            <div>

              <div className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">

                Inquiries

              </div>

              <ul className="space-y-3 text-xs text-[#9d998f] font-light">

                <li>

                  <span className="font-mono text-[10px] uppercase text-[#747169] block">WhatsApp</span>

                  <a

                    href="https://wa.me/919505555277"

                    target="_blank"

                    rel="noopener noreferrer"

                    className="hover:text-white font-mono text-xs"

                  >

                    +91 95055 55277

                  </a>

                </li>

                <li>

                  <span className="font-mono text-[10px] uppercase text-[#747169] block">Telephone</span>

                  <a href="tel:+919666974593" className="hover:text-white font-mono text-xs">

                    +91 96669 74593

                  </a>

                </li>

                <li>

                  <span className="font-mono text-[10px] uppercase text-[#747169] block">Email</span>

                  <a href="mailto:shlokhentertainments@gmail.com" className="hover:text-white">

                    shlokhentertainments@gmail.com

                  </a>

                </li>

              </ul>

            </div>



            {/* Studio Coordinates */}

            <div>

              <div className="font-mono text-xs font-bold uppercase tracking-wider text-white mb-4">

                Coordinates

              </div>

              <div className="space-y-3 text-xs text-[#9d998f] font-light">

                <div>

                  <span className="font-mono text-[10px] uppercase text-[#b82329] font-bold block">

                    HYDERABAD STUDIO

                  </span>

                  <div>Jubilee Hills / Madhapur Hub, Telangana</div>

                </div>

                <div>

                  <span className="font-mono text-[10px] uppercase text-[#b82329] font-bold block">

                    GUNTUR OFFICE

                  </span>

                  <div>Heritage Corridor, Guntur, AP</div>

                </div>

              </div>

            </div>

          </div>



          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-[#747169] gap-4">

            <div>CINEMA • PUBLICATIONS • HERITAGE ARCHIVES</div>

            <div className="flex gap-4">

              <button onClick={() => navigateTo("contact")} className="hover:text-white cursor-pointer">

                Privacy Policy

              </button>

              <span>•</span>

              <button onClick={() => navigateTo("contact")} className="hover:text-white cursor-pointer">

                Terms of Engagement

              </button>

            </div>

          </div>

        </div>

      </footer>



      {/* =========================================================================

          VIDEO SHOWREEL MODAL

      ========================================================================== */}

      {videoModalOpen && (

        <div

          role="dialog"

          aria-modal="true"

          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"

          onClick={() => setVideoModalOpen(false)}

        >

          <div

            className="relative w-full max-w-4xl bg-black border border-white/20 overflow-hidden shadow-2xl"

            onClick={(e) => e.stopPropagation()}

          >

            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#141310]">

              <span className="text-xs font-mono uppercase tracking-widest text-[#ff8085] flex items-center gap-2">

                <Film className="w-4 h-4 text-[#b82329]" />

                {activeVideoTitle || "Cinematic Showcase"}

              </span>

              <button

                onClick={() => setVideoModalOpen(false)}

                className="text-[#ded8cb] hover:text-white p-1 cursor-pointer"

                aria-label="Close video"

              >

                <X className="w-5 h-5" />

              </button>

            </div>

            <div className="relative aspect-[16/9] bg-black">

              <video

                src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

                poster="/images/mockup_assets/featured_culture_in_motion.jpg"

                controls

                autoPlay

                className="w-full h-full object-contain"

              />

            </div>

          </div>

        </div>

      )}



      {/* =========================================================================

          LIGHTBOX MODAL

      ========================================================================== */}

      {lightboxOpen && activeLightboxImage && (

        <div

          role="dialog"

          aria-modal="true"

          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"

          onClick={() => setLightboxOpen(false)}

        >

          <div

            className="relative max-w-5xl max-h-[90vh] flex flex-col items-center"

            onClick={(e) => e.stopPropagation()}

          >

            <button

              onClick={() => setLightboxOpen(false)}

              className="absolute -top-10 right-0 text-white hover:text-[#ff8085] flex items-center gap-1 font-mono text-xs uppercase cursor-pointer"

            >

              <span>Close</span>

              <X className="w-5 h-5" />

            </button>

            <img

              src={activeLightboxImage.src}

              alt={activeLightboxImage.title}

              className="max-h-[80vh] w-auto object-contain border border-white/20 shadow-2xl"

            />

            <div className="mt-4 text-center">

              <h4 className="font-editorial text-lg text-white font-bold">{activeLightboxImage.title}</h4>

              {activeLightboxImage.subtitle && (

                <p className="text-xs font-mono text-[#ded8cb] mt-1">{activeLightboxImage.subtitle}</p>

              )}

            </div>

          </div>

        </div>

      )}



      {/* =========================================================================

          QUOTATION / PROJECT BRIEF MODAL

      ========================================================================== */}

      {quoteModalOpen && (

        <div

          role="dialog"

          aria-modal="true"

          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200"

          onClick={() => setQuoteModalOpen(false)}

        >

          <div

            className="relative w-full max-w-lg bg-[#f7f5f0] border border-[#ded8cb] p-8 shadow-2xl"

            onClick={(e) => e.stopPropagation()}

          >

            <div className="flex items-center justify-between pb-4 border-b border-[#ded8cb] mb-6">

              <div>

                <span className="text-[10px] font-mono uppercase tracking-widest text-[#b82329] font-bold">

                  PROJECT INQUIRY

                </span>

                <h3 className="font-editorial text-2xl font-bold text-[#141310]">

                  Request Quotation

                </h3>

              </div>

              <button

                onClick={() => setQuoteModalOpen(false)}

                className="text-[#747169] hover:text-[#141310] cursor-pointer"

                aria-label="Close modal"

              >

                <X className="w-5 h-5" />

              </button>

            </div>



            <form

              onSubmit={(e) => {

                e.preventDefault()

                alert("Thank you! Our director will revert with a quotation within 24 hours.")

                setQuoteModalOpen(false)

              }}

              className="space-y-4 font-sans text-xs"

            >

              <div>

                <label className="block font-mono uppercase tracking-wider text-[#747169] font-bold mb-1">

                  Selected Discipline

                </label>

                <input

                  type="text"

                  defaultValue={quotePreselectedService || "Cinematic & Heritage Documentary"}

                  className="w-full px-3 py-2 bg-white border border-[#ded8cb] text-sm text-[#141310] outline-none"

                />

              </div>

              <div>

                <label className="block font-mono uppercase tracking-wider text-[#747169] font-bold mb-1">

                  Your Full Name *

                </label>

                <input

                  type="text"

                  required

                  placeholder="e.g. Sasi Vardhan"

                  className="w-full px-3 py-2 bg-white border border-[#ded8cb] text-sm outline-none focus:border-[#b82329]"

                />

              </div>

              <div>

                <label className="block font-mono uppercase tracking-wider text-[#747169] font-bold mb-1">

                  Organization / Brand Name

                </label>

                <input

                  type="text"

                  placeholder="e.g. Ministry of Textiles / AP Tourism"

                  className="w-full px-3 py-2 bg-white border border-[#ded8cb] text-sm outline-none focus:border-[#b82329]"

                />

              </div>

              <div className="grid grid-cols-2 gap-3">

                <div>

                  <label className="block font-mono uppercase tracking-wider text-[#747169] font-bold mb-1">

                    Phone *

                  </label>

                  <input

                    type="tel"

                    required

                    placeholder="+91 98765 43210"

                    className="w-full px-3 py-2 bg-white border border-[#ded8cb] text-sm outline-none focus:border-[#b82329]"

                  />

                </div>

                <div>

                  <label className="block font-mono uppercase tracking-wider text-[#747169] font-bold mb-1">

                    Email *

                  </label>

                  <input

                    type="email"

                    required

                    placeholder="contact@brand.com"

                    className="w-full px-3 py-2 bg-white border border-[#ded8cb] text-sm outline-none focus:border-[#b82329]"

                  />

                </div>

              </div>



              <div>

                <label className="block font-mono uppercase tracking-wider text-[#747169] font-bold mb-1">

                  Project Scope &amp; Target Locations

                </label>

                <textarea

                  rows={3}

                  placeholder="Tell us about the project duration, target deliverable format, or field shoot locations..."

                  className="w-full px-3 py-2 bg-white border border-[#ded8cb] text-sm outline-none focus:border-[#b82329] resize-none"

                ></textarea>

              </div>



              <button

                type="submit"

                className="w-full py-3.5 bg-[#b82329] hover:bg-[#9e1c21] text-white font-mono uppercase tracking-wider font-bold text-xs transition-colors shadow-md mt-2 cursor-pointer"

              >

                Submit for 24-Hour Review

              </button>

            </form>

          </div>

        </div>

      )}

    </div>

  )

}

