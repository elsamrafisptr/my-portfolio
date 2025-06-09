'use client'

import { cn } from '@/lib/utils'
import { Moon, Sun } from 'lucide-react'
import { motion } from 'motion/react'
import { memo } from 'react'

interface ThemeToggleProps {
  isDark: boolean
  onToggle: () => void
  className?: string
}

const ThemeToggle = memo(({ isDark, onToggle, className }: ThemeToggleProps) => {
  return (
    <button
      onClick={onToggle}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      className={cn(
        'group flex items-center justify-center rounded-md p-4 transition-all duration-200 hover:cursor-not-allowed hover:bg-gray-100 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none dark:hover:bg-gray-800',
        className
      )}
      disabled={true}
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? (
          <Moon className="size-5 text-gray-400 transition-colors duration-200 group-hover:text-gray-800 dark:group-hover:text-gray-200" />
        ) : (
          <Sun className="size-5 text-gray-400 transition-colors duration-200 group-hover:text-gray-800 dark:group-hover:text-gray-200" />
        )}
      </motion.div>
    </button>
  )
})

ThemeToggle.displayName = 'ThemeToggle'

export default ThemeToggle
