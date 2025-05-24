import SectionNavigation from '@/components/elements/SectionNavigation'
import { AboutMeContent } from '@/constants/contents'

const OrgExperiences = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionNavigation title="Organizational Experiences" />
      <div className="flex flex-col gap-2">
        {AboutMeContent.org_experiences.map(value => {
          return (
            <article
              key={(value.title + value.org_name).replace(' ', '').toLowerCase()}
            >
              <h1>{value.title}</h1>
              <p>{value.org_name}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default OrgExperiences
