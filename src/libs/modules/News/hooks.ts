import { logger } from '@/libs/utils/apiHelper';
import { NewsCategory } from '@/types/news';
import { keepPreviousData, useInfiniteQuery, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import api from './api';
import { keys } from './cacheKeys';
import { NewsApiParams } from './types';

export const useGetTopHeadlines = (payload: NewsApiParams = {}, params: object = {}) => {
  return useQuery({
    queryKey: keys.topHeadlines.store(payload),
    queryFn: () => api.getTopHeadlines(payload),
    select: (res) => res.data,
    placeholderData: keepPreviousData,
    enabled: !!import.meta.env.VITE_NEWS_API_KEY,
    throwOnError: (error: AxiosError<{ message: string }>) => {
      logger(error);
      return false;
    },
    ...params,
  });
};

export const useGetEverything = (payload: NewsApiParams = {}, params: object = {}) => {
  return useQuery({
    queryKey: keys.newsEverything.store(payload),
    queryFn: () => api.getEverything(payload),
    select: (res) => res.data,
    placeholderData: keepPreviousData,
    enabled: !!import.meta.env.VITE_NEWS_API_KEY,
    throwOnError: (error: AxiosError<{ message: string }>) => {
      logger(error);
      return false;
    },
    ...params,
  });
};

export const useGetNewsSources = (params: object = {}) => {
  return useQuery({
    queryKey: keys.newsSources.store(),
    queryFn: () => api.getSources(),
    select: (res) => res.data.sources,
    placeholderData: keepPreviousData,
    enabled: !!import.meta.env.VITE_NEWS_API_KEY,
    throwOnError: (error: AxiosError<{ message: string }>) => {
      logger(error);
      return false;
    },
    ...params,
  });
};

export const useGetNewsByCategory = (
  category: NewsCategory,
  payload: NewsApiParams = {},
  params: object = {}
) => {
  return useQuery({
    queryKey: keys.newsByCategory.store(category, payload),
    queryFn: () => api.getNewsByCategory(category, payload),
    select: (res) => res.data,
    placeholderData: keepPreviousData,
    enabled: !!import.meta.env.VITE_NEWS_API_KEY && !!category,
    throwOnError: (error: AxiosError<{ message: string }>) => {
      logger(error);
      return false;
    },
    ...params,
  });
};

export const useSearchNews = (query: string, payload: NewsApiParams = {}, params: object = {}) => {
  return useQuery({
    queryKey: keys.newsSearch.store(query, payload),
    queryFn: () => api.searchNews(query, payload),
    select: (res) => res.data,
    placeholderData: keepPreviousData,
    enabled: !!import.meta.env.VITE_NEWS_API_KEY && !!query,
    throwOnError: (error: AxiosError<{ message: string }>) => {
      logger(error);
      return false;
    },
    ...params,
  });
};

export const useGetPaginatedNews = (payload: NewsApiParams = {}, params: object = {}) => {
  return useQuery({
    queryKey: keys.paginatedNews.store(payload),
    queryFn: () => api.getEverything(payload),
    select: (res) => res.data,
    placeholderData: keepPreviousData,
    enabled: !!import.meta.env.VITE_NEWS_API_KEY,
    throwOnError: (error: AxiosError<{ message: string }>) => {
      logger(error);
      return false;
    },
    ...params,
  });
};

export const useGetInfiniteNews = (payload: NewsApiParams = {}, params: object = {}) => {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: keys.paginatedNews.store(payload),
    queryFn: ({ pageParam }) => {
      return api.getEverything({ ...payload, page: pageParam });
    },
    select: (data) => ({
      pageParams: data.pageParams,
      pages: data.pages.map((page) => page.data),
    }),
    getNextPageParam: (lastPage, allPages) => {
      const currentPage = allPages.length;
      const pageSize = payload.pageSize || 20;
      const totalResults = lastPage.data.totalResults;
      const totalPages = Math.ceil(totalResults / pageSize);

      return currentPage < totalPages ? currentPage + 1 : undefined;
    },
    enabled: !!import.meta.env.VITE_NEWS_API_KEY,
    throwOnError: (error: AxiosError<{ message: string }>) => {
      logger(error);
      return false;
    },
    ...params,
  });
};
