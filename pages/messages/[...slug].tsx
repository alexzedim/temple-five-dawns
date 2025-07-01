import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { getAllMarkdownFiles, getMarkdownFileBySlug, markdownToHtml } from '@/lib/markdown'

interface MarkdownPageProps {
  file: ReturnType<typeof getMarkdownFileBySlug>
  htmlContent: string
}

export default function MarkdownPage({ file, htmlContent }: MarkdownPageProps): JSX.Element {
  if (!file) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-monk-50 to-primary-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-monk-900 mb-4">Документ не найден</h1>
          <Link href="/messages" className="btn-primary">
            Вернуться к списку
          </Link>
        </div>
      </div>
    )
  }

  return (
    <>
      <Head>
        <title>{(file.title ?? 'Документ')} - Temple Five Dawns</title>
        <meta name="description" content={file.excerpt} />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-monk-50 to-primary-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-monk-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <Link href="/messages" className="text-xl font-bold text-monk-900 hover:text-primary-600 transition-colors">
                  ← Сообщения
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/messages" className="nav-link">Сообщения</Link>
                <Link href="/images" className="nav-link">Медиа</Link>
                <Link href="/about" className="nav-link">О проекте</Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-monk-600">
              <li>
                <Link href="/" className="hover:text-primary-600">Главная</Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/messages" className="hover:text-primary-600">Сообщения</Link>
              </li>
              {file.category && file.category !== 'general' && (
                <>
                  <li>/</li>
                  <li className="text-monk-900">{file.category}</li>
                </>
              )}
            </ol>
          </nav>

          {/* Article */}
          <article className="card">
            {/* Header */}
            <header className="mb-8 pb-6 border-b border-monk-200">
              <h1 className="text-3xl md:text-4xl font-bold text-monk-900 mb-4">
                {file.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-monk-600">
                {file.category && file.category !== 'general' && (
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                    {file.category}
                  </span>
                )}
                {file.date && (
                  <span>📅 {new Date(file.date).toLocaleDateString('ru-RU')}</span>
                )}
                {file.tags && file.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {file.tags.map((tag) => (
                      <span key={tag} className="bg-monk-100 text-monk-700 px-2 py-1 rounded text-xs">
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </header>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-monk-900 prose-p:text-monk-700 prose-strong:text-monk-900 prose-a:text-primary-600 prose-blockquote:border-l-primary-500 prose-blockquote:bg-primary-50 prose-blockquote:pl-4"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            />

            {/* Footer */}
            <footer className="mt-12 pt-6 border-t border-monk-200">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div className="text-sm text-monk-600">
                  <p>Путь: {file.relativePath}</p>
                </div>
                <Link href="/messages" className="btn-secondary">
                  ← К списку документов
                </Link>
              </div>
            </footer>
          </article>
        </main>
      </div>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const files = getAllMarkdownFiles()

  const paths = files.map((file) => ({
    params: {
      slug: file.relativePath.split('/'),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slugArr = Array.isArray(params?.slug) ? params.slug : [params?.slug]
  const fileName = slugArr[slugArr.length - 1]
  const category = slugArr.length > 1 ? slugArr.slice(0, -1).join('/') : undefined
  console.log(params, fileName) // @todo
  const file = getMarkdownFileBySlug(fileName, category)

  if (!file) {
    return {
      notFound: true,
    }
  }

  const htmlContent = await markdownToHtml(file.content)

  return {
    props: {
      file,
      htmlContent,
    },
  }
}
