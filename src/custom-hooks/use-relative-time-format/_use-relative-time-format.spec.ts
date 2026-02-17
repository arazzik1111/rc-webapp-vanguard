import { renderHook } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { useRelativeTimeFormat } from './use-relative-time-format';

describe('useRelativeTimeFormat', () => {
  const fixedNow = new Date('2023-01-01T00:00:00Z');

  beforeEach(() => {
    vi.setSystemTime(fixedNow);
  });

  describe('invalid/validation', () => {
    it('returns an error for invalid date strings', () => {
      const dateTime = 'not-a-date';
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({
        text: 'Invalid date',
        error: `Invalid date provided: ${dateTime}`,
      });
    });

    it('does not set an error for valid dates', () => {
      const dateTime = new Date('2023-01-01T00:00:00Z').toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current.error).toBeUndefined();
    });
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it('returns "recently" for undefined dateTime', () => {
    const { result } = renderHook(() => useRelativeTimeFormat(undefined));
    expect(result.current).toEqual({ text: 'recently' });
  });

  describe('past dates', () => {
    it('returns "a few seconds ago" for less than 60 seconds ago', () => {
      const dateTime = new Date(fixedNow.getTime() - 30 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({ text: 'a few seconds ago' });
    });

    it('returns "a minute ago" for exactly 1 minute ago', () => {
      const dateTime = new Date(fixedNow.getTime() - 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({ text: 'a minute ago' });
    });

    it('returns plural minutes for more than 1 minute ago', () => {
      const dateTime = new Date(fixedNow.getTime() - 5 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({
        text: '%number% minutes ago',
        replacements: { number: 5 },
      });
    });

    it('returns "an hour ago" for exactly 1 hour ago', () => {
      const dateTime = new Date(fixedNow.getTime() - 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({ text: 'an hour ago' });
    });

    it('returns plural hours for more than 1 hour ago', () => {
      const dateTime = new Date(fixedNow.getTime() - 5 * 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({
        text: '%number% hours ago',
        replacements: { number: 5 },
      });
    });

    it('returns "a day ago" for exactly 1 day ago', () => {
      const dateTime = new Date(fixedNow.getTime() - 24 * 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({ text: 'a day ago' });
    });

    it('returns plural days for more than 1 day ago', () => {
      const dateTime = new Date(fixedNow.getTime() - 5 * 24 * 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({
        text: '%number% days ago',
        replacements: { number: 5 },
      });
    });

    it('returns "a week ago" for exactly 1 week ago', () => {
      const dateTime = new Date(fixedNow.getTime() - 7 * 24 * 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({ text: 'a week ago' });
    });

    it('returns plural weeks for more than 1 week ago', () => {
      const dateTime = new Date(fixedNow.getTime() - 14 * 24 * 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({
        text: '%number% weeks ago',
        replacements: { number: 2 },
      });
    });

    it('returns "a month ago" for exactly 1 month ago', () => {
      const dateTime = new Date(fixedNow.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({ text: 'a month ago' });
    });

    it('returns plural months for more than 1 month ago', () => {
      const dateTime = new Date(fixedNow.getTime() - 60 * 24 * 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({
        text: '%number% months ago',
        replacements: { number: 2 },
      });
    });

    it('returns "a year ago" for exactly 1 year ago', () => {
      const dateTime = new Date(fixedNow.getTime() - 365 * 24 * 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({ text: 'a year ago' });
    });

    it('returns plural years for more than 1 year ago', () => {
      const dateTime = new Date(fixedNow.getTime() - 730 * 24 * 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({
        text: '%number% years ago',
        replacements: { number: 2 },
      });
    });
  });

  describe('future dates', () => {
    it('returns "in a few seconds" for less than 60 seconds in the future', () => {
      const dateTime = new Date(fixedNow.getTime() + 30 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({ text: 'in a few seconds' });
    });

    it('returns "in a minute" for exactly 1 minute in the future', () => {
      const dateTime = new Date(fixedNow.getTime() + 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({ text: 'in a minute' });
    });

    it('returns plural minutes for more than 1 minute in the future', () => {
      const dateTime = new Date(fixedNow.getTime() + 5 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({
        text: 'in %number% minutes',
        replacements: { number: 5 },
      });
    });

    it('returns "in an hour" for exactly 1 hour in the future', () => {
      const dateTime = new Date(fixedNow.getTime() + 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({ text: 'in an hour' });
    });

    it('returns plural hours for more than 1 hour in the future', () => {
      const dateTime = new Date(fixedNow.getTime() + 5 * 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({
        text: 'in %number% hours',
        replacements: { number: 5 },
      });
    });

    it('returns "in a day" for exactly 1 day in the future', () => {
      const dateTime = new Date(fixedNow.getTime() + 24 * 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({ text: 'in a day' });
    });

    it('returns plural days for more than 1 day in the future', () => {
      const dateTime = new Date(fixedNow.getTime() + 5 * 24 * 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({
        text: 'in %number% days',
        replacements: { number: 5 },
      });
    });

    it('returns "in a week" for exactly 1 week in the future', () => {
      const dateTime = new Date(fixedNow.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({ text: 'in a week' });
    });

    it('returns plural weeks for more than 1 week in the future', () => {
      const dateTime = new Date(fixedNow.getTime() + 14 * 24 * 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({
        text: 'in %number% weeks',
        replacements: { number: 2 },
      });
    });

    it('returns "in a month" for exactly 1 month in the future', () => {
      const dateTime = new Date(fixedNow.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({ text: 'in a month' });
    });

    it('returns plural months for more than 1 month in the future', () => {
      const dateTime = new Date(fixedNow.getTime() + 60 * 24 * 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({
        text: 'in %number% months',
        replacements: { number: 2 },
      });
    });

    it('returns "in a year" for exactly 1 year in the future', () => {
      const dateTime = new Date(fixedNow.getTime() + 365 * 24 * 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({ text: 'in a year' });
    });

    it('returns plural years for more than 1 year in the future', () => {
      const dateTime = new Date(fixedNow.getTime() + 730 * 24 * 60 * 60 * 1000).toISOString();
      const { result } = renderHook(() => useRelativeTimeFormat(dateTime));
      expect(result.current).toEqual({
        text: 'in %number% years',
        replacements: { number: 2 },
      });
    });
  });
});
