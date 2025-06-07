'use client'

import { ContactContent } from '@/constants/contents'
import { cn } from '@/lib/utils'
import { memo } from 'react'

const SocialLinks = memo(() => {
  return (
    <section className="space-y-6">
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Connect With Me
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Follow me on social media for updates and insights
        </p>
      </div>

      <div className="flex justify-center space-x-6">
        {ContactContent.socialLinks.map(social => {
          const Icon = social.icon
          return (
            <a
              key={social.id}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                'flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white transition-all duration-200 hover:scale-110 hover:shadow-md dark:border-gray-700 dark:bg-gray-900',
                social.color
              )}
              aria-label={`Follow me on ${social.label}`}
            >
              <Icon className="h-5 w-5" />
            </a>
          )
        })}
      </div>
    </section>
  )
})

SocialLinks.displayName = 'SocialLinks'

export default SocialLinks
