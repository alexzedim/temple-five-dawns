import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { categoryToPath } from "@/lib/utils";
import { MarkdownPageProps } from "@/lib/interface";
import { getAllMarkdownFiles, getMarkdownFileBySlug, markdownToHtml } from "@/lib/markdown";

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
                <Link href="/messages" className="text-xl font-bold text-gold hover:text-jade transition-colors">
                  ← Сообщения
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/messages" className="nav-link">Сообщения</Link>
                <Link href="/images" className="nav-link">Медиа</Link>
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
                  prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:bg-dark prose-blockquote:pl-6 prose-blockquote:py-4 prose-blockquote:rounded-r-lg
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

            {/* Sidebar - 4 columns on desktop */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Table of Contents */}
              <div className="bg-purple-dark border border-purple rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-heading font-bold text-gold mb-4">Содержание</h3>
                <nav className="space-y-2">
                  <a href="#overview" className="block text-sm text-smoke hover:text-jade transition-colors">
                    Обзор документа
                  </a>
                  <a href="#content" className="block text-sm text-smoke hover:text-jade transition-colors">
                    Основное содержание
                  </a>
                  <a href="#conclusion" className="block text-sm text-smoke hover:text-jade transition-colors">
                    Заключение
                  </a>
                </nav>
              </div>

              {/* Related Documents */}
              <div className="bg-dark border border-purple rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-heading font-bold text-gold mb-4">Похожие документы</h3>
                <div className="space-y-4">
                  <Link href="/messages/foundation" className="block group">
                    <div className="text-sm text-jade uppercase tracking-wider mb-1">Основы</div>
                    <h4 className="font-medium text-gold group-hover:text-jade transition-colors">
                      Основные документы сообщества
                    </h4>
                    <p className="text-sm text-smoke-dark mt-1">Стратегические материалы и принципы</p>
                  </Link>

                  <Link href="/messages/information" className="block group">
                    <div className="text-sm text-jade uppercase tracking-wider mb-1">Информация</div>
                    <h4 className="font-medium text-gold group-hover:text-jade transition-colors">
                      Информационные материалы
                    </h4>
                    <p className="text-sm text-smoke-dark mt-1">Справочная информация и руководства</p>
                  </Link>
                </div>
              </div>

              {/* Share */}
              <div className="bg-gold-dark border border-gold rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-heading font-bold text-dark mb-4">Поделиться</h3>
                <div className="flex space-x-3">
                  <button className="bg-jade hover:bg-jade-dark text-dark p-3 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <button className="bg-jade hover:bg-jade-dark text-dark p-3 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                    </svg>
                  </button>
                  <button className="bg-jade hover:bg-jade-dark text-dark p-3 rounded-lg transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                </div>
              </div>
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
