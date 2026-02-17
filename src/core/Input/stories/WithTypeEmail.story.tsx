import React from "react";
import { Input } from "../Input";
import { within, expect } from "storybook/test";
import { Story, testValues, selectors } from "./_Input.default";

export const WithTypeEmail: Story = {
  args: {
    type: "email",
    value: testValues.email,
    testId: "email-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByDisplayValue(testValues.email);
    await expect(input).toHaveAttribute("type", "email");
  },
};