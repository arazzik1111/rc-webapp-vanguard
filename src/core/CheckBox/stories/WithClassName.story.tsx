import React from "react";
import { CheckBox } from "../CheckBox";
import { within, expect } from "storybook/test";
import { Story, testLabels } from "./_CheckBox.default";

export const WithClassName: Story = {
  args: {
    label: testLabels.default,
    className: "custom-checkbox-class",
    testId: "class-checkbox",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const container = await canvas.findByTestId("class-checkbox");
    await expect(container).toHaveClass("custom-checkbox-class");
  },
};