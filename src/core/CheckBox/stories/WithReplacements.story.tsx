import React from "react";
import { CheckBox } from "../CheckBox";
import { within, expect } from "storybook/test";
import { Story, testLabels } from "./_CheckBox.default";

export const WithReplacements: Story = {
  args: {
    label: testLabels.default,
    replacements: { "Checkbox": "Box" },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = await canvas.findByText(testLabels.default);
    await expect(label).toBeInTheDocument();
  },
};