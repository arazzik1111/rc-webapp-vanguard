import { StoryObj } from '@storybook/react';

export type Story = StoryObj<any>;

export const testCloseFn = (response: any): void => console.log('Modal closed with response:', response);

export const testTitle = 'Test Modal';

export const testMessage = 'This is a test message';

export const testPositiveCta = 'Confirm';

export const testNegativeCta = 'Cancel';

export const testHeaderType = 'default' as const;

export const testPositiveIconLeft = 'check' as any;

export const testReplacements = { key: 'value' };

export const testHideHeaderCloseBtn = false;

export const testCustomNegativeFn = () => console.log('Custom negative action');

export const testHideNegativeBtn = false;

export const testLoadingAnimation = 'default' as const;

export const testHeaderTitle = 'Loading...';
