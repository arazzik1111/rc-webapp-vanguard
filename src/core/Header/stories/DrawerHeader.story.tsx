import React from 'react';
import { Header, HeaderTypes } from '../Header';
import { within, expect } from 'storybook/test';
import { Story } from './_Header.default';

export const DrawerHeader: Story = {
  args: {
    title: 'Drawer Header',
    description: 'This is a drawer header with description',
    type: HeaderTypes.drawerHeader,
  },
  render: (args) => (
    <div style={{ width: '90%' }}>
      <Header {...args} />
    </div>
  ),
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const titleElement = canvas.getByText('Drawer Header');
    const descriptionElement = canvas.getByText('This is a drawer header with description');

    await expect(titleElement).toBeInTheDocument();
    await expect(descriptionElement).toBeInTheDocument();
  },
};

export default DrawerHeader;
