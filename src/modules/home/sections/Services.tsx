import SectionNavigation from '@/components/elements/SectionNavigation'

const Services = () => {
  return (
    <div className="flex flex-col gap-2">
      <SectionNavigation title="Services" />
      <div className="grid grid-cols-2 gap-4">
        <div className="flex w-full flex-col gap-4">
          <article className="h-24 w-full bg-gray-200"></article>
          <article className="h-48 w-full bg-gray-200"></article>
        </div>
        <div className="flex w-full flex-col gap-4">
          <article className="h-32 w-full bg-gray-200"></article>
          <article className="h-16 w-full bg-gray-200"></article>
        </div>
      </div>
    </div>
  )
}

export default Services
