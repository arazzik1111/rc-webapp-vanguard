import React from 'react';
import { Header, HeaderTypes } from '../Header';
import { within, expect } from 'storybook/test';
import { Story } from './_Header.default';

export const EmptyDescription: Story = {
  args: {
    title: 'Header with Empty Description',
    description: '',
    type: HeaderTypes.drawerHeader,
  },
  render: (args) => (
    <div style={{ width: '90%' }}>
      <Header {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const titleElement = canvas.getByText('Header with Empty Description');

    await expect(titleElement).toBeInTheDocument();
  },
};

export default EmptyDescription;
