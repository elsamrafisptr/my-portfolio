export interface AchievementsContentProps {
  title: string
  achievement_producer: string
  producer_contacts: string[]
  credentials_id: string
  credentials_url: string
  credentials_year_publish: number
  description: string
  milestones: string[]
}

export const AchievementsContent: ReadonlyArray<AchievementsContentProps> = [
  {
    title:
      'International Conference on Advancement in Data Science, E-learning, and Information System (ICADEIS 2025)',
    achievement_producer: 'IEEE & Telkom University',
    producer_contacts: ['https://kaptnn.com'],
    credentials_id: 'Credentials',
    credentials_url: '',
    credentials_year_publish: 2025,
    description: '',
    milestones: []
  },
  {
    title: 'elevAIte with Dicoding',
    achievement_producer: 'Microsoft & Dicoding',
    producer_contacts: ['https://kaptnn.com'],
    credentials_id: 'Credentials',
    credentials_url: '',
    credentials_year_publish: 2025,
    description: '',
    milestones: []
  },
  {
    title: 'Telkom University Endowment Fund Scholarship 2024',
    achievement_producer: 'Telkom University',
    producer_contacts: ['https://kaptnn.com'],
    credentials_id: 'Credentials',
    credentials_url: '',
    credentials_year_publish: 2024,
    description: '',
    milestones: []
  },
  {
    title:
      'Bangkit Academy led by Google, Tokopedia, Gojek, & Traveloka Cloud Computing Path 2024',
    achievement_producer: 'Bangkit Academy',
    producer_contacts: ['https://kaptnn.com'],
    credentials_id: 'Credentials',
    credentials_url: '',
    credentials_year_publish: 2024,
    description: '',
    milestones: []
  },
  {
    title: 'AWS Academy 2024 Backend Development Stage 2',
    achievement_producer: 'AWS & Dicoding',
    producer_contacts: ['https://kaptnn.com'],
    credentials_id: 'Credentials',
    credentials_url: '',
    credentials_year_publish: 2024,
    description: '',
    milestones: []
  },
  {
    title: 'Tanamduit Campus Ambassador 2022',
    achievement_producer: 'Tanamduit',
    producer_contacts: [
      'https://www.tanamduit.com/',
      'https://www.instagram.com/tanamduit.id/'
    ],
    credentials_id: 'Credentials',
    credentials_url:
      'https://www.instagram.com/tanamduit.id/p/ChmgfzOvmN_/?img_index=3',
    credentials_year_publish: 2022,
    description: '',
    milestones: []
  }
] as const
