import { NewsApiParams } from './types';

export const keys = {
  news: {
    store: (payload: NewsApiParams = {}) => ['NEWS', payload],
    invalidate: () => ({ queryKey: ['NEWS'] }),
  },

  topHeadlines: {
    store: (payload: NewsApiParams = {}) => ['TOP_HEADLINES', payload],
    invalidate: () => ({ queryKey: ['TOP_HEADLINES'] }),
  },

  newsEverything: {
    store: (payload: NewsApiParams = {}) => ['NEWS_EVERYTHING', payload],
    invalidate: () => ({ queryKey: ['NEWS_EVERYTHING'] }),
  },

  newsSources: {
    store: () => ['NEWS_SOURCES'],
    invalidate: () => ({ queryKey: ['NEWS_SOURCES'] }),
  },

  newsByCategory: {
    store: (category: string, payload: NewsApiParams = {}) => ['NEWS_CATEGORY', category, payload],
    invalidate: (category: string) => ({ queryKey: ['NEWS_CATEGORY', category] }),
  },

  newsSearch: {
    store: (query: string, payload: NewsApiParams = {}) => ['NEWS_SEARCH', query, payload],
    invalidate: (query: string) => ({ queryKey: ['NEWS_SEARCH', query] }),
  },

  paginatedNews: {
    store: (payload: NewsApiParams = {}) => ['PAGINATED_NEWS', payload],
    invalidate: () => ({ queryKey: ['PAGINATED_NEWS'] }),
  },
};
