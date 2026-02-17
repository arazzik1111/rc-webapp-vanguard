import React from "react";
import { Drawer, DrawerProps } from "../Drawer";
import { within, expect } from "storybook/test";
import { Story, testContent } from "./_Drawer.default";

export const Default: Story = {
  args: {
    open: true,
    anchor: "right",
    title: "Default Drawer",
    description: "A simple drawer with text content.",
  } as DrawerProps,
  render: (args) => (
    <div style={{ padding: 24 }}>
      <Drawer {...args}>This is a default drawer content.</Drawer>
    </div>
  ),
};
