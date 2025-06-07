import SectionNavigation from '@/components/elements/SectionNavigation'
import OrgExpCard from '@/components/elements/org-exp-card'
import { AboutMeContent } from '@/constants/contents'

const OrgExperiences = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionNavigation title="Organizational Experiences" />
      <div className="flex flex-col gap-6">
        {AboutMeContent.org_experiences.map((value, index) => {
          return (
            <OrgExpCard
              key={index}
              title={value.title}
              description={value.description}
              org_name={value.org_name}
              org_type={value.org_type}
              org_location={value.org_location}
              org_contacts={value.org_contacts}
              milestones={value.milestones}
              start_date={value.start_date}
              end_date={value.end_date}
            />
          )
        })}
      </div>
    </div>
  )
}

export default OrgExperiences
