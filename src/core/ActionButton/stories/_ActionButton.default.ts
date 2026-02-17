import { StoryObj } from '@storybook/react';

import { ActionButton } from '../ActionButton';

export type Story = StoryObj<typeof ActionButton>;

export const selectors = {
  button: 'ActionButton_Button',
} as const;
