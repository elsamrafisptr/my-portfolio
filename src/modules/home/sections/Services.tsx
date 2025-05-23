import SectionNavigation from '@/components/elements/SectionNavigation'
import ServiceCard from '@/components/elements/service-card'
import { HomeContent } from '@/constants/contents'

const Services = () => {
  return (
    <div className="flex flex-col gap-2">
      <SectionNavigation title="Services" />
      <div className="grid grid-cols-2 gap-4">
        <div className="flex w-full flex-col gap-4">
          {HomeContent.services.slice(0, 4).map(value => {
            return (
              <ServiceCard
                key={value.slug}
                img={value.assetsImage[0]!}
                title={value.title}
                desc={value.description}
              />
            )
          })}
        </div>
        <div className="flex w-full flex-col gap-4">
          {HomeContent.services.slice(4, HomeContent.services.length).map(value => {
            return (
              <ServiceCard
                key={value.slug}
                img={value.assetsImage[0] || ''}
                title={value.title}
                desc={value.description}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Services
