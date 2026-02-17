import React from "react";
import { within, expect } from "storybook/test";
import { Story, selectors } from "./_ActionButton.default";

export const Disabled: Story = {
  args: {
    testId: "ActionButton",
    disabled: true,
    children: "Disabled Button",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId(selectors.button + "_button");
    await expect(button).toBeInTheDocument();
    await expect(button).toBeDisabled();
  },
};