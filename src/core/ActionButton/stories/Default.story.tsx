import React from "react";
import { within, expect } from "storybook/test";
import { Story, selectors } from "./_ActionButton.default";

export const Default: Story = {
  args: {
    testId: "ActionButton",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId(selectors.button);
    await expect(button).toBeInTheDocument();
  },
};