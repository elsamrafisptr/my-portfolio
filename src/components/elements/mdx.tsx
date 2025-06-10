import Image, { ImageProps } from 'next/image'
import Link, { LinkProps } from 'next/link'

import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc'
import React from 'react'
import { highlight } from 'sugar-high'

interface TableData {
  headers: string[]
  rows: (string | number | React.ReactNode)[][]
}

interface TableProps {
  data: TableData
}

const Table: React.FC<TableProps> = ({ data }) => {
  const headers = data.headers.map((header, index) => <th key={index}>{header}</th>)
  const rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

type CustomLinkProps = Omit<LinkProps, 'href'> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string
    children: React.ReactNode
  }

const CustomLink: React.FC<CustomLinkProps> = ({ href, children, ...props }) => {
  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props}>{children}</a>
  }

  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children}
    </a>
  )
}

const RoundedImage: React.FC<ImageProps> = props => {
  return (
    <Image
      {...props}
      alt={props.alt}
      className={`${props.className ?? ''} rounded-lg`}
    />
  )
}

interface CodeProps extends React.HTMLAttributes<HTMLElement> {
  children: string
}

const Code: React.FC<CodeProps> = ({ children, ...props }) => {
  const codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

function slugify(str: React.ReactNode): string {
  const text = typeof str === 'string' ? str : String(str)
  return text
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
}

function createHeading(
  level: 1 | 2 | 3 | 4 | 5 | 6
): React.FC<{ children: React.ReactNode }> {
  const Heading: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor'
        })
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`
  return Heading
}

const components: MDXRemoteProps['components'] = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  code: Code,
  Table
}

export function CustomMDX(
  props: Omit<MDXRemoteProps, 'components'> & {
    components?: MDXRemoteProps['components']
  }
) {
  return <MDXRemote {...props} components={{ ...components, ...props.components }} />
}
