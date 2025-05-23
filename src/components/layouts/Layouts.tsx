'use client'

import { useHasMounted } from '@/hooks'
import { ReactNode } from 'react'

import MenuBar from '../elements/menu-bar'
import LoadingPage from './LoadingPage'

const Layout = (props: Readonly<{ children: ReactNode }>) => {
  const hasMounted = useHasMounted()

  if (!hasMounted) {
    return <LoadingPage />
  }

  return (
    <main className="relative flex min-h-screen w-full flex-col items-center justify-center bg-gray-50 dark:bg-gray-50">
      <section className="min-h-screen w-full bg-gray-50 p-2 pb-20 md:w-[552px] md:p-6 md:pb-24 dark:bg-gray-50">
        {props.children}
      </section>
      <MenuBar />
    </main>
  )
}

export default Layout
