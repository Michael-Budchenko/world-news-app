import { useRef, useState } from 'react';
import { debounce } from 'throttle-debounce';

export type UseDebounceSearchParams = {
  minQueryNumber?: number;
  initialQuery?: string | null;
  delay?: number;
  onTimeOut: (query: string) => void;
};

export type DebounceSearchController = {
  query: string;
  handleChange: (value: string) => void;
};

export const useDebounceSearch = (params: UseDebounceSearchParams): DebounceSearchController => {
  const { minQueryNumber = 3, delay = 800, initialQuery, onTimeOut } = params;

  const [query, setQuery] = useState(initialQuery ?? '');

  const throttled = useRef(debounce(delay, (callback: () => void) => callback()));
  const bind = (value: string) => throttled.current(onTimeOut.bind(null, value));
  const unbind = () => throttled.current(() => {});

  const handleChange = (value: string) => {
    setQuery(value);

    if (value.length < minQueryNumber && value.length !== 0) {
      return unbind();
    }

    bind(value);
  };

  return { query, handleChange };
};
