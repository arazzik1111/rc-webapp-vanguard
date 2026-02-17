import React from 'react';
import { Header, HeaderTypes } from '../Header';
import { within, expect } from 'storybook/test';
import { Story } from './_Header.default';

export const CompactSectionHeader: Story = {
  args: {
    title: 'Compact Section Header',
    description: 'This is a compact section header with description',
    type: HeaderTypes.compactSectionHeader,
  },
  render: (args) => (
    <div style={{ width: '90%' }}>
      <Header {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const titleElement = canvas.getByText('Compact Section Header');
    const descriptionElement = canvas.getByText('This is a compact section header with description');

    await expect(titleElement).toBeInTheDocument();
    await expect(descriptionElement).toBeInTheDocument();
  },
};

export default CompactSectionHeader;
