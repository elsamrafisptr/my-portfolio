import { AboutMeContent } from '@/constants/contents'

import MaintenancePage from '@/components/layouts/MaintenancePage'

export async function generateStaticParams() {
  const posts = await AboutMeContent.org_experiences

  return posts.map(post => ({
    slug: `${post.org_name.replaceAll(' ', '-').toLowerCase()}-${post.title
      .replaceAll(' ', '-')
      .toLowerCase()}`
  }))
}

const OrgsDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  console.log(slug)

  return <MaintenancePage />
}

export default OrgsDetailPage
