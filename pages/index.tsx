import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/lib/components/header'
import Footer from '@/lib/components/footer'
import RandomQuote from "@/lib/components/quote";
import Articles from "@/lib/components/articles";
import { useRouter } from 'next/router';

export default function Home(): JSX.Element {
  const { basePath } = useRouter();

  return (
    <>
      <Head>
        <title>Temple Five Dawns // Храм Пяти Рассветов</title>
        <meta name="description" content="Архив русскоязычного Discord-сообщества для игроков класса монах в World of Warcraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-charcoal">
        {/* Main header */}
        <Header />

        {/* Hero Section */}
        <main className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-12">
            {/* Hero content - 8 columns on desktop */}
            <div className="lg:col-span-8">
              <div className="relative mb-8 overflow-hidden rounded-sm bg-charcoal-light border-2 border-gold">
                {/* Ornate corner decorations */}
                <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-gold z-20"></div>
                <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-gold z-20"></div>
                <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-gold z-20"></div>
                <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-gold z-20"></div>

                <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-70 z-10"></div>
                <Image
                  src={`${basePath}/images/art/queen-lowres.png`}
                  alt="ADM SOV MDC"
                  width={1200}
                  height={800}
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 p-8 z-20">
                  <div className="inline-block bg-crimson px-4 py-2 text-xs font-semibold text-cream uppercase tracking-wider mb-4 border border-gold">Архив сообщества</div>
                  <h1 className="text-4xl md:text-6xl font-heading font-bold text-gold mb-4 max-w-2xl">
                    Храм Пяти Рассветов: Взгляд Изнутри
                  </h1>
                  <p className="text-lg text-cream mb-6 max-w-2xl">
                    Полный архив материалов русскоязычного Discord-сообщества для игроков класса монах в World of Warcraft
                  </p>
                  <div className="flex gap-4">
                    <Link href="/messages" className="btn-primary">
                      Изучить документы
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Featured articles - 4 columns on desktop */}
            <div className="lg:col-span-4 space-y-8">
              <div className="card-ornate">
                <h2 className="text-2xl font-heading font-bold mb-4 text-gold uppercase tracking-wider">Избранные материалы</h2>
                <div className="divider-ornate"></div>
                <div className="space-y-6 mt-6">
                  <Articles/>
                  <Link href="/messages" className="text-gold hover:text-gold-light text-sm font-medium transition-colors inline-block mt-4">
                    Все материалы →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="my-1">
            <div className="container mx-auto px-4">
              <div className="border-t-2 border-b-2 border-gold py-12">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-1 bg-gold mr-4"></div>
                  <h2 className="text-gold text-3xl font-heading font-bold uppercase tracking-wider">О проекте</h2>
                  <div className="flex-1 h-1 bg-gradient-to-r from-gold to-transparent ml-4"></div>
                </div>

                <div className="text-cream grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div>
                    <p className="text-cream text-lg leading-relaxed mb-6">
                      Данный репозиторий представляет собой полный архив ресурсов, стратегических документов и медиа-материалов русскоязычного Discord-сообщества <Link href="https://discord.gg/P52zeKR" className="text-gold hover:text-gold-light transition-colors font-semibold"><strong>"Храм Пяти Рассветов"</strong></Link> — официального сообщества для ~15'000 игроков класса монах в игре World of Warcraft.
                    </p>
                    <p className="text-cream text-lg leading-relaxed mb-6">
                      Автор репозитория являлся <strong className="text-gold">co-HEAD</strong> данного Discord-сообщества и принимал активное участие в его развитии и стратегическом планировании.
                    </p>
                    <p className="text-cream text-lg leading-relaxed">
                      Данная программа модернизации так и не была реализована в полном объёме из-за организационных и политических сложностей внутри сообщества.
                    </p>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-gold font-bold text-lg accent-line mb-4 uppercase tracking-wider">Вызовы сообщества</h3>
                      <ul className="space-y-2 text-cream-dark">
                        <li className="flex items-start">
                          <span className="text-gold mr-3 font-bold">▪</span>
                          <span><strong className="text-gold">Свобода самовыражения</strong> vs излишняя цензура</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gold mr-3 font-bold">▪</span>
                          <span><strong className="text-gold">Меритократия</strong> vs персоналистичность</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gold mr-3 font-bold">▪</span>
                          <span><strong className="text-gold">Прозрачность</strong> vs закрытость административных процессов</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gold mr-3 font-bold">▪</span>
                          <span><strong className="text-gold">Развитие</strong> vs стагнация</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-gold mr-3 font-bold">▪</span>
                          <span><strong className="text-gold">Сообщество</strong> vs культ личности</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-gold font-bold text-lg accent-line mb-4 uppercase tracking-wider">Ключевые принципы развития</h3>
                      <div className="grid grid-cols-2 gap-2 text-cream-dark text-sm">
                        <div className="flex items-start">
                          <span className="text-gold mr-2 font-bold">◆</span>
                          <span>Система голосования</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-gold mr-2 font-bold">◆</span>
                          <span>Летопись достижений</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-gold mr-2 font-bold">◆</span>
                          <span>Административная реформа</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-gold mr-2 font-bold">◆</span>
                          <span>Уникальный контент</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-gold mr-2 font-bold">◆</span>
                          <span>Прозрачность управления</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-gold mr-2 font-bold">◆</span>
                          <span>Community Council</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-gold mr-2 font-bold">◆</span>
                          <span>Реформа модерации</span>
                        </div>
                        <div className="flex items-start">
                          <span className="text-gold mr-2 font-bold">◆</span>
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
            <div className="border-t-2 border-b-2 border-gold py-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="text-center p-6 border-2 border-gold rounded-sm">
                  <div className="text-5xl font-bold text-gold mb-2 font-heading">15,000+</div>
                  <div className="text-cream-dark uppercase tracking-wider text-sm">Участников сообщества</div>
                </div>
                <div className="text-center p-6 border-2 border-gold rounded-sm">
                  <div className="text-5xl font-bold text-gold mb-2 font-heading">2023</div>
                  <div className="text-cream-dark uppercase tracking-wider text-sm">Год создания архива</div>
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
