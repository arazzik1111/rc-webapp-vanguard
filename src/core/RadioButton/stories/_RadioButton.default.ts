import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { RadioButton } from '../RadioButton';

export type Story = StoryObj<typeof RadioButton>;

export const mockOnChange = fn();

export const testOptions = {
  default: 'default',
  selected: 'selected',
  bordered: 'bordered',
  success: 'success',
  disabled: 'disabled',
  replacement: 'replacement',
  withChildren: 'with-children',
} as const;
