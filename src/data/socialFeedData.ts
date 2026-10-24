export interface SocialPost {
  id: string
  type: 'reel' | 'post' | 'bts' | 'launch'
  mediaUrl: string
  caption: string
  hashtags: string[]
  likes: string
  comments: string
  views?: string
  dateAgo: string
  permalink: string
  aspectRatio: '4:5' | '1:1' | '16:9'
}

export interface SocialProfile {
  handle: string
  displayName: string
  tagline: string
  followersCount: string
  postsCount: string
  verified: boolean
  profileUrl: string
  avatarImage: string
}

export const socialProfile: SocialProfile = {
  handle: '@shlokhentertainments',
  displayName: 'Shlokh Entertainments & Advertising',
  tagline: 'AI Ad Filmmaking • Cinema Production • Cultural Heritage Publications • Hyderabad & Pan-India',
  followersCount: '48.2K',
  postsCount: '340+',
  verified: true,
  profileUrl: 'https://www.instagram.com/shlokhentertainments',
  avatarImage: '/images/shlokh_official_logo.png'
}

export const recentSocialPosts: SocialPost[] = [
  {
    id: 'post-1',
    type: 'reel',
    mediaUrl: '/images/portfolio_photos/p10_weaves_andhra_book.jpg',
    caption: 'On location documenting the gold zari handloom heritage of Andhra Pradesh. 4K cinema cameras rolling in the historic weaving mandals.',
    hashtags: ['#ShlokhEntertainments', '#CinemaShoots', '#WeavesOfAP', '#HandloomHeritage'],
    likes: '2,840',
    comments: '184',
    views: '34.2K',
    dateAgo: '2 days ago',
    permalink: 'https://www.instagram.com/shlokhentertainments',
    aspectRatio: '4:5'
  },
  {
    id: 'post-2',
    type: 'bts',
    mediaUrl: '/images/portfolio_photos/p11_cinematographer_tripod_heavy.jpg',
    caption: 'Behind the lens with our cinema camera unit. Anamorphic glass, wireless monitoring, and zero compromises on visual rhythm.',
    hashtags: ['#BehindTheScenes', '#SonyVenice', '#CinemaCrew', '#AdFilmmaking'],
    likes: '1,920',
    comments: '96',
    views: '22.8K',
    dateAgo: '4 days ago',
    permalink: 'https://www.instagram.com/shlokhentertainments',
    aspectRatio: '4:5'
  },
  {
    id: 'post-3',
    type: 'reel',
    mediaUrl: '/images/services/ai_video_production_4k.jpg',
    caption: 'Testing neural avatar synthesis and hyper-realistic digital sets in our Hyderabad studio. Combining AI precision with cinematic direction.',
    hashtags: ['#AIVideoProduction', '#VirtualProduction', '#AIAdFilms', '#HyderabadProduction'],
    likes: '3,410',
    comments: '230',
    views: '48.6K',
    dateAgo: '1 week ago',
    permalink: 'https://www.instagram.com/shlokhentertainments',
    aspectRatio: '4:5'
  },
  {
    id: 'post-4',
    type: 'launch',
    mediaUrl: '/images/portfolio_photos/p10_cm_launching_weaves_book.jpg',
    caption: 'Hon’ble Chief Minister Sri Nara Chandrababu Naidu Garu officially unveiling the prestigious "Weaves Andhra Pradesh" coffee table book crafted by Shlokh.',
    hashtags: ['#GovernmentOfAP', '#CoffeeTableBook', '#ChandrababuNaidu', '#ShlokhExcellence'],
    likes: '4,120',
    comments: '312',
    views: '65.1K',
    dateAgo: '2 weeks ago',
    permalink: 'https://www.instagram.com/shlokhentertainments',
    aspectRatio: '4:5'
  }
]
