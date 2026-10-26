import React from "react"
import { ArrowLeft, ArrowRight, BookOpen, ZoomIn, Award, ChevronRight } from "lucide-react"
import { craftClustersList } from "../data/portfolioData"

interface PublicationsPageProps {
  onBackToHome: () => void
  onOpenQuoteModal: (serviceName?: string) => void
  onOpenLightbox: (data: { src: string; title: string; subtitle?: string }) => void
}

export function PublicationsPage({
  onBackToHome,
  onOpenQuoteModal,
  onOpenLightbox,
}: PublicationsPageProps) {
  const books = [
    {
      title: "WEAVES ANDHRA PRADESH",
      sub: "Coffee Table Book",
      badge: "Govt of AP • Handlooms & Textiles",
      image: "/images/portfolio_photos/p10_weaves_andhra_book.jpg",
      launchImg: "/images/portfolio_photos/p10_cm_launching_weaves_book.jpg",
      launchDignitary: "Hon'ble CM Sri Nara Chandrababu Naidu",
      desc: "A tribute to Andhra Pradesh's timeless weaving traditions. Showcases the legacy, diversity, and excellence of handloom weaves across the state along with the stories of artisans behind them.",
      supportLabel: "Official Launch Ceremony",
      supportDetail: "Statewide Handloom & Artisan Legacy Archive",
    },
    {
      title: "MEPMA — PRERANA SAKHI",
      sub: "Coffee Table Book",
      badge: "Govt of AP • MEPMA & SHG Federations",
      image: "/images/portfolio_photos/p10_mepma_prerana_sakhi_book.jpg",
      launchImg: "/images/portfolio_photos/p10_cm_launching_mepma_book.jpg",
      launchDignitary: "Hon'ble CM Sri Nara Chandrababu Naidu",
      desc: "A celebration of women empowerment and the incredible journey of Self Help Groups under MEPMA, capturing inspiring stories of rural women driving community development.",
      supportLabel: "Official Launch Ceremony",
      supportDetail: "Women Self-Help Groups Transformation Chronicle",
    },
    {
      title: "SAVARA TRIBAL ART",
      sub: "Coffee Table Book & Branding",
      badge: "Tribal Welfare & APITCO",
      image: "/images/portfolio_photos/p10_savara_tribal_art_book.jpg",
      desc: "Comprehensive documentation and branding of the ancient Savara tribal wall murals and folk heritage of North Coastal Andhra Pradesh. Preserving indigenous art lineages for national records.",
      supportLabel: "Heritage Preservation",
      supportDetail: "Preserved in official state and national tribal archives",
    },
    {
      title: "GOVT OF INDIA HANDICRAFTS",
      sub: "10 Clusters Heritage Documentation",
      badge: "Ministry of Textiles, GOI",
      image: "/images/portfolio_photos/p10_cm_launching_mepma_book.jpg",
      desc: "Branding, documenting, and publishing the living legacy of 10 major artisan clusters across Gujarat, Telangana, Andhra Pradesh, Karnataka, Rajasthan, and UP.",
      supportLabel: "National Craft Archive",
      supportDetail: "Living crafts of 10 nationwide artisan clusters",
    },
  ]

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
              Official Releases • Launched by State Leadership
            </div>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="section-badge text-[#b82329] mb-3 inline-block">
                Archival Publications &amp; Coffee Table Books
              </span>
              <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05]">
                Crafting Stories. <br />
                <em>Creating Lasting Legacy.</em>
              </h1>
            </div>
            <p className="max-w-md text-sm sm:text-base text-[#5d5951] leading-relaxed font-light">
              Premium Coffee Table Books, QR-video integrated publications, and state heritage documentation officially released by Hon’ble Chief Minister Sri Nara Chandrababu Naidu Garu.
            </p>
          </div>
        </div>
      </header>

      {/* =========================================================================
          FEATURED BOOKS GRID
      ========================================================================== */}
      <section className="section-pad bg-[#eeeae0] border-b border-[#ded8cb]">
        <div className="site-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {books.map((book, idx) => (
              <article
                key={idx}
                className="bg-white rounded-none border border-[#ded8cb] overflow-hidden flex flex-col justify-between hover:shadow-2xl transition-all duration-300 hover:border-[#b82329] group shadow-sm"
              >
                <div>
                  <div
                    className="w-full aspect-[16/10] bg-[#faf8f5] relative overflow-hidden flex items-center justify-center cursor-pointer border-b border-[#ded8cb]/70 group/img"
                    onClick={() =>
                      onOpenLightbox({
                        src: book.image,
                        title: book.title,
                        subtitle: book.sub,
                      })
                    }
                  >
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs uppercase font-mono font-bold tracking-widest gap-2 backdrop-blur-[2px]">
                      <ZoomIn className="w-4 h-4" />
                      Click to Inspect Book
                    </div>
                  </div>

                  <div className="p-6 sm:p-8">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 rounded-none bg-[#fbebed] border border-[#b82329]/20 text-[#b82329] text-[11px] font-mono font-bold uppercase tracking-wider">
                        {book.badge}
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-[#141310] mb-2 group-hover:text-[#b82329] transition-colors leading-snug">
                      {book.title}
                    </h3>
                    <div className="text-xs font-mono uppercase tracking-wider text-[#747169] mb-4">
                      {book.sub}
                    </div>

                    <p className="text-xs sm:text-sm text-[#524e47] leading-relaxed mb-6 font-light">
                      {book.desc}
                    </p>

                    {book.launchImg ? (
                      <div
                        onClick={() =>
                          onOpenLightbox({
                            src: book.launchImg,
                            title: `Launch: ${book.title}`,
                            subtitle: book.launchDignitary,
                          })
                        }
                        className="p-4 rounded-none bg-[#faf8f5] border border-[#ded8cb] flex items-center gap-3.5 hover:border-[#b82329] transition-all cursor-pointer group/launch shadow-sm"
                      >
                        <div className="w-14 h-14 rounded-none overflow-hidden shrink-0 relative bg-black/10 border border-[#ded8cb]">
                          <img
                            src={book.launchImg}
                            alt="CM Launching Book"
                            className="w-full h-full object-cover group-hover/launch:scale-105 transition-transform"
                          />
                        </div>
                        <div className="text-xs text-[#141310] leading-snug flex-1 min-w-0">
                          <span className="font-bold block text-[10px] font-mono uppercase tracking-wider text-[#b82329] mb-0.5">
                            {book.supportLabel}
                          </span>
                          <span className="font-bold block truncate">
                            {book.launchDignitary}
                          </span>
                          <span className="text-[11px] text-[#747169] font-light block truncate">
                            {book.supportDetail}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-[#747169] group-hover/launch:translate-x-1 transition-transform shrink-0" />
                      </div>
                    ) : (
                      <div className="p-4 rounded-none bg-[#faf8f5] border border-[#ded8cb] flex items-center gap-3.5 shadow-sm">
                        <div className="w-11 h-11 rounded-none bg-white border border-[#ded8cb] flex items-center justify-center text-[#b82329] shrink-0">
                          <BookOpen className="w-4 h-4" />
                        </div>
                        <div className="text-xs text-[#141310] leading-snug flex-1 min-w-0">
                          <span className="font-mono font-bold block text-[10px] uppercase tracking-wider text-[#747169] mb-0.5">
                            {book.supportLabel}
                          </span>
                          <span className="text-xs text-[#4e4a42] font-light block">
                            {book.supportDetail}
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* 10 Clusters of India Showcase */}
          <div className="p-8 sm:p-12 bg-white border border-[#ded8cb] shadow-sm">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#eeeae0]">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#b82329] flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-[#b82329] animate-pulse" />
                  National Footprint • Ministry of Textiles, GOI
                </span>
                <h3 className="text-3xl sm:text-4xl font-editorial font-bold text-[#141310]">
                  10 Clusters. Countless Stories. One Heritage.
                </h3>
                <p className="text-xs sm:text-sm text-[#747169] mt-2 max-w-2xl font-light leading-relaxed">
                  Comprehensive visual documentation, branding, and publication of India’s living craft traditions across Gujarat, Telangana, Andhra Pradesh, Karnataka, Rajasthan, and Uttar Pradesh.
                </p>
              </div>
              <div className="text-xs font-mono uppercase tracking-widest text-[#5d5951] font-semibold shrink-0">
                6 States • 10 Living Traditions
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {craftClustersList.map((cluster, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#faf8f5] hover:bg-white border border-[#ded8cb] hover:border-[#b82329]/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between min-h-[145px]"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono font-bold text-[#9d998f]">
                        {idx < 9 ? `0${idx + 1}` : idx + 1}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded-none bg-[#fbebed] text-[#b82329] font-mono font-bold uppercase tracking-wider">
                        {cluster.state}
                      </span>
                    </div>
                    <h4 className="font-editorial text-lg font-bold text-[#141310] group-hover:text-[#b82329] transition-colors leading-snug">
                      {cluster.name}
                    </h4>
                  </div>
                  <div className="pt-2 mt-2 border-t border-[#ded8cb]/70 text-xs text-[#5d5951] font-light">
                    {cluster.craft}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Conversion Strip */}
          <div className="mt-16 p-8 bg-[#141310] text-white border border-[#ded8cb] flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-lg">
            <div>
              <h4 className="font-editorial text-2xl font-bold mb-1">
                Commission a Heritage Coffee Table Book
              </h4>
              <p className="text-xs sm:text-sm text-[#ccc7bd] font-light">
                Complete research, curation, photography, writing, QR-video integration, and archival offset printing.
              </p>
            </div>
            <button
              onClick={() => onOpenQuoteModal("Heritage Coffee Table Book")}
              className="btn-primary text-xs shrink-0 cursor-pointer"
            >
              Inquire for Publication
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
