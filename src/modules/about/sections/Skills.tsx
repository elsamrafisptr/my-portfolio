import SectionNavigation from '@/components/elements/SectionNavigation'
import { AboutMeContent } from '@/constants/contents'

const Skills = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionNavigation title="Skills" />
      <div className="flex flex-col gap-2">
        {AboutMeContent.skills.map(value => {
          return (
            <article key={value.title.replace(' ', '').toLowerCase()}>
              <h1>{value.title}</h1>
            </article>
          )
        })}
      </div>
    </div>
  )
}

export default Skills
