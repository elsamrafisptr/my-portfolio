import Link from 'next/link'

import { AchievementsContentProps } from '@/constants/contents/components/achievement-content'

import Image from './image-wrapper'

const AchievementCard = (item: AchievementsContentProps) => {
  return (
    <Link
      href={item.credentials_url}
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
            <h1 className="text-sm font-semibold">{item.title}</h1>
            <p className="text-sm md:text-xs">
              <span className="font-medium">{item.achievement_producer}</span> -{' '}
              {item.credentials_id}
            </p>
          </div>
          <div className="row-start-1 md:col-span-3">
            <h1 className="text-left text-xs">{item.credentials_year_publish}</h1>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default AchievementCard
