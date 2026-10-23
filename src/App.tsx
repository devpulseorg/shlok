import React, { useState, useEffect, useMemo } from 'react'
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
  MessageSquare
} from 'lucide-react'

import { servicesData, businessInfo, type ServiceItem } from './data/servicesData'
import { portfolioItems, craftClustersList, type PortfolioItem } from './data/portfolioData'
import { studioTeam, equipmentInventory, productionProcessSteps } from './data/studioData'

export default function App() {
  // Navigation & UI state
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Modals state
  const [videoModalOpen, setVideoModalOpen] = useState(false)
  const [videoModalTitle, setVideoModalTitle] = useState('Shlokh Entertainments — Visual Showreel')
  const [lightboxImage, setLightboxImage] = useState<{ src: string; title: string; subtitle?: string } | null>(null)
  const [selectedServiceModal, setSelectedServiceModal] = useState<ServiceItem | null>(null)
  const [quoteModalOpen, setQuoteModalOpen] = useState(false)

  // Filters state
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>('All')
  const [selectedPortfolioCategory, setSelectedPortfolioCategory] = useState<string>('All')
  const [activeStudioTab, setActiveStudioTab] = useState<'people' | 'equipment' | 'process' | 'space'>('people')

  // Featured film slider state
  const [featuredFilmIndex, setFeaturedFilmIndex] = useState(0)

  // Contact form state
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'AI Video Production and AI Ad Filmmaking',
    budget: 'Flexible / To Be Discussed',
    message: '',
  })

  // Scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close modals on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setVideoModalOpen(false)
        setLightboxImage(null)
        setSelectedServiceModal(null)
        setQuoteModalOpen(false)
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Filtered services
  const filteredServices = useMemo(() => {
    if (selectedServiceCategory === 'All') return servicesData
    return servicesData.filter((s) => s.category === selectedServiceCategory)
  }, [selectedServiceCategory])

  // Filtered portfolio
  const filteredPortfolio = useMemo(() => {
    if (selectedPortfolioCategory === 'All') return portfolioItems
    return portfolioItems.filter((p) => p.category === selectedPortfolioCategory)
  }, [selectedPortfolioCategory])

  // Handle contact form submit
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => {
      setFormSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: 'AI Video Production and AI Ad Filmmaking',
        budget: 'Flexible / To Be Discussed',
        message: '',
      })
      setQuoteModalOpen(false)
    }, 4000)
  }

  const featuredFilms = [
    {
      title: 'Culture in Motion',
      category: 'Documentary Film & Heritage',
      tagline: 'A visual journey through people, traditions and timeless places.',
      description: 'Documenting the rich cultural fabric, living temples, artisan communities, and spiritual gatherings of India.',
      image: '/images/mockup_assets/featured_culture_in_motion.jpg',
      duration: '45 mins • 4K Cinema',
    },
    {
      title: 'Beneficiary Voices: Real Impact',
      category: 'Government & Public Welfare',
      tagline: 'Capturing authentic grassroots voices across 100+ statewide campaigns.',
      description: 'Direct field documentation of rural families, women self-help groups, farmers, and students transformed by welfare initiatives.',
      image: '/images/portfolio_photos/p08_field_temple_shoot.jpg',
      duration: '100+ Mandals Covered',
    },
    {
      title: '10 Craft Clusters of India',
      category: 'National Heritage & Ministry of Textiles',
      tagline: 'Preserving heritage and empowering artisans across 6 states.',
      description: 'Partnering with the Government of India Handicrafts Department to document Pochampally, Kutch, Kondapalli, Channapatna, Sanganer, and more.',
      image: '/images/portfolio_photos/p10_weaves_andhra_book.jpg',
      duration: 'National Archive Series',
    },
  ]

  const serviceCategories = ['All', 'AI & Emerging', 'Corporate & Commercial', 'Government & Public', 'Studio & Audio', 'Post-Production']
  const portfolioCategories = ['All', 'Publications & Heritage', 'Government & Public', 'Studio & Podcasts', 'Corporate & Commercial']

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#141310] flex flex-col selection:bg-[#b82329] selection:text-white">
      {/* =========================================================================
          SITE HEADER & NAVIGATION
      ========================================================================== */}
      <header
        className={`site-header ${isScrolled ? 'scrolled' : 'transparent'}`}
        role="banner"
      >
        <div className="site-container h-full">
          <div className="header-inner">
            {/* Logo */}
            <a href="#hero" className="logo-wrapper focus:outline-none" aria-label="Shlokh Entertainments Home">
              <img
                src={isScrolled ? '/images/shlokh_logo_transparent.png' : '/images/shlokh_logo_light_header.png'}
                alt="Shlokh Entertainments"
                className="logo-img"
              />
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
              <a href="#services" className="nav-link">Capabilities (14)</a>
              <a href="#featured-film" className="nav-link">Featured Film</a>
              <a href="#publications" className="nav-link">Publications</a>
              <a href="#impact" className="nav-link">Field Impact</a>
              <a href="#studio" className="nav-link">The Studio & Gear</a>
              <a href="#portfolio" className="nav-link">Selected Work</a>
              <a href="#contact" className="nav-link">Contact</a>
            </nav>

            {/* Header Right Actions */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="tel:+919505555277"
                className="hidden xl:inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-[#d5d0c5] hover:text-white transition-colors"
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
              className="lg:hidden p-2 text-white hover:text-[#b82329] transition-colors focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="flex justify-between items-center mb-8 pb-4 border-b border-white/10">
          <img src="/images/shlokh_logo_light_header.png" alt="Shlokh Logo" className="h-8 w-auto" />
          <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
            <X className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col gap-2">
          {[
            { label: 'Capabilities (14 Services)', href: '#services' },
            { label: 'Featured Film', href: '#featured-film' },
            { label: 'Heritage Publications', href: '#publications' },
            { label: 'Field Impact Stories', href: '#impact' },
            { label: 'The Studio & Gear', href: '#studio' },
            { label: 'Selected Work', href: '#portfolio' },
            { label: 'Sector Expertise', href: '#expertise' },
            { label: 'Contact Us', href: '#contact' },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="mobile-nav-link text-xl py-3 border-b border-white/10 text-white hover:text-[#b82329] transition-colors flex justify-between items-center"
            >
              <span>{item.label}</span>
              <ChevronRight className="w-5 h-5 text-white/40" />
            </a>
          ))}
        </div>
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4 text-sm text-[#b8b3a7]">
          <a href="tel:+919505555277" className="flex items-center gap-3 text-white">
            <Phone className="w-4 h-4 text-[#b82329]" />
            +91 95055 55277 / +91 96669 74593
          </a>
          <a href="mailto:shlokhentertainments@gmail.com" className="flex items-center gap-3 text-white">
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

      <main className="flex-1">
        {/* =========================================================================
            HERO SECTION
        ========================================================================== */}
        <section id="hero" className="hero-section">
          <div className="hero-bg-overlay" />
          <div className="hero-image-wrapper">
            <img
              src="/images/mockup_assets/hero_cinema_shoot.jpg"
              alt="Cinematographer shooting with camera rig on location"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="site-container relative z-10 w-full">
            <div className="max-w-3xl py-12 sm:py-16 lg:py-24">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[10px] sm:text-xs uppercase tracking-widest text-[#d5d0c5] mb-5 font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#b82329] animate-pulse shrink-0" />
                <span className="hidden sm:inline">AI Video Production • Ad Films • Corporate Video • Documentaries</span>
                <span className="sm:hidden">AI Video • Ad Films • Documentaries</span>
              </div>

              <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-serif leading-[0.94] tracking-tight mb-5">
                Stories deserve
                <br />
                to be <em>seen.</em>
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-[#ccc7bd] leading-relaxed max-w-xl font-light mb-8">
                Pioneering AI-driven video synthesis and two decades of human cinematic storytelling for brands, institutions, and statecraft across Telangana & Andhra Pradesh.
              </p>

              <div className="flex flex-wrap items-center gap-3.5 sm:gap-5 mb-10">
                <button
                  onClick={() => {
                    setVideoModalTitle('Shlokh Entertainments — 2026 Master Showreel')
                    setVideoModalOpen(true)
                  }}
                  className="btn-primary group"
                >
                  <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <Play className="w-3 h-3 fill-current ml-0.5" />
                  </span>
                  Watch Showreel
                </button>

                <a href="#services" className="btn-outline-white">
                  Explore 14 Capabilities
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Location and Heritage Badges */}
              <div className="pt-5 border-t border-white/15 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] sm:text-xs uppercase tracking-wider text-[#a9a59c]">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#b82329]" />
                  <span>Hyderabad & Guntur</span>
                </div>
                <span className="text-white/25 hidden sm:inline">•</span>
                <div className="flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#b82329]" />
                  <span>20+ Years Leadership</span>
                </div>
                <span className="text-white/25 hidden sm:inline">•</span>
                <span className="text-white/80 font-medium">500+ Films Produced</span>
              </div>
            </div>
          </div>

          {/* Artistic Script Overlay */}
          <div className="hidden xl:block absolute right-12 bottom-16 z-10 pointer-events-none text-right">
            <span className="font-script text-4xl lg:text-5xl text-white/40 block leading-tight">
              Ideas • People • Places • Impact
            </span>
            <span className="text-[10px] tracking-[0.25em] text-white/50 uppercase mt-1 block">
              Shlokh Entertainments
            </span>
          </div>
        </section>

        {/* =========================================================================
            KEY STATS & TRUST STRIP
        ========================================================================== */}
        <section className="bg-[#b82329] text-white border-y border-[#9e1c21]" aria-label="Company Metrics">
          <div className="site-container">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
              {businessInfo.stats.map((stat, idx) => (
                <div key={idx} className="p-6 lg:p-8 flex flex-col justify-center text-center sm:text-left">
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
        <section id="featured-film" className="section-pad bg-[#eeeae0] border-b border-[#ded8cb]">
          <div className="site-container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <span className="section-badge">02 • Featured Documentary</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#141310]">
                  Culture <em>in Motion.</em>
                </h2>
              </div>
              <p className="max-w-md text-sm text-[#5d5951] leading-relaxed">
                A visual journey through sacred spaces, living traditions, and timeless artisan lineages. Directed and produced with documentary sensitivity and cinema craft.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Main Video Hero Card */}
              <div className="lg:col-span-8 bg-[#141310] rounded-md overflow-hidden relative group min-h-[420px] lg:min-h-[500px] flex flex-col justify-end p-6 sm:p-10 text-white shadow-xl">
                <img
                  src={featuredFilms[featuredFilmIndex].image}
                  alt={featuredFilms[featuredFilmIndex].title}
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
                        setVideoModalTitle(featuredFilms[featuredFilmIndex].title)
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
                  Documentary Series Selector ({featuredFilmIndex + 1} / {featuredFilms.length})
                </div>

                <div className="flex flex-col gap-3.5">
                  {featuredFilms.map((film, idx) => (
                    <button
                      key={idx}
                      onClick={() => setFeaturedFilmIndex(idx)}
                      className={`text-left p-5 rounded-xl border transition-all duration-200 flex items-center gap-4 ${
                        featuredFilmIndex === idx
                          ? 'bg-[#ffffff] border-[#b82329] shadow-lg scale-[1.01]'
                          : 'bg-[#ffffff]/80 border-[#ded8cb] hover:bg-white hover:shadow-md'
                      }`}
                    >
                      <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0 relative bg-black shadow-sm">
                        <img src={film.image} alt={film.title} className="w-full h-full object-cover" />
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
                    Our documentaries have been screened at prestigious state ceremonies, ministerial summits, and preserved for national craft archives.
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
                <span className="section-badge">03 • Complete Production Services</span>
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
                  const count = cat === 'All' 
                    ? servicesData.length 
                    : servicesData.filter((s) => s.category === cat).length
                  const isActive = selectedServiceCategory === cat
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedServiceCategory(cat)}
                      className={`category-tab-btn ${isActive ? 'active' : ''}`}
                    >
                      <span>{cat}</span>
                      <span className="category-tab-badge">
                        {count}
                      </span>
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
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30" />
                    
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
                          setFormData((prev) => ({ ...prev, service: service.title }))
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
                  Based in Punjagutta, Hyderabad, with active production teams covering Telangana and Andhra Pradesh. Quotes are tailored to your script, duration, shoot location, crew requirements, and post-production scope. Affordable rates for election campaigns, voter feedback interviews, and grassroots beneficiary testimonials.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 shrink-0 w-full lg:w-auto">
                <a href="tel:+919505555277" className="btn-outline-white justify-center text-center py-3.5 px-6">
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
        <section id="publications" className="section-pad bg-[#eeeae0] border-y border-[#ded8cb]">
          <div className="site-container">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
              <div className="max-w-3xl">
                <span className="section-badge">04 • Prestigious Publications</span>
                <h2 className="text-4xl sm:text-6xl lg:text-7xl text-[#141310] tracking-tight">
                  Crafting Stories. <em>Creating Impact.</em>
                </h2>
                <p className="text-base sm:text-lg text-[#5d5951] leading-relaxed mt-4 font-light">
                  Premium Coffee Table Books, QR-video integrated publications, and state heritage documentation officially launched by Hon’ble Chief Minister Sri Nara Chandrababu Naidu Garu.
                </p>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#ded8cb] text-xs font-semibold text-[#141310] shadow-sm shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#b82329]" />
                Official State Government Releases
              </div>
            </div>

            {/* Featured Books Grid — Fluid & Expansive */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-16">
              {[
                {
                  title: 'WEAVES ANDHRA PRADESH',
                  sub: 'Coffee Table Book',
                  badge: "Launched by Hon'ble CM Sri Nara Chandrababu Naidu",
                  image: '/images/portfolio_photos/p10_weaves_andhra_book.jpg',
                  launchImg: '/images/portfolio_photos/p10_cm_launching_weaves_book.jpg',
                  desc: "A tribute to Andhra Pradesh's timeless weaving traditions. Showcases the legacy, diversity, and excellence of handloom weaves across the state along with the stories of artisans behind them.",
                },
                {
                  title: 'MEPMA — PRERANA SAKHI',
                  sub: 'Coffee Table Book',
                  badge: "Launched by Hon'ble CM Sri Nara Chandrababu Naidu",
                  image: '/images/portfolio_photos/p10_mepma_prerana_sakhi_book.jpg',
                  launchImg: '/images/portfolio_photos/p10_cm_launching_mepma_book.jpg',
                  desc: 'A celebration of women empowerment and the incredible journey of Self Help Groups under MEPMA, capturing inspiring stories of rural women driving community development.',
                },
                {
                  title: 'SAVARA TRIBAL ART',
                  sub: 'Coffee Table Book & Branding',
                  badge: 'Tribal Welfare & APITCO',
                  image: '/images/portfolio_photos/p10_savara_tribal_art_book.jpg',
                  desc: 'Comprehensive visual research and branding preserving the sacred indigenous murals, art practices, and cultural lore of the Savara tribe.',
                },
                {
                  title: '25 YEARS OF SERP',
                  sub: 'Coffee Table Book with QR Code Videos',
                  badge: 'Interactive QR-Code Media',
                  image: '/images/portfolio_photos/p10_serp_25_years_qr_book.jpg',
                  desc: 'A milestone publication celebrating 25 years of poverty elimination. Features embedded QR codes on pages allowing readers to scan and watch documentary video stories of beneficiaries.',
                },
                {
                  title: 'VIZAG — PIXELS & PANORAMAS',
                  sub: 'Coffee Table Book',
                  badge: 'VMRDA Tourism Collection',
                  image: '/images/portfolio_photos/p10_vizag_pixels_panoramas_book.jpg',
                  desc: 'Featuring VMRDA parks, submarine museums, panoramic coastal aerials, QR-enabled immersive experiences, and the visual essence of Visakhapatnam.',
                },
                {
                  title: 'GOVT OF INDIA HANDICRAFTS',
                  sub: '10 Clusters Heritage Documentation',
                  badge: 'Ministry of Textiles, GOI',
                  image: '/images/portfolio_photos/p10_cm_launching_mepma_book.jpg',
                  desc: 'Branding, documenting, and publishing the living legacy of 10 major artisan clusters across Gujarat, Telangana, Andhra Pradesh, Karnataka, Rajasthan, and UP.',
                },
              ].map((book, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#ded8cb] overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 group shadow-sm"
                >
                  <div>
                    {/* Archival Showcase Stage */}
                    <div
                      className="w-full h-72 sm:h-80 md:h-96 bg-gradient-to-br from-[#faf8f5] to-[#ece5d8] p-6 sm:p-8 flex items-center justify-center relative cursor-pointer border-b border-[#ded8cb]/60 overflow-hidden"
                      onClick={() => setLightboxImage({ src: book.image, title: book.title, subtitle: book.sub })}
                    >
                      <img
                        src={book.image}
                        alt={book.title}
                        className="max-h-full max-w-full object-contain filter drop-shadow-[0_16px_32px_rgba(0,0,0,0.22)] group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white text-xs uppercase font-bold tracking-widest gap-2">
                        <ZoomIn className="w-4 h-4" />
                        Click to Zoom Archive
                      </div>
                    </div>

                    {/* Expanded, Spacious White Box Content */}
                    <div className="p-7 sm:p-9 lg:p-10">
                      <div className="inline-block px-3.5 py-1.5 rounded-full bg-[#fbebed] border border-[#b82329]/20 text-[#b82329] text-[11px] font-bold uppercase tracking-wider mb-4">
                        {book.badge}
                      </div>

                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141310] leading-tight group-hover:text-[#b82329] transition-colors mb-2">
                        {book.title}
                      </h3>
                      <div className="text-xs sm:text-sm uppercase tracking-wider font-semibold text-[#747169] mb-4">
                        {book.sub}
                      </div>

                      <p className="text-sm sm:text-base text-[#4e4a42] leading-relaxed font-light">
                        {book.desc}
                      </p>
                    </div>
                  </div>

                  {book.launchImg && (
                    <div className="p-7 sm:p-9 lg:p-10 pt-0">
                      <div
                        className="p-4 sm:p-5 rounded-xl bg-[#faf8f5] border border-[#ded8cb] flex items-center gap-4 cursor-pointer group/launch hover:bg-[#eeeae0] hover:border-[#b82329]/40 transition-all shadow-sm"
                        onClick={() => setLightboxImage({ src: book.launchImg!, title: `${book.title} — Official Launch`, subtitle: book.badge })}
                      >
                        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden shrink-0 bg-black border border-white/20 shadow-md">
                          <img src={book.launchImg} alt="Book Launch Ceremony" className="w-full h-full object-cover group-hover/launch:scale-110 transition-transform duration-300" />
                        </div>
                        <div className="text-xs sm:text-sm text-[#141310] font-medium leading-relaxed group-hover/launch:text-[#b82329] transition-colors flex-1">
                          <span className="font-bold block text-[11px] sm:text-xs uppercase tracking-wider text-[#b82329] mb-0.5">
                            Official Launch Ceremony
                          </span>
                          Chief Minister Sri Nara Chandrababu Naidu Garu
                          <span className="text-[11px] block text-[#747169] mt-0.5 font-normal">Click to view full photograph & ceremonial launch</span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#747169] group-hover/launch:translate-x-1 transition-transform shrink-0" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* 10 Clusters of India — Expansive National Artisan Showcase */}
            <div className="p-5 sm:p-8 lg:p-12 rounded-xl bg-white border border-[#ded8cb] shadow-sm">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-6 mb-6 sm:mb-8 pb-6 border-b border-[#eeeae0]">
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#b82329] flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-[#b82329] animate-pulse" />
                    National Footprint • Ministry of Textiles, GOI
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-serif text-[#141310]">
                    10 Clusters. Countless Stories. One Heritage.
                  </h3>
                  <p className="text-xs sm:text-sm text-[#747169] mt-2 max-w-2xl font-light">
                    Comprehensive visual documentation, branding, and publication of India’s living craft traditions across Gujarat, Telangana, Andhra Pradesh, Karnataka, Rajasthan, and Uttar Pradesh.
                  </p>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-3 text-xs uppercase tracking-widest text-[#5d5951] font-semibold shrink-0">
                  <span>6 States • 10 Living Traditions</span>
                  <span className="sm:hidden text-[10px] text-[#b82329] font-mono font-bold flex items-center gap-1">Swipe →</span>
                </div>
              </div>

              {/* Mobile Horizontal Swipeable Deck */}
              <div className="flex sm:hidden overflow-x-auto gap-3.5 pb-4 snap-x snap-mandatory scrollbar-none -mx-2 px-2">
                {craftClustersList.map((cluster, idx) => (
                  <div
                    key={idx}
                    className="snap-start min-w-[220px] shrink-0 p-4 rounded-xl bg-[#faf8f5] border border-[#ded8cb] flex flex-col justify-between shadow-sm min-h-[125px]"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-bold text-[#9d998f]">
                          0{idx + 1}
                        </span>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#fbebed] text-[#b82329] font-bold uppercase tracking-wider">
                          {cluster.state}
                        </span>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-[#141310]">
                        {cluster.name}
                      </h4>
                    </div>
                    <div className="pt-3 mt-3 border-t border-[#ded8cb]/60 text-xs text-[#5d5951] font-medium">
                      {cluster.craft}
                    </div>
                  </div>
                ))}
              </div>

              {/* Desktop / Tablet Grid */}
              <div className="hidden sm:grid sm:grid-cols-3 md:grid-cols-5 gap-4 lg:gap-6">
                {craftClustersList.map((cluster, idx) => (
                  <div
                    key={idx}
                    className="group p-4 lg:p-5 rounded-lg bg-[#faf8f5] hover:bg-white border border-[#ded8cb] hover:border-[#b82329]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-mono font-bold text-[#9d998f]">
                          0{idx + 1}
                        </span>
                        <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#fbebed] text-[#b82329] font-bold uppercase tracking-wider">
                          {cluster.state}
                        </span>
                      </div>
                      <h4 className="font-serif text-lg font-bold text-[#141310] group-hover:text-[#b82329] transition-colors">
                        {cluster.name}
                      </h4>
                    </div>
                    <div className="pt-3 mt-3 border-t border-[#ded8cb]/60 text-xs text-[#5d5951] font-medium">
                      {cluster.craft}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            FIELD IMPACT: "When Responsibility Was Entrusted To Us" (From PDF Page 8)
        ========================================================================== */}
        <section id="impact" className="section-pad bg-[#f7f5f0]">
          <div className="site-container">
            <div className="max-w-3xl mb-12">
              <span className="section-badge">05 • Ground-Level Operations</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#141310] mb-4">
                When Responsibility <em>Was Entrusted To Us.</em>
              </h2>
              <p className="text-base sm:text-lg text-[#5d5951] leading-relaxed">
                Listening to every voice. Documenting every story. Recording every authentic feedback. Hundreds of beneficiary interactions filmed on-location across Telangana and Andhra Pradesh.
              </p>
            </div>

            {/* Photo Mosaic of Real Ground-Level Filming */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              {[
                {
                  src: '/images/portfolio_photos/p08_bus_beneficiary_shoot.jpg',
                  title: 'Rural Transit & Passenger Feedback',
                  caption: 'Interviewing women commuters outside RTC bus services on welfare transit schemes.',
                },
                {
                  src: '/images/portfolio_photos/p08_village_hall_interview.jpg',
                  title: 'Village Hall Community Dialogue',
                  caption: 'Capturing authentic accounts of agricultural credit and welfare beneficiaries.',
                },
                {
                  src: '/images/portfolio_photos/p08_field_editing_laptop.jpg',
                  title: 'Rapid On-Location Post-Production',
                  caption: 'Editors cutting and subtitling interviews on field laptops for immediate review.',
                },
                {
                  src: '/images/portfolio_photos/p08_beneficiary_interview_saree.jpg',
                  title: 'Grassroots Beneficiary Testimonial',
                  caption: 'Filming direct beneficiary experiences with cinema cameras and lapel audio.',
                },
                {
                  src: '/images/portfolio_photos/p08_community_elder_interview.jpg',
                  title: 'Community Elders & Public Sentiment',
                  caption: 'Documenting village leadership viewpoints with full consent and clarity.',
                },
                {
                  src: '/images/portfolio_photos/p11_stage_multicam_shoot.jpg',
                  title: 'Auditorium Multi-Camera Production',
                  caption: 'Statewide welfare conventions captured with dual telephoto camera rigs.',
                },
                {
                  src: '/images/portfolio_photos/p12_workshop_craftsman_shoot.jpg',
                  title: 'Artisan Workshop Filming',
                  caption: 'Documenting cottage industry workers and handloom units at work.',
                },
                {
                  src: '/images/portfolio_photos/p12_location_scout_tunnel.jpg',
                  title: 'Field Scouting & Infrastructure',
                  caption: 'Production crew scouting irrigation, tunnel, and industrial project corridors.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-md overflow-hidden bg-black h-64 cursor-pointer shadow-sm hover:shadow-md transition-shadow"
                  onClick={() => setLightboxImage({ src: item.src, title: item.title, subtitle: item.caption })}
                >
                  <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent flex flex-col justify-end p-4 text-white">
                    <span className="text-[10px] text-[#b82329] uppercase tracking-widest font-bold">Field Document</span>
                    <h4 className="font-serif text-lg font-bold leading-tight">{item.title}</h4>
                    <p className="text-[11px] text-white/70 line-clamp-1 mt-1">{item.caption}</p>
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
                  How our field crews maintain trust, authentic testimony, and institutional accuracy across every village and urban ward.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 md:divide-x md:divide-[#ded8cb]/80">
                {[
                  {
                    num: '01',
                    title: 'Capture Accurately',
                    desc: 'Preserving the authentic voice, local dialects, and genuine reactions of everyday citizens without staging, scripts, or artificial bias.',
                  },
                  {
                    num: '02',
                    title: 'Document Responsibly',
                    desc: 'Ethical filming with formal consent protocols, respectful community engagement, dignified framing, and sensitivity to privacy.',
                  },
                  {
                    num: '03',
                    title: 'Deliver on Time',
                    desc: 'Rapid overnight editing turnaround, multilingual subtitle integration, and broadcast-ready delivery for urgent governmental submissions.',
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className={`flex flex-col justify-between ${idx > 0 ? 'md:pl-8 lg:pl-12 pt-6 md:pt-0 border-t md:border-t-0 border-[#ded8cb]/60' : ''}`}
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
                      <h4 className="font-serif text-2xl font-bold text-[#141310] mb-3">{item.title}</h4>
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
                <span className="section-badge text-[#b82329]">06 • The Creative Engine</span>
                <h2 className="text-4xl sm:text-5xl lg:text-6xl text-white">
                  The people behind <em>the frames.</em>
                </h2>
              </div>
              <p className="max-w-md text-sm text-[#a9a59c] leading-relaxed font-light">
                More than 30 in-house professionals under one roof, backed by fully owned cinema cameras, drones, studio lighting, and post-production suites.
              </p>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="flex items-center gap-2 border-b border-white/15 pb-2 mb-10 overflow-x-auto scrollbar-none">
              {[
                { id: 'people', label: 'People & Leadership' },
                { id: 'equipment', label: 'Owned Equipment & Gear' },
                { id: 'process', label: '6-Stage Process' },
                { id: 'space', label: 'Studio & Podcast Sets' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveStudioTab(tab.id as any)}
                  className={`studio-tab-btn ${activeStudioTab === tab.id ? 'active' : ''}`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* TAB CONTENT: PEOPLE */}
            {activeStudioTab === 'people' && (
              <div className="space-y-12">
                {/* Founder Spotlight */}
                <div className="p-8 rounded-md bg-[#1f1d19] border border-white/10 flex flex-col md:flex-row items-center gap-8">
                  <div className="w-24 h-24 rounded-full bg-[#b82329] text-white flex items-center justify-center font-serif text-3xl font-bold shrink-0">
                    SK
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <span className="text-xs uppercase tracking-widest text-[#b82329] font-bold block mb-1">
                      Founder & Managing Partner
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-bold mb-2">
                      Ponnekanti Sasi Krishna
                    </h3>
                    <p className="text-xs sm:text-sm text-[#ccc7bd] leading-relaxed max-w-3xl">
                      Two decades of directorial and creative leadership across Andhra Pradesh and Telangana government projects, digital solutions, national cluster documentation, and brand campaigns.
                    </p>
                  </div>
                  <a href="#contact" className="btn-primary text-xs shrink-0">
                    Connect With Leadership
                  </a>
                </div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {studioTeam.map((member, idx) => (
                    <div key={idx} className="p-5 rounded-md bg-[#1b1915] border border-white/10 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-[#b82329] block mb-1">
                          {member.department}
                        </span>
                        <h4 className="font-serif text-xl font-bold text-white mb-0.5">
                          {member.name}
                        </h4>
                        <div className="text-xs text-[#a9a59c] font-medium mb-3">
                          {member.role}
                        </div>
                      </div>
                      {member.description && (
                        <p className="text-[11px] text-[#747169] leading-relaxed border-t border-white/5 pt-2">
                          {member.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB CONTENT: EQUIPMENT */}
            {activeStudioTab === 'equipment' && (
              <div className="space-y-8">
                <div className="p-5 rounded bg-[#1f1d19] border border-white/10 text-xs text-[#ccc7bd] flex items-center justify-between">
                  <span>Fully owned infrastructure guarantees zero reliance on third-party equipment rentals, total quality control, and instant deployment.</span>
                  <span className="font-bold text-white uppercase text-[10px] tracking-wider px-2 py-1 bg-[#b82329] rounded shrink-0 ml-4">
                    Zero Third-Party Dependency
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {equipmentInventory.map((cat, idx) => (
                    <div key={idx} className="p-6 rounded-md bg-[#1b1915] border border-white/10">
                      <h3 className="font-serif text-2xl font-bold text-white mb-4 pb-2 border-b border-white/10 flex items-center justify-between">
                        <span>{cat.category}</span>
                        <span className="text-xs font-mono text-[#b82329]">0{idx + 1}</span>
                      </h3>
                      <div className="space-y-3">
                        {cat.items.map((item, i) => (
                          <div key={i} className="flex justify-between items-start gap-4 text-xs pb-2 border-b border-white/5 last:border-0 last:pb-0">
                            <div>
                              <strong className="text-white block font-medium">{item.name}</strong>
                              <span className="text-[#8e8a80] text-[11px]">{item.specs}</span>
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
            {activeStudioTab === 'process' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {productionProcessSteps.map((step) => (
                  <div key={step.step} className="p-6 rounded-md bg-[#1b1915] border border-white/10 relative overflow-hidden">
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
            {activeStudioTab === 'space' && (
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      src: '/images/extracted/raw_p15_1.jpeg',
                      title: 'Ambient RGB Podcast Suite',
                      desc: 'Sound-treated intimate studio with custom ambient color-temperature RGB backlighting, armchairs, and multi-mic acoustic setup.',
                    },
                    {
                      src: '/images/extracted/raw_p16_1.jpeg',
                      title: 'Velvet Talk Show & Interview Lounge',
                      desc: 'Parabolic softbox diffuse lighting, velvet armchairs, teleprompter glass, and real-time audio monitors.',
                    },
                    {
                      src: '/images/extracted/raw_p14_1.jpeg',
                      title: 'Executive Multi-Cam Boardroom Studio',
                      desc: 'Multi-camera setup with live director preview monitor, overhead boom lights, and executive seating.',
                    },
                    {
                      src: '/images/extracted/raw_p14_3.jpeg',
                      title: 'Wide Commercial Studio Bay',
                      desc: 'Spacious soundstage for commercial filming, furniture arrangements, and large multi-person panels.',
                    },
                    {
                      src: '/images/extracted/raw_p16_2.jpeg',
                      title: 'Dual-Camera Podcast Setup',
                      desc: 'Close-angle directional microphones, coffee table set, dual camera tripods, and acoustic drapes.',
                    },
                    {
                      src: '/images/portfolio_photos/p12_live_broadcast_atem_switcher.jpg',
                      title: 'ATEM Broadcast Switcher Console',
                      desc: 'Hardware control surface, multi-view preview screens, and broadcast audio mixer.',
                    },
                  ].map((space, idx) => (
                    <div
                      key={idx}
                      className="bg-[#1b1915] rounded-md border border-white/10 overflow-hidden cursor-pointer group"
                      onClick={() => setLightboxImage({ src: space.src, title: space.title, subtitle: space.desc })}
                    >
                      <div className="h-48 overflow-hidden relative">
                        <img src={space.src} alt={space.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors" />
                      </div>
                      <div className="p-4">
                        <h4 className="font-serif text-xl font-bold text-white mb-1">{space.title}</h4>
                        <p className="text-xs text-[#a9a59c] leading-relaxed">{space.desc}</p>
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
                Over 500 documentaries, corporate films, government assignments, and publications executed across India.
              </p>
            </div>

            {/* Modern Segmented Filter Pills */}
            <div className="category-filter-wrap">
              <div className="category-segmented-bar">
                {portfolioCategories.map((cat) => {
                  const count = cat === 'All'
                    ? portfolioItems.length
                    : portfolioItems.filter((i) => i.category === cat).length
                  const isActive = selectedPortfolioCategory === cat
                  return (
                    <button
                      key={cat}
                      onClick={() => setSelectedPortfolioCategory(cat)}
                      className={`category-tab-btn ${isActive ? 'active' : ''}`}
                    >
                      <span>{cat}</span>
                      <span className="category-tab-badge">
                        {count}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Portfolio Grid — Spacious 3-Column Architectural Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
              {filteredPortfolio.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setLightboxImage({ src: item.image, title: item.title, subtitle: `${item.client} • ${item.category}` })}
                  className="bg-white rounded-2xl border border-[#ded8cb] overflow-hidden group cursor-pointer shadow-sm hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="h-72 sm:h-80 md:h-88 overflow-hidden relative bg-black">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-[#b82329] text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                      {item.category}
                    </span>
                    <span className="absolute bottom-4 left-4 text-xs text-white/95 font-mono font-bold bg-black/60 backdrop-blur-md px-3 py-1 rounded-md border border-white/15">
                      {item.year || 'Selected Project'}
                    </span>
                  </div>

                  <div className="p-7 sm:p-9 lg:p-10 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <div className="text-xs uppercase tracking-wider font-bold text-[#b82329] mb-2">
                        {item.client}
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#141310] leading-snug mb-3 group-hover:text-[#b82329] transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm sm:text-base text-[#524e47] leading-relaxed line-clamp-3 mb-4 font-normal">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-[#f0ede6] flex items-center justify-between text-xs sm:text-sm text-[#747169]">
                      <span className="font-bold text-[#b82329] group-hover:underline inline-flex items-center gap-1.5">
                        View Project Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                      <ZoomIn className="w-4 h-4 text-[#9d998f]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTOR EXPERTISE SUMMARY
        ========================================================================== */}
        <section id="expertise" className="section-pad bg-[#eeeae0] border-t border-[#ded8cb]">
          <div className="site-container">
            <div className="max-w-3xl mb-12">
              <span className="section-badge">08 • Sector Expertise</span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#141310] mb-4">
                Proven Execution. <em>Trusted at Scale.</em>
              </h2>
              <p className="text-base sm:text-lg text-[#5d5951] leading-relaxed">
                Experienced with approval-led communication, complex institutions, field documentation, and statewide public engagement.
              </p>
            </div>

            {/* Sector Expertise — Expansive Luxury Editorial Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
              {[
                {
                  number: '01',
                  title: 'Government & Welfare',
                  tagline: 'Public Communication with Verifiable Grassroots Impact',
                  desc: 'Trusted by state departments to film, edit, and deliver authentic citizen voices, welfare scheme progress, and statewide public awareness campaigns.',
                  points: [
                    'Government policy reels & departmental films',
                    'Statewide welfare scheme impact documentation',
                    'Beneficiary testimonials with verified consent',
                    'Election campaign films & public feedback vox-pops',
                    'Multilingual subtitle mastering for official submission',
                  ],
                },
                {
                  number: '02',
                  title: 'Knowledge Documentation',
                  tagline: 'Statecraft, Culture & Heritage Preserved for History',
                  desc: 'Crafting museum-grade coffee table books, annual reports, and national handicraft cluster compendiums officially launched by state leadership.',
                  points: [
                    'Premium coffee table books with integrated QR video',
                    'National handicraft cluster archival books (GOI)',
                    'Institutional compendiums & silver jubilee archives',
                    'Tribal heritage, living art & cultural lore documentation',
                    'High-resolution archival print and digital publishing',
                  ],
                },
                {
                  number: '03',
                  title: 'Visual Production & Studio',
                  tagline: 'Broadcast-Grade Craft from Concept to Final Master',
                  desc: 'Equipped with in-house cinema rigs, acoustic podcast suites, ATEM live switchers, and cutting-edge AI video synthesis for commercial scale.',
                  points: [
                    'TV commercials (TVCs) & high-conversion digital ads',
                    'Corporate brand films & executive leadership interviews',
                    'Turnkey 4K podcast studio suites with ambient lighting',
                    'Live multi-camera broadcast & switcher operations',
                    'AI-powered video generation, avatars & rapid versioning',
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
                          <li key={idx} className="flex items-start gap-3 text-sm text-[#423f39] leading-relaxed font-normal">
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
            <img src="/images/mockup_assets/studio_silhouette_crew.jpg" alt="Film crew" className="w-full h-full object-cover filter grayscale" />
          </div>
          <div className="site-container relative z-10 max-w-4xl mx-auto px-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#b82329] font-bold block mb-6">
              The Shlokh Promise
            </span>
            <blockquote className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light leading-tight mb-8">
              “Stories that inform. Films that inspire.
              <br />
              <em className="text-[#b82329]">Communication that creates impact.</em>”
            </blockquote>
            <p className="text-xs tracking-widest text-[#a9a59c] uppercase">
              Shlokh Advertising & Branding • Hyderabad & Andhra Pradesh
            </p>
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
                  <span className="section-badge">09 • Let’s Work Together</span>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl text-[#141310] mb-6">
                    Have a story <em>worth telling?</em>
                  </h2>
                  <p className="text-sm sm:text-base text-[#5d5951] leading-relaxed mb-8">
                    Bring us your brief, your campaign challenge, or the start of an idea. Our integrated team of directors, writers, and producers will shape the right way forward.
                  </p>

                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#fbebed] text-[#b82329] flex items-center justify-center shrink-0">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider font-bold text-[#747169]">Direct Contact</div>
                        <div className="text-sm font-semibold text-[#141310] mt-0.5">
                          <a href="tel:+919505555277" className="hover:text-[#b82329]">+91 95055 55277</a> / <a href="tel:+919666974593" className="hover:text-[#b82329]">+91 96669 74593</a>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-[#fbebed] text-[#b82329] flex items-center justify-center shrink-0">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-wider font-bold text-[#747169]">Email Inquiries</div>
                        <div className="text-sm font-semibold text-[#141310] mt-0.5">
                          <a href="mailto:shlokhentertainments@gmail.com" className="hover:text-[#b82329]">
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
                        <div className="text-xs uppercase tracking-wider font-bold text-[#747169]">Production Hubs</div>
                        <div className="text-xs text-[#5d5951] mt-1 space-y-1">
                          <p><strong className="text-[#141310]">Telangana:</strong> #6-3-451, Panjagutta, Hyderabad</p>
                          <p><strong className="text-[#141310]">Andhra Pradesh:</strong> #1-3-123/2, SVN Colony, Guntur</p>
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
                    Production services active across Telangana and Andhra Pradesh. Election ad films, public feedback interviews, and beneficiary testimonials are available at affordable project-based packages.
                  </p>
                </div>
              </div>

              {/* Inquiry Form Right Column */}
              <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-md border border-[#ded8cb] shadow-sm">
                <h3 className="font-serif text-3xl font-bold text-[#141310] mb-2">
                  Request a Project Quote
                </h3>
                <p className="text-xs text-[#747169] mb-8">
                  Select from any of our 14 specialized production services to receive a tailored quotation.
                </p>

                {formSubmitted ? (
                  <div className="p-8 rounded bg-[#fbebed] border border-[#b82329]/30 text-center animate-fadeIn">
                    <CheckCircle2 className="w-12 h-12 text-[#b82329] mx-auto mb-3" />
                    <h4 className="font-serif text-2xl font-bold text-[#141310] mb-2">Thank You for Reaching Out!</h4>
                    <p className="text-xs sm:text-sm text-[#5d5951] leading-relaxed max-w-md mx-auto">
                      Your inquiry has been received. Our leadership and creative director will review your project requirements and connect within 24 hours.
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
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your campaign goals, shoot locations, duration, language versions, or deadlines..."
                        className="w-full px-4 py-3 rounded border border-[#ded8cb] bg-[#f7f5f0] text-sm focus:border-[#b82329] focus:bg-white focus:outline-none transition-colors"
                      />
                    </div>

                    <button type="submit" className="btn-primary w-full py-3.5 text-xs">
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

      {/* =========================================================================
          SITE FOOTER
      ========================================================================== */}
      <footer className="bg-[#141310] text-white pt-16 pb-12 border-t border-white/10" role="contentinfo">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
            <div>
              <img src="/images/shlokh_logo_light_header.png" alt="Shlokh Entertainments" className="h-10 w-auto mb-4" />
              <p className="text-xs text-[#a9a59c] leading-relaxed mb-4">
                Films, Photography, Visual Communication. Combining artificial intelligence with seasoned cinematic craft for a better tomorrow.
              </p>
              <div className="text-xs text-[#b82329] font-semibold">
                Since 20+ Years • Hyderabad & AP
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold mb-4 text-white">Production Capabilities</h4>
              <ul className="space-y-2 text-xs text-[#a9a59c]">
                <li><a href="#services" className="hover:text-white transition-colors">01 AI Video Production & Ad Films</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">02 Corporate Video Production</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">03 Ad Film Production</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">04 Podcast Production Suites</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">08 Documentary Film Production</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">12 Election Campaign Videos</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">14 Beneficiary Testimonial Videos</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold mb-4 text-white">Regional Hubs</h4>
              <div className="space-y-3 text-xs text-[#a9a59c]">
                <div>
                  <strong className="text-white block font-medium">Telangana (Corporate Hub)</strong>
                  #6-3-451, Panjagutta, Hyderabad
                </div>
                <div>
                  <strong className="text-white block font-medium">Andhra Pradesh (Branch Office)</strong>
                  #1-3-123/2, SVN Colony, Guntur
                </div>
                <div className="pt-2 text-white">
                  Direct: <a href="tel:+919505555277" className="text-[#b82329] font-bold">+91 95055 55277</a>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-serif text-lg font-bold mb-4 text-white">Digital & Social Channels</h4>
              <p className="text-xs text-[#a9a59c] leading-relaxed mb-4">
                Follow Shlokh Advertising on Facebook, Instagram, YouTube, and LinkedIn for latest showreels and campaign premieres.
              </p>
              <div className="flex items-center gap-3">
                {['Facebook', 'Instagram', 'YouTube', 'LinkedIn'].map((network) => (
                  <a
                    key={network}
                    href="https://www.shlokhadvertising.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2.5 py-1 rounded bg-white/10 hover:bg-[#b82329] text-[10px] uppercase font-bold text-white transition-colors"
                  >
                    {network}
                  </a>
                ))}
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
          <div className="modal-content p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
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
                  Combining 20+ years of documentary field stories, commercial ad films, and AI-accelerated production.
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
          <div className="modal-content max-w-4xl p-4 sm:p-6" onClick={(e) => e.stopPropagation()}>
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
              <img
                src={lightboxImage.src}
                alt={lightboxImage.title}
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
        <div className="modal-overlay" onClick={() => setSelectedServiceModal(null)}>
          <div className="modal-content max-w-2xl p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
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
              <img
                src={selectedServiceModal.image}
                alt={selectedServiceModal.title}
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
                  <div key={idx} className="p-3 rounded bg-[#1f1d19] border border-white/5 flex items-start gap-2.5 text-xs text-[#ccc7bd]">
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
                  setFormData((prev) => ({ ...prev, service: selectedServiceModal.title }))
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
          <div className="modal-content max-w-xl p-6 sm:p-8" onClick={(e) => e.stopPropagation()}>
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
              Our leadership reviews every brief personally. Tell us about your project to receive tailored pricing and timeline recommendations.
            </p>

            {formSubmitted ? (
              <div className="p-6 rounded bg-[#b82329]/20 border border-[#b82329] text-center">
                <CheckCircle2 className="w-10 h-10 text-[#b82329] mx-auto mb-2" />
                <h4 className="font-serif text-2xl font-bold text-white mb-1">Inquiry Submitted!</h4>
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
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
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
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
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
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded border border-white/15 bg-white/5 text-sm text-white focus:border-[#b82329] focus:outline-none"
                    placeholder="Tell us about the project duration, shoot location, or specific requirements..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full py-3 text-xs">
                  Request Customized Quote
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
