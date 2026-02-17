import React from 'react';
import { Story, defaultProps, mockColumns, mockRows, tableTest } from './_Table.default';
import { within, expect } from 'storybook/test';


const rowsWithBlur = [
  { ...mockRows[0], isBlurred: true },
  { ...mockRows[1], isBlurred: false },
  { ...mockRows[2], isBlurred: true },
  ...mockRows.slice(3),
];

export const WithBlurredRows: Story = {
  args: {
    ...defaultProps,
    data: {
      ...defaultProps.data,
      collections: rowsWithBlur,
    },
    blurredMessage: 'This content is blurred for demonstration',
    blurredCta: {
      text: 'Upgrade to unlock',
      cta: () => console.log('Upgrade clicked'),
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // allow extra rows for blurred message + mocked blurred rows
    await tableTest({
      canvasElement,
      expectedRows: rowsWithBlur.length,
      expectedColumns: mockColumns.length,
      exactRowCount: false,
    });

    // message exists
    const blurredMessage = canvas.getByText('This content is blurred for demonstration');
    await expect(blurredMessage).toBeInTheDocument();

    const ctaButton = canvas.getByRole('button', { name: /upgrade to unlock/i });
    await expect(ctaButton).toBeInTheDocument();
  },
};