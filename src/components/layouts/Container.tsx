import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

import { ScrollProgress } from '../ui/scroll-progress'

const Container = (props: Readonly<{ children: ReactNode; className?: string }>) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-12 rounded-lg border border-gray-200 bg-white p-6',
        props.className
      )}
    >
      <ScrollProgress />
      {props.children}
      <div className="flex w-full items-center justify-center">
        <p className="text-xs text-gray-400">The End of the Page</p>
      </div>
    </div>
  )
}

export default Container
