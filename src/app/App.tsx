import LoadingModal from '@/components/modal/LoadingModal';
import React from 'react';
import { useNewsManager } from '../hooks/useNewsManager';
import Footer from './components/Footer';
import CategoryFilter from './components/category/CategoryFilter';
import Header from './components/header/Header';
import ResultsHeader from './components/header/ResultsHeader';
import NewsContent from './components/news/NewsContent';

const App: React.FC = () => {
  const {
    selectedCategory,
    searchQuery,
    currentView,
    activeQuery,
    handleSearch,
    handleCategoryChange,
    showHeadlines,
  } = useNewsManager();

  const { isLoading, isError, data, error, refetch } = activeQuery;

  const hasArticles = (data?.articles?.length ?? 0) > 0;
  const noArticles = !isLoading && (data?.articles?.length ?? 0) === 0;

  return (
    <>
      {isLoading && <LoadingModal />}

      <div className="flex min-h-screen flex-col bg-slate-50">
        <Header
          handleSearch={handleSearch}
          showHeadlines={showHeadlines}
          searchQuery={searchQuery}
        />

        <main className="container mx-auto flex-1 px-4 py-6">
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            onShowAll={showHeadlines}
          />

          <ResultsHeader
            currentView={currentView}
            searchQuery={searchQuery}
            selectedCategory={selectedCategory}
            totalResults={data?.totalResults}
          />

          <NewsContent
            isError={isError}
            error={error}
            onRetry={refetch}
            hasArticles={hasArticles}
            articles={data?.articles}
            noArticles={noArticles}
            currentView={currentView}
          />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default App;
