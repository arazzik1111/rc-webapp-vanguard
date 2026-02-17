import React from "react";
import { Input } from "../Input";
import { within, expect } from "storybook/test";
import { Story, testValues } from "./_Input.default";

export const WithValue: Story = {
  args: {
    value: testValues.text,
    testId: "with-value-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByDisplayValue(testValues.text);
    await expect(input).toBeInTheDocument();
  },
};