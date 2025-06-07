import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

import DashboardPage from '@/modules/dashboard'

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
  title: `Dashboard | Elsam Rafi Saputra`,
  description: `Software & AI Engineer Enthusiast`,
  openGraph: {
    title: `Dashboard | Elsam Rafi Saputra`,
    description: `Software & AI Engineer Enthusiast`,
    authors: `Elsam Rafi Saputra`
  }
}

const Dashboard = () => {
  const isMaintained: boolean = true

  if (isMaintained) return <MaintenancePage />

  return <DashboardPage />
}

export default Dashboard
