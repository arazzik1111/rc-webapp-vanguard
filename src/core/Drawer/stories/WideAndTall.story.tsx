import React from 'react';
import { Drawer, DrawerProps } from '../Drawer';
import { Story } from './_Drawer.default';
import { WideContent, TallContent } from './_Drawer.default.tsx';

export const WithWideContent: Story = {
  args: {
    open: true,
    anchor: 'right',
    title: 'Drawer With Wide Content',
    description: 'Demonstrates wide child layout inside the drawer.',
  } as DrawerProps,
  render: (args) => (
    <Drawer {...args}>
      <WideContent />
    </Drawer>
  ),
};

export const WithTallContent: Story = {
  args: {
    open: true,
    anchor: 'right',
    title: 'Drawer With Tall Content',
    description: 'Demonstrates tall, scrollable child content.',
  } as DrawerProps,
  render: (args) => (
    <Drawer {...args}>
      <TallContent />
    </Drawer>
  ),
};

export default WithWideContent;
