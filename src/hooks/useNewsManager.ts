import { useGetNewsByCategory, useGetTopHeadlines, useSearchNews } from '@/libs/modules/News';
import { NewsCategory } from '@/types/news';
import { useState } from 'react';

export const useNewsManager = () => {
  const [selectedCategory, setSelectedCategory] = useState<NewsCategory>('general');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentView, setCurrentView] = useState<'headlines' | 'search' | 'category'>('headlines');

  const headlinesQuery = useGetTopHeadlines({
    category: currentView === 'headlines' ? undefined : selectedCategory,
    pageSize: 12,
    country: 'us',
  });

  const searchQueryResult = useSearchNews(
    searchQuery,
    { pageSize: 12, language: 'en' },
    { enabled: currentView === 'search' && searchQuery.length > 0 }
  );

  const categoryQuery = useGetNewsByCategory(
    selectedCategory,
    { pageSize: 12, country: 'us' },
    { enabled: currentView === 'category' }
  );

  const activeQuery =
    currentView === 'search'
      ? searchQueryResult
      : currentView === 'category'
        ? categoryQuery
        : headlinesQuery;

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentView('search');
  };

  const handleCategoryChange = (category: NewsCategory) => {
    setSelectedCategory(category);
    setCurrentView('category');
    setSearchQuery('');
  };

  const showHeadlines = () => {
    setCurrentView('headlines');
    setSearchQuery('');
  };

  return {
    selectedCategory,
    searchQuery,
    currentView,
    activeQuery,
    handleSearch,
    handleCategoryChange,
    showHeadlines,
  };
};
