import React from 'react';
import { Header, HeaderTypes } from '../Header';
import { within, expect } from 'storybook/test';
import { Story } from './_Header.default';

export const CompactDrawerHeader: Story = {
  args: {
    title: 'Compact Drawer Header',
    description: 'This is a compact drawer header with description',
    type: HeaderTypes.compactDrawerHeader,
  },
  render: (args) => (
    <div style={{ width: '90%' }}>
      <Header {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const titleElement = canvas.getByText('Compact Drawer Header');
    const descriptionElement = canvas.getByText('This is a compact drawer header with description');

    await expect(titleElement).toBeInTheDocument();
    await expect(descriptionElement).toBeInTheDocument();
  },
};

export default CompactDrawerHeader;
