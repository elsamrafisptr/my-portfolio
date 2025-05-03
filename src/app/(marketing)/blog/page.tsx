import { Metadata } from 'next'

import React from 'react'

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
  return (
    <main className="flex min-h-screen items-center justify-center">
      Blog Page is Under Maintenance
    </main>
  )
}

export default Blog
