export interface TeamMember {
  name: string
  role: string
  department: 'Leadership' | 'Directorial & Script' | 'Cinematography' | 'Post-Production & Music' | 'Design & Graphics'
  description?: string
}

export const studioTeam: TeamMember[] = [
  {
    name: "Ponnekanti Sasi Krishna",
    role: "Founder & Managing Partner",
    department: "Leadership",
    description: "Visionary creative head driving institutional strategy, high-profile government campaigns, and national media initiatives.",
  },
  {
    name: "Praveen Pullata",
    role: "Company Associate, AP Projects",
    department: "Leadership",
    description: "Spearheading regional operations, field coordination, and governmental client liaison across Andhra Pradesh.",
  },
  {
    name: "M. Nageswara Rao",
    role: "Director, Digital Solutions",
    department: "Leadership",
    description: "Orchestrating AI-driven video synthesis, digital architecture, and multi-channel campaign deployment.",
  },
  {
    name: "MK. Sreenu",
    role: "Director, Content & Client Relations",
    department: "Leadership",
    description: "Managing key corporate partnerships, client creative alignment, and production roadmaps.",
  },
  {
    name: "Vijay Shanker",
    role: "Director, National Projects",
    department: "Leadership",
    description: "Overseeing central government engagements, pan-India cluster documentation, and nationwide ad films.",
  },
  {
    name: "Thanda Ganesh",
    role: "Director, Concepts",
    department: "Leadership",
    description: "Architecting overarching creative themes, metaphor systems, and narrative hooks.",
  },
  {
    name: "Tulasi",
    role: "Creative Head & Scriptwriter",
    department: "Directorial & Script",
    description: "Crafting resonant narratives, research-backed story structures, and impactful dialogues.",
  },
  {
    name: "Shiva Prasad",
    role: "Director & Script Writer",
    department: "Directorial & Script",
    description: "Leading on-set visual direction and dramatic character arcs.",
  },
  {
    name: "Ganesh",
    role: "Concepts & Script Writing",
    department: "Directorial & Script",
  },
  {
    name: "Veeru",
    role: "Lyric Writer & Script",
    department: "Directorial & Script",
  },
  {
    name: "Bhaskar",
    role: "Translator & Localization Specialist",
    department: "Directorial & Script",
  },
  {
    name: "TLN Swamy",
    role: "Film Director",
    department: "Directorial & Script",
  },
  {
    name: "Koti",
    role: "Film Director",
    department: "Directorial & Script",
  },
  {
    name: "Kartheek",
    role: "Film Director",
    department: "Directorial & Script",
  },
  {
    name: "Karthik Kodakandla",
    role: "Music Director & Composer",
    department: "Post-Production & Music",
    description: "Composing stirring orchestral scores, signature soundscapes, and evocative campaign themes.",
  },
  {
    name: "Prasad",
    role: "Cinematography Camera Head",
    department: "Cinematography",
    description: "Master of visual framing, anamorphic aesthetics, and precision camera movements.",
  },
  {
    name: "Praveen",
    role: "Senior Cameraman",
    department: "Cinematography",
  },
  {
    name: "Camera Team (6+ Cameramen)",
    role: "Field & Cinema Camera Operators",
    department: "Cinematography",
  },
  {
    name: "Vinod Kumar",
    role: "Chief Video Editor",
    department: "Post-Production & Music",
    description: "Guiding post-production rhythms, rhythm-matched cuts, and multi-stream finishing.",
  },
  {
    name: "Veerababu",
    role: "Senior Video Editor",
    department: "Post-Production & Music",
  },
  {
    name: "Ajay Kumar",
    role: "Video Editor",
    department: "Post-Production & Music",
  },
  {
    name: "Editing Suite (4+ Editors)",
    role: "Montage & Color Finishing Team",
    department: "Post-Production & Music",
  },
  {
    name: "Nagesh",
    role: "Motion Graphics & 3D Lead",
    department: "Design & Graphics",
    description: "Kinetic typography, 3D product rendering, and visual effects.",
  },
  {
    name: "Abhinav",
    role: "Graphic Designer & Visualizer",
    department: "Design & Graphics",
  },
]

export interface EquipmentCategory {
  category: string
  items: { name: string; specs: string; count?: string }[]
}

export const equipmentInventory: EquipmentCategory[] = [
  {
    category: "Cinema & Broadcast Cameras",
    items: [
      { name: "Sony FX3 Full-Frame Cinema Cameras", specs: "4K 120fps, S-Cinetone, 15+ stops dynamic range, dual native ISO", count: "4 Cameras" },
      { name: "Sony A7S III Cinema Systems", specs: "High-sensitivity 4K full-frame sensor, 10-bit 4:2:2 internal", count: "2 Cameras" },
      { name: "Canon 5D Mark IV Cinema Kits", specs: "Full kit with 24-70mm, 70-200mm f/2.8, 50mm, Samyang 14mm f/2.8", count: "3 Full Kits" },
      { name: "Sony A7 M3 Camera Kits", specs: "24-70mm, FE 70-200mm f/2.8 GM, 50mm f/1.8 prime lenses", count: "3 Full Kits" },
      { name: "Sony NX100 & Sony Z150 Broadcast Cameras", specs: "Continuous broadcast event recording, optical servo zoom, dual XLR", count: "2 Units" },
    ],
  },
  {
    category: "Prime & Cine Lenses",
    items: [
      { name: "Sony G Master FE 24-70mm f/2.8 GM", specs: "Extreme aspherical elements, lightning autofocus" },
      { name: "Sony G Master FE 70-200mm f/2.8 GM", specs: "Super telephoto zoom, optical steadyShot" },
      { name: "Sony FE 85mm f/1.4 GM", specs: "Signature portraiture prime, circular 11-blade aperture" },
      { name: "Sony FE 50mm f/1.4 GM", specs: "Standard natural field of view, ultra-shallow depth of field" },
      { name: "Sony FE 16-35mm f/2.8 GM", specs: "Ultra-wide landscape, architecture & interior prime zoom" },
      { name: "Zeiss Sony 55mm f/1.8 & Samyang 14mm f/2.8", specs: "Tactile manual sharpness and dramatic ultra-wide perspectives" },
    ],
  },
  {
    category: "Aerial & Drones",
    items: [
      { name: "DJI Air 3 Dual-Camera Drone Units", specs: "Medium tele & wide cameras, 4K 60fps HDR, 46-min flight time, omnidirectional obstacle sensing", count: "3 Drones" },
      { name: "Field Drone Operation Kits", specs: "High-capacity intelligent batteries, multi-chargers, ND filter sets, tablet monitors" },
    ],
  },
  {
    category: "Studio & Location Lighting",
    items: [
      { name: "Nantu 450W Bi-Color Studio Lights with Softboxes", specs: "High-CRI continuous studio lights with deep parabolic softboxes", count: "6 Units" },
      { name: "Godox Professional LC Lights", specs: "Handheld RGB tube lights & continuous point-source LED fixtures", count: "8 Units" },
      { name: "Simpex Heavy Parabolic Softboxes & LC Lights", specs: "Ultra-soft diffusion for executive and podcast talk shows", count: "2 Sets" },
      { name: "SunGun & Day SunGun Field Light Kits", specs: "High-intensity directional field lighting for outdoor & night shoots", count: "7 Units" },
      { name: "Professional Heavy Black Stands & C-Stands", specs: "Heavy-gauge boom arms, sandbags, grip heads, and flags", count: "15 Stands" },
      { name: "Multi-Surface Reflectors & Diffusion Scrims", specs: "5-in-1 multi-angle light bounce and harsh sun softening", count: "6 Units" },
    ],
  },
  {
    category: "Sound, Monitoring & Live Switching",
    items: [
      { name: "Rode Wireless & Studio Broadcast Microphones", specs: "Dual-channel wireless lapels, NTG shotgun mics, broadcast sound", count: "4+ Systems" },
      { name: "Godox & Digitek Audio Kits", specs: "Redundant on-location wireless mic kits with wind muffs", count: "5 Units" },
      { name: "Broadcast Directional Handheld Mics", specs: "High-rejection interview mics for press & crowd events", count: "2 Units" },
      { name: "Lilliput Ultra-Bright Field Monitors", specs: "4K HDMI/SDI loop-through, false color, focus peaking", count: "2 Monitors" },
      { name: "Studio Teleprompter Setup", specs: "Beam splitter glass, remote speed control for seamless speech delivery", count: "1 System" },
      { name: "Heavy Fluid-Head Tripods & Studio Sliders", specs: "Smooth pan/tilt drag fluid heads for cinema movements", count: "8 Tripods" },
      { name: "Studio Audio Master Headphones & Monitors", specs: "High-isolation reference listening for zero-distortion audio", count: "8 Pairs" },
    ],
  },
  {
    category: "Post-Production Suites",
    items: [
      { name: "Avid Media Composer Suites", specs: "Industry-standard feature documentary & broadcast editing" },
      { name: "Adobe Premiere Pro & After Effects CC", specs: "Multi-stream 4K timelines, kinetic motion graphics, visual effects" },
      { name: "DaVinci Resolve Studio Color Grading", specs: "Hardware control surfaces, calibrated Rec.709 & HDR grading" },
      { name: "Adobe Photoshop & Illustrator Workstations", specs: "High-res publication design, coffee table book prepress, branding" },
    ],
  },
]

export const productionProcessSteps = [
  {
    step: "01",
    title: "Research & Scriptwriting",
    description: "Deep dive into the audience, government policy, or brand ethos to craft a compelling, emotionally gripping narrative.",
  },
  {
    step: "02",
    title: "Field Documentation & Scouting",
    description: "Deploying advance crews for location scouting, community interviews, and logistical permissions across mandals and states.",
  },
  {
    step: "03",
    title: "Multi-Camera Production",
    description: "Cinematic filming using Sony FX3 cinema packages, 3x DJI Air 3 drones, and specialized lighting setups.",
  },
  {
    step: "04",
    title: "Editing & Precision Color Grading",
    description: "Assembling the visual journey in Avid & Premiere Pro, followed by Hollywood-grade DaVinci color grading.",
  },
  {
    step: "05",
    title: "Graphics, VO & Sound Design",
    description: "Motion graphics, multilingual voice-over (Telugu, Hindi, English), and original music scores by Karthik Kodakandla.",
  },
  {
    step: "06",
    title: "Multi-Platform Delivery",
    description: "Optimized exports for TV broadcast, YouTube, WhatsApp viral clips, and theatrical master formats.",
  },
]
