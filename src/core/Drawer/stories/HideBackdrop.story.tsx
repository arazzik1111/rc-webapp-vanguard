import React from "react";
import { Drawer, DrawerProps } from "../Drawer";
import { Story } from "./_Drawer.default";

export const HideBackdrop: Story = {
  args: {
    open: true,
    hideBackdrop: true,
    title: "Drawer Without Backdrop",
    description: "Backdrop is hidden (click-through).",
  } as DrawerProps,
  render: (args) => <Drawer {...args}>Content without backdrop overlay</Drawer>,
};

export default HideBackdrop;
