export interface ServiceItem {
  number: string
  slug: string
  title: string
  category: 'AI & Emerging' | 'Corporate & Commercial' | 'Government & Public' | 'Studio & Audio' | 'Post-Production'
  description: string
  intro: string
  image: string
  deliverables: string[]
  tags: string[]
  featured?: boolean
}

export const servicesData: ServiceItem[] = [
  {
    number: "01",
    slug: "ai-video-production",
    title: "AI Video Production and AI Ad Filmmaking",
    category: "AI & Emerging",
    featured: true,
    description:
      "AI video production in Hyderabad for brands, businesses and institutions. Shlokh combines AI-generated visuals with human creativity, scripting, editing, motion graphics and voice-over to create AI ad films, product videos and promotional content.",
    intro:
      "We pioneer AI-driven video synthesis led by seasoned cinematic storytellers. By uniting artificial intelligence with senior directorial oversight, we deliver high-impact TV commercials, photorealistic digital avatars, and rapid promotional films that drastically cut production cycles while elevating brand prestige.",
    image: "/images/services/ai_video_production_4k.jpg",
    tags: ["AI Filmmaking", "Digital Avatars", "Virtual Presenters", "Rapid Iteration"],
    deliverables: [
      "AI-assisted ad film direction & scriptcraft",
      "Photorealistic digital avatar synthesis",
      "Smart presentation & corporate AI videos",
      "Rapid multilingual content versioning (Telugu, Hindi, English)",
    ],
  },
  {
    number: "02",
    slug: "corporate-video-production",
    title: "Corporate Video Production",
    category: "Corporate & Commercial",
    featured: true,
    description:
      "Shlokh creates corporate videos in Hyderabad, including company profiles, leadership interviews, facility tours and employee stories. Our services cover concept development, scripting, filming, editing and motion graphics.",
    intro:
      "Corporate storytelling that commands institutional trust and inspires investor confidence. We produce cinematic company profiles, C-suite leadership interviews, state-of-the-art facility walkthroughs, and authentic employee journey films across Telangana and Andhra Pradesh.",
    image: "/images/portfolio_photos/p11_boardroom_executive_interview.jpg",
    tags: ["Company Profiles", "C-Suite Interviews", "Facility Tours", "Investor Pitch"],
    deliverables: [
      "Cinematic company profiles & heritage films",
      "Executive boardroom & founder interviews",
      "Industrial plant, factory & campus walkthroughs",
      "Internal communications & employee culture stories",
    ],
  },
  {
    number: "03",
    slug: "ad-film-production",
    title: "Ad Film Production",
    category: "Corporate & Commercial",
    featured: true,
    description:
      "Ad film production in Hyderabad for brands, businesses and institutions. Shlokh handles creative concepts, scripts, shoot planning, filming and post-production for TV commercials, digital advertisements and promotional campaigns.",
    intro:
      "From memorable campaign concepts to broadcast-ready masters, we craft ad films engineered to captivate audiences and trigger decisive consumer action across television and digital channels.",
    image: "/images/portfolio_photos/p12_campus_softbox_production.jpg",
    tags: ["TV Commercials", "Digital Campaigns", "High-Speed Filming", "Creative Direction"],
    deliverables: [
      "High-impact TV commercials (TVCs)",
      "Digital video advertisements & social ad suites",
      "Creative storyboards & character scripting",
      "Multi-camera cinema production with studio lighting",
    ],
  },
  {
    number: "04",
    slug: "podcast-production",
    title: "Podcast Production",
    category: "Studio & Audio",
    featured: true,
    description:
      "Professional podcast production in Hyderabad, with multi-camera filming, microphones, lighting, audio editing and video post-production. We produce interviews, talk shows and branded podcasts at client locations, with short clips for social media.",
    intro:
      "Turn expertise into high-retention video conversations. Our turnkey podcast services encompass custom acoustic environments, multi-camera 4K setups with live switching, broadcast-grade audio capture, and high-engagement social clip extraction.",
    image: "/images/extracted/raw_p15_1.jpeg",
    tags: ["Multi-Cam 4K", "Ambient RGB Studio", "Broadcast Audio", "Viral Shorts & Reels"],
    deliverables: [
      "In-studio and on-location multi-camera 4K recording",
      "Rode & Godox studio microphone acoustic arrays",
      "Professional sound engineering & audio mastering",
      "Social media bite-sized clip packages with kinetic captions",
    ],
  },
  {
    number: "05",
    slug: "product-video-production",
    title: "Product Video Production",
    category: "Corporate & Commercial",
    description:
      "Product video production in Hyderabad for launches, online stores and advertising campaigns. We create product demonstrations, promotional films and feature videos, with scripting, filming, editing and graphics tailored to your brand.",
    intro:
      "Showcase your physical or technological products with stunning macro optics, dynamic studio sliders, and vivid 3D callouts that clarify value and drive conversions across e-commerce platforms.",
    image: "/images/portfolio_photos/p12_studio_camera_slider.jpg",
    tags: ["Product Launches", "Macro Cinematography", "E-Commerce", "3D Callouts"],
    deliverables: [
      "Product launch spotlight films",
      "E-commerce & marketplace demonstration videos",
      "Macro camera slider & precision lighting setups",
      "Animated technical feature callouts & motion graphics",
    ],
  },
  {
    number: "06",
    slug: "social-media-video-production",
    title: "Social Media Video Production",
    category: "AI & Emerging",
    description:
      "Social media video production in Hyderabad for Instagram Reels, YouTube Shorts, Facebook and LinkedIn. Shlokh creates promotional videos, brand stories and campaign content with filming, editing, captions and platform-specific formats.",
    intro:
      "Engineered for high algorithmic velocity and audience watch-time. We produce viral reels, episodic storytelling, and high-retention vertical video suites designed to build brand authority and digital community.",
    image: "/images/services/social_media_production_4k.jpg",
    tags: ["Instagram Reels", "YouTube Shorts", "TikTok / LinkedIn", "Viral Content"],
    deliverables: [
      "Platform-native vertical reels & shorts (9:16 / 4:5)",
      "High-energy editing, pacing & trending sound design",
      "Kinetic animated captions and subtitles",
      "Monthly episodic content calendar execution",
    ],
  },
  {
    number: "07",
    slug: "customer-testimonial-case-study",
    title: "Customer Testimonial and Case Study Videos",
    category: "Corporate & Commercial",
    description:
      "Customer testimonial and case study video production in Hyderabad. We film client interviews, business success stories and beneficiary experiences, combining authentic accounts with supporting footage, editing, subtitles and branded graphics.",
    intro:
      "Real stories of transformation are the ultimate social proof. We capture sincere customer journeys, enterprise client endorsements, and measurable ROI narratives that dissolve buyer hesitation.",
    image: "/images/portfolio_photos/p13_students_campus_leadership.jpg",
    tags: ["Authentic Testimonials", "Enterprise Case Studies", "Client Interviews", "ROI Metrics"],
    deliverables: [
      "Guided, stress-free client interview filming",
      "Cinematic contextual B-roll of product usage",
      "Branded metric graphic overlays & growth stats",
      "Concise social edits alongside in-depth long-form studies",
    ],
  },
  {
    number: "08",
    slug: "documentary-film-production",
    title: "Documentary Film Production",
    category: "Government & Public",
    featured: true,
    description:
      "Documentary film production in Hyderabad for government departments, organisations and businesses. Shlokh develops research-based stories with scripting, location filming, interviews, voice-over, editing and multilingual versions.",
    intro:
      "With over 500 documentaries produced across two decades, Shlokh is a trusted creative partner for in-depth, research-backed storytelling on culture, social evolution, public infrastructure, and grassroots empowerment.",
    image: "/images/portfolio_photos/p11_cinematographer_tripod_heavy.jpg",
    tags: ["500+ Films", "Heritage & Culture", "Government Research", "Multilingual Delivery"],
    deliverables: [
      "Comprehensive research, archival study & script development",
      "Multi-region location filming with cinema gear & aerial drones",
      "Rich cultural, historic & community interviews",
      "Multilingual master delivery (Telugu, Hindi, English, Regional)",
    ],
  },
  {
    number: "09",
    slug: "corporate-event-videography",
    title: "Corporate Event Videography",
    category: "Corporate & Commercial",
    description:
      "Corporate event videography in Hyderabad for conferences, product launches, seminars and business meetings. Services include multi-camera coverage, interviews, event highlight films and edited videos for internal communication and social media.",
    intro:
      "Comprehensive multi-camera coverage for stadium-scale conferences, annual general meetings, global summits, and high-stakes product unveiling events, complete with live switcher feeds and same-day highlights.",
    image: "/images/portfolio_photos/p11_stadium_event_crowd.jpg",
    tags: ["Conferences", "Live ATEM Switching", "Stadium Events", "Highlight Films"],
    deliverables: [
      "Multi-camera live switched recording (ATEM broadcast rigs)",
      "Keynote address & VIP executive soundbite recording",
      "Fast-turnaround same-day cinematic highlight reels",
      "Complete archival recordings with crystal-clear audio",
    ],
  },
  {
    number: "10",
    slug: "explainer-videos-motion-graphics",
    title: "Explainer Videos and Motion Graphics",
    category: "Post-Production",
    description:
      "Explainer videos and motion graphics for businesses in Hyderabad. We simplify products, services and processes through clear scripts, animated graphics, voice-over and editing for presentations, websites and digital campaigns.",
    intro:
      "Demystify complex software, financial mechanisms, or scientific workflows through crisp, engaging visual animation. We distill sophisticated architectures into intuitive, delightful narratives.",
    image: "/images/portfolio_photos/p13_greenscreen_chroma_shoot.jpg",
    tags: ["2D/3D Animation", "Kinetic Typography", "Product Walkthroughs", "Infographics"],
    deliverables: [
      "Custom 2D vector & 3D motion graphic animation",
      "Script clarity refinement & storyboard design",
      "Professional voice-over in multiple languages",
      "High-converting explainer videos for web & mobile apps",
    ],
  },
  {
    number: "11",
    slug: "video-editing-post-production",
    title: "Video Editing and Post Production",
    category: "Post-Production",
    description:
      "Professional video editing and post-production in Hyderabad for corporate films, advertisements, podcasts and social media. Services include editing, colour correction, audio cleanup, motion graphics, subtitles and final exports.",
    intro:
      "Our in-house post-production suite runs Avid Media Composer, Premiere Pro, and DaVinci Resolve. We deliver meticulous narrative assembly, surgical audio restoration, cinema-grade color grading, and broadcast compliance.",
    image: "/images/portfolio_photos/p08_field_editing_laptop.jpg",
    tags: ["Avid & Premiere", "DaVinci Color", "Audio Restoration", "Master Finishing"],
    deliverables: [
      "Multi-stream timeline assembly & pacing refinement",
      "Precision color correction & aesthetic film emulation",
      "Dialogue cleanup, noise suppression & sound mastering",
      "Broadcast, OTT & social-compliant delivery packages",
    ],
  },
  {
    number: "12",
    slug: "election-ad-film-production",
    title: "Election Ad Film Production",
    category: "Government & Public",
    featured: true,
    description:
      "Affordable election ad film production across Telangana and Andhra Pradesh. Shlokh offers scripting, filming, editing, voice-over and graphics for candidate introduction videos, development films and election campaign advertisements.",
    intro:
      "Campaign communication that resonates directly with the voter heartland. We craft persuasive candidate introduction films, manifesto spotlight videos, and high-energy development reels at affordable, project-based rates.",
    image: "/images/portfolio_photos/p12_location_scout_tunnel.jpg",
    tags: ["Election Campaigns", "Candidate Films", "Telangana & AP", "Affordable Packages"],
    deliverables: [
      "Candidate vision & personal journey introduction videos",
      "Constituency development showcase & progress reels",
      "High-energy emotional campaign advertisements",
      "Mass distribution formats for WhatsApp, YouTube & TV",
    ],
  },
  {
    number: "13",
    slug: "election-campaign-public-feedback",
    title: "Election Campaign Public Feedback Videos",
    category: "Government & Public",
    description:
      "Public feedback video bytes and interviews for election campaigns across Telangana and Andhra Pradesh at affordable rates. Shlokh handles on-location filming, clear audio, editing and subtitles, presenting people's views accurately and with consent.",
    intro:
      "Ground-level public sentiment is the backbone of winning campaigns. Our mobile field crews travel across towns and rural mandals to record authentic voter perspectives with professional audio and transparent consent protocols.",
    image: "/images/portfolio_photos/p08_bus_beneficiary_shoot.jpg",
    tags: ["Grassroots Feedback", "Voter Vox-Pops", "Rural & Urban Shoots", "Consent Verified"],
    deliverables: [
      "On-location voter interview bytes across mandals & wards",
      "Directional lapel audio in noisy marketplaces & bus terminals",
      "Rapid turnaround editing with Telugu subtitles",
      "Sentiment categorization for campaign strategy teams",
    ],
  },
  {
    number: "14",
    slug: "government-scheme-beneficiary-testimonials",
    title: "Government Scheme Beneficiary Testimonial Videos",
    category: "Government & Public",
    featured: true,
    description:
      "Affordable government scheme beneficiary testimonial videos across Telangana and Andhra Pradesh. Shlokh captures authentic beneficiary experiences through on-location interviews, filming, editing and subtitles in Telugu, Hindi and English.",
    intro:
      "Empathetic documentation of social welfare impact. We visit beneficiaries in their villages, farms, and homes to capture real stories of empowerment through welfare schemes, self-help groups (SHG/MEPMA), and public initiatives.",
    image: "/images/portfolio_photos/p08_village_hall_interview.jpg",
    tags: ["Welfare Impact", "Grassroots Testimonials", "SHG & MEPMA", "Multilingual"],
    deliverables: [
      "Empathetic on-location beneficiary interviews & lifestyle B-roll",
      "Verification of authentic scheme outcomes & metrics",
      "Multilingual subtitling in Telugu, Hindi, and English",
      "Standardized archival video libraries for departmental reporting",
    ],
  },
]

export const businessInfo = {
  name: "Shlokh Entertainments",
  tradeName: "Shlokh Advertising & Branding",
  description:
    "Shlokh Advertising & Branding specialises in AI video production, AI ad filmmaking and corporate video production in Hyderabad, serving Telangana and Andhra Pradesh. We combine artificial intelligence with human creativity to create AI-generated videos, TV commercials, digital ad films, product videos, branding videos, podcasts and documentaries. Our services include scripting, filming, AI-generated visuals, video editing, motion graphics and multilingual voice-over. We also produce election campaign films, public feedback interviews, customer success stories and government scheme beneficiary testimonials. From concept to final delivery, we create visual content for brands, businesses and institutions.",
  coverageAndPricing:
    "Based in Punjagutta, Hyderabad, with production services across Telangana and Andhra Pradesh. Quotes are customised to the script, duration, shoot location, crew, language versions and post-production requirements. Election videos, public feedback interviews and beneficiary testimonials are available at affordable project-based rates.",
  phones: ["+91 95055 55277", "+91 96669 74593"],
  primaryPhone: "+91 95055 55277",
  email: "shlokhentertainments@gmail.com",
  website: "www.shlokhadvertising.com",
  locations: {
    telangana: {
      title: "Telangana Office",
      address: "#6-3-451, Panjagutta, Hyderabad, Telangana",
    },
    andhraPradesh: {
      title: "Andhra Pradesh Office",
      address: "#1-3-123/2, SVN Colony, Guntur, Andhra Pradesh",
    },
  },
  stats: [
    { value: "20+", label: "Years of creative leadership" },
    { value: "30+", label: "In-house creative professionals" },
    { value: "500+", label: "Documentaries & corporate films" },
    { value: "100+", label: "Statewide public campaigns" },
    { value: "1000s", label: "Beneficiaries documented" },
    { value: "Millions", label: "Verified digital reach" },
  ],
}
