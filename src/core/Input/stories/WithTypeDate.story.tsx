import React from "react";
import { Input } from "../Input";
import { within, expect } from "storybook/test";
import { Story, testValues, selectors } from "./_Input.default";

export const WithTypeDate: Story = {
  args: {
    type: "date",
    value: testValues.date,
    testId: "date-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByDisplayValue(testValues.date);
    await expect(input).toHaveAttribute("type", "date");
  },
};