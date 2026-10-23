export interface PortfolioItem {
  id: string
  title: string
  client: string
  category: 'Government & Public' | 'Publications & Heritage' | 'Corporate & Commercial' | 'Studio & Podcasts' | 'Documentary'
  image: string
  aspectRatio?: string
  description: string
  year?: string
  highlights?: string[]
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: "weaves-andhra-pradesh",
    title: "Weaves Andhra Pradesh — Coffee Table Book",
    client: "Handlooms & Textiles Dept, Govt. of Andhra Pradesh",
    category: "Publications & Heritage",
    image: "/images/portfolio_photos/p10_weaves_andhra_book.jpg",
    description:
      "A tribute to Andhra Pradesh's timeless weaving traditions. Launched by Hon'ble Chief Minister Sri Nara Chandrababu Naidu Garu, this premium publication showcases the legacy, diversity, and excellence of handloom weaves from across the state.",
    year: "Government Publication",
    highlights: ["Launched by Hon'ble CM Nara Chandrababu Naidu", "QR-Code embedded documentary videos", "Archival artisan photography", "Statewide cluster mapping"],
  },
  {
    id: "serp-25-years",
    title: "25 Years of SERP — Silver Jubilee Book with QR Videos",
    client: "Society for Elimination of Rural Poverty (SERP), AP",
    category: "Publications & Heritage",
    image: "/images/portfolio_photos/p10_serp_25_years_qr_book.jpg",
    description:
      "Documenting 25 years of rural transformation, women empowerment, and poverty alleviation. Includes QR codes integrated on every chapter allowing readers to watch authentic field videos of beneficiaries.",
    year: "Silver Jubilee Edition",
    highlights: ["Interactive QR-video integration", "Coverage of self-help group federations", "Interviews of rural micro-entrepreneurs"],
  },
  {
    id: "mepma-prerana-sakhi",
    title: "MEPMA — Prerana Sakhi Coffee Table Book",
    client: "Mission for Elimination of Poverty in Municipal Areas",
    category: "Publications & Heritage",
    image: "/images/portfolio_photos/p10_mepma_prerana_sakhi_book.jpg",
    description:
      "A celebration of urban women empowerment and the incredible journey of Self Help Groups under MEPMA. Launched by Hon'ble CM Nara Chandrababu Naidu Garu, capturing stories of urban women leading community change.",
    year: "Government Publication",
    highlights: ["Launched by Hon'ble CM Nara Chandrababu Naidu", "Urban women empowerment chronicles", "Full-color photographic storytelling"],
  },
  {
    id: "savara-tribal-art",
    title: "Savara Tribal Art — Heritage Book & Branding",
    client: "Tribal Welfare Department & APITCO",
    category: "Publications & Heritage",
    image: "/images/portfolio_photos/p10_savara_tribal_art_book.jpg",
    description:
      "Preserving and branding the ancient Savara tribal wall paintings and folklore of North Coastal Andhra Pradesh. Comprehensive documentation of tribal artisan lineages, symbolic motifs, and living heritage.",
    year: "Heritage Preservation",
    highlights: ["Tribal indigenous art documentation", "Artisan identity branding", "Preserved for national archives"],
  },
  {
    id: "vizag-pixels-panoramas",
    title: "Vizag — The Pixels & Panoramas Collection",
    client: "VMRDA & Tourism Promotion",
    category: "Publications & Heritage",
    image: "/images/portfolio_photos/p10_vizag_pixels_panoramas_book.jpg",
    description:
      "A premium coffee table book featuring VMRDA parks, submarine museums, panoramic coastal photography, QR-enabled immersive video experiences, and the visual soul of Visakhapatnam.",
    year: "Tourism & Heritage",
    highlights: ["Aerial drone panoramic cinematography", "Interactive multimedia scan codes", "VMRDA institutional showcase"],
  },
  {
    id: "ten-craft-clusters-india",
    title: "10 Craft Clusters of India Documentation",
    client: "Ministry of Textiles, Government of India (Handicrafts Dept)",
    category: "Government & Public",
    image: "/images/portfolio_photos/p10_cm_launching_weaves_book.jpg",
    description:
      "Partnering with the Government of India Handicrafts Department to brand and document 10 artisan clusters across India: Pochampally (Telangana), Kutch & Patan (Gujarat), Kondapalli & Etikoppaka (AP), Channapatna & Bidri (Karnataka), Sanganer (Rajasthan), Saharanpur & Moradabad (UP).",
    year: "National Initiative",
    highlights: ["10 Nationwide Handicraft Clusters", "Artisan interviews & cluster branding", "Preserving heritage for future generations"],
  },
  {
    id: "beneficiary-field-assignment",
    title: "Grassroots Beneficiary Field Documentation",
    client: "Government Welfare Departments, Telangana & AP",
    category: "Government & Public",
    image: "/images/portfolio_photos/p08_field_temple_shoot.jpg",
    description:
      "When responsibility was entrusted to us: Listening to every voice, documenting every story, recording real feedback. Hundreds of beneficiary interactions filmed on location outside buses, village halls, and rural mandals.",
    year: "Statewide Campaign",
    highlights: ["Authentic field observations", "Multi-mandall coverage with mobile crews", "On-location editing & same-week reporting"],
  },
  {
    id: "stadium-mahila-dinotsavam",
    title: "Statewide Mahila Dinotsavam Stadium Filming",
    client: "State Government Mega Convention",
    category: "Corporate & Commercial",
    image: "/images/portfolio_photos/p11_stadium_event_crowd.jpg",
    description:
      "Full stadium-scale multi-camera broadcast and highlight coverage for the massive Women's Day celebrations. Over 10,000 attendees captured with heavy broadcast tripods, live switcher feeds, and rapid news releases.",
    year: "Mega Event Coverage",
    highlights: ["10,000+ attendee stadium coverage", "Heavy cinema rigs on multi-tiered tripods", "Live switcher multi-view capture"],
  },
  {
    id: "executive-boardroom-csuite",
    title: "Executive Leadership & Boardroom Series",
    client: "Corporate & Institutional Leadership",
    category: "Corporate & Commercial",
    image: "/images/portfolio_photos/p11_boardroom_executive_interview.jpg",
    description:
      "Intimate, high-fidelity corporate interviews with senior managing directors, institutional founders, and government secretaries in executive boardroom settings.",
    year: "Corporate Communications",
    highlights: ["Cinematic dual-angle lighting", "Directional lavalier microphone capture", "Broadcast 4K master finishing"],
  },
  {
    id: "live-atem-broadcast-setup",
    title: "Live Multi-Camera Switcher Operations",
    client: "Broadcast & Live Production Division",
    category: "Corporate & Commercial",
    image: "/images/portfolio_photos/p12_live_broadcast_atem_switcher.jpg",
    description:
      "Field broadcast control with Blackmagic ATEM production switchers, multiple real-time program/preview monitors, audio mixers, and multi-feed SSD recording for zero-latency live event mastering.",
    year: "Live Broadcast",
    highlights: ["ATEM multi-view live console", "Multi-channel isolated camera recording", "Zero-failure live event execution"],
  },
  {
    id: "podcast-neon-studio",
    title: "Signature Ambient Podcast & Talk Show Suite",
    client: "Shlokh In-House Creative Studios, Hyderabad",
    category: "Studio & Podcasts",
    image: "/images/extracted/raw_p15_1.jpeg",
    description:
      "Custom-designed intimate video podcast environment featuring color-calibrated ambient RGB backlighting, acoustic treatment, plush armchairs, professional Rode broadcast microphones, and multi-angle 4K cameras.",
    year: "Studio Production",
    highlights: ["RGB mood-matched ambient lighting", "Multi-angle Sony FX3 4K cameras", "Studio microphone boom arrays", "Viral short-form snippet extraction"],
  },
  {
    id: "podcast-executive-studio-set2",
    title: "Corporate Talk Show & Executive Studio Set",
    client: "Shlokh In-House Creative Studios, Hyderabad",
    category: "Studio & Podcasts",
    image: "/images/extracted/raw_p16_1.jpeg",
    description:
      "Sophisticated talk show space equipped with Simpex parabolic softboxes, velvet club seating, teleprompters, and real-time audio monitor console for executive client discussions.",
    year: "Studio Production",
    highlights: ["Simpex parabolic diffuse softbox", "Integrated teleprompter for smooth delivery", "Sound-treated studio space"],
  },
  {
    id: "campus-university-shoots",
    title: "University Campus & Youth Leadership Campaign",
    client: "Leading Academic Institutions",
    category: "Corporate & Commercial",
    image: "/images/portfolio_photos/p13_students_campus_leadership.jpg",
    description:
      "Dynamic campus film documenting youth talent, research facilities, and future leaders across premier universities with vibrant multi-camera cinematography and drone fly-throughs.",
    year: "Higher Education",
    highlights: ["Youth culture & campus cinematography", "State-of-the-art laboratory walkthroughs", "Multi-platform promotional campaign"],
  },
  {
    id: "healthcare-malla-reddy-ad",
    title: "Malla Reddy Health City Commercial & Patient Stories",
    client: "Malla Reddy Health City",
    category: "Corporate & Commercial",
    image: "/images/portfolio_photos/p13_protect_teeth_malla_reddy_ad.jpg",
    description:
      "Healthcare awareness commercial and clinical excellence campaign filmed inside advanced dental and medical college hospitals, balancing clinical trust with warm, patient-centric emotion.",
    year: "Healthcare Campaign",
    highlights: ["Advanced medical equipment filming", "Doctor & patient testimonial videos", "Multichannel TV and digital ad rollout"],
  },
]

export const craftClustersList = [
  { name: "Pochampally", state: "Telangana", craft: "Ikat Weaving & Silk" },
  { name: "Kutch", state: "Gujarat", craft: "Ajrakh & Embroideries" },
  { name: "Kondapalli", state: "Andhra Pradesh", craft: "Wooden Toys & Craft" },
  { name: "Channapatna", state: "Karnataka", craft: "Lacquerware Toys" },
  { name: "Sanganer", state: "Rajasthan", craft: "Block Printing" },
  { name: "Saharanpur", state: "Uttar Pradesh", craft: "Wood Carving" },
  { name: "Moradabad", state: "Uttar Pradesh", craft: "Brassware Metalcraft" },
  { name: "Patan", state: "Gujarat", craft: "Double-Ikat Patola" },
  { name: "Etikoppaka", state: "Andhra Pradesh", craft: "Natural Lacquer Craft" },
  { name: "Bidri", state: "Karnataka", craft: "Bidriware Inlay Craft" },
]
