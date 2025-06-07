export interface ServicesContentProps {
  assetsImage: string[]
  title: string
  description: string
  slug: string
}

export const ServicesContent: ReadonlyArray<ServicesContentProps> = [
  {
    title: 'Website Development',
    description:
      'Build fast, scalable, responsive websites for your brand, driving engagement and growth.',
    slug: 'responsive-web-development-design',
    assetsImage: []
  },
  {
    title: 'Frontend Development',
    description:
      'Create interactive frontends for engaging user experiences and high-performance apps.',
    slug: 'modern-frontend-development',
    assetsImage: []
  },
  {
    title: 'Backend & API Integration',
    description:
      'Develop secure, scalable backend systems and integrate APIs for data flow and performance.',
    slug: 'robust-backend-api-integration',
    assetsImage: []
  },
  {
    title: 'SEO Optimization',
    description:
      'Optimize SEO, SEM, and LLM to improve rankings, traffic, and visibility.',
    slug: 'comprehensive-seo-optimization',
    assetsImage: []
  },
  {
    title: 'UI/UX Design',
    description:
      'Craft user-centered design interfaces and experiences that boost engagement, satisfaction, and conversion.',
    slug: 'intuitive-ui-ux-design-services',
    assetsImage: []
  },
  {
    title: 'System Automation',
    description:
      'Automate workflows and repetitive tasks to save time, reduce errors, and increase productivity.',
    slug: 'efficient-system-automation-solutions',
    assetsImage: []
  },
  {
    title: 'AI & Machine Learning Integration',
    description:
      'Integrate ML models and AI workflows into your applications for predictive analytics, personalization, and intelligents.',
    slug: 'ai-machine-learning-integration',
    assetsImage: []
  }
] as const
