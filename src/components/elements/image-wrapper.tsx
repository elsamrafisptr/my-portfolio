'use client'

import NextImage, { ImageProps as NextImageProps } from 'next/image'

import { cn } from '@/lib/utils'
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react'

const ANIMATION_PRESETS = {
  smooth: {
    loading: 'scale-105 blur-md opacity-70',
    loaded: 'scale-100 blur-0 opacity-100',
    duration: 'duration-700'
  },
  fade: {
    loading: 'opacity-0',
    loaded: 'opacity-100',
    duration: 'duration-500'
  }
} as const

type AnimationPreset = keyof typeof ANIMATION_PRESETS

interface SkeletonProps {
  variant?: 'pulse' | 'wave' | 'shimmer'
  className?: string
}

interface ExtendedImageProps extends Omit<NextImageProps, 'onLoad' | 'onError'> {
  // Visual enhancements
  rounded?: string
  shadow?: string
  overlay?: string

  // Loading states
  skeletonProps?: SkeletonProps
  showLoadingProgress?: boolean

  // Animation options
  animationPreset?: AnimationPreset
  customAnimation?: {
    loading: string
    loaded: string
    duration: string
  }

  // Hover effects
  hoverEffect?: 'zoom' | 'lift' | 'glow' | 'none'

  // Error handling
  fallbackSrc?: string
  showRetry?: boolean

  // Performance
  eager?: boolean
  optimized?: boolean

  // Callbacks
  onLoadStart?: () => void
  onLoadComplete?: () => void
  onError?: (error: Error) => void

  // Accessibility
  loadingLabel?: string
  errorLabel?: string
}

const Skeleton = ({ variant = 'pulse', className }: SkeletonProps) => {
  const variants = {
    pulse: 'animate-pulse bg-gray-200 dark:bg-gray-700',
    wave: 'animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 bg-[length:200%_100%] animate-[wave_1.5s_ease-in-out_infinite]',
    shimmer:
      'bg-gray-200 dark:bg-gray-700 relative overflow-hidden before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent'
  }

  return (
    <div
      className={cn(
        'absolute inset-0 flex items-center justify-center',
        variants[variant],
        className
      )}
      aria-hidden="true"
    />
  )
}

const LoadingProgress = ({ progress }: { progress: number }) => (
  <div className="absolute right-2 bottom-2 left-2">
    <div className="h-1 overflow-hidden rounded-full bg-black/20">
      <div
        className="h-full rounded-full bg-white/80 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  </div>
)

const RetryButton = ({ onRetry }: { onRetry: () => void }) => (
  <button
    onClick={onRetry}
    className="group absolute inset-0 flex flex-col items-center justify-center bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
    aria-label="Retry loading image"
  >
    <svg
      className="mb-2 h-8 w-8 transition-transform group-hover:scale-110"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
      />
    </svg>
    <span className="text-sm font-medium">Retry</span>
  </button>
)

const Image = forwardRef<HTMLDivElement, ExtendedImageProps>(
  (
    {
      alt,
      src,
      className,
      rounded = 'rounded-lg',
      shadow,
      overlay,
      skeletonProps = { variant: 'shimmer' },
      showLoadingProgress = false,
      animationPreset = 'smooth',
      customAnimation,
      hoverEffect = 'none',
      fallbackSrc,
      showRetry = true,
      eager = false,
      optimized = true,
      onLoadStart,
      onLoadComplete,
      onError,
      loadingLabel = 'Loading image',
      errorLabel = 'Failed to load image',
      priority,
      sizes,
      ...rest
    },
    ref
  ) => {
    const [loadingState, setLoadingState] = useState<'loading' | 'loaded' | 'error'>(
      'loading'
    )
    const [progress, setProgress] = useState(0)
    const [currentSrc, setCurrentSrc] = useState(src)
    const [retryCount, setRetryCount] = useState(0)
    const imageRef = useRef<HTMLImageElement>(null)
    const progressInterval = useRef<NodeJS.Timeout>(null)

    const animation = customAnimation || ANIMATION_PRESETS[animationPreset]

    const hoverEffects = {
      zoom: 'hover:scale-105',
      lift: 'hover:scale-105 hover:shadow-xl hover:-translate-y-1',
      glow: 'hover:shadow-2xl hover:shadow-blue-500/25',
      none: ''
    }

    useEffect(() => {
      if (loadingState === 'loading' && showLoadingProgress) {
        progressInterval.current = setInterval(() => {
          setProgress(prev => {
            if (prev >= 90) return prev
            return prev + Math.random() * 15
          })
        }, 200)
      }

      return () => {
        if (progressInterval.current) {
          clearInterval(progressInterval.current)
        }
      }
    }, [loadingState, showLoadingProgress])

    const handleLoadingComplete = useCallback(() => {
      setLoadingState('loaded')
      setProgress(100)
      onLoadComplete?.()

      if (progressInterval.current) {
        clearInterval(progressInterval.current)
      }
    }, [onLoadComplete])

    const handleError = useCallback(() => {
      const error = new Error(`Failed to load image: ${currentSrc}`)

      if (fallbackSrc && currentSrc !== fallbackSrc && retryCount === 0) {
        setCurrentSrc(fallbackSrc)
        setRetryCount(1)
        return
      }

      setLoadingState('error')
      onError?.(error)

      if (progressInterval.current) {
        clearInterval(progressInterval.current)
      }
    }, [currentSrc, fallbackSrc, retryCount, onError])

    const handleRetry = useCallback(() => {
      setLoadingState('loading')
      setProgress(0)
      setRetryCount(prev => prev + 1)
      setCurrentSrc(src)
      onLoadStart?.()
    }, [src, onLoadStart])

    const handleLoadStart = useCallback(() => {
      setLoadingState('loading')
      onLoadStart?.()
    }, [onLoadStart])

    const isValidSrc = useCallback((srcValue: string | object) => {
      if (typeof srcValue === 'object') return true // Static imports are safe
      if (typeof srcValue !== 'string') return false

      try {
        if (srcValue.startsWith('data:')) {
          return srcValue.startsWith('data:image/')
        }
        if (srcValue.startsWith('/') || srcValue.startsWith('http')) {
          return true
        }
        return false
      } catch {
        return false
      }
    }, [])

    if (!isValidSrc(currentSrc)) {
      console.warn('Invalid image src provided:', currentSrc)
      return (
        <div
          ref={ref}
          className={cn(
            'relative overflow-hidden bg-gray-100 dark:bg-gray-800',
            rounded,
            className
          )}
          role="img"
          aria-label={errorLabel}
        >
          <div className="absolute inset-0 flex items-center justify-center text-gray-500">
            Invalid image source
          </div>
        </div>
      )
    }

    return (
      <div
        ref={ref}
        className={cn(
          'group relative overflow-hidden',
          rounded,
          shadow,
          hoverEffects[hoverEffect],
          'transition-all ease-in-out',
          animation.duration,
          className
        )}
        role="img"
        aria-label={loadingState === 'loading' ? loadingLabel : alt}
      >
        {overlay && (
          <div className={cn('pointer-events-none absolute inset-0 z-10', overlay)} />
        )}

        {loadingState === 'loading' && (
          <>
            <Skeleton {...skeletonProps} />
            {showLoadingProgress && <LoadingProgress progress={progress} />}
          </>
        )}

        {loadingState === 'error' && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 dark:bg-gray-800">
            {showRetry ? (
              <RetryButton onRetry={handleRetry} />
            ) : (
              <div className="text-center text-gray-500">
                <svg
                  className="mx-auto mb-2 h-12 w-12"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm">{errorLabel}</p>
              </div>
            )}
          </div>
        )}

        <NextImage
          ref={imageRef}
          className={cn(
            'transition-all ease-in-out',
            animation.duration,
            loadingState === 'loading' ? animation.loading : animation.loaded,
            rounded
          )}
          src={currentSrc as string}
          alt={alt}
          loading={eager || priority ? 'eager' : 'lazy'}
          priority={priority}
          sizes={sizes || '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
          quality={optimized ? 85 : 100}
          onLoadStart={handleLoadStart}
          onLoad={handleLoadingComplete}
          onError={handleError}
          {...rest}
        />
      </div>
    )
  }
)

Image.displayName = 'Image'

export default Image
export type { ExtendedImageProps, AnimationPreset }
