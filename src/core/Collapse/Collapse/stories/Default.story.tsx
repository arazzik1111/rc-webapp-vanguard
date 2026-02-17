import React from "react";
import { Collapse } from "../Collapse";
import { within, expect } from "storybook/test";
import { Story, testData } from "./_Collapse.default";

export const Default: Story = {
  args: {
    isOpen: true,
    children: testData.children,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText("Collapsible content")).toBeInTheDocument();
  },
};