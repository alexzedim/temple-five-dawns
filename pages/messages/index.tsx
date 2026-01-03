import Head from 'next/head'
import Link from 'next/link'
import { MessagesPageProps } from "@/lib/interface";
import { countAllImages, getAllCategories, getAllMarkdownFiles } from "@/lib/markdown";
import { toCategoryName, toCategoryNumber, toDate } from '@/lib/utils';
import Footer from "@/lib/components/footer";
import Header from "@/lib/components/header";


export default function MessagesPage({ files, categories, imageCount }: MessagesPageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>💬 Сообщения и документы - Temple Five Dawns</title>
        <meta name="description" content="Архив документов и стратегических материалов сообщества" />
      </Head>

      <div className="min-h-screen bg-charcoal">
        {/* Header */}
        <Header />

        <main className="max-w-screen-xl mx-auto px-4 sm:px-8 py-16">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-gold mb-6 tracking-wider uppercase">
              📋 Сообщения и документы
            </h1>
            <p className="text-xl font-body text-cream max-w-3xl mx-auto leading-relaxed">
              Архив документов, стратегических материалов и персональных обращений сообщества
            </p>
          </section>

          {/* Statistics Cards */}
          <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-charcoal-light border-2 border-gold rounded-sm p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold text-gold mb-2 font-heading">{files.length}</div>
              <div className="text-cream-dark font-medium uppercase tracking-wider text-sm">Всего документов</div>
            </div>
            <div className="bg-charcoal-light border-2 border-gold rounded-sm p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold text-gold mb-2 font-heading">{categories.length}</div>
              <div className="text-cream-dark font-medium uppercase tracking-wider text-sm">Категорий</div>
            </div>
            <div className="bg-charcoal-light border-2 border-crimson rounded-sm p-8 text-center shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-5xl font-bold text-gold mb-2 font-heading">
                {imageCount}
              </div>
              <div className="text-cream-dark font-medium uppercase tracking-wider text-sm">Медиа-изображений</div>
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
                  <div className="border-b-2 border-gold pb-6">
                    <h2 className="text-3xl font-heading font-bold text-gold mb-2 uppercase tracking-wider">
                      📁 {categoryName}
                    </h2>
                    <p className="text-gold-light text-lg">
                      {toCategoryNumber(categoryFiles)}
                    </p>
                  </div>

                  {/* Articles Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryFiles.map((file) => (
                      <article
                        key={file.slug}
                        className="group bg-charcoal-light rounded-sm shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 border-gold hover:border-gold-light"
                      >
                        <Link href={`/messages/${file.relativePath}`} className="block">
                          {/* Article Header */}
                          <div className="p-6">
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-xs font-semibold text-gold uppercase tracking-wider">
                                {categoryName}
                              </span>
                              {file.date && (
                                <span className="text-xs text-gold-light">
                                  {toDate(file.date)}
                                </span>
                              )}
                            </div>

                            <h3 className="text-xl font-heading font-bold text-gold mb-3 line-clamp-2 group-hover:text-gold-light transition-colors">
                              {file.title}
                            </h3>

                            <p className="text-cream-dark mb-4 line-clamp-3 leading-relaxed font-body">
                              {file.excerpt}
                            </p>

                            {/* Tags */}
                            {file.tags && file.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-4">
                                {file.tags.slice(0, 3).map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-2 py-1 bg-charcoal border border-gold text-gold text-xs rounded-sm uppercase tracking-wider"
                                  >
                                    #{tag}
                                  </span>
                                ))}
                                {file.tags.length > 3 && (
                                  <span className="px-2 py-1 bg-charcoal border border-gold text-gold text-xs rounded-sm uppercase tracking-wider">
                                    +{file.tags.length - 3}
                                  </span>
                                )}
                              </div>
                            )}

                            {/* Read More */}
                            <div className="flex items-center text-gold font-medium text-sm group-hover:text-gold-light transition-colors">
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
        <Footer />
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
