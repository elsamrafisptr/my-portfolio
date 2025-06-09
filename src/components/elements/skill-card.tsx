import { Star } from 'lucide-react'

import Image from './image-wrapper'

const SkillCard = ({
  alt,
  value,
  isFavorite
}: {
  alt: string
  value: string
  isFavorite: boolean
}) => {
  return (
    <div className="relative h-fit w-fit">
      <Image
        src={`https://skillicons.dev/icons?i=${value}`}
        alt={alt}
        width={48}
        height={48}
      />
      {isFavorite && (
        <Star
          fill="oklch(85.2% 0.199 91.936)"
          className="absolute -right-1 -bottom-1.5 border-none text-yellow-400"
        />
      )}
    </div>
  )
}

export default SkillCard
