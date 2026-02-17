import { StoryObj } from '@storybook/react';

import { ActionBar } from '../ActionBar';

export type Story = StoryObj<typeof ActionBar>;

export const selectors = {
  container: 'ActionBar_Container',
} as const;
