import React from "react";
import { Drawer, DrawerProps } from "../Drawer";
import { within, expect } from "storybook/test";
import { Story, testContent } from "./_Drawer.default";

export const WithCloseButton: Story = {
  args: {
    open: true,
    showCloseButton: true,
    title: "Drawer With Close Button",
    description: "Has a close button in the header.",
  } as DrawerProps,
  render: (args) => <Drawer {...args}>Try clicking the close button.</Drawer>,
};
