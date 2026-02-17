import React from 'react';
import { Drawer, DrawerProps } from '../Drawer';
import { within, expect } from 'storybook/test';
import { Story, testContent } from './_Drawer.default';

export const CompactWithCloseButtonRightAnchor: Story = {
  args: {
    open: true,
    anchor: 'right',
    showCloseButton: true,
    title: 'Compact Header with Close Button',
    description: 'Drawer with compact header, close button, and right anchor.',
    isHeaderCompact: true,
  } as DrawerProps,
  render: (args) => <Drawer {...args}>{testContent}</Drawer>,
};
