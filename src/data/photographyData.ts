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

export interface PhotographyItem {
  id: string
  title: string
  category: 'Heritage & Artisans' | 'Government & Public' | 'Cinema Stills & BTS' | 'Executive Portraits' | 'Industrial & Landscape'
  image: string
  location: string
  client: string
  year: string
  aspectRatio: 'landscape' | 'portrait' | 'wide' | 'square'
  spanClass: string
  story: string
  tags: string[]
  values: PhotographicValues
}

export const photographyItems: PhotographyItem[] = [
  {
    id: 'photo-weaves-master',
    title: 'The Master Weaver of Dharmavaram',
    category: 'Heritage & Artisans',
    image: '/images/portfolio_photos/p10_weaves_andhra_book.jpg',
    location: 'Dharmavaram Cluster, Andhra Pradesh',
    client: 'Handlooms & Textiles Dept, Govt. of Andhra Pradesh',
    year: '2025',
    aspectRatio: 'wide',
    spanClass: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-2',
    story: 'Documenting the intricate warp and weft of gold zari silk saris. Published in the official state coffee table book launched by Hon\'ble CM Sri Nara Chandrababu Naidu.',
    tags: ['Handloom', 'National Heritage', 'Archival Documentation', 'Coffee Table Book'],
    values: {
      focalLength: '50mm',
      aperture: 'f/1.4',
      shutterSpeed: '1/320s',
      iso: 'ISO 160',
      lighting: 'Diffuse Ambient Loom Sunlight',
      colorTemp: '5200K',
      cameraBody: 'Sony Alpha 1 (50.1 MP)',
      lensModel: 'FE 50mm f/1.2 G-Master'
    }
  },
  {
    id: 'photo-savara-mural',
    title: 'Savara Tribal Wall Chronicles',
    category: 'Heritage & Artisans',
    image: '/images/portfolio_photos/p10_savara_tribal_art_book.jpg',
    location: 'Seethampeta Agency, Srikakulam',
    client: 'Tribal Welfare Department & APITCO',
    year: '2025',
    aspectRatio: 'portrait',
    spanClass: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-2',
    story: 'High-fidelity macro documentation of indigenous tribal mud murals and sacred agrarian motifs, preserving threatened indigenous artistic heritage.',
    tags: ['Tribal Art', 'Indigenous Culture', 'Preservation', 'Field Photography'],
    values: {
      focalLength: '35mm',
      aperture: 'f/2.8',
      shutterSpeed: '1/200s',
      iso: 'ISO 200',
      lighting: 'Side-Angle Rim Lighting (Godox AD300Pro)',
      colorTemp: '5500K',
      cameraBody: 'Sony Alpha 7R V (61 MP)',
      lensModel: 'FE 24-70mm f/2.8 GM II'
    }
  },
  {
    id: 'photo-grassroots-mother',
    title: 'The Resilience of Rural Micro-Enterprise',
    category: 'Government & Public',
    image: '/images/portfolio_photos/p08_beneficiary_interview_saree.jpg',
    location: 'Khammam Mandal, Telangana',
    client: 'SERP / MEPMA State Initiative',
    year: '2024',
    aspectRatio: 'portrait',
    spanClass: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-2',
    story: 'Intimate environmental portrait of a self-help group leader recounting her journey to financial independence. Pure natural golden-hour morning illumination.',
    tags: ['Beneficiary Testimonial', 'Environmental Portrait', 'Natural Light', 'Human Rights'],
    values: {
      focalLength: '85mm',
      aperture: 'f/1.8',
      shutterSpeed: '1/640s',
      iso: 'ISO 100',
      lighting: 'Golden Hour Direct Backlight + Silver Reflector Fill',
      colorTemp: '4800K',
      cameraBody: 'Sony FX3 Cinema Line',
      lensModel: 'FE 85mm f/1.4 GM'
    }
  },
  {
    id: 'photo-temple-morning',
    title: 'Field Camera at Dawn: Heritage Sanctum',
    category: 'Cinema Stills & BTS',
    image: '/images/portfolio_photos/p08_field_temple_shoot.jpg',
    location: 'Simhachalam Foothills, AP',
    client: 'Culture & Tourism Directorate',
    year: '2024',
    aspectRatio: 'landscape',
    spanClass: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1',
    story: 'Field production rig positioned at first light, framing historic stone pillars and devotee pathways for a 4K cultural heritage documentary.',
    tags: ['Field Production', 'Anamorphic Glass', 'Sunrise Shoot', 'Cultural Heritage'],
    values: {
      focalLength: '40mm Anamorphic',
      aperture: 'T2.3',
      shutterSpeed: '1/50s (180° Shutter Angle)',
      iso: 'ISO 800 Base',
      lighting: 'Blue Hour Incipient Dawn Light',
      colorTemp: '6200K',
      cameraBody: 'ARRI Alexa Mini LF',
      lensModel: 'Cooke Anamorphic /i Full Frame Plus'
    }
  },
  {
    id: 'photo-cinema-tripod',
    title: 'Heavy Cinema Rig & Precision Framing',
    category: 'Cinema Stills & BTS',
    image: '/images/portfolio_photos/p11_cinematographer_tripod_heavy.jpg',
    location: 'Film Nagar Studios, Hyderabad',
    client: 'Commercial Ad Film Production',
    year: '2025',
    aspectRatio: 'square',
    spanClass: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1',
    story: 'Behind-the-lens look at Shlokh’s heavy cinema support system, precision fluid heads, and wireless video transmission monitors.',
    tags: ['Cinema Rig', 'Behind The Scenes', 'Film Equipment', 'Studio Shoot'],
    values: {
      focalLength: '70mm',
      aperture: 'f/2.8',
      shutterSpeed: '1/250s',
      iso: 'ISO 400',
      lighting: 'Aputure 600d Pro Key + Light Dome 150',
      colorTemp: '5600K',
      cameraBody: 'Sony Venice 2 8K',
      lensModel: 'Fujinon Premista 28-100mm T2.9'
    }
  },
  {
    id: 'photo-boardroom-leader',
    title: 'The Strategic Conversation: Boardroom Portrait',
    category: 'Executive Portraits',
    image: '/images/portfolio_photos/p11_boardroom_executive_interview.jpg',
    location: 'HITEC City, Hyderabad',
    client: 'Global Infrastructure Corporation',
    year: '2025',
    aspectRatio: 'landscape',
    spanClass: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1',
    story: 'Editorial executive portraiture capturing poise, leadership vision, and strategic depth with subtle low-key studio lighting.',
    tags: ['Executive Portrait', 'Corporate Leadership', 'Editorial Lighting', 'Interviews'],
    values: {
      focalLength: '50mm',
      aperture: 'f/1.8',
      shutterSpeed: '1/160s',
      iso: 'ISO 250',
      lighting: 'Godox SL200III with 120cm Octabox & Grid',
      colorTemp: '4200K',
      cameraBody: 'Sony FX6 Cinema Line',
      lensModel: 'Sony FE 50mm f/1.2 G-Master'
    }
  },
  {
    id: 'photo-tunnel-geometry',
    title: 'The Great Subterranean Corridor',
    category: 'Industrial & Landscape',
    image: '/images/portfolio_photos/p12_location_scout_tunnel.jpg',
    location: 'Srisailam Left Bank Tunnel Project',
    client: 'Irrigation & Command Area Development',
    year: '2024',
    aspectRatio: 'wide',
    spanClass: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1',
    story: 'Scouting underground engineering marvels. Long exposure capturing radial rock bolts, industrial conduits, and vanishing perspective.',
    tags: ['Industrial Photography', 'Underground Tunnel', 'Infrastructure', 'Engineering'],
    values: {
      focalLength: '16mm Ultra-Wide',
      aperture: 'f/8.0',
      shutterSpeed: '2.5s (Tripod Mounted)',
      iso: 'ISO 100',
      lighting: 'Industrial Sodium Halide + LED Work Floodlights',
      colorTemp: '3800K',
      cameraBody: 'Sony Alpha 7R V',
      lensModel: 'FE 16-35mm f/2.8 GM II'
    }
  },
  {
    id: 'photo-wood-craftsman',
    title: 'The Artisan of Kondapalli Toys',
    category: 'Heritage & Artisans',
    image: '/images/portfolio_photos/p12_workshop_craftsman_shoot.jpg',
    location: 'Kondapalli Crafts Colony, Vijayawada',
    client: 'Govt. of India Ministry of Textiles',
    year: '2024',
    aspectRatio: 'square',
    spanClass: 'col-span-1 md:col-span-1 lg:col-span-1 row-span-1',
    story: 'Macro chisel woodcarving study. Capturing flying shavings of softwood (Tella Poniki) as a 4th-generation artisan shapes iconic folklore figurines.',
    tags: ['Handicrafts', 'National Awardee', 'Macro Detail', 'Heritage Chronicle'],
    values: {
      focalLength: '90mm Macro 1:1',
      aperture: 'f/4.0',
      shutterSpeed: '1/800s (High-Speed Freeze)',
      iso: 'ISO 640',
      lighting: 'Direct Workshop Sunlight + White Foamcore Bounce',
      colorTemp: '5400K',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 90mm f/2.8 Macro G OSS'
    }
  },
  {
    id: 'photo-atrium-dance',
    title: 'Kinetic Grace in Modern Architecture',
    category: 'Heritage & Artisans',
    image: '/images/portfolio_photos/p11_atrium_cultural_performance.jpg',
    location: 'State Cultural Center, Amaravati',
    client: 'Department of Language & Culture',
    year: '2025',
    aspectRatio: 'wide',
    spanClass: 'col-span-1 md:col-span-2 lg:col-span-2 row-span-1',
    story: 'Classical Kuchipudi mudras juxtaposed against soaring glass curtain walls. Capturing traditional movement within contemporary architecture.',
    tags: ['Classical Dance', 'Architecture & Art', 'High-Speed Stills', 'State Performance'],
    values: {
      focalLength: '35mm',
      aperture: 'f/1.4',
      shutterSpeed: '1/1000s (Motion Freeze)',
      iso: 'ISO 500',
      lighting: 'High-Ceiling Daylight Skylight + Stage Wash Fill',
      colorTemp: '5600K',
      cameraBody: 'Sony Venice 2',
      lensModel: 'FE 35mm f/1.4 GM'
    }
  }
]
