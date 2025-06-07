import Container from '@/components/layouts/Container'

import Headline from './sections/Headline'
import LatestBlog from './sections/LatestBlog'
import LatestProjects from './sections/LatestProjects'
import Services from './sections/Services'

const HomePage = () => {
  const isActive: Readonly<boolean> = false

  return (
    <Container>
      <Headline />
      {isActive && <LatestBlog />}
      <LatestProjects />
      <Services />
    </Container>
  )
}

export default HomePage
