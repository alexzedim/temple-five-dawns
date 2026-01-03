import { articles } from "@/lib/articles";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Articles() {
  const [topArticles, setTopArticles] = useState(articles.slice(0, 3));
  useEffect(() => {
    setTopArticles([...articles].sort(() => 0.5 - Math.random()).slice(0, 3));
  }, []);
  return (
    topArticles.map((article) => (
      <Link href={article.href} className="block group pb-4 border-b border-gold-dark last:border-b-0" key={article.href}>
        <div className="text-xs text-gold-light uppercase tracking-widest mb-2 font-semibold">Библиотека</div>
        <h3 className="font-bold text-lg text-gold group-hover:text-gold-light transition-colors">{article.title}</h3>
        <p className="text-cream-dark mt-2 text-sm leading-relaxed">{article.content}</p>
      </Link>
    ))
  );
}
