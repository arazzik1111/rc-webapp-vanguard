import { StoryObj } from '@storybook/react';

import { Alert } from '../Alert';

export type Story = StoryObj<typeof Alert>;

export const testMessages = {
  info: 'This is an informational alert',
  success: 'Operation completed successfully',
  warn: 'Warning: Please check your input',
  danger: 'Error: Something went wrong',
} as const;
