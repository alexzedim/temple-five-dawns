import Head from 'next/head'
import Link from 'next/link'
import { MessagesPageProps } from "@/lib/interface";
import { countAllImages, getAllCategories, getAllMarkdownFiles } from "@/lib/markdown";
import { toDate } from '@/lib/utils';


export default function MessagesPage({ files, categories, imageCount }: MessagesPageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>💬 Сообщения и документы - Temple Five Dawns</title>
        <meta name="description" content="Архив документов и стратегических материалов сообщества" />
      </Head>

      <div className="min-h-screen bg-smoke-dark">
        {/* Header */}
        <header className="bg-dark backdrop-blur-sm border-b border-monk-200 sticky top-0 z-50">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center space-x-4">
                <Link href="/" className="text-xl font-bold text-gold hover:text-jade transition-colors">
                  ← Temple Five Dawns
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
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold text-monk-900 mb-6 tracking-tight">
              💬 Сообщения и документы
            </h1>
            <p className="text-2xl text-monk-600 max-w-3xl mx-auto leading-relaxed">
              Архив документов, стратегических материалов и персональных обращений сообщества
            </p>
          </section>

          {/* Statistics Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-primary-600 mb-2">{files.length}</div>
              <div className="text-gold-dark font-medium">Всего документов</div>
            </div>
            <div className="bg-gradient-to-br from-monk-50 to-monk-100 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-monk-600 mb-2">{categories.length}</div>
              <div className="text-monk-900 font-medium">Категорий</div>
            </div>
            <div className="bg-gradient-to-br from-purple to-purple-dark rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-gold-600 mb-2">
                {imageCount}
              </div>
              <div className="text-monk-700 font-medium">Медиа-изображений</div>
            </div>
          </section>

          {/* Categories */}
          <section className="space-y-16">
            {categories.map((category) => {
              const categoryFiles = files.filter(file => file.category === category)
              const categoryName = category === 'general' ? 'Общие документы' :
                category.split('/').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' / ')

              return (
                <div key={category} className="space-y-8">
                  {/* Category Header */}
                  <div className="border-b border-monk-200 pb-6">
                    <h2 className="text-3xl font-bold text-monk-900 mb-2">
                      📁 {categoryName}
                    </h2>
                    <p className="text-monk-600 text-lg">
                      {categoryFiles.length} документов в категории
                    </p>
                  </div>

                  {/* Articles Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryFiles.map((file) => (
                      <article
                        key={file.slug}
                        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-monk-100 hover:border-primary-200"
                      >
                        <Link href={`/messages/${file.relativePath}`} className="block">
                          {/* Article Header */}
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs font-semibold text-primary-600 uppercase tracking-wider">
                                {file.category}
                              </span>
                              {file.date && (
                                <span className="text-xs text-monk-500">
                                  {toDate(file.date)}
                                </span>
                              )}
                            </div>

                            <h3 className="text-xl font-bold text-monk-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                              {file.title}
                            </h3>

                            <p className="text-monk-600 mb-4 line-clamp-3 leading-relaxed">
                              {file.excerpt}
                            </p>

                            {/* Tags */}
                            {file.tags && file.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-4">
                                {file.tags.slice(0, 3).map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-2 py-1 bg-monk-100 text-monk-700 text-xs rounded-full"
                                  >
                                    #{tag}
                                  </span>
                                ))}
                                {file.tags.length > 3 && (
                                  <span className="px-2 py-1 bg-monk-100 text-monk-700 text-xs rounded-full">
                                    +{file.tags.length - 3}
                                  </span>
                                )}
                              </div>
                            )}

                            {/* Read More */}
                            <div className="flex items-center text-primary-600 font-medium text-sm group-hover:text-primary-700 transition-colors">
                              Читать далее
                              <svg
                                className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              )
            })}
          </section>

          {/* Call to Action */}
          <section className="mt-20 text-center">
            <div className="bg-gradient-to-r from-primary-50 to-gold-50 rounded-3xl p-12 shadow-lg">
              <h2 className="text-3xl font-bold text-monk-900 mb-4">
                Изучите архив сообщества
              </h2>
              <p className="text-xl text-monk-600 mb-8 max-w-2xl mx-auto">
                Откройте для себя стратегические документы, принципы сообщества и историю развития
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/messages/foundation"
                  className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
                >
                  Основные документы
                </Link>
                <Link
                  href="/messages/information"
                  className="bg-monk-600 hover:bg-monk-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl"
                >
                  Информационные материалы
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const files = getAllMarkdownFiles()
  const categories = getAllCategories()
  const imageCount = countAllImages()

  return {
    props: {
      files,
      categories,
      imageCount,
    },
  }
}
