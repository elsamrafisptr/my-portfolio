'use client'

import type { FAQ } from '@/constants/contents'
import { cn } from '@/lib/utils'
import { ChevronDownIcon } from 'lucide-react'
import { memo, useState } from 'react'

interface FAQItemProps {
  faq: FAQ
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = memo(({ faq, isOpen, onToggle }: FAQItemProps) => {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left transition-colors duration-200 hover:text-gray-600 dark:hover:text-gray-300"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${faq.id}`}
      >
        <span className="font-medium text-gray-900 dark:text-white">
          {faq.question}
        </span>
        <ChevronDownIcon
          className={cn(
            'h-5 w-5 text-gray-500 transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        id={`faq-answer-${faq.id}`}
        className={cn(
          'overflow-hidden transition-all duration-200',
          isOpen ? 'max-h-96 pb-4' : 'max-h-0'
        )}
      >
        <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
      </div>
    </div>
  )
})

FAQItem.displayName = 'FAQItem'

interface FAQSectionProps {
  faqs?: FAQ[]
  className?: string
}

const FAQSection = memo(({ faqs, className }: FAQSectionProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <div className={cn('space-y-0', className)}>
      {faqs?.map(faq => (
        <FAQItem
          key={faq.id}
          faq={faq}
          isOpen={openItems.has(faq.id)}
          onToggle={() => toggleItem(faq.id)}
        />
      ))}
    </div>
  )
})

FAQSection.displayName = 'FAQSection'

export default FAQSection
