import { StoryObj } from '@storybook/react';
import { SocialMediaLink } from '../SocialMediaLink';

export type Story = StoryObj<typeof SocialMediaLink>;

export const testUrls = {
  facebook: 'https://facebook.com/example',
  instagram: 'https://instagram.com/example',
  youtube: 'https://youtube.com/@example',
  linkedin: 'https://linkedin.com/company/example',
  pinterest: 'https://pinterest.com/example',
  tiktok: 'https://tiktok.com/@example',
  twitter: 'https://twitter.com/example',
} as const;

export const testNetworks = {
  facebook: 'facebook',
  instagram: 'instagram',
  youtube: 'youtube',
  linkedin: 'linkedin',
  pinterest: 'pinterest',
  tiktok: 'tiktok',
  twitter: 'twitter',
} as const;