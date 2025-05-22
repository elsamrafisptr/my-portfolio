'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'

export default function ThemeProviderContext(props: Readonly<{ children: ReactNode }>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {props.children}
    </ThemeProvider>
  )
}
