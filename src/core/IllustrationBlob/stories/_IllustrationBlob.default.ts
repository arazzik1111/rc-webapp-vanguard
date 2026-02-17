import { StoryObj } from '@storybook/react';
import { IconNames } from '@vanguard/Icon/IconNames';
import { SVGObject } from '@custom-hooks/use-dynamic-import/use-dynamic-import';
import { IllustrationBlob } from '../IllustrationBlob';

export type Story = StoryObj<typeof IllustrationBlob>;

export const testSVGPaths = {
  postsPreview: 'engagement/posts_preview',
  postsPreviewSocial: 'engagement/posts_preview_social',
} as const;

export const testSVGObjects: Record<keyof typeof testSVGPaths, SVGObject> = {
  postsPreview: {
    SvgIcon: 'engagement/posts_preview.svg',
    loading: false,
    error: null,
  },
  postsPreviewSocial: {
    SvgIcon: 'engagement/posts_preview_social.svg',
    loading: false,
    error: null,
  }
} as const;

export const testIcons = {
  post: IconNames.post,
  card: IconNames.card,
} as const;

export const testColors = {
  primary: '#e50000',
  secondary: '#6c757d',
} as const;

export const testImageAlignments = {
  centered: { top: 0, left: 0 },
  offset: { top: 10, left: 20 },
} as const;
