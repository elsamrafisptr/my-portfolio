export interface SkillsContentProps {
  title: string
  skills: SkillItemProps[]
}

export interface SkillItemProps {
  title: string
  logo: string
}

export const SkillsContent: ReadonlyArray<SkillsContentProps> = [
  {
    title: 'Frameworks',
    skills: [
      {
        title: '',
        logo: ''
      },
      {
        title: '',
        logo: ''
      }
    ]
  },
  {
    title: 'Programming Languages',
    skills: [
      {
        title: '',
        logo: ''
      },
      {
        title: '',
        logo: ''
      }
    ]
  },
  {
    title: 'Libraries',
    skills: [
      {
        title: '',
        logo: ''
      },
      {
        title: '',
        logo: ''
      }
    ]
  },
  {
    title: 'Tools and Provider',
    skills: [
      {
        title: '',
        logo: ''
      },
      {
        title: '',
        logo: ''
      }
    ]
  }
] as const
