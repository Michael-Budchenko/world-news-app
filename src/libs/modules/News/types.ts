import { NewsCategory, NewsResponse } from '@/types/news';
import { AxiosPromise } from 'axios';

export interface NewsApiParams extends Record<string, unknown> {
  category?: NewsCategory;
  q?: string;
  page?: number;
  pageSize?: number;
  language?: string;
  country?: string;
}

export interface NewsApiTypes {
  getTopHeadlines: (payload?: NewsApiParams) => AxiosPromise<NewsResponse>;
  getEverything: (payload?: NewsApiParams) => AxiosPromise<NewsResponse>;
  getSources: () => AxiosPromise<{ sources: any[] }>;
  getNewsByCategory: (
    category: NewsCategory,
    payload?: NewsApiParams
  ) => AxiosPromise<NewsResponse>;
  searchNews: (query: string, payload?: NewsApiParams) => AxiosPromise<NewsResponse>;
}
