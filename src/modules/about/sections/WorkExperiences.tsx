import Image from 'next/image'
import Link from 'next/link'

import SectionNavigation from '@/components/elements/SectionNavigation'
import { AboutMeContent } from '@/constants/contents'

const WorkExperiences = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionNavigation title="Work Experiences" />
      <div className="flex flex-col gap-2">
        {AboutMeContent.work_experiences.map(item => {
          return (
            <Link
              key={(item.title + item.company_name)
                .replace(' ', '')
                .toLocaleLowerCase()}
              href={`/about/professional/${item.type.replaceAll(' ', '-').toLowerCase()}-${item.title
                .replaceAll(' ', '-')
                .toLowerCase()}`}
              className="relative -m-2 rounded-lg border border-gray-300/0 p-2 duration-100 hover:border-gray-300/50 hover:bg-gray-100/50"
            >
              <article className="flex w-full flex-auto items-center gap-2">
                <Image
                  src={'/vercel.svg'}
                  alt=""
                  width={1024}
                  height={1024}
                  className="aspect-square h-24 w-24 rounded-lg"
                />
                <div className="grid grid-cols-1 gap-1 md:grid-cols-3">
                  <div className="md:col-span-3">
                    <h1 className="text-sm font-semibold">
                      {item.type} {item.title} ({item.work_type})
                    </h1>
                    <p className="text-sm md:text-xs">
                      <span className="font-medium">{item.company_name}</span> -{' '}
                      {item.company_location}
                    </p>
                  </div>
                  <div className="row-start-1 md:col-span-3">
                    <h1 className="text-left text-xs">
                      {item.start_date} - {item.end_date}
                    </h1>
                  </div>
                </div>
              </article>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default WorkExperiences
