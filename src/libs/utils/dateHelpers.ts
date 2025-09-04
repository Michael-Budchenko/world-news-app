import { addDays, format, formatDuration, intervalToDuration, startOfWeek } from 'date-fns';
import { uk } from 'date-fns/locale/uk';

import { dateFormat } from '@/config/environments/constans';

export type TIsoDateString = string;

export const formatHoursMinutes = (isoString: TIsoDateString): string => {
  const date = new Date(isoString);

  return format(date, dateFormat.time);
};

export const formatShortMonthDayOrder = (isoString: TIsoDateString): string => {
  const date = new Date(isoString);
  return format(date, dateFormat.shortMonthDayOrder, {
    locale: uk,
  });
};

export const formatFullDateTime = (isoString: TIsoDateString): string => {
  const date = new Date(isoString);
  return format(date, dateFormat.fullDateTime);
};

export const formatFullDate = (isoString: TIsoDateString): string => {
  const date = new Date(isoString);
  return format(date, dateFormat.fullDate);
};

export const formatMonthYear = (isoString: TIsoDateString): string => {
  const date = new Date(isoString);
  return format(date, dateFormat.monthYear, {
    locale: uk,
  });
};

export const formatDayMonthShort = (isoString: TIsoDateString): string => {
  const date = new Date(isoString);
  return format(date, dateFormat.dayMonthShort, {
    locale: uk,
  });
};

export const formatWeekDayShort = (isoString: TIsoDateString): string => {
  const date = new Date(isoString);
  return format(date, dateFormat.weekDayShort, {
    locale: uk,
  });
};

export function getWeekDays(dayOfWeek: Date | null): Date[] {
  const now = dayOfWeek ?? new Date();

  const startOfCurrentWeek = startOfWeek(now, { weekStartsOn: 1 });

  const dayNum = startOfCurrentWeek.getDate();
  startOfCurrentWeek.setUTCDate(dayNum);
  startOfCurrentWeek.setUTCHours(0, 0, 0, 0);

  const weekDays: Date[] = [];

  for (let i = 0; i <= 6; i++) {
    const day = addDays(startOfCurrentWeek, i);
    weekDays.push(day);
  }

  return weekDays;
}

export function isSameDays(a: Date, b: Date): boolean {
  const sameMonth = a.getMonth() === b.getMonth();
  const sameDay = a.getDate() === b.getDate();
  const sameYear = a.getFullYear() === b.getFullYear();

  return sameMonth && sameDay && sameYear;
}

export function getCalculateDuration(startDate: Date, endDate: Date): string {
  const duration = intervalToDuration({ start: startDate, end: endDate });

  const formattedDuration = formatDuration(duration, { locale: uk });
  return formattedDuration;
}

export function parseTimeDay(time: string, day: number) {
  const [hours, minutes] = time.split(':').map(Number);
  const date = new Date(2024, 0, day);
  date.setHours(hours, minutes, 0, 0);
  return date;
}
