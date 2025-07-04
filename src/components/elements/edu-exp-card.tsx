import Link from 'next/link'

import { EducationsContentProps } from '@/constants/contents/components/education-content'

import Image from './image-wrapper'

const EduExpCard = (item: EducationsContentProps) => {
  return (
    <Link
      href={''}
      className="relative -m-2 rounded-lg border border-gray-300/0 p-2 duration-100 hover:border-gray-300/50 hover:bg-gray-100/50"
    >
      <article className="flex w-full flex-auto items-start gap-2">
        {false ? (
          <Image
            src={'/globe.svg'}
            alt=""
            width={1024}
            height={1024}
            className="aspect-square h-12 w-12 rounded-lg border"
          />
        ) : (
          <canvas className="aspect-square h-12 w-12 rounded-lg border bg-gray-200 shadow-md shadow-gray-100"></canvas>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="md:col-span-3">
            <h1 className="text-sm font-semibold">
              {`${item.title} (${item.education_type})`}
            </h1>
            <p className="text-sm md:text-xs">
              <span className="font-medium">{item.education_name}</span> -{' '}
              {item.education_location}
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
}

export default EduExpCard
