import SectionNavigation from '@/components/elements/SectionNavigation'
import EduExpCard from '@/components/elements/edu-exp-card'
import { AboutMeContent } from '@/constants/contents'

const EducationExperiences = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionNavigation title="Education" />
      <div className="flex flex-col gap-6">
        {AboutMeContent.education_experiences.map((value, index) => {
          return (
            <EduExpCard
              key={index}
              title={value.title}
              description={value.description}
              education_name={value.education_name}
              education_type={value.education_type}
              education_location={value.education_location}
              education_contacts={value.education_contacts}
              score={value.score}
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

export default EducationExperiences
