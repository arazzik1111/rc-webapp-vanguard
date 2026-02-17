import React from "react";
import { Input } from "../Input";
import { within, expect } from "storybook/test";
import { Story, testValues, selectors } from "./_Input.default";

export const WithTypeNumber: Story = {
  args: {
    type: "number",
    value: testValues.number,
    testId: "number-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByDisplayValue(testValues.number.toString());
    await expect(input).toHaveAttribute("type", "number");
  },
};