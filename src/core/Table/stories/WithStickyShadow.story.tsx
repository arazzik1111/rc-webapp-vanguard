import React from 'react';
import {
  Story,
  defaultProps,
  mockColumns,
  mockRows,
  tableTest,
} from './_Table.default';
import {within, expect} from 'storybook/test';

// Make the second column ("Email") sticky with the shadow
const shadowColumns = [
  {
    ...mockColumns[0],
    sticky: true,
    seamShadow: true
  },
  {
    ...mockColumns[1],
  },
  ...mockColumns.slice(2), // Role, Status, Age
];

export const WithStickyShadow: Story = {
  args: {
    ...defaultProps,
    data: {
      ...defaultProps.data,
      columns: shadowColumns,
      collections: mockRows,
    },
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);

    // Basic table structure (waits for lazy TableBody)
    await tableTest({
      canvasElement,
      expectedRows: mockRows.length,
      expectedColumns: mockColumns.length,
    });

    // Header labels should be there
    await expect(canvas.getByText('Name')).toBeInTheDocument();
    await expect(canvas.getByText('Email')).toBeInTheDocument();

    // Optional: sanity check a cell in the sticky-shadow column
    await expect(canvas.getByText('john@example.com')).toBeInTheDocument();
  },
};
