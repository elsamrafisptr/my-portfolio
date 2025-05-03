export interface EducationsContentProps {
  title: string
  education_type: string
  education_name: string
  education_contacts: string[]
  education_location: string
  description: string
  score: string
  milestones: string[]
  start_date: string
  end_date: string
}

export const EducationsContent: ReadonlyArray<EducationsContentProps> = [
  {
    title: 'Bachelor of Informatics',
    education_type: 'On-Site',
    education_name: 'Telkom University',
    education_contacts: [''],
    education_location: 'Bandung, Indonesia',
    description: '',
    score: '3.77/4.00',
    milestones: [],
    start_date: 'September 2021',
    end_date: 'January 2025'
  },
  {
    title: 'Mathematics and Natural Sciences',
    education_type: 'On-Site',
    education_name: 'SMAN 1 Jepara',
    education_contacts: [''],
    education_location: 'Jepara, Indonesia',
    description: '',
    score: '85/100',
    milestones: [],
    start_date: 'August 2017',
    end_date: 'July 2020'
  }
] as const
