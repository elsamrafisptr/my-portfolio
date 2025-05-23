import Image from 'next/image'

import { cn } from '@/lib/utils'

const ServiceCard = (
  props: Readonly<{ img: string; title: string; desc: string; className?: string }>
) => {
  return (
    <article
      className={cn(
        'flex h-min w-full flex-col gap-2 rounded bg-gray-100 p-2',
        props.className
      )}
    >
      {props.img ? (
        <Image
          src={props.img}
          alt={props.title}
          width={1024}
          height={1024}
          className="aspect-video rounded-sm"
        />
      ) : (
        <canvas className="aspect-video w-full rounded-sm bg-gray-200"></canvas>
      )}
      <div className="flex flex-col gap-0.5">
        <h1 className="text-xs font-medium">{props.title}</h1>
        <p className="text-xs text-gray-600">{props.desc}</p>
      </div>
    </article>
  )
}

export default ServiceCard
