import { StoryObj } from '@storybook/react';

import { ArcGauge } from '../ArcGauge';

export type Story = StoryObj<typeof ArcGauge>;

export const testValues = {
  zero: 0,
  fifty: 50,
  hundred: 100,
  ninety: 90,
} as const;

export const testColors = {
  primary: 'var(--s900)',
  secondary: 'var(--s400)',
  neutral1: 'var(--n500)',
  neutral2: 'var(--n300)',
} as const;

export const testTexts = {
  positive: 'Highly positive',
  neutral: 'Neutral',
  negative: 'Negative',
} as const;
