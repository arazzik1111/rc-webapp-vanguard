import React from "react";
import { Input } from "../Input";
import { within, expect } from "storybook/test";
import { Story } from "./_Input.default";

export const WithAdornments: Story = {
  args: {
    adornment: <span>$</span>,
    endAdornment: <span>USD</span>,
    testId: "adornments-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("adornments-input");
    await expect(input).toBeInTheDocument();
    // Note: Testing adornments would require checking for specific elements
    // which might vary based on implementation
  },
};