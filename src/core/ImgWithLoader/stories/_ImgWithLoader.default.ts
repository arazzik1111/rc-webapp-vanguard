import { StoryObj } from '@storybook/react';

import { ImgWithLoader } from '../ImgWithLoader';

export type Story = StoryObj<typeof ImgWithLoader>;

export const testImageSrc = 'https://via.placeholder.com/300x200?text=Test+Image';
export const testAlt = 'Test image';
export const testWidth = '300px';
export const testHeight = '200px';
export const testAdditionalText = 'Sample Media';

export const selectors = {
  skeleton: '[data-testid="Skeleton"]',
  image: 'img',
  mediaTypeInfo: '.mediaTypeInfo',
  additionalText: '.mediaTypeInfo',
} as const;
