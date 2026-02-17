import React from 'react';
import { Header, HeaderTypes } from '../Header';
import { within, expect } from 'storybook/test';
import { Story } from './_Header.default';

export const WithoutDescription: Story = {
  args: {
    title: 'Header Without Description',
    type: HeaderTypes.pageHeader,
  },
  render: (args) => (
    <div style={{ width: '90%' }}>
      <Header {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const titleElement = canvas.getByText('Header Without Description');

    await expect(titleElement).toBeInTheDocument();
  },
};

export default WithoutDescription;
