import { StoryObj } from '@storybook/react';

import { LineAlert } from '../LineAlert';

export type Story = StoryObj<typeof LineAlert>;

export const testMessages = {
  default: 'This is a default line alert message',
  danger: 'This is a danger alert message',
  warning: 'This is a warning alert message',
  success: 'This is a success alert message',
} as const;
