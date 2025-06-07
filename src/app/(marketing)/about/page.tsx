import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

import AboutPage from '@/modules/about'

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
  title: `About | Elsam Rafi Saputra`,
  description: `Software & AI Engineer Enthusiast`,
  openGraph: {
    title: `About | Elsam Rafi Saputra`,
    description: `Software & AI Engineer Enthusiast`,
    authors: `Elsam Rafi Saputra`
  }
}

const About = () => {
  const isMaintained: boolean = false

  if (isMaintained) return <MaintenancePage />

  return <AboutPage />
}

export default About
