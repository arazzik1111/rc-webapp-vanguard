import React from "react";
import { Drawer, DrawerProps } from "../Drawer";
import { Story } from "./_Drawer.default";

export const LeftAnchor: Story = {
  args: {
    open: true,
    anchor: "left",
    title: "Left Anchor",
    description: "Drawer anchored to the left.",
  } as DrawerProps,
  render: (args) => <Drawer {...args}>Left anchored drawer content</Drawer>,
};

export const RightAnchor: Story = {
  args: {
    open: true,
    anchor: "right",
    title: "Right Anchor",
    description: "Drawer anchored to the right.",
  } as DrawerProps,
  render: (args) => <Drawer {...args}>Right anchored drawer content</Drawer>,
};

export const TopAnchor: Story = {
  args: {
    open: true,
    anchor: "top",
    title: "Top Anchor",
    description: "Drawer anchored to the top.",
  } as DrawerProps,
  render: (args) => <Drawer {...args}>Top anchored drawer content</Drawer>,
};

export const BottomAnchor: Story = {
  args: {
    open: true,
    anchor: "bottom",
    title: "Bottom Anchor",
    description: "Drawer anchored to the bottom.",
  } as DrawerProps,
  render: (args) => <Drawer {...args}>Bottom anchored drawer content</Drawer>,
};

export default RightAnchor;
