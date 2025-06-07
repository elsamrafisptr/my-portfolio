'use client'

import type {
  ContactFormData,
  ContactFormErrors,
  ContactFormState
} from '@/constants/types/contact'
import { useCallback, useState } from 'react'

/* eslint-disable @typescript-eslint/no-explicit-any */

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  company: '',
  subject: '',
  message: '',
  budget: '',
  timeline: ''
}

const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

const validateForm = (data: ContactFormData): ContactFormErrors => {
  const errors: ContactFormErrors = {}

  if (!data.name.trim()) {
    errors.name = 'Name is required'
  } else if (data.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters'
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required'
  } else if (!validateEmail(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  if (!data.subject.trim()) {
    errors.subject = 'Subject is required'
  } else if (data.subject.trim().length < 5) {
    errors.subject = 'Subject must be at least 5 characters'
  }

  if (!data.message.trim()) {
    errors.message = 'Message is required'
  } else if (data.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters'
  }

  return errors
}

export function useContactForm() {
  const [state, setState] = useState<ContactFormState>({
    data: initialFormData,
    errors: {},
    isSubmitting: false,
    isSuccess: false
  })

  const updateField = useCallback((field: keyof ContactFormData, value: string) => {
    setState(prev => ({
      ...prev,
      data: { ...prev.data, [field]: value },
      errors: { ...prev.errors, [field]: undefined },
      submitError: undefined
    }))
  }, [])

  const submitForm = useCallback(async (data: ContactFormData) => {
    setState(prev => ({ ...prev, isSubmitting: true, submitError: undefined }))

    const errors = validateForm(data)

    if (Object.keys(errors).length > 0) {
      setState(prev => ({
        ...prev,
        errors,
        isSubmitting: false
      }))
      return false
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))

      // Here you would make the actual API call
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(data),
      // })

      setState(prev => ({
        ...prev,
        isSubmitting: false,
        isSuccess: true,
        data: initialFormData
      }))

      // Analytics tracking
      if (typeof window !== 'undefined' && 'gtag' in window) {
        ;(window as any).gtag('event', 'contact_form_submit', {
          event_category: 'engagement',
          event_label: data.subject
        })
      }

      return true
    } catch (error) {
      setState(prev => ({
        ...prev,
        isSubmitting: false,
        submitError: 'Failed to send message. Please try again: ' + error
      }))
      return false
    }
  }, [])

  const resetForm = useCallback(() => {
    setState({
      data: initialFormData,
      errors: {},
      isSubmitting: false,
      isSuccess: false
    })
  }, [])

  return {
    ...state,
    updateField,
    submitForm,
    resetForm
  }
}
