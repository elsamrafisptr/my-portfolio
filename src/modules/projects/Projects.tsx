import AllProjects from './sections/AllProjects'
import Filters from './sections/Filters'
import Headline from './sections/Headline'

const ProjectsPage = () => {
  return (
    <div className="flex flex-col">
      <Headline />
      <Filters />
      <AllProjects />
    </div>
  )
}

export default ProjectsPage
