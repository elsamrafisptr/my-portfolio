import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

import HomePage from '@/modules/home'

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
  title: `Elsam Rafi Saputra`,
  description: `Software & AI Engineer Enthusiast`,
  openGraph: {
    title: `Elsam Rafi Saputra`,
    description: `Software & AI Engineer Enthusiast`,
    authors: `Elsam Rafi Saputra`
  }
}

const Home = () => {
  const isMaintained: boolean = false

  if (isMaintained) return <MaintenancePage />

  return <HomePage />
}

export default Home
