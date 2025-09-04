import { NewsCategory } from '@/types/news';
import { newsCategories } from '../category/newsCategories';

interface ResultsHeaderProps {
  currentView: 'headlines' | 'search' | 'category';
  searchQuery: string;
  selectedCategory: NewsCategory;
  totalResults?: number;
}

const ResultsHeader = ({
  currentView,
  searchQuery,
  selectedCategory,
  totalResults,
}: ResultsHeaderProps) => {
  const getTitle = () => {
    switch (currentView) {
      case 'search':
        return `Search results: "${searchQuery}"`;
      case 'category':
        return `Category: ${newsCategories.find((c) => c.id === selectedCategory)?.name}`;
      case 'headlines':
      default:
        return 'Headlines';
    }
  };

  return (
    <div className="mb-6">
      <h2 className="mb-2 text-2xl font-bold text-slate-900">{getTitle()}</h2>
      {typeof totalResults === 'number' && (
        <p className="text-slate-600"> Found {totalResults} news</p>
      )}
    </div>
  );
};

export default ResultsHeader;
