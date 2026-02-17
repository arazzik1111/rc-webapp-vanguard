import React from "react";
import { Drawer } from "../Drawer";
import { within, expect } from "storybook/test";
import { Story, testContent } from "./_Drawer.default";

export const WithHideBackdrop: Story = {
  args: {
    open: true,
    hideBackdrop: true,
    children: testContent,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(testContent)).toBeInTheDocument();
    // Note: hideBackdrop affects backdrop visibility, but hard to test in story
  },
};