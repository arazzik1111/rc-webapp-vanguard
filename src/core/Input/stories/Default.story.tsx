import React from "react";
import { Input } from "../Input";
import { within, expect } from "storybook/test";
import { Story, selectors } from "./_Input.default";

export const Default: Story = {
  args: {
    testId: "default-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("default-input");
    await expect(input).toBeInTheDocument();
  },
};