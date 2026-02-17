import React from 'react';
import {
  Story,
  defaultProps,
  mockColumns,
  mockRows,
  tableTest,
} from './_Table.default';
import { within, expect } from 'storybook/test';

const rowsAllBlurred = mockRows.map(row => ({ ...row, isBlurred: true }));

export const WithHiddenBlurredRows: Story = {
  args: {
    ...defaultProps,
    data: {
      ...defaultProps.data,
      collections: rowsAllBlurred,
    },
    blurredMessage: 'This is hidden',
    hideBlurredMessage: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Table is structurally present, but no visible blurred rows or message
    await tableTest({
      canvasElement,
      expectedRows: 0, // no visible rows
      expectedColumns: mockColumns.length,
      exactRowCount: false, // structure may still have header row
    });

    // There should be no blurred message text
    const message = canvas.queryByText('This is hidden');
    await expect(message).toBeNull();
  },
};
