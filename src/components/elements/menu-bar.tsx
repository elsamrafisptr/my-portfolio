'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useScreenSize } from '@/hooks'
import { cn } from '@/lib/utils'
import {
  BriefcaseBusinessIcon,
  DownloadIcon,
  HomeIcon,
  LayoutDashboardIcon,
  MenuIcon,
  Moon,
  NotebookTabsIcon,
  PencilIcon,
  Sun,
  UserRoundCheckIcon
} from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useTheme } from 'next-themes'
import { memo, useCallback, useEffect, useState } from 'react'

import LoadingPage from '../layouts/LoadingPage'

const MENU_ITEMS = [
  { href: '/', Icon: HomeIcon, label: 'Home' },
  { href: '/about', Icon: UserRoundCheckIcon, label: 'About' },
  { href: '/projects', Icon: BriefcaseBusinessIcon, label: 'Projects' },
  { href: '/blog', Icon: PencilIcon, label: 'Blog' },
  { href: '/contact', Icon: NotebookTabsIcon, label: 'Contact' },
  { href: '/dashboard', Icon: LayoutDashboardIcon, label: 'Dashboard' }
]

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

const MobileMenu = () => {
  const pathname = usePathname()

  return (
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
  )
}

const MenuBar = () => {
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

  if (!mounted) return <LoadingPage />

  return (
    <header className="fixed bottom-0 z-50 flex w-full items-center justify-center p-2 md:p-6">
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
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            className="group flex items-center justify-center rounded-md p-4 transition-colors duration-150 hover:bg-gray-100"
          >
            {isDark ? (
              <Moon
                className={cn(
                  'size-5 transition-colors duration-100 group-hover:text-gray-800',
                  'text-gray-400'
                )}
              />
            ) : (
              <Sun
                className={cn(
                  'size-5 transition-colors duration-100 group-hover:text-gray-800',
                  'text-gray-400'
                )}
              />
            )}
          </button>
          <button
            onClick={() => console.log('Download action')}
            aria-label="Download Resume"
            className="group flex items-center justify-center rounded-md bg-gray-800 p-4 transition-colors duration-150 hover:opacity-90"
          >
            <DownloadIcon
              className={cn('size-5 text-white transition-colors duration-100')}
            />
          </button>
        </div>

        {/* Mobile menu list */}
        {isMobile && menuOpen && (
          <AnimatePresence>
            <MobileMenu />
          </AnimatePresence>
        )}
      </nav>
    </header>
  )
}

export default memo(MenuBar)
