import path from 'path'
import { remark } from 'remark'
import html from 'remark-html'
import { MarkdownFile } from "@/lib/interface";
import fs from 'fs'
import matter from "gray-matter";

const messagesDirectory = path.join(process.cwd(), 'messages')

export function getAllMarkdownFiles(): MarkdownFile[] {
  const files: MarkdownFile[] = []

  function processDirectory(dirPath: string, relativePath: string = '') {
    const items = fs.readdirSync(dirPath)

    for (const item of items) {
      const fullPath = path.join(dirPath, item)
      const stat = fs.statSync(fullPath)

      if (stat.isDirectory()) {
        const newRelativePath = relativePath ? `${relativePath}/${item}` : item
        processDirectory(fullPath, newRelativePath)
      } else if (item.endsWith('.md')) {
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const { data, content } = matter(fileContents)

        // Extract title from first heading if not in frontmatter
        let title = data.title
        if (!title) {
          const titleMatch = content.match(/^#\s+(.+)$/m)
          // @ts-ignore
          title = titleMatch ? titleMatch[1].trim() : path.basename(item, '.md')
        }

        // Create slug from filename
        const slug = path.basename(item, '.md')

        // Create excerpt from first paragraph
        const paragraphs = content
          .replace(/^#.*$/m, '') // Remove first heading
          .replace(/^---[\s\S]*?---/, '') // Remove frontmatter
          .trim()
          .split('\n\n')

        const firstParagraph = paragraphs[0] || ''
        const excerpt = firstParagraph.substring(0, 200) + (firstParagraph.length > 200 ? '...' : '')
        files.push({
          slug,
          title,
          content,
          excerpt,
          date: data.date ? new Date(data.date).toISOString().split('T')[0] : null,
          category: relativePath || 'general',
          tags: Array.isArray(data.tags) ? data.tags.filter((tag): tag is string => typeof tag === 'string') : [],
          fullPath,
          relativePath: relativePath ? `${relativePath}/${slug}` : slug
        })
      }
    }
  }

  processDirectory(messagesDirectory)
  return files
}

export function getMarkdownFileBySlug(slug: string, category?: string): MarkdownFile | null {
  const files = getAllMarkdownFiles()

  if (category) {
    return files.find(file => file.slug === slug && file.category === category) || null
  }

  return files.find(file => file.slug === slug) || null
}

export function getAllCategories(): string[] {
  const files = getAllMarkdownFiles()
  const categories = new Set(files.map(file => file.category).filter((cat): cat is string => cat !== undefined))
  return Array.from(categories).sort()
}

export function countAllImages(dir: string = 'public'): number {
  let count = 0;
  const entries = fs.readdirSync(dir, {withFileTypes: true});
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      count += countAllImages(fullPath);
    } else if (entry.isFile() && /\.(png|jpe?g)$/i.test(entry.name)) {
      count++;
    }
  }
  return count;
}

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(html)
    .process(markdown)

  let htmlContent = result.toString();

  // Определяем basePath для github-pages
  let basePath = '';
  if (process.env.GITHUB_PAGES === 'true') {
    basePath = '/temple-five-dawns';
  }
  // Подменяем пути к изображениям и url('/images/...')
  if (basePath) {
    htmlContent = htmlContent.replace(/(["'\(])\/images\//g, `$1${basePath}/images/`);
  }

  return htmlContent;
}
