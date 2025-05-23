import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const Headline = () => {
  return (
    <div className="flex h-full w-full flex-col gap-4">
      <div className="flex flex-col gap-2">
        <div className="grid grid-cols-4">
          <div className="col-span-3 flex items-center gap-4">
            <Avatar>
              <AvatarImage src="" className="size-11" />
              <AvatarFallback>E</AvatarFallback>
            </Avatar>
            <span>
              <h1 className="font-semibold">Elsam Rafi Saputra </h1>
              <p className="text-xs text-gray-500">Software Engineer | Builder</p>
            </span>
          </div>
          <div className="flex items-center justify-end">
            <Badge
              variant="secondary"
              className="flex items-center gap-2 rounded-full bg-green-100"
            >
              <span className="inline-flex h-1 w-1 animate-ping rounded-full bg-green-600 opacity-75"></span>
              <p className="text-xs text-green-600">Available</p>
            </Badge>
          </div>
        </div>

        <p className="text-left text-xs text-gray-600">
          Random person thats passionate about entrepreneurship, software engineering,
          and artificial intelligence (AI).
        </p>
      </div>

      <div className="flex items-center gap-2">
        <Button size="sm" variant="default" className="text-xs">
          Hire Me
        </Button>
        <Button size="sm" variant="secondary" className="text-xs">
          Download CV
        </Button>
      </div>
    </div>
  )
}

export default Headline
