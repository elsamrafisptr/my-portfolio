import SectionNavigation from '@/components/elements/SectionNavigation'
import SkillCard from '@/components/elements/skill-card'

const Skills = () => {
  return (
    <div className="flex flex-col gap-4">
      <SectionNavigation title="Skills" />
      <div className="flex flex-col gap-6">
        <div className="flex w-full flex-col gap-2">
          <h1>Frameworks & Libraries</h1>
          <div className="flex flex-wrap items-center gap-1">
            {[
              'nextjs',
              'react',
              'vue',
              'fastapi',
              'express',
              'nest',
              'laravel',
              'flask',
              'flutter'
            ].map((value, index) => {
              return (
                <SkillCard
                  key={index}
                  alt="framework & libraries"
                  value={value}
                  isFavorite={['nextjs', 'react', 'vue', 'fastapi', 'express'].includes(
                    value
                  )}
                />
              )
            })}
          </div>
        </div>
        <div className="flex w-full flex-col gap-2">
          <h1>Programming Languages</h1>
          <div className="flex flex-wrap items-center gap-1">
            {['javascript', 'typescript', 'python', 'golang', 'php'].map(
              (value, index) => {
                return (
                  <SkillCard
                    key={index}
                    alt="framework & libraries"
                    value={value}
                    isFavorite={[
                      'javascript',
                      'typescript',
                      'python',
                      'golang'
                    ].includes(value)}
                  />
                )
              }
            )}
          </div>
        </div>
        <div className="flex w-full flex-col gap-2">
          <h1>Databases</h1>
          <div className="flex flex-wrap items-center gap-1">
            {['postgresql', 'mysql', 'mongodb', 'firebase'].map((value, index) => {
              return (
                <SkillCard
                  key={index}
                  alt="framework & libraries"
                  value={value}
                  isFavorite={['postgresql', 'mysql'].includes(value)}
                />
              )
            })}
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1>Others</h1>
          <div className="flex flex-wrap items-center gap-1">
            {[
              'gcp',
              'azure',
              'aws',
              'cloudflare',
              'supabase',
              'docker',
              'githubactions',
              'github',
              'figma',
              'wordpress',
              'postman'
            ].map((value, index) => {
              return (
                <SkillCard
                  key={index}
                  alt="framework & libraries"
                  value={value}
                  isFavorite={[
                    'gcp',
                    'docker',
                    'githubactions',
                    'github',
                    'figma',
                    'wordpress',
                    'postman'
                  ].includes(value)}
                />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
