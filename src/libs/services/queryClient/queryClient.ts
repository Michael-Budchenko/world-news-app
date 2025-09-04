import { QueryClient } from '@tanstack/react-query';

const refetchOnWindowFocus = import.meta.env.MODE === 'development' ? false : 'always';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: Infinity,
      staleTime: 3000,
      retry: false,
      refetchOnWindowFocus,
    },
  },
});
