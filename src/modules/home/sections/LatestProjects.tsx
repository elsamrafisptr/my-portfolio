import SectionNavigation from '@/components/elements/SectionNavigation'
import ProjectCard from '@/components/elements/project-card'
import { HomeContent } from '@/constants/contents'
import { randomizer } from '@/constants/utils'

const LatestProjects = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionNavigation title="Latest Projects" href="/projects" />
      <div className="grid grid-cols-2 gap-4">
        {randomizer(HomeContent.latest_projects, 2).map(value => {
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
    </div>
  )
}

export default LatestProjects
