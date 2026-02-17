import { StoryObj } from '@storybook/react';

import { AvatarStack } from '../AvatarStack';

export type Story = StoryObj<typeof AvatarStack>;

export const testItems = [
  {
    image: 'https://picsum.photos/32/32?random=1',
  },
  {
    image: 'https://picsum.photos/32/32?random=2',
  },
  {
    image: 'https://picsum.photos/32/32?random=3',
    borderColor: 'var(--a2900)',
  },
  {
    image: 'https://picsum.photos/32/32?random=4',
  },
  {
    image: 'https://picsum.photos/32/32?random=5',
    borderColor: 'var(--a2900)',
  },
] as const;

export const singleItem = [
  {
    image: 'https://picsum.photos/32/32?random=1',
  },
] as const;

export const emptyItems = [] as const;

export const manyItems = Array.from({ length: 10 }, (_, i) => ({
  image: `https://picsum.photos/32/32?random=${i + 1}`,
  borderColor: i % 2 === 0 ? 'var(--a2900)' : undefined,
}));
