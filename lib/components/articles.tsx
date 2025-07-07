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
      <Link href={article.href} className="block group" key={article.href}>
        <div className="text-sm text-dark-light uppercase tracking-wider mb-1">Библиотека</div>
        <h3 className="font-medium text-lg text-gold group-hover:text-jade transition-colors">{article.title}</h3>
        <p className="text-dark-light mt-1 text-sm">{article.content}</p>
      </Link>
    ))
  );
}
