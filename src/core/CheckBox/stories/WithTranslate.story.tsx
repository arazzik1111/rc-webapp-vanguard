import React from "react";
import { CheckBox } from "../CheckBox";
import { within, expect } from "storybook/test";
import { Story, testLabels } from "./_CheckBox.default";

export const WithTranslate: Story = {
  args: {
    label: testLabels.default,
    translate: true,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const label = await canvas.findByText(testLabels.default);
    await expect(label).toBeInTheDocument();
    // Translation would be handled by the translation system, hard to test directly
  },
};