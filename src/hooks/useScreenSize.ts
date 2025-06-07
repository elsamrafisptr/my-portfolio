import { useEffect, useState } from 'react'

interface ScreenSize {
  width: number
  height: number
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 0,
    height: 0,
    isMobile: false,
    isTablet: false,
    isDesktop: false
  })

  useEffect(() => {
    const updateScreenSize = () => {
      const width = window.innerWidth
      const height = window.innerHeight

      setScreenSize({
        width,
        height,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024
      })
    }

    updateScreenSize()

    window.addEventListener('resize', updateScreenSize)

    return () => {
      window.removeEventListener('resize', updateScreenSize)
    }
  }, [])

  return screenSize
}

export default useScreenSize
