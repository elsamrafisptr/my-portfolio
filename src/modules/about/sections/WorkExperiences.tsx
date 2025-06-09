import SectionNavigation from '@/components/elements/SectionNavigation'
import WorkExpCard from '@/components/elements/work-exp-card'
import { AboutMeContent } from '@/constants/contents'

const WorkExperiences = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionNavigation title="Work Experiences" />
      <div className="flex flex-col gap-6">
        {AboutMeContent.work_experiences.map((item, index) => {
          return (
            <WorkExpCard
              key={index}
              title={item.title}
              description={item.description}
              company_name={item.company_name}
              company_location={item.company_location}
              company_contacts={item.company_contacts}
              type={item.type}
              milestones={item.milestones}
              images={item.images}
              work_type={item.work_type}
              start_date={item.start_date}
              end_date={item.end_date}
            />
          )
        })}
      </div>
    </div>
  )
}

export default WorkExperiences
