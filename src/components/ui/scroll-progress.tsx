'use client'

import { cn } from '@/lib/utils'
import { MotionProps, motion, useScroll } from 'motion/react'
import React from 'react'

/* eslint-disable @typescript-eslint/no-empty-object-type */
interface ScrollProgressProps
  extends Omit<React.HTMLAttributes<HTMLElement>, keyof MotionProps> {}

export const ScrollProgress = React.forwardRef<HTMLDivElement, ScrollProgressProps>(
  ({ className, ...props }, ref) => {
    const { scrollYProgress } = useScroll()

    return (
      <motion.div
        ref={ref}
        className={cn(
          'fixed inset-x-0 top-0 z-50 h-1 origin-left bg-gray-800',
          className
        )}
        style={{
          scaleX: scrollYProgress
        }}
        {...props}
      />
    )
  }
)

ScrollProgress.displayName = 'ScrollProgress'
