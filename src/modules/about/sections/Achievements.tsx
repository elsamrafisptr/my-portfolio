import SectionNavigation from '@/components/elements/SectionNavigation'
import { AboutMeContent } from '@/constants/contents'

const Achievements = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionNavigation title="Achievements" />
      <div className="flex flex-col gap-2">
        {AboutMeContent.achievements.map(value => {
          return (
            <article
              key={(value.title + value.achievement_producer)
                .replace(' ', '')
                .toLowerCase()}
            >
              <h1>{value.title}</h1>
              <p>{value.achievement_producer}</p>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Achievements
