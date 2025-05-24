import SectionNavigation from '@/components/elements/SectionNavigation'

const Headline = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionNavigation title="About Me" />
      <div className="">
        <p className="text-justify text-sm">
          Just a random person with 3+ years of hands-on software engineering experience
          (education, work, and internship) and passionate about entrepreneurship,
          software engineering, and artificial intelligence.
        </p>
      </div>
    </div>
  )
}

export default Headline
