import React, { useState, useEffect, useMemo } from "react"
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
  ChevronDown,
  Monitor,
  Film,
  Award,
  BookOpen,
  Briefcase,
  Globe,
  Radio,
  FileText,
  Volume2,
  ZoomIn,
  MessageSquare,
  Sun,
  Moon,
  Eye,
  Heart,
  MessageCircle,
  Maximize2,
  RotateCcw,
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
import {
  recentSocialPosts,
  socialProfile,
  type SocialPost,
} from "./data/socialFeedData"
import { PhotographicWorkPage } from "./components/PhotographicWorkPage"
import { HeroCinematicAnimation } from "./components/HeroCinematicAnimation"

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackTitle?: string
  fallbackCategory?: string
  fallbackIcon?: "book" | "film" | "camera"
}

function SmartImage({
  src,
  alt,
  className = "",
  fallbackTitle,
  fallbackCategory,
  fallbackIcon = "film",
  loading = "lazy",
  ...props
}: SmartImageProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setHasError(false)
    setIsLoaded(false)
  }, [src])

  if (hasError || !src) {
    return (
      <div
        className={`w-full h-full min-h-[140px] flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#faf8f5] to-[#eeeae0] text-center select-none border border-[#ded8cb]/60 ${className}`}
        role="img"
        aria-label={alt || fallbackTitle || "Shlokh Archival Record"}
      >
        <div className="w-11 h-11 rounded-full bg-white/95 border border-[#ded8cb] shadow-sm flex items-center justify-center text-[#b82329] mb-2.5 shrink-0">
          {fallbackIcon === "book" ? (
            <BookOpen className="w-5 h-5 text-[#b82329]/80" />
          ) : fallbackIcon === "camera" ? (
            <Camera className="w-5 h-5 text-[#b82329]/80" />
          ) : (
            <Film className="w-5 h-5 text-[#b82329]/80" />
          )}
        </div>
        {fallbackCategory && (
          <span className="text-[10px] uppercase tracking-widest font-mono font-bold text-[#b82329] mb-1">
            {fallbackCategory}
          </span>
        )}
        <span className="font-serif font-bold text-xs sm:text-sm text-[#141310] max-w-[90%] leading-snug line-clamp-2">
          {fallbackTitle || alt || "Shlokh Production Archive"}
        </span>
        <span className="text-[10px] text-[#747169] mt-1 font-light tracking-wide">
          Official Visual Record
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      onLoad={() => setIsLoaded(true)}
      onError={() => setHasError(true)}
      className={`${className} ${
        isLoaded ? "opacity-100" : "opacity-90"
      } transition-opacity duration-300`}
      {...props}
    />
  )
}

export default function App() {
  // Navigation & UI state
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Modals state
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [videoModalTitle, setVideoModalTitle] = useState(
    "Shlokh Entertainments — Visual Showreel",
  )
  const [lightboxImage, setLightboxImage] = useState<{
    src: string
    title: string
    subtitle?: string
  } | null>(null)
  const [selectedServiceModal, setSelectedServiceModal] =
    useState<ServiceItem | null>(null)
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  // Filters state
  const [selectedServiceCategory, setSelectedServiceCategory] =
    useState<string>("All")
  const [selectedPortfolioCategory, setSelectedPortfolioCategory] =
    useState<string>("All")
  const [activeStudioTab, setActiveStudioTab] =
    useState<"people" | "equipment" | "process" | "space">("people")

  // Photography showcase state
  const [darkroomMode, setDarkroomMode] = useState(false)
  const [selectedPhotoCategory, setSelectedPhotoCategory] =
    useState<string>("All")
  const [photoLightbox, setPhotoLightbox] = useState<PhotographyItem | null>(
    null,
  )

  // Dedicated View Navigation ('home' | 'photography')
  const [currentView, setCurrentView] = useState<"home" | "photography">("home")
  const [isEntranceFinished, setIsEntranceFinished] = useState(false)

  // Typography Suite theme switcher (Modern | Playfair | Syne | Cormorant)
  const [fontTheme, setFontTheme] =
    useState<"modern" | "playfair" | "syne" | "cormorant">("modern")

  // Navigation handlers
  const navigateToPhotography = () => {
    setCurrentView("photography")
    window.location.hash = "#/our-photographic-work"
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navigateToHome = () => {
    setCurrentView("home")
    window.location.hash = ""
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // URL Hash Sync for dedicated page
  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash
      if (hash === "#/our-photographic-work" || hash === "#/photography") {
        setCurrentView("photography")
        window.scrollTo(0, 0)
      } else if (
        hash === "" ||
        hash === "#hero" ||
        hash.startsWith("#services")
      ) {
        setCurrentView("home")
      }
    }
    syncHash()
    window.addEventListener("hashchange", syncHash)
    return () => window.removeEventListener("hashchange", syncHash)
  }, [])

  // Featured film slider state
  const [featuredFilmIndex, setFeaturedFilmIndex] = useState(0)

  // Contact form state
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "AI Video Production and AI Ad Filmmaking",
    budget: "Flexible / To Be Discussed",
    message: "",
  })

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setVideoModalOpen(false)
        setLightboxImage(null)
        setPhotoLightbox(null)
        setSelectedServiceModal(null)
        setQuoteModalOpen(false)
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  // Filtered services
  const filteredServices = useMemo(() => {
    if (selectedServiceCategory === "All") return servicesData
    return servicesData.filter((s) => s.category === selectedServiceCategory)
  }, [selectedServiceCategory])

  // Filtered portfolio
  const filteredPortfolio = useMemo(() => {
    if (selectedPortfolioCategory === "All") return portfolioItems
    return portfolioItems.filter(
      (p) => p.category === selectedPortfolioCategory,
    )
  }, [selectedPortfolioCategory])

  // Handle contact form submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "AI Video Production and AI Ad Filmmaking",
        budget: "Flexible / To Be Discussed",
        message: "",
      })
      setQuoteModalOpen(false)
    }, 4000)
  }

  const featuredFilms = [
    {
      title: "Culture in Motion",
      category: "Documentary Film & Heritage",
      tagline:
        "A visual journey through people, traditions and timeless places.",
      description:
        "Documenting the rich cultural fabric, living temples, artisan communities, and spiritual gatherings of India.",
      image: "/images/mockup_assets/featured_culture_in_motion.jpg",
      duration: "45 mins • 4K Cinema",
    },
    {
      title: "Beneficiary Voices: Real Impact",
      category: "Government & Public Welfare",
      tagline:
        "Capturing authentic grassroots voices across 100+ statewide campaigns.",
      description:
        "Direct field documentation of rural families, women self-help groups, farmers, and students transformed by welfare initiatives.",
      image: "/images/portfolio_photos/p08_field_temple_shoot.jpg",
      duration: "100+ Mandals Covered",
    },
    {
      title: "10 Craft Clusters of India",
      category: "National Heritage & Ministry of Textiles",
      tagline: "Preserving heritage and empowering artisans across 6 states.",
      description:
        "Partnering with the Government of India Handicrafts Department to document Pochampally, Kutch, Kondapalli, Channapatna, Sanganer, and more.",
      image: "/images/portfolio_photos/p10_weaves_andhra_book.jpg",
      duration: "National Archive Series",
    },
  ]

  const serviceCategories = [
    "All",
    "AI & Emerging",
    "Corporate & Commercial",
    "Government & Public",
    "Studio & Audio",
    "Post-Production",
  ]
  const portfolioCategories = [
    "All",
    "Publications & Heritage",
    "Government & Public",
    "Studio & Podcasts",
    "Corporate & Commercial",
  ]
  const photoCategories = [
    "All",
    "Heritage & Artisans",
    "Government & Public",
    "Cinema Stills & BTS",
    "Executive Portraits",
    "Industrial & Landscape",
  ]

  const filteredPhotos = useMemo(() => {
    if (selectedPhotoCategory === "All") return photographyItems
    return photographyItems.filter(
      (item) => item.category === selectedPhotoCategory,
    )
  }, [selectedPhotoCategory])

  return (
    <div
      className={`min-h-screen bg-[#f7f5f0] text-[#141310] flex flex-col selection:bg-[#b82329] selection:text-white theme-${fontTheme}`}
    >
      {/* =========================================================================
          SITE HEADER & NAVIGATION (ONLY ON HOME PAGE, SMOOTHLY REVEALS AFTER ENTRANCE)
      ========================================================================== */}
      {currentView === "home" && (
        <header
          className={`site-header ${isScrolled ? "scrolled" : "transparent"} transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isEntranceFinished
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-full pointer-events-none"
          }`}
          role="banner"
        >
          <div className="site-container h-full">
            <div className="header-inner">
              {/* Logo */}
              <a
                href="#hero"
                onClick={(e) => {
                  if (currentView !== "home") {
                    e.preventDefault()
                    navigateToHome()
                  }
                }}
                className="logo-wrapper focus:outline-none"
                aria-label="Shlokh Entertainments Home"
              >
                <img
                  src="/images/shlokh_logo_transparent.png"
                  alt="Shlokh Entertainments"
                  className="logo-img"
                />
              </a>

              {/* Desktop Navigation */}
              <nav
                className="hidden lg:flex items-center gap-5 xl:gap-6"
                aria-label="Main Navigation"
              >
                <a
                  href="#services"
                  onClick={() => {
                    if (currentView !== "home") navigateToHome()
                  }}
                  className="nav-link"
                >
                  Capabilities
                </a>

                {/* CLEAN, TASTEFUL 'OUR WORK' LINK (NO HUGE OVERLAPPING PILL) */}
                <button
                  onClick={navigateToPhotography}
                  className="nav-link flex items-center gap-1.5 text-[#b82329] font-bold hover:text-[#9e1c21] cursor-pointer"
                >
                  <Camera className="w-3.5 h-3.5" />
                  <span>Our Work</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b82329]" />
                </button>

                <a
                  href="#publications"
                  onClick={() => {
                    if (currentView !== "home") navigateToHome()
                  }}
                  className="nav-link"
                >
                  Publications
                </a>
                <a
                  href="#impact"
                  onClick={() => {
                    if (currentView !== "home") navigateToHome()
                  }}
                  className="nav-link"
                >
                  Field Impact
                </a>
                <a
                  href="#studio"
                  onClick={() => {
                    if (currentView !== "home") navigateToHome()
                  }}
                  className="nav-link"
                >
                  Leadership & Studio
                </a>
                <a
                  href="#portfolio"
                  onClick={() => {
                    if (currentView !== "home") navigateToHome()
                  }}
                  className="nav-link"
                >
                  Selected Work
                </a>
                <a
                  href="#social-feed"
                  onClick={() => {
                    if (currentView !== "home") navigateToHome()
                  }}
                  className="nav-link"
                >
                  Live BTS
                </a>
                <a
                  href="#contact"
                  onClick={() => {
                    if (currentView !== "home") navigateToHome()
                  }}
                  className="nav-link"
                >
                  Contact
                </a>
              </nav>

              {/* Header Right Actions */}
              <div className="hidden sm:flex items-center gap-4">
                <a
                  href="tel:+919505555277"
                  className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#5d5951] hover:text-[#141310] transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-[#b82329]" />
                  +91 95055 55277
                </a>
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="btn-primary text-xs"
                >
                  Start a Project
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-[#141310] hover:text-[#b82329] transition-colors focus:outline-none"
                aria-label="Toggle Menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>
        </header>
      )}

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
          <img
            src="/images/shlokh_logo_light_header.png"
            alt="Shlokh Logo"
            className="h-8 w-auto max-w-[180px] object-contain block"
            style={{ height: "32px", width: "auto" }}
          />
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="text-white p-2"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {/* Prominent Mobile Button for Dedicated Photographic Page */}
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              navigateToPhotography()
            }}
            className="w-full text-left p-3.5 rounded-xl bg-gradient-to-r from-[#b82329] to-[#9e1c21] text-white font-bold flex items-center justify-between shadow-lg mb-2"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <Camera className="w-4 h-4 text-white" />
              </div>
              <div>
                <div className="text-sm font-bold">Our Photographic Work</div>
                <div className="text-[10px] text-white/80 font-mono">
                  Dedicated Archival Showcase • 24 Spreads
                </div>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-white/80" />
          </button>

          {[
            { label: "Capabilities (14 Services)", href: "#services" },
            { label: "Featured Cinema Film", href: "#featured-film" },
            { label: "Heritage Publications", href: "#publications" },
            { label: "Field Impact Stories", href: "#impact" },
            { label: "Leadership & The Studio", href: "#studio" },
            { label: "Selected Work Archive", href: "#portfolio" },
            { label: "Live BTS & Social Feed", href: "#social-feed" },
            { label: "Contact & Quotes", href: "#contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => {
                setMobileMenuOpen(false)
                if (currentView !== "home") navigateToHome()
              }}
              className="mobile-nav-link text-lg py-2.5 border-b border-white/10 text-white hover:text-[#b82329] transition-colors flex justify-between items-center"
            >
              <span>{item.label}</span>
              <ChevronRight className="w-4 h-4 text-white/40" />
            </a>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4 text-sm text-[#b8b3a7]">
          <a
            href="tel:+919505555277"
            className="flex items-center gap-3 text-white"
          >
            <Phone className="w-4 h-4 text-[#b82329]" />
            +91 95055 55277 / +91 96669 74593
          </a>
          <a
            href="mailto:shlokhentertainments@gmail.com"
            className="flex items-center gap-3 text-white"
          >
            <Mail className="w-4 h-4 text-[#b82329]" />
            shlokhentertainments@gmail.com
          </a>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#b82329] shrink-0 mt-0.5" />
            <span>Hyderabad (Telangana) & Guntur (Andhra Pradesh)</span>
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              setQuoteModalOpen(true)
            }}
            className="btn-primary w-full mt-4"
          >
            Start a Project
          </button>
        </div>
      </div>

      {currentView === "photography" ? (
        <PhotographicWorkPage
          onBackToHome={navigateToHome}
          onOpenQuoteModal={(serviceName) => {
            if (serviceName) {
              setFormData((prev) => ({ ...prev, service: serviceName }))
            }
            setQuoteModalOpen(true)
          }}
        />
      ) : (
        <main className="flex-1">
          {/* =========================================================================
            HERO SECTION
        ========================================================================== */}
          <section id="hero" className="hero-section bg-[#f7f5f0]">
            <div className="hero-bg-overlay" />
            <div className="hero-horizon-line" aria-hidden="true" />

            <div className="site-container relative z-10 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-4 lg:gap-x-12 items-center pt-2 sm:pt-4 pb-6 sm:py-12 lg:py-16">
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

                {/* 2. Compact Cinema Monitor Card (Row 2 on Mobile -> Crisp, Centered & Space-Efficient; Right Column on Desktop) */}
                <div className="order-2 lg:col-span-5 lg:row-span-2 relative my-2 sm:my-5 lg:my-0">
                  <HeroCinematicAnimation
                    onExplore={navigateToPhotography}
                    onAnimationComplete={() => setIsEntranceFinished(true)}
                  />

                  {/* Floating Aesthetic Accent Badge */}
                  <div className="hidden xl:flex absolute -top-5 -left-6 z-20 bg-white/95 backdrop-blur-sm p-3 shadow-xl border border-[#ded8cb] items-center gap-2.5 max-w-[215px] rounded-none">
                    <Award className="w-6 h-6 text-[#b82329] shrink-0" />
                    <div className="text-[10px] text-[#141310] leading-snug">
                      <span className="font-bold block">
                        State Coffee Table Books
                      </span>
                      Launched by Hon&apos;ble CM Sri Nara Chandrababu Naidu
                    </div>
                  </div>
                </div>

                {/* 3. Description, Actions & Trust Badges (Row 3 on Mobile; Left Column Row 2 on Desktop) */}
                <div className="order-3 lg:col-span-7 max-w-2xl">
                  <p className="hero-desc-entrance text-xs sm:text-base text-[#5d5951] leading-relaxed font-normal mb-4 sm:mb-8 max-w-xl">
                    Films, photography and visual communication for people,
                    institutions and brands that create change. Trusted by state
                    ministries, enterprises, and visionary brands across Telangana
                    &amp; Andhra Pradesh.
                  </p>

                  <div className="hero-actions-entrance flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-4 mb-5 sm:mb-9">
                    <button
                      onClick={() => setQuoteModalOpen(true)}
                      className="btn-primary group justify-center py-2.5 px-4 sm:py-3.5 sm:px-6 text-xs sm:text-sm font-bold shadow-lg shadow-[#b82329]/25 cursor-pointer rounded-none w-full sm:w-auto"
                    >
                      <span>Start a Project</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1" />
                    </button>

                    <div className="flex items-center gap-2.5 sm:gap-4 w-full sm:w-auto">
                      <button
                        onClick={navigateToPhotography}
                        className="btn-outline flex-1 sm:flex-initial justify-center py-2.5 px-3 sm:py-3.5 sm:px-5 text-xs sm:text-sm bg-white/95 hover:bg-[#b82329] hover:text-white text-[#b82329] border-[#b82329]/60 font-bold shadow-sm transition-all cursor-pointer rounded-none whitespace-nowrap"
                      >
                        <Camera className="w-3.5 h-3.5 shrink-0" />
                        <span>Our Work</span>
                        <span className="px-1.5 py-0.5 rounded-none text-[9px] bg-[#b82329]/15 group-hover:bg-white/20 font-mono hidden xs:inline">
                          50 Photos
                        </span>
                      </button>

                      <a
                        href="#services"
                        className="btn-outline flex-1 sm:flex-initial justify-center py-2.5 px-3 sm:py-3.5 sm:px-5 text-xs sm:text-sm bg-white/90 hover:bg-white text-[#141310] border-[#ded8cb] rounded-none whitespace-nowrap"
                      >
                        <span>14 Capabilities</span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0" />
                      </a>
                    </div>
                  </div>

                  {/* Location and Heritage Badges */}
                  <div className="hero-badges-entrance pt-3 sm:pt-4 border-t border-[#ded8cb] flex items-center gap-x-3 sm:gap-x-5 text-[10px] sm:text-xs uppercase tracking-wider text-[#747169] overflow-x-auto scrollbar-none">
                    <div className="flex items-center gap-1.5 shrink-0">
                      <MapPin className="w-3.5 h-3.5 text-[#b82329] shrink-0" />
                      <span className="text-[#3b3832] font-medium">
                        Hyderabad &amp; Guntur
                      </span>
                    </div>
                    <span className="text-[#c2bcb0] shrink-0">•</span>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <Award className="w-3.5 h-3.5 text-[#b82329] shrink-0" />
                      <span className="text-[#3b3832] font-medium">
                        20+ Years Craft
                      </span>
                    </div>
                    <span className="text-[#c2bcb0] shrink-0">•</span>
                    <span className="text-[#141310] font-bold shrink-0">
                      500+ Films
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
            LIVE ACCREDITATION MARQUEE TICKER (ANIMATED CONTINUOUS SLIDER)
        ========================================================================== */}
          <div className="bg-[#141310] text-white py-3.5 border-y border-white/10 overflow-hidden relative select-none">
            <div className="animate-marquee flex items-center gap-8 whitespace-nowrap text-xs font-mono font-bold tracking-widest uppercase text-white/90">
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
            KEY STATS & TRUST STRIP
        ========================================================================== */}
          <section
            className="bg-[#b82329] text-white border-y border-[#9e1c21]"
            aria-label="Company Metrics"
          >
            <div className="site-container">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
                {businessInfo.stats.map((stat, idx) => (
                  <div
                    key={idx}
                    className="p-6 lg:p-8 flex flex-col justify-center text-center sm:text-left"
                  >
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold tracking-tight leading-none mb-2">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-xs uppercase tracking-wider font-medium text-white/85 leading-snug">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================================
            FEATURED FILM SHOWCASE ("Culture in Motion")
        ========================================================================== */}
          <section
            id="featured-film"
            className="section-pad bg-[#eeeae0] border-b border-[#ded8cb]"
          >
            <div className="site-container">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <span className="section-badge">
                    02 • Featured Documentary
                  </span>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#141310]">
                    Culture <em>in Motion.</em>
                  </h2>
                </div>
                <p className="max-w-md text-sm text-[#5d5951] leading-relaxed">
                  A visual journey through sacred spaces, living traditions, and
                  timeless artisan lineages. Directed and produced with
                  documentary sensitivity and cinema craft.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Main Video Hero Card */}
                <div className="lg:col-span-8 bg-[#141310] rounded-md overflow-hidden relative group min-h-[420px] lg:min-h-[500px] flex flex-col justify-end p-6 sm:p-10 text-white shadow-xl">
                  <SmartImage
                    src={featuredFilms[featuredFilmIndex].image}
                    alt={featuredFilms[featuredFilmIndex].title}
                    fallbackTitle={featuredFilms[featuredFilmIndex].title}
                    fallbackCategory={featuredFilms[featuredFilmIndex].category}
                    fallbackIcon="film"
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.78] group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

                  <div className="relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#b82329] text-[10px] uppercase tracking-widest font-bold mb-4">
                      {featuredFilms[featuredFilmIndex].category}
                    </div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-3">
                      {featuredFilms[featuredFilmIndex].title}
                    </h3>
                    <p className="text-sm sm:text-base text-[#ccc7bd] max-w-xl font-light mb-6">
                      {featuredFilms[featuredFilmIndex].description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4">
                      <button
                        onClick={() => {
                          setVideoModalTitle(
                            featuredFilms[featuredFilmIndex].title,
                          )
                          setVideoModalOpen(true)
                        }}
                        className="btn-primary"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Watch Project Film
                      </button>
                      <span className="text-xs uppercase tracking-wider text-white/70">
                        {featuredFilms[featuredFilmIndex].duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Sidebar Carousel Tabs */}
                <div className="lg:col-span-4 flex flex-col justify-between gap-4">
                  <div className="text-xs uppercase tracking-widest font-bold text-[#747169] mb-1">
                    Documentary Series Selector ({featuredFilmIndex + 1} /{" "}
                    {featuredFilms.length})
                  </div>

                  <div className="flex flex-col gap-3.5">
                    {featuredFilms.map((film, idx) => (
                      <button
                        key={idx}
                        onClick={() => setFeaturedFilmIndex(idx)}
                        className={`text-left p-5 rounded-xl border transition-all duration-200 flex items-center gap-4 ${
                          featuredFilmIndex === idx
                            ? "bg-[#ffffff] border-[#b82329] shadow-lg scale-[1.01]"
                            : "bg-[#ffffff]/80 border-[#ded8cb] hover:bg-white hover:shadow-md"
                        }`}
                      >
                        <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 relative bg-black shadow-sm">
                          <SmartImage
                            src={film.image}
                            alt={film.title}
                            fallbackTitle={film.title}
                            fallbackIcon="film"
                            className="w-full h-full object-cover"
                          />
                          {featuredFilmIndex === idx && (
                            <div className="absolute inset-0 bg-[#b82329]/40 flex items-center justify-center">
                              <Play className="w-5 h-5 fill-white text-white" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="text-[11px] uppercase tracking-wider font-semibold text-[#b82329]">
                            0{idx + 1} • {film.category}
                          </div>
                          <h4 className="font-serif text-xl font-bold text-[#141310] leading-snug">
                            {film.title}
                          </h4>
                          <div className="text-xs sm:text-sm text-[#5d5951] line-clamp-1 mt-1 font-normal">
                            {film.tagline}
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Callout box */}
                  <div className="p-6 rounded-xl bg-[#ffffff] border border-[#ded8cb] shadow-sm mt-3">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#141310] mb-2">
                      <Award className="w-4 h-4 text-[#b82329]" />
                      Official Screening & Archive
                    </div>
                    <p className="text-xs sm:text-sm text-[#5d5951] leading-relaxed">
                      Our documentaries have been screened at prestigious state
                      ceremonies, ministerial summits, and preserved for
                      national craft archives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
            ALL 14 SERVICES SECTION (From Shlokh_Production_Services.docx)
        ========================================================================== */}
          <section id="services" className="section-pad bg-[#f7f5f0]">
            <div className="site-container">
              {/* Header */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                <div className="max-w-3xl">
                  <span className="section-badge">
                    03 • Complete Production Services
                  </span>
                  <h2 className="text-4xl sm:text-6xl lg:text-7xl text-[#141310] tracking-tight">
                    From Concept <em>to Impact.</em>
                  </h2>
                  <p className="text-base sm:text-lg text-[#5d5951] leading-relaxed font-light mt-4">
                    {businessInfo.coverageAndPricing}
                  </p>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <span className="text-xs uppercase tracking-widest text-[#747169] font-bold">
                    14 Specialized Capabilities
                  </span>
                </div>
              </div>

              {/* Modern Segmented Category Filter */}
              <div className="category-filter-wrap">
                <div className="category-segmented-bar">
                  {serviceCategories.map((cat) => {
                    const count =
                      cat === "All"
                        ? servicesData.length
                        : servicesData.filter((s) => s.category === cat).length
                    const isActive = selectedServiceCategory === cat
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedServiceCategory(cat)}
                        className={`category-tab-btn ${
                          isActive ? "active" : ""
                        }`}
                      >
                        <span>{cat}</span>
                        <span className="category-tab-badge">{count}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* 14 Services Grid — Spacious, Fluid, Un-Boxed */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
                {filteredServices.map((service) => (
                  <article
                    key={service.slug}
                    className="service-card-item group cursor-pointer"
                    onClick={() => setSelectedServiceModal(service)}
                  >
                    <div className="service-card-image">
                      <SmartImage
                        src={service.image}
                        alt={service.title}
                        fallbackTitle={service.title}
                        fallbackCategory={service.category}
                        fallbackIcon="film"
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30 pointer-events-none" />

                      {/* Top Status Bar */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                        <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[11px] font-mono font-bold tracking-widest uppercase text-white/95 border border-white/15 shadow-sm">
                          SERVICE {service.number}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#b82329] text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                          {service.category}
                        </span>
                      </div>

                      <div className="absolute bottom-3.5 left-4 text-white/80 text-[11px] uppercase tracking-widest font-mono pointer-events-none">
                        Shlokh Production • 4K Master
                      </div>
                    </div>

                    <div className="p-7 sm:p-9 lg:p-10 flex-1 flex flex-col justify-between bg-white min-h-0 sm:min-h-[260px] lg:min-h-[280px]">
                      <div>
                        <h3 className="font-serif text-2xl sm:text-[26px] font-bold leading-snug text-[#141310] group-hover:text-[#b82329] transition-colors mb-3">
                          {service.title}
                        </h3>

                        <p className="text-sm sm:text-[15px] text-[#555149] leading-relaxed line-clamp-3 mb-5 font-normal">
                          {service.description}
                        </p>

                        {/* Clean Capability Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.tags.slice(0, 3).map((tag, idx) => (
                            <span
                              key={idx}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#f7f5f0] border border-[#ded8cb] text-xs font-semibold text-[#423f39]"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#b82329]" />
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Bar */}
                      <div className="pt-5 border-t border-[#f0ede6] flex items-center justify-between mt-4">
                        <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#b82329] group-hover:text-[#9e1c21] inline-flex items-center gap-2">
                          Full Scope & Deliverables
                          <ChevronRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            setFormData((prev) => ({
                              ...prev,
                              service: service.title,
                            }))
                            setQuoteModalOpen(true)
                          }}
                          className="p-2.5 rounded-full hover:bg-[#f7f5f0] text-[#747169] hover:text-[#b82329] transition-colors"
                          title="Inquire for this service"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pricing and Location Assurance Banner from Docx */}
              <div className="mt-16 p-8 sm:p-12 lg:p-16 rounded-2xl bg-[#141310] text-white flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 shadow-2xl border border-white/10">
                <div className="max-w-3xl">
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#b82329] font-bold mb-3">
                    <Sliders className="w-4 h-4" />
                    Customized Quotes & Flexible Packages
                  </div>
                  <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif mb-4 leading-tight">
                    Affordable Project-Based Rates
                  </h3>
                  <p className="text-sm sm:text-base text-[#ccc7bd] leading-relaxed font-light">
                    Based in Punjagutta, Hyderabad, with active production teams
                    covering Telangana and Andhra Pradesh. Quotes are tailored
                    to your script, duration, shoot location, crew requirements,
                    and post-production scope. Affordable rates for election
                    campaigns, voter feedback interviews, and grassroots
                    beneficiary testimonials.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full lg:w-auto">
                  <a
                    href="tel:+919505555277"
                    className="btn-outline-white justify-center text-center py-3.5 px-6"
                  >
                    <Phone className="w-4 h-4 text-[#b82329]" />
                    Call Direct
                  </a>
                  <button
                    onClick={() => setQuoteModalOpen(true)}
                    className="btn-primary justify-center text-center py-3.5 px-6"
                  >
                    Request Custom Quote
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
            GOVERNMENT & HERITAGE PUBLICATIONS SHOWCASE (From PDF Page 10)
        ========================================================================== */}
          <section
            id="publications"
            className="section-pad bg-[#eeeae0] border-y border-[#ded8cb]"
          >
            <div className="site-container">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                <div className="max-w-3xl">
                  <span className="section-badge">
                    04 • Prestigious Publications
                  </span>
                  <h2 className="text-4xl sm:text-6xl lg:text-7xl text-[#141310] tracking-tight">
                    Crafting Stories. <em>Creating Impact.</em>
                  </h2>
                  <p className="text-base sm:text-lg text-[#5d5951] leading-relaxed mt-4 font-light">
                    Premium Coffee Table Books, QR-video integrated
                    publications, and state heritage documentation officially
                    launched by Hon’ble Chief Minister Sri Nara Chandrababu
                    Naidu Garu.
                  </p>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#ded8cb] text-xs font-semibold text-[#141310] shadow-sm shrink-0">
                  <span className="w-2 h-2 rounded-full bg-[#b82329]" />
                  Official State Government Releases
                </div>
              </div>

              {/* Featured Books Grid — Consistent, Proportional Architectural Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-16">
                {[
                  {
                    title: "WEAVES ANDHRA PRADESH",
                    sub: "Coffee Table Book",
                    badge: "Govt of AP • Handlooms & Textiles",
                    image:
                      "/images/portfolio_photos/p10_weaves_andhra_book.jpg",
                    launchImg:
                      "/images/portfolio_photos/p10_cm_launching_weaves_book.jpg",
                    launchDignitary: "Hon'ble CM Sri Nara Chandrababu Naidu",
                    desc: "A tribute to Andhra Pradesh's timeless weaving traditions. Showcases the legacy, diversity, and excellence of handloom weaves across the state along with the stories of artisans behind them.",
                    supportLabel: "Official Launch Ceremony",
                    supportDetail:
                      "Statewide Handloom & Artisan Legacy Archive",
                  },
                  {
                    title: "MEPMA — PRERANA SAKHI",
                    sub: "Coffee Table Book",
                    badge: "Govt of AP • MEPMA & SHG Federations",
                    image:
                      "/images/portfolio_photos/p10_mepma_prerana_sakhi_book.jpg",
                    launchImg:
                      "/images/portfolio_photos/p10_cm_launching_mepma_book.jpg",
                    launchDignitary: "Hon'ble CM Sri Nara Chandrababu Naidu",
                    desc: "A celebration of women empowerment and the incredible journey of Self Help Groups under MEPMA, capturing inspiring stories of rural women driving community development.",
                    supportLabel: "Official Launch Ceremony",
                    supportDetail:
                      "Women Self-Help Groups Transformation Chronicle",
                  },
                  {
                    title: "SAVARA TRIBAL ART",
                    sub: "Coffee Table Book & Branding",
                    badge: "Tribal Welfare & APITCO",
                    image:
                      "/images/portfolio_photos/p10_savara_tribal_art_book.jpg",
                    desc: "Comprehensive visual research and branding preserving the sacred indigenous murals, art practices, and cultural lore of the Savara tribe.",
                    supportLabel: "Indigenous Heritage Documentation",
                    supportDetail:
                      "Preserving sacred indigenous murals & tribal lineages",
                  },
                  {
                    title: "25 YEARS OF SERP",
                    sub: "Coffee Table Book with QR Code Videos",
                    badge: "Interactive QR-Code Media",
                    image:
                      "/images/portfolio_photos/p10_serp_25_years_qr_book.jpg",
                    desc: "A milestone publication celebrating 25 years of poverty elimination. Features embedded QR codes on pages allowing readers to scan and watch documentary video stories of beneficiaries.",
                    supportLabel: "Interactive Media Integration",
                    supportDetail:
                      "Embedded QR-code streaming video documentary stories",
                  },
                  {
                    title: "VIZAG — PIXELS & PANORAMAS",
                    sub: "Coffee Table Book",
                    badge: "VMRDA Tourism Collection",
                    image:
                      "/images/portfolio_photos/p10_vizag_pixels_panoramas_book.jpg",
                    desc: "Featuring VMRDA parks, submarine museums, panoramic coastal aerials, QR-enabled immersive experiences, and the visual essence of Visakhapatnam.",
                    supportLabel: "Coastal & City Heritage Series",
                    supportDetail:
                      "VMRDA panoramic coastal aerials & museum archives",
                  },
                  {
                    title: "GOVT OF INDIA HANDICRAFTS",
                    sub: "10 Clusters Heritage Documentation",
                    badge: "Ministry of Textiles, GOI",
                    image:
                      "/images/portfolio_photos/p10_cm_launching_mepma_book.jpg",
                    desc: "Branding, documenting, and publishing the living legacy of 10 major artisan clusters across Gujarat, Telangana, Andhra Pradesh, Karnataka, Rajasthan, and UP.",
                    supportLabel: "National Craft Archive",
                    supportDetail:
                      "Living crafts of 10 nationwide artisan clusters",
                  },
                ].map((book, idx) => (
                  <article
                    key={idx}
                    className="bg-white rounded-2xl border border-[#ded8cb] overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group shadow-sm"
                  >
                    <div>
                      {/* 1. Project Image Stage with intentional aspect ratio */}
                      <div
                        className="w-full aspect-[16/10] bg-[#faf8f5] relative overflow-hidden flex items-center justify-center cursor-pointer border-b border-[#ded8cb]/70 group/img"
                        onClick={() =>
                          setLightboxImage({
                            src: book.image,
                            title: book.title,
                            subtitle: book.sub,
                          })
                        }
                      >
                        <SmartImage
                          src={book.image}
                          alt={book.title}
                          fallbackTitle={book.title}
                          fallbackCategory={book.badge}
                          fallbackIcon="book"
                          className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs uppercase font-bold tracking-widest gap-2 backdrop-blur-[2px]">
                          <ZoomIn className="w-4 h-4" />
                          Click to Zoom Archive
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 sm:p-7 lg:p-8">
                        {/* 2. Small organization or launch label */}
                        <div className="mb-3">
                          <span className="inline-block px-3 py-1 rounded-full bg-[#fbebed] border border-[#b82329]/20 text-[#b82329] text-[11px] font-bold uppercase tracking-wider">
                            {book.badge}
                          </span>
                        </div>

                        {/* 3. Project title */}
                        <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-[#141310] leading-snug group-hover:text-[#b82329] transition-colors mb-2">
                          {book.title}
                        </h3>

                        {/* 4. Project category or format */}
                        <div className="text-xs uppercase tracking-wider font-semibold text-[#747169] mb-3">
                          {book.sub}
                        </div>

                        {/* 5. Short description */}
                        <p className="text-sm sm:text-[15px] text-[#4e4a42] leading-relaxed font-light">
                          {book.desc}
                        </p>
                      </div>
                    </div>

                    {/* 6. Optional launch ceremony or supporting information panel */}
                    <div className="p-6 sm:p-7 lg:p-8 pt-0 mt-auto">
                      {book.launchImg ? (
                        <div
                          className="p-3.5 sm:p-4 rounded-xl bg-[#faf8f5] border border-[#ded8cb] flex items-center gap-3.5 cursor-pointer group/launch hover:bg-[#eeeae0] hover:border-[#b82329]/40 transition-all shadow-sm"
                          onClick={() =>
                            setLightboxImage({
                              src: book.launchImg!,
                              title: `${book.title} — Official Launch`,
                              subtitle: book.badge,
                            })
                          }
                        >
                          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden shrink-0 bg-[#faf8f5] border border-[#ded8cb] shadow-sm relative">
                            <SmartImage
                              src={book.launchImg}
                              alt="Book Launch Ceremony"
                              fallbackTitle="Launch Ceremony"
                              fallbackCategory="Govt Event"
                              fallbackIcon="camera"
                              className="w-full h-full object-cover group-hover/launch:scale-105 transition-transform duration-300"
                            />
                          </div>
                          <div className="text-xs sm:text-sm text-[#141310] font-medium leading-snug group-hover/launch:text-[#b82329] transition-colors flex-1 min-w-0">
                            <span className="font-bold block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#b82329] mb-0.5">
                              Official Launch Ceremony
                            </span>
                            <span className="block truncate font-serif font-bold text-[#141310] text-xs sm:text-sm">
                              {book.launchDignitary ||
                                "Hon'ble CM Sri Nara Chandrababu Naidu"}
                            </span>
                            <span className="text-[11px] block text-[#747169] mt-0.5 font-normal truncate">
                              View full ceremonial launch photograph &rarr;
                            </span>
                          </div>
                          <ChevronRight className="w-4 h-4 text-[#747169] group-hover/launch:translate-x-1 transition-transform shrink-0" />
                        </div>
                      ) : (
                        <div className="p-3.5 sm:p-4 rounded-xl bg-[#faf8f5] border border-[#ded8cb] flex items-center gap-3.5 shadow-sm">
                          <div className="w-11 h-11 rounded-lg bg-white border border-[#ded8cb] flex items-center justify-center text-[#b82329] shrink-0">
                            <BookOpen className="w-4 h-4" />
                          </div>
                          <div className="text-xs sm:text-sm text-[#141310] leading-snug flex-1 min-w-0">
                            <span className="font-bold block text-[10px] sm:text-[11px] uppercase tracking-wider text-[#747169] mb-0.5">
                              {book.supportLabel || "Archival Publication"}
                            </span>
                            <span className="text-xs text-[#4e4a42] font-normal line-clamp-1 block">
                              {book.supportDetail ||
                                "Preserved in official state and national archives"}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              {/* 10 Clusters of India — Expansive National Artisan Showcase */}
              <div className="p-6 sm:p-8 lg:p-12 rounded-2xl bg-white border border-[#ded8cb] shadow-sm">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12 pb-6 sm:pb-8 border-b border-[#eeeae0]">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#b82329] flex items-center gap-2 mb-2">
                      <span className="w-2 h-2 rounded-full bg-[#b82329] animate-pulse" />
                      National Footprint • Ministry of Textiles, GOI
                    </span>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#141310]">
                      10 Clusters. Countless Stories. One Heritage.
                    </h3>
                    <p className="text-sm sm:text-base text-[#747169] mt-3 max-w-2xl font-light leading-relaxed">
                      Comprehensive visual documentation, branding, and
                      publication of India’s living craft traditions across
                      Gujarat, Telangana, Andhra Pradesh, Karnataka, Rajasthan,
                      and Uttar Pradesh.
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-[#5d5951] font-semibold shrink-0">
                    <span>6 States • 10 Living Traditions</span>
                  </div>
                </div>

                {/* Clean, Full Responsive Grid - 100% visible, reflows without horizontal overflow or clipping */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-5">
                  {craftClustersList.map((cluster, idx) => (
                    <div
                      key={idx}
                      className="group p-5 lg:p-6 rounded-xl bg-[#faf8f5] hover:bg-white border border-[#ded8cb] hover:border-[#b82329]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[145px] sm:min-h-[160px]"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs font-mono font-bold text-[#9d998f]">
                            {idx < 9 ? `0${idx + 1}` : idx + 1}
                          </span>
                          <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#fbebed] text-[#b82329] font-bold uppercase tracking-wider">
                            {cluster.state}
                          </span>
                        </div>
                        <h4 className="font-serif text-xl font-bold text-[#141310] group-hover:text-[#b82329] transition-colors leading-snug">
                          {cluster.name}
                        </h4>
                      </div>
                      <div className="pt-3 mt-3 border-t border-[#ded8cb]/70 text-xs text-[#5d5951] font-medium leading-relaxed">
                        {cluster.craft}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
            PHOTOGRAPHY MASTERWORKS EXHIBITION (DEDICATED CREATIVE SHOWCASE)
        ========================================================================== */}
          <section
            id="photography"
            className={`section-pad darkroom-transition ${
              darkroomMode
                ? "bg-[#0c0b0a] text-white border-y border-white/10"
                : "bg-[#f7f5f0] text-[#141310] border-y border-[#ded8cb]"
            }`}
          >
            <div className="site-container">
              {/* Exhibition Header with Darkroom Switcher */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <div
                    className={`section-badge ${
                      darkroomMode ? "text-[#ff4a50]" : "text-[#b82329]"
                    }`}
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span>The Photographic Archive</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                    Masterworks <em>Behind The Lens</em>
                  </h2>
                  <p
                    className={`text-sm sm:text-base mt-3 max-w-2xl leading-relaxed ${
                      darkroomMode ? "text-[#a9a59c]" : "text-[#5d5951]"
                    }`}
                  >
                    Fine-art documentation, royal handloom chronicles, intimate
                    beneficiary portraits, and heavy-rig cinema stills across
                    India.
                  </p>
                </div>

                {/* Darkroom / Light Gallery Switcher & Dedicated Page CTA */}
                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <button
                    onClick={() => setDarkroomMode(!darkroomMode)}
                    className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 border ${
                      darkroomMode
                        ? "bg-[#1b1915] text-[#fffdf8] border-white/20 hover:border-[#b82329] shadow-lg shadow-black/40"
                        : "bg-white text-[#141310] border-[#ded8cb] hover:border-[#b82329] shadow-sm"
                    }`}
                    aria-label="Toggle Darkroom Mode"
                  >
                    {darkroomMode ? (
                      <>
                        <Sun className="w-4 h-4 text-amber-400" />
                        <span>Editorial Paper Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon className="w-4 h-4 text-[#b82329]" />
                        <span>Velvet Darkroom Mode</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={navigateToPhotography}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 bg-[#b82329] hover:bg-[#9e1c21] text-white shadow-lg shadow-[#b82329]/25 cursor-pointer"
                  >
                    <BookOpen className="w-4 h-4" />
                    <span>Open Dedicated Page (24 Spreads) →</span>
                  </button>
                </div>
              </div>

              {/* Dedicated Page Feature Banner */}
              <div
                onClick={navigateToPhotography}
                className={`mb-10 p-6 sm:p-7 rounded-2xl border transition-all duration-300 cursor-pointer group flex flex-col md:flex-row items-center justify-between gap-6 ${
                  darkroomMode
                    ? "bg-gradient-to-r from-[#b82329]/25 via-white/5 to-white/5 border-white/15 hover:border-[#b82329]"
                    : "bg-gradient-to-r from-[#fdf2f2] via-white to-white border-[#ded8cb] hover:border-[#b82329] shadow-md"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#b82329] text-white flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform">
                    <Camera className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-wider text-[#b82329]">
                      <span>Exclusive Archival Release</span>
                      <span>•</span>
                      <span>Shareef Sir Master Portfolio</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold mt-1 text-inherit group-hover:text-[#b82329] transition-colors">
                      Explore Our Dedicated Photographic Work Showcase
                    </h3>
                    <p className="text-xs sm:text-sm opacity-80 mt-1 max-w-2xl leading-relaxed">
                      View all 24 original high-definition publication spreads
                      at 300 DPI, full camera sensor values (aperture, shutter,
                      ISO, lighting), and coffee table books released by Hon'ble
                      CM Sri Nara Chandrababu Naidu.
                    </p>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2 px-5 py-3 rounded-full bg-[#b82329] group-hover:bg-[#9e1c21] text-white text-xs font-bold uppercase tracking-wider shadow-lg transition-all">
                  <span>View All 24 Spreads</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Filter Pills */}
              <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
                {photoCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedPhotoCategory(cat)}
                    className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                      selectedPhotoCategory === cat
                        ? "bg-[#b82329] text-white shadow-sm font-semibold"
                        : darkroomMode
                          ? "bg-white/5 text-[#a9a59c] hover:bg-white/10 hover:text-white border border-white/10"
                          : "bg-[#eeeae0] text-[#5d5951] hover:bg-[#e4decb] hover:text-[#141310] border border-[#ded8cb]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Dynamic Asymmetric Editorial Masonry Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setPhotoLightbox(photo)}
                    className={`group relative rounded-lg overflow-hidden cursor-pointer border transition-all duration-500 photo-card-sheen ${
                      darkroomMode
                        ? "bg-[#141310] border-white/10 hover:border-[#b82329]/60 hover:shadow-2xl hover:shadow-black"
                        : "bg-white border-[#ded8cb] hover:border-[#b82329]/60 hover:shadow-xl hover:shadow-black/10"
                    }`}
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/10">
                      <SmartImage
                        src={photo.image}
                        alt={photo.title}
                        fallbackTitle={photo.title}
                        fallbackCategory={photo.category}
                        fallbackIcon="camera"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Top Badge: Category */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[10px] uppercase tracking-wider font-mono font-bold text-white border border-white/15">
                          {photo.category}
                        </span>
                      </div>
                      {/* Top Right: Expand / Magnify Icon */}
                      <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="w-8 h-8 rounded-full bg-black/70 backdrop-blur-md flex items-center justify-center text-white border border-white/20">
                          <Maximize2 className="w-3.5 h-3.5" />
                        </span>
                      </div>

                      {/* Camera Viewfinder Exposure HUD Bar */}
                      <div className="absolute bottom-2.5 left-2.5 right-2.5 z-10">
                        <div className="flex items-center justify-between px-2.5 py-1.5 bg-black/85 backdrop-blur-md rounded border border-white/15 text-[10px] font-mono text-white shadow-lg">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[#ff4a50] font-bold">
                              {photo.values.focalLength}
                            </span>
                            <span className="text-white/40">•</span>
                            <span className="text-white font-bold">
                              {photo.values.aperture}
                            </span>
                            <span className="text-white/40">•</span>
                            <span className="text-[#ccc7bd]">
                              {photo.values.shutterSpeed}
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-amber-400 font-bold">
                              {photo.values.iso}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Card Meta & Story Details */}
                    <div
                      className={`p-5 flex flex-col justify-between ${
                        darkroomMode ? "bg-[#141310]" : "bg-white"
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-wider text-[#b82329] font-bold mb-1.5">
                          <span>{photo.location}</span>
                          <span>•</span>
                          <span>{photo.year}</span>
                        </div>
                        <h3
                          className={`font-serif text-lg sm:text-xl font-bold mb-2 transition-colors ${
                            darkroomMode
                              ? "text-white group-hover:text-[#ff6b6b]"
                              : "text-[#141310] group-hover:text-[#b82329]"
                          }`}
                        >
                          {photo.title}
                        </h3>
                        <p
                          className={`text-xs leading-relaxed line-clamp-2 mb-3 ${
                            darkroomMode ? "text-[#a9a59c]" : "text-[#5d5951]"
                          }`}
                        >
                          {photo.story}
                        </p>
                      </div>

                      {/* Technical Values Bar */}
                      <div
                        className={`pt-3 border-t flex flex-col gap-1 text-[11px] font-mono ${
                          darkroomMode
                            ? "border-white/10 text-[#747169]"
                            : "border-[#ded8cb] text-[#747169]"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span
                            className={`font-medium truncate ${
                              darkroomMode ? "text-white" : "text-[#141310]"
                            }`}
                          >
                            {photo.values.cameraBody}
                          </span>
                          <span className="text-amber-500 font-bold shrink-0">
                            {photo.values.colorTemp}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[10px]">
                          <span className="truncate pr-2">
                            {photo.values.lensModel}
                          </span>
                          <span
                            className={`uppercase font-bold shrink-0 ${
                              darkroomMode
                                ? "text-white/70"
                                : "text-[#141310]/70"
                            }`}
                          >
                            {photo.client ? "Official Archive" : "Fine Art"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Gallery CTA */}
              <div className="mt-12 p-6 rounded-lg bg-black/20 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                <div>
                  <h4 className="font-serif text-lg font-bold text-white mb-1">
                    Commission Bespoke Fine-Art & Commercial Photography
                  </h4>
                  <p className="text-xs text-[#a9a59c]">
                    From national handicraft clusters and coffee table books to
                    high-profile executive portraits.
                  </p>
                </div>
                <button
                  onClick={() => setQuoteModalOpen(true)}
                  className="btn-primary text-xs shrink-0"
                >
                  Inquire For Shoot
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          </section>

          {/* =========================================================================
            FIELD IMPACT: "When Responsibility Was Entrusted To Us" (From PDF Page 8)
        ========================================================================== */}
          <section id="impact" className="section-pad bg-[#f7f5f0]">
            <div className="site-container">
              <div className="max-w-3xl mb-12">
                <span className="section-badge">
                  05 • Ground-Level Operations
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#141310] mb-4">
                  When Responsibility <em>Was Entrusted To Us.</em>
                </h2>
                <p className="text-base sm:text-lg text-[#5d5951] leading-relaxed">
                  Listening to every voice. Documenting every story. Recording
                  every authentic feedback. Hundreds of beneficiary interactions
                  filmed on-location across Telangana and Andhra Pradesh.
                </p>
              </div>

              {/* Photo Mosaic of Real Ground-Level Filming */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6 mb-16">
                {[
                  {
                    src: "/images/portfolio_photos/p08_bus_beneficiary_shoot.jpg",
                    title: "Rural Transit & Passenger Feedback",
                    caption:
                      "Interviewing women commuters outside RTC bus services on welfare transit schemes.",
                  },
                  {
                    src: "/images/portfolio_photos/p08_village_hall_interview.jpg",
                    title: "Village Hall Community Dialogue",
                    caption:
                      "Capturing authentic accounts of agricultural credit and welfare beneficiaries.",
                  },
                  {
                    src: "/images/portfolio_photos/p08_field_editing_laptop.jpg",
                    title: "Rapid On-Location Post-Production",
                    caption:
                      "Editors cutting and subtitling interviews on field laptops for immediate review.",
                  },
                  {
                    src: "/images/portfolio_photos/p08_beneficiary_interview_saree.jpg",
                    title: "Grassroots Beneficiary Testimonial",
                    caption:
                      "Filming direct beneficiary experiences with cinema cameras and lapel audio.",
                  },
                  {
                    src: "/images/portfolio_photos/p08_community_elder_interview.jpg",
                    title: "Community Elders & Public Sentiment",
                    caption:
                      "Documenting village leadership viewpoints with full consent and clarity.",
                  },
                  {
                    src: "/images/portfolio_photos/p11_stage_multicam_shoot.jpg",
                    title: "Auditorium Multi-Camera Production",
                    caption:
                      "Statewide welfare conventions captured with dual telephoto camera rigs.",
                  },
                  {
                    src: "/images/portfolio_photos/p12_workshop_craftsman_shoot.jpg",
                    title: "Artisan Workshop Filming",
                    caption:
                      "Documenting cottage industry workers and handloom units at work.",
                  },
                  {
                    src: "/images/portfolio_photos/p12_location_scout_tunnel.jpg",
                    title: "Field Scouting & Infrastructure",
                    caption:
                      "Production crew scouting irrigation, tunnel, and industrial project corridors.",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="group relative rounded-xl overflow-hidden bg-[#141310] aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border border-[#ded8cb]"
                    onClick={() =>
                      setLightboxImage({
                        src: item.src,
                        title: item.title,
                        subtitle: item.caption,
                      })
                    }
                  >
                    <SmartImage
                      src={item.src}
                      alt={item.title}
                      fallbackTitle={item.title}
                      fallbackCategory="Field Document"
                      fallbackIcon="camera"
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-5 text-white">
                      <span className="text-[10px] text-[#b82329] uppercase tracking-widest font-mono font-bold mb-1">
                        Field Document • 0{idx + 1}
                      </span>
                      <h4 className="font-serif text-lg sm:text-xl font-bold leading-tight group-hover:text-[#f7f5f0] transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-white/80 line-clamp-2 mt-1.5 font-light leading-relaxed">
                        {item.caption}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Core Commitments Manifesto Triad */}
              <div className="p-8 sm:p-12 lg:p-16 rounded-2xl bg-white border border-[#ded8cb] shadow-md">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#eeeae0]">
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#b82329] block mb-2">
                      Ethical Protocol • Field Standard
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#141310]">
                      Three Principles of Ground-Level Filming
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#747169] max-w-md font-light">
                    How our field crews maintain trust, authentic testimony, and
                    institutional accuracy across every village and urban ward.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 md:divide-x md:divide-[#ded8cb]/80">
                  {[
                    {
                      num: "01",
                      title: "Capture Accurately",
                      desc: "Preserving the authentic voice, local dialects, and genuine reactions of everyday citizens without staging, scripts, or artificial bias.",
                    },
                    {
                      num: "02",
                      title: "Document Responsibly",
                      desc: "Ethical filming with formal consent protocols, respectful community engagement, dignified framing, and sensitivity to privacy.",
                    },
                    {
                      num: "03",
                      title: "Deliver on Time",
                      desc: "Rapid overnight editing turnaround, multilingual subtitle integration, and broadcast-ready delivery for urgent governmental submissions.",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col justify-between ${
                        idx > 0
                          ? "md:pl-8 lg:pl-12 pt-6 md:pt-0 border-t md:border-t-0 border-[#ded8cb]/60"
                          : ""
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="w-10 h-10 rounded-full bg-[#b82329] text-white flex items-center justify-center font-serif font-bold text-sm shadow-sm shrink-0">
                            {item.num}
                          </span>
                          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#9d998f]">
                            Standard {item.num}
                          </span>
                        </div>
                        <h4 className="font-serif text-2xl font-bold text-[#141310] mb-3">
                          {item.title}
                        </h4>
                        <p className="text-sm text-[#524e47] leading-relaxed font-light">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* =========================================================================
            THE STUDIO & OWNED TECHNICAL INFRASTRUCTURE (PDF Pages 4, 5, 6, 14, 15, 16)
        ========================================================================== */}
          <section id="studio" className="section-pad bg-[#141310] text-white">
            <div className="site-container">
              <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
                <div>
                  <span className="section-badge text-[#b82329]">
                    06 • The Creative Engine
                  </span>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white">
                    The people behind <em>the frames.</em>
                  </h2>
                </div>
                <p className="max-w-md text-sm text-[#a9a59c] leading-relaxed font-light">
                  More than 30 in-house professionals under one roof, backed by
                  fully owned cinema cameras, drones, studio lighting, and
                  post-production suites.
                </p>
              </div>

              {/* Interactive Tab Switcher */}
              <div className="flex items-center gap-2 border-b border-white/15 pb-2 mb-10 overflow-x-auto scrollbar-none">
                {[
                  { id: "people", label: "People & Leadership" },
                  { id: "equipment", label: "Owned Equipment & Gear" },
                  { id: "process", label: "6-Stage Process" },
                  { id: "space", label: "Studio & Podcast Sets" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveStudioTab(tab.id as any)}
                    className={`studio-tab-btn ${
                      activeStudioTab === tab.id ? "active" : ""
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* TAB CONTENT: PEOPLE */}
              {activeStudioTab === "people" && (
                <div className="space-y-12">
                  {/* Executive Leadership Duo: Founder First, then Sasi */}
                  <div>
                    <div className="mb-8 text-center md:text-left">
                      <span className="text-[11px] uppercase tracking-widest text-[#b82329] font-mono font-bold block mb-1">
                        Executive Stewardship
                      </span>
                      <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                        Founders & Creative Directorate
                      </h3>
                      <p className="text-xs sm:text-sm text-[#a9a59c] max-w-2xl mt-1.5 leading-relaxed">
                        Two decades of institutional guidance, governmental
                        trust, and directorial storytelling across Telangana,
                        Andhra Pradesh, and India.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      {executiveLeaders.map((leader, idx) => (
                        <div
                          key={leader.id}
                          className="p-8 rounded-lg bg-gradient-to-b from-[#1f1d19] to-[#171512] border border-white/15 hover:border-[#b82329]/50 transition-all flex flex-col justify-between shadow-xl"
                        >
                          <div>
                            {/* Header Badges */}
                            <div className="flex items-center justify-between mb-6">
                              <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded bg-[#b82329]/20 text-[#ff6b6b] border border-[#b82329]/40 font-bold">
                                {idx === 0
                                  ? "01 • " + leader.titleBadge
                                  : "02 • " + leader.titleBadge}
                              </span>
                              <span className="text-[11px] text-[#747169] font-mono">
                                {leader.credentials}
                              </span>
                            </div>

                            {/* Profile Header */}
                            <div className="flex items-center gap-5 mb-5">
                              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#b82329] to-[#731216] text-white flex items-center justify-center font-serif text-2xl sm:text-3xl font-bold shrink-0 shadow-lg border border-white/10">
                                {leader.initials}
                              </div>
                              <div>
                                <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white leading-tight">
                                  {leader.name}
                                </h4>
                                <div className="text-xs sm:text-sm text-[#ccc7bd] font-medium mt-1">
                                  {leader.role}
                                </div>
                              </div>
                            </div>

                            {/* Quote */}
                            <blockquote className="p-4 rounded bg-black/30 border-l-2 border-[#b82329] text-xs sm:text-sm text-[#e8e4dc] italic mb-5 leading-relaxed font-serif">
                              "{leader.quote}"
                            </blockquote>

                            {/* Description */}
                            <p className="text-xs text-[#a9a59c] leading-relaxed mb-6">
                              {leader.description}
                            </p>

                            {/* Highlights */}
                            <div className="space-y-2 border-t border-white/10 pt-4 mb-6">
                              {leader.highlights.map((item, hIdx) => (
                                <div
                                  key={hIdx}
                                  className="flex items-start gap-2.5 text-xs text-[#ccc7bd]"
                                >
                                  <CheckCircle2 className="w-3.5 h-3.5 text-[#b82329] shrink-0 mt-0.5" />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                            <span className="text-[10px] uppercase font-mono tracking-wider text-[#747169]">
                              Shlokh Executive Directorate
                            </span>
                            <a
                              href="#contact"
                              className="btn-primary text-xs py-2 px-4"
                            >
                              Connect Directly
                              <ArrowRight className="w-3 h-3 ml-1" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Production Syndicate & Technical Force (Replaces 22 Individual Names) */}
                  <div className="p-8 rounded-lg bg-[#181613] border border-white/10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4 mb-6">
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#b82329] font-bold block mb-1">
                          Operational Scale
                        </span>
                        <h4 className="font-serif text-xl sm:text-2xl font-bold text-white">
                          Permanent Production Syndicate & Technical Force
                        </h4>
                        <p className="text-xs text-[#a9a59c] mt-1">
                          More than 30 in-house certified specialists operating
                          across script, cinema cameras, sound design, and AI
                          post-production.
                        </p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 shrink-0">
                        <Users className="w-4 h-4 text-[#b82329]" />
                        <span className="text-xs font-mono font-bold text-white">
                          30+ Full-Time Specialists
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                      {productionSyndicateDepartments.map((dept, dIdx) => (
                        <div
                          key={dIdx}
                          className="p-5 rounded bg-[#1f1d19] border border-white/5 flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-[10px] font-mono uppercase tracking-wider text-[#b82329] font-bold">
                                {dept.headcount}
                              </span>
                              <div className="w-7 h-7 rounded bg-white/5 flex items-center justify-center text-[#b82329]">
                                {dIdx === 0 ? (
                                  <Compass className="w-3.5 h-3.5" />
                                ) : dIdx === 1 ? (
                                  <Camera className="w-3.5 h-3.5" />
                                ) : dIdx === 2 ? (
                                  <Layers className="w-3.5 h-3.5" />
                                ) : (
                                  <Sparkles className="w-3.5 h-3.5" />
                                )}
                              </div>
                            </div>
                            <h5 className="font-serif text-lg font-bold text-white mb-2 leading-snug">
                              {dept.title}
                            </h5>
                            <p className="text-[11px] text-[#a9a59c] leading-relaxed mb-4">
                              {dept.summary}
                            </p>
                          </div>
                          <div className="border-t border-white/5 pt-3 space-y-1.5">
                            {dept.capabilities.map((cap, cIdx) => (
                              <div
                                key={cIdx}
                                className="text-[10px] text-[#747169] flex items-center gap-1.5"
                              >
                                <span className="w-1 h-1 rounded-full bg-[#b82329]" />
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

              {/* TAB CONTENT: EQUIPMENT */}
              {activeStudioTab === "equipment" && (
                <div className="space-y-8">
                  <div className="p-5 rounded bg-[#1f1d19] border border-white/10 text-xs text-[#ccc7bd] flex items-center justify-between">
                    <span>
                      Fully owned infrastructure guarantees zero reliance on
                      third-party equipment rentals, total quality control, and
                      instant deployment.
                    </span>
                    <span className="font-bold text-white uppercase text-[10px] tracking-wider px-2 py-1 bg-[#b82329] rounded shrink-0 ml-4">
                      Zero Third-Party Dependency
                    </span>
                  </div>

                  {/* Visual Grip & Lighting Feature */}
                  <div className="p-6 rounded-md bg-[#1b1915] border border-white/10 flex flex-col md:flex-row items-center gap-6">
                    <div className="w-full md:w-56 h-40 rounded overflow-hidden shrink-0 bg-black/40 border border-white/10">
                      <img
                        src="/images/studio_spaces/studio_lighting_gear_arsenal.jpg"
                        alt="Owned Godox Continuous Lighting, Fresnel Lenses & C-Stands"
                        className="w-full h-full object-cover object-top"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] uppercase tracking-widest text-[#b82329] font-bold block mb-1">
                        Professional Studio Grip & Lighting Arsenal
                      </span>
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
                        Precision Light Shaping & Rigging Infrastructure
                      </h4>
                      <p className="text-xs text-[#a9a59c] leading-relaxed mb-3">
                        Complete in-house arsenal of Godox continuous bi-color
                        heads, high-output Fresnel focusing lenses, optical
                        snoots, heavy-duty wheeled boom stands, and stainless
                        steel C-stands for pinpoint cinematic diffusion.
                      </p>
                      <div className="flex flex-wrap gap-2 text-[10px] font-mono text-[#ccc7bd]">
                        <span className="px-2 py-0.5 rounded bg-white/10">
                          Godox DP600 & SL300II
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white/10">
                          FLS10 Fresnel Focusing
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white/10">
                          Optical Snoots & Barn Doors
                        </span>
                        <span className="px-2 py-0.5 rounded bg-white/10">
                          15+ Stainless C-Stands
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {equipmentInventory.map((cat, idx) => (
                      <div
                        key={idx}
                        className="p-6 rounded-md bg-[#1b1915] border border-white/10"
                      >
                        <h3 className="font-serif text-2xl font-bold text-white mb-4 pb-2 border-b border-white/10 flex items-center justify-between">
                          <span>{cat.category}</span>
                          <span className="text-xs font-mono text-[#b82329]">
                            0{idx + 1}
                          </span>
                        </h3>
                        <div className="space-y-3">
                          {cat.items.map((item, i) => (
                            <div
                              key={i}
                              className="flex justify-between items-start gap-4 text-xs pb-2 border-b border-white/5 last:border-0 last:pb-0"
                            >
                              <div>
                                <strong className="text-white block font-medium">
                                  {item.name}
                                </strong>
                                <span className="text-[#8e8a80] text-[11px]">
                                  {item.specs}
                                </span>
                              </div>
                              {item.count && (
                                <span className="px-2 py-0.5 rounded bg-white/10 text-white font-mono text-[10px] shrink-0 font-semibold">
                                  {item.count}
                                </span>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* TAB CONTENT: PROCESS */}
              {activeStudioTab === "process" && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {productionProcessSteps.map((step) => (
                    <div
                      key={step.step}
                      className="p-6 rounded-md bg-[#1b1915] border border-white/10 relative overflow-hidden"
                    >
                      <span className="text-5xl font-serif text-[#b82329]/20 font-bold absolute right-4 top-4">
                        {step.step}
                      </span>
                      <span className="text-xs font-mono text-[#b82329] font-bold block mb-2">
                        Phase {step.step}
                      </span>
                      <h3 className="font-serif text-2xl font-bold text-white mb-3">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#a9a59c] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}

              {/* TAB CONTENT: SPACE & PODCAST SETS */}
              {activeStudioTab === "space" && (
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                      {
                        src: "/images/studio_spaces/studio_spotlight_soundstage.jpg",
                        title: "Acoustic Cyclorama Soundstage",
                        desc: "1,500 sq.ft. commercial stage with continuous softbox diffusers, circular spotlight wall projection, and multi-angle camera floor space.",
                        position: "object-center",
                      },
                      {
                        src: "/images/studio_spaces/live_soundstage_cinema_rig.jpg",
                        title: "Live Soundstage & Cinema Rig",
                        desc: "Atmospheric performance bay with heavy-duty cinema camera package, overhead amber softlight panel, and multi-point stage fixtures.",
                        stylePosition: "50% 55%",
                      },
                      {
                        src: "/images/studio_spaces/crimson_brand_studio_bay.jpg",
                        title: "Signature Crimson Brand Studio",
                        desc: "High-output Godox softboxes bathed in Shlokh's signature crimson ambient light, directional barn doors, and floor perimeter neon bounds.",
                        position: "object-center",
                      },
                      {
                        src: "/images/extracted/raw_p15_1.jpeg",
                        title: "Ambient RGB Podcast Suite",
                        desc: "Sound-treated intimate studio with custom ambient color-temperature RGB backlighting, armchairs, and multi-mic acoustic setup.",
                        position: "object-center",
                      },
                      {
                        src: "/images/extracted/raw_p16_1.jpeg",
                        title: "Velvet Talk Show & Interview Lounge",
                        desc: "Parabolic softbox diffuse lighting, velvet armchairs, teleprompter glass, and real-time audio monitors.",
                        position: "object-center",
                      },
                      {
                        src: "/images/portfolio_photos/p12_live_broadcast_atem_switcher.jpg",
                        title: "ATEM Broadcast Switcher Console",
                        desc: "Hardware control surface, multi-view preview screens, and broadcast audio mixer.",
                        position: "object-center",
                      },
                    ].map((space, idx) => (
                      <div
                        key={idx}
                        className="bg-[#1b1915] rounded-md border border-white/10 overflow-hidden cursor-pointer group"
                        onClick={() =>
                          setLightboxImage({
                            src: space.src,
                            title: space.title,
                            subtitle: space.desc,
                          })
                        }
                      >
                        <div className="h-48 overflow-hidden relative bg-black/40">
                          <SmartImage
                            src={space.src}
                            alt={space.title}
                            fallbackTitle={space.title}
                            fallbackCategory="Studio Space"
                            fallbackIcon="camera"
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            style={{
                              objectPosition:
                                (space as any).stylePosition || "center center",
                            }}
                          />
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                        </div>
                        <div className="p-4">
                          <h4 className="font-serif text-xl font-bold text-white mb-1">
                            {space.title}
                          </h4>
                          <p className="text-xs text-[#a9a59c] leading-relaxed">
                            {space.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>

          {/* =========================================================================
            SELECTED WORK & PORTFOLIO GALLERY (With Filter & Lightbox)
        ========================================================================== */}
          <section id="portfolio" className="section-pad bg-[#f7f5f0]">
            <div className="site-container">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
                <div>
                  <span className="section-badge">07 • Curated Portfolio</span>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#141310] mb-3">
                    Communication <em>with Consequence.</em>
                  </h2>
                </div>
                <p className="max-w-md text-sm text-[#5d5951] leading-relaxed">
                  Over 500 documentaries, corporate films, government
                  assignments, and publications executed across India.
                </p>
              </div>

              {/* Modern Segmented Filter Pills */}
              <div className="category-filter-wrap">
                <div className="category-segmented-bar">
                  {portfolioCategories.map((cat) => {
                    const count =
                      cat === "All"
                        ? portfolioItems.length
                        : portfolioItems.filter((i) => i.category === cat)
                            .length
                    const isActive = selectedPortfolioCategory === cat
                    return (
                      <button
                        key={cat}
                        onClick={() => setSelectedPortfolioCategory(cat)}
                        className={`category-tab-btn ${
                          isActive ? "active" : ""
                        }`}
                      >
                        <span>{cat}</span>
                        <span className="category-tab-badge">{count}</span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Portfolio Grid — Pure Editorial Presentation (Un-Boxed & Spacious) */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
                {filteredPortfolio.map((item) => (
                  <article
                    key={item.id}
                    onClick={() =>
                      setLightboxImage({
                        src: item.image,
                        title: item.title,
                        subtitle: `${item.client} • ${item.category}`,
                      })
                    }
                    className="group cursor-pointer flex flex-col justify-between transition-all duration-300"
                  >
                    {/* Clean Framed Media Container */}
                    <div className="w-full aspect-[16/10] overflow-hidden relative rounded-xl border border-[#ded8cb] shadow-sm group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 bg-[#eae5d9]">
                      <SmartImage
                        src={item.image}
                        alt={item.title}
                        fallbackTitle={item.title}
                        fallbackCategory={item.category}
                        fallbackIcon="film"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      <span className="absolute top-3.5 right-3.5 px-3 py-1 rounded-full bg-[#b82329] text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                        {item.category}
                      </span>
                      <span className="absolute bottom-3.5 left-3.5 text-xs text-white/95 font-mono font-bold bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/15">
                        {item.year || "Selected Project"}
                      </span>
                    </div>

                    {/* Flowing Editorial Typography — Free from Enclosing Boxes */}
                    <div className="pt-5 pb-2 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-wider font-bold text-[#b82329] mb-2">
                          {item.client}
                        </div>
                        <h3 className="font-serif text-2xl sm:text-[26px] font-bold text-[#141310] leading-snug mb-2.5 group-hover:text-[#b82329] transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[#524e47] leading-relaxed line-clamp-3 mb-4 font-normal">
                          {item.description}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-[#ded8cb]/70 flex items-center justify-between text-xs sm:text-sm text-[#747169]">
                        <span className="font-bold text-[#b82329] group-hover:underline inline-flex items-center gap-1.5">
                          View Project Details
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <ZoomIn className="w-4 h-4 text-[#9d998f]" />
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================================
            SECTOR EXPERTISE SUMMARY
        ========================================================================== */}
          <section
            id="expertise"
            className="section-pad bg-[#eeeae0] border-t border-[#ded8cb]"
          >
            <div className="site-container">
              <div className="max-w-3xl mb-12">
                <span className="section-badge">08 • Sector Expertise</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#141310] mb-4">
                  Proven Execution. <em>Trusted at Scale.</em>
                </h2>
                <p className="text-base sm:text-lg text-[#5d5951] leading-relaxed">
                  Experienced with approval-led communication, complex
                  institutions, field documentation, and statewide public
                  engagement.
                </p>
              </div>

              {/* Sector Expertise — Expansive Luxury Editorial Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
                {[
                  {
                    number: "01",
                    title: "Government & Welfare",
                    tagline:
                      "Public Communication with Verifiable Grassroots Impact",
                    desc: "Trusted by state departments to film, edit, and deliver authentic citizen voices, welfare scheme progress, and statewide public awareness campaigns.",
                    points: [
                      "Government policy reels & departmental films",
                      "Statewide welfare scheme impact documentation",
                      "Beneficiary testimonials with verified consent",
                      "Election campaign films & public feedback vox-pops",
                      "Multilingual subtitle mastering for official submission",
                    ],
                  },
                  {
                    number: "02",
                    title: "Knowledge Documentation",
                    tagline:
                      "Statecraft, Culture & Heritage Preserved for History",
                    desc: "Crafting museum-grade coffee table books, annual reports, and national handicraft cluster compendiums officially launched by state leadership.",
                    points: [
                      "Premium coffee table books with integrated QR video",
                      "National handicraft cluster archival books (GOI)",
                      "Institutional compendiums & silver jubilee archives",
                      "Tribal heritage, living art & cultural lore documentation",
                      "High-resolution archival print and digital publishing",
                    ],
                  },
                  {
                    number: "03",
                    title: "Visual Production & Studio",
                    tagline:
                      "Broadcast-Grade Craft from Concept to Final Master",
                    desc: "Equipped with in-house cinema rigs, acoustic podcast suites, ATEM live switchers, and cutting-edge AI video synthesis for commercial scale.",
                    points: [
                      "TV commercials (TVCs) & high-conversion digital ads",
                      "Corporate brand films & executive leadership interviews",
                      "Turnkey 4K podcast studio suites with ambient lighting",
                      "Live multi-camera broadcast & switcher operations",
                      "AI-powered video generation, avatars & rapid versioning",
                    ],
                  },
                ].map((area) => (
                  <div
                    key={area.number}
                    className="p-8 sm:p-10 lg:p-12 rounded-2xl bg-white border border-[#ded8cb] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden"
                  >
                    <span className="text-8xl font-serif font-bold text-[#141310]/5 absolute right-4 top-2 pointer-events-none select-none">
                      {area.number}
                    </span>
                    <div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="px-3 py-1 rounded-full bg-[#fbebed] text-[#b82329] text-[11px] font-mono font-bold tracking-widest uppercase">
                          Sector {area.number}
                        </span>
                      </div>

                      <h3 className="font-serif text-3xl sm:text-4xl font-bold text-[#141310] mb-2 group-hover:text-[#b82329] transition-colors leading-tight">
                        {area.title}
                      </h3>

                      <div className="text-xs uppercase tracking-wider font-semibold text-[#b82329] mb-4">
                        {area.tagline}
                      </div>

                      <p className="text-sm text-[#5d5951] leading-relaxed mb-8 font-light">
                        {area.desc}
                      </p>

                      <div className="pt-6 border-t border-[#ded8cb]/80">
                        <span className="text-xs uppercase tracking-widest font-bold text-[#141310] block mb-4">
                          Core Capabilities
                        </span>
                        <ul className="space-y-3">
                          {area.points.map((p, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-3 text-sm text-[#423f39] leading-relaxed font-normal"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#b82329] mt-2 shrink-0" />
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="pt-8 mt-8 border-t border-[#f0ede6]">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#b82329] group-hover:text-[#9e1c21] group-hover:gap-3 transition-all"
                      >
                        <span>Discuss Sector Brief</span>
                        <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================================
            INSPIRATIONAL QUOTE BANNER
        ========================================================================== */}
          <section className="relative py-24 bg-[#141310] text-white text-center overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <img
                src="/images/mockup_assets/studio_silhouette_crew.jpg"
                alt="Film crew"
                className="w-full h-full object-cover filter grayscale"
              />
            </div>
            <div className="site-container relative z-10 max-w-4xl mx-auto px-4">
              <span className="text-xs uppercase tracking-[0.25em] text-[#b82329] font-bold block mb-6">
                The Shlokh Promise
              </span>
              <blockquote className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light leading-tight mb-8">
                “Stories that inform. Films that inspire.
                <br />
                <em className="text-[#b82329]">
                  Communication that creates impact.
                </em>
                ”
              </blockquote>
              <p className="text-xs tracking-widest text-[#a9a59c] uppercase">
                Shlokh Advertising & Branding • Hyderabad & Andhra Pradesh
              </p>
            </div>
          </section>

          {/* =========================================================================
            LIVE SOCIAL MEDIA FEED: BEHIND THE LENS & ON SET (@shlokhentertainments)
        ========================================================================== */}
          <section
            id="social-feed"
            className="section-pad bg-[#141310] text-white border-y border-white/10"
          >
            <div className="site-container">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                  <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-red-950/60 text-[#ff4a50] border border-red-800/50 text-[10px] font-mono uppercase tracking-widest font-bold mb-3">
                    <span className="w-2 h-2 rounded-full bg-[#b82329] animate-pulse" />
                    <span>Live Field Dispatches • Instagram</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                    Behind The Lens <em>& On Location</em>
                  </h2>
                  <p className="text-sm sm:text-base text-[#a9a59c] mt-2 max-w-2xl leading-relaxed">
                    Real-time field updates, showreel teasers, camera rigs, and
                    production stories from our active crews across Telangana,
                    Andhra Pradesh, and India.
                  </p>
                </div>

                {/* Social Handle Action */}
                <div className="flex items-center gap-4 shrink-0">
                  <a
                    href={socialProfile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#b82329] to-[#801418] hover:from-[#d12830] hover:to-[#9e1c21] text-white text-xs font-bold tracking-wide uppercase transition-all shadow-lg shadow-black/40"
                  >
                    <svg
                      className="w-4 h-4"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    <span>Follow {socialProfile.handle}</span>
                    <ExternalLink className="w-3.5 h-3.5 ml-0.5" />
                  </a>
                </div>
              </div>

              {/* Live Grid of Recent Posts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {recentSocialPosts.map((post) => (
                  <a
                    key={post.id}
                    href={post.permalink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card group flex flex-col justify-between"
                  >
                    {/* Card Media Container */}
                    <div className="relative aspect-[4/5] w-full overflow-hidden bg-black/40">
                      <SmartImage
                        src={post.mediaUrl}
                        alt={post.caption}
                        fallbackTitle="Shlokh On Location"
                        fallbackCategory="Social Dispatch"
                        fallbackIcon="film"
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Top Post Type Tag */}
                      <div className="absolute top-3 left-3 z-10">
                        <span className="px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-[9px] uppercase tracking-wider font-mono font-bold text-white border border-white/20">
                          {post.type === "reel"
                            ? "▶ REEL"
                            : post.type === "bts"
                              ? "● BTS SET"
                              : "★ LAUNCH"}
                        </span>
                      </div>

                      {/* Hover Engagement Overlay */}
                      <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-5 text-white z-10">
                        <div className="flex items-center gap-1.5 font-mono text-xs font-bold">
                          <Heart className="w-4 h-4 fill-white" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center gap-1.5 font-mono text-xs font-bold">
                          <MessageCircle className="w-4 h-4 fill-white" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-4 flex flex-col justify-between flex-1 bg-[#181613]">
                      <div>
                        <div className="flex items-center justify-between text-[10px] font-mono text-[#747169] mb-2">
                          <span className="text-[#b82329] font-bold">
                            {socialProfile.handle}
                          </span>
                          <span>{post.dateAgo}</span>
                        </div>
                        <p className="text-xs text-[#ccc7bd] leading-relaxed line-clamp-3 mb-3 group-hover:text-white transition-colors">
                          {post.caption}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-[#747169]">
                        <div className="flex items-center gap-1">
                          <span>Views:</span>
                          <span className="text-white font-bold">
                            {post.views || "12K+"}
                          </span>
                        </div>
                        <span className="text-[#b82329] font-bold group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                          View Post →
                        </span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </section>

          {/* =========================================================================
            CONTACT & INTERACTIVE INQUIRY SECTION
        ========================================================================== */}
          <section id="contact" className="section-pad bg-[#f7f5f0]">
            <div className="site-container">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Contact Info Left Column */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <span className="section-badge">
                      09 • Let’s Work Together
                    </span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#141310] mb-6">
                      Have a story <em>worth telling?</em>
                    </h2>
                    <p className="text-sm sm:text-base text-[#5d5951] leading-relaxed mb-8">
                      Bring us your brief, your campaign challenge, or the start
                      of an idea. Our integrated team of directors, writers, and
                      producers will shape the right way forward.
                    </p>

                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#fbebed] text-[#b82329] flex items-center justify-center shrink-0">
                          <Phone className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-wider font-bold text-[#747169]">
                            Direct Contact
                          </div>
                          <div className="text-sm font-semibold text-[#141310] mt-0.5">
                            <a
                              href="tel:+919505555277"
                              className="hover:text-[#b82329]"
                            >
                              +91 95055 55277
                            </a>{" "}
                            /{" "}
                            <a
                              href="tel:+919666974593"
                              className="hover:text-[#b82329]"
                            >
                              +91 96669 74593
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#fbebed] text-[#b82329] flex items-center justify-center shrink-0">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-wider font-bold text-[#747169]">
                            Email Inquiries
                          </div>
                          <div className="text-sm font-semibold text-[#141310] mt-0.5">
                            <a
                              href="mailto:shlokhentertainments@gmail.com"
                              className="hover:text-[#b82329]"
                            >
                              shlokhentertainments@gmail.com
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#fbebed] text-[#b82329] flex items-center justify-center shrink-0">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-wider font-bold text-[#747169]">
                            Production Hubs
                          </div>
                          <div className="text-xs text-[#5d5951] mt-1 space-y-1">
                            <p>
                              <strong className="text-[#141310]">
                                Telangana:
                              </strong>{" "}
                              #6-3-451, Panjagutta, Hyderabad
                            </p>
                            <p>
                              <strong className="text-[#141310]">
                                Andhra Pradesh:
                              </strong>{" "}
                              #1-3-123/2, SVN Colony, Guntur
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 rounded bg-[#eeeae0] border border-[#ded8cb]">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#141310] mb-1">
                      Coverage & Pricing
                    </div>
                    <p className="text-xs text-[#747169] leading-relaxed">
                      Production services active across Telangana and Andhra
                      Pradesh. Election ad films, public feedback interviews,
                      and beneficiary testimonials are available at affordable
                      project-based packages.
                    </p>
                  </div>
                </div>

                {/* Inquiry Form Right Column */}
                <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-md border border-[#ded8cb] shadow-sm">
                  <h3 className="font-serif text-3xl font-bold text-[#141310] mb-2">
                    Request a Project Quote
                  </h3>
                  <p className="text-xs text-[#747169] mb-8">
                    Select from any of our 14 specialized production services to
                    receive a tailored quotation.
                  </p>

                  {formSubmitted ? (
                    <div className="p-8 rounded bg-[#fbebed] border border-[#b82329]/30 text-center animate-fadeIn">
                      <CheckCircle2 className="w-12 h-12 text-[#b82329] mx-auto mb-3" />
                      <h4 className="font-serif text-2xl font-bold text-[#141310] mb-2">
                        Thank You for Reaching Out!
                      </h4>
                      <p className="text-xs sm:text-sm text-[#5d5951] leading-relaxed max-w-md mx-auto">
                        Your inquiry has been received. Our leadership and
                        creative director will review your project requirements
                        and connect within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#423f39] mb-1.5">
                            Your Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) =>
                              setFormData({ ...formData, name: e.target.value })
                            }
                            placeholder="e.g. Sasi Krishna"
                            className="w-full px-4 py-3 rounded border border-[#ded8cb] bg-[#f7f5f0] text-sm focus:border-[#b82329] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#423f39] mb-1.5">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            required
                            value={formData.phone}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                phone: e.target.value,
                              })
                            }
                            placeholder="+91 95055 55277"
                            className="w-full px-4 py-3 rounded border border-[#ded8cb] bg-[#f7f5f0] text-sm focus:border-[#b82329] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#423f39] mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                email: e.target.value,
                              })
                            }
                            placeholder="name@organization.com"
                            className="w-full px-4 py-3 rounded border border-[#ded8cb] bg-[#f7f5f0] text-sm focus:border-[#b82329] focus:bg-white focus:outline-none transition-colors"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-bold uppercase tracking-wider text-[#423f39] mb-1.5">
                            Production Service *
                          </label>
                          <select
                            value={formData.service}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                service: e.target.value,
                              })
                            }
                            className="w-full px-4 py-3 rounded border border-[#ded8cb] bg-[#f7f5f0] text-xs font-medium focus:border-[#b82329] focus:bg-white focus:outline-none transition-colors"
                          >
                            {servicesData.map((s) => (
                              <option key={s.number} value={s.title}>
                                {s.number} • {s.title}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-[#423f39] mb-1.5">
                          Project Details & Timeline
                        </label>
                        <textarea
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              message: e.target.value,
                            })
                          }
                          placeholder="Tell us about your campaign goals, shoot locations, duration, language versions, or deadlines..."
                          className="w-full px-4 py-3 rounded border border-[#ded8cb] bg-[#f7f5f0] text-sm focus:border-[#b82329] focus:bg-white focus:outline-none transition-colors"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-primary w-full py-3.5 text-xs"
                      >
                        Submit Project Inquiry
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </section>
        </main>
      )}

      {/* =========================================================================
          SITE FOOTER
      ========================================================================== */}
      <footer
        className="bg-[#141310] text-white pt-16 pb-12 border-t border-white/10"
        role="contentinfo"
      >
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <img
                src="/images/shlokh_logo_light_header.png"
                alt="Shlokh Entertainments"
                className="h-10 w-auto max-w-[220px] object-contain mb-4 block"
                style={{ height: "40px", width: "auto" }}
              />
              <p className="text-xs text-[#a9a59c] leading-relaxed mb-4">
                Films, Photography, Visual Communication. Combining artificial
                intelligence with seasoned cinematic craft for a better
                tomorrow.
              </p>
              <div className="text-xs text-[#b82329] font-semibold">
                Since 20+ Years • Hyderabad & AP
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold mb-4 text-white">
                Production Capabilities
              </h4>
              <ul className="space-y-2 text-xs text-[#a9a59c]">
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    01 AI Video Production & Ad Films
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    02 Corporate Video Production
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    03 Ad Film Production
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    04 Podcast Production Suites
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    08 Documentary Film Production
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    12 Election Campaign Videos
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="hover:text-white transition-colors"
                  >
                    14 Beneficiary Testimonial Videos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold mb-4 text-white">
                Regional Hubs
              </h4>
              <div className="space-y-3 text-xs text-[#a9a59c]">
                <div>
                  <strong className="text-white block font-medium">
                    Telangana (Corporate Hub)
                  </strong>
                  #6-3-451, Panjagutta, Hyderabad
                </div>
                <div>
                  <strong className="text-white block font-medium">
                    Andhra Pradesh (Branch Office)
                  </strong>
                  #1-3-123/2, SVN Colony, Guntur
                </div>
                <div className="pt-2 text-white">
                  Direct:{" "}
                  <a
                    href="tel:+919505555277"
                    className="text-[#b82329] font-bold"
                  >
                    +91 95055 55277
                  </a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold mb-4 text-white">
                Digital & Social Channels
              </h4>
              <p className="text-xs text-[#a9a59c] leading-relaxed mb-4">
                Follow Shlokh Advertising on Facebook, Instagram, YouTube, and
                LinkedIn for latest showreels and campaign premieres.
              </p>
              <div className="flex items-center gap-3">
                {["Facebook", "Instagram", "YouTube", "LinkedIn"].map(
                  (network) => (
                    <a
                      key={network}
                      href="https://www.shlokhadvertising.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-2.5 py-1 rounded bg-white/10 hover:bg-[#b82329] text-[10px] uppercase font-bold text-white transition-colors"
                    >
                      {network}
                    </a>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#747169] gap-4">
            <div>
              © 2026 Shlokh Entertainments & Advertising. All rights reserved.
            </div>
            <div className="flex items-center gap-6">
              <span>Hyderabad</span>
              <span>Andhra Pradesh</span>
              <span>Across India</span>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
          MOBILE FLOATING QUICK ACTION BAR
      ========================================================================== */}
      <div className="mobile-action-bar">
        <a
          href="tel:+919505555277"
          aria-label="Call Shlokh Production Desk"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 text-white flex items-center justify-center transition-all shrink-0"
        >
          <Phone className="w-4 h-4 text-[#e0434b]" />
        </a>
        <a
          href="https://wa.me/919505555277"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="w-10 h-10 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 active:scale-90 text-emerald-400 flex items-center justify-center transition-all shrink-0"
        >
          <MessageSquare className="w-4 h-4" />
        </a>
        <a
          href="#services"
          aria-label="View 14 Services"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 active:scale-90 text-white flex items-center justify-center transition-all shrink-0"
        >
          <Film className="w-4 h-4 text-white/80" />
        </a>
        <button
          onClick={() => setQuoteModalOpen(true)}
          className="flex-1 h-10 rounded-full bg-[#b82329] hover:bg-[#9e1c21] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md active:scale-95 transition-all"
        >
          <span>Get Quote</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* =========================================================================
          VIDEO SHOWREEL MODAL
      ========================================================================== */}
      {videoModalOpen && (
        <div className="modal-overlay" onClick={() => setVideoModalOpen(false)}>
          <div
            className="modal-content p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#b82329] font-bold block">
                  Cinematic Screening
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  {videoModalTitle}
                </h3>
              </div>
              <button
                onClick={() => setVideoModalOpen(false)}
                className="p-2 text-white/60 hover:text-white rounded-full bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player Box */}
            <div className="w-full aspect-video bg-black rounded overflow-hidden relative mb-6 shadow-2xl flex items-center justify-center">
              <img
                src="/images/mockup_assets/featured_culture_in_motion.jpg"
                alt="Showreel Thumbnail"
                className="w-full h-full object-cover filter brightness-75"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#b82329] flex items-center justify-center text-white mb-3 shadow-lg hover:scale-110 transition-transform">
                  <Play className="w-6 h-6 fill-current ml-1" />
                </div>
                <h4 className="font-serif text-2xl text-white font-bold mb-1">
                  Master Production Reel
                </h4>
                <p className="text-xs text-[#ccc7bd] max-w-md">
                  Combining 20+ years of documentary field stories, commercial
                  ad films, and AI-accelerated production.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
              <span className="text-xs text-[#a9a59c]">
                Produced by Shlokh Entertainments • Hyderabad & Andhra Pradesh
              </span>
              <button
                onClick={() => {
                  setVideoModalOpen(false)
                  setQuoteModalOpen(true)
                }}
                className="btn-primary text-xs"
              >
                Commission Similar Film
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          HIGH-RESOLUTION LIGHTBOX MODAL
      ========================================================================== */}
      {lightboxImage && (
        <div className="modal-overlay" onClick={() => setLightboxImage(null)}>
          <div
            className="modal-content max-w-4xl p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-serif text-2xl font-bold text-white">
                  {lightboxImage.title}
                </h3>
                {lightboxImage.subtitle && (
                  <p className="text-xs text-[#b82329] font-medium mt-0.5">
                    {lightboxImage.subtitle}
                  </p>
                )}
              </div>
              <button
                onClick={() => setLightboxImage(null)}
                className="p-2 text-white/60 hover:text-white rounded-full bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="w-full max-h-[70vh] bg-black rounded overflow-hidden flex items-center justify-center mb-4">
              <SmartImage
                src={lightboxImage.src}
                alt={lightboxImage.title}
                fallbackTitle={lightboxImage.title}
                fallbackCategory={lightboxImage.subtitle}
                fallbackIcon="film"
                className="max-h-[68vh] w-auto max-w-full object-contain mx-auto"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-[#a9a59c] pt-2 border-t border-white/10">
              <span>High-Resolution Production Archive • Shlokh Portfolio</span>
              <button
                onClick={() => setLightboxImage(null)}
                className="hover:text-white underline"
              >
                Close Viewer (Esc)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SERVICE DETAIL & SCOPE MODAL
      ========================================================================== */}
      {selectedServiceModal && (
        <div
          className="modal-overlay"
          onClick={() => setSelectedServiceModal(null)}
        >
          <div
            className="modal-content max-w-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-1 rounded bg-[#b82329] text-white text-xs font-mono font-bold">
                  {selectedServiceModal.number}
                </span>
                <span className="text-xs uppercase tracking-widest text-[#a9a59c] font-semibold">
                  {selectedServiceModal.category}
                </span>
              </div>
              <button
                onClick={() => setSelectedServiceModal(null)}
                className="p-2 text-white/60 hover:text-white rounded-full bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="font-serif text-3xl font-bold text-white mb-4">
              {selectedServiceModal.title}
            </h3>

            <div className="w-full h-56 rounded overflow-hidden mb-6 bg-black">
              <SmartImage
                src={selectedServiceModal.image}
                alt={selectedServiceModal.title}
                fallbackTitle={selectedServiceModal.title}
                fallbackCategory={selectedServiceModal.category}
                fallbackIcon="film"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="mb-6">
              <h4 className="text-xs uppercase tracking-wider font-bold text-[#b82329] mb-2">
                Executive Service Description
              </h4>
              <p className="text-xs sm:text-sm text-[#ccc7bd] leading-relaxed mb-4">
                {selectedServiceModal.description}
              </p>
              <p className="text-xs sm:text-sm text-[#a9a59c] leading-relaxed italic">
                {selectedServiceModal.intro}
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-xs uppercase tracking-wider font-bold text-white mb-3">
                Detailed Scope of Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedServiceModal.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded bg-[#1f1d19] border border-white/5 flex items-start gap-2.5 text-xs text-[#ccc7bd]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#b82329] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <span className="text-xs text-[#a9a59c]">
                Custom quotes available based on project duration & location.
              </span>
              <button
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    service: selectedServiceModal.title,
                  }))
                  setSelectedServiceModal(null)
                  setQuoteModalOpen(true)
                }}
                className="btn-primary text-xs"
              >
                Book This Service
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          PROJECT INQUIRY / QUOTE MODAL
      ========================================================================== */}
      {quoteModalOpen && (
        <div className="modal-overlay" onClick={() => setQuoteModalOpen(false)}>
          <div
            className="modal-content max-w-xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#b82329] font-bold block">
                  Customized Quotation
                </span>
                <h3 className="font-serif text-3xl font-bold text-white">
                  Start Your Project
                </h3>
              </div>
              <button
                onClick={() => setQuoteModalOpen(false)}
                className="p-2 text-white/60 hover:text-white rounded-full bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-[#a9a59c] mb-6">
              Our leadership reviews every brief personally. Tell us about your
              project to receive tailored pricing and timeline recommendations.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded bg-[#b82329]/20 border border-[#b82329] text-center">
                <CheckCircle2 className="w-10 h-10 text-[#b82329] mx-auto mb-2" />
                <h4 className="font-serif text-2xl font-bold text-white mb-1">
                  Inquiry Submitted!
                </h4>
                <p className="text-xs text-[#ccc7bd]">
                  We will contact you shortly via phone and email.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#ccc7bd] mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded border border-white/15 bg-white/5 text-sm text-white focus:border-[#b82329] focus:outline-none"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#ccc7bd] mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded border border-white/15 bg-white/5 text-sm text-white focus:border-[#b82329] focus:outline-none"
                      placeholder="+91 95055 55277"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-[#ccc7bd] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 rounded border border-white/15 bg-white/5 text-sm text-white focus:border-[#b82329] focus:outline-none"
                      placeholder="name@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#ccc7bd] mb-1">
                    Selected Service
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) =>
                      setFormData({ ...formData, service: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded border border-white/15 bg-[#1f1d19] text-xs text-white focus:border-[#b82329] focus:outline-none"
                  >
                    {servicesData.map((s) => (
                      <option key={s.number} value={s.title}>
                        {s.number} • {s.title}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-[#ccc7bd] mb-1">
                    Project Message
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 rounded border border-white/15 bg-white/5 text-sm text-white focus:border-[#b82329] focus:outline-none"
                    placeholder="Tell us about the project duration, shoot location, or specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3 text-xs"
                >
                  Request Customized Quote
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* =========================================================================
          PHOTOGRAPHY HIGH-RES LIGHTBOX MODAL
      ========================================================================== */}
      {photoLightbox && (
        <div
          className="modal-overlay z-50 p-4 sm:p-8"
          onClick={() => setPhotoLightbox(null)}
        >
          <div
            className="modal-content max-w-5xl w-full bg-[#0c0b0a] border border-white/20 rounded-xl overflow-hidden flex flex-col lg:flex-row max-h-[92vh] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Left: Full Frame Image Display */}
            <div className="lg:w-7/12 relative bg-black flex items-center justify-center p-2 sm:p-6 overflow-hidden">
              <img
                src={photoLightbox.image}
                alt={photoLightbox.title}
                className="max-h-[50vh] lg:max-h-[80vh] w-auto max-w-full object-contain rounded"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded bg-black/80 backdrop-blur-md text-[10px] uppercase font-mono font-bold tracking-widest text-white border border-white/20">
                  {photoLightbox.category}
                </span>
              </div>
            </div>

            {/* Right: Technical EXIF & Curatorial Narrative */}
            <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#141310] border-t lg:border-t-0 lg:border-l border-white/10 text-white">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#b82329] font-bold">
                    Official Archival Record
                  </span>
                  <button
                    onClick={() => setPhotoLightbox(null)}
                    className="p-1.5 text-white/60 hover:text-white rounded-full bg-white/10 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="text-[11px] font-mono text-[#747169] mb-1">
                  {photoLightbox.location} • {photoLightbox.year}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3 leading-tight">
                  {photoLightbox.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#ccc7bd] leading-relaxed mb-6 font-light">
                  {photoLightbox.story}
                </p>

                {/* Comprehensive Camera Exposure Telemetry Console */}
                <div className="p-4 rounded-lg bg-[#181613] border border-white/10 space-y-3 mb-6">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#b82329] font-bold">
                      Exposure & Optical Telemetry
                    </span>
                    <span className="text-[10px] font-mono text-amber-400 font-bold">
                      {photoLightbox.values.colorTemp}
                    </span>
                  </div>

                  {/* 4-Dial Exposure HUD */}
                  <div className="grid grid-cols-4 gap-2 text-center font-mono">
                    <div className="p-2 rounded bg-black/50 border border-white/5">
                      <div className="text-[9px] uppercase text-[#747169]">
                        Focal
                      </div>
                      <div className="text-xs font-bold text-white mt-0.5">
                        {photoLightbox.values.focalLength}
                      </div>
                    </div>
                    <div className="p-2 rounded bg-black/50 border border-white/5">
                      <div className="text-[9px] uppercase text-[#747169]">
                        Aperture
                      </div>
                      <div className="text-xs font-bold text-[#ff4a50] mt-0.5">
                        {photoLightbox.values.aperture}
                      </div>
                    </div>
                    <div className="p-2 rounded bg-black/50 border border-white/5">
                      <div className="text-[9px] uppercase text-[#747169]">
                        Shutter
                      </div>
                      <div className="text-xs font-bold text-white mt-0.5">
                        {photoLightbox.values.shutterSpeed}
                      </div>
                    </div>
                    <div className="p-2 rounded bg-black/50 border border-white/5">
                      <div className="text-[9px] uppercase text-[#747169]">
                        ISO
                      </div>
                      <div className="text-xs font-bold text-amber-400 mt-0.5">
                        {photoLightbox.values.iso}
                      </div>
                    </div>
                  </div>

                  {/* Gear & Lighting Specs */}
                  <div className="space-y-2 text-xs font-mono pt-1">
                    <div className="flex justify-between items-center text-[#747169]">
                      <span>Camera Body:</span>
                      <span className="text-white font-semibold text-right">
                        {photoLightbox.values.cameraBody}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[#747169] border-t border-white/5 pt-1.5">
                      <span>Cinema Lens:</span>
                      <span className="text-white font-semibold text-right">
                        {photoLightbox.values.lensModel}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[#747169] border-t border-white/5 pt-1.5">
                      <span>Lighting Setup:</span>
                      <span className="text-[#ccc7bd] font-medium text-right">
                        {photoLightbox.values.lighting}
                      </span>
                    </div>
                    <div className="flex justify-between items-center text-[#747169] border-t border-white/5 pt-1.5">
                      <span>Commissioned By:</span>
                      <span className="text-[#ff6b6b] font-semibold text-right">
                        {photoLightbox.client}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {photoLightbox.tags.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-[#a9a59c]"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => {
                    setPhotoLightbox(null)
                    setFormData((prev) => ({
                      ...prev,
                      service: "Editorial & Archival Photography",
                      message: `Inquiring regarding photography rights / commission for: ${photoLightbox.title}`,
                    }))
                    setQuoteModalOpen(true)
                  }}
                  className="btn-primary w-full text-xs justify-center"
                >
                  Commission / Inquire About This Work
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
