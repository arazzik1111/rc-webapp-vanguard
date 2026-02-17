import { StoryObj } from '@storybook/react';

import { ClipboardText } from '../ClipboardText';

export type Story = StoryObj<typeof ClipboardText>;

export const testData = {
  label: 'API Key',
  value: 'sk-1234567890abcdef',
} as const;
