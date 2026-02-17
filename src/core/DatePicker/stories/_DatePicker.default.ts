import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { DatePicker } from '../DatePicker';

export type Story = StoryObj<typeof DatePicker>;

export const createMockOnChange = () => fn();

export const testLocales = {
  en: 'en-US',
  de: 'de-DE',
  fr: 'fr-FR',
} as const;

export const testDates = {
  today: Date.now(),
  yesterday: Date.now() - 86400000, // 1 day ago
  tomorrow: Date.now() + 86400000, // 1 day in future
  weekAgo: Date.now() - 604800000, // 1 week ago
  weekFromNow: Date.now() + 604800000, // 1 week from now
} as const;
