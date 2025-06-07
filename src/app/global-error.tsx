'use client'

import NextError from 'next/error'

import { routing } from '@/lib/i18n/i18nRouting'

export default function GlobalError(props: { error: Error & { digest?: string } }) {
  return (
    <html lang={routing.defaultLocale} suppressHydrationWarning={true}>
      <body suppressHydrationWarning={true} className="antialiased">
        <NextError statusCode={0} />
        <p>{props.error.message}</p>
      </body>
    </html>
  )
}
