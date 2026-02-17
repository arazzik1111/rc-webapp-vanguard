import React from 'react';
import { Story, defaultProps, mockColumns, mockRows, tableTest } from './_Table.default';
import headerStyles from "../TableHeader/TableHeader.module.scss"
import cellStyles from "../TableCell/TableCell.module.scss"
import { within, expect } from 'storybook/test';

export const WithGreyBody: Story = {
  args: {
    ...defaultProps,
    hasGreyBody: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await tableTest({
      canvasElement,
      expectedRows: mockRows.length,
      expectedColumns: mockColumns.length,
    });

    // Check that header got the grey theme class
    const headers = canvas.getAllByRole('columnheader');
    await expect(headers[0]).toHaveClass(headerStyles.greyTheme);

    // Check that cells got grey body class
    const cells = canvas.getAllByRole('cell');
    await expect(cells[0]).toHaveClass(cellStyles.tableGreyBody);
  },
};