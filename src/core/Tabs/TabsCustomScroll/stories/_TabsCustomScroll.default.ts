import { StoryObj } from '@storybook/react';

import { TabsCustomScroll } from '../TabsCustomScroll';

export type Story = StoryObj<typeof TabsCustomScroll>;

export const selectors = {
  scrollButton: '[data-testid="action"]',
} as const;
