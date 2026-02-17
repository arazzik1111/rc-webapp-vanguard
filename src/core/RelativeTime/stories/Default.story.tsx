import React from 'react';
import { RelativeTime } from '../RelativeTime';
import { Story, testDates } from './_RelativeTime.default';

export const Default: Story = {
  args: {
    children: testDates.past.minutes.toISOString(),
  },
};
