'use client'

import { cn } from '@/lib/utils'
import type { LucideIcon } from 'lucide-react'
import { memo } from 'react'

interface ContactInfoCardProps {
  icon: LucideIcon
  label?: string
  value?: string
  description?: string
  href?: string
  className?: string
}

const ContactInfoCard = memo(
  ({
    icon: Icon,
    label,
    value,
    description,
    href,
    className
  }: ContactInfoCardProps) => {
    const isExternal = href?.startsWith('http')

    return (
      <a
        href={href}
        {...(isExternal && {
          target: '_blank',
          rel: 'noopener noreferrer'
        })}
        className={cn(
          'group flex flex-col items-center gap-3 rounded-lg border border-gray-200 bg-white p-6 text-center transition-all duration-200 hover:border-gray-300 hover:shadow-md dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600',
          className
        )}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100 transition-colors duration-200 group-hover:bg-gray-200 dark:bg-gray-800 dark:group-hover:bg-gray-700">
          <Icon className="h-6 w-6 text-gray-600 dark:text-gray-400" />
        </div>
        <div className="space-y-1">
          <h3 className="font-medium text-gray-900 dark:text-white">{label}</h3>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-300">
            {value}
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">{description}</p>
        </div>
      </a>
    )
  }
)

ContactInfoCard.displayName = 'ContactInfoCard'

export default ContactInfoCard
