import React from "react";
import { within, expect } from "storybook/test";
import { Story, selectors } from "./_TabsCustomScroll.default";

export const Default: Story = {
  args: {
    testId: "action",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Test that the scroll button renders successfully
    const scrollButton = canvas.getByTestId('action');
    await expect(scrollButton).toBeInTheDocument();
  },
};