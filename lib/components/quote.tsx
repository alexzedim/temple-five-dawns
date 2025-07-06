import { useState, useEffect } from "react";
import { quotes } from "@/lib/quotes";

export default function RandomQuote(): JSX.Element {
  const [currentQuote, setCurrentQuote] = useState<string>('')

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setCurrentQuote(quotes[randomIndex]?.quote || '')
  }, [])

  return (
    <div className="relative text-center">
      <blockquote
        className="text-dark text-3xl leading-relaxed tracking-wide"
        style={{ fontStyle: 'italic', fontWeight: '300' }}
      >
        <span className="text-jade text-3xl mr-6">« </span>
        {currentQuote}
        <span className="text-jade text-3xl ml-6"> »</span>
      </blockquote>
    </div>
  )
}
