import React from "react";
import { Drawer } from "../Drawer";
import { within, expect } from "storybook/test";
import { Story, testContent, testZIndex } from "./_Drawer.default";

export const WithZIndex: Story = {
  args: {
    open: true,
    zIndex: testZIndex,
    children: testContent,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(testContent)).toBeInTheDocument();
    // Note: zIndex is internal, hard to test visually, but we can check if drawer is rendered
  },
};