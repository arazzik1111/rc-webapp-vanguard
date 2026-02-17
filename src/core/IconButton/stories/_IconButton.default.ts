import { StoryObj } from '@storybook/react';
import { IconNames } from '@vanguard/Icon/IconNames';
import { fn } from 'storybook/test';

import { IconButton } from '../IconButton';

export type Story = StoryObj<typeof IconButton>;

export const createMockOnHover = (): ReturnType<typeof fn> => fn();

export const createMockOnClick = (): ReturnType<typeof fn> => fn();

export const testIcons = {
  star: IconNames.star,
  heart: IconNames.home,
  check: IconNames.check,
} as const;

export const testMessages = {
  tooltip: 'This is a tooltip',
  empty: '',
} as const;
