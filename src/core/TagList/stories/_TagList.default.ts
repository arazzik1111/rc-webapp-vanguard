import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { TagList } from '../TagList';

export type Story = StoryObj<typeof TagList>;

export const mockDeleteCallback = fn();

export const defaultTags = [
  { id: 1, text: 'Tag 1' },
  { id: 2, text: 'Tag 2' },
  { id: 3, text: 'Tag 3' },
];
