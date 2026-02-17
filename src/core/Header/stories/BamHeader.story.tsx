import React from 'react';
import { Header, HeaderTypes } from '../Header';
import { within, expect } from 'storybook/test';
import { Story } from './_Header.default';

export const BamHeader: Story = {
  args: {
    title: 'BAM Header',
    description: 'This is a BAM header with description',
    type: HeaderTypes.bamHeader,
  },
  render: (args) => (
    <div style={{ width: '90%' }}>
      <Header {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const titleElement = canvas.getByText('BAM Header');
    const descriptionElement = canvas.getByText('This is a BAM header with description');

    await expect(titleElement).toBeInTheDocument();
    await expect(descriptionElement).toBeInTheDocument();
  },
};

export default BamHeader;
