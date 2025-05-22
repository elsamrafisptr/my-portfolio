'use client'

import { useHasMounted } from '@/hooks'
import { ReactNode } from 'react'

import LoadingPage from './LoadingPage'

const MainAppProviders = (props: Readonly<{ children: ReactNode }>) => {
  const hasMounted = useHasMounted()

  if (!hasMounted) {
    return <LoadingPage />
  }

  return <main>{props.children}</main>
}

export default MainAppProviders
