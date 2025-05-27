import ProjectCard from '@/components/elements/project-card'
import { HomeContent } from '@/constants/contents'

const AllProjects = () => {
  return (
    <div className="grid grid-cols-2 gap-x-4 gap-y-6">
      {HomeContent.latest_projects.map(value => {
        return (
          <ProjectCard
            key={value.slug}
            title={value.title}
            desc={value.description}
            date={value.tags[0] || ''}
            imageUrl={value.assetsImage[0] || ''}
          />
        )
      })}
    </div>
  )
}

export default AllProjects
