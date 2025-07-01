import Head from 'next/head'
import Link from 'next/link'
import { getAllMarkdownFiles, getAllCategories } from '../../lib/markdown'

interface MessagesPageProps {
  files: ReturnType<typeof getAllMarkdownFiles>
  categories: string[]
}

export default function MessagesPage({ files, categories }: MessagesPageProps): JSX.Element {
  return (
    <>
      <Head>
        <title>💬 Сообщения и документы - Temple Five Dawns</title>
        <meta name="description" content="Архив документов и стратегических материалов сообщества" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-monk-50 to-primary-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-monk-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <Link href="/" className="text-xl font-bold text-monk-900 hover:text-primary-600 transition-colors">
                  ← Temple Five Dawns
                </Link>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/messages" className="nav-link font-semibold">Сообщения</Link>
                <Link href="/images" className="nav-link">Медиа</Link>
                <Link href="/about" className="nav-link">О проекте</Link>
              </nav>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-monk-900 mb-4">
              💬 Сообщения и документы
            </h1>
            <p className="text-xl text-monk-600 max-w-3xl mx-auto">
              Архив документов, стратегических материалов и персональных обращений сообщества
            </p>
          </div>

          {/* Categories */}
          <div className="grid gap-8">
            {categories.map((category) => {
              const categoryFiles = files.filter(file => file.category === category)
              const categoryName = category === 'general' ? 'Общие документы' : 
                category.split('/').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join(' / ')
              
              return (
                <div key={category} className="card">
                  <h2 className="text-2xl font-bold text-monk-900 mb-6">
                    📁 {categoryName}
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryFiles.map((file) => (
                      <Link 
                        key={file.slug} 
                        href={`/messages/${file.relativePath}`}
                        className="block p-4 border border-monk-200 rounded-lg hover:border-primary-300 hover:shadow-md transition-all duration-200 bg-white"
                      >
                        <h3 className="font-semibold text-monk-900 mb-2 line-clamp-2">
                          {file.title}
                        </h3>
                        <p className="text-sm text-monk-600 mb-3 line-clamp-3">
                          {file.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-monk-500">
                          <span>{file.category}</span>
                          {file.date && (
                            <span>{new Date(file.date).toLocaleDateString('ru-RU')}</span>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Statistics */}
          <div className="mt-12 card">
            <h2 className="text-xl font-bold text-monk-900 mb-4">📊 Статистика</h2>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600">{files.length}</div>
                <div className="text-monk-600">Всего документов</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">{categories.length}</div>
                <div className="text-monk-600">Категорий</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600">
                  {files.filter(f => f.tags.length > 0).length}
                </div>
                <div className="text-monk-600">С тегами</div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const files = getAllMarkdownFiles()
  const categories = getAllCategories()
  
  return {
    props: {
      files,
      categories,
    },
  }
} 