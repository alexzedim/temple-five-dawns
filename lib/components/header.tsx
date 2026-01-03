import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const { basePath } = useRouter();
  return (
    <header className="border-b-2 border-gold sticky top-0 z-50 bg-charcoal relative">
      {/* Decorative top line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>

      <div className="container mx-auto px-4 py-8 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Image
              src={`${basePath}/images/monk-sigil.png`}
              alt="Monk Sigil"
              width={50}
              height={50}
            />
          </div>
          <div className="pl-4">
            <h1 className="text-3xl font-heading font-bold tracking-wider text-gold">
              TEMPLE FIVE DAWNS
            </h1>
            <div className="text-xs text-gold-light tracking-widest mt-1 uppercase">
              Храм Пяти Рассветов
            </div>
          </div>
        </div>
        <nav className="hidden md:flex">
          <nav className="hidden md:flex space-x-8">
            <Link href="/messages" className="nav-link font-semibold text-gold hover:text-gold-light border-transparent hover:border-gold transition-all">Сообщения</Link>
            <span>{" | "}</span>
            <Link href="/images" className="nav-link text-gold hover:text-gold-light border-transparent hover:border-gold transition-all">Медиа</Link>
          </nav>
        </nav>
      </div>

      {/* Decorative bottom line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-gold to-transparent"></div>
    </header>
  )
}
