import Container from '@/components/layouts/Container'

import AllProjects from './sections/AllProjects'
import Headline from './sections/Headline'

const ProjectsPage = () => {
  // const isActive: Readonly<boolean> = false

  return (
    <Container>
      <Headline />
      <AllProjects />
    </Container>
  )
}

export default ProjectsPage
