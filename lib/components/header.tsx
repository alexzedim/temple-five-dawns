import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const { basePath } = useRouter();
  return (
    <header className="border-b border-smoke-dark sticky top-0 z-50 bg-dark">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <Image
            src={`${basePath}/images/monk-sigil.png`}
            alt="Monk Sigil"
            width={50}
            height={50}
            className="rounded-sm"
          />
          <div>
            <h1 className="text-2xl font-heading font-normal tracking-tight text-gold">
              TEMPLE FIVE DAWNS
            </h1>
            <div className="text-xs text-white-dark tracking-widest mt-1">
              ХРАМ ПЯТИ РАССВЕТОВ
            </div>
          </div>
        </div>
        <nav className="hidden md:flex">
          <nav className="hidden md:flex space-x-8">
            <Link href="/messages" className="nav-link font-semibold text-gold hover:text-jade">Сообщения</Link>
            <Link href="/images" className="nav-link text-gold hover:text-jade">Медиа</Link>
          </nav>
        </nav>
      </div>
    </header>
  )
}
