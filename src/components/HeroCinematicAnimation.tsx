import React, { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

interface HeroCinematicAnimationProps {
  onExplore: () => void
  onAnimationComplete?: () => void
}

/**
 * Authentic 35mm physical filmstrip with real photographs from Shareef Sir's documentary archive.
 * Tilted diagonally and placed behind the main video monitor card, exactly matching the reference master design.
 */
function FilmstripSpool() {
  const frames = [
    {
      src: "/images/portfolio_shareef/photos_raw/photo_p08_1_1239x1755.jpeg",
      frameNo: "21",
      code: "21A",
      title: "Heritage Sanctum",
    },
    {
      src: "/images/portfolio_shareef/photos_raw/photo_p06_1_529x752.jpeg",
      frameNo: "22",
      code: "22A",
      title: "Morning Ritual",
    },
    {
      src: "/images/portfolio_shareef/photos_raw/photo_p04_1_554x784.jpeg",
      frameNo: "23",
      code: "23A",
      title: "Artisan Portrait",
    },
  ]

  return (
    <div
      className="hero-filmstrip-entrance absolute -top-14 -right-6 sm:-right-8 w-36 sm:w-44 md:w-52 z-0 pointer-events-none transform rotate-[13deg] select-none opacity-90 drop-shadow-[0_20px_28px_rgba(0,0,0,0.35)]"
      aria-hidden="true"
    >
      <div className="bg-[#0c0c0b] border-x border-[#282723] py-3 flex flex-col gap-2.5">
        {frames.map((frame, index) => (
          <div key={index} className="flex flex-col relative px-2 py-1">
            {/* Top Sprocket Perforations */}
            <div className="flex justify-between items-center mb-1 px-1">
              <span className="text-[7px] font-mono text-[#d4a853] font-bold tracking-widest">
                KODAK 500T
              </span>
              <div className="flex gap-1.5">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-2 h-2.5 bg-[#f7f5f0] border border-black/60 rounded-[1.5px] shadow-inner inline-block"
                  />
                ))}
              </div>
              <span className="text-[7px] font-mono text-[#d4a853] font-bold tracking-widest">
                {frame.frameNo}
              </span>
            </div>

            {/* Photo Negative/Positive Frame */}
            <div className="relative aspect-[4/3] bg-black border border-white/10 overflow-hidden shadow-inner">
              <img
                src={frame.src}
                alt={frame.title}
                className="w-full h-full object-cover grayscale contrast-125 brightness-95 filter transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>

            {/* Bottom Sprocket Perforations */}
            <div className="flex justify-between items-center mt-1 px-1">
              <span className="text-[7px] font-mono text-[#d4a853] font-bold tracking-widest">
                SAFETY FILM
              </span>
              <div className="flex gap-1.5">
                {Array.from({ length: 4 }).map((_, i) => (
                  <span
                    key={i}
                    className="w-2 h-2.5 bg-[#f7f5f0] border border-black/60 rounded-[1.5px] shadow-inner inline-block"
                  />
                ))}
              </div>
              <span className="text-[7px] font-mono text-[#d4a853] font-bold tracking-widest">
                {frame.code}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export function HeroCinematicAnimation({
  onExplore,
  onAnimationComplete,
}: HeroCinematicAnimationProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const cardRef = useRef<HTMLDivElement>(null)
  const [animationKey, setAnimationKey] = useState(0)

  // Stages: 'center' (large opening) -> 'docking' (morphing into place) -> 'docked' (settled in grid)
  const [stage, setStage] = useState<"center" | "docking" | "docked">("center")
  const [coords, setCoords] = useState<{ x: number; y: number; scale: number }>({
    x: 0,
    y: 0,
    scale: 1,
  })

  // Measure initial delta from card position to screen center
  const calculateDelta = () => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const cardCenterX = rect.left + rect.width / 2
    const cardCenterY = rect.top + rect.height / 2
    const dx = centerX - cardCenterX
    const dy = centerY - cardCenterY
    const isMobile = window.innerWidth < 768
    const maxTargetWidth = isMobile
      ? Math.min(window.innerWidth * 0.92, 380)
      : Math.min(window.innerWidth * 0.72, 980)
    const scale = Math.max(1, maxTargetWidth / rect.width)
    setCoords({ x: dx, y: dy, scale })
  }

  useEffect(() => {
    calculateDelta()
    const handleResize = () => {
      if (stage === "center") calculateDelta()
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [stage])

  // Start docking animation (smooth morph into card slot)
  const startDocking = () => {
    if (stage !== "center") return
    setStage("docking")
    setTimeout(() => {
      setStage("docked")
      onAnimationComplete?.()
    }, 850)
  }

  useEffect(() => {
    // Safety fallback: if video is delayed, start docking after 2.2s anyway
    const safetyTimer = setTimeout(() => {
      startDocking()
    }, 2200)

    const handleSkipKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " " || e.key === "Enter") {
        startDocking()
      }
    }
    window.addEventListener("keydown", handleSkipKey)

    return () => {
      clearTimeout(safetyTimer)
      window.removeEventListener("keydown", handleSkipKey)
    }
  }, [stage])

  // Smooth loop & continuous morph:
  // Aperture dilates open from 0s to 1.15s, then we trigger docking while video keeps playing smoothly
  const handleTimeUpdate = () => {
    if (!videoRef.current) return
    const cur = videoRef.current.currentTime

    // Trigger docking when aperture dilation finishes (~1.15s)
    if (stage === "center" && cur >= 1.15) {
      startDocking()
    }

    // Smooth loop after docking: loop the golden temple cinema shot (1.5s to 7.3s)
    if (cur >= 7.3) {
      videoRef.current.currentTime = 1.5
      videoRef.current.play().catch(() => {})
    }
  }

  return (
    <>
      {/* =========================================================================
          AMBIENT DARK VELVET BACKDROP (ONLY ACTIVE DURING LARGE OPENING STAGE)
      ========================================================================== */}
      <div
        onClick={startDocking}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
        }}
        className={`bg-[#080807]/95 backdrop-blur-md transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] select-none ${
          stage === "center"
            ? "opacity-100 pointer-events-auto cursor-pointer"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      >
        {/* Top Header during Opening */}
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-white/80 uppercase pointer-events-none">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#b82329] animate-pulse" />
            <span className="text-white font-condensed font-bold text-sm tracking-[0.2em]">
              SHLOKH CINEMA UNIT
            </span>
            <span className="hidden sm:inline text-white/40 font-mono text-[11px] tracking-wider">
              • APERTURE OPENING
            </span>
          </div>
          <div className="text-white/50 font-mono text-[10px] tracking-widest">
            SEQ 01 / TAKE 04
          </div>
        </div>

        {/* Bottom Subtitle & Skip Prompt */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[11px] sm:text-xs text-white/70 pointer-events-none">
          <div className="font-condensed font-bold uppercase tracking-[0.2em] text-white/90">
            CAPTURING STORIES • CREATING IMPACT
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
            TAP ANYWHERE TO SKIP
          </div>
        </div>
      </div>

      {/* =========================================================================
          HERO STAGE CONTAINER WITH CONTINUOUS MORPHING MONITOR CARD
      ========================================================================== */}
      <div
        key={animationKey}
        className="relative w-full max-w-full overflow-visible select-none"
      >
        {/* Layer 0: 35mm Physical Filmstrip extending diagonally behind the card */}
        <FilmstripSpool />

        {/* Layer 1: The Framed Cinema Viewfinder Monitor Card (FLIP-Morphing) */}
        <div
          ref={cardRef}
          style={
            stage === "center"
              ? {
                  transform: `translate3d(${coords.x}px, ${coords.y}px, 0) scale(${coords.scale})`,
                  zIndex: 50,
                  boxShadow: "0 30px 100px -10px rgba(0, 0, 0, 0.9)",
                }
              : stage === "docking"
              ? {
                  transform: "translate3d(0, 0, 0) scale(1)",
                  zIndex: 45,
                  transition: "transform 850ms cubic-bezier(0.16, 1, 0.3, 1), box-shadow 850ms ease",
                  boxShadow: "0 24px 60px -12px rgba(20, 19, 16, 0.35)",
                }
              : {
                  zIndex: 10,
                  boxShadow: "0 24px 60px -12px rgba(20, 19, 16, 0.35)",
                }
          }
          className="relative w-full aspect-[16/10.5] sm:aspect-[16/10] bg-[#0c0c0b] text-[#fffdf8] border border-[#2a2925] overflow-hidden rounded-none group will-change-transform"
          aria-label="Shlokh cinematic unit camera monitor"
        >
          {/*
            Continuous Opening & Loop Video (Clean Delogo'd Footage, Zero Gemini Watermark)
            Contains 3D lens aperture dilation, golden sunrise temple shoot,
            and single native red autofocus reticle.
          */}
          <video
            ref={videoRef}
            src="/Video/hero_opening_cinematic.mp4"
            poster="/images/mockup_assets/aperture_closed_poster.png"
            autoPlay
            muted
            playsInline
            preload="auto"
            onTimeUpdate={handleTimeUpdate}
            className="w-full h-full object-cover object-center"
          />

          {/* Anamorphic Lens Flare Sweep across camera glass */}
          <div className="hero-lens-flare" aria-hidden="true" />

          {/* Subtle Edge Vignette */}
          <div
            className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* Layer 2: Master Mockup Signature & GPS coordinates below monitor */}
        <div className="flex items-center justify-between mt-3 px-1 text-[10px] text-[#747169] font-mono uppercase tracking-widest">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#b82329]" />
            <span>17°22&apos;31&quot;N 78°28&apos;29&quot;E</span>
            <span className="hidden sm:inline text-[#c2bcb0]">•</span>
            <span className="hidden sm:inline">HYDERABAD STUDIO</span>
          </div>
          <button
            type="button"
            onClick={onExplore}
            className="text-[#b82329] hover:text-[#9e1c21] font-bold inline-flex items-center gap-1 cursor-pointer"
          >
            <span>Shareef Sir Archive</span>
            <ArrowUpRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </>
  )
}
