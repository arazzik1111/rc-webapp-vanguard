import { StoryObj } from '@storybook/react';

import { Collapse } from '../Collapse';

export type Story = StoryObj<typeof Collapse>;

export const testData = {
  children: 'Collapsible content',
} as const;
