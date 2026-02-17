import React from "react";
import { CheckBox } from "../CheckBox";
import { within, expect } from "storybook/test";
import { Story, testLabels } from "./_CheckBox.default";

export const WithHovered: Story = {
  args: {
    label: testLabels.default,
    hovered: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.findByRole("checkbox");
    // When hovered prop is true, it should behave as if hovered
    // The component uses this to force hover state
    await expect(checkbox).toBeInTheDocument();
  },
};