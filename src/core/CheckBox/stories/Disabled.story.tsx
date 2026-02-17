import React from "react";
import { CheckBox } from "../CheckBox";
import { within, expect, userEvent } from "storybook/test";
import { Story, testLabels } from "./_CheckBox.default";

export const Disabled: Story = {
  args: {
    label: testLabels.disabled,
    disabled: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.findByRole("checkbox");
    await expect(checkbox).toBeDisabled();
  },
};