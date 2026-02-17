import React from "react";
import { CheckBox } from "../CheckBox";
import { within, expect } from "storybook/test";
import { Story, testLabels } from "./_CheckBox.default";

export const SmallSize: Story = {
  args: {
    label: testLabels.default,
    _size: "small",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.findByRole("checkbox");
    await expect(checkbox).toHaveClass("cb-size-small");
  },
};