import ErrorDisplay from '@/app/components/ErrorDisplay';
import NewsGrid from '@/app/components/news/NewsGrid';
import { Search } from 'lucide-react';
import React from 'react';

interface NewsContentProps {
  isError: boolean;
  error: unknown;
  onRetry: () => void;
  hasArticles: boolean;
  articles?: any[];
  noArticles: boolean;
  currentView: 'search' | 'category' | string;
}

const NewsContent: React.FC<NewsContentProps> = ({
  isError,
  error,
  onRetry,
  hasArticles,
  articles,
  noArticles,
  currentView,
}) => {
  if (isError) {
    return <ErrorDisplay error={error} onRetry={onRetry} />;
  }

  if (hasArticles) {
    return <NewsGrid articles={articles!} />;
  }

  if (noArticles) {
    return (
      <div className="py-12 text-center">
        <Search className="mx-auto mb-4 h-16 w-16 text-slate-300" />
        <h3 className="mb-2 text-xl font-semibold text-slate-700">Not Found</h3>
        <p className="text-slate-500">
          {currentView === 'search'
            ? 'Try searching for something else'
            : 'No news found in this category'}
        </p>
      </div>
    );
  }

  return null;
};

export default NewsContent;
