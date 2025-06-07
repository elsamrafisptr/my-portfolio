import type { LocalePrefixMode } from 'next-intl/routing'

const localePrefix: LocalePrefixMode = 'as-needed'

export const AppConfig = {
  name: 'Elsam Rafi Saputra Portfolio',
  locales: ['en', 'id'],
  defaultLocale: 'en',
  localePrefix
}
