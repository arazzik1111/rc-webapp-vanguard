import React from "react";
import { within, expect } from "storybook/test";
import { Story, selectors } from "./_ActionButton.default";

export const WithText: Story = {
  args: {
    testId: "ActionButton",
    children: "Add Item",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId(selectors.button);
    await expect(button).toBeInTheDocument();
    await expect(canvas.getByText("Add Item")).toBeInTheDocument();
  },
};