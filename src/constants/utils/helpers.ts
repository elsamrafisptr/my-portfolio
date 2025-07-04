export const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_APP_URL) {
    return process.env.NEXT_PUBLIC_APP_URL
  }

  if (
    process.env.VERCEL_ENV === 'production' &&
    process.env.VERCEL_PROJECT_PRODUCTION_URL
  ) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return 'http://localhost:3000'
}

export const getLocalStorage = (key: string) => {
  if (typeof window !== 'undefined') {
    return JSON.parse(localStorage.getItem(key) || '[]')
  }
  return []
}

export const sanitizeText = (text: string) => {
  return text.replace('<has_function_call>', '')
}
