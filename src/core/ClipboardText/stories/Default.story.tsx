import React from "react";
import { ClipboardText } from "../ClipboardText";
import { within, expect } from "storybook/test";
import { Story, testData } from "./_ClipboardText.default";

export const Default: Story = {
  args: {
    label: testData.label,
    value: testData.value,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(testData.label)).toBeInTheDocument();
    await expect(canvas.getByText(testData.value)).toBeInTheDocument();
  },
};