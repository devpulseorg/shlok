import React, { useState } from "react"
import {
  Play,
  ArrowRight,
  ArrowLeft,
  ZoomIn,
  Film,
  Award,
  Filter
} from "lucide-react"
import { portfolioItems, type PortfolioItem } from "../data/portfolioData"

interface WorkPageProps {
  onBackToHome: () => void
  onOpenQuoteModal: (serviceName?: string) => void
  onOpenVideoModal: (title: string) => void
  onOpenLightbox: (data: { src: string; title: string; subtitle?: string }) => void
}

export function WorkPage({
  onBackToHome,
  onOpenQuoteModal,
  onOpenVideoModal,
  onOpenLightbox,
}: WorkPageProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All")
  const [featuredFilmIndex, setFeaturedFilmIndex] = useState(0)

  const featuredFilms = [
    {
      title: "Culture in Motion",
      category: "Documentary Film & Heritage",
      tagline: "A visual journey through people, traditions and timeless places.",
      description:
        "Documenting the rich cultural fabric, living temples, artisan communities, and spiritual gatherings of India with 4K cinema sensitivity.",
      image: "/images/mockup_assets/featured_culture_in_motion.jpg",
      duration: "45 mins • 4K Cinema",
    },
    {
      title: "Beneficiary Voices: Real Impact",
      category: "Government & Public Welfare",
      tagline: "Capturing authentic grassroots voices across 100+ statewide campaigns.",
      description:
        "Direct beneficiary interviews, welfare scheme chronicles, and citizen transformation stories filmed on location across Andhra Pradesh and Telangana.",
      image: "/images/portfolio_photos/p08_bus_beneficiary_shoot.jpg",
      duration: "28 mins • Multi-Cam Set",
    },
    {
      title: "The Crafts of Bharat",
      category: "National Craft Documentation",
      tagline: "Preserving living heritage across 10 national artisan clusters.",
      description:
        "Documenting Pochampally ikat, Lepakshi stone, Machilipatnam kalamkari, and Dharwad handlooms for the Ministry of Textiles, Govt. of India.",
      image: "/images/portfolio_photos/p10_cm_launching_weaves_book.jpg",
      duration: "35 mins • High-Definition",
    },
  ]

  const categories = [
    "All",
    "Government & Public",
    "Corporate & Commercial",
    "Publications & Heritage",
    "Studio & Podcasts",
    "Documentary",
  ]

  const filteredPortfolio =
    selectedCategory === "All"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory)

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
              <span>← Back to Overview</span>
            </button>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#9d998f]">
              Directorial Catalog • 500+ Projects Executed
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="section-badge text-[#b82329] mb-3 inline-block">
                Selected Work &amp; Cinema Showcase
              </span>
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                Commercials, Ad Films <br />
                <em>&amp; Living Documentaries.</em>
              </h1>
            </div>
            <p className="max-w-md text-sm sm:text-base text-[#5d5951] leading-relaxed font-light">
              Over 500 documentaries, corporate films, TV commercials, AI video campaigns, and state welfare chronicles executed across India.
            </p>
          </div>
        </div>
      </header>

      {/* =========================================================================
          1. FEATURED CINEMA FILM SHOWCASE
      ========================================================================== */}
      <section className="section-pad bg-[#eeeae0] border-b border-[#ded8cb]">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#b82329] font-bold block mb-1">
                Spotlight Production
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141310]">
                Culture <em>in Motion.</em>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-[#5d5951] leading-relaxed">
              Directed and produced with documentary sensitivity, human dignity, and 4K cinema craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Main Video Hero Card */}
            <div className="lg:col-span-8 bg-[#141310] rounded-none overflow-hidden relative group min-h-[420px] lg:min-h-[500px] flex flex-col justify-end p-6 sm:p-10 text-white shadow-xl border border-[#ded8cb]">
              <img
                src={featuredFilms[featuredFilmIndex].image}
                alt={featuredFilms[featuredFilmIndex].title}
                className="absolute inset-0 w-full h-full object-cover filter brightness-[0.78] group-hover:scale-102 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-none bg-[#b82329] text-[10px] uppercase tracking-widest font-bold mb-4">
                  {featuredFilms[featuredFilmIndex].category}
                </div>
                <h3 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-bold mb-3">
                  {featuredFilms[featuredFilmIndex].title}
                </h3>
                <p className="text-sm sm:text-base text-[#ccc7bd] max-w-xl font-light mb-6">
                  {featuredFilms[featuredFilmIndex].description}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => onOpenVideoModal(featuredFilms[featuredFilmIndex].title)}
                    className="btn-primary"
                  >
                    <Play className="w-3.5 h-3.5 fill-current" />
                    Watch Project Film
                  </button>
                  <span className="text-xs uppercase tracking-wider text-white/70 font-mono">
                    {featuredFilms[featuredFilmIndex].duration}
                  </span>
                </div>
              </div>
            </div>

            {/* Sidebar Carousel Tabs */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-4">
              <div className="text-xs uppercase tracking-widest font-mono font-bold text-[#747169] mb-1">
                Documentary Series Selector ({featuredFilmIndex + 1} / {featuredFilms.length})
              </div>

              <div className="flex flex-col gap-3.5">
                {featuredFilms.map((film, idx) => (
                  <button
                    key={idx}
                    onClick={() => setFeaturedFilmIndex(idx)}
                    className={`text-left p-5 rounded-none border transition-all duration-200 flex items-center gap-4 cursor-pointer ${
                      featuredFilmIndex === idx
                        ? "bg-[#ffffff] border-[#b82329] shadow-lg scale-[1.01]"
                        : "bg-[#ffffff]/80 border-[#ded8cb] hover:bg-white hover:shadow-md"
                    }`}
                  >
                    <div className="w-20 h-20 rounded-none overflow-hidden shrink-0 relative bg-black shadow-sm">
                      <img
                        src={film.image}
                        alt={film.title}
                        className="w-full h-full object-cover"
                      />
                      {featuredFilmIndex === idx && (
                        <div className="absolute inset-0 bg-[#b82329]/40 flex items-center justify-center">
                          <Play className="w-5 h-5 fill-white text-white" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] uppercase tracking-wider font-semibold text-[#b82329]">
                        0{idx + 1} • {film.category}
                      </div>
                      <h4 className="font-editorial text-lg font-bold text-[#141310] leading-snug truncate">
                        {film.title}
                      </h4>
                      <div className="text-xs text-[#5d5951] line-clamp-1 mt-1 font-normal">
                        {film.tagline}
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Callout box */}
              <div className="p-6 rounded-none bg-[#ffffff] border border-[#ded8cb] shadow-sm mt-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#141310] mb-2 font-mono">
                  <Award className="w-4 h-4 text-[#b82329]" />
                  Official Screening &amp; State Archives
                </div>
                <p className="text-xs sm:text-sm text-[#5d5951] leading-relaxed">
                  Screened at prestigious ministerial summits, state assemblies, and preserved for national craft and culture archives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. FILTERABLE FILM & PORTFOLIO GRID
      ========================================================================== */}
      <section className="section-pad bg-[#f7f5f0]">
        <div className="site-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-[#b82329] font-bold block mb-1">
                Full Filmography
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-bold text-[#141310]">
                Communication <em>with Consequence.</em>
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-[#5d5951] leading-relaxed">
              Filter our productions by sector. Click any card to inspect high-resolution stills and production notes.
            </p>
          </div>

          {/* Segmented Filter Bar */}
          <div className="category-filter-wrap mb-10">
            <div className="category-segmented-bar flex flex-wrap gap-2">
              {categories.map((cat) => {
                const count =
                  cat === "All"
                    ? portfolioItems.length
                    : portfolioItems.filter((i) => i.category === cat).length
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

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
            {filteredPortfolio.map((item) => (
              <article
                key={item.id}
                onClick={() =>
                  onOpenLightbox({
                    src: item.image,
                    title: item.title,
                    subtitle: `${item.client} • ${item.category}`,
                  })
                }
                className="group cursor-pointer flex flex-col justify-between transition-all duration-300 bg-white border border-[#ded8cb] hover:border-[#b82329] hover:shadow-xl"
              >
                <div className="w-full aspect-[16/10] overflow-hidden relative bg-[#eae5d9]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <span className="absolute top-3.5 right-3.5 px-3 py-1 bg-[#b82329] text-[10px] font-bold uppercase tracking-wider text-white shadow-sm font-mono">
                    {item.category}
                  </span>
                  <span className="absolute bottom-3.5 left-3.5 text-xs text-white/95 font-mono font-bold bg-black/60 backdrop-blur-md px-3 py-1 border border-white/15">
                    {item.year || "Selected Project"}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-[11px] font-mono uppercase tracking-wider font-bold text-[#b82329] mb-2">
                      {item.client}
                    </div>
                    <h3 className="font-editorial text-2xl font-bold text-[#141310] leading-snug mb-2.5 group-hover:text-[#b82329] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#524e47] leading-relaxed line-clamp-3 mb-4 font-light">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#ded8cb]/70 flex items-center justify-between text-xs text-[#747169] font-mono">
                    <span className="font-bold text-[#b82329] group-hover:underline inline-flex items-center gap-1.5">
                      Inspect Frame
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <ZoomIn className="w-4 h-4 text-[#9d998f]" />
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Bottom Conversion Strip */}
          <div className="mt-16 p-8 bg-[#141310] text-white border border-[#ded8cb] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-lg">
            <div>
              <h4 className="font-editorial text-2xl font-bold mb-1">
                Have a Commercial Film or Documentary in Mind?
              </h4>
              <p className="text-xs sm:text-sm text-[#ccc7bd] font-light">
                Our directors, cinematographers, and AI specialists manage turnkey shoots across India.
              </p>
            </div>
            <button
              onClick={() => onOpenQuoteModal("Film & Ad Production")}
              className="btn-primary text-xs shrink-0 cursor-pointer"
            >
              Start a Project
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
