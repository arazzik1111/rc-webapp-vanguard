import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { Icon } from '../Icon';
import { IconNames } from '../IconNames';

export type Story = StoryObj<typeof Icon>;

export const testIcon = IconNames.check;

export const mockOnClick = fn();
export const mockOnMouseEnter = fn();
export const mockOnMouseLeave = fn();

export const testColors = {
  primary: '#007bff',
  secondary: '#6c757d',
  success: '#28a745',
  rgba: 'rgba(255, 0, 0, 0.8)',
  cssVar: '--p500',
} as const;

export const selectors = {
  icon: 'span',
  svg: 'svg',
} as const;
