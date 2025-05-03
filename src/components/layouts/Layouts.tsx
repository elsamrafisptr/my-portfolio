'use client'

import { ReactNode, useEffect, useState } from 'react'

import useScreenSize from '@/hooks/useScreenSize'

import MenuBar from '../elements/menu-bar'

const Layout = ({ children }: { children: ReactNode }) => {
  const { isMobile } = useScreenSize()
  const [isReady, setIsReady] = useState(false)
  console.log(isMobile)
  useEffect(() => {
    setIsReady(true)
  }, [])

  if (!isReady) {
    return null
  }

  return (
    <main className="relative z-10 flex w-full flex-col justify-center bg-gray-100 lg:flex-row lg:gap-5">
      <div className="no-scrollbar flex h-full w-full flex-col items-center justify-center scroll-smooth px-5 transition-all duration-300 lg:min-h-screen lg:max-w-[720px] lg:px-12">
        {children}
        <MenuBar />
      </div>
    </main>
  )
}

export default Layout
