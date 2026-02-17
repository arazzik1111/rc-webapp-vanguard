import React from "react";
import { CheckBox } from "../CheckBox";
import { within, expect, userEvent } from "storybook/test";
import { Story, testLabels, selectors } from "./_CheckBox.default";

export const Default: Story = {
  args: {
    label: testLabels.default,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.findByRole("checkbox");
    await expect(checkbox).not.toBeChecked();

    const label = await canvas.findByText(testLabels.default);
    const user = userEvent.setup();
    await user.click(label);
    await expect(checkbox).toBeChecked();
  },
};