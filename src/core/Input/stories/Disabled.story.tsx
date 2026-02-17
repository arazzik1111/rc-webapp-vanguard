import React from "react";
import { Input } from "../Input";
import { within, expect } from "storybook/test";
import { Story } from "./_Input.default";

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Disabled input",
    testId: "disabled-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByDisplayValue("Disabled input");
    await expect(input).toBeDisabled();
  },
};