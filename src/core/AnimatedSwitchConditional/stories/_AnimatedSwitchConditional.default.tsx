import { StoryObj } from '@storybook/react';

import { AnimatedSwitchConditional } from '../AnimatedSwitchConditional';

export type Story = StoryObj<typeof AnimatedSwitchConditional>;

export const testContent = (
  <div style={{ padding: '20px', border: '1px solid var(--n100)', backgroundColor: 'var(--n50)' }}>
    Animated Content
  </div>
);

export const animationTypes = [
  'none',
  'fade',
  'slide',
  'zoom',
  'flip',
  'rotate',
  'slideRight',
  'slideUp',
  'slideDown',
  'scale',
  'bounce',
] as const;
