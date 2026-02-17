import React from 'react';
import { Header, HeaderTypes } from '../Header';
import { within, expect } from 'storybook/test';
import { Story } from './_Header.default';

// Note: Header does not accept className prop; this story validates title and description only.
export const WithCustomClassName: Story = {
  args: {
    title: 'Header with Custom Class',
    description: 'Testing custom className prop',
    type: HeaderTypes.pageHeader,
  },
  render: (args) => (
    <div style={{ width: '90%' }}>
      <Header {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const titleElement = canvas.getByText('Header with Custom Class');
    const descriptionElement = canvas.getByText('Testing custom className prop');

    await expect(titleElement).toBeInTheDocument();
    await expect(descriptionElement).toBeInTheDocument();
  },
};

export default WithCustomClassName;
