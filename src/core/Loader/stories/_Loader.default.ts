import { StoryObj } from '@storybook/react';

import { Loader } from '../Loader';

export type Story = StoryObj<typeof Loader>;

export const testIds = {
  loader: 'loader',
} as const;
