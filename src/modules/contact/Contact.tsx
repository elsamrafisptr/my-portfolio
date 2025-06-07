'use client'

import { LucideActivity } from 'lucide-react'

import Container from '@/components/layouts/Container'

import ContactForm from './sections/ContactFormSection'
import ContactInfoCard from './sections/ContactInfo'
import FAQSection from './sections/FAQ'
import Headline from './sections/Headline'
import SocialLinks from './sections/SocialLinks'

const ContactPage = () => {
  return (
    <Container>
      <Headline />
      <ContactInfoCard icon={LucideActivity} />
      <ContactForm />
      <SocialLinks />
      <FAQSection />
    </Container>
  )
}

export default ContactPage
