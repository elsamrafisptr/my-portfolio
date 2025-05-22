import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

import ProjectsPage from '@/modules/projects'

const MaintenancePage = dynamic(() => import('@/components/layouts/MaintenancePage'), {
  ssr: true,
  loading: () => (
    <main
      role="status"
      aria-live="polite"
      className="h-screen w-full bg-white dark:bg-white"
    />
  )
})

export const metadata: Metadata = {
  title: `Projects | Elsam Rafi Saputra`,
  description: `Software & AI Engineer Enthusiast`,
  openGraph: {
    title: `Projects | Elsam Rafi Saputra`,
    description: `Software & AI Engineer Enthusiast`,
    authors: `Elsam Rafi Saputra`
  }
}

const Projects = () => {
  const isMaintained: boolean = false

  if (!isMaintained) return <MaintenancePage />

  return <ProjectsPage />
}

export default Projects
