import Container from '@/components/layouts/Container'

import Achievements from './sections/Achievements'
import EducationExperiences from './sections/EducationExperiences'
import Headline from './sections/Headline'
import OrgExperiences from './sections/OrgExperiences'
import Skills from './sections/Skills'
import WorkExperiences from './sections/WorkExperiences'

const AboutPage = () => {
  // const isActive: Readonly<boolean> = false

  return (
    <Container>
      <Headline />
      <WorkExperiences />
      <OrgExperiences />
      <EducationExperiences />
      <Achievements />
      <Skills />
    </Container>
  )
}

export default AboutPage
