import React from "react";
import { Collapse } from "../Collapse";
import { within, expect } from "storybook/test";
import { Story, testData } from "./_Collapse.default";

export const Closed: Story = {
  args: {
    isOpen: false,
    children: testData.children,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // MUI Collapse keeps content in DOM when closed, so check it's there
    await expect(canvas.getByText("Collapsible content")).toBeInTheDocument();
  },
};