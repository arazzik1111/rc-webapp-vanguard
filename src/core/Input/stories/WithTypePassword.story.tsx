import React from "react";
import { Input } from "../Input";
import { within, expect } from "storybook/test";
import { Story, testValues, selectors } from "./_Input.default";

export const WithTypePassword: Story = {
  args: {
    type: "password",
    value: testValues.password,
    testId: "password-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByDisplayValue(testValues.password);
    await expect(input).toHaveAttribute("type", "password");
  },
};