import React from "react";
import { within, expect } from "storybook/test";
import { Story, selectors } from "./_ActionButton.default";
import { IconNames } from "@vanguard/Icon/IconNames";

export const WithCustomIcon: Story = {
  args: {
    testId: "ActionButton",
    icon: IconNames.edit,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByTestId(selectors.button);
    await expect(button).toBeInTheDocument();
  },
};