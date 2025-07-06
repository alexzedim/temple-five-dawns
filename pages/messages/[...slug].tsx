import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { categoryToPath } from "@/lib/utils";
import { MarkdownPageProps } from "@/lib/interface";
import { getAllMarkdownFiles, getMarkdownFileBySlug, markdownToHtml } from "@/lib/markdown";
import Share from "@/lib/components/share";

export default function MarkdownPage({ file, htmlContent }: MarkdownPageProps): JSX.Element {
  if (!file) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-purple-dark border border-purple rounded-2xl p-8 shadow-lg">
            <h1 className="text-2xl font-heading font-bold text-gold mb-4">Документ не найден</h1>
            <p className="text-smoke mb-6">Запрашиваемый документ не существует или был удалён.</p>
            <Link href="/messages" className="bg-jade hover:bg-jade-dark text-dark px-6 py-3 rounded-lg font-medium transition-colors">
              Вернуться к списку
            </Link>
          </div>
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

      <div className="min-h-screen bg-dark">
        {/* Header */}
        <header className="bg-dark/90 backdrop-blur-sm border-b border-purple sticky top-0 z-50">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-4">
                <Link href="/" className="text-2xl font-heading font-normal tracking-tight text-gold hover:text-jade transition-colors">
                  ← Сообщения
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/messages" className="nav-link font-semibold text-gold hover:text-jade">Сообщения</Link>
                <Link href="/images" className="nav-link text-gold hover:text-jade">Медиа</Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="max-w-screen-xl mx-auto px-4 sm:px-8 py-16">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-smoke-dark">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">Главная</Link>
              </li>
              <li className="text-purple-light">/</li>
              <li>
                <Link href="/messages" className="hover:text-gold transition-colors">Сообщения</Link>
              </li>
              {file.category && file.category !== 'general' && (
                <>
                  <li className="text-purple-light">/</li>
                  <li className="text-gold font-medium">{categoryToPath(file.category)}</li>
                </>
              )}
            </ol>
          </nav>

          {/* Article Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content - 8 columns on desktop */}
            <article className="lg:col-span-8">
              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-gold prose-headings:font-bold prose-headings:leading-tight
                  prose-h1:text-3xl prose-h1:mb-8 prose-h1:mt-12
                  prose-h2:text-2xl prose-h2:mb-6 prose-h2:mt-10
                  prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-8
                  prose-p:text-smoke prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-gold prose-strong:font-semibold
                  prose-a:text-jade prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                  prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:bg-dark prose-blockquote:pl-6
                  prose-blockquote:py-4 prose-blockquote:rounded-r-lg
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                  prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
                  prose-li:text-smoke
                  prose-code:bg-purple-dark prose-code:text-jade-light prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                  prose-pre:bg-dark prose-pre:text-smoke prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:border prose-pre:border-purple
                  prose-hr:border-purple prose-hr:my-8"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* Article Footer */}
              <footer className="mt-16 pt-8 border-t border-purple bg-transparent">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div className="text-sm text-smoke-dark">
                    <p className="font-medium text-gold">Путь документа:</p>
                    <p className="font-mono text-xs bg-purple-dark text-jade-light px-3 py-2 rounded mt-2">{file.relativePath}</p>
                  </div>
                  <Link
                    href="/messages"
                    className="bg-jade hover:bg-jade-dark text-dark px-6 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
                  >
                    ← К списку документов
                  </Link>
                </div>
              </footer>
            </article>

            {/* Share */}
            <aside className="lg:col-span-4 space-y-8">
              <Share />
            </aside>
          </div>
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

  const file = getMarkdownFileBySlug(fileName as string, category)

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
