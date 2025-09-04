import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(base: string, params?: Record<string, boolean>) {
  return twMerge(clsx(base, params));
}
