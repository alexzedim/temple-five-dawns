import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/lib/components/header'
import Footer from '@/lib/components/footer'
import RandomQuote from "@/lib/components/quote";
import Articles from "@/lib/components/articles";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Temple Five Dawns // Храм Пяти Рассветов</title>
        <meta name="description" content="Архив русскоязычного Discord-сообщества для игроков класса монах в World of Warcraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-smoke-dark">
        {/* Main header */}
        <Header />

        {/* Hero Section */}
        <main className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12">
            {/* Hero content - 8 columns on desktop */}
            <div className="lg:col-span-8">
              <div className="relative mb-8 overflow-hidden rounded-md bg-jade-dark">
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70 z-10"></div>
                <Image
                  src="/images/art/queen-lowres.png"
                  alt="ADM SOV MDC"
                  width={1200}
                  height={800}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20">
                  <div className="inline-block bg-gold px-3 py-1 text-xs font-semibold text-dark uppercase tracking-wider mb-4">Архив сообщества</div>
                  <h1 className="text-4xl md:text-6xl font-heading font-normal text-gold mb-4 max-w-2xl">
                    Храм Пяти Рассветов: Взгляд Изнутри
                  </h1>
                  <p className="text-lg text-smoke mb-6 max-w-2xl">
                    Полный архив материалов русскоязычного Discord-сообщества для игроков класса монах в World of Warcraft
                  </p>
                  <div className="flex gap-4">
                    <Link href="/messages" className="bg-gold hover:bg-smoke px-6 py-3 rounded-sm text-dark font-medium text-sm uppercase tracking-wider transition-colors">
                      Изучить документы
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured articles - 4 columns on desktop */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-6 border-l-4 border-jade bg-smoke shadow-sm">
                <h2 className="text-2xl font-heading font-bold mb-4 text-purple">Избранные материалы</h2>
                <div className="space-y-6">
                  <Articles/>
                  <Link href="/messages" className="text-jade hover:text-jade-dark text-sm font-medium transition-colors">
                    Все материалы →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="my-1">
            <div className="container mx-auto px-4">
              <div className="border-t border-b border-jade py-12">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-1 bg-purple mr-4"></div>
                  <h2 className="text-jade text-2xl font-heading font-bold">О проекте</h2>
                </div>

                <div className="text-gold grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <p className="text-dark text-lg leading-relaxed mb-6">
                      Данный репозиторий представляет собой полный архив ресурсов, стратегических документов и медиа-материалов русскоязычного Discord-сообщества <Link href="https://discord.gg/P52zeKR" className="text-purple hover:text-jade transition-colors"><strong>"Храм Пяти Рассветов"</strong></Link> — официального сообщества для ~15'000 игроков класса монах в игре World of Warcraft.
                    </p>
                    <p className="text-dark text-lg leading-relaxed mb-6">
                      Автор репозитория являлся <strong className="text-purple">co-HEAD</strong> данного Discord-сообщества и принимал активное участие в его развитии и стратегическом планировании.
                    </p>
                    <p className="text-dark text-lg leading-relaxed">
                      Данная программа модернизации так и не была реализована в полном объёме из-за организационных и политических сложностей внутри сообщества.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-jade font-medium text-lg border-l-2 border-purple pl-4 mb-4">Вызовы сообщества</h3>
                      <ul className="space-y-2 text-dark-light">
                        <li className="flex items-start">
                          <span className="text-jade mr-2">•</span>
                          <span><strong className="text-dark">Свобода самовыражения</strong> vs излишняя цензура</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-jade mr-2">•</span>
                          <span><strong className="text-dark">Меритократия</strong> vs персоналистичность</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-jade mr-2">•</span>
                          <span><strong className="text-dark">Прозрачность</strong> vs закрытость административных процессов</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-jade mr-2">•</span>
                          <span><strong className="text-dark">Развитие</strong> vs стагнация</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-jade mr-2">•</span>
                          <span><strong className="text-dark">Сообщество</strong> vs культ личности</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-purple font-medium text-lg border-l-2 border-jade pl-4 mb-4">Ключевые принципы развития</h3>
                      <div className="grid grid-cols-2 gap-2 text-dark-light text-sm">
                        <div className="flex items-start">
                          <span className="text-jade mr-2">•</span>
                          <span>Система голосования</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-jade mr-2">•</span>
                          <span>Летопись достижений</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-jade mr-2">•</span>
                          <span>Административная реформа</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-jade mr-2">•</span>
                          <span>Уникальный контент</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-jade mr-2">•</span>
                          <span>Прозрачность управления</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-jade mr-2">•</span>
                          <span>Community Council</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-jade mr-2">•</span>
                          <span>Реформа модерации</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-jade mr-2">•</span>
                          <span>User Acquisition</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="container mx-auto px-4 my-1">
            {/* Random Quote Component */}
            <div className="py-8">
              <RandomQuote />
            </div>
          </div>

          {/* Stats Section */}
          <div className="container mx-auto px-4 my-16">
            <div className="border-t border-smoke-dark py-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-jade mb-2">15,000+</div>
                  <div className="text-dark-light uppercase tracking-wider text-sm">Участников сообщества</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-jade mb-2">2023</div>
                  <div className="text-dark-light uppercase tracking-wider text-sm">Год создания архива</div>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}
