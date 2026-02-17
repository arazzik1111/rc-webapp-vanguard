import { StoryObj } from '@storybook/react';

import { ImgLoader } from '../ImgLoader';

export type Story = StoryObj<typeof ImgLoader>;

export const testTitle = 'Loading...';
export const testDescription = 'Please wait while we load your content.';
export const testReplacements = {
  count: '5',
  item: 'images',
} as const;

export const selectors = {
  title: '[data-testid="title"]',
  description: '[data-testid="description"]',
} as const;
