import React from 'react';
import { Header, HeaderTypes } from '../Header';
import { within, expect } from 'storybook/test';
import { Story } from './_Header.default';

export const LongTitleAndDescription: Story = {
  args: {
    title: 'This is a Very Long Header Title That Should Still Render Properly and Test Text Wrapping Behavior',
    description:
      'This is a very long description that tests how the component handles longer text content and ensures that the layout remains intact even with extensive content that might wrap to multiple lines.',
    type: HeaderTypes.bamWithPreviewHeader,
  },
  render: (args) => (
    <div style={{ width: '90%' }}>
      <Header {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const titleElement = canvas.getByText(
      'This is a Very Long Header Title That Should Still Render Properly and Test Text Wrapping Behavior',
    );
    const descriptionElement = canvas.getByText(
      'This is a very long description that tests how the component handles longer text content and ensures that the layout remains intact even with extensive content that might wrap to multiple lines.',
    );

    await expect(titleElement).toBeInTheDocument();
    await expect(descriptionElement).toBeInTheDocument();
  },
};

export default LongTitleAndDescription;
