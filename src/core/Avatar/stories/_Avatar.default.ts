import { StoryObj } from '@storybook/react';

import { Avatar } from '../Avatar';

export type Story = StoryObj<typeof Avatar>;

export const testImageUrl = 'https://picsum.photos/200/300';
export const testIcon = 'gmb';
export const testName = 'Test Name';
export const testFullName = '+10';
export const testBgColor = '--p500';
export const sizes = ['small', 'medium', 'medium-40', 'medium-large', 'large'] as const;
