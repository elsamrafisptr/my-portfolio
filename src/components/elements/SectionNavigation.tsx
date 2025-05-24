import Link from 'next/link'

import { ArrowUpRightIcon, CircleIcon } from 'lucide-react'

const SectionNavigation = (props: Readonly<{ title: string; href?: string }>) => {
  return (
    <div className="flex w-full items-center justify-between">
      <span className="flex items-center gap-2">
        <CircleIcon size={8} />
        <h1>{props.title}</h1>
      </span>
      <span className="flex items-center gap-1 border-b border-transparent pl-0.5 text-gray-600 transition duration-150 hover:cursor-pointer hover:border-b hover:border-gray-600">
        {props.href && (
          <>
            <Link href={props.href} className="text-xs">
              View All
            </Link>
            <ArrowUpRightIcon size={16} />
          </>
        )}
      </span>
    </div>
  )
}

export default SectionNavigation
