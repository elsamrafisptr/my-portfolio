import Achievements from './sections/Achievements'
import EducationExperiences from './sections/EducationExperiences'
import Headline from './sections/Headline'
import OrgExperiences from './sections/OrgExperiences'
import Skills from './sections/Skills'
import WorkExperiences from './sections/WorkExperiences'

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      <Headline />
      <WorkExperiences />
      <OrgExperiences />
      <EducationExperiences />
      <Achievements />
      <Skills />
    </div>
  )
}

export default AboutPage
