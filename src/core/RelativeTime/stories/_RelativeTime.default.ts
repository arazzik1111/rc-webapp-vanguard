import { rcWindow } from '@stores/window.store';
import { StoryObj } from '@storybook/react';

import { RelativeTime } from '../RelativeTime';

export type Story = StoryObj<typeof RelativeTime>;

export const createTestDate = (
  offset: {
    years?: number;
    months?: number;
    weeks?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  } = {},
) => {
  const now = new Date();
  const target = new Date(now);

  if (offset.years) target.setFullYear(now.getFullYear() + offset.years);
  if (offset.months) target.setMonth(now.getMonth() + offset.months);
  if (offset.weeks) target.setDate(now.getDate() + offset.weeks * 7);
  if (offset.days) target.setDate(now.getDate() + offset.days);
  if (offset.hours) target.setHours(now.getHours() + offset.hours);
  if (offset.minutes) target.setMinutes(now.getMinutes() + offset.minutes);
  if (offset.seconds) target.setSeconds(now.getSeconds() + offset.seconds);

  return target;
};

export const testDates = {
  past: {
    fewSeconds: createTestDate({ seconds: -10 }),
    minute: createTestDate({ minutes: -1 }),
    minutes: createTestDate({ minutes: -5 }),
    hour: createTestDate({ hours: -1 }),
    hours: createTestDate({ hours: -3 }),
    day: createTestDate({ days: -1 }),
    days: createTestDate({ days: -5 }),
    week: createTestDate({ weeks: -1 }),
    weeks: createTestDate({ weeks: -2 }),
    month: createTestDate({ months: -1 }),
    months: createTestDate({ months: -3 }),
    year: createTestDate({ years: -1 }),
    years: createTestDate({ years: -2 }),
  },
  future: {
    fewSeconds: createTestDate({ seconds: 10 }),
    minute: createTestDate({ minutes: 1 }),
    minutes: createTestDate({ minutes: 5 }),
    hour: createTestDate({ hours: 1 }),
    hours: createTestDate({ hours: 3 }),
    day: createTestDate({ days: 1 }),
    days: createTestDate({ days: 5 }),
    week: createTestDate({ weeks: 1 }),
    weeks: createTestDate({ weeks: 2 }),
    month: createTestDate({ months: 1 }),
    months: createTestDate({ months: 3 }),
    year: createTestDate({ years: 1 }),
    years: createTestDate({ years: 2 }),
  },
} as const;

export const TRANSLATIONS = {
  en: {
    // Relative time phrases - past
    'a few seconds ago': 'a few seconds ago',
    'a minute ago': 'a minute ago',
    '%number% minutes ago': '%number% minutes ago',
    'an hour ago': 'an hour ago',
    '%number% hours ago': '%number% hours ago',
    'a day ago': 'a day ago',
    '%number% days ago': '%number% days ago',
    'a week ago': 'a week ago',
    '%number% weeks ago': '%number% weeks ago',
    'a month ago': 'a month ago',
    '%number% months ago': '%number% months ago',
    'a year ago': 'a year ago',
    '%number% years ago': '%number% years ago',
    // Relative time phrases - future
    'in a few seconds': 'in a few seconds',
    'in a minute': 'in a minute',
    'in %number% minutes': 'in %number% minutes',
    'in an hour': 'in an hour',
    'in %number% hours': 'in %number% hours',
    'in a day': 'in a day',
    'in %number% days': 'in %number% days',
    'in a week': 'in a week',
    'in %number% weeks': 'in %number% weeks',
    'in a month': 'in a month',
    'in %number% months': 'in %number% months',
    'in a year': 'in a year',
    'in %number% years': 'in %number% years',
    // Other
    recently: 'recently',
    'Invalid date': 'Invalid date',
  },
  de: {
    // Relative time phrases - past
    'a few seconds ago': 'vor ein paar Sekunden',
    'a minute ago': 'vor einer Minute',
    '%number% minutes ago': 'vor %number% Minuten',
    'an hour ago': 'vor einer Stunde',
    '%number% hours ago': 'vor %number% Stunden',
    'a day ago': 'vor einem Tag',
    '%number% days ago': 'vor %number% Tagen',
    'a week ago': 'vor einer Woche',
    '%number% weeks ago': 'vor %number% Wochen',
    'a month ago': 'vor einem Monat',
    '%number% months ago': 'vor %number% Monaten',
    'a year ago': 'vor einem Jahr',
    '%number% years ago': 'vor %number% Jahren',
    // Relative time phrases - future
    'in a few seconds': 'in ein paar Sekunden',
    'in a minute': 'in einer Minute',
    'in %number% minutes': 'in %number% Minuten',
    'in an hour': 'in einer Stunde',
    'in %number% hours': 'in %number% Stunden',
    'in a day': 'in einem Tag',
    'in %number% days': 'in %number% Tagen',
    'in a week': 'in einer Woche',
    'in %number% weeks': 'in %number% Wochen',
    'in a month': 'in einem Monat',
    'in %number% months': 'in %number% Monaten',
    'in a year': 'in einem Jahr',
    'in %number% years': 'in %number% Jahren',
    // Other
    recently: 'kürzlich',
    'Invalid date': 'Ungültiges Datum',
  },
  es: {
    // Relative time phrases - past
    'a few seconds ago': 'hace unos segundos',
    'a minute ago': 'hace un minuto',
    '%number% minutes ago': 'hace %number% minutos',
    'an hour ago': 'hace una hora',
    '%number% hours ago': 'hace %number% horas',
    'a day ago': 'hace un día',
    '%number% days ago': 'hace %number% días',
    'a week ago': 'hace una semana',
    '%number% weeks ago': 'hace %number% semanas',
    'a month ago': 'hace un mes',
    '%number% months ago': 'hace %number% meses',
    'a year ago': 'hace un año',
    '%number% years ago': 'hace %number% años',
    // Relative time phrases - future
    'in a few seconds': 'en unos segundos',
    'in a minute': 'en un minuto',
    'in %number% minutes': 'en %number% minutos',
    'in an hour': 'en una hora',
    'in %number% hours': 'en %number% horas',
    'in a day': 'en un día',
    'in %number% days': 'en %number% días',
    'in a week': 'en una semana',
    'in %number% weeks': 'en %number% semanas',
    'in a month': 'en un mes',
    'in %number% months': 'en %number% meses',
    'in a year': 'en un año',
    'in %number% years': 'en %number% años',
    // Other
    recently: 'recientemente',
    'Invalid date': 'Fecha inválida',
  },
};

declare global {
  interface Window {
    TranslationsData: Record<string, string>;
  }
}

export const setLanguageTranslations = (lang: keyof typeof TRANSLATIONS) => {
  rcWindow.TranslationsData = TRANSLATIONS[lang];
};

setLanguageTranslations('en'); // Default to English

export { TextTypes } from '@vanguard/Text/Text';
