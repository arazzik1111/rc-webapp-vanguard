import React from "react";
import { Drawer, DrawerProps } from "../Drawer";
import { Story } from "./_Drawer.default";

export const Persistent: Story = {
  args: {
    open: true,
    variant: "persistent",
    title: "Persistent Drawer",
    description: "Drawer stays in the DOM and can be toggled.",
  } as DrawerProps,
  render: (args) => <Drawer {...args}>Persistent variant content</Drawer>,
};

export const Temporary: Story = {
  args: {
    open: true,
    variant: "temporary",
    title: "Temporary Drawer",
    description: "Temporary drawer with backdrop.",
  } as DrawerProps,
  render: (args) => <Drawer {...args}>Temporary variant content</Drawer>,
};

export default Persistent;
