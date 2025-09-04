import { axiosClient } from '@/libs/services/axios';
import { convertParamsToString } from '@/libs/utils/params';
import { NewsCategory } from '@/types/news';
import { NewsApiParams, NewsApiTypes } from './types';

const PROXY_URL = 'https://corsproxy.io/?';
const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

const api: NewsApiTypes = {
  getTopHeadlines: async (payload: NewsApiParams = {}) => {
    const params = {
      category: payload.category || 'general',
      country: payload.country || 'us',
      page: payload.page || 1,
      pageSize: payload.pageSize || 20,
      apiKey: API_KEY,
      ...payload,
    };

    const stringParams = convertParamsToString(params);
    const queryString = new URLSearchParams(stringParams).toString();
    const url = `${PROXY_URL}${encodeURIComponent(`${BASE_URL}/top-headlines?${queryString}`)}`;

    return axiosClient.get(url);
  },

  getEverything: async (payload: NewsApiParams = {}) => {
    const params = {
      q: payload.q || 'news',
      page: payload.page || 1,
      pageSize: payload.pageSize || 20,
      language: payload.language || 'en',
      apiKey: API_KEY,
      ...payload,
    };

    const stringParams = convertParamsToString(params);
    const queryString = new URLSearchParams(stringParams).toString();
    const url = `${PROXY_URL}${encodeURIComponent(`${BASE_URL}/everything?${queryString}`)}`;

    return axiosClient.get(url);
  },

  getSources: async () => {
    const params = { apiKey: API_KEY };

    const stringParams: Record<string, string> = Object.fromEntries(
      Object.entries(params).map(([key, value]) => [
        key,
        value !== null && value !== undefined ? String(value) : '',
      ])
    );

    const queryString = new URLSearchParams(stringParams).toString();
    const url = `${PROXY_URL}${encodeURIComponent(`${BASE_URL}/sources?${queryString}`)}`;

    return axiosClient.get(url);
  },

  getNewsByCategory: (category: NewsCategory, payload: NewsApiParams = {}) => {
    return api.getTopHeadlines({ ...payload, category });
  },

  searchNews: (query: string, payload: NewsApiParams = {}) => {
    return api.getEverything({ ...payload, q: query });
  },
};

export default api;
