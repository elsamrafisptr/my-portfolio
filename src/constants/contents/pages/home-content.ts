import { ProjectsContent, ProjectsContentProps } from '../components/projects-content'
import { ServicesContent, ServicesContentProps } from '../components/services'

export interface HomeContentProps {
  headline: string
  latest_blog: string
  latest_projects: ReadonlyArray<ProjectsContentProps>
  services: ReadonlyArray<ServicesContentProps>
}

export const HomeContent: Readonly<HomeContentProps> = {
  headline: '',
  latest_blog: '',
  latest_projects: ProjectsContent,
  services: ServicesContent
} as const
