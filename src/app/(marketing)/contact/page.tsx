import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

import ContactPage from '@/modules/contact'

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
  title: `Contact | Elsam Rafi Saputra`,
  description: `Software & AI Engineer Enthusiast`,
  openGraph: {
    title: `Contact | Elsam Rafi Saputra`,
    description: `Software & AI Engineer Enthusiast`,
    authors: `Elsam Rafi Saputra`
  }
}

const Contact = () => {
  const isMaintained: boolean = false

  if (!isMaintained) return <MaintenancePage />

  return <ContactPage />
}

export default Contact
