import React from "react";
import { Input } from "../Input";
import { within, expect } from "storybook/test";
import { Story, testLabels } from "./_Input.default";

export const Required: Story = {
  args: {
    label: testLabels.simple,
    required: true,
    testId: "required-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("required-input");
    await expect(input).toBeInTheDocument();
  },
};