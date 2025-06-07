'use client'

import { usePathname, useRouter } from 'next/navigation'

import { useTheme } from 'next-themes'
import { useCallback, useEffect, useRef, useState } from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */

export function useMenuBar() {
  const pathname = usePathname()
  const router = useRouter()
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isNavigating, setIsNavigating] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
    setIsNavigating(false)
  }, [pathname])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  const toggleTheme = useCallback(() => {
    const newTheme = resolvedTheme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)

    // Analytics tracking
    if (typeof window !== 'undefined' && 'gtag' in window) {
      ;(window as any).gtag('event', 'theme_toggle', {
        theme: newTheme
      })
    }
  }, [resolvedTheme, setTheme])

  const toggleMenu = useCallback(() => {
    setMenuOpen(prev => !prev)
  }, [])

  const handleNavigation = useCallback(
    async (href: string, external = false, onClick?: () => void | Promise<void>) => {
      try {
        setIsNavigating(true)

        if (onClick) {
          await onClick()
        }

        if (external) {
          window.open(href, '_blank', 'noopener,noreferrer')
        } else {
          // Validate internal navigation
          if (href.startsWith('/') || href.startsWith('#')) {
            router.push(href)
          } else {
            console.warn('Invalid internal navigation href:', href)
          }
        }
      } catch (error) {
        console.error('Navigation error:', error)
      } finally {
        // Clear navigation state after a delay
        timeoutRef.current = setTimeout(() => {
          setIsNavigating(false)
        }, 300)
      }
    },
    [router]
  )

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return {
    pathname,
    mounted,
    menuOpen,
    isNavigating,
    isDark: resolvedTheme === 'dark',
    menuRef,
    toggleTheme,
    toggleMenu,
    handleNavigation
  }
}
