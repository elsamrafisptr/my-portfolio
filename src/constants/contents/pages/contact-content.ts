import {
  GithubIcon,
  LinkedinIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon
} from 'lucide-react'

export const ContactContent = {
  headline: {
    title: 'Contact',
    subtitle: "Let's work together",
    description:
      "Have a project in mind? I'd love to hear about it. Send me a message and let's discuss how we can bring your ideas to life."
  },
  contactInfo: [
    {
      id: 'email',
      icon: MailIcon,
      label: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
      description: 'Send me an email'
    },
    {
      id: 'phone',
      icon: PhoneIcon,
      label: 'Phone',
      value: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
      description: 'Give me a call'
    },
    {
      id: 'location',
      icon: MapPinIcon,
      label: 'Location',
      value: 'San Francisco, CA',
      href: 'https://maps.google.com/?q=San+Francisco,+CA',
      description: 'Based in San Francisco'
    }
  ],
  socialLinks: [
    {
      id: 'linkedin',
      icon: LinkedinIcon,
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/username',
      color: 'hover:text-blue-600'
    },
    {
      id: 'github',
      icon: GithubIcon,
      label: 'GitHub',
      href: 'https://github.com/username',
      color: 'hover:text-gray-900 dark:hover:text-white'
    },
    {
      id: 'twitter',
      icon: TwitterIcon,
      label: 'Twitter',
      href: 'https://twitter.com/username',
      color: 'hover:text-blue-400'
    }
  ],
  faq: [
    {
      id: 'response-time',
      question: 'How quickly do you respond?',
      answer:
        'I typically respond to all inquiries within 24 hours during business days.'
    },
    {
      id: 'project-types',
      question: 'What types of projects do you work on?',
      answer:
        'I specialize in web development, mobile apps, and digital experiences. From small websites to complex applications.'
    },
    {
      id: 'availability',
      question: 'Are you available for new projects?',
      answer:
        "Yes! I'm currently accepting new projects. Let's discuss your timeline and requirements."
    },
    {
      id: 'consultation',
      question: 'Do you offer free consultations?',
      answer:
        "I offer a free 30-minute consultation to discuss your project and see if we're a good fit."
    }
  ]
} as const

export type ContactInfo = (typeof ContactContent.contactInfo)[0]
export type SocialLink = (typeof ContactContent.socialLinks)[0]
export type FAQ = (typeof ContactContent.faq)[0]
