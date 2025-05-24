import SectionNavigation from '@/components/elements/SectionNavigation'
import { AboutMeContent } from '@/constants/contents'

const WorkExperiences = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionNavigation title="Work Experiences" />
      <div className="flex flex-col gap-2">
        {AboutMeContent.work_experiences.map(value => {
          return (
            <article
              key={(value.title + value.company_name).replace(' ', '').toLowerCase()}
            >
              <h1>{value.title}</h1>
              <p>{value.company_name}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default WorkExperiences
