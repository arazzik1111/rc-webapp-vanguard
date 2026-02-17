import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { RcCropper } from '../Cropper';

export type Story = StoryObj<typeof RcCropper>;

export const createMockClose = () => fn();

export const createMockSave = () => fn();

export const sampleImageBlob = new Blob(['sample image data'], { type: 'image/jpeg' });

export const testIds = {
  cropper: 'cropper',
} as const;
