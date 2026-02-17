import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { DragAndDropFile } from '../DragAndDropFile';

export type Story = StoryObj<typeof DragAndDropFile>;

export const createMockOnFileDrop = () => fn();

export const selectors = {
  dropzone: 'div[class*="dropzone"]',
  label: 'label',
  input: 'input[type="file"]',
} as const;
