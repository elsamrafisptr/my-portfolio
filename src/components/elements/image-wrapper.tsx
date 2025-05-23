'use client'

import NextImage, { ImageProps as NextImageProps } from 'next/image'

import clsx from 'clsx'
import { useState } from 'react'

interface ExtendedImageProps extends NextImageProps {
  rounded?: string
  skeletonClassName?: string
}

const Image = ({
  alt,
  src,
  className,
  rounded,
  skeletonClassName,
  ...rest
}: ExtendedImageProps) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoad = () => {
    setIsLoading(false)
  }

  return (
    <div className={clsx('relative overflow-hidden', rounded)}>
      {isLoading && (
        <div
          className={clsx(
            'absolute inset-0 flex animate-pulse items-center justify-center bg-gray-200',
            skeletonClassName
          )}
          aria-hidden="true"
        ></div>
      )}

      <NextImage
        className={clsx(
          'transition-all duration-700 ease-in-out',
          isLoading ? 'scale-105 blur-md grayscale' : 'blur-0 scale-100 grayscale-0',
          rounded,
          className
        )}
        src={src}
        alt={alt}
        loading="lazy"
        quality={100}
        onLoad={handleLoad}
        {...rest}
      />
    </div>
  )
}

export default Image
