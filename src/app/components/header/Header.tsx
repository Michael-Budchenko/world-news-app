import SearchInput from '@/components/forms/inputs/SearchInput';
import { useDebounceSearch } from '@/hooks/useDebounceSearch';
import { Newspaper } from 'lucide-react';

interface HeaderProps {
  handleSearch: (query: string) => void;
  showHeadlines: () => void;
  searchQuery: string;
}

const Header = ({ handleSearch, showHeadlines, searchQuery }: HeaderProps) => {
  const { query, handleChange } = useDebounceSearch({
    initialQuery: searchQuery,
    onTimeOut: handleSearch,
  });

  return (
    <header className="fixed top-0 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex cursor-pointer items-center gap-3" onClick={showHeadlines}>
            <Newspaper className="h-8 w-8 text-slate-600" />
            <h1 className="text-2xl font-bold text-slate-900">World News</h1>
          </div>

          <SearchInput
            name="search"
            value={query}
            placeholder="Search news..."
            onChange={handleChange}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
