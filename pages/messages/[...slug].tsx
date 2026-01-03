import Head from 'next/head'
import Link from 'next/link'
import { GetStaticPaths, GetStaticProps } from 'next'
import { categoryToPath } from "@/lib/utils";
import { MarkdownPageProps } from "@/lib/interface";
import { getAllMarkdownFiles, getMarkdownFileBySlug, markdownToHtml } from "@/lib/markdown";
import {useEffect, useState} from "react";
import Header from "@/lib/components/header";
import Footer from "@/lib/components/footer";

export default function MarkdownPage({ file, htmlContent }: MarkdownPageProps): JSX.Element {
  const [showNotification, setShowNotification] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleCopyLink = async () => {
    if (!isClient) return;

    try {
      await navigator.clipboard.writeText(window.location.href);
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000);
    } catch (err) {
      console.error('Ошибка копирования:', err);
    }
  };

  if (!file) {
    return (
      <div className="min-h-screen bg-charcoal flex items-center justify-center">
        <div className="text-center max-w-md mx-auto px-4">
          <div className="bg-charcoal-light border-2 border-gold rounded-sm p-8 shadow-lg">
            <h1 className="text-2xl font-heading font-bold text-gold mb-4">Документ не найден</h1>
            <p className="text-cream mb-6">Запрашиваемый документ не существует или был удалён.</p>
            <Link href="/messages" className="btn-primary">
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

      <div className="min-h-screen bg-charcoal flex flex-col">
        {/* Header */}
        <Header />

        <main className="max-w-screen-xl mx-auto px-4 sm:px-8 py-16 flex-1">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center space-x-2 text-sm text-cream-dark">
              <li>
                <Link href="/" className="hover:text-gold transition-colors">Главная</Link>
              </li>
              <li className="text-gold-light">/</li>
              <li>
                <Link href="/messages" className="hover:text-gold transition-colors">Сообщения</Link>
              </li>
              {file.category && file.category !== 'general' && (
                <>
                  <li className="text-gold-light">/</li>
                  <li className="text-gold font-medium">{categoryToPath(file.category)}</li>
                </>
              )}
            </ol>
          </nav>

          {/* Article Container */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content - 8 columns on desktop */}
            <article className="lg:col-span-8">
              {/* Article Date */}
              {file.date && (
                <div className="mb-6 text-sm text-cream-dark">
                  <span className="text-gold font-medium">Дата создания:</span>{' '}
                  <a
                    href="https://github.com/alexzedim/temple-five-dawns/commit/d59c80388daeec4822c97ba4e16855b8750834f0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold hover:text-gold-light underline transition-colors"
                  >
                    {file.date}
                  </a>
                </div>
              )}

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none
                  prose-headings:text-gold prose-headings:font-bold prose-headings:leading-tight
                  prose-h1:text-3xl prose-h1:mb-8 prose-h1:mt-12
                  prose-h2:text-2xl prose-h2:mb-6 prose-h2:mt-10
                  prose-h3:text-xl prose-h3:mb-4 prose-h3:mt-8
                  prose-p:text-cream prose-p:leading-relaxed prose-p:mb-6
                  prose-strong:text-gold prose-strong:font-semibold
                  prose-a:text-gold prose-a:font-medium prose-a:no-underline hover:prose-a:underline
                  prose-blockquote:border-l-4 prose-blockquote:border-gold prose-blockquote:bg-charcoal-light prose-blockquote:pl-6
                  prose-blockquote:py-4 prose-blockquote:rounded-r-lg
                  prose-ul:list-disc prose-ul:pl-6 prose-ul:space-y-2
                  prose-ol:list-decimal prose-ol:pl-6 prose-ol:space-y-2
                  prose-li:text-cream
                  prose-code:bg-charcoal prose-code:text-gold-light prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
                  prose-pre:bg-charcoal prose-pre:text-cream prose-pre:p-6 prose-pre:rounded-lg prose-pre:overflow-x-auto prose-pre:border-2 prose-pre:border-gold
                  prose-hr:border-gold prose-hr:my-8"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* Article Footer */}
              <footer className="mt-16 pt-8 border-t-2 border-gold bg-transparent">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                  <div className="text-sm text-cream-dark">
                    <p className="font-medium text-gold">Путь документа:</p>
                    <p className="font-mono text-xs bg-charcoal border border-gold text-gold-light px-3 py-2 rounded-sm mt-2">{file.relativePath}</p>
                  </div>
                  <Link
                    href="/messages"
                    className="btn-primary"
                  >
                    ← К списку документов
                  </Link>
                </div>
              </footer>
            </article>

            {/* Share */}
            <aside className="lg:col-span-4 space-y-8">
              <div className="bg-charcoal-light border-2 border-gold rounded-sm p-6 shadow-lg">
                <h3 className="text-lg font-heading font-bold text-gold mb-4 uppercase tracking-wider">Поделиться</h3>
                <div className="flex space-x-3">
                  <button
                    onClick={() => {
                      const url = `https://discord.com/channels/@me?content=${encodeURIComponent(window.location.href)}`;
                      window.open(url, '_blank');
                    }}
                    className="bg-gold hover:bg-gold-light text-charcoal p-3 rounded-sm transition-colors font-semibold"
                    title="Поделиться в Discord"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.019 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1568 2.4189Z"/>
                    </svg>
                  </button>
                  <button
                    onClick={handleCopyLink}
                    className="bg-gold hover:bg-gold-light text-charcoal p-3 rounded-sm transition-colors font-semibold"
                    title="Скопировать ссылку"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Уведомление о копировании */}
              {showNotification && (
                <div className="relative top-4 bg-gold text-charcoal px-4 py-2 rounded-sm shadow-lg transition-all duration-300 ease-in-out font-semibold">
                  <span className="text-sm">Ссылка скопирована</span>
                </div>
              )}
            </aside>
          </div>
        </main>

        {/* Footer */}
        <Footer />
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
