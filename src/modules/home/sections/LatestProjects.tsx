import SectionNavigation from '@/components/elements/SectionNavigation'
import ProjectCard from '@/components/elements/project-card'

const LatestProjects = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionNavigation title="Latest Projects" href="/projects" />
      <div className="grid grid-cols-3 gap-4">
        <ProjectCard title="" imageUrl="" desc="" date="" />
        <ProjectCard title="" imageUrl="" desc="" date="" />
        <ProjectCard title="" imageUrl="" desc="" date="" />
      </div>
    </div>
  )
}

export default LatestProjects
