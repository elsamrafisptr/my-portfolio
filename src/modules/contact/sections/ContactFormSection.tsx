'use client'

import { Button } from '@/components/ui/button'
import { useContactForm } from '@/hooks'
import { cn } from '@/lib/utils'
import { CheckIcon, SendIcon } from 'lucide-react'
import { type FormEvent, memo } from 'react'

interface FormFieldProps {
  label: string
  name: string
  type?: string
  value: string
  error?: string
  placeholder?: string
  required?: boolean
  as?: 'input' | 'textarea' | 'select'
  options?: { value: string; label: string }[]
  onChange: (value: string) => void
  className?: string
}

const FormField = memo(
  ({
    label,
    name,
    type = 'text',
    value,
    error,
    placeholder,
    required = false,
    as = 'input',
    options = [],
    onChange,
    className
  }: FormFieldProps) => {
    const fieldId = `contact-${name}`

    const baseInputClasses = cn(
      'w-full rounded-md border border-gray-300 px-3 py-2 text-sm transition-colors duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-500 dark:focus:border-blue-400',
      error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
      className
    )

    return (
      <div className="space-y-2">
        <label
          htmlFor={fieldId}
          className="block text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {label}
          {required && <span className="ml-1 text-red-500">*</span>}
        </label>

        {as === 'input' && (
          <input
            id={fieldId}
            name={name}
            type={type}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            required={required}
            className={baseInputClasses}
            aria-invalid={!!error}
            aria-describedby={error ? `${fieldId}-error` : undefined}
          />
        )}

        {as === 'textarea' && (
          <textarea
            id={fieldId}
            name={name}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            required={required}
            rows={4}
            className={cn(baseInputClasses, 'resize-none')}
            aria-invalid={!!error}
            aria-describedby={error ? `${fieldId}-error` : undefined}
          />
        )}

        {as === 'select' && (
          <select
            id={fieldId}
            name={name}
            value={value}
            onChange={e => onChange(e.target.value)}
            required={required}
            className={baseInputClasses}
            aria-invalid={!!error}
            aria-describedby={error ? `${fieldId}-error` : undefined}
          >
            <option value="">Select an option</option>
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        )}

        {error && (
          <p
            id={`${fieldId}-error`}
            className="text-sm text-red-600 dark:text-red-400"
            role="alert"
          >
            {error}
          </p>
        )}
      </div>
    )
  }
)

FormField.displayName = 'FormField'

const ContactForm = memo(() => {
  const {
    data,
    errors,
    isSubmitting,
    isSuccess,
    submitError,
    updateField,
    submitForm,
    resetForm
  } = useContactForm()

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    await submitForm(data)
  }

  if (isSuccess) {
    return (
      <div className="rounded-lg border border-green-200 bg-green-50 p-8 text-center dark:border-green-800 dark:bg-green-900/20">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-800">
          <CheckIcon className="h-8 w-8 text-green-600 dark:text-green-400" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-green-900 dark:text-green-100">
          Message Sent!
        </h3>
        <p className="mb-6 text-green-700 dark:text-green-300">
          Thank you for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <Button
          onClick={resetForm}
          variant="outline"
          className="border-green-300 text-green-700 hover:bg-green-100 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-800"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormField
          label="Name"
          name="name"
          value={data.name}
          error={errors.name}
          placeholder="Your full name"
          required
          onChange={value => updateField('name', value)}
        />

        <FormField
          label="Email"
          name="email"
          type="email"
          value={data.email}
          error={errors.email}
          placeholder="your.email@example.com"
          required
          onChange={value => updateField('email', value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <FormField
          label="Company"
          name="company"
          value={data.company || ''}
          placeholder="Your company (optional)"
          onChange={value => updateField('company', value)}
        />

        <FormField
          label="Budget Range"
          name="budget"
          as="select"
          value={data.budget || ''}
          options={[
            { value: 'under-5k', label: 'Under $5,000' },
            { value: '5k-15k', label: '$5,000 - $15,000' },
            { value: '15k-50k', label: '$15,000 - $50,000' },
            { value: '50k-plus', label: '$50,000+' },
            { value: 'discuss', label: "Let's discuss" }
          ]}
          onChange={value => updateField('budget', value)}
        />
      </div>

      <FormField
        label="Subject"
        name="subject"
        value={data.subject}
        error={errors.subject}
        placeholder="What's this about?"
        required
        onChange={value => updateField('subject', value)}
      />

      <FormField
        label="Message"
        name="message"
        as="textarea"
        value={data.message}
        error={errors.message}
        placeholder="Tell me about your project, goals, and timeline..."
        required
        onChange={value => updateField('message', value)}
      />

      <FormField
        label="Timeline"
        name="timeline"
        as="select"
        value={data.timeline || ''}
        options={[
          { value: 'asap', label: 'ASAP' },
          { value: '1-month', label: 'Within 1 month' },
          { value: '2-3-months', label: '2-3 months' },
          { value: '3-6-months', label: '3-6 months' },
          { value: 'flexible', label: 'Flexible' }
        ]}
        onChange={value => updateField('timeline', value)}
      />

      {submitError && (
        <div className="rounded-md bg-red-50 p-4 dark:bg-red-900/20">
          <p className="text-sm text-red-600 dark:text-red-400">{submitError}</p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
      >
        {isSubmitting ? (
          <>
            <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            Sending...
          </>
        ) : (
          <>
            <SendIcon className="mr-2 h-4 w-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
})

ContactForm.displayName = 'ContactForm'

export default ContactForm
