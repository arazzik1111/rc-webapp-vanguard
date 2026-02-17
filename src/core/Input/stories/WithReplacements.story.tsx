import React from "react";
import { Input } from "../Input";
import { within, expect } from "storybook/test";
import { Story, testLabels, testReplacements } from "./_Input.default";

export const WithReplacements: Story = {
  args: {
    label: testLabels.withReplacements,
    replacements: testReplacements,
    testId: "replacements-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("replacements-input");
    await expect(input).toBeInTheDocument();
  },
};