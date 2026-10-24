export interface PhotographicValues {
  focalLength: string
  aperture: string
  shutterSpeed: string
  iso: string
  lighting: string
  colorTemp: string
  cameraBody: string
  lensModel: string
}

export interface ShareefPageSpread {
  pageNumber: number
  title: string
  subtitle: string
  category: 'Cover & Statement' | 'Maritime & Panoramas' | 'Heritage & Artisans' | 'Grassroots & Agriculture' | 'Infrastructure & Industry' | 'State Publications' | 'Cinema & Studio'
  imageHd: string
  aspectRatio: string
  description: string
  keyElements: string[]
  exposureHighlight?: string
}

export interface ShareefPhotoItem {
  id: string
  title: string
  category: 'Coastal & Aerial' | 'Artisans & Handlooms' | 'Grassroots & Agriculture' | 'Infrastructure & Industry' | 'State Books & Dignitaries' | 'Cinema Stills & BTS'
  image: string
  thumbnail?: string
  sourcePage: number
  location: string
  year: string
  story: string
  values: PhotographicValues
  tags: string[]
}

// All 24 High-Definition Master Spreads extracted at 300 DPI (1787x2527 px)
export const shareefPageSpreads: ShareefPageSpread[] = [
  {
    pageNumber: 1,
    title: 'Visual Masterworks: Volume Cover',
    subtitle: 'Fine Art, Cultural Documentation & High-Impact Commercial Photography',
    category: 'Cover & Statement',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_01.jpg',
    aspectRatio: '1787/2527',
    description: 'The frontispiece and introductory folio establishing the photographic visual language of Shlokh Advertising & Entertainments.',
    keyElements: ['Fine-Art Composition', 'Cultural Vignette', 'Master Lenswork'],
    exposureHighlight: '50mm • f/1.4 • Natural Directional Light'
  },
  {
    pageNumber: 2,
    title: 'The Director\'s Vision & Brand Identity',
    subtitle: 'Shlokh Advertising (Brand Identity: Shlokh Entertainments)',
    category: 'Cover & Statement',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_02.jpg',
    aspectRatio: '1787/2527',
    description: 'Executive manifesto and rural portraiture capturing the authentic spirit of people-first storytelling across South India.',
    keyElements: ['Rural Indian Portraiture', 'Authentic Expression', 'Editorial Layout'],
    exposureHighlight: '85mm Prime • f/1.8 • Morning Warm Ambient'
  },
  {
    pageNumber: 3,
    title: 'Behind The Lens: Cinema Field Production',
    subtitle: 'Heavy Rigging, Multi-Camera Setup & Engineering Terrain',
    category: 'Cinema & Studio',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_03.jpg',
    aspectRatio: '1787/2527',
    description: 'Behind-the-scenes documentation of the Shlokh cinematic crew capturing mega-infrastructure and large-scale public campaigns.',
    keyElements: ['Cinema Rigging', 'Field Direction', 'Hydraulic Crane Setup'],
    exposureHighlight: '24-70mm f/2.8 GM • f/4.0 • 1/500s'
  },
  {
    pageNumber: 4,
    title: 'Architectural Lighting & Studio Soundstage',
    subtitle: 'Precision Key Lighting, Gaffer Control & Gimbal Motion',
    category: 'Cinema & Studio',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_04.jpg',
    aspectRatio: '1787/2527',
    description: 'Precision studio environment equipped with high-CRI lighting fixtures, heavy motorized gimbals, and calibrated color monitoring.',
    keyElements: ['Nanlite High-Output Fixtures', 'C-Stand Rigging', 'Color Calibrated Space'],
    exposureHighlight: '35mm Cine • f/2.0 • 5600K Studio Balance'
  },
  {
    pageNumber: 5,
    title: 'Coastal Panoramas & Maritime Heritage: Visakhapatnam',
    subtitle: 'Rushikonda Beach, INS Kursura Submarine Museum & TU-142 Aircraft',
    category: 'Maritime & Panoramas',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_05.jpg',
    aspectRatio: '1787/2527',
    description: 'A multi-perspective visual study of Visakhapatnam\'s eastern coastline: turquoise waves at Rushikonda, the historic naval submarine, and aerial coastlines.',
    keyElements: ['INS Kursura Submarine', 'TU-142 Aircraft Museum', 'Rushikonda Shoreline', 'Aerial Drone Survey'],
    exposureHighlight: '16-35mm Ultra-Wide • f/8.0 • 1/1000s • ISO 100'
  },
  {
    pageNumber: 6,
    title: 'Sacred Architecture & Living Heritage',
    subtitle: 'Ancient Temples, Chiseled Granite & Pilgrim Sanctuaries',
    category: 'Heritage & Artisans',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_06.jpg',
    aspectRatio: '1787/2527',
    description: 'Fine-art architectural photography capturing intricate stone carvings, temple gopurams, and morning light piercing ancient sanctums.',
    keyElements: ['Granite Carvings', 'Gopuram Silhouette', 'Spiritual Atmosphere'],
    exposureHighlight: '24mm Tilt-Shift Perspective • f/11 • 1/60s'
  },
  {
    pageNumber: 7,
    title: 'Indigenous Artistry: Terracotta & Tribal Murals',
    subtitle: 'Savara Wall Art, Master Clay Artisans & Sacred Terracotta Steeds',
    category: 'Heritage & Artisans',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_07.jpg',
    aspectRatio: '1787/2527',
    description: 'Intimate documentation of traditional potters molding raw clay into votive terracotta horses and indigenous artists painting sacred Savara murals.',
    keyElements: ['Terracotta Sculptors', 'Savara Tribal Motifs', 'Hands in Clay', 'Organic Mineral Pigments'],
    exposureHighlight: '50mm Macro/Prime • f/2.2 • Soft Workshop Light'
  },
  {
    pageNumber: 8,
    title: 'Grassroots Transformation & Women Micro-Entrepreneurs',
    subtitle: 'SERP / MEPMA Beneficiaries, Aaradhya Eco-Friendly Bags & Rural Dignity',
    category: 'Grassroots & Agriculture',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_08.jpg',
    aspectRatio: '1787/2527',
    description: 'Documenting women self-help group leaders manufacturing biodegradable bags, leading community cooperatives, and earning financial independence.',
    keyElements: ['Aaradhya Eco-Bags', 'Micro-Enterprise Weavers', 'Self-Help Group Leaders'],
    exposureHighlight: '85mm f/1.4 • f/2.0 • 1/320s • ISO 200'
  },
  {
    pageNumber: 9,
    title: 'Verdant Fields & Agricultural Transformation',
    subtitle: 'Paddy Harvesting, Organic Horticulture & Sustainable Irrigation',
    category: 'Grassroots & Agriculture',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_09.jpg',
    aspectRatio: '1787/2527',
    description: 'Sweeping agricultural spreads showing golden paddy fields, drone perspectives over river canals, and joyful farmers during harvest season.',
    keyElements: ['Golden Harvest', 'Canal Networks', 'Organic Vegetable Clusters'],
    exposureHighlight: '24-105mm G-Master • f/5.6 • 1/640s • ISO 125'
  },
  {
    pageNumber: 10,
    title: 'Royal Handlooms of India: Dharmavaram & Pochampally',
    subtitle: 'Loom Rhythms, Pure Silk Warp and Weft & Gold Zari Heritage',
    category: 'Heritage & Artisans',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_10.jpg',
    aspectRatio: '1787/2527',
    description: 'Master handloom weavers weaving traditional silks. Curated and published in national archival volumes presented to state dignitaries.',
    keyElements: ['Wooden Fly-Shuttle Looms', 'Zari Threads', 'Vibrant Ikat Patterns'],
    exposureHighlight: '50mm f/1.2 GM • f/1.8 • 1/250s • ISO 320'
  },
  {
    pageNumber: 11,
    title: 'Kondapalli Softwood Toys & Heritage Craft Guilds',
    subtitle: 'Generations of Woodcarving, Natural Lacquers & Traditional Figures',
    category: 'Heritage & Artisans',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_11.jpg',
    aspectRatio: '1787/2527',
    description: 'Capturing the artisan village of Kondapalli where master sculptors carve Tella Poniki wood into Dasavatara and rural mythological figures.',
    keyElements: ['Kondapalli Figurines', 'Chisel Craftsmanship', 'Natural Vegetable Dyes'],
    exposureHighlight: '90mm Macro • f/2.8 • 1/200s • Continuous CRI 98 Fill'
  },
  {
    pageNumber: 12,
    title: 'Tribal Highlands: Araku Valley & Indigenous Traditions',
    subtitle: 'Organic Arabica Coffee Estates, Dhimsa Dancers & Agency Mist',
    category: 'Maritime & Panoramas',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_12.jpg',
    aspectRatio: '1787/2527',
    description: 'The rolling mist of the Eastern Ghats, documenting organic coffee cultivators, tribal weekly markets (Shandies), and vibrant cultural expressions.',
    keyElements: ['Araku Coffee Harvest', 'Dhimsa Dance Rituals', 'Misty Ghat Ridges'],
    exposureHighlight: '70-200mm f/2.8 • f/3.2 • 1/800s • ISO 250'
  },
  {
    pageNumber: 13,
    title: 'Mega Infrastructure & Public Engineering Marvels',
    subtitle: 'Polavaram Multi-Purpose Irrigation Project, Highways & Bridges',
    category: 'Infrastructure & Industry',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_13.jpg',
    aspectRatio: '1787/2527',
    description: 'Large-scale civil engineering photography capturing the immense concrete spillways, hydraulic radial gates, and heavy earthmovers at Polavaram.',
    keyElements: ['Polavaram Spillway', 'Hydraulic Radial Gates', 'River Godavari Basin'],
    exposureHighlight: '16-35mm Cinema Lens • f/9.0 • 1/500s • Polarized Filter'
  },
  {
    pageNumber: 14,
    title: 'Heavy Industry, Energy & Port Logistics',
    subtitle: 'Thermal Turbines, Container Terminals & Wind Energy Corridors',
    category: 'Infrastructure & Industry',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_14.jpg',
    aspectRatio: '1787/2527',
    description: 'High-contrast commercial photography of industrial infrastructure, deep-sea container ship loading, and giant wind turbine fields.',
    keyElements: ['Wind Turbines at Sunset', 'Deep-Water Berths', 'Heavy Fabrication'],
    exposureHighlight: '24-70mm f/2.8 • f/8.0 • 1/250s • Twilight Exposure'
  },
  {
    pageNumber: 15,
    title: 'Iconic Master Portrait: The Village Matriarch',
    subtitle: 'Ultra-High-Resolution 2.5K x 3.5K Fine-Art Character Study',
    category: 'Grassroots & Agriculture',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_15.jpg',
    aspectRatio: '1571/2222',
    description: 'An internationally celebrated character study documenting rural wisdom, resilience, and timeless human dignity with breathtaking textural fidelity.',
    keyElements: ['Intricate Facial Textures', 'Deep Soulful Gaze', 'Fine-Art Chiaroscuro'],
    exposureHighlight: '85mm f/1.4 Art • f/2.0 • 1/400s • ISO 100 • Diffused Scrim'
  },
  {
    pageNumber: 16,
    title: 'Published Coffee Table Books & State Monographs',
    subtitle: 'Weaves of Andhra, Living Heritage & Craft Clusters of India',
    category: 'State Publications',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_16.jpg',
    aspectRatio: '1787/2527',
    description: 'Hardbound luxury monographs, gold-embossed slipcases, and archival volumes designed and photographed by Shlokh Advertising for state ministries.',
    keyElements: ['Luxury Hardcover Editions', 'Zari Gold Foil Embossing', 'Archival Matte Prints'],
    exposureHighlight: '50mm Prime • f/5.6 • Overhead Softbox Balanced'
  },
  {
    pageNumber: 17,
    title: 'Official Book Releases with Hon\'ble CM Sri Nara Chandrababu Naidu',
    subtitle: 'Dignitary Presentations, Cabinet Ministers & State Ceremonies',
    category: 'State Publications',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_17.jpg',
    aspectRatio: '1787/2527',
    description: 'Photographic documentation of official state book launch ceremonies where the Hon\'ble Chief Minister unveiled Shlokh\'s heritage publications.',
    keyElements: ['Hon\'ble CM Sri Nara Chandrababu Naidu', 'Cabinet Ministers', 'Official Release Unveiling'],
    exposureHighlight: '24-70mm f/2.8 • f/3.5 • 1/250s • Bounce Flash 5500K'
  },
  {
    pageNumber: 18,
    title: 'Executive Leadership & C-Suite Portraits',
    subtitle: 'Corporate Boardrooms, Bureaucratic Leaders & Industry Titans',
    category: 'Cover & Statement',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_18.jpg',
    aspectRatio: '1787/2527',
    description: 'Prestigious corporate portraiture emphasizing authority, intellect, and forward-looking leadership for annual reports and global summits.',
    keyElements: ['Corporate Direction', 'Architectural Boardroom', 'Rembrandt Key Lighting'],
    exposureHighlight: '85mm Portrait Prime • f/2.2 • Dual Stripbox Rim'
  },
  {
    pageNumber: 19,
    title: 'State Pavilions, Summits & Experiential Installations',
    subtitle: 'AP Global Investors Summit, Media Walls & Immersive Showcases',
    category: 'State Publications',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_19.jpg',
    aspectRatio: '1787/2527',
    description: 'Exhibition architecture and pavilion documentation capturing curved LED video walls, interactive touchscreen kiosks, and VIP delegations.',
    keyElements: ['Exhibition Pavilions', 'Curved LED Displays', 'International Delegates'],
    exposureHighlight: '16-35mm Wide • f/4.0 • 1/125s • Ambient Stage Balance'
  },
  {
    pageNumber: 20,
    title: 'Tourism Panoramas: Gandikota & River Corridors',
    subtitle: 'The Grand Canyon of India, Bhavani Island & Coastal Estuaries',
    category: 'Maritime & Panoramas',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_20.jpg',
    aspectRatio: '1787/2527',
    description: 'Breathtaking landscape panoramas of Gandikota gorge over the Pennar River, the lush riverine greenery of Bhavani Island, and dramatic rock formations.',
    keyElements: ['Gandikota Gorge', 'Pennar River Cliffs', 'Riverine Sunset Panorama'],
    exposureHighlight: '24mm f/1.4 GM • f/8.0 • 1/320s • ISO 100 • Graduated ND'
  },
  {
    pageNumber: 21,
    title: 'Ecological Sanctuaries & Wildlife Reserves',
    subtitle: 'Coringa Mangroves, Otter Habitats & Coastal Avian Sanctuaries',
    category: 'Maritime & Panoramas',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_21.jpg',
    aspectRatio: '1787/2527',
    description: 'Dense mangrove forests, coastal tidal creeks, and migratory waterbirds photographed with high-reach telephoto glass.',
    keyElements: ['Mangrove Canopy', 'Tidal Creeks', 'Avian Telephoto Studies'],
    exposureHighlight: '400mm f/2.8 GM • f/4.0 • 1/1600s • High-Speed Tracking'
  },
  {
    pageNumber: 22,
    title: 'Sacred River Rituals: Krishna & Godavari Pushkaralu',
    subtitle: 'Millions of Pilgrims, Evening Harati Fires & Holy River Confluences',
    category: 'Heritage & Artisans',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_22.jpg',
    aspectRatio: '1787/2527',
    description: 'Atmospheric night photography capturing the spiritual grandeur of the Maha Harati, brass fire torches, floating lamps, and devout pilgrim crowds.',
    keyElements: ['Maha Harati Torches', 'Ghat Illumination', 'Sacred Water Reflections'],
    exposureHighlight: '50mm f/1.2 • f/1.4 • 1/160s • ISO 1600 • Fire Light Balance'
  },
  {
    pageNumber: 23,
    title: 'Youth Empowerment, Residential Schools & Education',
    subtitle: 'Digital Classrooms, STEM Innovation Labs & Bright Futures',
    category: 'Grassroots & Agriculture',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_23.jpg',
    aspectRatio: '1787/2527',
    description: 'Vibrant candid documentation in state residential schools, capturing students experimenting with robotics, science models, and digital tabs.',
    keyElements: ['STEM Science Labs', 'Inspiring Young Faces', 'Digital Learning Kits'],
    exposureHighlight: '35mm Prime • f/2.0 • 1/250s • Ambient Daylight Window'
  },
  {
    pageNumber: 24,
    title: 'Colophon, Production Syndicate & Contact',
    subtitle: 'Shlokh Advertising & Shlokh Entertainments Photographic Division',
    category: 'Cover & Statement',
    imageHd: '/images/portfolio_shareef/pages_hd/shareef_page_24.jpg',
    aspectRatio: '1787/2527',
    description: 'Production credits, technical gear roster, studio base locations in Hyderabad & Guntur, and official contact channels for commercial commissions.',
    keyElements: ['Production Colophon', 'Studio Roster', 'Official Contact Lines'],
    exposureHighlight: 'Official Technical Index & Seal'
  }
]

// Standout Individual High-Definition Photographs extracted natively from PDF
export const shareefCuratedPhotos: ShareefPhotoItem[] = [
  {
    id: 'sh-matriarch-portrait',
    title: 'The Resilient Matriarch',
    category: 'Grassroots & Agriculture',
    image: '/images/portfolio_shareef/photos_raw/photo_p15_1_2481x3509.jpeg',
    thumbnail: '/images/portfolio_shareef/photos_raw/photo_p15_1_2481x3509.jpeg',
    sourcePage: 15,
    location: 'Rural Rayalaseema, Andhra Pradesh',
    year: '2025',
    story: 'Captured at 2481x3509 native resolution. This iconic character study portrays the weathered grace, indomitable spirit, and dignity of rural women who anchor agricultural communities.',
    tags: ['Ultra High-Res 2.5K', 'Fine-Art Portrait', 'Character Study', 'National Archive'],
    values: {
      focalLength: '85mm Prime',
      aperture: 'f/2.0',
      shutterSpeed: '1/400s',
      iso: 'ISO 100',
      lighting: 'Overcast Diffused Daylight with Calico Reflector',
      colorTemp: '5400K Natural Daylight',
      cameraBody: 'Sony Alpha 1 (50.1 MP Sensor)',
      lensModel: 'FE 85mm f/1.4 GM'
    }
  },
  {
    id: 'sh-rushikonda-aerial',
    title: 'Rushikonda Emerald Coastline',
    category: 'Coastal & Aerial',
    image: '/images/portfolio_shareef/photos_raw/photo_p05_1_800x252.jpeg',
    sourcePage: 5,
    location: 'Rushikonda Beach, Visakhapatnam',
    year: '2025',
    story: 'Dramatic panorama over the turquoise waters of the Bay of Bengal, where the Eastern Ghat hills plunge directly into the coastline.',
    tags: ['Aerial Panorama', 'Coastal Tourism', 'Vizag', 'Bay of Bengal'],
    values: {
      focalLength: '24mm Ultra-Wide',
      aperture: 'f/7.1',
      shutterSpeed: '1/1250s',
      iso: 'ISO 100',
      lighting: 'Mid-Morning Direct Sunlight + Polarizer',
      colorTemp: '5600K Clean White',
      cameraBody: 'Hasselblad L2D-20c Aerial Platform',
      lensModel: '24mm Hasselblad Cine Optic'
    }
  },
  {
    id: 'sh-kursura-submarine',
    title: 'INS Kursura Naval Submarine Museum',
    category: 'Coastal & Aerial',
    image: '/images/portfolio_shareef/photos_raw/photo_p05_4_788x341.jpeg',
    sourcePage: 5,
    location: 'RK Beach Sands, Visakhapatnam',
    year: '2025',
    story: 'The legendary Soviet-built Kalvari-class submarine preserved on the sands of Ramakrishna Beach, documenting India\'s proud maritime warfare history.',
    tags: ['Maritime Heritage', 'Indian Navy', 'RK Beach', 'Naval History'],
    values: {
      focalLength: '35mm Prime',
      aperture: 'f/8.0',
      shutterSpeed: '1/800s',
      iso: 'ISO 100',
      lighting: 'Late Afternoon Golden Coast Sun',
      colorTemp: '5200K Warm Gold',
      cameraBody: 'Sony A7R V Full-Frame',
      lensModel: 'FE 35mm f/1.4 GM'
    }
  },
  {
    id: 'sh-savara-artisan',
    title: 'Savara Tribal Terracotta & Murals',
    category: 'Artisans & Handlooms',
    image: '/images/portfolio_shareef/photos_raw/photo_p07_3_800x398.jpeg',
    sourcePage: 7,
    location: 'Seethampeta Tribal Agency, Andhra Pradesh',
    year: '2025',
    story: 'Traditional folk artisans sculpting sacred terracotta horses and painting ritual wall murals with organic lime and charcoal pigments.',
    tags: ['Tribal Art', 'Terracotta Craft', 'Indigenous Artisans', 'Living Heritage'],
    values: {
      focalLength: '50mm Macro Prime',
      aperture: 'f/2.2',
      shutterSpeed: '1/250s',
      iso: 'ISO 250',
      lighting: 'Workshop Northern Sky Ambient Light',
      colorTemp: '4800K Neutral Warmth',
      cameraBody: 'Sony FX6 Cinema Line',
      lensModel: 'FE 50mm f/1.2 GM'
    }
  },
  {
    id: 'sh-women-shg-empowerment',
    title: 'Aaradhya Eco-Friendly Enterprise',
    category: 'Grassroots & Agriculture',
    image: '/images/portfolio_shareef/photos_raw/photo_p08_1_1239x1755.jpeg',
    sourcePage: 8,
    location: 'Guntur District, Andhra Pradesh',
    year: '2025',
    story: 'Extracted at high-resolution 1239x1755. Women micro-entrepreneurs producing sustainable cotton bags and managing community bank operations through SERP.',
    tags: ['Women SHG', 'SERP MEPMA', 'Micro-Finance', 'Grassroots Leadership'],
    values: {
      focalLength: '70mm Telephoto',
      aperture: 'f/2.8',
      shutterSpeed: '1/320s',
      iso: 'ISO 200',
      lighting: 'Dual Nanlite Forza 300 Fill + Ambient Windows',
      colorTemp: '5500K Daylight',
      cameraBody: 'Sony Alpha 1 (50.1 MP)',
      lensModel: 'FE 70-200mm f/2.8 GM OSS II'
    }
  },
  {
    id: 'sh-polavaram-spillway',
    title: 'Polavaram Dam: Mega Engineering',
    category: 'Infrastructure & Industry',
    image: '/images/portfolio_shareef/photos_raw/photo_p13_1_800x573.jpeg',
    sourcePage: 13,
    location: 'Godavari River Basin, Polavaram',
    year: '2025',
    story: 'Capturing the scale of India\'s largest national irrigation project: towering concrete piers, radial gates, and the surging waters of the Godavari.',
    tags: ['Mega Infrastructure', 'Polavaram Dam', 'Engineering', 'Civil Works'],
    values: {
      focalLength: '24mm Wide-Angle',
      aperture: 'f/8.0',
      shutterSpeed: '1/640s',
      iso: 'ISO 100',
      lighting: 'Midday Harsh Contrast with CPL Filter',
      colorTemp: '5600K Bright Sun',
      cameraBody: 'Sony A7R V (61 MP)',
      lensModel: 'FE 24-70mm f/2.8 GM II'
    }
  },
  {
    id: 'sh-state-book-unveil',
    title: 'State Publication Unveil with Hon\'ble CM Sri Nara Chandrababu Naidu',
    category: 'State Books & Dignitaries',
    image: '/images/portfolio_shareef/photos_raw/photo_p17_2_534x800.png',
    sourcePage: 17,
    location: 'State Secretariat, Amaravati',
    year: '2025',
    story: 'Official release and presentation of the heritage coffee table book series designed and photographed by Shlokh Advertising, unveiled by Hon\'ble CM Sri Nara Chandrababu Naidu.',
    tags: ['Hon\'ble CM Nara Chandrababu Naidu', 'Book Launch', 'State Archive', 'Dignitary'],
    values: {
      focalLength: '35mm Prime',
      aperture: 'f/3.2',
      shutterSpeed: '1/250s',
      iso: 'ISO 800',
      lighting: 'Ceiling Stage Wash + On-Camera Diffused Fill',
      colorTemp: '4500K Mixed Hall Balance',
      cameraBody: 'Sony Alpha 1 Cinema Line',
      lensModel: 'FE 35mm f/1.4 GM'
    }
  },
  {
    id: 'sh-gandikota-canyon',
    title: 'Gandikota: The Grand Canyon of India',
    category: 'Coastal & Aerial',
    image: '/images/portfolio_shareef/photos_raw/photo_p20_1_800x365.jpeg',
    sourcePage: 20,
    location: 'Gandikota Gorge, Kadapa District',
    year: '2025',
    story: 'Steep red granite gorge cut through centuries by the Pennar River, illuminated in late evening crimson light.',
    tags: ['Gandikota', 'Grand Canyon of India', 'Scenic Landscape', 'Geological Wonder'],
    values: {
      focalLength: '16mm Ultra-Wide',
      aperture: 'f/9.0',
      shutterSpeed: '1/125s',
      iso: 'ISO 64',
      lighting: 'Sunset Golden Hour Direct Horizon',
      colorTemp: '3800K Crimson Warmth',
      cameraBody: 'Sony A7R V Full-Frame',
      lensModel: 'FE 16-35mm f/2.8 GM'
    }
  },
  {
    id: 'sh-bts-cinema-rig',
    title: 'Cinema Master Rig on Location',
    category: 'Cinema Stills & BTS',
    image: '/images/portfolio_shareef/photos_raw/photo_p03_1_547x777.jpeg',
    sourcePage: 3,
    location: 'On Location, High-Altitude Shoot',
    year: '2025',
    story: 'Shlokh Entertainments field crew operating heavy hydraulic rigs, wireless video transmitters, and matte boxes during a state documentary shoot.',
    tags: ['BTS Field Production', 'Cinema Rigging', 'Matte Box', 'Director at Work'],
    values: {
      focalLength: '50mm Prime',
      aperture: 'f/2.5',
      shutterSpeed: '1/500s',
      iso: 'ISO 200',
      lighting: 'Direct Daylight + 12x12 Silk Overhead Diffusion',
      colorTemp: '5600K Crisp Daylight',
      cameraBody: 'Sony FX6 Cinema Camera',
      lensModel: 'Cooke Cine Prime 50mm'
    }
  }
]
