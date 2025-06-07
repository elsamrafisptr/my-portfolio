import { urlEndpoint } from '@/constants/contents'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import Image from './image-wrapper'

interface ProjectCardProps {
  title: string
  desc: string
  date: string
  imageUrl: string
}

const ProjectCard = ({ title, desc, date, imageUrl }: ProjectCardProps) => {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="p-0">
        <Image
          src={urlEndpoint + imageUrl}
          alt={title || 'Project Image'}
          width={1024}
          height={1024}
          loading="lazy"
          className="aspect-video rounded bg-gray-200 object-cover"
          priority={false}
          animationPreset="smooth"
          hoverEffect="none"
        />
      </CardContent>
      <CardHeader className="mt-2 p-0">
        <p className="text-sm text-gray-500 dark:text-gray-300">{date}</p>
        <CardTitle className="line-clamp-1 text-base font-medium tracking-normal text-black dark:text-white">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-2 text-xs text-gray-600 dark:text-gray-200">
          {desc}
        </CardDescription>
      </CardHeader>
    </Card>
  )
}

export default ProjectCard
