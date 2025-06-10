import fs from 'fs'
import path from 'path'

type Metadata = {
  title: string
  publishedAt: string
  summary: string
  image?: string
}

export interface FrontmatterParseResult {
  metadata: Metadata
  content: string
}

function parseFrontmatter(fileContent: string): FrontmatterParseResult {
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  const match = frontmatterRegex.exec(fileContent)
  if (!match) {
    throw new Error('Failed to parse frontmatter: no frontmatter block found.')
  }

  const frontMatterBlock = match[1]
  const content = fileContent.replace(frontmatterRegex, '').trim()
  const frontMatterLines = frontMatterBlock?.trim().split('\n')

  const metadata: Partial<Metadata> = {}

  frontMatterLines?.forEach(line => {
    const [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()

    value = value.replace(/^['"](.*)['"]$/, '$1')

    const trimmedKey = key?.trim() as keyof Metadata
    metadata[trimmedKey] = value
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir: string): string[] {
  return fs.readdirSync(dir).filter(file => path.extname(file).toLowerCase() === '.mdx')
}

function readMDXFile(filePath: string): FrontmatterParseResult {
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

export interface MDXPost {
  metadata: Metadata
  slug: string
  content: string
}

function getMDXData(dir: string): MDXPost[] {
  const mdxFiles = getMDXFiles(dir)
  return mdxFiles.map(file => {
    const { metadata, content } = readMDXFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content
    }
  })
}

export function getBlogPosts(): MDXPost[] {
  const postsDir = path.join(
    process.cwd(),
    'src',
    'constants',
    'contents',
    'mdx',
    'blog'
  )
  return getMDXData(postsDir)
}

export function getWorkPosts(): MDXPost[] {
  const postsDir = path.join(
    process.cwd(),
    'src',
    'constants',
    'contents',
    'mdx',
    'work'
  )
  return getMDXData(postsDir)
}

export function getEducationPosts(): MDXPost[] {
  const postsDir = path.join(
    process.cwd(),
    'src',
    'constants',
    'contents',
    'mdx',
    'edu'
  )
  return getMDXData(postsDir)
}

export function getOrgsPosts(): MDXPost[] {
  const postsDir = path.join(
    process.cwd(),
    'src',
    'constants',
    'contents',
    'mdx',
    'orgs'
  )
  return getMDXData(postsDir)
}

export function formatDate(date: string, includeRelative = false): string {
  const currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  const targetDate = new Date(date)

  const yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  const monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  const daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  })

  return includeRelative ? `${fullDate} (${formattedDate})` : fullDate
}
