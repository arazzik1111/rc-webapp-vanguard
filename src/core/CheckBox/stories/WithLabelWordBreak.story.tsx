import React from "react";
import { CheckBox } from "../CheckBox";
import { within, expect } from "storybook/test";
import { Story, testLabels } from "./_CheckBox.default";

export const WithLabelWordBreak: Story = {
  args: {
    label: "Very long label that should break words if configured",
    labelWordBreak: "break-all",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = await canvas.findByText("Very long label that should break words if configured");
    const computedStyle = window.getComputedStyle(label);
    await expect(computedStyle.wordBreak).toBe("break-all");
  },
};