import { Search } from 'lucide-react';
import { forwardRef } from 'react';

type SearchInputProps = {
  name?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>((props, ref) => {
  const { name, value, placeholder, onChange } = props;

  return (
    <div className="form-section">
      <div className="form-row group">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />

        <label className="flex flex-col">
          <input
            ref={ref}
            name={name}
            type="text"
            value={value}
            placeholder={placeholder}
            className="input ps-[2.375rem]"
            onChange={({ target }) => onChange(target.value)}
          />
        </label>
      </div>
    </div>
  );
});

export default SearchInput;
