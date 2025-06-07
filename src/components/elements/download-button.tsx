'use client'

import { cn } from '@/lib/utils'
import { CheckIcon, DownloadIcon } from 'lucide-react'
import { memo, useState } from 'react'

interface DownloadButtonProps {
  onDownload: () => void | Promise<void>
  className?: string
  label?: string
}

const DownloadButton = memo(
  ({ onDownload, className, label = 'Download Resume' }: DownloadButtonProps) => {
    const [isDownloading, setIsDownloading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const handleDownload = async () => {
      try {
        setIsDownloading(true)
        await onDownload()
        setIsSuccess(true)

        setTimeout(() => {
          setIsSuccess(false)
        }, 2000)
      } catch (error) {
        console.error('Download failed:', error)
      } finally {
        setIsDownloading(false)
      }
    }

    return (
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        aria-label={label}
        className={cn(
          'group flex items-center justify-center rounded-md bg-gray-800 p-4 transition-all duration-200 hover:bg-gray-700 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:outline-none disabled:opacity-70 dark:bg-gray-700 dark:hover:bg-gray-600',
          {
            'bg-green-600 hover:bg-green-600': isSuccess
          },
          className
        )}
      >
        {isDownloading ? (
          <div className="size-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
        ) : isSuccess ? (
          <CheckIcon className="size-5 text-white" />
        ) : (
          <DownloadIcon className="size-5 text-white transition-transform duration-200 group-hover:scale-110" />
        )}
      </button>
    )
  }
)

DownloadButton.displayName = 'DownloadButton'

export default DownloadButton
