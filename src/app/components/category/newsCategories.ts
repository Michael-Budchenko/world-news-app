import { NewsCategory } from '@/types/news';
import {
  Briefcase,
  Film,
  Heart,
  Laptop,
  LucideProps,
  Microscope,
  Newspaper,
  Volleyball,
} from 'lucide-react';
import React from 'react';

export interface NewsCategoryConfig {
  id: NewsCategory;
  name: string;
  icon: React.ComponentType<LucideProps>;
}

export const newsCategories: NewsCategoryConfig[] = [
  { id: 'general', name: 'General', icon: Newspaper },
  { id: 'business', name: 'Business', icon: Briefcase },
  { id: 'entertainment', name: 'Entertainment', icon: Film },
  { id: 'health', name: 'Health', icon: Heart },
  { id: 'science', name: 'Science', icon: Microscope },
  { id: 'sports', name: 'Sports', icon: Volleyball },
  { id: 'technology', name: 'Technology', icon: Laptop },
];
