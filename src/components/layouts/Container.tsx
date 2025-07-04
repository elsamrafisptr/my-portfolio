import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

import BackToTop from '../elements/back-to-top'
import { ScrollProgress } from '../ui/scroll-progress'

const Container = (props: Readonly<{ children: ReactNode; className?: string }>) => {
  return (
    <div
      className={cn(
        'flex h-full flex-col gap-12 rounded-lg border border-gray-200 bg-white p-6',
        props.className
      )}
    >
      <ScrollProgress />
      {props.children}
      <div className="flex w-full flex-col items-center justify-center gap-2">
        <p className="text-xs text-gray-400">Thanks for scrolling ✌️</p>
        <BackToTop />
      </div>
    </div>
  )
}

export default Container
