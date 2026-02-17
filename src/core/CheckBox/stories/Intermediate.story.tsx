import React from "react";
import { CheckBox } from "../CheckBox";
import { within, expect } from "storybook/test";
import { Story, testLabels } from "./_CheckBox.default";

export const Intermediate: Story = {
  args: {
    label: testLabels.intermediate,
    checked: true,
    intermediate: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.findByRole("checkbox");
    await expect(checkbox).toBeChecked();
    // Intermediate state is tested by the args, checkbox remains checked
  },
};