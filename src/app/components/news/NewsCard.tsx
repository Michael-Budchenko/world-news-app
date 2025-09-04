import { formatFullDate } from '@/libs/utils/dateHelpers';
import { NewsArticle } from '@/types/news';
import { Calendar, ExternalLink, User } from 'lucide-react';
import React from 'react';
import { NavLink } from 'react-router-dom';

interface NewsCardProps {
  article: NewsArticle;
}

const NewsCard = ({ article }: NewsCardProps) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.style.display = 'none';
  };

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-md transition-shadow duration-300 hover:shadow-lg">
      <div className="aspect-video overflow-hidden bg-gray-100">
        {article.urlToImage ? (
          <img
            src={article.urlToImage}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
            onError={handleImageError}
          />
        ) : (
          <div className="h-48 w-full" />
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex-1">
          <h3 className="mb-2 line-clamp-2 text-lg font-semibold transition-colors hover:text-indigo-600">
            {article.title}
          </h3>

          {article.description && (
            <p className="mb-3 line-clamp-3 text-slate-600">{article.description}</p>
          )}

          <div className="mb-4 space-y-2">
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Calendar className="h-4 w-4" />
              <span>{formatFullDate(article.publishedAt)}</span>
            </div>

            {article.author && (
              <div className="flex items-center gap-2 text-sm text-slate-500">
                <User className="h-4 w-4" />
                <span className="line-clamp-1">{article.author}</span>
              </div>
            )}

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <span className="font-medium text-indigo-600">{article.source.name}</span>
            </div>
          </div>
        </div>

        <NavLink
          to={article.url}
          className="mt-auto flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white transition-colors hover:bg-indigo-700"
        >
          <ExternalLink className="h-4 w-4" />
          Read more
        </NavLink>
      </div>
    </article>
  );
};

export default NewsCard;
