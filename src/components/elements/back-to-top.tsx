'use client'

import { cn } from '@/lib/utils'
import { ArrowUpIcon } from 'lucide-react'
import { memo, useCallback, useEffect, useState } from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */

interface BackToTopProps {
  threshold?: number
  smooth?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
  position?: 'bottom-right' | 'bottom-left' | 'bottom-center'
  showProgress?: boolean
  offset?: {
    bottom?: number
    right?: number
    left?: number
  }
}

const BackToTop = memo((props: BackToTopProps) => {
  const { threshold = 300, smooth = true, className = '', showProgress = false } = props

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    let ticking = false

    const update = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop

      setIsVisible(scrollTop > threshold)

      ticking = false
    }

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    update()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [threshold, showProgress])

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: smooth ? 'smooth' : 'auto' })
    if (typeof window !== 'undefined' && (window as any).gtag) {
      ;(window as any).gtag('event', 'scroll_to_top', {
        event_category: 'engagement'
      })
    }
  }, [smooth])

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault()
        scrollToTop()
      }
    },
    [scrollToTop]
  )

  if (!isVisible) return null

  return (
    <button
      onClick={scrollToTop}
      onKeyDown={handleKeyDown}
      className={cn(
        'group flex w-fit items-center justify-center gap-1 transition-colors duration-300 hover:cursor-pointer',
        className
      )}
      aria-label="Back to the top"
      title="Back to the top"
      type="button"
    >
      <span className="text-xs text-gray-400 group-hover:text-gray-600">
        Back to the top
      </span>
      <ArrowUpIcon className="h-3 w-3 text-gray-400 group-hover:text-gray-600" />
    </button>
  )
})

BackToTop.displayName = 'BackToTop'

export default BackToTop
