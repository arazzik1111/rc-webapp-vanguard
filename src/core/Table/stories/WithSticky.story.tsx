import React from 'react';
import {
  Story,
  mockColumns,
  manyRows,
  tableTest,
} from './_Table.default';
import {within, expect} from 'storybook/test';

// Make only the first column sticky (no shadow)
const stickyColumns = [
  {...mockColumns[0], sticky: true}, // Name
  ...mockColumns.slice(1),
];

export const WithSticky: Story = {
  args: {
    data: {
      columns: stickyColumns,
      collections: manyRows,
    },
    pagination: {
      total: manyRows.length,
      limit: manyRows.length,
      offset: 0,
      page: 1,
      minPage: 1,
      maxPage: 1,
      step: 1,
    },
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);

    // Basic structure (waits for lazy TableBody + checks headers/rows)
    await tableTest({
      canvasElement,
      expectedRows: manyRows.length,
      expectedColumns: stickyColumns.length,
    });

    // Sanity: header + a value from the sticky column exist
    await expect(canvas.getByText('Name')).toBeInTheDocument();
    await expect(canvas.getByText('John Doe')).toBeInTheDocument();
  },
};
