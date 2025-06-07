import SectionNavigation from '@/components/elements/SectionNavigation'
import { ContactContent } from '@/constants/contents'

const Headline = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionNavigation title={ContactContent.headline.title} />
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          {ContactContent.headline.subtitle}
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          {ContactContent.headline.description}
        </p>
      </div>
    </div>
  )
}

export default Headline
