import { cn } from '@/libs/utils/classNameHelper';
import { NewsCategory } from '@/types/news';
import { newsCategories } from './newsCategories';

interface CategoryFilterProps {
  selectedCategory: NewsCategory;
  onCategoryChange: (category: NewsCategory) => void;
  onShowAll: () => void;
}

const CategoryFilter = ({ selectedCategory, onCategoryChange, onShowAll }: CategoryFilterProps) => {
  return (
    <div className="mb-8 mt-20 rounded-lg bg-white p-4 shadow-sm">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">News Categories</h3>
        <button
          onClick={onShowAll}
          className="text-lg font-medium text-indigo-600 hover:text-indigo-700"
        >
          All News
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 md:grid-cols-4">
        {newsCategories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={cn(
                `flex flex-col items-center rounded-lg border-2 p-3 transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-700'
                    : 'border-slate-200 text-slate-700 hover:border-indigo-300 hover:bg-slate-50'
                }`
              )}
            >
              <Icon className="mb-1" size={24} />
              <span className="text-sm font-medium">{category.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryFilter;
