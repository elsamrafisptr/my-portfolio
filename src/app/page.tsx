import { Metadata } from 'next'

import Homepage from '@/components/layouts/home'

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
  return <Homepage />
}

export default Home
