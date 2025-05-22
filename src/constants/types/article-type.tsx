export type ContentType = 'markdown' | 'html'

export interface ArticleCardProps {
  id: string
  title: string
  imageUrl: string
  date: string
}

export interface AllArticleProps {
  articles: ArticleCardProps[]
}

export interface ArticleDetailProps {
  id: string
  title: string
  slug: string
  content: string
  contentType: ContentType
  date: string
  author: string
  tags?: string[]
  imageGallery: string[]
}
