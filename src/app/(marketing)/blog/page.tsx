import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

import BlogPage from '@/modules/blog'

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
  title: `Blog | Elsam Rafi Saputra`,
  description: `Software & AI Engineer Enthusiast`,
  openGraph: {
    title: `Blog | Elsam Rafi Saputra`,
    description: `Software & AI Engineer Enthusiast`,
    authors: `Elsam Rafi Saputra`
  }
}

const Blog = () => {
  const isMaintained: boolean = true

  if (isMaintained) return <MaintenancePage />

  return <BlogPage />
}

export default Blog
