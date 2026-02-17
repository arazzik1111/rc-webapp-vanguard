import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { LinkConditional } from '../LinkConditional';

export type Story = StoryObj<typeof LinkConditional>;

export const createMockOnDeleteClick = () => fn();

export const testChildren = <span>Test Child Content</span>;

export const testLinkText = 'Click me';

export const testLinkProps = {
  href: 'https://example.com',
  target: '_blank' as const,
};
