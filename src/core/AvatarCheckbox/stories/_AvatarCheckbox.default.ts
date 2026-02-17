import { StoryObj } from '@storybook/react';
import { AvatarIconMap } from '@vanguard/Avatar/Avatar.enum';
import { fn } from 'storybook/test';

import { AvatarCheckbox } from '../AvatarCheckbox';

export type Story = StoryObj<typeof AvatarCheckbox>;

export const createMockOnChange = () => fn();

export const testIcons = {
  facebook: AvatarIconMap.facebook,
  instagram: AvatarIconMap.instagram,
} as const;

export const selectors = {
  avatarCheckboxContainer: 'avatar-checkbox-container',
  avatarCheckboxTestId: 'avatar-checkbox-test-id',
  vanguardCheckboxContainer: 'vanguard-checkbox-container-test-id',
} as const;

export const waitForDebounce = (ms: number = 100) => new Promise((resolve) => setTimeout(resolve, ms));
