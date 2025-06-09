import { AboutMeContent } from '@/constants/contents'

import MaintenancePage from '@/components/layouts/MaintenancePage'

export async function generateStaticParams() {
  const posts = await AboutMeContent.work_experiences

  return posts.map(post => ({
    slug: `${post.type.replaceAll(' ', '-').toLowerCase()}-${post.title
      .replaceAll(' ', '-')
      .toLowerCase()}`
  }))
}

const ProfessionalDetailPage = async ({
  params
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params
  console.log(slug)

  return <MaintenancePage />
}

export default ProfessionalDetailPage
