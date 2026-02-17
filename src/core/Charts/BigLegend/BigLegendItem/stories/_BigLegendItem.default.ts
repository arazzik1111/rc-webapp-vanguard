import { StoryObj } from '@storybook/react';
import { IconNames } from '@vanguard/Icon/IconNames';

import { BigLegendItem } from '../BigLegendItem';

export type Story = StoryObj<typeof BigLegendItem>;

// Common test utilities
export const waitForElement = (ms: number = 100) => new Promise((resolve) => setTimeout(resolve, ms));

// Base args that can be reused across stories
export const baseArgs = {
  currentNumber: 110,
  previousNumber: 105,
  maxWidth: '400px',
  showPercentage: false,
  showBadge: true,
  showPreviousNumber: true,
  showPreviousNumberText: true,
  previousNumberText: 'previously',
  roundNumbers: true,
  iconName: IconNames.phone,
  iconFillColor: '--p400',
  title: 'Website',
  description: 'Website clicks made from our Business Profile',
  testId: 'default-big-legend-item',
} as const;

// Common selectors for testing
export const selectors = {
  formattedNumber: 'BigLegendItem_FormattedNumber_TestId',
  avatarPattern: /avatar-.*-test-id/,
} as const;

// Test data constants
export const testData = {
  currency: {
    currentNumber: 1250.75,
    previousNumber: 1100.5,
  },
  negative: {
    currentNumber: 95,
    previousNumber: 110,
  },
  outOfSeries: {
    totalNumberSeries: ['500', '110'],
  },
} as const;
