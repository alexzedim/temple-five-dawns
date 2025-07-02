import { getAllMarkdownFiles, getMarkdownFileBySlug } from "@/lib/markdown";

export interface MessagesPageProps {
  files: ReturnType<typeof getAllMarkdownFiles>
  categories: string[]
  imageCount: number
}

export interface MarkdownPageProps {
  file: ReturnType<typeof getMarkdownFileBySlug>
  htmlContent: string
}

export interface MarkdownFile {
  slug: string
  title: string
  content: string
  excerpt: string
  date?: string
  category?: string
  tags?: string[]
  fullPath: string
  relativePath: string
}

export interface MarkdownMeta {
  title?: string
  date?: string
  category?: string
  tags?: string[]
  excerpt?: string
}
