'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useScreenSize } from '@/hooks'
import { cn } from '@/lib/utils'
import {
  BriefcaseBusinessIcon,
  HomeIcon,
  LayoutDashboardIcon,
  LucideIcon,
  MenuIcon,
  NotebookTabsIcon,
  PencilIcon,
  UserRoundCheckIcon
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useTheme } from 'next-themes'
import { Suspense, memo, useCallback, useEffect, useState } from 'react'

import LoadingPage from '../layouts/LoadingPage'
import DownloadButton from './download-button'
import ThemeToggle from './theme-toggle'

/* eslint-disable @typescript-eslint/no-explicit-any */

const MENU_ITEMS = [
  { href: '/', Icon: HomeIcon, label: 'Home' },
  { href: '/about', Icon: UserRoundCheckIcon, label: 'About' },
  { href: '/projects', Icon: BriefcaseBusinessIcon, label: 'Projects' },
  { href: '/blog', Icon: PencilIcon, label: 'Blog' },
  { href: '/contact', Icon: NotebookTabsIcon, label: 'Contact' },
  { href: '/dashboard', Icon: LayoutDashboardIcon, label: 'Dashboard' }
]

const MenuBarSkeleton = () => (
  <header className="fixed bottom-0 z-50 flex w-full items-center justify-center bg-gradient-to-t from-gray-50 p-2 md:p-6">
    <nav className="flex w-full items-center justify-between rounded-lg border bg-white p-1 md:w-[504px]">
      <div className="flex items-center gap-1">
        <div className="h-12 w-12 animate-pulse rounded-md bg-gray-200" />
      </div>
      <div className="flex items-center gap-1">
        <div className="h-12 w-12 animate-pulse rounded-md bg-gray-200" />
        <div className="h-12 w-12 animate-pulse rounded-md bg-gray-800" />
      </div>
    </nav>
  </header>
)

export interface MenuItem {
  href: string
  Icon: LucideIcon
  label: string
  badge?: string | number
  disabled?: boolean
  external?: boolean
  onClick?: () => void | Promise<void>
}

export interface MenuBarConfig {
  items: MenuItem[]
  showThemeToggle?: boolean
  showDownloadButton?: boolean
  downloadAction?: () => void | Promise<void>
  position?: 'bottom' | 'top'
  variant?: 'default' | 'minimal' | 'floating'
}

export interface MenuBarProps {
  config?: Partial<MenuBarConfig>
  className?: string
  onNavigate?: (href: string) => void
}

type MenuItemProps = {
  href: string
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  label: string
  isActive: boolean
}

const NavItem = ({ href, Icon, label, isActive }: MenuItemProps) => (
  <Link
    href={href}
    aria-label={label}
    aria-current={isActive ? 'page' : undefined}
    className={cn(
      'group flex items-center justify-center rounded-md p-4 transition-colors duration-150 hover:bg-gray-100',
      isActive ? 'text-gray-800' : 'text-gray-400'
    )}
  >
    <Icon
      className={cn(
        'size-5 transition-colors duration-150 group-hover:text-gray-800',
        isActive ? 'text-gray-800' : 'text-gray-400'
      )}
    />
  </Link>
)

const MobileMenu = ({ onClose }: { onClose: () => void }) => {
  const pathname = usePathname()

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 -z-10 bg-black/10 backdrop-blur-xs"
        onClick={onClose}
        aria-hidden="true"
      />

      <motion.div
        initial={{ y: 100, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 100, opacity: 0, scale: 0 }}
        transition={{ bounceStiffness: 0, duration: 0.3, easings: ['easeIn'] }}
        className="absolute bottom-[72px] left-0 flex w-full justify-around p-2"
        role="menu"
      >
        <div className="grid w-full grid-cols-3 items-center justify-center gap-4 rounded-lg border bg-white p-6 dark:bg-white">
          {MENU_ITEMS.map(({ href, Icon, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className="group flex aspect-video flex-col items-center justify-center gap-1 rounded-lg transition-colors duration-150 hover:cursor-pointer hover:bg-gray-100"
              >
                <Icon
                  className={cn(
                    'size-5 transition-colors duration-150 group-hover:text-gray-800',
                    isActive ? 'text-gray-800' : 'text-gray-400'
                  )}
                />
                <p
                  className={cn(
                    'text-xs font-medium transition-colors duration-150 group-hover:text-gray-800',
                    isActive ? 'text-gray-800' : 'text-gray-400'
                  )}
                >
                  {label}
                </p>
              </Link>
            )
          })}
        </div>
      </motion.div>
    </>
  )
}

const PureMenuBar = () => {
  const pathname = usePathname()
  const { isMobile } = useScreenSize()
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => setMounted(true), [])
  console.log(isMobile)
  const isDark = resolvedTheme === 'dark'
  const toggleTheme = useCallback(() => {
    setTheme(isDark ? 'light' : 'dark')
  }, [isDark, setTheme])

  const toggleMenu = useCallback(() => {
    setMenuOpen(open => !open)
  }, [])

  const downloadAction = () => {
    console.log('Download')
  }

  if (!mounted) return <LoadingPage />

  return (
    <header className="fixed bottom-0 z-50 flex w-full items-center justify-center bg-gradient-to-t from-gray-50 p-2 md:p-6">
      <nav className="flex w-full items-center justify-between rounded-lg border bg-white p-1 md:w-[504px]">
        <div className="flex items-center gap-1">
          {isMobile ? (
            <button
              onClick={toggleMenu}
              aria-label="Open Menu"
              aria-expanded={menuOpen}
              className="rounded-md p-4 hover:cursor-pointer hover:bg-gray-100"
            >
              <MenuIcon className="h-5 w-5 text-gray-600" />
            </button>
          ) : (
            <div className="flex space-x-1">
              {MENU_ITEMS.map(({ href, Icon, label }) => (
                <NavItem
                  key={href}
                  href={href}
                  Icon={Icon}
                  label={label}
                  isActive={pathname === href}
                />
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center gap-1">
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
          <DownloadButton onDownload={downloadAction} />
        </div>

        {/* Mobile menu list */}
        {isMobile && menuOpen && (
          <AnimatePresence>
            <MobileMenu onClose={toggleMenu} />
          </AnimatePresence>
        )}
      </nav>
    </header>
  )
}

const MenuBar = memo((props: any) => {
  return (
    <Suspense fallback={<MenuBarSkeleton />}>
      <PureMenuBar {...props} />
    </Suspense>
  )
})

MenuBar.displayName = 'MenuBar'

export default memo(MenuBar)
