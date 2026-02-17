import { StoryObj } from '@storybook/react';
import { IconNames } from '@vanguard/Icon/IconNames';

import { AssetPreloader } from '../AssetPreloader';

export type Story = StoryObj<typeof AssetPreloader>;

export const testIcons: IconNames[] = [IconNames.search, IconNames.close, IconNames.check];

export const testAvatars: string[] = ['google', 'facebook', 'twitter'];

export const testImages: string[] = ['https://example.com/image1.jpg', 'https://example.com/image2.png'];
