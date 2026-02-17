import React from 'react';
import { Story, defaultProps, mockColumns, mockRows, tableTest } from './_Table.default';

export const Default: Story = {
  args: {
    ...defaultProps,
  },
  play: async ({ canvasElement }) => {
    await tableTest({
      canvasElement,
      expectedRows: mockRows.length,
      expectedColumns: mockColumns.length,
    });
  },
};