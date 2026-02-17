import { StoryObj } from '@storybook/react';

import { AppBar } from '../AppBar';

export type Story = StoryObj<typeof AppBar>;

export const testToolbarContent = {
  default: 'Default AppBar',
  withTitle: 'Application Title',
  secondary: 'Secondary AppBar',
  fixed: 'Fixed AppBar',
  absolute: 'Absolute AppBar',
  sticky: 'Sticky AppBar',
  relative: 'Relative AppBar',
  defaultColor: 'Default Color AppBar',
  inheritColor: 'Inherit Color AppBar',
  transparent: 'Transparent AppBar',
  elevated: 'Elevated AppBar',
} as const;

export const selectors = {
  toolbar: "div[role='toolbar']",
  typography: 'div',
} as const;
