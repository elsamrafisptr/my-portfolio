import SectionNavigation from '@/components/elements/SectionNavigation'
import { AboutMeContent } from '@/constants/contents'

const EducationExperiences = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionNavigation title="Education" />
      <div className="flex flex-col gap-2">
        {AboutMeContent.education_experiences.map(value => {
          return (
            <article
              key={(value.title + value.education_name).replace(' ', '').toLowerCase()}
            >
              <h1>{value.title}</h1>
              <p>{value.education_name}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default EducationExperiences
