import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { MultiSelectDrawer, MultiSelectDrawerOption } from '../MultiSelectDrawer';

export type Story = StoryObj<typeof MultiSelectDrawer>;

export const createMockOnSave = () => fn();
export const createMockOnClose = () => fn();

export const testOptions: MultiSelectDrawerOption[] = [
  {
    value: 'apples',
    label: 'Apples',
    status: {
      status: 'success',
      text: 'In Stock',
    },
  },
  {
    value: 'bananas',
    label: 'Bananas',
    status: {
      status: 'success',
      text: 'In Stock',
    },
  },
  {
    value: 'cherries',
    label: 'Cherries',
    status: {
      status: 'warning',
      text: 'Last few items',
    },
  },
  {
    value: 'disabled',
    label: 'Disabled Option',
    disabled: true,
  },
] satisfies MultiSelectDrawerOption[];

export const testValue = ['apples', 'bananas'];
