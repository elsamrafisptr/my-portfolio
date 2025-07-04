import { ProjectsContent } from './components/projects-content'
import { AboutMeContent } from './pages/about-me-content'
import { ContactContent, ContactInfo, FAQ, SocialLink } from './pages/contact-content'
import { HomeContent } from './pages/home-content'

const urlEndpoint: Readonly<string> =
  'https://ik.imagekit.io/a5rn4awa3digi2tal1/arnawadigital/'

export { urlEndpoint, HomeContent, AboutMeContent, ProjectsContent, ContactContent }
export type { ContactInfo, SocialLink, FAQ }
