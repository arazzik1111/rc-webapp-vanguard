import { useMemo } from 'react';

import { isValidDate } from '../../helpers/date-helpers';
import { formatTextWithAffixes } from '../../helpers/format-text-with-affixes';

export interface RelativeTimeFormat {
  text: string;
  replacements?: Record<string, string | number>;
  error?: string;
}

export const useRelativeTimeFormat = (dateTime?: string): RelativeTimeFormat => {
  return useMemo(() => {
    if (!dateTime) {
      return { text: 'recently' };
    }

    // Validate incoming date
    if (!isValidDate(dateTime)) {
      return { text: 'Invalid date', error: `Invalid date provided: ${dateTime}` };
    }

    const now = new Date();
    const target = new Date(dateTime);
    const diffInSeconds = Math.floor((target.getTime() - now.getTime()) / 1000);
    const isFuture = diffInSeconds > 0;
    const absDiffInSeconds = Math.abs(diffInSeconds);
    const prefix = isFuture ? 'in ' : '';
    const suffix = isFuture ? '' : ' ago';

    // Seconds
    if (absDiffInSeconds < 60) {
      const { text } = formatTextWithAffixes('a few seconds', prefix, suffix);
      return { text };
    }

    // Minutes
    const absDiffInMinutes = Math.floor(absDiffInSeconds / 60);
    if (absDiffInMinutes === 1) {
      const { text } = formatTextWithAffixes('a minute', prefix, suffix);
      return { text };
    }
    if (absDiffInMinutes < 60) {
      const { text } = formatTextWithAffixes('%number% minutes', prefix, suffix);
      return { text, replacements: { number: absDiffInMinutes } };
    }

    // Hours
    const absDiffInHours = Math.floor(absDiffInMinutes / 60);
    if (absDiffInHours === 1) {
      const { text } = formatTextWithAffixes('an hour', prefix, suffix);
      return { text };
    }
    if (absDiffInHours < 24) {
      const { text } = formatTextWithAffixes('%number% hours', prefix, suffix);
      return { text, replacements: { number: absDiffInHours } };
    }

    // Days
    const absDiffInDays = Math.floor(absDiffInHours / 24);
    if (absDiffInDays === 1) {
      const { text } = formatTextWithAffixes('a day', prefix, suffix);
      return { text };
    }
    if (absDiffInDays < 7) {
      const { text } = formatTextWithAffixes('%number% days', prefix, suffix);
      return { text, replacements: { number: absDiffInDays } };
    }

    // Weeks
    if (absDiffInDays < 30) {
      const absDiffInWeeks = Math.floor(absDiffInDays / 7);
      if (absDiffInWeeks === 1) {
        const { text } = formatTextWithAffixes('a week', prefix, suffix);
        return { text };
      }
      const { text } = formatTextWithAffixes('%number% weeks', prefix, suffix);
      return { text, replacements: { number: absDiffInWeeks } };
    }

    // Months
    // NOTE: months are an approximation here (30 days per month).
    // This hook intentionally returns a human-friendly, approximate
    // relative time (e.g. "2 months") rather than an exact calendar
    const absDiffInMonths = Math.floor(absDiffInDays / 30);
    if (absDiffInMonths === 1) {
      const { text } = formatTextWithAffixes('a month', prefix, suffix);
      return { text };
    }
    if (absDiffInMonths < 12) {
      const { text } = formatTextWithAffixes('%number% months', prefix, suffix);
      return { text, replacements: { number: absDiffInMonths } };
    }

    // Years
    const absDiffInYears = Math.floor(absDiffInMonths / 12);
    if (absDiffInYears === 1) {
      const { text } = formatTextWithAffixes('a year', prefix, suffix);
      return { text };
    }
    const { text } = formatTextWithAffixes('%number% years', prefix, suffix);
    return { text, replacements: { number: absDiffInYears } };
  }, [dateTime]);
};
