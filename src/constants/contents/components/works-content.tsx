export interface WorksContentProps {
  title: string
  type: string
  work_type: string
  company_name: string
  company_contacts: string[]
  company_location: string
  description: string
  milestones: string[]
  start_date: string
  end_date: string
}

export const WorksContent: ReadonlyArray<WorksContentProps> = [
  {
    title: 'Software Engineer',
    type: 'Internship',
    work_type: 'Remote',
    company_name: 'SCHNAP',
    company_contacts: ['https://schnap.com.au'],
    company_location: 'Australia',
    description: '',
    milestones: [
      'Built entire the website software as a service (SaaS) product using WordPress, Custom WordPress Plugin, FastAPI Backend, and Stripe payment for membership.',
      'Built home server from laptop and PC using Linux Ubuntu and NGINX for hosting the API Service and set up the automation process for ease of use and maintainability.',
      'Played a role in optimizing app performance, usability, and maintainability, and contributing to its success in delivering and deploying the website to the client.',
      'Built automation tasks using Python and Make.com for decreasing and optimizing the current system in the company by integrating 3rd Party API, Data Scraping, and Webhooks.',
      'Monitor, test, and report everyday tasks of the website in the agile software development lifecycle and work remotely (WFA)'
    ],
    start_date: 'Nov 2024',
    end_date: 'Present'
  },
  {
    title: 'Fullstack Developer',
    type: 'Full Time',
    work_type: 'Remote',
    company_name: 'KAP TNN (PT. Itialus Solusi Perkasa)',
    company_contacts: ['https://kaptnn.com'],
    company_location: 'Jakarta Selatan, Indonesia',
    description: '',
    milestones: [
      'Built entire the website software as a service (SaaS) product using WordPress, Custom WordPress Plugin, FastAPI Backend, and Stripe payment for membership.',
      'Built home server from laptop and PC using Linux Ubuntu and NGINX for hosting the API Service and set up the automation process for ease of use and maintainability.',
      'Played a role in optimizing app performance, usability, and maintainability, and contributing to its success in delivering and deploying the website to the client.',
      'Built automation tasks using Python and Make.com for decreasing and optimizing the current system in the company by integrating 3rd Party API, Data Scraping, and Webhooks.',
      'Monitor, test, and report everyday tasks of the website in the agile software development lifecycle and work remotely (WFA)'
    ],
    start_date: 'Nov 2024',
    end_date: 'Present'
  },
  {
    title: 'Software Engineer',
    type: 'Freelance',
    work_type: 'Remote',
    company_name: 'Arnawa Digital',
    company_contacts: ['https://arnawadigital.com'],
    company_location: 'Bandung, Indonesia',
    description: '',
    milestones: [
      'Coordinated with the team as a project manager to organize job descriptions efficiently and on time.',
      'Built the main website of Arnawa Digital as a digital agency business.',
      'Built and maintained approximately 25 website templates (not no-code templates).',
      'Completed 13 programming and design projects.'
    ],
    start_date: 'Nov 2024',
    end_date: 'Present'
  },
  {
    title: 'Cloud Computing Cohort',
    type: 'Part Time',
    work_type: 'Remote',
    company_name: 'Bangkit Academy 2024 By Google, GoTo, Tokopedia, Traveloka',
    company_contacts: ['https://kaptnn.com'],
    company_location: 'Jakarta Selatan, Indonesia',
    description: '',
    milestones: [
      'Completed the Cloud Computing Path, including courses in cloud infrastructure, frontend and backend development, Google Cloud tools, and more.',
      'Built fully functional front-end and back-end systems that scalable, secure infrastructures and deployed machine learning models on Google Cloud.',
      'Completed 25+ Google Cloud Skills Boost, Dicoding, and Coursera courses and gained proficiency in tools for deployment, security, and API hosting.',
      'Collaborated with a team as a backend and cloud environment developer to complete this app “StuntFree” within 1 month, showcasing leadership, teamwork, and technical expertise.'
    ],
    start_date: 'Sep 2024',
    end_date: 'Jan 2025'
  },
  {
    title: 'Frontend Developer',
    type: 'Internship',
    work_type: 'Remote',
    company_name: 'School Tech Indonesia',
    company_contacts: [''],
    company_location: 'Malang, Indonesia',
    description: '',
    milestones: [],
    start_date: 'Aug 2024',
    end_date: 'Dec 2024'
  },
  {
    title: 'Fullstack Developer',
    type: 'Internship',
    work_type: 'Remote',
    company_name: 'Betr Beta',
    company_contacts: ['https://kaptnn.com'],
    company_location: 'Singapore',
    description: '',
    milestones: [],
    start_date: 'Jun 2024',
    end_date: 'Aug 2024'
  },
  {
    title: 'Web Developer',
    type: 'Internship',
    work_type: 'Remote',
    company_name: 'Next Gen Dev',
    company_contacts: ['https://kaptnn.com'],
    company_location: 'India',
    description: '',
    milestones: [],
    start_date: 'Jun 2024',
    end_date: 'Jul 2024'
  },
  {
    title: 'Algorithm Practicum Assistant',
    type: 'Part Time',
    work_type: 'On-Site',
    company_name: 'Informatics Laboratory Telkom University',
    company_contacts: ['https://kaptnn.com'],
    company_location: 'Bandung, Indonesia',
    description: '',
    milestones: [],
    start_date: 'Sep 2022',
    end_date: 'Jun 2023'
  },
  {
    title: 'English and Math Teacher',
    type: 'Part Time',
    work_type: 'On-Site',
    company_name: 'Rainbow Kids Bandung',
    company_contacts: ['https://kaptnn.com'],
    company_location: 'Bandung, Indonesia',
    description: '',
    milestones: [],
    start_date: 'Nov 2022',
    end_date: 'Jul 2023'
  }
] as const
