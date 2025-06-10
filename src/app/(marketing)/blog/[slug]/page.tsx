import { notFound } from 'next/navigation'

import { CustomMDX } from '@/components/elements/mdx'
import { getBaseUrl } from '@/constants/utils/helpers'
import type { MDXPost } from '@/constants/utils/mdx'
import { formatDate, getBlogPosts } from '@/constants/utils/mdx'

export async function generateStaticParams() {
  const posts = await getBlogPosts()
  return posts.map(post => ({
    slug: post.slug
  }))
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const posts = await getBlogPosts()
  const post = posts.find(p => p.slug === slug)

  if (!post) return undefined

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image
  } = post.metadata
  const ogImage = image ?? `${getBaseUrl()}/og?title=${encodeURIComponent(title)}`
  const url = `${getBaseUrl()}/blog/${post.slug}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url,
      images: [{ url: ogImage }]
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage]
    }
  }
}

export default async function BlogPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const posts = await getBlogPosts()
  const post = posts.find(p => p.slug === slug) as MDXPost | undefined

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const { title, publishedAt, summary, image } = metadata

  const absoluteImage = image
    ? `${getBaseUrl()}${image}`
    : `${getBaseUrl()}/og?title=${encodeURIComponent(title)}`

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: title,
            datePublished: publishedAt,
            dateModified: publishedAt,
            description: summary,
            image: absoluteImage,
            url: `${getBaseUrl()}/blog/${slug}`,
            author: { '@type': 'Person', name: 'My Portfolio' }
          })
        }}
      />

      <h1 className="title text-2xl font-semibold tracking-tighter">{title}</h1>

      <div className="mt-2 mb-8 flex items-center justify-between text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(publishedAt)}
        </p>
      </div>

      <article className="prose">
        <CustomMDX source={content} />
      </article>
    </section>
  )
}
