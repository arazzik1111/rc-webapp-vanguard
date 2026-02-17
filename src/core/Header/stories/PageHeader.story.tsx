import React from 'react';
import { Header, HeaderTypes } from '../Header';
import { within, expect } from 'storybook/test';
import { Story } from './_Header.default';

export const PageHeader: Story = {
  args: {
    title: 'Page Header',
    description: 'This is a page header with description',
    type: HeaderTypes.pageHeader,
  },
  render: (args) => (
    <div style={{ width: '90%' }}>
      <Header {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const titleElement = canvas.getByText('Page Header');
    const descriptionElement = canvas.getByText('This is a page header with description');

    await expect(titleElement).toBeInTheDocument();
    await expect(descriptionElement).toBeInTheDocument();
  },
};

export default PageHeader;
