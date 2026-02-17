import { StoryObj } from '@storybook/react';

import { AnimatedConditional } from '../AnimatedConditional';

export type Story = StoryObj<typeof AnimatedConditional>;

export const testContent = (
  <div style={{ padding: '20px', border: '1px solid var(--n100)', backgroundColor: 'var(--n50)' }}>
    Animated Content
  </div>
);

export const animationConfigs = {
  growWidth: {
    fromWidth: 400,
    toWidth: 100,
  },
  growHeight: {
    fromHeight: 200,
    toHeight: 50,
  },
} as const;
