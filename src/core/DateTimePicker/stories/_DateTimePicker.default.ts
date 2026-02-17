import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { DateTimePicker } from '../DateTimePicker';

export type Story = StoryObj<typeof DateTimePicker>;

export const createMockOnChange = () => fn();

export const testLocales = {
  en: 'en-US',
  de: 'de-DE',
} as const;

export const testDates = {
  today: Math.floor(Date.now() / 1000),
  tomorrow: Math.floor((Date.now() + 86400000) / 1000),
} as const;

export const testTimes = {
  morning: '09:00',
  evening: '18:00',
} as const;
