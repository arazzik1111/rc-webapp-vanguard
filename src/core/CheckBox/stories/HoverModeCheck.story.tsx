import React from "react";
import { CheckBox } from "../CheckBox";
import { within, expect, userEvent } from "storybook/test";
import { Story, testLabels } from "./_CheckBox.default";

export const HoverModeCheck: Story = {
  args: {
    label: testLabels.default,
    _hoverMode: "check",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const checkbox = await canvas.findByRole("checkbox");
    const container = checkbox.closest('.vanguard-checkbox-container');

    // Hover mode "check" should have different hover behavior
    const user = userEvent.setup();
    await user.hover(container!);
    await expect(container).toHaveClass('hover-mode-check');
  },
};