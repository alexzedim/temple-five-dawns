export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream py-12 border-t-2 border-gold relative">
      <div className="container mx-auto px-4">
        <div className="border-t-2 border-gold pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gold text-sm uppercase tracking-wider font-semibold">
            &copy; MMXXIII Temple Five Dawns
          </p>
          <p className="text-gold-light italic text-sm mt-4 md:mt-0 max-w-md text-center md:text-right">
            "The future belongs to those who change it." — Neo Monk Discord Community
          </p>
        </div>

        {/* Decorative bottom line */}
        <div className="mt-8 pt-8 border-t border-gold-dark">
          <div className="flex justify-center">
            <span className="text-gold text-lg">✦ ✦ ✦</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
