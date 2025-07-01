import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>🏛️ Temple Five Dawns // Храм Пяти Рассветов</title>
        <meta name="description" content="Архив русскоязычного Discord-сообщества для игроков класса монах в World of Warcraft" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-monk-50 to-primary-50">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-monk-200 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-4">
                <Image
                  src="/images/monk-sigil.png"
                  alt="Monk Sigil"
                  width={48}
                  height={48}
                  className="rounded-lg"
                />
                <h1 className="text-xl font-bold text-monk-900">
                  Temple Five Dawns
                </h1>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/messages" className="nav-link">Сообщения</Link>
                <Link href="/images" className="nav-link">Медиа</Link>
                <Link href="/about" className="nav-link">О проекте</Link>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-8">
              <Image
                src="/images/monk-sigil.png"
                alt="Monk Sigil"
                width={200}
                height={200}
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-monk-900 mb-6">
              🏛️ TEMPLE FIVE DAWNS
            </h1>
            <p className="text-xl text-monk-600 mb-8 max-w-3xl mx-auto">
              Архив русскоязычного Discord-сообщества для игроков класса монах в World of Warcraft
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/messages" className="btn-primary">
                📚 Изучить документы
              </Link>
              <Link href="/images" className="btn-secondary">
                🖼️ Медиа-архив
              </Link>
            </div>
          </div>

          {/* About Section */}
          <div className="card mb-12">
            <h2 className="text-2xl font-bold text-monk-900 mb-6">📜 О проекте</h2>
            <p className="text-monk-700 mb-4">
              Данный репозиторий представляет собой полный архив ресурсов, стратегических документов и медиа-материалов русскоязычного Discord-сообщества <strong>"Храм Пяти Рассветов"</strong> — официального сообщества для ~15'000 игроков класса монах в игре World of Warcraft.
            </p>
            <p className="text-monk-700 mb-4">
              Автор репозитория являлся <strong>co-HEAD</strong> данного Discord-сообщества и принимал активное участие в его развитии и стратегическом планировании.
            </p>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-4 my-6">
              <p className="text-primary-800">
                <strong>Вызовы с которыми нам предстояло столкнуться:</strong>
              </p>
              <ul className="mt-2 space-y-1 text-primary-700">
                <li>• <strong>Свобода самовыражения</strong> vs излишняя цензура</li>
                <li>• <strong>Меритократия</strong> vs персоналистичность</li>
                <li>• <strong>Прозрачность</strong> vs закрытость административных процессов</li>
                <li>• <strong>Развитие</strong> vs стагнация</li>
                <li>• <strong>Сообщество</strong> vs культ личности</li>
              </ul>
            </div>

            <div className="bg-primary-50 border-l-4 border-primary-500 p-4 my-6">
              <p className="text-primary-800">
                <strong>Программа развития базировалась на:</strong>
              </p>
              <ul className="mt-2 space-y-1 text-primary-700">
                <li>• Внедрение системы голосования по развитию сообщества</li>
                <li>• Создание публичной летописи достижений участников</li>
                <li>• Реформу административной структуры</li>
                <li>• Развитие уникального контента и внутренней культуры</li>
                <li>• Демократизация управления — введение прозрачности и сменяемости администрации</li>
                <li>• Создание Community Council — площадка для участия сообщества в принятии решений</li>
                <li>• Реформа модерации — отказ от авторитарно-эмоционального стиля управления</li>
                <li>• User Acquisition — стратегии привлечения новой аудитории</li>
                <li>• Признание заслуг — система публичного признания вклада участников</li>
                <li>• Уникальное торговое предложение — разработка отличительных особенностей сообщества</li>
              </ul>
            </div>
          </div>

          {/* Content Sections */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="card">
              <h3 className="text-xl font-bold text-monk-900 mb-4">🖼️ Медиа-ресурсы</h3>
              <p className="text-monk-700 mb-4">
                Полная коллекция визуальных материалов сообщества:
              </p>
              <ul className="space-y-2 text-monk-600">
                <li>• Арт и концепт-арты</li>
                <li>• Эмодзи-пак (400+ уникальных)</li>
                <li>• Анимированные стикеры</li>
                <li>• Мемы и развлекательный контент</li>
              </ul>
              <Link href="/images" className="btn-primary mt-4 inline-block">
                Открыть медиа-архив
              </Link>
            </div>

            <div className="card">
              <h3 className="text-xl font-bold text-monk-900 mb-4">💬 Сообщения и контент</h3>
              <p className="text-monk-700 mb-4">
                Архив документов и стратегических материалов:
              </p>
              <ul className="space-y-2 text-monk-600">
                <li>• Административные документы</li>
                <li>• Принципы сообщества</li>
                <li>• Стратегические планы</li>
                <li>• Персональные обращения</li>
              </ul>
              <Link href="/messages" className="btn-primary mt-4 inline-block">
                Изучить документы
              </Link>
            </div>
          </div>

          {/* Related Resources */}
          <div className="card">
            <h2 className="text-2xl font-bold text-monk-900 mb-6">🔗 Связанные ресурсы</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-monk-800 mb-2">Социальные сети</h3>
                <ul className="space-y-2 text-monk-600">
                  <li>• <a href="https://discord.gg/P52zeKR" className="text-primary-600 hover:underline">Discord: Храм Пяти Рассветов</a></li>
                  <li>• <a href="https://templefivedawns.ru" className="text-primary-600 hover:underline">Официальный сайт</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-monk-800 mb-2">Информация</h3>
                <ul className="space-y-2 text-monk-600">
                  <li>• Тематика: World of Warcraft — Класс Монах</li>
                  <li>• Аудитория: Русскоязычное игровое сообщество</li>
                  <li>• Масштаб: 15,000+ участников</li>
                </ul>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-monk-900 text-white py-12 mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-monk-300 mb-4">
                "The future belongs to those who change it."
              </p>
              <p className="text-monk-400 text-sm">
                — Neo Monk Discord Community
              </p>
              <p className="text-monk-400 text-sm mt-4">
                Данный архив представлен в образовательных и исследовательских целях
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
