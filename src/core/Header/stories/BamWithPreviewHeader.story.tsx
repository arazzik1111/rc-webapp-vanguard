import React from 'react';
import { Header, HeaderTypes } from '../Header';
import { within, expect } from 'storybook/test';
import { Story } from './_Header.default';

export const BamWithPreviewHeader: Story = {
  args: {
    title: 'BAM with Preview Header',
    description: 'This is a BAM with preview header with description',
    type: HeaderTypes.bamWithPreviewHeader,
  },
  render: (args) => (
    <div style={{ width: '90%' }}>
      <Header {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const titleElement = canvas.getByText('BAM with Preview Header');
    const descriptionElement = canvas.getByText('This is a BAM with preview header with description');

    await expect(titleElement).toBeInTheDocument();
    await expect(descriptionElement).toBeInTheDocument();
  },
};

export default BamWithPreviewHeader;
