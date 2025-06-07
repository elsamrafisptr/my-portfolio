import SectionNavigation from '@/components/elements/SectionNavigation'
import AchievementCard from '@/components/elements/achievement-card'
import { AboutMeContent } from '@/constants/contents'

const Achievements = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionNavigation title="Achievements" />
      <div className="flex flex-col gap-6">
        {AboutMeContent.achievements.map((value, index) => {
          return (
            <AchievementCard
              key={index}
              title={value.title}
              description={value.description}
              achievement_producer={value.achievement_producer}
              producer_contacts={value.producer_contacts}
              credentials_id={value.credentials_id}
              credentials_url={value.credentials_url}
              credentials_year_publish={value.credentials_year_publish}
              milestones={value.milestones}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Achievements
