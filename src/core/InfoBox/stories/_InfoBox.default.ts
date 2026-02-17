import { StoryObj } from '@storybook/react';
import { fn } from 'storybook/test';

import { InfoBox } from '../InfoBox';

export type Story = StoryObj<typeof InfoBox>;

export const createMockAction = () => fn();

export const testData = {
  description: 'This is a test description for the InfoBox component.',
  title: 'Test Title',
  maxWidth: '500px',
  width: '400px',
};

export const selectors = {
  infoBoxContent: 'data-testid="info-box-content"',
  infoBoxIcon: 'data-testid="info-box-icon"',
  infoBoxTitle: 'data-testid="info-box-title"',
  infoBoxDescription: 'data-testid="info-box-description"',
  infoBoxCta: 'data-testid="info-box-cta"',
} as const;
