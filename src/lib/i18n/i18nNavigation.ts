import { createNavigation } from 'next-intl/navigation'

import { routing } from './i18nRouting'

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing)
