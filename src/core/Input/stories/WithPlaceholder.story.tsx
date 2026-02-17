import React from "react";
import { Input } from "../Input";
import { within, expect } from "storybook/test";
import { Story, testPlaceholders } from "./_Input.default";

export const WithPlaceholder: Story = {
  args: {
    placeholder: testPlaceholders.default,
    testId: "with-placeholder-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(testPlaceholders.default);
    await expect(input).toBeInTheDocument();
  },
};