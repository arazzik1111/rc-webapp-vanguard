import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { ActionCard } from '../ActionCard';
import { ActionCardActionProps } from '../ActionCardActions/ActionCardAction/ActionCardAction';

export type Story = StoryObj<typeof ActionCard>;

export const createMockAction = (label: string, type?: 'primary' | 'secondary'): ActionCardActionProps => ({
  label,
  cta: fn(() => console.log(`${label} clicked`)),
  type,
});

export const mockActions: ActionCardActionProps[] = [
  createMockAction('Primary Action 1', 'primary'),
  createMockAction('Primary Action 2', 'primary'),
  createMockAction('Secondary Action', 'secondary'),
];

export const testChildren = <div>Test Content</div>;

export const selectors = {
  card: 'ActionCardTestId',
  cardBody: '.cardBody',
} as const;
