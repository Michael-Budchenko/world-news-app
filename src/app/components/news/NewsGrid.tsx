import { NewsArticle } from '@/types/news';
import NewsCard from './NewsCard';

interface NewsGridProps {
  articles: NewsArticle[];
}

const NewsGrid = ({ articles }: NewsGridProps) => {
  if (articles.length === 0) {
    return (
      <div className="py-12 text-center">
        <p className="text-slate-500">No news found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-6 lg:grid-cols-2 sm:grid-cols-1">
      {articles.map((article, index) => (
        <NewsCard key={`${article.url}-${index}`} article={article} />
      ))}
    </div>
  );
};

export default NewsGrid;
