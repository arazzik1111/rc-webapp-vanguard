import React, {useState} from 'react';
import {Table} from '../Table';
import {
  Story,
  manyRowsData,
} from './_Table.default';
import {within, expect, userEvent} from 'storybook/test';

export const WithShowMoreLess: Story = {
  render: (args) => {
    const fullCollections = args.data?.collections ?? [];
    const total = fullCollections.length;

    const initialLimit = args.pagination?.limit ?? 5;
    const [limit, setLimit] = useState(initialLimit);

    // visible rows are controlled here
    const data = {
      ...args.data,
      collections: fullCollections.slice(0, limit),
    };

    const pagination = {
      ...args.pagination,
      limit,
      total,
    };

    const handleShowMore = () => {
      setLimit(total); // show all rows
    };

    const handleShowLess = () => {
      setLimit(initialLimit); // back to initial number of rows
    };

    return (
      <Table
        {...args}
        data={data}
        pagination={pagination}
        onShowMore={handleShowMore}
        onShowLess={handleShowLess}
      />
    );
  },
  args: {
    data: manyRowsData,
    pagination: {
      total: manyRowsData.collections!.length,
      limit: 5,
      offset: 0,
      page: 1,
      minPage: 1,
      maxPage: 1,
      step: 1,
    },
  },
  play: async ({canvasElement}) => {
    const canvas = within(canvasElement);

    // ---------- INITIAL STATE ----------
    // Wait for lazy TableBody to load first row
    await canvas.findByText('John Doe');

    // First row visible
    await expect(canvas.getByText('John Doe')).toBeInTheDocument();
    // Last row (Henry) not visible yet (limit = 5)
    await expect(canvas.queryByText('Henry Davis')).toBeNull();

    // Show more visible, Show less hidden
    const showMore = canvas.getByText(/Show more/i);
    await expect(showMore).toBeInTheDocument();
    await expect(canvas.queryByText(/Show less/i)).toBeNull();

    // ---------- AFTER "SHOW MORE" ----------
    await userEvent.click(showMore);

    // Wait for last row to appear
    await canvas.findByText('Henry Davis');
    await expect(canvas.getByText('Henry Davis')).toBeInTheDocument();

    // Show less should now be visible, Show more hidden
    const showLess = canvas.getByText(/Show less/i);
    await expect(showLess).toBeInTheDocument();
    await expect(canvas.queryByText(/Show more/i)).toBeNull();

    // ---------- AFTER "SHOW LESS" ----------
    await userEvent.click(showLess);

    // Back to initial state: last row hidden again
    await expect(canvas.queryByText('Henry Davis')).toBeNull();
  },
};
