import React from "react";
import { Input } from "../Input";
import { within, expect } from "storybook/test";
import { Story } from "./_Input.default";

export const WithInfoText: Story = {
  args: {
    infoText: "This is helpful information",
    testId: "info-text-input",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByTestId("info-text-input");
    const infoText = canvas.getByText("This is helpful information");
    await expect(input).toBeInTheDocument();
    await expect(infoText).toBeInTheDocument();
  },
};