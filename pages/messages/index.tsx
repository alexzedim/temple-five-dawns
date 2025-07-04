import Head from 'next/head'
import Link from 'next/link'
import { MessagesPageProps } from "@/lib/interface";
import { countAllImages, getAllCategories, getAllMarkdownFiles } from "@/lib/markdown";
import { toCategoryName, toCategoryNumber, toDate } from '@/lib/utils';


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
                <Link href="/" className="text-2xl font-heading font-normal tracking-tight text-gold hover:text-jade transition-colors">
                  ← TEMPLE FIVE DAWNS
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
            <h1 className="text-4xl md:text-6xl font-heading font-normal text-gold-dark mb-6 tracking-tight">
              📋 СООБЩЕНИЯ И ДОКУМЕНТЫ
            </h1>
            <p className="text-2xl font-body text-dark max-w-3xl mx-auto leading-relaxed">
              Архив документов, стратегических материалов и персональных обращений сообщества
            </p>
          </section>

          {/* Statistics Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-smoke mb-2">{files.length}</div>
              <div className="text-smoke font-medium">Всего документов</div>
            </div>
            <div className="bg-gradient-to-br from-monk-500 to-monk-600 rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-4xl font-bold text-smoke mb-2">{categories.length}</div>
              <div className="text-smoke font-medium">Категорий</div>
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
              const categoryName = toCategoryName(category)

              return (
                <div key={category} className="space-y-8">
                  {/* Category Header */}
                  <div className="border-b border-monk-200 pb-6">
                    <h2 className="text-3xl font-heading font-normal text-dark mb-2 uppercase">
                      📁 {categoryName}
                    </h2>
                    <p className="text-gold-dark text-lg">
                      {toCategoryNumber(categoryFiles)}
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
                              <span className="text-xs font-semibold text-jade uppercase tracking-wider">
                                {categoryName}
                              </span>
                              {file.date && (
                                <span className="text-xs text-monk-500">
                                  {toDate(file.date)}
                                </span>
                              )}
                            </div>

                            <h3 className="text-xl font-heading font-normal text-monk-900 mb-3 line-clamp-2 group-hover:text-gold-dark transition-colors">
                              {file.title}
                            </h3>

                            <p className="text-monk-600 mb-4 line-clamp-3 leading-relaxed font-body">
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
        </main>

        {/* Footer */}
        <footer className="bg-dark text-smoke py-12">
          <div className="container mx-auto px-4">
            <div className="border-t border-dark-light pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-smoke-dark text-sm">
                &copy; MMXXIII Temple Five Dawns
              </p>
              <p className="text-gold-light italic text-sm mt-4 md:mt-0">
                "The future belongs to those who change it." — Neo Monk Discord Community
              </p>
            </div>
          </div>
        </footer>
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
