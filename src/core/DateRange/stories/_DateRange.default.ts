import { StoryObj } from '@storybook/react';
import moment from 'moment';
import { fn } from 'storybook/test';

import { DateRange } from '../DateRange';

export type Story = StoryObj<typeof DateRange>;

export const createMockOnChange = () => fn();

export const waitForDebounce = (ms: number = 100) => new Promise((resolve) => setTimeout(resolve, ms));

export const testDates = {
  today: moment().toDate(),
  weekAgo: moment().subtract(7, 'days').toDate(),
  monthAgo: moment().subtract(1, 'month').toDate(),
  threeDaysAgo: moment().subtract(3, 'days').toDate(),
  threeDaysLater: moment().add(3, 'days').toDate(),
} as const;

export const selectors = {
  container: 'data-testid="date-range-container"',
} as const;
