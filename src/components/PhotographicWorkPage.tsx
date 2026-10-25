import React, { useState, useMemo } from 'react'
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Camera,
  BookOpen,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  Sliders,
  ZoomIn,
  ZoomOut,
  MapPin,
  Calendar,
  Eye,
  Aperture,
  Film,
  Search,
  Grid,
  List
} from 'lucide-react'

import {
  shareefPageSpreads,
  type ShareefPageSpread,
  type PhotographicValues
} from '../data/shareefPortfolioData'

interface PhotographicWorkPageProps {
  onBackToHome: () => void
  onOpenQuoteModal: (serviceName?: string) => void
}

interface GalleryWorkItem {
  id: string
  number: string
  title: string
  category: string
  location: string
  state: string
  image: string
  aspect: 'portrait' | 'landscape' | 'wide'
  story: string
  values: PhotographicValues
}

// 10 Cards blending Culturum Design Pattern with Shareef Sir's Authentic PDF Photography
const curatedGalleryWorks: GalleryWorkItem[] = [
  {
    id: 'work-01',
    number: '01',
    title: "Handloom Apparel: Studio Editorial",
    category: 'HANDLOOM',
    location: 'Hyderabad & Dharmavaram',
    state: 'ANDHRA PRADESH / TELANGANA',
    image: '/images/portfolio_shareef/photos_raw/photo_p17_editorial_portfolio_full.jpg',
    aspect: 'portrait',
    story: "From Page 17 of Shareef's portfolio. High-profile handloom apparel editorial documenting contemporary drape, traditional weaves, and warm architectural studio lighting.",
    values: {
      focalLength: '85mm Prime',
      aperture: 'f/2.8',
      shutterSpeed: '1/250s',
      iso: 'ISO 100',
      lighting: "Architectural Studio Ambient + Soft Key",
      colorTemp: '5200K Balanced',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 85mm f/1.4 GM'
    }
  },
  {
    id: 'work-02',
    number: '02',
    title: "Savara Tribal Murals",
    category: 'TRIBAL ART',
    location: 'Seethampeta Agency',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p03_1_547x777.jpeg',
    aspect: 'portrait',
    story: "From Page 3 of Shareef Sir's portfolio. Documenting sacred Savara tribal wall murals painted with rice flour and mineral pigments to invoke ancestral blessings.",
    values: {
      focalLength: '35mm Wide Prime',
      aperture: 'f/2.8',
      shutterSpeed: '1/250s',
      iso: 'ISO 250',
      lighting: "Verandah Soft Diffused Skylight",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony FX6 Cinema Camera',
      lensModel: 'FE 35mm f/1.4 GM'
    }
  },
  {
    id: 'work-03',
    number: '03',
    title: "Master Weaver at the Loom",
    category: 'HANDLOOM',
    location: 'Pochampally Cluster',
    state: 'TELANGANA / AP',
    image: '/images/portfolio_shareef/photos_raw/photo_p10_1_533x784.jpeg',
    aspect: 'portrait',
    story: "From Page 10 of Shareef's portfolio. A portrait of a master ikat weaver at his wooden fly-shuttle pit loom, translating complex geometric patterns into silk in warm natural room light.",
    values: {
      focalLength: '50mm Prime',
      aperture: 'f/1.8',
      shutterSpeed: '1/320s',
      iso: 'ISO 160',
      lighting: "Loom Skylight Ambient",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony A7R V',
      lensModel: 'FE 50mm f/1.2 GM'
    }
  },
  {
    id: 'work-04',
    number: '04',
    title: "Evening on the Godavari",
    category: 'LANDSCAPES',
    location: 'Godavari Basin',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p05_1_800x252.jpeg',
    aspect: 'wide',
    story: "From Page 5 of Shareef Sir's portfolio. Panoramic sunset over the tranquil Godavari waters, highlighting the lifeline that nourishes riverine agriculture and craft communities.",
    values: {
      focalLength: '24mm Ultra-Wide',
      aperture: 'f/8.0',
      shutterSpeed: '1/1000s',
      iso: 'ISO 64',
      lighting: "Golden Hour Direct Sun",
      colorTemp: '5400K Daylight',
      cameraBody: 'Hasselblad L2D-20c',
      lensModel: '24mm Cine Optic'
    }
  },
  {
    id: 'work-05',
    number: '05',
    title: "Coastal Estuary Waters",
    category: 'LANDSCAPES',
    location: 'Bay of Bengal Coastline',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p05_2_698x278.jpeg',
    aspect: 'wide',
    story: "From Page 5 of Shareef Sir's portfolio. Coastal lagoon formations along the eastern seaboard, capturing the intersection of marine life and fisherfolk settlements.",
    values: {
      focalLength: '28mm Wide',
      aperture: 'f/7.1',
      shutterSpeed: '1/1250s',
      iso: 'ISO 100',
      lighting: "Clear Horizon Afternoon Daylight",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 24-70mm f/2.8 GM II'
    }
  },
  {
    id: 'work-06',
    number: '06',
    title: "Mangrove Reflections",
    category: 'LANDSCAPES',
    location: 'Coringa Delta',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p05_3_630x337.jpeg',
    aspect: 'landscape',
    story: "From Page 5 of Shareef Sir's portfolio. Lush mangrove waterways in the delta region, balancing delicate coastal ecology and local fishing livelihoods.",
    values: {
      focalLength: '35mm Prime',
      aperture: 'f/5.6',
      shutterSpeed: '1/640s',
      iso: 'ISO 125',
      lighting: "Reflected Water Daylight",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony A7R V',
      lensModel: 'FE 35mm f/1.4 GM'
    }
  },
  {
    id: 'work-07',
    number: '07',
    title: "Golden Bay Sands",
    category: 'LANDSCAPES',
    location: 'Eastern Seaboard',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p05_4_788x341.jpeg',
    aspect: 'wide',
    story: "From Page 5 of Shareef Sir's portfolio. Serene shoreline at dawn with gentle sea breeze, showcasing the timeless coastal heritage of Andhra Pradesh.",
    values: {
      focalLength: '50mm Prime',
      aperture: 'f/8.0',
      shutterSpeed: '1/800s',
      iso: 'ISO 100',
      lighting: "Dawn Sunrise Warmth",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 50mm f/1.2 GM'
    }
  },
  {
    id: 'work-08',
    number: '08',
    title: "The Terracotta Sculptor",
    category: 'CRAFT PROCESS',
    location: 'Seethampeta Agency',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p07_2_223x706.jpeg',
    aspect: 'portrait',
    story: "From Page 6 of Shareef Sir's portfolio. Towering Dravidian stone gopuram and intricate granite carvings capturing medieval architectural prowess.",
    values: {
      focalLength: '24mm Tilt-Shift',
      aperture: 'f/11',
      shutterSpeed: '1/200s',
      iso: 'ISO 100',
      lighting: "High Noon Direct Architectural Sunlight",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 24-70mm f/2.8 GM II'
    }
  },
  {
    id: 'work-09',
    number: '09',
    title: "Shaping Wet Clay",
    category: 'CRAFT PROCESS',
    location: 'Rural Potters Guild',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p07_1_313x441.jpeg',
    aspect: 'portrait',
    story: "From Page 7 of Shareef Sir's portfolio. An artisan's seasoned hands gently sculpting fine alluvial river clay into traditional terracotta votives.",
    values: {
      focalLength: '90mm Macro',
      aperture: 'f/2.8',
      shutterSpeed: '1/500s',
      iso: 'ISO 200',
      lighting: "Workshop Daylight Balanced",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony A7R V',
      lensModel: 'FE 90mm f/2.8 Macro G'
    }
  },
  {
    id: 'work-10',
    number: '10',
    title: "Wall Stories of Seethampeta",
    category: 'TRIBAL ART',
    location: 'Seethampeta Agency',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p07_3_800x398.jpeg',
    aspect: 'wide',
    story: "From Page 7 of Shareef Sir's portfolio. Savara tribal women standing proudly before their freshly painted community mud wall murals.",
    values: {
      focalLength: '35mm Prime',
      aperture: 'f/4.0',
      shutterSpeed: '1/320s',
      iso: 'ISO 160',
      lighting: "Open Sky Diffused Daylight",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony FX6 Cinema Camera',
      lensModel: 'FE 35mm f/1.4 GM'
    }
  },
  {
    id: 'work-11',
    number: '11',
    title: "Aaradhya Women's Cooperative",
    category: 'PEOPLE',
    location: 'SERP Rural Cluster',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p08_1_1239x1755.jpeg',
    aspect: 'portrait',
    story: "From Page 8 of Shareef's portfolio. Authentic documentary portraits of rural women entrepreneurs managing sustainable community craft enterprises in their sunlit workshop.",
    values: {
      focalLength: '50mm Prime',
      aperture: 'f/2.2',
      shutterSpeed: '1/320s',
      iso: 'ISO 200',
      lighting: "Open Verandah Natural Daylight",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 50mm f/1.2 GM'
    }
  },
  {
    id: 'work-12',
    number: '12',
    title: "Colours of a Community",
    category: 'HANDLOOM',
    location: 'Craft Cooperatives',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p08_2_800x420.jpeg',
    aspect: 'landscape',
    story: "From Page 8 of Shareef Sir's portfolio. Artisan smiling in her workshop surrounded by naturally dyed fibers, baskets, and eco-friendly handicrafts.",
    values: {
      focalLength: '50mm Prime',
      aperture: 'f/2.8',
      shutterSpeed: '1/250s',
      iso: 'ISO 160',
      lighting: "Courtyard Skylight",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony A7R V',
      lensModel: 'FE 50mm f/1.2 GM'
    }
  },
  {
    id: 'work-13',
    number: '13',
    title: "Handwoven Eco Fibers",
    category: 'CRAFT PROCESS',
    location: 'Sustainable Workshop',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p08_3_720x391.jpeg',
    aspect: 'landscape',
    story: "From Page 8 of Shareef Sir's portfolio. Detailed study of organic jute and natural plant fiber weaving, supporting eco-conscious rural livelihoods.",
    values: {
      focalLength: '70mm Telephoto',
      aperture: 'f/4.0',
      shutterSpeed: '1/400s',
      iso: 'ISO 200',
      lighting: "Direct Workshop Daylight",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 70-200mm f/2.8 GM II'
    }
  },
  {
    id: 'work-14',
    number: '14',
    title: "Artisan Collaboration",
    category: 'PEOPLE',
    location: 'Community Center',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p08_4_693x362.jpeg',
    aspect: 'landscape',
    story: "From Page 8 of Shareef Sir's portfolio. Women artisans collaborating in a communal production center, combining skill, laughter, and pride.",
    values: {
      focalLength: '35mm Prime',
      aperture: 'f/2.8',
      shutterSpeed: '1/320s',
      iso: 'ISO 320',
      lighting: "Soft Indoor Ambient",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony FX6 Cinema Camera',
      lensModel: 'FE 35mm f/1.4 GM'
    }
  },
  {
    id: 'work-15',
    number: '15',
    title: "Paddy Field Horizon",
    category: 'LANDSCAPES',
    location: 'Delta Agricultural Belt',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p09_1_800x336.jpeg',
    aspect: 'wide',
    story: "From Page 9 of Shareef Sir's portfolio. Lush emerald rice paddies stretching toward distant hills, representing the agricultural vitality of the region.",
    values: {
      focalLength: '24mm Wide',
      aperture: 'f/8.0',
      shutterSpeed: '1/1000s',
      iso: 'ISO 100',
      lighting: "Mid-Morning Sun",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 24-70mm f/2.8 GM II'
    }
  },
  {
    id: 'work-16',
    number: '16',
    title: "Elder of the Soil",
    category: 'PEOPLE',
    location: 'Rural Mandals',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p09_2_302x428.jpeg',
    aspect: 'portrait',
    story: "From Page 9 of Shareef Sir's portfolio. An authentic field portrait of a farmer, whose gentle smile reflects a lifetime of stewardship with the earth.",
    values: {
      focalLength: '85mm Prime',
      aperture: 'f/1.8',
      shutterSpeed: '1/640s',
      iso: 'ISO 100',
      lighting: "Open Field Morning Sun + Scrim",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony A7R V',
      lensModel: 'FE 85mm f/1.4 GM'
    }
  },
  {
    id: 'work-17',
    number: '17',
    title: "Morning in the Fields",
    category: 'PEOPLE',
    location: 'Godavari Fields',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p09_3_777x409.jpeg',
    aspect: 'landscape',
    story: "From Page 9 of Shareef Sir's portfolio. Agricultural workers resting amidst green fields during early morning harvesting hours.",
    values: {
      focalLength: '50mm Prime',
      aperture: 'f/2.8',
      shutterSpeed: '1/500s',
      iso: 'ISO 160',
      lighting: "Soft Morning Sun",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 50mm f/1.2 GM'
    }
  },
  {
    id: 'work-18',
    number: '18',
    title: "Rural Community Fellowship",
    category: 'PEOPLE',
    location: 'Village Panchayat',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p09_4_602x405.jpeg',
    aspect: 'landscape',
    story: "From Page 9 of Shareef Sir's portfolio. Daily social interactions and close community bonds under the village banyan tree.",
    values: {
      focalLength: '35mm Prime',
      aperture: 'f/2.8',
      shutterSpeed: '1/320s',
      iso: 'ISO 200',
      lighting: "Tree Shade Diffused",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony FX6 Cinema Camera',
      lensModel: 'FE 35mm f/1.4 GM'
    }
  },
  {
    id: 'work-19',
    number: '19',
    title: "The Master Craftsman",
    category: 'CRAFT PROCESS',
    location: 'Artisan Hub',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p04_1_554x784.jpeg',
    aspect: 'portrait',
    story: "From Page 4 of Shareef's portfolio. Senior artisan in his natural workshop environment, handcrafting heritage wooden implements with timeless dedication and natural light.",
    values: {
      focalLength: '50mm Prime',
      aperture: 'f/2.0',
      shutterSpeed: '1/320s',
      iso: 'ISO 160',
      lighting: "Workshop Window Diffused Daylight",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 50mm f/1.2 GM'
    }
  },
  {
    id: 'work-20',
    number: '20',
    title: "Hands of Heritage",
    category: 'CULTURE',
    location: 'Rural Workshop',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p01_1_524x744.jpeg',
    aspect: 'portrait',
    story: "From Page 1 of Shareef's portfolio. Intimate documentary study honoring the hands, tools, and generational wisdom of traditional craftspeople in natural light.",
    values: {
      focalLength: '50mm Prime',
      aperture: 'f/2.0',
      shutterSpeed: '1/400s',
      iso: 'ISO 100',
      lighting: "Natural Ambient North Light",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 50mm f/1.2 GM'
    }
  },
  {
    id: 'work-21',
    number: '21',
    title: "Centering on the Wheel",
    category: 'CRAFT PROCESS',
    location: 'Artisan Pottery Colony',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p11_1_434x345.jpeg',
    aspect: 'landscape',
    story: "From Page 11 of Shareef Sir's portfolio. The kinetic spinning wheel and steady fingers shaping an earthen pitcher from raw clay.",
    values: {
      focalLength: '50mm Prime',
      aperture: 'f/2.0',
      shutterSpeed: '1/640s',
      iso: 'ISO 250',
      lighting: "Workshop Ambient",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony A7R V',
      lensModel: 'FE 50mm f/1.2 GM'
    }
  },
  {
    id: 'work-22',
    number: '22',
    title: "Firing the Kiln",
    category: 'CRAFT PROCESS',
    location: 'Traditional Potter Hamlet',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p11_2_748x453.jpeg',
    aspect: 'landscape',
    story: "From Page 11 of Shareef Sir's portfolio. Traditional sawdust and hay-fired earthen kiln curing terracotta pots with natural smoky patinas.",
    values: {
      focalLength: '35mm Prime',
      aperture: 'f/2.8',
      shutterSpeed: '1/400s',
      iso: 'ISO 400',
      lighting: "Kiln Hearth Glow",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony FX6 Cinema Camera',
      lensModel: 'FE 35mm f/1.4 GM'
    }
  },
  {
    id: 'work-23',
    number: '23',
    title: "Granite Gopuram Architecture",
    category: 'ARCHITECTURE',
    location: 'Medieval Temple Complex',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p06_1_529x752.jpeg',
    aspect: 'portrait',
    story: "From Page 6 of Shareef's portfolio. Towering Dravidian stone gopuram and intricate granite carvings capturing medieval architectural prowess under open skies.",
    values: {
      focalLength: '24mm Wide Prime',
      aperture: 'f/8.0',
      shutterSpeed: '1/500s',
      iso: 'ISO 100',
      lighting: "Direct Open Sky Sun",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 24-70mm f/2.8 GM II'
    }
  },
  {
    id: 'work-24',
    number: '24',
    title: "Rhythms of Araku",
    category: 'CULTURE',
    location: 'Araku Valley',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p12_1_577x534.jpeg',
    aspect: 'landscape',
    story: "From Page 12 of Shareef Sir's portfolio. Tribal Dhimsa dancers moving in synchronized circular spirals celebrating post-monsoon harvest.",
    values: {
      focalLength: '35mm Cine Prime',
      aperture: 'f/2.0',
      shutterSpeed: '1/800s',
      iso: 'ISO 800',
      lighting: "Highland Mist Daylight",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony FX6 Cinema Line',
      lensModel: 'FE 35mm f/1.4 GM'
    }
  },
  {
    id: 'work-25',
    number: '25',
    title: "Movement & Heritage",
    category: 'CULTURE',
    location: 'Araku Highlands',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p12_2_642x498.jpeg',
    aspect: 'landscape',
    story: "From Page 12 of Shareef Sir's portfolio. Full-frame capture of the vibrant traditional attire, silver jewelry, and joyous footwork of Dhimsa dancers.",
    values: {
      focalLength: '50mm Prime',
      aperture: 'f/2.2',
      shutterSpeed: '1/1000s',
      iso: 'ISO 400',
      lighting: "Overcast Highland Diffused",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 50mm f/1.2 GM'
    }
  },
  {
    id: 'work-26',
    number: '26',
    title: "The Tribal Drummer",
    category: 'CULTURE',
    location: 'Agency Agency Tracts',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p12_3_235x450.jpeg',
    aspect: 'portrait',
    story: "From Page 12 of Shareef Sir's portfolio. A tribal musician playing the traditional tudumu drum that drives the tempo of community rituals.",
    values: {
      focalLength: '85mm Prime',
      aperture: 'f/1.8',
      shutterSpeed: '1/500s',
      iso: 'ISO 500',
      lighting: "Outdoor Festive Ambient",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony A7R V',
      lensModel: 'FE 85mm f/1.4 GM'
    }
  },
  {
    id: 'work-27',
    number: '27',
    title: "Village Congregation",
    category: 'PEOPLE',
    location: 'Rural Temple Grounds',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p13_1_800x573.jpeg',
    aspect: 'landscape',
    story: "From Page 13 of Shareef Sir's portfolio. Villagers assembling in courtyard pavilions for cultural storytelling and community announcements.",
    values: {
      focalLength: '28mm Wide',
      aperture: 'f/4.0',
      shutterSpeed: '1/320s',
      iso: 'ISO 200',
      lighting: "Courtyard Canopy Ambient",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 24-70mm f/2.8 GM II'
    }
  },
  {
    id: 'work-28',
    number: '28',
    title: "Sacred Devotion",
    category: 'CULTURE',
    location: 'Temple Corridor',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p13_2_334x640.jpeg',
    aspect: 'portrait',
    story: "From Page 13 of Shareef Sir's portfolio. Intimate spiritual moment of an elder offering brass lamps at an ancient stone shrine.",
    values: {
      focalLength: '50mm Prime',
      aperture: 'f/1.4',
      shutterSpeed: '1/160s',
      iso: 'ISO 800',
      lighting: "Oil Lamp Flame Glow",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony A7R V',
      lensModel: 'FE 50mm f/1.2 GM'
    }
  },
  {
    id: 'work-29',
    number: '29',
    title: "Temple Festivity Colors",
    category: 'CULTURE',
    location: 'Gopuram Forecourt',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p13_3_472x552.jpeg',
    aspect: 'portrait',
    story: "From Page 13 of Shareef Sir's portfolio. Colorful ceremonial flags and brass bells adorning the temple gates during seasonal celebrations.",
    values: {
      focalLength: '35mm Prime',
      aperture: 'f/2.8',
      shutterSpeed: '1/400s',
      iso: 'ISO 160',
      lighting: "Golden Afternoon Sun",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony FX6 Cinema Camera',
      lensModel: 'FE 35mm f/1.4 GM'
    }
  },
  {
    id: 'work-30',
    number: '30',
    title: "Folk Storytellers",
    category: 'PEOPLE',
    location: 'Mandals',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p14_1_426x602.jpeg',
    aspect: 'portrait',
    story: "From Page 14 of Shareef Sir's portfolio. Traditional Burrakatha oral narrative performers dressed in classical silk turbans and ghungroos.",
    values: {
      focalLength: '85mm Prime',
      aperture: 'f/2.0',
      shutterSpeed: '1/400s',
      iso: 'ISO 320',
      lighting: "Stage Side Light",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 85mm f/1.4 GM'
    }
  },
  {
    id: 'work-31',
    number: '31',
    title: "The Narrative Song",
    category: 'CULTURE',
    location: 'Open Amphitheater',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p14_2_800x602.jpeg',
    aspect: 'landscape',
    story: "From Page 14 of Shareef Sir's portfolio. Full dramatic performance of regional ballad singers recounting heroic folk legends.",
    values: {
      focalLength: '50mm Prime',
      aperture: 'f/2.5',
      shutterSpeed: '1/500s',
      iso: 'ISO 250',
      lighting: "Open Air Verandah",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony FX6 Cinema Line',
      lensModel: 'FE 50mm f/1.2 GM'
    }
  },
  {
    id: 'work-32',
    number: '32',
    title: "The Weaver's Smile",
    category: 'PEOPLE',
    location: 'Dharmavaram',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p15_1_2481x3509.jpeg',
    aspect: 'portrait',
    story: "Native 2481x3509 resolution from Page 15 of Shareef Sir's portfolio. The acclaimed master character study capturing generational joy and craft wisdom.",
    values: {
      focalLength: '85mm Prime',
      aperture: 'f/2.0',
      shutterSpeed: '1/400s',
      iso: 'ISO 100',
      lighting: "Overcast Diffused Daylight with Calico Reflector",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1 (50.1 MP Sensor)',
      lensModel: 'FE 85mm f/1.4 GM'
    }
  },
  {
    id: 'work-33',
    number: '33',
    title: "Tholu Bommalata Puppeteer",
    category: 'CRAFT PROCESS',
    location: 'Nimmalakunta',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p16_1_422x640.jpeg',
    aspect: 'portrait',
    story: "From Page 16 of Shareef Sir's portfolio. Master puppeteer holding hand-painted goat leather puppets representing characters from the Ramayana.",
    values: {
      focalLength: '50mm Prime',
      aperture: 'f/2.0',
      shutterSpeed: '1/320s',
      iso: 'ISO 200',
      lighting: "Studio North Light",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony A7R V',
      lensModel: 'FE 50mm f/1.2 GM'
    }
  },
  {
    id: 'work-34',
    number: '34',
    title: "The Artisan's Hands",
    category: 'CRAFT PROCESS',
    location: 'Nimmalakunta Cluster',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p16_2_438x640.jpeg',
    aspect: 'portrait',
    story: "From Page 16 of Shareef Sir's portfolio. Close-up of leather perforation tools carving delicate lace-like patterns into translucent parchment.",
    values: {
      focalLength: '90mm Macro',
      aperture: 'f/2.8',
      shutterSpeed: '1/400s',
      iso: 'ISO 160',
      lighting: "Workbench Task Lamp + Ambient",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 90mm f/2.8 Macro G'
    }
  },
  {
    id: 'work-35',
    number: '35',
    title: "Mythological Figures",
    category: 'TRIBAL ART',
    location: 'Anantapur Workshop',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p16_3_329x480.jpeg',
    aspect: 'portrait',
    story: "From Page 16 of Shareef Sir's portfolio. Brilliant organic vegetable dyes painted onto leather puppets, glowing with jewel-like translucence.",
    values: {
      focalLength: '50mm Prime',
      aperture: 'f/2.2',
      shutterSpeed: '1/250s',
      iso: 'ISO 200',
      lighting: "Workshop Daylight",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony A7R V',
      lensModel: 'FE 50mm f/1.2 GM'
    }
  },
  {
    id: 'work-36',
    number: '36',
    title: "Shadow Puppet Masterwork",
    category: 'TRIBAL ART',
    location: 'Puppetry Cooperative',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p16_4_329x480.jpeg',
    aspect: 'portrait',
    story: "From Page 16 of Shareef Sir's portfolio. Intricate jointed limbs and dynamic painted silhouettes that come alive behind illuminated white screens.",
    values: {
      focalLength: '50mm Prime',
      aperture: 'f/2.2',
      shutterSpeed: '1/250s',
      iso: 'ISO 200',
      lighting: "Screen Illumination",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony FX6 Cinema Camera',
      lensModel: 'FE 50mm f/1.2 GM'
    }
  },
  {
    id: 'work-37',
    number: '37',
    title: "Legacy of Shadow Theater",
    category: 'TRIBAL ART',
    location: 'Nimmalakunta',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p16_5_329x480.jpeg',
    aspect: 'portrait',
    story: "From Page 16 of Shareef Sir's portfolio. Multi-generational leather puppeteers safeguarding a UNESCO-recognized oral epic tradition.",
    values: {
      focalLength: '35mm Prime',
      aperture: 'f/2.0',
      shutterSpeed: '1/320s',
      iso: 'ISO 250',
      lighting: "Ambient North Sky",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 35mm f/1.4 GM'
    }
  },
  {
    id: 'work-38',
    number: '38',
    title: "Chiseled Stone Pillars",
    category: 'ARCHITECTURE',
    location: 'Kakatiya / Vijayanagara Heritage',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p18_1_534x756.jpeg',
    aspect: 'portrait',
    story: "From Page 18 of Shareef Sir's portfolio. Monolithic polished black granite temple pillars inscribed with classical epigraphs and ornate dancers.",
    values: {
      focalLength: '24mm Prime',
      aperture: 'f/8.0',
      shutterSpeed: '1/125s',
      iso: 'ISO 100',
      lighting: "Raking Sunlight on Stone",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 24-70mm f/2.8 GM II'
    }
  },
  {
    id: 'work-39',
    number: '39',
    title: "Sacred Temple Sanctuary",
    category: 'ARCHITECTURE',
    location: 'Heritage Temple Complex',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p23_1_554x787.jpeg',
    aspect: 'portrait',
    story: "From Page 23 of Shareef's portfolio. Meditative temple corridor bathed in natural morning light, capturing the quiet serenity of ancient sacred architecture.",
    values: {
      focalLength: '35mm Prime',
      aperture: 'f/4.0',
      shutterSpeed: '1/250s',
      iso: 'ISO 160',
      lighting: "Morning Temple Ambient",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony A7R V',
      lensModel: 'FE 35mm f/1.4 GM'
    }
  },
  {
    id: 'work-40',
    number: '40',
    title: "Fisherman of the Bay",
    category: 'PEOPLE',
    location: 'Visakhapatnam Shore',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p24_1_550x778.jpeg',
    aspect: 'portrait',
    story: "From Page 24 of Shareef's portfolio. Authentic coastal portrait of a seafaring fisherman mending his nets along the Bay of Bengal at sunrise.",
    values: {
      focalLength: '85mm Prime',
      aperture: 'f/2.0',
      shutterSpeed: '1/640s',
      iso: 'ISO 100',
      lighting: "Coastal Sunrise Natural Glow",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 85mm f/1.4 GM'
    }
  },
  {
    id: 'work-41',
    number: '41',
    title: "Pouring Molten Brass",
    category: 'CRAFT PROCESS',
    location: 'Perumallapalli Foundry',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p20_1_800x365.jpeg',
    aspect: 'wide',
    story: "From Page 20 of Shareef Sir's portfolio. Dramatic kiln furnace glow as master bell-metal artisans pour liquid brass into lost-wax clay molds.",
    values: {
      focalLength: '50mm Prime',
      aperture: 'f/2.0',
      shutterSpeed: '1/1000s',
      iso: 'ISO 800',
      lighting: "Hearth Fire Glow",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony FX6 Cinema Camera',
      lensModel: 'FE 50mm f/1.2 GM'
    }
  },
  {
    id: 'work-42',
    number: '42',
    title: "Dokra Lost-Wax Craft",
    category: 'CRAFT PROCESS',
    location: 'Tribal Metal Guild',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p20_2_492x405.jpeg',
    aspect: 'landscape',
    story: "From Page 20 of Shareef Sir's portfolio. Fine beeswax threads wrapped around clay cores to construct non-ferrous tribal figurines.",
    values: {
      focalLength: '90mm Macro',
      aperture: 'f/3.5',
      shutterSpeed: '1/400s',
      iso: 'ISO 250',
      lighting: "Workshop Daylight",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony A7R V',
      lensModel: 'FE 90mm f/2.8 Macro G'
    }
  },
  {
    id: 'work-43',
    number: '43',
    title: "Chiseling the Brass Vessel",
    category: 'CRAFT PROCESS',
    location: 'Artisan Foundry',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p20_3_800x363.jpeg',
    aspect: 'wide',
    story: "From Page 20 of Shareef Sir's portfolio. Fine steel chisels tapping decorative geometric motifs onto solid ceremonial brass pots.",
    values: {
      focalLength: '50mm Prime',
      aperture: 'f/2.8',
      shutterSpeed: '1/500s',
      iso: 'ISO 320',
      lighting: "Raking Side Light",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 50mm f/1.2 GM'
    }
  },
  {
    id: 'work-44',
    number: '44',
    title: "Polished Bell Metal",
    category: 'CRAFT PROCESS',
    location: 'Craft Guild',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p20_4_400x225.jpeg',
    aspect: 'landscape',
    story: "From Page 20 of Shareef Sir's portfolio. Resonant bronze bells polished with river silt and tamarind paste to a brilliant golden shine.",
    values: {
      focalLength: '70mm Telephoto',
      aperture: 'f/4.0',
      shutterSpeed: '1/400s',
      iso: 'ISO 160',
      lighting: "Ambient Courtyard",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony A7R V',
      lensModel: 'FE 70-200mm f/2.8 GM II'
    }
  },
  {
    id: 'work-45',
    number: '45',
    title: "Metal Inlay Detailing",
    category: 'CRAFT PROCESS',
    location: 'Heritage Workshop',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p20_5_400x225.jpeg',
    aspect: 'landscape',
    story: "From Page 20 of Shareef Sir's portfolio. Intricate silver and brass wire inlays etched into darkened bell-metal ceremonial plates.",
    values: {
      focalLength: '90mm Macro',
      aperture: 'f/2.8',
      shutterSpeed: '1/320s',
      iso: 'ISO 200',
      lighting: "Focused Workbench Daylight",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 90mm f/2.8 Macro G'
    }
  },
  {
    id: 'work-46',
    number: '46',
    title: "Carving Kondapalli Toys",
    category: 'CRAFT PROCESS',
    location: 'Kondapalli Colony',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p21_1_800x291.jpeg',
    aspect: 'wide',
    story: "From Page 21 of Shareef Sir's portfolio. Master toy maker whittling lightweight Tella Poniki softwood into traditional village figurines.",
    values: {
      focalLength: '50mm Prime',
      aperture: 'f/2.2',
      shutterSpeed: '1/500s',
      iso: 'ISO 160',
      lighting: "Verandah Sunlight",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony A7R V',
      lensModel: 'FE 50mm f/1.2 GM'
    }
  },
  {
    id: 'work-47',
    number: '47',
    title: "Natural Lacquer Painting",
    category: 'CRAFT PROCESS',
    location: 'Kondapalli',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p21_2_800x294.jpeg',
    aspect: 'wide',
    story: "From Page 21 of Shareef Sir's portfolio. Applying organic tamarind-seed paste and vibrant non-toxic water colors onto carved folk toys.",
    values: {
      focalLength: '70mm Telephoto',
      aperture: 'f/3.5',
      shutterSpeed: '1/400s',
      iso: 'ISO 200',
      lighting: "Natural Courtyard Light",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 70-200mm f/2.8 GM II'
    }
  },
  {
    id: 'work-48',
    number: '48',
    title: "The Folk Toy Guild",
    category: 'CRAFT PROCESS',
    location: 'Krishna District',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p21_3_674x450.jpeg',
    aspect: 'landscape',
    story: "From Page 21 of Shareef Sir's portfolio. Finished Kondapalli Dasavatara figures and rural bullock carts showcased in the artisan's workshop.",
    values: {
      focalLength: '35mm Prime',
      aperture: 'f/2.8',
      shutterSpeed: '1/320s',
      iso: 'ISO 200',
      lighting: "Workshop Daylight",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony FX6 Cinema Camera',
      lensModel: 'FE 35mm f/1.4 GM'
    }
  },
  {
    id: 'work-49',
    number: '49',
    title: "TruJet Regional Aviation",
    category: 'COMMERCIAL',
    location: 'Hyderabad Airport',
    state: 'TELANGANA',
    image: '/images/portfolio_shareef/photos_raw/photo_p22_1_300x169.jpeg',
    aspect: 'portrait',
    story: "From Page 23 of Shareef Sir's portfolio. Timeless temple courtyard shrouded in morning mist, capturing centuries of spiritual contemplation.",
    values: {
      focalLength: '24mm Wide',
      aperture: 'f/5.6',
      shutterSpeed: '1/250s',
      iso: 'ISO 100',
      lighting: "Early Morning Mist Diffused",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony Alpha 1',
      lensModel: 'FE 24-70mm f/2.8 GM II'
    }
  },
  {
    id: 'work-50',
    number: '50',
    title: "Kailasagiri Bay & Coastline",
    category: 'LANDSCAPES',
    location: 'Visakhapatnam',
    state: 'ANDHRA PRADESH',
    image: '/images/portfolio_shareef/photos_raw/photo_p24_2_791x279.jpeg',
    aspect: 'portrait',
    story: "From Page 24 of Shareef Sir's portfolio. Portrait of a seasoned seafaring fisherman mending handwoven nylon nets against the backdrop of the Bay.",
    values: {
      focalLength: '85mm Prime',
      aperture: 'f/2.0',
      shutterSpeed: '1/800s',
      iso: 'ISO 100',
      lighting: "Open Ocean Horizon Daylight",
      colorTemp: '5400K Daylight',
      cameraBody: 'Sony A7R V',
      lensModel: 'FE 85mm f/1.4 GM'
    }
  }
]

// Featured Signature Masterpiece for Hero Showcase
const heroMasterpiece: GalleryWorkItem = {
  id: 'hero-masterpiece',
  number: '15',
  title: 'The Strength in Tradition',
  category: 'PEOPLE',
  location: 'Dharmavaram',
  state: 'ANDHRA PRADESH',
  image: '/images/portfolio_shareef/photos_raw/photo_p15_1_2481x3509.jpeg',
  aspect: 'portrait',
  story: "Native high-resolution portrait from Page 15 of Shareef's portfolio. The acclaimed master character study capturing generational dignity, resilience, and craft wisdom under directional north daylight.",
  values: {
    focalLength: '85mm Prime',
    aperture: 'f/2.0',
    shutterSpeed: '1/400s',
    iso: 'ISO 100',
    lighting: "Overcast Diffused Daylight with Calico Reflector",
    colorTemp: '5400K Daylight',
    cameraBody: 'Sony Alpha 1 (50.1 MP Sensor)',
    lensModel: 'FE 85mm f/1.4 GM'
  }
}

export function PhotographicWorkPage({
  onBackToHome,
  onOpenQuoteModal
}: PhotographicWorkPageProps) {
  // Navigation & Category states
  const [selectedCategory, setSelectedCategory] = useState<string>('All Works')
  const [viewFormat, setViewFormat] = useState<'grid' | 'spreads'>('grid')

  // Lightbox Modals
  const [selectedPhotoModal, setSelectedPhotoModal] = useState<GalleryWorkItem | null>(null)
  const [selectedSpreadModal, setSelectedSpreadModal] = useState<ShareefPageSpread | null>(null)

  const filterCategories = [
    'All Works',
    'Artisans & People',
    'Handloom & Textiles',
    'Tribal Art & Heritage',
    'Craft Processes',
    'Events & Publications',
    'Landscapes'
  ]

  const filteredWorks = useMemo(() => {
    if (selectedCategory === 'All Works') return curatedGalleryWorks
    // Map categories
    return curatedGalleryWorks.filter((w) => {
      if (selectedCategory === 'Artisans & People') return w.category === 'PEOPLE' || w.category === 'CULTURE'
      if (selectedCategory === 'Handloom & Textiles') return w.category === 'HANDLOOM' || w.category === 'CRAFT PROCESS'
      if (selectedCategory === 'Tribal Art & Heritage') return w.category === 'TRIBAL ART'
      if (selectedCategory === 'Craft Processes') return w.category === 'CRAFT PROCESS'
      if (selectedCategory === 'Events & Publications') return w.category === 'ARCHITECTURE'
      if (selectedCategory === 'Landscapes') return w.category === 'LANDSCAPES'
      return true
    })
  }, [selectedCategory])

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-[#141310] font-sans selection:bg-[#b82329] selection:text-white">
      {/* =========================================================================
          1. TOP NAVIGATION BAR (EXACT RECREATION OF CULTURUM HEADER)
      ========================================================================== */}
      <nav className="sticky top-0 z-40 bg-[#f7f5f0]/95 backdrop-blur-md border-b border-[#ded8cb] px-4 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Left: Client's Official Logo Mixed with Hero Page Branding */}
        <div className="flex items-center gap-2.5 sm:gap-3 cursor-pointer shrink-0" onClick={onBackToHome}>
          <img
            src="/images/shlokh_logo_transparent.png"
            alt="Shlokh Entertainments"
            className="logo-img shrink-0 max-h-[30px] sm:max-h-[38px] w-auto object-contain" style={{ height: "30px", maxHeight: "38px", width: "auto" }}
          />
          <div className="hidden sm:flex flex-col border-l border-[#ded8cb] pl-3">
            <span className="font-editorial text-xs sm:text-sm font-bold tracking-tight text-[#141310] uppercase">
              Visual Archive
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono tracking-widest text-[#747169] uppercase">
              Photography Portfolio
            </span>
          </div>
        </div>

        {/* Center: Clean Understated Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide">
          <button onClick={onBackToHome} className="text-[#747169] hover:text-[#141310] transition-colors cursor-pointer">
            Home
          </button>
          <button onClick={onBackToHome} className="text-[#747169] hover:text-[#141310] transition-colors cursor-pointer">
            About
          </button>
          <button onClick={onBackToHome} className="text-[#747169] hover:text-[#141310] transition-colors cursor-pointer">
            Projects
          </button>
          {/* Active Link with Red Underline */}
          <div className="relative py-2 text-[#141310] font-semibold cursor-pointer">
            <span>Our Work</span>
            <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#b82329] rounded-full" />
          </div>
          <button onClick={onBackToHome} className="text-[#747169] hover:text-[#141310] transition-colors cursor-pointer">
            Publications
          </button>
          <button onClick={onBackToHome} className="text-[#747169] hover:text-[#141310] transition-colors cursor-pointer">
            Contact
          </button>
        </div>

        {/* Right: Search Icon + Outlined 'Back to Site ->' Pill */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <button className="hidden sm:block text-[#747169] hover:text-[#141310] transition-colors p-2 cursor-pointer" aria-label="Search Archive">
            <Search className="w-4 h-4" />
          </button>

          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-4 sm:py-2 border border-[#ded8cb] hover:border-[#b82329] hover:bg-[#b82329]/10 text-[#141310] text-[11px] sm:text-xs font-mono font-medium tracking-wider transition-all cursor-pointer shadow-sm bg-white whitespace-nowrap"
          >
            <span>Back to Site</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#b82329]" />
          </button>
        </div>
      </nav>

      {/* =========================================================================
          2. HERO SECTION: "PHOTOGRAPHIC WORKS" (CLEAN EDITORIAL 2-COLUMN SHOWCASE)
      ========================================================================== */}
      <header className="relative pt-6 pb-10 sm:pt-12 sm:pb-16 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto border-b border-[#ded8cb]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Title, Subtitle, Stats, Curatorial Card */}
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col justify-center">
            {/* Red Archive Tag with Line */}
            <div className="flex items-center gap-3 text-[#b82329] text-[11px] font-mono font-bold tracking-[0.25em] uppercase mb-3">
              <span>VISUAL ARCHIVE</span>
              <span className="w-10 h-[1.5px] bg-[#b82329]" />
            </div>

            {/* Giant Ultra-Bold Condensed Title (Bebas Neue / Oswald) */}
            <h1 className="font-condensed text-[2.65rem] xs:text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.92] text-[#141310] uppercase mb-4 sm:mb-5">
              PHOTOGRAPHIC
              <br />
              WORKS
            </h1>

            <p className="text-sm sm:text-[15px] text-[#423f39] leading-relaxed max-w-md font-light mb-6 sm:mb-8">
              A high-fidelity visual record of people, places, master craftspeople, and living traditions that continue to shape our communities — captured with natural light and archival purity.
            </p>

            {/* Stats Row with Vertical Dividers */}
            <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-8 text-[#141310] pt-4 sm:pt-6 border-t border-[#ded8cb] mb-6">
              <div>
                <div className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight">50+</div>
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#747169] mt-0.5">Photographs</div>
              </div>
              <div className="w-[1px] h-8 sm:h-10 bg-[#ded8cb]" />
              <div>
                <div className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight">7</div>
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#747169] mt-0.5">Collections</div>
              </div>
              <div className="w-[1px] h-8 sm:h-10 bg-[#ded8cb]" />
              <div>
                <div className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight">6</div>
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-[#747169] mt-0.5">States Covered</div>
              </div>
            </div>

            {/* Curatorial Provenance Card */}
            <div className="p-4 sm:p-5 bg-white border border-[#ded8cb] rounded-none shadow-sm flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#b82329] font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#b82329]" />
                  FEATURED MASTERPIECE
                </span>
                <span className="text-[10px] font-mono text-[#747169] uppercase tracking-wider">
                  PAGE 15 ARCHIVE
                </span>
              </div>
              <div className="font-editorial text-lg sm:text-xl font-bold text-[#141310] leading-snug">
                {heroMasterpiece.title}
              </div>
              <p className="text-xs text-[#5c584e] leading-relaxed font-light">
                Generations of craft knowledge, woven with resilience and quiet dignity. Documented under natural directional north daylight.
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 pt-2 border-t border-[#f0ede6] text-[10px] font-mono text-[#747169]">
                <span>Sony Alpha 1 • 85mm GM</span>
                <span>•</span>
                <span>f/2.0 @ 1/400s</span>
                <span>•</span>
                <span>Natural North Light</span>
              </div>
            </div>
          </div>

          {/* Right Column: Single Grand Masterpiece Photograph (Highest Quality, Zero Slider) */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center">
            <div
              className="relative w-full rounded-none overflow-hidden shadow-2xl border border-[#ded8cb] bg-[#141310] group cursor-pointer"
              onClick={() => setSelectedPhotoModal(heroMasterpiece)}
            >
              <img
                src={heroMasterpiece.image}
                alt={heroMasterpiece.title}
                className="w-full h-[360px] xs:h-[420px] sm:h-[480px] lg:h-[540px] object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

              {/* Top Badges */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                <span className="px-2.5 py-1 bg-black/75 backdrop-blur-md text-white text-[10px] font-mono uppercase tracking-widest border border-white/10">
                  ARCHIVAL MASTERPIECE
                </span>
                <span className="px-2.5 py-1 bg-[#b82329] text-white text-[10px] font-mono uppercase tracking-wider font-bold shadow-md">
                  FULL 4K
                </span>
              </div>

              {/* Bottom Metadata & Click To Inspect */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-end justify-between pointer-events-none">
                <div className="text-white pr-2">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-white/70">
                    {heroMasterpiece.state} • {heroMasterpiece.location}
                  </div>
                  <div className="font-editorial text-base sm:text-xl font-bold text-white leading-tight mt-0.5">
                    {heroMasterpiece.title}
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-[#141310] text-[10px] font-mono uppercase tracking-wider font-bold shadow hover:bg-[#b82329] hover:text-white transition-colors shrink-0">
                  <span>Inspect</span>
                  <Maximize2 className="w-3 h-3 text-[#b82329]" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* =========================================================================
          3. FILTER BAR ("EXPLORE BY COLLECTION")
      ========================================================================== */}
      <section className="px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto py-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4">
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 sm:flex-wrap sm:pb-0">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#747169] mr-2 font-bold shrink-0">
              EXPLORE BY COLLECTION
            </span>

            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-none text-[11px] sm:text-xs font-mono uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#b82329] text-white font-bold shadow-sm'
                    : 'bg-white text-[#423f39] hover:text-[#141310] hover:border-[#141310] border border-[#ded8cb]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* View Mode Toggle: Grid vs 24 Master Spreads */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setViewFormat('grid')}
              className={`p-2 rounded-none border transition-all cursor-pointer ${
                viewFormat === 'grid'
                  ? 'bg-[#141310] border-[#141310] text-white'
                  : 'bg-white border-[#ded8cb] text-[#747169] hover:text-[#141310]'
              }`}
              title="Culturum Curated Photographic Grid"
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewFormat('spreads')}
              className={`p-2 rounded-none border transition-all cursor-pointer ${
                viewFormat === 'spreads'
                  ? 'bg-[#141310] border-[#141310] text-white'
                  : 'bg-white border-[#ded8cb] text-[#747169] hover:text-[#141310]'
              }`}
              title="Shareef Sir 24 Master Spreads (Book Format)"
            >
              <BookOpen className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            4. THE 10 MASONRY GALLERY CARDS (NATURAL PROPORTIONS, NO BOXES, NO GAPS)
        ========================================================================== */}
        {viewFormat === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-4 items-start">
            {/* Column 1 */}
            <div className="flex flex-col gap-6 sm:gap-8">
              {filteredWorks.filter((_, i) => i % 3 === 0).map((work) => (
                <div
                  key={work.id}
                  onClick={() => setSelectedPhotoModal(work)}
                  className="group relative rounded-none overflow-hidden cursor-pointer transition-all duration-500 shadow-md hover:shadow-xl bg-white border border-[#ded8cb]"
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  {/* Seamless gradient overlay pinned directly to photo */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none" />

                  {/* Editorial typography overlay directly on photo */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex items-end justify-between pointer-events-none">
                    <div className="pr-2">
                      <div className="text-[11px] font-mono font-bold text-white/70 mb-0.5">
                        {work.number}
                      </div>
                      <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-[#ff6b6b] transition-colors drop-shadow">
                        {work.title}
                      </h3>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#d4cfc4] mt-1 drop-shadow">
                        {work.category} • {work.state}
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-[#b82329] backdrop-blur-md flex items-center justify-center text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-6 sm:gap-8">
              {filteredWorks.filter((_, i) => i % 3 === 1).map((work) => (
                <div
                  key={work.id}
                  onClick={() => setSelectedPhotoModal(work)}
                  className="group relative rounded-none overflow-hidden cursor-pointer transition-all duration-500 shadow-md hover:shadow-xl bg-white border border-[#ded8cb]"
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex items-end justify-between pointer-events-none">
                    <div className="pr-2">
                      <div className="text-[11px] font-mono font-bold text-white/70 mb-0.5">
                        {work.number}
                      </div>
                      <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-[#ff6b6b] transition-colors drop-shadow">
                        {work.title}
                      </h3>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#d4cfc4] mt-1 drop-shadow">
                        {work.category} • {work.state}
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-[#b82329] backdrop-blur-md flex items-center justify-center text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-6 sm:gap-8">
              {filteredWorks.filter((_, i) => i % 3 === 2).map((work) => (
                <div
                  key={work.id}
                  onClick={() => setSelectedPhotoModal(work)}
                  className="group relative rounded-none overflow-hidden cursor-pointer transition-all duration-500 shadow-md hover:shadow-xl bg-white border border-[#ded8cb]"
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-auto block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity pointer-events-none" />

                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 z-10 flex items-end justify-between pointer-events-none">
                    <div className="pr-2">
                      <div className="text-[11px] font-mono font-bold text-white/70 mb-0.5">
                        {work.number}
                      </div>
                      <h3 className="font-editorial text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-[#ff6b6b] transition-colors drop-shadow">
                        {work.title}
                      </h3>
                      <div className="text-[10px] font-mono uppercase tracking-wider text-[#d4cfc4] mt-1 drop-shadow">
                        {work.category} • {work.state}
                      </div>
                    </div>

                    <div className="w-8 h-8 rounded-full bg-white/20 group-hover:bg-[#b82329] backdrop-blur-md flex items-center justify-center text-white transition-all transform group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            ALTERNATIVE VIEW: 24 MASTER PUBLICATION SPREADS (ORIGINAL 300 DPI BOOK)
        ========================================================================== */}
        {viewFormat === 'spreads' && (
          <div className="pt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {shareefPageSpreads.map((spread) => (
                <div
                  key={spread.pageNumber}
                  onClick={() => setSelectedSpreadModal(spread)}
                  className="group relative rounded-none overflow-hidden cursor-pointer bg-white border border-[#ded8cb] hover:border-[#b82329] transition-all shadow-md hover:shadow-xl"
                >
                  <div className="relative aspect-[1787/2527] w-full overflow-hidden bg-[#faf8f5]">
                    <img
                      src={spread.imageHd}
                      alt={spread.title}
                      className="w-full h-full object-cover object-top group-hover:scale-102 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white text-xs font-mono">
                      <span>PAGE {spread.pageNumber < 10 ? `0${spread.pageNumber}` : spread.pageNumber} OF 24</span>
                      <span className="px-2 py-0.5 rounded-none bg-[#b82329] text-[10px] font-bold uppercase">{spread.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* =========================================================================
          5. BOTTOM SECTION: "OUR APPROACH" (MATCHING THE CULTURUM DESIGN REFERENCE)
      ========================================================================== */}
      <footer className="relative mt-16 border-t border-[#ded8cb] bg-[#eeeae0]/40 py-16 px-4 sm:px-8 lg:px-12 max-w-[1440px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            {/* Red Label with Line */}
            <div className="flex items-center gap-3 text-[#b82329] text-[11px] font-mono font-bold tracking-[0.25em] uppercase mb-4">
              <span>OUR APPROACH</span>
              <span className="w-10 h-[1.5px] bg-[#b82329]" />
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl font-bold tracking-tight text-[#141310] leading-tight">
              Capturing
              <br />
              Stories.
              <br />
              <span className="font-normal text-[#423f39]">Creating </span>
              <em className="italic text-[#b82329]">Impact.</em>
            </h2>
          </div>

          <div className="lg:col-span-4 flex flex-col justify-center">
            <p className="text-sm sm:text-base text-[#423f39] leading-relaxed font-light mb-6">
              We document the people, places, crafts and initiatives that shape our cultural landscape — preserving traditions while highlighting their relevance today.
            </p>

            <button
              onClick={() => onOpenQuoteModal('Visual Documentation & Photographic Archive')}
              className="inline-flex items-center gap-2 text-[#b82329] font-mono text-xs font-bold uppercase tracking-wider hover:text-[#9e1c21] transition-colors self-start cursor-pointer"
            >
              <span>View Full Archive &amp; Inquire</span>
              <ArrowRight className="w-4 h-4 text-[#b82329]" />
            </button>
          </div>

          {/* Right Artisan Hands Vignette */}
          <div className="lg:col-span-3 relative h-48 rounded-none overflow-hidden border border-[#ded8cb] opacity-90 shadow-sm">
            <img
              src="/images/portfolio_shareef/photos_raw/photo_p07_1_313x441.jpeg"
              alt="Artisan hands shaping sacred craft"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f7f5f0]/60 via-transparent to-transparent" />
          </div>
        </div>
      </footer>

      {/* =========================================================================
          6. FULL-SCREEN LIGHTBOX MODAL WITH PROMINENT BACK BUTTON
      ========================================================================== */}
      {selectedPhotoModal && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-2xl flex flex-col animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar with Clear Back Button */}
          <div className="px-6 py-4 border-b border-white/10 bg-[#0e0d0c] flex items-center justify-between text-white shrink-0">
            {/* PROMINENT BACK BUTTON REQUESTED BY USER */}
            <button
              onClick={() => setSelectedPhotoModal(null)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 hover:bg-[#b82329] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer border border-white/25 shadow-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>← Back to Gallery</span>
            </button>

            {/* Center Info */}
            <div className="text-center hidden sm:block">
              <div className="font-editorial text-base font-bold text-white">{selectedPhotoModal.title}</div>
              <div className="text-[11px] font-mono text-white/50">{selectedPhotoModal.category} • {selectedPhotoModal.state}</div>
            </div>

            {/* Top Right Close (Esc) */}
            <button
              onClick={() => setSelectedPhotoModal(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-[#b82329] text-white transition-colors cursor-pointer"
              title="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body: Image Stage (Left) + Photographic Telemetry Panel (Right) */}
          <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
            {/* Left Image Stage */}
            <div className="flex-1 relative flex items-center justify-center p-6 bg-black/80 overflow-auto">
              <img
                src={selectedPhotoModal.image}
                alt={selectedPhotoModal.title}
                className="max-h-[75vh] max-w-full w-auto rounded-none shadow-2xl border border-white/20 object-contain"
              />
            </div>

            {/* Right Telemetry Panel Matching the Screenshot */}
            <div className="w-full lg:w-[420px] p-6 border-t lg:border-t-0 lg:border-l border-white/10 bg-[#0e0d0c] text-white flex flex-col justify-between overflow-y-auto">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#ff4a50] mb-4">
                  <Sliders className="w-4 h-4" />
                  <span>PHOTOGRAPHIC TELEMETRY VALUES</span>
                </div>

                {/* 4 Big Parameter Boxes */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <div className="p-3.5 rounded-none bg-black/70 border border-white/10 text-center">
                    <span className="text-[10px] font-mono text-white/50 block mb-1">APERTURE</span>
                    <span className="font-mono text-xl font-bold text-white">
                      {selectedPhotoModal.values.aperture}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-none bg-black/70 border border-white/10 text-center">
                    <span className="text-[10px] font-mono text-white/50 block mb-1">SHUTTER SPEED</span>
                    <span className="font-mono text-xl font-bold text-white">
                      {selectedPhotoModal.values.shutterSpeed}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-none bg-black/70 border border-white/10 text-center">
                    <span className="text-[10px] font-mono text-white/50 block mb-1">ISO SENSITIVITY</span>
                    <span className="font-mono text-xl font-bold text-amber-400">
                      {selectedPhotoModal.values.iso}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-none bg-black/70 border border-white/10 text-center">
                    <span className="text-[10px] font-mono text-white/50 block mb-1">FOCAL LENGTH</span>
                    <span className="font-mono text-xl font-bold text-[#ff4a50]">
                      {selectedPhotoModal.values.focalLength}
                    </span>
                  </div>
                </div>

                {/* Hardware & Calibration Specs */}
                <div className="flex flex-col gap-2.5 text-xs font-mono mb-6">
                  <div className="p-3 rounded-none bg-white/5 border border-white/10">
                    <span className="text-[10px] text-white/40 block">CAMERA BODY / SENSOR</span>
                    <span className="font-bold text-white text-sm mt-0.5 block">{selectedPhotoModal.values.cameraBody}</span>
                  </div>
                  <div className="p-3 rounded-none bg-white/5 border border-white/10">
                    <span className="text-[10px] text-white/40 block">LENS MODEL</span>
                    <span className="font-bold text-white mt-0.5 block">{selectedPhotoModal.values.lensModel}</span>
                  </div>
                  <div className="p-3 rounded-none bg-white/5 border border-white/10">
                    <span className="text-[10px] text-white/40 block">LIGHTING SETUP &amp; DIFFUSION</span>
                    <span className="text-white/90 mt-0.5 block">{selectedPhotoModal.values.lighting}</span>
                  </div>
                  <div className="p-3 rounded-none bg-white/5 border border-white/10">
                    <span className="text-[10px] text-white/40 block">COLOR TEMPERATURE / CALIBRATION</span>
                    <span className="text-amber-400 font-bold mt-0.5 block">{selectedPhotoModal.values.colorTemp}</span>
                  </div>
                </div>

                {/* Archival Background */}
                <div className="text-xs text-white/70 leading-relaxed mb-6">
                  <span className="font-bold text-white block mb-1 font-mono uppercase text-[10px] text-[#ff4a50]">
                    Archival Background:
                  </span>
                  {selectedPhotoModal.story}
                </div>
              </div>

              {/* Inquire Action */}
              <button
                onClick={() => {
                  setSelectedPhotoModal(null)
                  onOpenQuoteModal(`Photography: ${selectedPhotoModal.title}`)
                }}
                className="w-full py-3 rounded-none bg-[#b82329] hover:bg-[#9e1c21] text-white font-bold text-xs uppercase tracking-wider shadow-lg transition-all cursor-pointer"
              >
                Inquire on this Visual Style
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          SPREAD LIGHTBOX MODAL (PAGES 1 - 24)
      ========================================================================== */}
      {selectedSpreadModal && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-2xl flex flex-col animate-fade-in"
          role="dialog"
          aria-modal="true"
        >
          <div className="px-6 py-4 border-b border-white/10 bg-[#0e0d0c] flex items-center justify-between text-white shrink-0">
            <button
              onClick={() => setSelectedSpreadModal(null)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 hover:bg-[#b82329] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer border border-white/25 shadow-lg"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>← Back to Spreads</span>
            </button>

            <div className="text-center">
              <span className="px-2.5 py-1 rounded-none bg-[#b82329] text-[10px] font-mono font-bold uppercase">
                PAGE {selectedSpreadModal.pageNumber} OF 24
              </span>
              <h3 className="font-editorial text-base font-bold text-white mt-1">{selectedSpreadModal.title}</h3>
            </div>

            <button
              onClick={() => setSelectedSpreadModal(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-[#b82329] text-white transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center p-6 overflow-auto">
            <img
              src={selectedSpreadModal.imageHd}
              alt={selectedSpreadModal.title}
              className="max-h-[80vh] w-auto max-w-full rounded-none shadow-2xl border border-white/20 object-contain"
            />
          </div>
        </div>
      )}
    </div>
  )
}
