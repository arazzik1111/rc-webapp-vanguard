import React from 'react';
import { within, userEvent, expect } from 'storybook/test';
import { Story } from './_DateRangePicker.default';

export const InvalidInterval: Story = {
  name: 'Invalid Interval (Invalid Dates)',
  args: {
    startDate: new Date('invalid'), // Invalid Date to trigger the error
    endDate: new Date('invalid'),
    testId: 'invalid-interval-test',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Click on the date range picker to potentially trigger the error
    const datePickerInput = canvas.getByTestId('invalid-interval-test-datepicker-reference-input');
    await userEvent.click(datePickerInput);

    // Wait for any processing that might trigger the date-fns error
    await new Promise(resolve => setTimeout(resolve, 500));

    // The invalid interval (end < start) passed as props should cause issues when the calendar tries to render
  },
};