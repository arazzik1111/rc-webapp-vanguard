import React from 'react';
import { Story, defaultProps, mockColumns, mockRows, tableTest } from './_Table.default';
import { TableOptionsProps } from '../Table';
import { within, expect } from 'storybook/test';

const options: TableOptionsProps = {
  prefixForColumn: [
    {
      columnAlias: 'name',
      value: ((value: string, row: any) => (<span data-testid="name-prefix">{row.role}:</span>)) as any,
      valueParam: 'name',
    },
  ],
  postfixForColumn: [
    {
      columnAlias: 'status',
      value: <span data-testid="status-postfix">⭐</span>,
    },
  ],
};

export const WithPrefixAndPostfix: Story = {
  args: {
    ...defaultProps,
    data: {
      columns: mockColumns,
      collections: mockRows,
      options,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    await tableTest({
      canvasElement,
      expectedRows: mockRows.length,
      expectedColumns: mockColumns.length,
    });

    const namePrefix = canvas.getAllByTestId('name-prefix')[0];
    await expect(namePrefix).toBeInTheDocument();
    await expect(namePrefix).toHaveTextContent(/Developer:/i);

    const statusPostfix = canvas.getAllByTestId('status-postfix')[0];
    await expect(statusPostfix).toBeInTheDocument();
  },
};
