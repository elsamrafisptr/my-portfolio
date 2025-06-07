export interface ContactFormData {
  name: string
  email: string
  company?: string
  subject: string
  message: string
  budget?: string
  timeline?: string
}

export interface ContactFormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

export interface ContactFormState {
  data: ContactFormData
  errors: ContactFormErrors
  isSubmitting: boolean
  isSuccess: boolean
  submitError?: string
}
