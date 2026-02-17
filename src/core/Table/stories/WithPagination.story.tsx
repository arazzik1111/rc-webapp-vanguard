import React, { useState } from 'react';
import { StoryObj } from '@storybook/react';
import { Table } from '../Table';
import { mockColumns, mockRows, tableTest } from './_Table.default';
import { within, expect, userEvent } from 'storybook/test';

export const WithPagination: StoryObj<typeof Table> = {
  render: (args) => {
    const fullCollections = args.data?.collections ?? [];

    const [pagination, setPagination] = useState(args.pagination);

    // start on first page: slice the collections by offset + limit
    const [data, setData] = useState(() => ({
      ...args.data,
      collections: fullCollections.slice(
        args.pagination.offset,
        args.pagination.offset + args.pagination.limit,
      ),
    }));

    const handleNext = (_currentOffset: number) => {
      setPagination((prev) => {
        const nextOffset = Math.min(
          prev.offset + prev.limit,
          fullCollections.length, // clamp
        );

        const nextPageCollections = fullCollections.slice(
          nextOffset,
          nextOffset + prev.limit,
        );

        setData({
          ...args.data,
          collections: nextPageCollections,
        });

        return {
          ...prev,
          offset: nextOffset,
          page: prev.page + 1,
        };
      });
    };

    const handlePrev = (_currentOffset: number) => {
      setPagination((prev) => {
        const prevOffset = Math.max(prev.offset - prev.limit, 0);

        const prevPageCollections = fullCollections.slice(
          prevOffset,
          prevOffset + prev.limit,
        );

        setData({
          ...args.data,
          collections: prevPageCollections,
        });

        return {
          ...prev,
          offset: prevOffset,
          page: Math.max(prev.page - 1, 1),
        };
      });
    };

    return (
      <Table
        {...args}
        data={data}
        pagination={pagination}
        onNextPage={handleNext}
        onPrevPage={handlePrev}
      />
    );
  },
  args: {
    data: {
      columns: mockColumns,
      collections: mockRows,
    },
    pagination: {
      total: mockRows.length,
      limit: 2,
      offset: 0,
      page: 1,
      minPage: 1,
      maxPage: Math.ceil(mockRows.length / 2),
      step: 1,
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Basic structure: 2 rows on first page, correct columns
    await tableTest({
      canvasElement,
      expectedRows: 2, // only 2 rows visible because we slice in render
      expectedColumns: mockColumns.length,
    });

    const table = canvas.getByRole('table');
    const getBodyRows = () => table.querySelectorAll('tbody tr');

    // ---------- PAGE 1 ----------
    let bodyRows = getBodyRows();
    await expect(bodyRows.length).toBe(2);

    // First page should show John + Jane, not Bob
    await expect(canvas.getByText('John Doe')).toBeInTheDocument();
    await expect(canvas.getByText('Jane Smith')).toBeInTheDocument();
    await expect(canvas.queryByText('Bob Johnson')).toBeNull();

    const nextControl = canvas.getByText(/^Next$/i);
    const backControl = canvas.getByText(/^Back$/i);
    await expect(nextControl).toBeInTheDocument();
    await expect(backControl).toBeInTheDocument();

    // ---------- PAGE 2 ----------
    await userEvent.click(nextControl);

    bodyRows = getBodyRows();
    await expect(bodyRows.length).toBe(2);

    // Now Bob + Alice should be visible
    await expect(canvas.getByText('Bob Johnson')).toBeInTheDocument();
    await expect(canvas.getByText('Alice Brown')).toBeInTheDocument();

    // John is no longer on this page
    await expect(canvas.queryByText('John Doe')).toBeNull();

    // ---------- PAGE 3 (last page) ----------
    await userEvent.click(nextControl);

    bodyRows = getBodyRows();
    // Last page has only Charlie
    await expect(bodyRows.length).toBe(1);
    await expect(canvas.getByText('Charlie Wilson')).toBeInTheDocument();

    // Going back once should show Bob + Alice again
    await userEvent.click(backControl);

    bodyRows = getBodyRows();
    await expect(bodyRows.length).toBe(2);
    await expect(canvas.getByText('Bob Johnson')).toBeInTheDocument();
    await expect(canvas.getByText('Alice Brown')).toBeInTheDocument();
  },
};
