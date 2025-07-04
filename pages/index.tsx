import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

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
        <header className="border-b border-smoke-dark sticky top-0 z-50 bg-dark">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Image
                src="/images/monk-sigil.png"
                alt="Monk Sigil"
                width={50}
                height={50}
                className="rounded-sm"
              />
              <div>
                <h1 className="text-2xl font-heading font-normal tracking-tight text-gold">
                  TEMPLE FIVE DAWNS
                </h1>
                <div className="text-xs text-white-dark tracking-widest mt-1">ХРАМ ПЯТИ РАССВЕТОВ</div>
              </div>
            </div>
            <nav className="hidden md:flex">
              <div className="flex space-x-8 text-sm font-medium uppercase tracking-wider">
                <Link href="/messages" className="text-gold hover:text-jade transition-colors">Архив</Link>
                <Link href="/images" className="text-gold hover:text-jade transition-colors">Медиа</Link>
              </div>
            </nav>
          </div>
        </header>

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
                  <Link href="/messages/foundation/library/pacifism_article" className="block group">
                    <div className="text-sm text-dark-light uppercase tracking-wider mb-1">Библиотека</div>
                    <h3 className="font-medium text-lg text-gold group-hover:text-jade transition-colors">Пацифизм губит ухоженные сады</h3>
                    <p className="text-dark-light mt-1 text-sm">Основная причина гибели хороших интернет-сообществ — отказ от самозащиты</p>
                  </Link>

                  <Link href="/messages/foundation/problematics/personal-regiment" className="block group">
                    <div className="text-sm text-dark-light uppercase tracking-wider mb-1">Внешние отношения</div>
                    <h3 className="font-medium text-lg text-gold group-hover:text-jade transition-colors">Атлас классовых сообществ</h3>
                    <p className="text-dark-light mt-1 text-sm">Самый полный путеводитель по русскоязычным дискорд-сообществам World of Warcraft</p>
                  </Link>

                  <Link href="/messages/information/atlas" className="block group">
                    <div className="text-sm text-dark-light uppercase tracking-wider mb-1">Информация</div>
                    <h3 className="font-medium text-lg text-gold group-hover:text-jade transition-colors">Атлас классовых сообществ</h3>
                    <p className="text-dark-light mt-1 text-sm">Путеводитель по русскоязычным дискорд-сообществам World of Warcraft</p>
                  </Link>

                  <Link href="/messages" className="text-jade hover:text-jade-dark text-sm font-medium transition-colors">
                    Все материалы →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="my-16">
            <div className="container mx-auto px-4">
              <div className="border-t border-b border-jade py-12">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-1 bg-jade mr-4"></div>
                  <h2 className="text-jade text-2xl font-heading font-bold">О проекте</h2>
                </div>

                <div className="text-gold grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <p className="text-dark text-lg leading-relaxed mb-6">
                      Данный репозиторий представляет собой полный архив ресурсов, стратегических документов и медиа-материалов русскоязычного Discord-сообщества <strong>"Храм Пяти Рассветов"</strong> — официального сообщества для ~15'000 игроков класса монах в игре World of Warcraft.
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
          <div className="container mx-auto px-4 my-16">
            <div className="flex items-center mb-12">
              <div className="w-12 h-1 bg-jade mr-4"></div>
              <h2 className="text-2xl font-heading font-bold">Архивные материалы</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="group">
                <div className="aspect-w-16 aspect-h-9 mb-4 bg-gold-light overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-jade-light text-jade text-5xl">
                    🖼️
                  </div>
                </div>
                <div className="text-sm uppercase tracking-wider text-dark-light mb-2">Коллекция</div>
                <h3 className="text-xl font-medium mb-2 group-hover:text-jade transition-colors">Медиа-ресурсы</h3>
                <p className="text-dark-light mb-4">
                  Полная коллекция визуальных материалов сообщества, включая арты, эмодзи и стикеры
                </p>
                <Link href="/images" className="text-jade hover:text-jade-dark font-medium text-sm inline-flex items-center transition-colors">
                  Открыть коллекцию
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Card 2 */}
              <div className="group">
                <div className="aspect-w-16 aspect-h-9 mb-4 bg-purple-light overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-smoke text-purple text-5xl">
                    💬
                  </div>
                </div>
                <div className="text-sm uppercase tracking-wider text-dark-light mb-2">Архив</div>
                <h3 className="text-xl font-medium mb-2 group-hover:text-jade transition-colors">Документы и стратегии</h3>
                <p className="text-dark-light mb-4">
                  Архив стратегических материалов, принципов сообщества и административных документов
                </p>
                <Link href="/messages" className="text-jade hover:text-jade-dark font-medium text-sm inline-flex items-center transition-colors">
                  Изучить архив
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* Card 3 */}
              <div className="group">
                <div className="aspect-w-16 aspect-h-9 mb-4 bg-jade-light overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center bg-gold-light text-gold text-5xl">
                    🔗
                  </div>
                </div>
                <div className="text-sm uppercase tracking-wider text-dark-light mb-2">Ресурсы</div>
                <h3 className="text-xl font-medium mb-2 group-hover:text-jade transition-colors">Связанные проекты</h3>
                <p className="text-dark-light mb-4">
                  Официальные ресурсы и связанные проекты сообщества Храм Пяти Рассветов
                </p>
                <a href="https://discord.gg/P52zeKR" className="text-jade hover:text-jade-dark font-medium text-sm inline-flex items-center transition-colors">
                  Discord-сервер
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
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
        <footer className="bg-dark text-smoke py-12">
          <div className="container mx-auto px-4">
            <div className="border-t border-dark-light pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-smoke-dark text-sm">
                &copy; 2023 Temple Five Dawns Archive
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
