import React from 'react';
import { Story, defaultProps, mockColumns, mockRows, tableTest } from './_Table.default';
import { within, expect } from 'storybook/test';

export const WithoutFooter: Story = {
  args: {
    ...defaultProps,
    hideFooter: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await tableTest({
      canvasElement,
      expectedRows: mockRows.length,
      expectedColumns: mockColumns.length,
    });

    // There should be no pagination buttons at all
    const nextButton = canvas.queryByRole('button', { name: /next/i });
    const prevButton = canvas.queryByRole('button', { name: /previous/i });

    await expect(nextButton).toBeNull();
    await expect(prevButton).toBeNull();
  },
};
