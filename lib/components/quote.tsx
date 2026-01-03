import { useState, useEffect } from "react";
import { quotes } from "@/lib/quotes";

export default function RandomQuote(): JSX.Element {
  const [currentQuote, setCurrentQuote] = useState<string>('')

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(quotes[randomIndex]?.quote || '')
  }, [])

  return (
    <div className="relative text-center py-12 px-8 border-2 border-gold rounded-sm bg-charcoal-light">
      {/* Decorative top ornament */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="text-gold text-2xl">✦</span>
      </div>

      <blockquote
        className="text-cream text-2xl md:text-3xl leading-relaxed tracking-wide font-heading"
        style={{ fontStyle: 'italic', fontWeight: '400' }}
      >
        <span className="text-gold text-4xl mr-4">« </span>
        {currentQuote}
        <span className="text-gold text-4xl ml-4"> »</span>
      </blockquote>

      {/* Decorative bottom ornament */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
        <span className="text-gold text-2xl">✦</span>
      </div>
    </div>
  )
}
